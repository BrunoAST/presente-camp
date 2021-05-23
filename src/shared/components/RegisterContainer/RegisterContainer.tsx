import React from 'react';

import style from './register-container.module.css';
import bg from 'assets/Background/BackgoundBlur.png';
import LogoMobileDesktop from '../LogoMobileDesktop/LogoMobileDesktop';
import {ELogoMobileDesktop} from '../LogoMobileDesktop/interface/logo-mobile-desktop.interface';

const RegisterContainer: React.FC = ({children}) => {
    return (
        <>
            <img className="background" src={bg} alt="Background"/>

            <div className={style.overlay}>
                <picture className={style.logo}>
                    <LogoMobileDesktop type={ELogoMobileDesktop.CONTRAST}/>
                </picture>

                <article className={style.content}>
                    {children}
                </article>
            </div>
        </>
    );
};

export default RegisterContainer;
