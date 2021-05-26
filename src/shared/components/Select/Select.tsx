import React, {useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import ISelect from './interface/select.interface';

const CustomSelect: React.FC<ISelect> = ({items, valueBind, label, value = '', error, handleChange, name, isRequired}) => {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                name={name}
                required={isRequired}
                onChange={handleChange}
                onBlur={() => {
                    setClicked(true);
                }}
                {...((error && clicked) && {error: true, helperText: error})}
            >
                {
                    items.map((item) =>
                        <MenuItem key={item} value={valueBind ? item[valueBind] : item}>
                            {valueBind ? item[valueBind] : item}
                        </MenuItem>
                    )
                }
            </Select>
        </FormControl>
    );
};

export default CustomSelect;
