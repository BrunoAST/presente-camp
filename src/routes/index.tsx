import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {BrowserRoutes} from 'shared/constants/browser-route.const';

const Default = lazy(() => import('pages/Default/Default'));
const Landing = lazy(() => import('pages/Landing/Landing'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const StudentSignUp = lazy(() => import('pages/StudentSignUp/StudentSignUp'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path={BrowserRoutes.DEFAULT} element={<Default/>}>
                    <Route path={BrowserRoutes.LANDING} element={<Landing/>}/>
                </Route>
                <Routes>
                    <Route path={BrowserRoutes.SIGN_UP} element={<SignUp/>}/>
                    <Route path={BrowserRoutes.SIGN_IN} element={<SignIn/>}/>
                    <Route path={BrowserRoutes.SIGN_UP_STUDENT} element={<StudentSignUp/>}/>
                    <Route path={BrowserRoutes.NOT_FOUND} element={<NotFound/>}/>
                    {/*<Route path={BrowserRoutes.SIGN_UP} element={<SignUp/>}/>*/}
                </Routes>
            </Routes>
        </Suspense>
    );
}
