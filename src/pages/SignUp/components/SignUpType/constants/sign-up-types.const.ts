import company from 'assets/SignUpType/Company.png';
import student from 'assets/SignUpType/Student.png';
import tutor from 'assets/SignUpType/Tutor.png';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import ESignUpType from '../enum/sign-up.enum';

export type SignUpTypes = {
    image: string;
    url: string;
    type: ESignUpType;
};

const SignUpTypesConst: SignUpTypes[] = [
    {
        image: tutor,
        type: ESignUpType.TUTOR,
        url: BrowserRoutes.SIGN_UP_TUTOR
    },
    {
        image: company,
        type: ESignUpType.COMPANY,
        url: BrowserRoutes.SIGN_UP_COMPANY
    },
    {
        image: student,
        type: ESignUpType.STUDENT,
        url: BrowserRoutes.SIGN_UP_STUDENT
    },
];

export default SignUpTypesConst;
