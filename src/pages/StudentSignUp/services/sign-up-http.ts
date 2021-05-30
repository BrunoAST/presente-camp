import axios, {AxiosResponse} from 'axios';
import {environment} from 'environment/environment';
import IStudent from '../interface/student.interface';

export function signUpHttp(data: IStudent): Promise<AxiosResponse<IStudent>> {
    return axios.post(`${environment.API}/auth/signup`, data);
}
