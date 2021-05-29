import React from 'react';

import {Route} from 'react-router-dom';
import {BrowserRoutes} from '../shared/constants/browser-route.const';
import {useAuthProvider} from '../shared/context/auth.context';

const Landing = React.lazy(() => import('../pages/Landing/Landing'));

const StudentWrapper: React.FC<any> = ({element, path, ...rest}) => {
    //TODO: VERIFICAR SE SERÁ NECESSÁRIO ANALISAR O TIPO DE USUÁRIO
    const {isSigned} = useAuthProvider();

    return (
        <>
            {isSigned && <Route {...rest} path={path} element={element} />}
            {!isSigned && <Route path={BrowserRoutes.LANDING} element={<Landing/>}/>}
        </>
    );
};

export default StudentWrapper;
