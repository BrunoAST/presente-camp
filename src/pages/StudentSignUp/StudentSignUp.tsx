import React from 'react';

import StudentBasicInformation from './components/StudentBasicInformation/StudentBasicInformation';
import SignUpOptions from 'shared/components/SignUpOptions/SignUpOptions';
import EStudentSignUpSteps from './enum/student-sign-up-steps.enum';
import {useUserDataProvider} from 'shared/constants/student-sign-up.context';
import ISocialsUserData from 'shared/interfaces/socials-user-data.interface';
import StudentAbout from './components/StudentAbout/StudentAbout';

const StudentSignUp: React.FC = () => {
    const {userData, setUserData, step, setStep} = useUserDataProvider();

    function onSignUpTypeSelected(data: ISocialsUserData): void {
        setUserData({
            ...userData,
            name: data?.name as string,
            email: data?.email as string,
            id: data?.id as string
        });

        if (!data?.id) {
            setStep(EStudentSignUpSteps.LOGIN);
            return;
        }

        setStep(EStudentSignUpSteps.ABOUT);
    }

    return (
        <>
            {step === EStudentSignUpSteps.REGISTER_TYPE && <SignUpOptions onSelected={(data) => {
                onSignUpTypeSelected(data as ISocialsUserData);
            }}/>}

            {step === EStudentSignUpSteps.LOGIN && <StudentBasicInformation/>}
            {step === EStudentSignUpSteps.ABOUT && <StudentAbout/>}
        </>
    );
}

export default StudentSignUp;
