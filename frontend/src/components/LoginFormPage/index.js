import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import SigninFormModal from '../SignupFormModal';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import background from "../../images/background.jpg";
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/home" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        if (!sessionUser) {

            return dispatch(sessionActions.login({ credential, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
    }

    const demoUser = (e) => {
        setErrors([]);
        dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
        history.push('/home');
    }

    return (
        <div className='background' style={{ backgroundImage: `url(${background})` }}>
            <div className='raised login-container'>
                <div>
                    <div className="login-header">
                        <div className='header'>
                            <h1>SayLess</h1>
                        </div>
                        <div className='sub-header'>
                            <p>Short and sweet q/a</p>
                        </div>
                    </div>
                    <div className='forms'>
                        <div className='signin-forms'>
                            <div className='social-sign-in'>
                                Sign in with Google
                            </div>
                            <div className='social-sign-in'>
                                Sign in with Facebook
                            </div>
                            <div className='signin-btn'>
                                <SigninFormModal />
                            </div>
                        </div>
                        <div className='login-form'>
                            <div className='login-text'>
                                Login
                            </div>
                            <form onSubmit={handleSubmit}>
                                <ul>
                                    <div className='error-vali'>
                                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                    </div>
                                </ul>
                                <div className='username'>
                                    <label>
                                        <div className='login-fields'>
                                            Username or Email
                                        </div>
                                        <input className='login-text-fields'
                                            type="text"
                                            value={credential}
                                            placeholder="Username or Email"
                                            onChange={(e) => setCredential(e.target.value)}
                                            required
                                        />
                                    </label>
                                </div>
                                <div className='password'>
                                    <label>
                                        <div className='login-fields'>
                                            Password
                                        </div>
                                        <input className='login-text-fields'
                                            type="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </label>
                                </div>
                                <div className='login-btn'>
                                    <span className='demo-btn'>
                                        <button
                                            type='submit'
                                            onClick={demoUser}>
                                            Demo</button>
                                    </span>
                                    <button type="submit">Log In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginFormPage;
