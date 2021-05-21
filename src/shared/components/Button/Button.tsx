import React from 'react';

import style from './button.module.css';
import IButton from './interface/button.interface';

const Button: React.FC<IButton> = ({onClick, children}) => {
    return (
        <button
            className={style.buttonContainer}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
