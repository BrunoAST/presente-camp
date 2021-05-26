import React, {createContext, ReactNode, useContext, useState} from 'react';
import IStudent from '../../pages/StudentSignUp/interface/student.interface';
import EStudentSignUpSteps from '../../pages/StudentSignUp/enum/student-sign-up-steps.enum';

type UserDataContext = {
    userData: IStudent;
    setUserData: (userData: IStudent) => void;
    step: EStudentSignUpSteps;
    setStep: (step: EStudentSignUpSteps) => void;
}

const UserDataContext = createContext<UserDataContext>({
    userData: {
        email: '',
        name: '',
        about: '',
        gender: '',
        id: '',
        graduation: '',
        interests: [] as string[],
        password: '',
        locationCity: '',
        locationState: ''
    } as IStudent,
    setUserData: userData => console.warn('no data provided'),
    step: EStudentSignUpSteps.REGISTER_TYPE,
    setStep: step => console.warn('no step provided'),
});

const UserDataProvider: React.FC<ReactNode> = ({children}) => {
    const [userData, setUserData] = useState<IStudent>({} as IStudent);
    const [step, setStep] = useState<EStudentSignUpSteps>(EStudentSignUpSteps.REGISTER_TYPE);

    return (
        <UserDataContext.Provider value={{userData, setUserData, step, setStep}}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserDataProvider;

export function useStudentDataProvider() {
    const context = useContext(UserDataContext);
    const {userData, setUserData, step, setStep} = context;

    return {step, userData, setUserData, setStep};
}

