import React from 'react';

import {Route} from 'react-router-dom';
import {BrowserRoutes} from '../shared/constants/browser-route.const';
import {isLogged} from '../shared/local-storage/user-local-storage';

const Landing = React.lazy(() => import('../pages/Landing/Landing'));

const StudentWrapper: React.FC<any> = ({element, path, ...rest}) => {
    return (
        <>
            {isLogged() && <Route {...rest} path={path} element={element} />}
            {!isLogged() && <Route path={BrowserRoutes.LANDING} element={<Landing/>}/>}
        </>
    );
};

export default StudentWrapper;
