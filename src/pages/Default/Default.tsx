import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Landing = lazy(() => import('pages/Landing/Landing'));

const Default = () => {
    return (
        // DEVERÁ POSSUIR A NAVBAR
        // <div className={}>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                </Routes>
            </Suspense>
        // </div>
    );
}

export default Default;
