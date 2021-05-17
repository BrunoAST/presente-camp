import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import { BrowserRoutes } from 'shared/constants/browser-route.const';

const Default = lazy(() => import('pages/Default/Default'));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path={BrowserRoutes.LANDING} element={<Default/>}/>
                <Route path="*" element={<></>}/>
            </Routes>
        </Suspense>
    );
}
