import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h3>1. Difference between authorization and authentication</h3>
                <p>Authentication is the process of verifying and confirming employees ID and passwords in an organization, but determining which employee has access to which floor is called authorization.</p>
            </div>
            <div>
                <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>The Firebase Realtime Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
            </div>
        </div>
    );
};

export default Blog;