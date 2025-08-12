import './Signup.css';
import React, { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  // Error states
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [signupError, setSignupError] = useState('');

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(prev => !prev);

  // Clear error helpers on input change
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (usernameError) setUsernameError('');
    if (signupError) setSignupError('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
    if (signupError) setSignupError('');
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError('');
    if (signupError) setSignupError('');
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (confirmPasswordError) setConfirmPasswordError('');
    if (signupError) setSignupError('');
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setSignupError('');


    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmpassword
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setSignupError(data.message || "Signup failed");
        return;
      }

      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      console.log("Signup successful:", data);
      navigate("/sign-in");
    } catch (err: any) {
      setSignupError(err.message || "An unexpected error occurred");
      console.error(err);
    }
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

        {signupError && (
          <div style={{ color: 'red', marginBottom: '10px' }} role="alert">
            {signupError}
          </div>
        )}

        <div className='signup-input-group'>
          <label htmlFor='nameId'>Full Name</label>
          <input
            id='nameId'
            type='text'
            placeholder='John Doe'
            value={username}
            onChange={handleUsernameChange}
            aria-describedby="username-error"
          />
          {usernameError && (
            <div id="username-error" style={{ color: 'red', fontSize: '0.9em' }} role="alert">
              {usernameError}
            </div>
          )}
        </div>

        <div className='signup-input-group'>
          <label htmlFor='emailId'>Email</label>
          <input
            id='emailId'
            type='email'
            placeholder='email@domain.com'
            value={email}
            onChange={handleEmailChange}
            aria-describedby="email-error"
          />
          {emailError && (
            <div id="email-error" style={{ color: 'red', fontSize: '0.9em' }} role="alert">
              {emailError}
            </div>
          )}
        </div>

        <div className='signup-input-group'>
          <label htmlFor='passwordId'>Password</label>
          <div className='signup-password-input'>
            <input
              id='passwordId'
              type={showPassword ? 'text' : 'password'}
              placeholder='..........'
              value={password}
              onChange={handlePasswordChange}
              aria-describedby="password-error"
            />
            {showPassword
              ? <IoEyeOffOutline onClick={togglePasswordVisibility} />
              : <IoEyeOutline onClick={togglePasswordVisibility} />
            }
          </div>
          {passwordError && (
            <div id="password-error" style={{ color: 'red', fontSize: '0.9em' }} role="alert">
              {passwordError}
            </div>
          )}
        </div>

        <div className='signup-input-group'>
          <label htmlFor='confirmPasswordId'>Confirm Password</label>
          <div className='signup-password-input'>
            <input
              id='confirmPasswordId'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='..........'
              value={confirmpassword}
              onChange={handleConfirmPasswordChange}
              aria-describedby="confirm-password-error"
            />
            {showConfirmPassword
              ? <IoEyeOffOutline onClick={toggleConfirmPasswordVisibility} />
              : <IoEyeOutline onClick={toggleConfirmPasswordVisibility} />
            }
          </div>
          {confirmPasswordError && (
            <div id="confirm-password-error" style={{ color: 'red', fontSize: '0.9em' }} role="alert">
              {confirmPasswordError}
            </div>
          )}
        </div>

        <button type='submit' className='signup-button'>
          Sign Up
        </button>

        <div className='signup-login-link'>
          <span>Already have an account?</span>
          <a onClick={() => navigate('/sign-in')}> Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
