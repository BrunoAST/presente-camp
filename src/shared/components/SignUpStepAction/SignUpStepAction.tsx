import React from 'react';
import {ContainedButton, DefaultButton} from '@material/Button';

import ISignUpStepAction from './interface/sign-up-step-action.interface';

const SignUpStepAction: React.FC<ISignUpStepAction> = ({
   previous,
   hasPreviousButton,
   next,
   isNextDisabled,
   nextButtonLabel
}) => {
    return (
        <>
            <ContainedButton
                variant="contained"
                type="button"
                className="mb-12"
                onClick={next}
                disabled={isNextDisabled}
            >
                {nextButtonLabel}
            </ContainedButton>

            {
                hasPreviousButton &&
                <DefaultButton type="button" onClick={previous}>
                    Voltar
                </DefaultButton>
            }
        </>
    );
};

export default SignUpStepAction;
