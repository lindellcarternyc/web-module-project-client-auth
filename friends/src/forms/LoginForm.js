import * as yup from 'yup'
import { useForm } from '../hooks/use-form'

const INITIAL_LOGIN_FORM_STATE = {
  username: '',
  password: ''
}

const LoginForm = (props) => {
  const { onSubmit } = props
  const [{ values, isValid }, { handleChange, handleSubmit }] = useForm({
    initialValues: INITIAL_LOGIN_FORM_STATE,
    onSubmit,
    schema: yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required()
    })
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name: </label>
        <input id="username" name="username" value={values.username} onChange={handleChange} />
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" value={values.password} type="password" onChange={handleChange} />
        <br />
        <button disabled={!isValid} type="submit" onClick={handleSubmit}>Log In</button>
      </form>
    </div>
  )
}

export default LoginForm