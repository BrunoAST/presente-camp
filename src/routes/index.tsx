import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// const Home = lazy(() => import('pages/Home/Home'));

export default function RoutesContainer() {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
