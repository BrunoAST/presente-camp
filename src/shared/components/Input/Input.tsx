import React, {useCallback, useState} from 'react';
import {InputAdornment, TextField} from '@material-ui/core';
import InputMask from 'react-input-mask';

const Input: React.FC<any> = ({
                                  label,
                                  type = 'text',
                                  error,
                                  required = false,
                                  disabled = false,
                                  focused = false,
                                  name,
                                  value,
                                  onChange,
                                  mask,
                                  icon = '',
                              }) => {
    const [clicked, setClicked] = useState<boolean>(false);

    /*const message = useCallback(
        () => {
            if (type === 'password' && !error) return 'Ao menos 7 caracteres, 1 maiúsculo e 1 especial';
            return '';
        },
        [type, error],
    );*/

    return (
        <>
            {!mask && <TextField
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
                onBlur={() => {
                    setClicked(true);
                }}
                {...((error && clicked) && {error: true, helperText: error})}
            />}

            {mask && <InputMask
                onChange={onChange}
                onBlur={() => setClicked(true)}
                disabled={disabled}
                value={value}
                mask={mask}
            >
                {() => <TextField
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
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
                    }}
                    {...((error && clicked) && {error: true, helperText: error})}
                />}
            </InputMask>}
        </>
    );
};

export default Input;
