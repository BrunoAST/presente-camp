import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

import {cepMask} from '../../constants/mask';
import {required} from '../../validators/inputs/input-validator';
import Input from '../Input/Input';
import IInputCep from './interface/input-cep.interface';
import ViaCepHttp from './service/via-cep-http';
import {cepNumber} from '../../constants/regex';

const InputCep: React.FC<IInputCep> = ({label, isRequired, onChange, onInvalid}) => {
    const [cep, setCep] = useState<string>('');
    const [success, setSuccess] = useState<boolean>();
    const [error, setError] = useState<boolean>();

    useEffect(() => {
        function searchCep() {
            setSuccess(false);
            setError(false);

            if (!cepNumber.test(cep)) {
                onInvalid();
                return;
            }

            ViaCepHttp.searchCep(cep)
                .then((res) => {
                    onChange(res.cep, res.city, res.state);
                    setSuccess(true);
                })
                .catch(() => setError(true));
        }

        searchCep();
    }, [cep]);

    return (
        <Input
            label={label}
            name="cep"
            mask={cepMask}
            required={isRequired}
            focused={true}
            showIcon={true}
            icon={
                <>
                    {success && <FontAwesomeIcon className={`slideLeftToRight green-fg`} icon={faCheck}/>}
                    {error && <FontAwesomeIcon className={`slideLeftToRight orange-fg`} icon={faTimes}/>}
                </>
            }
            value={cep}
            error={isRequired && required(cep)}
            onChange={(event: any) => {
                setCep(() => event.target.value.replace('-', ''));
            }}
        />
    );
}

export default InputCep;
