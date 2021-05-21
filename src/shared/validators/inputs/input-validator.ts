import {emailRegex} from '../../constants/regex';

export function required(value: any): string {
    return value?.trim().length > 0 ? '' : 'Campo obrigatório'
}

export function emailPattern(email: string): string {
    if (emailRegex.test(email)) return '';

    return 'Email inválido';
}
