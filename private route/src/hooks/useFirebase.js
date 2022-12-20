import { useEffect, useState } from "react"
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import app from "../Firebase/Firebase";
const auth = getAuth(app);
const useFirebase = () =>{
    const[user, setUser] = useState({});
    // sign in
    const googleSignIn = ()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(user);
        })
    }
    //  sign out
    const handleSignOut = () =>{
        signOut(auth)
        .then(() => {
        setUser({})
        }).catch((error) => {
        setUser({})
        });
    }
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    }, [])

    return {user, setUser,googleSignIn, handleSignOut}
}
export default useFirebase;