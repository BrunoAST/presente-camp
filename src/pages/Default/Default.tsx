import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import FacebookLoginButton from 'shared/components/FacebookLoginButton/FacebookLoginButton';

const Landing = lazy(() => import('pages/Landing/Landing'));

const Default = () => {
    return (
        // DEVERÁ POSSUIR A NAVBAR
        <>
            <FacebookLoginButton />

            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                </Routes>
            </Suspense>
        </>
    );
}

export default Default;
