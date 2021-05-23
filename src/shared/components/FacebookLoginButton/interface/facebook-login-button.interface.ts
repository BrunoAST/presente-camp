import ISocialsUserData from '../../../interfaces/socials-user-data.interface';

export default interface IFacebookLoginButton {
    onUserSelected: (data: ISocialsUserData) => void;
}