import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from 'shared/components/Navbar/Navbar';

const Default = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
};

export default Default;