import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;