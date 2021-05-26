import {useState} from 'react';
import {useStudentDataProvider} from '../context/student-sign-up.context';

const useForm = () => {
    const {userData} = useStudentDataProvider();
    const [values, setValues] = useState(userData);

    function handleInputChange(event: any): void {
        const {name, value} = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    return {userData, values, handleInputChange};
};

export default useForm;
