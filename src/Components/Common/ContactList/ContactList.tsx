import './ContactList.css';
import React, { useState } from 'react';
import { BiUser } from "react-icons/bi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoClose } from "react-icons/io5"; 
import DropdownContact from '../DropdownContact/DropdownContact';

const ContactList = () => {
    const [dropContact, setDropContact] = useState(false);

    const toggleDropdown = () => {
        setDropContact(prev => !prev);
    };
    console.log(dropContact)

    return (
        <div className='contact-list-div'>
            <div className='contact-wrapper-call'>
                <div className='contact-profile-wrapper'>
                    <BiUser size={25} color='#918787ff' />
                </div>
                <h1 className='contact-name'>Andreona Swartzringa</h1>
            </div>
            <div className='icon-wrapper-three'>
                {dropContact ? (
                    <IoClose size={20} color='#E53935' className='close-icon' onClick={toggleDropdown} />
                ) : (
                    <HiOutlineDotsVertical size={18} color='#51b572ff' onClick={toggleDropdown} />
                )}
                {dropContact && (
                    <div className="dropdown-contact">  
                        <DropdownContact />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactList;
