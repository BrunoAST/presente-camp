import React from 'react';
import {CustomLinearProgress} from '@material/Progress';

import RegisterContainer from 'shared/components/RegisterContainer/RegisterContainer';
import RegisterHeader from 'shared/components/RegisterHeader/RegisterHeader';
import EStudentSignUpSteps from '../../enum/student-sign-up-steps.enum';
import SignUpStepAction from 'shared/components/SignUpStepAction/SignUpStepAction';
import {useStudentDataProvider} from 'shared/context/student-sign-up.context';

const StudentAbout: React.FC = () => {
    const {userData, setUserData, setStep} = useStudentDataProvider();

    return (
        <RegisterContainer>
            <div className="slideTopToCenter">
                <RegisterHeader title="Sobre você"/>

                <CustomLinearProgress variant="determinate" value={75} />
            </div>

            <SignUpStepAction
                next={() => {}}
                previous={() => setStep(EStudentSignUpSteps.LOGIN)}
                isNextDisabled={false}
                hasPreviousButton={true}
                nextButtonLabel="Próximo"
            />
        </RegisterContainer>
    );
};

export default StudentAbout;
