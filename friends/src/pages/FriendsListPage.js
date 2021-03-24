import { useState } from 'react'
import * as api from '../api'
import { useFetchOnMount } from '../hooks/use-fetch-on-mount'

import FriendsList from '../components/FriendsList'
import DeleteModal from '../components/DeleteModal'
import { useHistory } from 'react-router'

const FriendsListPage = (props) => {
  const [{ data: friends, isLoading, error }, { refetch }] = useFetchOnMount([], api.getFriends)
  const [toDelete, setToDelete] = useState(null)
  const history = useHistory()

  const onClickDelete = (id) => {
    setToDelete(id)
  }

  const confirmDelete = (id) => {
    api.deleteFriend(id)
      .then(_ => {
        setToDelete(null)
        refetch()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onUpdate = (id) => {
    history.push(`/update-friend/${id}`)
  }

  const cancelDelete = () => setToDelete(null)

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
        <FriendsList friends={friends} onDelete={onClickDelete} onUpdate={onUpdate}/>
      )
    }
  }
  return (
    <div>
      <DeleteModal 
        isOpen={toDelete !== null} 
        title="Delete this friend?"
        confirm={{
          handler: () => {
            confirmDelete(toDelete)
          }
        }}
        cancel={{
          handler: cancelDelete
        }}
      />
      <h2>Friends List</h2>
      <div>
        {render()}
      </div>
    </div>
  )
}

export default FriendsListPage