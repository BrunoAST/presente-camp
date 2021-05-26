import {emailRegex, passwordRegex} from '../../constants/regex';

export function required(value: any): string {
    return value?.trim().length > 0 ? '' : 'Campo obrigatório'
}

export function emailPattern(email: string): string {
    if (emailRegex.test(email)) return '';

    return 'Email inválido';
}

export function passwordPattern(password: string): string {
    if (passwordRegex.test(password)) return '';

    return 'Ao menos 7 caracteres, 1 maiúsculo e 1 especial';
}
