import React from 'react';

import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import useForm from 'shared/hooks/useForm';
import Form from 'shared/components/Form/Form';
import StudentBasicInformationForm from './form/student-basic-information-form';
import Input from 'shared/components/Input/Input';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import emailValidators from 'shared/validators/inputs/email-validator';
import passwordValidators from 'shared/validators/inputs/password-validator';
import {useUserDataProvider} from 'shared/constants/student-sign-up.context';
import EStudentSignUpSteps from '../../enum/student-sign-up-steps.enum';

const StudentBasicInformation: React.FC = () => {
    const {userData, setUserData, setStep} = useUserDataProvider();
    const {values, handleInputChange} = useForm(StudentBasicInformationForm.initialValues());

    function onBasicInformationFilled(): void {
        setUserData({
            ...userData,
            email: values.email,
            password: values.password,
            name: values.name
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
            </div>

            <SignUpStepAction
                next={() => onBasicInformationFilled()}
                previous={() => setStep(EStudentSignUpSteps.REGISTER_TYPE)}
                isNextDisabled={false}
                hasPreviousButton={true}
                nextButtonLabel="Continuar"
            />
        </RegisterContainer>
    );
};

export default StudentBasicInformation;
