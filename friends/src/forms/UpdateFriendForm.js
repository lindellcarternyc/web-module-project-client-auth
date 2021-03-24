import * as yup from 'yup'

import { useForm } from '../hooks/use-form'

const UpdateFriendForm = ({ onSubmit, updateFriend }) => {
  const [{ values, isValid }, { handleChange, handleSubmit }] = useForm({
    initialValues: updateFriend,
    onSubmit: values => {
      onSubmit(values)
    },
    schema: yup.object().shape({
      name: yup.string().required().min('5'),
      age: yup.number().min(5),
      email: yup.string().required().email()
    })
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input 
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" id="age" name="age" value={values.age} onChange={handleChange}/>
        <br />
        <label htmlFor="email">Email: </label>
        <input 
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <br />
        <button type="submit" disabled={!isValid} onClick={handleSubmit}>Update Friend</button>
      </form>
    </div>
  )
}

export default UpdateFriendForm