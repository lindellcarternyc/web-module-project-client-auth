import * as api from '../api'
import { useFetchOnMount } from '../hooks/use-fetch-on-mount'
import { Link } from 'react-router-dom'

const FriendsListPage = (props) => {
  const [{ data: friends, isLoading, error }] = useFetchOnMount([], api.getFriends)

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
      return friends.map(f => {
        return <p key={f.id}>
          <Link to={`/friends-list/${f.id}`}>{f.name}</Link>
        </p>
      })
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