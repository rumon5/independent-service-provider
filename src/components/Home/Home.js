import React from 'react';
import bannerImage from '../../images/elon.jpg';
import './Home.css';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <div className='banner-container'>
                <div>
                    <img className='w-full' src={bannerImage} alt="" />
                </div>
                <div>
                    <p className='text-2xl text-white elon-title'>I'm an entertainer!</p>
                </div>
            </div>
            <Services></Services>
            <Footer></Footer>
        </>
    );

};

export default Home;