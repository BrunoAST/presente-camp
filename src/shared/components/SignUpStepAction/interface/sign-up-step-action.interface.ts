export default interface ISignUpStepAction {
    isNextDisabled: boolean;
    nextButtonLabel: string;
    next: () => void;
    hasPreviousButton?: boolean;
    previous?: () => void;
}
