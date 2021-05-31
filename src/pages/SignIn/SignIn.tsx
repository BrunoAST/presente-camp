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
import {signInHttp} from './services/sign-in.http';
import {useAuthProvider} from 'shared/context/auth.context';
import {setItem} from '../../shared/local-storage/user-local-storage';
import {toast, ToastContainer} from 'react-toastify';

const SignIn = () => {
    let isLoading = false;
    const navigate = useNavigate();
    const {values, handleInputChange} = useForm();
    const {setUserData, setIsSigned} = useAuthProvider();

    function isInvalid(): boolean {
        return !values.email || !values.password;
    }

    function onSocialsSelected(data: ISocialsUserData): void {
        throw Error('Not implemented method');
    }

    function login(): void {
        isLoading = true;

        signInHttp(values.email, values.password)
            .then(res => {
                if (!res) return;

                setUserData(res.data);
                setItem({...res.data});
                setIsSigned(true);
                navigate(BrowserRoutes.HOME);
            })
            .catch(err => onError(err.response.data))
            .finally(() => isLoading = false);
    }

    function onError(message: string): void {
        toast(message, {
            position: 'bottom-left',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: 'error'
        });
    }

    return (
        <RegisterContainer>
            <ToastContainer
                closeButton={true}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

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
                    isNextDisabled={isInvalid() || isLoading}
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
