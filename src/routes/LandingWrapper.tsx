import React from 'react';

import {Route, Navigate} from 'react-router-dom';
import {BrowserRoutes} from '../shared/constants/browser-route.const';
import {useAuthProvider} from '../shared/context/auth.context';

const LandingWrapper: React.FC<any> = ({element, path, ...rest}) => {
    const {isSigned} = useAuthProvider();

    if (isSigned) {
        return <Navigate to={BrowserRoutes.HOME} {...rest}/>;
    }

    return (
        <>
            {!isSigned && <Route {...rest} path={path} element={element}/>}
        </>
    );
};

export default LandingWrapper;
