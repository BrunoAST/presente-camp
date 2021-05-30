import React from 'react';

import {Route} from 'react-router-dom';
import {BrowserRoutes} from '../shared/constants/browser-route.const';
import {isLogged} from '../shared/local-storage/user-local-storage';

const Home = React.lazy(() => import('../pages/Home/Home'));

const LandingWrapper: React.FC<any> = ({element, path, ...rest}) => {
    return (
        <>
            {!isLogged() && <Route {...rest} path={path} element={element}/>}
            {isLogged() && <Route path={BrowserRoutes.HOME} element={<Home/>}/>}
        </>
    );
};

export default LandingWrapper;
