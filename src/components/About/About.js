import React from 'react';
import elonProfilePic from '../../images/elon-pp.png';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <>
            <div className='bg-zinc-200 py-7 px-7 m-11 rounded-md mx-4' >
                <div>
                    <img className='rounded-md' src={elonProfilePic} alt="" />
                    <h3 className='text-3xl'>Name: Elon Musk</h3>
                    <p className='text-xl'>Goals: While Musk, doesn't have immediate plans, and at the interview mentioned, “My goal is not to send myself up. My goal is to open up space to humanity … and become a multiplanet species," he did add, that “I'll go up at some point." For Musk, his trip to space may not be with his own company.
                    </p>
                    <p className='text-xl mt-3'>"I Don't sleep when I'm tired, I sleep when I have done."</p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;