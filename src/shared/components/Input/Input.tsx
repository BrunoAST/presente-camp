import React, {useCallback, useState} from 'react';
import {TextField} from '@material-ui/core';

const Input: React.FC<any> = ({
    label,
    type = 'text',
    error,
    required = false,
    disabled = false,
    focused = false,
    name,
    value,
    onChange
}) => {
    const [clicked, setClicked] = useState<boolean>(false);

    useCallback(
        () => {
            message()
        },
        [type, error],
    );

    function message(): string {
        if (type === 'password' && !error) return 'Ao menos 7 caracteres, 1 maiúsculo e 1 especial';
        return '';
    }

    return (
        <TextField
            variant="outlined"
            autoComplete="none"
            autoFocus={focused}
            fullWidth
            disabled={disabled}
            required={required}
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            helperText={message()}
            onBlur={() => {
                setClicked(true);
            }}
            {...((error && clicked) && {error: true, helperText: error})}
        />
    );
};

export default Input;
