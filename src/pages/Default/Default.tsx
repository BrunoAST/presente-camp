import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import FacebookLoginButton from 'shared/components/FacebookLoginButton/FacebookLoginButton';
import GoogleLoginButton from '../../shared/components/GoogleLoginButton/GoogleLoginButton';

const Landing = lazy(() => import('pages/Landing/Landing'));

const Default = () => {
    return (
        // DEVERÁ POSSUIR A NAVBAR
        <>
            <FacebookLoginButton/>
            <GoogleLoginButton/>

            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                </Routes>
            </Suspense>
        </>
    );
};

export default Default;
