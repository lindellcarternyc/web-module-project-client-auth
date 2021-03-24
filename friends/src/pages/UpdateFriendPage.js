import { useHistory, useParams } from 'react-router-dom'
import { useFetchOnMount } from '../hooks/use-fetch-on-mount'

import * as api from '../api'
import UpdateFriendForm from '../forms/UpdateFriendForm'

const UpdateFriendPage = (props) => {
  const { friendId } = useParams()
  const [{ data, isLoading, error }] = useFetchOnMount(null, api.getFriend, friendId)
  const history = useHistory()

  const onUpdateFriend = (updatedFriendData) => {
    api.updateFriend(updatedFriendData)
      .then(res => {
        history.push('/friends-list')
      })
      .catch(err => {
        console.log(err)
      })
  }

  const render = () => {
    if (isLoading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>{JSON.stringify(error)}</p>
    } else if (data) {
      return <UpdateFriendForm updateFriend={data} onSubmit={onUpdateFriend} />
    }
  }

  return (
    <div>
      <h2>Update Friend</h2>
      {render()}
    </div>
  )
}

export default UpdateFriendPage