import ISocialsUserData from '../../../interfaces/socials-user-data.interface';

export default interface ISignUpOptions {
    initialProgress: number;
    onSelected: (data?: ISocialsUserData) => void;
}
