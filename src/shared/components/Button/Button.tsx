import React from 'react';

import classes from './button.module.css';
import IButton from './interface/button.interface';

const Button: React.FC<IButton> = ({onClick, style, children}) => {
    return (
        <button
            className={classes.buttonContainer}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );
};

export default Button;
