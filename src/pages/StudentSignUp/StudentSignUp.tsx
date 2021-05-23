import React, {useState} from 'react';

import StudentBasicInformation from './components/StudentBasicInformation/StudentBasicInformation';
import SignUpOptions from 'shared/components/SignUpOptions/SignUpOptions';
import EStudentSignUpSteps from './enum/student-sign-up-steps.enum';
import IStudent from './interface/student.interface';

const StudentSignUp: React.FC = () => {
    const [data, setData] = useState<IStudent>();
    const [step, setStep] = useState<EStudentSignUpSteps>(EStudentSignUpSteps.REGISTER_TYPE);

    //TODO: CRIAR CONTEXT PARA COMPARTILHAR INFORMAÇÕES ENTRE OS COMPONENTES DE CADA SESSÃO

    return (
        <>
            {step === EStudentSignUpSteps.REGISTER_TYPE && <SignUpOptions onSelected={(data) => {
                console.log(data);
                // Pular etapa de login se Google/Facebook foram selecionados
                setStep(EStudentSignUpSteps.LOGIN);
            }}/>}
            {step === EStudentSignUpSteps.LOGIN && <StudentBasicInformation onSelected={(data) => {
                setStep(EStudentSignUpSteps.ABOUT);
            }}/>}
        </>
    );
};

export default StudentSignUp;
