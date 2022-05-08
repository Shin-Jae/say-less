import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import SigninFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">Login</NavLink>
                <SigninFormModal />
            </>
        );
    }

    return (
        <div>
            <h1>Welcome to "Say Less" !</h1>
            <ul>
                <li className='navbar'>
                    <NavLink exact to="/home"><img className='logo' src="https://cdn-icons-png.flaticon.com/512/187/187163.png" alt=""></img></NavLink>
                    <NavLink to="/answers">Answer</NavLink>
                    <div>
                        <label>
                            Search
                        </label>
                        <input
                            type="text"
                            placeholder='Search questions'
                        />
                        <button type="submit">Search</button>
                    </div>
                    {isLoaded && sessionLinks}
                    <button>Create question</button>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
