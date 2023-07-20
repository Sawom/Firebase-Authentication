import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
           <div className='center ' >
            <div className="form-control my-20 cardStyless w-full max-w-xs ">
                <h2 className='text-center text-2xl font-bold ' >Sign Up </h2>
                {/* Name */}
                <div className='my-4'>
                    <label className="label">
                        <span className="">Name</span>
                    </label>
                    <input type="text" placeholder="Enter name" className="input input-bordered w-full max-w-xs" />
                </div>
                {/* email */}
                <div className='my-2'>
                    <label className="label">
                        <span className="">Email Address</span>
                    </label>
                    <input type="email" placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
                </div>
                {/* password */}
                <div className='my-2'>
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
                </div>  
                {/* confirm password */}
                <div className='my-2'>
                    <label className="label">
                        <span className="">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
                </div>  
                {/* btn */}
                <div className='my-4'>
                    <input  style={{backgroundColor: '#3A4256', color: 'white'}} className='btn w-full' type="submit" value="Register" />
                </div>
                <div>
                    <p>Allready have an account? <Link className=' text-decoration-none' as={Link}  to="/login"> <span style={{ color: '#19D3AE'}} className='font-bold'  >Login Here</span> </Link> </p> 
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Register;