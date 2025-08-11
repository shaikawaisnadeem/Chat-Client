import './Favourite.css';
import React from 'react';
import { FaUser } from "react-icons/fa6";
import { Contact } from '../../Common/Contact/Contact';

const Favourite = () => {
  return (
    <div className='favourite-contact-section'>
        <h2 className='favourite-section-head'>FAVOURITES</h2>
        <div className='favourtie-contact'>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
        </div>
    </div>
  )
}

export default Favourite