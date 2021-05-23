import ISocialsUserData from '../../../interfaces/socials-user-data.interface';

export default interface ISignUpOptions {
    onSelected: (data?: ISocialsUserData) => void;
}
