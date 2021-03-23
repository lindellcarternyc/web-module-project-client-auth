import { useHistory } from 'react-router'

import CreateFriendForm from '../forms/CreateFriendForm'

import { useAsyncData } from '../hooks/use-async-data'

import * as api from '../api'

const CreateFriendPage = (props) => {
  const history = useHistory()

  const onCreateFriend = async (friendDetails) => {
    try {
      await api.createFriend(friendDetails)
      history.push('/friends-list')
    } catch (err) {
      throw err
    }
  }

  const [{ isLoading, error }, handleCreateFriend] = useAsyncData(onCreateFriend)

  return (
    <div>
      <h2>Add a Friend</h2>
      <CreateFriendForm onSubmit={handleCreateFriend}/>
    </div>
  )
}

export default CreateFriendPage