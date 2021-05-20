import React, { useState } from 'react';

import SignUpType from './SignUpType/SignUpType';
import EStep from './enum/step.enum';

const SignUp = () => {
    const [currentStep, setCurrentStep] = useState<EStep>(EStep.TYPE);

    return (
        <>
            {currentStep === EStep.TYPE && <SignUpType currentStep={(step) => setCurrentStep(step)}/>}
            {currentStep === EStep.LOGIN && <div>LOGIN</div>}
        </>
    );
}

export default SignUp;
