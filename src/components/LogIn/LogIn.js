import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const LogIn = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);



    let navigate = useNavigate();
    let location = useLocation();
    // let auth = auth;

    let from = location.state?.from?.pathname || "/";

    const handleLogInEvent = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email);
        console.log(password);

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='bg-slate-200 w-[400px] mx-auto mt-5 py-6 px-8 rounded-md h-[500px]'>
            <form onSubmit={handleLogInEvent}>
                <div>
                    <input className='py-3 px-2 my-2 w-full rounded-md' type="email" name="email" id="email" placeholder='Email' />
                </div>
                <div>
                    <input className='py-3 px-2 my-2 w-full rounded-md' type="password" name="password" id="password" placeholder='Password' />
                </div>
                <div>
                    <input className='py-3 px-2 my-2 w-full rounded-md bg-red-400 text-white' type="submit" value="Log In" />
                </div>
            </form>
        </div>
    );
};

export default LogIn;