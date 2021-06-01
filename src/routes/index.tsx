import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import UserDataProvider from 'shared/context/student-sign-up.context';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import AuthProvider from '../shared/context/auth.context';
import StudentWrapper from './StudentWrapper';
import LandingWrapper from './LandingWrapper';

const Default = lazy(() => import('pages/Default/Default'));
const Landing = lazy(() => import('pages/Landing/Landing'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const StudentSignUp = lazy(() => import('pages/StudentSignUp/StudentSignUp'));
const Blog = lazy(() => import('pages/Blog/Blog'));
const Home = lazy(() => import('pages/Home/Home'));
const ContentFilter = lazy(() => import('pages/ContentFilter/ContentFilter'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <AuthProvider>
                <Routes>
                    <Route path={BrowserRoutes.DEFAULT} element={<Default/>}>
                        <LandingWrapper path={BrowserRoutes.LANDING} element={<Landing/>}/>
                        <StudentWrapper path={BrowserRoutes.HOME} element={<Home/>}/>
                        <StudentWrapper path={BrowserRoutes.BLOG} element={<Blog/>}/>
                        <StudentWrapper path={BrowserRoutes.CONTENT_FILTER} element={<ContentFilter/>}/>
                        <StudentWrapper path={BrowserRoutes.CONTENT} element={<ContentFilter/>}/>
                    </Route>
                    <Route path={BrowserRoutes.SIGN_UP} element={<SignUp/>}/>
                    <Route path={BrowserRoutes.SIGN_IN} element={<SignIn/>}/>
                    <UserDataProvider>
                        <Route path={BrowserRoutes.SIGN_UP_STUDENT} element={<StudentSignUp/>}/>
                    </UserDataProvider>
                    <Route path={BrowserRoutes.NOT_FOUND} element={<NotFound/>}/>
                </Routes>
            </AuthProvider>
        </Suspense>
    );
}
