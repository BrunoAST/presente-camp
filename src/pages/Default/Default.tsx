import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../../shared/components/Navbar/Navbar';

const Landing = lazy(() => import('pages/Landing/Landing'));

const Default = () => {
    return (
        // DEVERÁ POSSUIR A NAVBAR
        <>
            <Navbar/>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                </Routes>
            </Suspense>
        </>
    );
};

export default Default;
