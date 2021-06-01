import React from 'react';
import {useNavigate} from 'react-router-dom';
import {CustomLinearProgress} from '@material/Progress';

import style from './sign-up-options.module.css';
import email from 'assets/Icons/Email.svg';
import RegisterContainer from '../RegisterContainer/RegisterContainer';
import RegisterHeader from '../RegisterHeader/RegisterHeader';
import FacebookLoginButton from '../FacebookLoginButton/FacebookLoginButton';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';
import SignUpStepAction from '../SignUpStepAction/SignUpStepAction';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import ISignUpOptions from './interface/sign-up-options.interface';

const SignUpOptions: React.FC<ISignUpOptions> = ({onSelected, initialProgress}) => {
    const navigate = useNavigate();

    return (
        <RegisterContainer>
            <div className="slideTopToCenter">
                <RegisterHeader title="Como prefere entrar?"/>

                <ul className={style.listContainer}>
                    <li>
                        <img
                            className="socialButton"
                            style={{filter: 'grayscale(0%)', cursor: 'pointer'}}
                            src={email}
                            alt="Email"
                            onClick={() => onSelected()}
                        />
                    </li>
                    <li>
                        <FacebookLoginButton onUserSelected={(data) => onSelected(data)}/>
                    </li>
                    <li>
                        <GoogleLoginButton onUserSelected={(data) => onSelected(data)}/>
                    </li>
                </ul>

                <CustomLinearProgress variant="determinate" value={initialProgress} />

                <SignUpStepAction hasNextButton={false} previous={() => navigate(BrowserRoutes.SIGN_UP)}/>
            </div>
        </RegisterContainer>
    );
};

export default SignUpOptions;
