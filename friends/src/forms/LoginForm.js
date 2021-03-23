import { useState } from 'react'

const INITIAL_LOGIN_FORM_STATE = {
  username: '',
  password: ''
}

const useLoginForm = ({ onSubmit }) => {
  const [ values, setValues ] = useState(INITIAL_LOGIN_FORM_STATE)

  const handleChange = (evt) => {
    const { name, value } = evt.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    onSubmit(values)
    setValues(INITIAL_LOGIN_FORM_STATE)
  }

  return [
    { values },
    { handleSubmit,
      handleChange
    }
  ]
}

const LoginForm = (props) => {
  const { onSubmit } = props
  const [{ values }, { handleChange, handleSubmit }] = useLoginForm({ onSubmit })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input id="username" name="username" value={values.username} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" value={values.password} type="password" onChange={handleChange} />
        <br />
        <button type="submit" onClick={handleSubmit}>Log In</button>
      </form>
    </div>
  )
}

export default LoginForm