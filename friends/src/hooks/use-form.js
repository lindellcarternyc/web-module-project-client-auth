import { useEffect, useState } from 'react'
import * as yup from 'yup'

const getTouched = (initialValues) => {
  const touched = Object.keys(initialValues)
    .reduce((res, key) => {
      return {
        ...res,
        [key]: false
      }
    }, {})

  return touched
}

const getErrors = (initialValues) => {
  return Object.keys(initialValues)
    .reduce((errors, key) => {
      return {
        ...errors,
        [key]: null
      }
    }, {})
}

export const useForm = ({ initialValues, onSubmit, schema }) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(getErrors(initialValues))
  const [touched, setTouched] = useState(getTouched(initialValues))
  const [isValid, setIsValid] = useState(false)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setTouched({
      ...touched,
      [name]: true
    })

    const updatedValues = {
      ...values,
      [name]: value
    }

    if (schema) {
      yup.reach(schema, name, updatedValues)
      .validate(value)
      .then(_ => {
        setErrors({
          ...errors,
          [name]: null
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.message
        })
      })
    }
    return setValues(updatedValues)
  }

  useEffect(() => {
    if (!schema) {
      return setIsValid(true)
    }
  
    schema.validate(values)
      .then(_ => {
        setIsValid(true)
      })
      .catch(err => {
        console.dir(err)
      })
  }, [values, schema])

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (isValid) {
      onSubmit(values)
      setValues(initialValues)
    }
  }

  return [
    { values, isValid, errors, touched },
    { handleChange, handleSubmit }
  ]
}