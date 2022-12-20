import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../Firebase/Firebase';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Requireauth = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default Requireauth;