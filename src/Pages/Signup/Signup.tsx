import './Signup.css';
import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <div className='signup-main-div'>
      <div className='signup-image-overlay'>
        <img
          src='https://doot-light.react.themesbrand.com/static/media/auth-img.9302755e73810f6c27d2.png'
          alt='Signup Illustration'
        />
      </div>

      <form className='signup-page-form' onSubmit={handleSubmit}>
        <div className='signup-header'>
          <h1>Create Account</h1>
          <p>Sign up to get started with We Chat.</p>
        </div>

        <div className='signup-input-group'>
          <label htmlFor='nameId'>Full Name</label>
          <input id='nameId' type='text' placeholder='John Doe' required />
        </div>

        <div className='signup-input-group'>
          <label htmlFor='emailId'>Email</label>
          <input id='emailId' type='email' placeholder='email@domain.com' required />
        </div>

        <div className='signup-input-group'>
          <label htmlFor='passwordId'>Password</label>
          <div className='signup-password-input'>
            <input
              id='passwordId'
              type={showPassword ? 'text' : 'password'}
              placeholder='..........'
              required
            />
            {showPassword ? (
              <IoEyeOffOutline onClick={togglePasswordVisibility} />
            ) : (
              <IoEyeOutline onClick={togglePasswordVisibility} />
            )}
          </div>
        </div>

        <div className='signup-input-group'>
          <label htmlFor='confirmPasswordId'>Confirm Password</label>
          <div className='signup-password-input'>
            <input
              id='confirmPasswordId'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='..........'
              required
            />
            {showConfirmPassword ? (
              <IoEyeOffOutline onClick={toggleConfirmPasswordVisibility} />
            ) : (
              <IoEyeOutline onClick={toggleConfirmPasswordVisibility} />
            )}
          </div>
        </div>

        <button type='submit' className='signup-button'>
          Sign Up
        </button>

        <div className='signup-login-link'>
          <span>Already have an account?</span>
          <a href='/login'> Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
