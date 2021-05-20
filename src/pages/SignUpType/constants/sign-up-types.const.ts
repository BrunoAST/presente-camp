import company from 'assets/SignUpType/Company.png';
import student from 'assets/SignUpType/Student.png';
import tutor from 'assets/SignUpType/Tutor.png';
import {BrowserRoutes} from 'shared/constants/browser-route.const';

export type SignUpTypes = {
    image: string;
    url: string;
};

const SignUpTypesConst: SignUpTypes[] = [
    {
        image: company,
        url: BrowserRoutes.SIGN_UP_COMPANY
    },
    {
        image: student,
        url: BrowserRoutes.SIGN_UP_STUDENT
    },
    {
        image: tutor,
        url: BrowserRoutes.SIGN_UP_TUTOR
    },
];

export default SignUpTypesConst;
