import EStep from '../enum/step.enum';

export default interface ICurrentStep {
    currentStep: (step: EStep) => void;
}
