import './DropdownContact.css';
import React from 'react'
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineBlock } from "react-icons/md";

const DropdownContact = () => {
  return (
    <div className='dropdown-contact-div'>
        <div className='edit-div'>
            <p>Edit</p>
            <MdOutlineEdit size={17}/>
        </div>
        <div className='delete-div'>
            <p>Delete</p>
            <MdOutlineDelete className='contact-delete-icon'/>
        </div>
        <div className='block-div'>
            <p>Block</p>
            <MdOutlineBlock className='contact-block-icon'/>
        </div>
    </div>

  )
}

export default DropdownContact