export default interface ISignUpStepAction {
    isNextDisabled?: boolean;
    nextButtonLabel?: string;
    hasNextButton?: boolean;
    next?: () => void;
    hasPreviousButton?: boolean;
    previous?: () => void;
}
