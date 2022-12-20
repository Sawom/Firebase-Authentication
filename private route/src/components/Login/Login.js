import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {googleSignIn,user } = useFirebase()
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSign = ()=>{
        googleSignIn()
        .then( ()=>{
            navigate(from, {replace:true})
        } )
    }
    return (
        <div>
            <br />
            <button onClick={handleGoogleSign} >sign in google</button>
            <br /><br />
            <input type="text" placeholder='Enter email' /> <br />
            <input type="password" placeholder='Enter password' /> <br /> <br />
            <button> submit</button>
        </div>
    );
};

export default Login;