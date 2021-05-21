import {useState} from 'react';

const useForm = (initialValues: any) => {
    const [values, setValues] = useState(initialValues);

    function handleInputChange(event: any): void {
        const {name, value} = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    return {values, setValues, handleInputChange};
};

export default useForm;
