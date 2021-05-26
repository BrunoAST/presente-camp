import IStudentBasicInformation from '../interface/student-basic-information-interface';
import {required} from 'shared/validators/inputs/input-validator';

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
}
