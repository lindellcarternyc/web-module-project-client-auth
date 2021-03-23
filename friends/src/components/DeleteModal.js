const DeleteModal = (props) => {
  const { isOpen, title, confirm, cancel } = props
  
  if (!isOpen) {
    return null
  }

  return (
    <div>
      <h4>{title}</h4>
      <button onClick={() => confirm.handler()}>Confirm</button>
      <button onClick={() => cancel.handler()}>Cancel</button>
    </div>
  )
}

export default DeleteModal