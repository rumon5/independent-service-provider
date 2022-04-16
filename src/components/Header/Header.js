import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-gray-900 py-5 text-center sm:block md:flex justify-between items-center px-6'>
            <div>
                <Link className='text-3xl text-white' to='/'>Elon Musk</Link>
            </div>
            <div className='block md:flex'>
                <Link className='mr-3 block md:inline  text-white' to='/home'>Home</Link>
                <Link className='mr-3 block md:inline  text-white' to='/home'>services</Link>
                <Link className='mr-3 block md:inline  text-white' to='/about'>About</Link>
                <Link className='mr-3 block md:inline  text-white' to='/login'>LogIn</Link>
                <Link className='mr-3 block md:inline  text-white' to='signup'>SignUp</Link>
            </div>
            <div className='hidden md:flex justify-between items-center'>
                <img className='rounded-full w-10s' src={"elon.png"} alt="" />
            </div>
        </nav>
    );
};

export default Header;