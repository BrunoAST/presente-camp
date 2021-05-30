import axios, {AxiosResponse} from 'axios';
import IUserData from 'shared/interfaces/user-data.interface';
import {environment} from 'environment/environment';

export function signInHttp(email: string, password: string): Promise<AxiosResponse<IUserData>> {
    return axios.post(`${environment.API}/auth/signin`, {email, password});
}
