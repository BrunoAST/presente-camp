import jwt_decode from 'jwt-decode';
import IUserData from '../interfaces/user-data.interface';

const KEY = 'PRESENTE';

export function isLogged(): boolean {
    return true;
    // return !!getItem()?.token;
}

export function setItem(item: IUserData): void {
    localStorage.setItem(KEY, JSON.stringify(item));
}

export function getItem(): IUserData {
    return JSON.parse(localStorage.getItem(KEY) as string);
}

export function userId(): string {
    const data: any = jwt_decode(getItem().token);
    return data.id;
}
