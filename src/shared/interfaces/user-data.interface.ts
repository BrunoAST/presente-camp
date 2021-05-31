import ContentType from '../type/content-type';

export default interface IUserData {
    email: string;
    name: string;
    interests: ContentType[];
    token: string;
}
