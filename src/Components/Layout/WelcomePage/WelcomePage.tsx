import './WelcomePage.css';
import React from 'react';
import { BsChatRightTextFill } from "react-icons/bs";

const WelcomePage = () => {
    return (
        <div className='welcome-main-page'>
            <div className='welcome-section'>
                <div className='logo-wrapper-welcome'>
                    <BsChatRightTextFill className='home-icon' size={50} color='#2aa152ff' />
                </div>
                <div className='welcome-details'>
                    <h1 className='welcome-head'>Welcome to Real Chat App</h1>
                    <p className='welcome-para'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. cum sociis natoque penatibus et</p>
                    <button className='get-started-btn'>Get Started</button>

                </div>
            </div>
        </div>
    )
}

export default WelcomePage