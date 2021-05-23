import React from 'react';

import style from './register-container.module.css';
import bg from 'assets/Background/BackgoundBlur.png';

const RegisterContainer: React.FC = ({children}) => {
    return (
        <>
            <img className="background" src={bg} alt="Background"/>

            <div className={style.overlay}>
                <article className={style.content}>
                    {children}
                </article>
            </div>
        </>
    );
};

export default RegisterContainer;
