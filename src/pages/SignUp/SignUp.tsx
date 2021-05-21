import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import SignUpType from './components/SignUpType/SignUpType';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import ESignUpType from './components/SignUpType/enum/sign-up.enum';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const [type, setType] = useState<ESignUpType>();

    useEffect(
        () => {
            function navigateToRegistration(): void {
                switch (type) {
                    case ESignUpType.STUDENT:
                        navigate(BrowserRoutes.SIGN_UP_STUDENT);
                        break;
                }
            }

            navigateToRegistration();
        },
        [type, navigate]
    );

    return <SignUpType selectedType={(type) => setType(type)}/>;
};

export default SignUp;
