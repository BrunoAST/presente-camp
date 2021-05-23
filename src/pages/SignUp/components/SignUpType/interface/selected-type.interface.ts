import ESignUpType from '../enum/sign-up.enum';

export default interface ISelectedType {
    selectedType: (type: ESignUpType | undefined) => void;
}
