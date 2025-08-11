import './SideNavbarChats.css';
import React from 'react';
import Favourite from '../Favourite/Favourite';
import AddBtn from '../../Common/AddBtn/AddBtn';
import DirectMessages from '../DirectMessages/DirectMessages';
import GroupChat from '../GroupChat/GroupChat';

const SideNavbarChats = () => {
    return (
        <div className='chats-section'>
            <div className='main-head'>
                <h1>Chats</h1>
                <AddBtn />
            </div>
            <div className='search-input'>
                <input 
                    type='text' 
                    placeholder='Search here...' 
                    className='input-search-bar' 
                />
            </div>
            <div className='recent-text'>
                <Favourite />
                <DirectMessages />
                <GroupChat />
            </div>
        </div>
    )
}

export default SideNavbarChats;
