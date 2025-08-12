import './Login.css';
import React, { useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FaGoogle, FaGithub, FaFacebookF } from 'react-icons/fa';

interface DivTypes extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

const Login: React.FC<DivTypes> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login submitted");
    };


    return (
        <div className='login-main-div' {...props}>
            <div className='image-overlay-div'>
                <img
                    src='https://doot-light.react.themesbrand.com/static/media/auth-img.9302755e73810f6c27d2.png'
                    alt='Login Illustration'
                />
            </div>

            <form className='login-page-form' onSubmit={handleSubmit}>
                <div className='welcome-back-login-div'>
                    <h1>Welcome Back!</h1>
                    <p>Sign in to continue to We Chat.</p>
                </div>

                <div className='username-input-div'>
                    <label htmlFor='usernameId'>Username</label>
                    <input
                        placeholder='username@domain.com'
                        id='usernameId'
                        type='text'
                        required
                    />
                </div>

                <div className='username-input-div'>
                    <label htmlFor='passwordId'>Password</label>
                    <div className='password-input'>
                        <input
                            placeholder='..........'
                            id='passwordId'
                            type={showPassword ? 'text' : 'password'}
                            required
                        />
                        {showPassword ? (
                            <IoEyeOffOutline onClick={togglePasswordVisibility} />
                        ) : (
                            <IoEyeOutline onClick={togglePasswordVisibility} />
                        )}
                    </div>
                </div>

                <button type='submit' className='login-button'>
                    Login
                </button>

                <div className='divider'>
                    <span>Or sign in with</span>
                </div>

                <div className='social-login'>
                    <button
                        type='button'
                        className='social-btn google'
                    >
                        <FaGoogle /> Google
                    </button>
                    <button
                        type='button'
                        className='social-btn github'
                    >
                        <FaGithub /> GitHub
                    </button>
                    <button
                        type='button'
                        className='social-btn facebook'
                    >
                        <FaFacebookF /> Facebook
                    </button>
                </div>

                <div className='register-link'>
                    <span>Don’t have an account?</span>
                    <a href='/register'> Register</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
