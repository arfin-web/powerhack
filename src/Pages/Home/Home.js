import React from 'react';
import List from '../List/List';
import Navbar from '../Navbar/Navbar';
import Subnav from '../Subnav/Subnav';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <Subnav />
                <List />
            </div>
        </>
    );
};

export default Home;