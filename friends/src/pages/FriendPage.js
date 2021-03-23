import { useFetchOnMount } from '../hooks/use-fetch-on-mount'
import *  as api from '../api'
import { useParams } from 'react-router'

const FriendPage = (props) => {
  const { friendId } = useParams()
  
  const [{ data: friend, isLoading, error }] = useFetchOnMount(null, api.getFriend, friendId)

  const render = () => {
    if (isLoading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>{JSON.stringify(error)}</p>
    } else if (friend !== null) {
      return <p>{JSON.stringify(friend)}</p>
    }
    return null
  }

  return (
    <div>
      <h2>Friend Page</h2>
      {render()}
    </div>
  )
}

export default FriendPage