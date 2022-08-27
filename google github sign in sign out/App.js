import './App.css';
import app from './Firebase/Firebase';
import { getAuth,GoogleAuthProvider,GithubAuthProvider,signOut,signInWithPopup  } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const[user,setUser] = useState({});
  // sign in
  const googleSignIn = ()=>{
    const gogleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, gogleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  // sign out
  const signout = () =>{
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser({});
      }).catch((error) => {
        setUser({});
    });
  }
  // github sign in
  const gitHubSign = ()=>{
    const gitProvider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, gitProvider)
    .then((result) => {
    // The signed-in user info.
    const user = result.user;
    setUser(user);
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  
  return (
    <div className="App">
      {
        user.email ?
          <button onClick={signout} >sign out</button>
            :
          <>
          <button onClick={googleSignIn} >sign with google</button> <br /> <br />
          <button onClick={gitHubSign}>sign with github</button>
          </>
          
      }
      {/* user info */}
      <div>
          <h3>Name: {user.displayName} </h3>
          <p>your email : {user.email} </p>
          <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;
