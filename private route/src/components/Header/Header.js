import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './header.css';
const Header = () => {
    const {handleSignOut,user} = useFirebase();
    return (
        <div className='header'>
          <nav >
                <Link to="/" >Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/register" >Register</Link>
                <Link to="/order" >Order</Link>
                <span> {user?.displayName && user.displayName} </span>
                <span> user id: {user?.uid && user.uid}</span>
                {
                    user?.uid  ?
                    <button onClick={handleSignOut}>sign out</button>
                    :
                    <Link to="/login" >Login</Link>
                }
            </nav>  
        </div>
    );
};

export default Header;