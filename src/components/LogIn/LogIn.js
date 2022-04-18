import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../images/Google.svg';
import facebookIcon from '../../images/Facebook.svg';
import githubIcon from '../../images/GitHub.svg';
import toast from 'react-hot-toast';
import Loading from '../Loading/Loading';



const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);

    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser])

    if (loading || googleLoading) {
        return <Loading></Loading>
    }


    const handleEmailEvent = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordEvent = event => {
        setPassword(event.target.value);
    }

    // Log in with email and password
    const handleLogInEvent = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);

        if (error?.code === 'auth/user-not-found') {
            toast.error('User not found', { id: 'notfound' });
        }

        if (error?.code === 'auth/wrong-password') {
            toast.error('Please enter a valid password', { id: 'invalid-password' })
        }
    }

    // Handle sign in with google 
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    return (
        <div className='bg-slate-100 w-[400px] mx-auto mt-5 py-6 px-8 rounded-md h-[500px]'>
            <form onSubmit={handleLogInEvent}>
                <div>
                    <input
                        className='py-3 border-2 border-solid border-blue-400 h-14 outline-none px-2 my-2 w-full rounded-md' type="email"
                        name="email"
                        onChange={handleEmailEvent}
                        id="email" required
                        placeholder='Email' />
                </div>
                <div>
                    <input
                        className='py-3 outline-none border-2 border-solid h-14 border-blue-400 px-2 my-2 w-full rounded-md' type="password"
                        onChange={handlePasswordEvent}
                        name="password" required
                        id="password"
                        placeholder='Password' />
                </div>
                <div>
                    <input
                        className='py-3 px-2 my-2  w-full  rounded-md h-14 bg-white border-2 border-solid border-blue-400' type="submit"
                        value="Log In" />
                </div>
                <div>
                    <button
                        onClick={async () => {
                            await sendPasswordResetEmail(email)
                            toast.success('Sent email')
                        }}>
                        Reset password</button>
                </div>
            </form>
            <div>
                <span>New to here?</span> <Link className='text-red-400' to='/signup'>Sign Up</Link>
            </div>
            <div>

                <button
                    onClick={handleSignInWithGoogle}
                    className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={googleIcon} alt="" />
                    Sign In With Google</button>
            </div>
            <div>

                <button
                    className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={facebookIcon} alt="" />
                    Sign In With Facebook</button>
            </div>
            <div>

                <button
                    className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={githubIcon} alt="" />
                    Sign In With Github</button>
            </div>
        </div>
    );
};

export default LogIn;