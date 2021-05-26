import React, {useEffect, useState } from 'react';
import {CustomLinearProgress} from '@material/Progress';

import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import Form from 'shared/components/Form/Form';
import StudentBasicInformationForm from './form/student-basic-information-form';
import Input from 'shared/components/Input/Input';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import emailValidators from 'shared/validators/inputs/email-validator';
import passwordValidators from 'shared/validators/inputs/password-validator';
import {useStudentDataProvider} from 'shared/context/student-sign-up.context';
import EStudentSignUpSteps from '../../enum/student-sign-up-steps.enum';
import useForm from 'shared/hooks/useForm';

const StudentBasicInformation: React.FC = () => {
    const {userData, setUserData, setStep} = useStudentDataProvider();
    const {values, handleInputChange} = useForm();

    function isInvalid(): boolean {
        return StudentBasicInformationForm.nameValidators(values.name) != undefined ||
            emailValidators(values.email) != undefined || passwordValidators(values.password) != undefined;
    }

    function onBasicInformationFilled(): void {
        setUserData({
            ...userData,
            email: userData.email,
            password: userData.password,
            name: userData.name
        });

        setStep(EStudentSignUpSteps.ABOUT);
    }

    return (
        <RegisterContainer>
            <div className="slideTopToCenter">
                <RegisterHeader title="Dados para conta"/>

                <Form>
                    <div className="formContainer">
                        <Input
                            label="Qual seu nome?"
                            name="name"
                            required={true}
                            focused={true}
                            value={values.name}
                            error={StudentBasicInformationForm.nameValidators(values.name)}
                            onChange={handleInputChange}
                        />

                        <Input
                            label="Qual o email para login?"
                            type="text"
                            name="email"
                            required={true}
                            value={values.email}
                            error={emailValidators(values.email)}
                            onChange={handleInputChange}
                        />

                        <Input
                            label="E a senha?"
                            type="password"
                            name="password"
                            required={true}
                            value={values.password}
                            error={passwordValidators(values.password)}
                            onChange={handleInputChange}
                        />
                    </div>
                </Form>
                <CustomLinearProgress variant="determinate" value={40} />
            </div>

            <SignUpStepAction
                next={() => onBasicInformationFilled()}
                previous={() => setStep(EStudentSignUpSteps.REGISTER_TYPE)}
                isNextDisabled={isInvalid()}
                hasPreviousButton={true}
                nextButtonLabel="Próximo"
            />
        </RegisterContainer>
    );
};

export default StudentBasicInformation;
