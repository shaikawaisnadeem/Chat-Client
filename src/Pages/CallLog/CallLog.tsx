import IncomingCall from '../../Components/Common/IncomingCall/IncomingCall';
import OutgoingCall from '../../Components/Common/OutgoingCall/OutgoingCall';
import './CallLog.css';
import React from 'react'

const CallLog = () => {
  return (
    <div className='calls-main-div'>
      <div className='calls-head-div'>
        <h1 >Calls</h1>
      </div>
      <div className='calls-recent-div'>
        <IncomingCall/>
        <OutgoingCall/>
        <IncomingCall/>
        <OutgoingCall/>
        <IncomingCall/>
        <OutgoingCall/>
      </div>
    </div>
  )
}

export default CallLog