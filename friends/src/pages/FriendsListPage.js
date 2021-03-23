import * as api from '../api'
import { useFetchOnMount } from '../hooks/use-fetch-on-mount'

import FriendsList from '../components/FriendsList'

const FriendsListPage = (props) => {
  const [{ data: friends, isLoading, error }] = useFetchOnMount([], api.getFriends)

  const deleteFriend = (id) => {
    console.log('FriendsListPage:deleteFriend:id', id)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error !== null) {
    return <p>{JSON.stringify(error)}</p>
  }

  const render = () => {
    if (isLoading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>{JSON.stringify(error)}</p>
    } else if (friends !== null) {
      return (
        <FriendsList friends={friends} onDelete={deleteFriend} />
      )
    }
  }
  return (
    <div>
      <h2>Friends List</h2>
      <div>
        {render()}
      </div>
    </div>
  )
}

export default FriendsListPage