import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Landing = lazy(() => import('pages/Landing/Landing'));

const Default: React.FC<any> = () => {
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path="/" element={<Landing />} />
            </Routes>
        </Suspense>
    );
}

export default Default;
