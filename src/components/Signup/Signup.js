import React, { useEffect } from 'react';
import googleIcon from '../../images/Google.svg';
import facebookIcon from '../../images/Facebook.svg';
import githubIcon from '../../images/GitHub.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';


const Signup = () => {
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (googleUser || user) {
            return navigate('/')
        }
    }, [user, googleUser])


    if (loading) {
        return <Loading></Loading>;
    }

    // Create user with email and password
    const handleSignUpEvent = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const displayName = event.target.name.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            return toast.error('Password did not match', { id: 'wrong-password' });
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        toast.success('Sing up successfully', { id: 'sign-up' });

    }
    console.log(user, googleUser)
    // Handle google sign in event
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    return (
        <div className='bg-slate-100 w-[400px] mx-auto mt-5 py-6 mb-5 px-8 rounded-md h-[630px]'>
            <form onSubmit={handleSignUpEvent}>
                <div>
                    <input
                        className='py-3 border-2 border-solid border-blue-400 h-14 outline-none px-2 my-2 w-full rounded-md' type="text"
                        name="name"
                        id="name" required
                        placeholder='Name' />
                </div>
                <div>
                    <input
                        className='py-3 border-2 border-solid border-blue-400 h-14 outline-none px-2 my-2 w-full rounded-md' type="email"
                        name="email"
                        id="email" required
                        placeholder='Email' />
                </div>
                <div>
                    <input
                        className='py-3 outline-none border-2 border-solid h-14 border-blue-400 px-2 my-2 w-full rounded-md' type="password"
                        name="password" required
                        id="password"
                        placeholder='Password' />
                </div>
                <div>
                    <input
                        className='py-3 outline-none border-2 border-solid h-14 border-blue-400 px-2 my-2 w-full rounded-md' type="password"
                        name="confirmPassword" required
                        id="confirm-password"
                        placeholder='Confirm Password' />
                </div>
                <div>
                    <input
                        className='py-3 px-2 my-2  w-full  rounded-md h-14 bg-white border-2 border-solid border-blue-400' type="submit"
                        value="Sign Up" />
                </div>
            </form>
            <div>
                <span>Already have an account?</span> <Link className='text-red-600 ' to='/login'>Log In</Link>
            </div>
            <div>

                <button
                    onClick={handleGoogleSignIn}
                    className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={googleIcon} alt="" />
                    Sign Up With Google</button>
            </div>
            <div>

                <button
                    className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={facebookIcon} alt="" />
                    Sign Up With Facebook</button>
            </div>
            <div>

                <button
                    className='flex justify-center items-center py-3 px-2 h-14 my-2 w-full  rounded-md border-2 border-solid border-blue-400 bg-white' >
                    <img className='w-8 mr-2' src={githubIcon} alt="" />
                    Sign Up With Github</button>
            </div>
        </div>
    );
};

export default Signup;