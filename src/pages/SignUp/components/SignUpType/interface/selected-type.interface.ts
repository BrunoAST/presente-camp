import ESignUpType from '../enum/sign-up.enum';

export default interface ISelectedType {
    selectedType: (type: ESignUpType) => void;
}
