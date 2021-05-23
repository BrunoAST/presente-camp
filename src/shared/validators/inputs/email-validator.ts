import {emailPattern, required} from './input-validator';

export default function emailValidators(email: string) {
    const hasRequiredErrorMessage = required(email);
    const hasPatternErrorMessage = emailPattern(email);

    if (hasRequiredErrorMessage) return hasRequiredErrorMessage;
    if (hasPatternErrorMessage) return hasPatternErrorMessage;
}
