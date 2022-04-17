import React from 'react';

const Blog = () => {
    return (
        <div className='py-8 px-8 m-3 rounded-md'>
            <div className='bg-slate-300 m-3 p-3 rounded-md'>
                <h3>1. Difference between authorization and authentication</h3>

                <p>&#8226; Answer: Authentication is the process of verifying and confirming employees ID and passwords in an organization, but determining which employee has access to which floor is called authorization.</p>
            </div>
            <div className='bg-slate-300 m-3 p-3 rounded-md'>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>

                <p>&#8226; Answer: The Firebase Realtime Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.



                </p>
                <h4>&#8226; Other authentication</h4>

                <p className='ml-4'>2.1. Passport JS</p>
                <p className='ml-4'>2.2. Auth0</p>
                <p className='ml-4'>2.3. Permit</p>
            </div>
            <div className='bg-slate-300 m-3 p-3 rounded-md'>
                <h3>3. What other services does firebase provide other than authentication</h3>
                <p>&#8226; Answer: There are many services which Firebase provides, Most useful of them are:
                </p>
                <p className='ml-4'>3.1. Cloud Firestore.</p>
                <p className='ml-4'>3.2. Cloud Functions.</p>
                <p className='ml-4'>3.3. Authentication.</p>
                <p className='ml-4'>3.4. Hosting.</p>
                <p className='ml-4'>3.5. Cloud Storage.</p>
                <p className='ml-4'>3.6. Google Analytics.</p>
                <p className='ml-4'>3.7. Predictions.</p>
                <p className='ml-4'>3.8. Cloud Messaging.</p>
            </div>
        </div >
    );
};

export default Blog;