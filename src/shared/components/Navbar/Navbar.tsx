import React, {memo} from 'react';
import {Link} from 'react-router-dom';

import style from './navbar.module.css';
import {BrowserRoutes} from '../../constants/browser-route.const';
import LogoMobileDesktop from '../LogoMobileDesktop/LogoMobileDesktop';
import {ELogoMobileDesktop} from '../LogoMobileDesktop/interface/logo-mobile-desktop.interface';

const Navbar = () => {
    return (
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>
                <LogoMobileDesktop type={ELogoMobileDesktop.NORMAL}/>

                <ul>
                    <li className={style.links}>
                        <Link
                            data-cy="nab-sign-in-link"
                            className={`${style.linksText} ${style.signIn}`}
                            to={BrowserRoutes.SIGN_IN}
                        >
                            Acessar
                        </Link>
                        <Link
                            data-cy="nab-sign-up-link"
                            className={`${style.linksText} ${style.signUp}`}
                            to={BrowserRoutes.SIGN_UP}
                        >
                            Cadastre-se
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default memo(Navbar);
