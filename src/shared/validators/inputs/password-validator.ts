import {passwordPattern, required} from './input-validator';

export default function passwordValidators(password: string) {
    const hasRequiredErrorMessage = required(password);
    const hasInvalidPasswordErrorMessage = passwordPattern(password);

    if (hasRequiredErrorMessage) return hasRequiredErrorMessage;
    if (hasInvalidPasswordErrorMessage) return hasInvalidPasswordErrorMessage;
}
