import { Link } from 'react-router-dom'

const FriendListComponent = (props) => {
  const { friends, onDelete } = props

  const onClickDelete = (id) => (evt) => {
    console.log('onClickDelete:id', id)
    onDelete(id)
  }
  
  return (
    <div>
      {friends.map(fr => {
        return (
          <div key={fr.id}>
            <Link to={`/friends-list/${fr.id}`}>{fr.name}</Link>
            <button onClick={onClickDelete(fr.id)}>Delete Friend</button>
          </div>
        )
      })}
    </div>
  )
}

export default FriendListComponent