import IStudentBasicInformation from '../interface/student-basic-information-interface';
import {emailPattern, required} from 'shared/validators/inputs/input-validator';

export default class StudentBasicInformationForm {
    public static initialValues(): IStudentBasicInformation {
        return {
            name: '',
            email: '',
            password: '',
        } as IStudentBasicInformation;
    }

    public static nameValidators(name: string) {
        const hasRequiredErrorMessage = required(name);

        if (hasRequiredErrorMessage) return hasRequiredErrorMessage;
    }

    public static emailValidators(email: string) {
        console.log(email)
        const hasRequiredErrorMessage = required(email);
        const hasPatternErrorMessage = emailPattern(email);

        if (hasRequiredErrorMessage) return hasRequiredErrorMessage;
        if (hasPatternErrorMessage) return hasPatternErrorMessage;
    }
}
