import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../../shared/components/Navbar/Navbar';
import {BrowserRoutes} from '../../shared/constants/browser-route.const';

const Landing = lazy(() => import('pages/Landing/Landing'));

const Default = () => {
    return (
        <>
            <Navbar/>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path={BrowserRoutes.LANDING} element={<Landing/>}/>
                </Routes>
            </Suspense>
        </>
    );
};

export default Default;