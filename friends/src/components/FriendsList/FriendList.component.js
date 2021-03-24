import { Link } from 'react-router-dom'

const FriendListComponent = (props) => {
  const { friends, onDelete, onUpdate } = props

  const onClickDelete = (id) => (evt) => {
    onDelete(id)
  }

  const onClickUpdate = (id) => _ => {
    onUpdate(id)
  }
  
  return (
    <div>
      {friends.map(fr => {
        return (
          <div key={fr.id}>
            <Link to={`/friends-list/${fr.id}`}>{fr.name}</Link>
            <button onClick={onClickUpdate(fr.id)}>Update Friend</button>
            <button onClick={onClickDelete(fr.id)}>Delete Friend</button>
          </div>
        )
      })}
    </div>
  )
}

export default FriendListComponent