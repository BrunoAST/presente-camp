import React, {useState} from 'react';

import StudentBasicInformation from './components/StudentBasicInformation/StudentBasicInformation';
import SignUpOptions from 'shared/components/SignUpOptions/SignUpOptions';
import EStudentSignUpSteps from './enum/student-sign-up-steps.enum';

const StudentSignUp: React.FC = () => {
    const [step, setStep] = useState<EStudentSignUpSteps>(EStudentSignUpSteps.REGISTER_TYPE);

    //TODO: ADICIONAR CALLBACK NOS COMPONENTES PARA ALTERAR O O COMPONENTE VISÍVEL

    return (
        <>
            {step === EStudentSignUpSteps.REGISTER_TYPE && <SignUpOptions onSelected={(data) => {
                console.log(data);
                // Pular etapa de login se Google/Facebook foram selecionados
                setStep(EStudentSignUpSteps.LOGIN)
            }}/>}
            {step === EStudentSignUpSteps.LOGIN && <StudentBasicInformation/>}
        </>
    );
};

export default StudentSignUp;
