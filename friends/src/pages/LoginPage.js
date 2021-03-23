import { useHistory } from 'react-router'

import * as api from '../api'
import { useAsyncData } from '../hooks/use-async-data'

import LoginForm from '../forms/LoginForm'

const LoginPage = (props) => {
  const history = useHistory()
  const [{ isLoading, error }, onLogin] = useAsyncData(async (values) => {
    try {
      await api.login(values)
      history.push('/friends-list')
    } catch (err) {
      const errorMessage = err.response.data.error
      throw errorMessage
    }
  })

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={onLogin}/>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default LoginPage