import './GroupChat.css';
import React from 'react';
import AddBtn from '../../Common/AddBtn/AddBtn';
import ChannelTag from '../../Common/ChannelTag/ChannelTag';

const GroupChat = () => {
    return (
        <div className='group-messages-main'>
            <div className='group-msg-navbar'>
                <h1 className='group-msg-head'>CHANNELS</h1>
                <AddBtn />
            </div>
            <div className='group-div'>
                <ChannelTag/>
                <ChannelTag/>
                <ChannelTag/>
                <ChannelTag/>
                <ChannelTag/>
            </div>
        </div>
    )
}

export default GroupChat