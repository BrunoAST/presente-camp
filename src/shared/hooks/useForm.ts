import {useState} from 'react';

const useForm = () => {
    const [values, setValues] = useState({} as any);

    function handleInputChange(event: any): void {
        const {name, value} = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    return {values, handleInputChange};
};

export default useForm;
