import { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

export default UserContext

export const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState(null)

  useEffect(() => {
    const token = window.localStorage.getItem('friendsListToken')
    if (token) {
      return setUserState(true)
    }
  }, [])

  const setUser = (user) => {
    setUserState(user)
  }

  return (
    <UserContext.Provider value={{
      user: userState,
      setUser
    }}>
      {children}
    </UserContext.Provider>
  )
}