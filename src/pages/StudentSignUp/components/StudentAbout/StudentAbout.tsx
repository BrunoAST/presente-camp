import React from 'react';
import {CustomLinearProgress} from '@material/Progress';

import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import EStudentSignUpSteps from '../../enum/student-sign-up-steps.enum';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import {useStudentDataProvider} from 'shared/context/student-sign-up.context';
import useForm from 'shared/hooks/useForm';
import Form from 'shared/components/Form/Form';
import CustomSelect from 'shared/components/Select/Select';
import Gender from 'shared/constants/gender.const';
import {required} from 'shared/validators/inputs/input-validator';
import SexualOrientation from 'shared/constants/sexual-orientation.const';
import Race from 'shared/constants/race.const';

const StudentAbout: React.FC = () => {
    const {userData, setUserData, setStep} = useStudentDataProvider();
    const {handleInputChange, values} = useForm();

    function isInvalid(): boolean {
        return !values.race || !values.sexualOrientation || !values.gender;
    }

    function onFormFilled(): void {
        setUserData({
            ...userData,
            race: values.race,
            gender: values.gender,
            sexualOrientation: values.sexualOrientation,
        });

        setStep(EStudentSignUpSteps.LOCATION_INTERESTS);
    }

    return (
        <RegisterContainer>
            <div className="slideTopToCenter">
                <RegisterHeader title="Sobre você"/>

                <Form>
                    <div className="formContainer">
                        <CustomSelect
                            error={required(values.gender)}
                            isRequired={true}
                            items={Gender}
                            name="gender"
                            value={values.gender}
                            label="Qual o seu gênero?"
                            handleChange={handleInputChange}
                        />

                        <CustomSelect
                            error={required(values.sexualOrientation)}
                            isRequired={true}
                            items={SexualOrientation}
                            name="sexualOrientation"
                            value={values.sexualOrientation}
                            label="Qual sua orientação sexual?"
                            handleChange={handleInputChange}
                        />

                        <CustomSelect
                            error={required(values.race)}
                            isRequired={true}
                            items={Race}
                            name="race"
                            value={values.race}
                            label="Qual a sua raça?"
                            handleChange={handleInputChange}
                        />
                    </div>
                </Form>

                <CustomLinearProgress variant="determinate" value={60}/>
            </div>

            <SignUpStepAction
                next={() => onFormFilled()}
                previous={() => setStep(EStudentSignUpSteps.LOGIN)}
                isNextDisabled={isInvalid()}
                hasPreviousButton={true}
                nextButtonLabel="Próximo"
            />
        </RegisterContainer>
    );
};

export default StudentAbout;
