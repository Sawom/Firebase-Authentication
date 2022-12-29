import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import './header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            <nav className='header' >
                <Link to='/' >Home</Link>
                <Link to='/about' >About</Link>
                <Link to='/order' >Order</Link>
                 {
                    user ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>
                }
                <Link to='/register' >Register</Link>
            </nav>
        </div>
    );
};

export default Header;