import './Login.css';
import React, { useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { FaGoogle, FaGithub, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

interface DivTypes extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

const Login: React.FC<DivTypes> = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (emailError) setEmailError('');
        if (loginError) setLoginError('');
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (passwordError) setPasswordError('');
        if (loginError) setLoginError('');
    };

    const validateInputs = () => {
        let valid = true;
        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            valid = false;
        }
        return valid;
    };

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailError('');
        setPasswordError('');
        setLoginError('');

        if (!validateInputs()) {
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/login', options);
            const data = await res.json();

            if (!res.ok) {
                setLoginError(data.message || "Login failed");
                return;
            }

            setEmail('');
            setPassword('');
            Cookies.set('jwt_token', data.token);
            navigate("/");
        } catch (error: any) {
            setLoginError(error.message || "An unexpected error occurred");
            console.error(error);
        }
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

                {loginError && (
                    <div
                        className="login-error-msg"
                        style={{ color: 'red', marginBottom: '10px' }}
                        role="alert"
                    >
                        {loginError}
                    </div>
                )}

                <div className='username-input-div'>
                    <label htmlFor='usernameId'>Email</label>
                    <input
                        placeholder='username@domain.com'
                        id='usernameId'
                        type='email'
                        onChange={handleEmail}
                        value={email}
                        aria-describedby="email-error"
                    />
                    {emailError && (
                        <div
                            id="email-error"
                            style={{ color: 'red', fontSize: '0.9em' }}
                            role="alert"
                        >
                            {emailError}
                        </div>
                    )}
                </div>

                <div className='username-input-div'>
                    <label htmlFor='passwordId'>Password</label>
                    <div className='password-input'>
                        <input
                            placeholder='..........'
                            id='passwordId'
                            type={showPassword ? 'text' : 'password'}
                            onChange={handlePassword}
                            value={password}
                            aria-describedby="password-error"
                        />
                        {showPassword ? (
                            <IoEyeOffOutline onClick={togglePasswordVisibility} />
                        ) : (
                            <IoEyeOutline onClick={togglePasswordVisibility} />
                        )}
                    </div>
                    {passwordError && (
                        <div
                            id="password-error"
                            style={{ color: 'red', fontSize: '0.9em' }}
                            role="alert"
                        >
                            {passwordError}
                        </div>
                    )}
                </div>

                <button type='submit' className='login-button'>
                    Login
                </button>

                <div className='divider'>
                    <span>Or sign in with</span>
                </div>

                <div className='social-login'>
                    <button type='button' className='social-btn google'>
                        <FaGoogle /> Google
                    </button>
                    <button type='button' className='social-btn github'>
                        <FaGithub /> GitHub
                    </button>
                    <button type='button' className='social-btn facebook'>
                        <FaFacebookF /> Facebook
                    </button>
                </div>

                <div className='register-link'>
                    <span>Don’t have an account?</span>
                    <a onClick={() => navigate('/sign-up')}> Register</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
