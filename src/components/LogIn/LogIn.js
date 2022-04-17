import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../images/Google.svg';
import facebookIcon from '../../images/Facebook.svg';
import githubIcon from '../../images/GitHub.svg';
import { signInWithPopup } from 'firebase/auth';


const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // let auth = useAuth();

    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleLogInEvent = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email);
        console.log(password);

        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }



    return (
        <div className='bg-slate-100 w-[400px] mx-auto mt-5 py-6 px-8 rounded-md h-[500px]'>
            <form onSubmit={handleLogInEvent}>
                <div>
                    <input className='py-3 border-2 border-solid border-blue-400 h-14 outline-none px-2 my-2 w-full rounded-md' type="email" name="email" id="email" required placeholder='Email' />
                </div>
                <div>
                    <input className='py-3 outline-none border-2 border-solid h-14 border-blue-400 px-2 my-2 w-full rounded-md' type="password" name="password" required id="password" placeholder='Password' />
                </div>
                <div>
                    <input className='py-3 px-2 my-2  w-full  rounded-md h-14 bg-white border-2 border-solid border-blue-400' type="submit" value="Log In" />
                </div>
            </form>
            <div>
                <span>New to there?</span> <Link className='text-red-400' to='/signup'>Sign UP</Link>
            </div>
            <div>

                <button onClick={handleSignInWithGoogle} className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
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

export default LogIn;