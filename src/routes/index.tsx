import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import Navbar from '../shared/components/Navbar/Navbar';

const Landing = lazy(() => import('pages/Landing/Landing'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Navbar/>
                <Route path={BrowserRoutes.LANDING} element={<Landing/>}/>
                <Route path={BrowserRoutes.NOT_FOUND} element={<></>}/>
            </Routes>
            <Routes>
                <Route path={BrowserRoutes.SIGN_IN} element={<SignIn/>}/>
                <Route path={BrowserRoutes.SIGN_UP} element={<SignUp/>}/>
            </Routes>
        </Suspense>
    );
}
