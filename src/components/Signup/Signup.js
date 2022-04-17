import React from 'react';
import googleIcon from '../../images/Google.svg';
import facebookIcon from '../../images/Facebook.svg';
import githubIcon from '../../images/GitHub.svg';
import { Link } from 'react-router-dom';

const Signup = () => {


    const handleSignUpEvent = event => {
        event.preventDefault();

    }
    return (
        <div className='bg-slate-100 w-[400px] mx-auto mt-5 py-6 px-8 rounded-md h-[500px]'>
            <form onSubmit={handleSignUpEvent}>
                <div>
                    <input className='py-3 border-2 border-solid border-blue-400 h-14 outline-none px-2 my-2 w-full rounded-md' type="text" name="name" id="name" required placeholder='Name' />
                </div>
                <div>
                    <input className='py-3 border-2 border-solid border-blue-400 h-14 outline-none px-2 my-2 w-full rounded-md' type="email" name="email" id="email" required placeholder='Email' />
                </div>
                <div>
                    <input className='py-3 outline-none border-2 border-solid h-14 border-blue-400 px-2 my-2 w-full rounded-md' type="password" name="password" required id="password" placeholder='Password' />
                </div>
                <div>
                    <input className='py-3 px-2 my-2  w-full  rounded-md h-14 bg-white border-2 border-solid border-blue-400' type="submit" value="Sign Up" />
                </div>
            </form>
            <div>
                <span>Already have an account?</span> <Link className='text-red-600 ' to='/login'>Log In</Link>
            </div>
            <div>

                <button className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={googleIcon} alt="" />
                    Sign In With Google</button>
            </div>
            <div>

                <button className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={facebookIcon} alt="" />
                    Sign In With Facebook</button>
            </div>
            <div>

                <button className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={githubIcon} alt="" />
                    Sign In With Github</button>
            </div>
        </div>
    );
};

export default Signup;