import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, updatePassword,  sendEmailVerification , createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import app from './Firebase/authentication';
import { Button, Form } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
const auth = getAuth();

function App() {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[error, setError] = useState('');
  const[registered, setRegistered ] = useState(false);
  const[name,setName] = useState('');
  // email function
  const handleEmail = event=>{
    setEmail(event.target.value);
  }
  // password function
  const handlePassword = event =>{
    setPassword(event.target.value);
  }
  // handle checked
  const handleCheck = event =>{
    setRegistered(event.target.checked);
  }
  // set name
  const handleName = event =>{
    setName(event.target.value);
  }

  // set user name
  const setUserName = () =>{
    updateProfile(auth.currentUser, {
    displayName: name
    })
    .then(() => {
      console.log("name updated");
  })
  .catch((error) => {
    setError(error.message);
    });
  }

  // create user
  const handleSubmit = event =>{
    // password validation
    if(!/(?=.*?[#?!@$%^&*-])/.test(password) ){
      setError("Password should at least one special character.");
      return;
      }
      setError('');

      // if user registered then we login , else create user
      if(registered){
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
      }
      // create user
      else{
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
        const user = result.user;
        console.log(user);
        setEmail('');
        setPassword('');
        emialVerify();
        setUserName();
          })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage)
        })
      }
    event.preventDefault();
  }

  // email verification
  const emialVerify = event =>{
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email verification sent!");
    });
  }
  //  update password
  const updatePassword = event =>{
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("email sent");
    })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    });
  }

  return (
    <div className='container' onSubmit={handleSubmit}  >
      <br /> <br />
      <h1 className='text-primary' >Please  {  registered ? 'Login' : 'Register' }! </h1>
      <br />
      <Form>
        {/* name */}
        { !registered && <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" onBlur={handleName} required placeholder="Enter Name" />
        </Form.Group>  }
        {/* email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onBlur={handleEmail} required placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      {/* password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onBlur={handlePassword} required />
      </Form.Group>
      {/* check box */}
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onChange={ handleCheck} type="checkbox"  label="already registered?" />
      </Form.Group>
      <p className='text-danger'>{error}</p>
      {/* if checked box is ticked then show login  */}
      <Button variant='link' onClick={updatePassword} > Forgot password? </Button> <br /> <br />
      <Button variant="primary"  type="submit">
        { registered ? 'Login' : 'Submit' }
      </Button>
    </Form>
    </div>
  );
}
export default App;