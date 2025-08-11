import './SideNavbarChats.css';
import React from 'react';
import Favourite from '../Favourite/Favourite';
import AddBtn from '../../Common/AddBtn/AddBtn';
import DirectMessages from '../DirectMessages/DirectMessages';

const SideNavbarChats = () => {
    return (
        <div className='chats-section'>
            <div className='main-head'>
                <h1>Chats</h1>
                <AddBtn/>   
            </div>
            <div className='search-input'>
                <input type='text' placeholder='Seach here..' className='input-seach-bar'/>
            </div>
            <Favourite/>
            <DirectMessages/>
        </div>
    )
}

export default SideNavbarChats