import React, {Suspense} from 'react';

import SignUpOptions from 'shared/components/SignUpOptions/SignUpOptions';
import EStudentSignUpSteps from './enum/student-sign-up-steps.enum';
import {useStudentDataProvider} from 'shared/context/student-sign-up.context';
import ISocialsUserData from 'shared/interfaces/socials-user-data.interface';

const StudentBasicInformation = React.lazy(() => import('./components/StudentBasicInformation/StudentBasicInformation'));
const StudentAbout = React.lazy(() => import('./components/StudentAbout/StudentAbout'));
const StudentInterests = React.lazy(() => import('./components/StudentInterests/StudentInterests'));
const StudentWelcome = React.lazy(() => import('./components/StudentWelcome/StudentWelcome'));

const StudentSignUp: React.FC = () => {
    const {userData, setUserData, step, setStep} = useStudentDataProvider();

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
            {step === EStudentSignUpSteps.REGISTER_TYPE && <SignUpOptions
                initialProgress={20}
                onSelected={(data) => {
                    onSignUpTypeSelected(data as ISocialsUserData);
                }}/>}

            <Suspense fallback={<></>}>
                <div hidden={step !== EStudentSignUpSteps.LOGIN}>
                    <StudentBasicInformation/>
                </div>

                <div hidden={step !== EStudentSignUpSteps.ABOUT}>
                    <StudentAbout/>
                </div>

                <div hidden={step !== EStudentSignUpSteps.LOCATION_INTERESTS}>
                    <StudentInterests/>
                </div>

                <div hidden={step !== EStudentSignUpSteps.WELCOME}>
                    <StudentWelcome/>
                </div>
            </Suspense>
        </>
    );
};

export default StudentSignUp;
