import React from 'react';
import {ContainedButton, DefaultButton} from '@material/Button';

import ISignUpStepAction from './interface/sign-up-step-action.interface';

const SignUpStepAction: React.FC<ISignUpStepAction> = ({
                                                           previous,
                                                           hasPreviousButton = true,
                                                           next,
                                                           hasNextButton = true,
                                                           isNextDisabled,
                                                           nextButtonLabel,
                                                           previousButtonLabel
                                                       }) => {
    return (
        <>
            {hasNextButton && <ContainedButton
                variant="contained"
                type="button"
                className="mb-12"
                onClick={next}
                disabled={isNextDisabled}
            >
                {nextButtonLabel}
            </ContainedButton>}

            {
                hasPreviousButton &&
                <DefaultButton type="button" onClick={previous}>
                    {previousButtonLabel ? previousButtonLabel : 'Voltar'}
                </DefaultButton>
            }
        </>
    );
};

export default SignUpStepAction;
