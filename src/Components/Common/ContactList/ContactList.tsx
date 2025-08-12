import './ContactList.css';
import React from 'react'
import { BiUser } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ContactList = () => {
    return (
        <div className='contact-list-div'>  
            <div className='contact-wrapper-call'>
                <div className='contact-profile-wrapper'>
                <BiUser size={25} color='#918787ff' />
                </div>
                <h1 className='contact-name'>Andreona Swartzringa</h1>
            </div>
            <div className='icon-wrapper-three'>
            <HiOutlineDotsVertical size={18} color='#51b572ff' />
            </div>
        </div>
    )
}

export default ContactList