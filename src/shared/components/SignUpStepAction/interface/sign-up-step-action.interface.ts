export default interface ISignUpStepAction {
    isNextDisabled?: boolean;
    nextButtonLabel?: string;
    previousButtonLabel?: string;
    hasNextButton?: boolean;
    next?: () => void;
    hasPreviousButton?: boolean;
    previous?: () => void;
}
