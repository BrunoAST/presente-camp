import React, {useCallback, useState} from 'react';

import style from './student-interests.module.css';
import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import Form from 'shared/components/Form/Form';
import {useStudentDataProvider} from 'shared/context/student-sign-up.context';
import InputCep from 'shared/components/InputCep/InputCep';
import {CustomLinearProgress} from '@material/Progress';
import Interests from 'shared/constants/interests.const';
import SelectionChips from 'shared/components/SelectionChips/SelectionChips';
import EStudentSignUpSteps from '../../enum/student-sign-up-steps.enum';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import {signUpHttp} from '../../services/sign-up-http';
import {toast, ToastContainer} from 'react-toastify';

const StudentInterests: React.FC = () => {
    let isLoading = false;
    const {userData, setUserData, setStep} = useStudentDataProvider();

    const isInvalid = useCallback(
        () => {
            return !userData.locationCity || !userData.locationState || (!userData.interests || userData.interests.length <= 0);
        },
        [userData],
    );

    function signUp(): void {
        setUserData({
            ...userData,
            interests: userData.interests,
            locationState: userData.locationState,
            locationCity: userData.locationState,
        });

        isLoading = true;

        signUpHttp(userData)
            .then(() => {
                setStep(EStudentSignUpSteps.WELCOME);
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
            <ToastContainer/>

            <div className="slideTopToCenter">
                <RegisterHeader title="Sobre você"/>
                <Form>
                    <div className="formContainer">
                        <InputCep
                            onInvalid={() => setUserData({...userData, locationCity: '', locationState: ''})}
                            onChange={(cep, city, state) => {
                                setUserData({...userData, locationCity: city, locationState: state});
                            }}
                            isRequired={true}
                            label="Qual é o seu CEP?"
                        />

                        <p className={style.description}>
                            <span className={style.emphasis}>O que você tem interesse em aprender?</span> <br/>
                            é possível selecionar quantas áreas quiser
                        </p>

                        <SelectionChips
                            items={Interests}
                            selected={(items) => {
                                setUserData({...userData, interests: items.length > 0 ? items : []});
                            }}
                        />
                    </div>
                </Form>
                <CustomLinearProgress variant="determinate" value={80}/>
            </div>

            <SignUpStepAction
                next={() => signUp()}
                previous={() => setStep(EStudentSignUpSteps.ABOUT)}
                isNextDisabled={isInvalid() || isLoading}
                hasPreviousButton={true}
                nextButtonLabel="Próximo"
            />
        </RegisterContainer>
    );
};

export default StudentInterests;
