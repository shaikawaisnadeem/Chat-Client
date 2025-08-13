import './OutgoingCall.css';
import { BiUser } from "react-icons/bi";
import { MdPhoneCallback } from "react-icons/md";

const OutgoingCall = () => {
  return (
    <div className="chat-item">
            <div className='profile-wrapper-call'>
                <BiUser size={25} color='#918787ff'/>
            </div>
          <div className="chat-info">
            <div className="chat-name">Dheeraj Rathod</div>
            <div className="chat-date">5 May, 2016, 06:21:6...</div>
          </div>
    
          <div className="chat-time">5:37</div>
    
          <div className="chat-icon">
                <MdPhoneCallback color='#e36b50ff' size={25}/>
          </div>
        </div>
  )
}

export default OutgoingCall