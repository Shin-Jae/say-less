import { NavLink } from 'react-router-dom';
import '../Navigation/Navigation.css'

function LoginNav() {
    return (
        <div >
            <ul className='login-nav'>
                <li className="navbar">
                    <NavLink exact to="/"><img className='logo' src="https://cdn-icons-png.flaticon.com/512/187/187163.png" alt=""></img></NavLink >
                    <h3>Welcome to Say Less</h3>
                    <NavLink to="/login">Login/Sign-Up</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default LoginNav;
