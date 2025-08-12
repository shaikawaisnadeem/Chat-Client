import './IncomingCall.css';
import React from 'react'
import { BiUser } from "react-icons/bi";
import { MdPhoneInTalk } from "react-icons/md";

const IncomingCall = () => {
  return (
     <div className="chat-item">
        <div className='profile-wrapper-call'>
            <BiUser size={25} color='#918787ff'/>
        </div>
      <div className="chat-info">
        <div className="chat-name">Rambabu</div>
        <div className="chat-date">5 May, 2016, 06:21:6...</div>
      </div>

      <div className="chat-time">5:37</div>

      <div className="chat-icon">
            <MdPhoneInTalk color='#42925d' size={25}/>
      </div>
    </div>
  )
}

export default IncomingCall