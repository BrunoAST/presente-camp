import React from 'react';
import {useNavigate} from 'react-router-dom';

import style from './sign-in.module.css';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import Form from 'shared/components/Form/Form';
import useForm from 'shared/hooks/useForm';
import Input from 'shared/components/Input/Input';
import FacebookLoginButton from 'shared/components/FacebookLoginButton/FacebookLoginButton';
import GoogleLoginButton from 'shared/components/GoogleLoginButton/GoogleLoginButton';
import ISocialsUserData from 'shared/interfaces/socials-user-data.interface';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import {BrowserRoutes} from 'shared/constants/browser-route.const';

const SignIn = () => {
    const navigate = useNavigate();
    const {values, handleInputChange} = useForm();

    function isInvalid(): boolean {
        return !values.email|| !values.password;
    }

    function onSocialsSelected(data: ISocialsUserData): void {

    }

    function login(): void {

    }

    return (
        <RegisterContainer>
            <div data-cy="content-container" className="slideTopToCenter">
                <RegisterHeader title="Bom te ver de novo!"/>

                <Form>
                    <div className="formContainer">
                        <Input
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />

                        <Input
                            label="Senha"
                            name="password"
                            type="password"
                            showPasswordHint={false}
                            value={values.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </Form>

                <p className={`${style.signInOptions} my-24`}>Ou use:</p>

                <ul className={`${style.listContainer} mb-48`}>
                    <li className={`mr-32`}>
                        <FacebookLoginButton onUserSelected={(data) => onSocialsSelected(data)}/>
                    </li>
                    <li>
                        <GoogleLoginButton onUserSelected={(data) => onSocialsSelected(data)}/>
                    </li>
                </ul>

                <SignUpStepAction
                    isNextDisabled={isInvalid()}
                    next={() => login()}
                    previous={() => navigate(BrowserRoutes.LANDING)}
                    hasPreviousButton={true}
                    nextButtonLabel="Entrar"
                />
            </div>
        </RegisterContainer>
    );
};

export default SignIn;
