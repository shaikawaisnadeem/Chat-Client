import './Sidenavbar.css';
import React from 'react';
import { BsChatRightTextFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { MdOutlineBookmark } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi2";


const Sidenavbar = () => {
  return (
    <div className='icons-wrapper'>
        <div className='toggle-icons-wrapper'>
          <BsChatRightTextFill className='home-icon' size={30} color='#2aa152ff' />
          <IoMdChatboxes size={30} className='chat-icon'/>
          <BiSolidUserDetail size={30} className='contact-icon'/>
          <IoMdCall size={30} className='call-icon'/>
          <MdOutlineBookmark size={30} className='bookmark-icon'/>
          <MdSettings size={30} className='settings-icon'/>
        </div>
        <div className='profile-icons-wrapper'>
          <HiOutlineMoon size={30} className='theme-icon'/>
          <FaUserLarge size={30} className='user-icon'/>
          
        </div>
    </div>
  )
}

export default Sidenavbar