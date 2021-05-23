import React from 'react';
import {useNavigate} from 'react-router-dom';

import style from './sign-up-options.module.css';
import email from 'assets/Icons/Email.svg';
import RegisterContainer from '../RegisterContainer/RegisterContainer';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import FacebookLoginButton from '../FacebookLoginButton/FacebookLoginButton';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import SignUpStepAction from '../SignUpStepAction/SignUpStepAction';
import {BrowserRoutes} from 'shared/constants/browser-route.const';

const SignUpOptions: React.FC = () => {
    const navigate = useNavigate();

    return (
        <RegisterContainer>
            <RegisterHeader title="Como prefere entrar?"/>

            <ul className={style.listContainer}>
                <li>
                    <img className="socialButton" src={email} alt="Email"/>
                </li>
                <li>
                    <FacebookLoginButton/>
                </li>
                <li>
                    <GoogleLoginButton/>
                </li>
            </ul>
            <SignUpStepAction hasNextButton={false} previous={() => navigate(BrowserRoutes.SIGN_UP)}/>
        </RegisterContainer>
    );
};

export default SignUpOptions;
