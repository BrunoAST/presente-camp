export default interface ISignUpStepAction {
    isNextDisabled: boolean;
    nextButtonLabel: string;
    next: () => void;
    previous: () => void;
}
