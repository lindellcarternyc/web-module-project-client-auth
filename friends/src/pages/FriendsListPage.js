import { useEffect, useState } from 'react'

import * as api from '../api'

const FriendsListPage = (props) => {
  const [friends, setFriends] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  console.log(friends)
  useEffect(() => {
    setIsLoading(true)
    api.getFriends()
      .then(data => {
        setFriends(data)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        setError(err)
      })  
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error !== null) {
    return <p>{JSON.stringify(error)}</p>
  }

  return (
    <div>
      <h2>Friends List</h2>
      <div>
        {friends.map(f => {
          return <p key={f.id}>{f.name}</p>
        })}
      </div>
    </div>
  )
}

export default FriendsListPage