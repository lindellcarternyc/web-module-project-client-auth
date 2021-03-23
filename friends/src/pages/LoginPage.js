import LoginForm from '../forms/LoginForm'

import * as api from '../api'
import { useState } from 'react'
import { useHistory } from 'react-router'

const LoginPage = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const history = useHistory()

  const onLogin = async (values) => {
    setIsLoading(true)
    setError(null)

    try {
      const user = await api.login(values)
      console.log(user)
      setIsLoading(false)
      history.push('/friends-list')

    } catch (err) {
      const errorMessage = err.response.data.error
      setIsLoading(false)
      setError(errorMessage)
    }
  }

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