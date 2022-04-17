import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOutEvent = () => {
        signOut(auth)
    }


    return (
        <nav className='bg-gray-900 py-5 text-center sm:block md:flex justify-between items-center px-6'>
            <div>
                <Link className='text-3xl text-white' to='/'>Elon Musk</Link>
            </div>
            <div className='block md:flex'>
                <Link className='mr-3 block md:inline  text-white' to='/home'>Home</Link>
                <Link className='mr-3 block md:inline  text-white' to='/services'>Services</Link>
                <Link className='mr-3 block md:inline  text-white' to='/blogs'>Blogs</Link>
                <Link className='mr-3 block md:inline  text-white' to='/about'>About</Link>
                {
                    user?.uid ? <button className='mr-3 text-white' onClick={logOutEvent}>LogOut</button>
                        :
                        <Link className='mr-3 block md:inline  text-white' to='/login'>LogIn</Link>
                }
            </div>
            <div className='hidden md:flex justify-between items-center'>
                <img className='rounded-full w-8' src={"elon.png"} alt="" />
            </div>
        </nav>
    );
};

export default Header;