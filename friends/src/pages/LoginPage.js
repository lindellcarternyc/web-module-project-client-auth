import LoginForm from '../forms/LoginForm'

const LoginPage = (props) => {
  const onLogin = (values) => {
    console.log('onLogin', values)

  }
  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onLogin}/>
    </div>
  )
}

export default LoginPage