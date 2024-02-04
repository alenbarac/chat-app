import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src="" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>message text</p>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Message
