import React from 'react';
import {Outlet} from 'react-router-dom';

import Navbar from 'shared/components/Navbar/Navbar';
import FooterSection from 'shared/components/FooterSection/FooterSection';

const Default = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <FooterSection/>
        </>
    );
};

export default Default;