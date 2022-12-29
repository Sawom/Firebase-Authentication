import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';
import auth from '../../Firebase/Firebase';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css'
const Login = () => {
    // google
    const {googleSignIn,gitHubSign } = UseFirebase()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSign = ()=>{
        googleSignIn()
        .then( ()=>{
            navigate(from, {replace:true})
        } )
    }
    //  email
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }
    if(user){
        navigate('/shop');
    }

    const handleLogin = (event) =>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div>
            <h1>this is login page</h1>
            <br />
            <button onClick={handleGoogleSign} >sign in google</button>
            <br /> <br />
            <button onClick={gitHubSign} >sign in github</button>
            {/* login form with email */}
            <div className='center'>  
             
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <br />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required  onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required  onBlur={ handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <p style={{color:"red"}}>{error?.message}</p>
                <Button variant="primary" type="submit">
                        Submit
                </Button>
                <br /> <br />
            </Form>
            </div>
        </div>
    );
};

export default Login;