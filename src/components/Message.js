import React from 'react'

const Message = ({message, type}) => {
  const classTypes = 'Message ' + type
  return (
    <div className={classTypes}>{message}</div>
  )
}
export default Message