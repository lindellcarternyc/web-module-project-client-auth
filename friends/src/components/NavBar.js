import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const Navbar = (props) => {
  const userContextValue = useContext(UserContext)
  const history = useHistory()

  const onLogout = () => {
    console.log('onLogout')
    userContextValue.setUser(null)
    window.localStorage.removeItem('friendsListToken')
    history.push('/login')
  }

  const render = () => {
    const isAuthenticated = userContextValue.user !== null

    if (isAuthenticated) {
      return (
        <>
          <Link to="/friends-list">Friends</Link>
          <Link to="/create-friend">Add Friend</Link>
          <button onClick={onLogout}>Log Out</button>
        </>
      )
    }

    return (
      <Link to="/login">Login</Link>
    )
  }
  return (
    <nav>
        {render()}
    </nav>
  )
}

export default Navbar