import React from 'react';
import {useNavigate} from 'react-router-dom';

import style from './student-basic-information.module.css';
import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import useForm from 'shared/hooks/useForm';
import Form from 'shared/components/Form/Form';
import StudentBasicInformationForm from './form/student-basic-information-form';
import Input from 'shared/components/Input/Input';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';

const StudentBasicInformation: React.FC = () => {
    const navigate = useNavigate();
    const {values, handleInputChange} = useForm(StudentBasicInformationForm.initialValues());

    return (
        <RegisterContainer>
            <div className="slideTopToCenter">
                <RegisterHeader title="Informações básicas" />

                <Form>
                    <div className={`${style.formContainer}`}>
                        <Input
                            label="Nome"
                            name="name"
                            required={true}
                            focused={true}
                            value={values.name}
                            error={StudentBasicInformationForm.nameValidators(values.name)}
                            onChange={handleInputChange}
                        />

                        <Input
                            label="Email"
                            type="text"
                            name="email"
                            required={true}
                            value={values.email}
                            error={StudentBasicInformationForm.emailValidators(values.email)}
                            onChange={handleInputChange}
                        />
                    </div>
                </Form>
            </div>

            <SignUpStepAction
                next={() => {
                }}
                previous={() => navigate(BrowserRoutes.SIGN_UP)}
                isNextDisabled={false}
                hasPreviousButton={true}
                nextButtonLabel="Continuar"
            />
        </RegisterContainer>
    );
};

export default StudentBasicInformation;
