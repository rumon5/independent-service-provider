import React from 'react';
import bannerImage from '../../images/elon.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className='banner-container'>
            <div>
                <img className='w-full' src={bannerImage} alt="" />
            </div>
            <div>
                <p className='text-2xl text-white elon-title'>I'm an entertainer!</p>
            </div>
            {/* <div className='max-w-[450px] elon-info'>
                <h2 className='text-4xl'>Elon Musk</h2>
                <p className='text-[16px]'>Elon Reeve Musk FRS is an entrepreneur, investor, and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.</p>
            </div> */}
        </div>
    );
};

export default Home;