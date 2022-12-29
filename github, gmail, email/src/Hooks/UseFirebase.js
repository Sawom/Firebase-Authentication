import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../Firebase/Firebase';
const UseFirebase = () => {
    const [user,setUser] = useState({});
    // google sign in
    const googleSignIn = () =>{
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        })
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
   
    return {user,setUser, gitHubSign, googleSignIn}
};

export default UseFirebase;