import ISocialsUserData from '../../../interfaces/socials-user-data.interface';

export default interface IGoogleLoginButton {
    onUserSelected: (data: ISocialsUserData) => void;
}
