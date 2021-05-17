import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import { BrowserRoutes } from 'shared/constants/browser-route.const';

const Default = lazy(() => import('pages/Default/Default'));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path={BrowserRoutes.DEFAULT} element={<Default/>}/>
                <Route path={BrowserRoutes.NOT_FOUND} element={<></>}/>
            </Routes>
        </Suspense>
    );
}
