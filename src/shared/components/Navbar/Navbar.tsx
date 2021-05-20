import React, {memo} from 'react';
import {Link} from 'react-router-dom';

import style from './navbar.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import {BrowserRoutes} from '../../constants/browser-route.const';
import LogoMobileDesktop from '../LogoMobileDesktop/LogoMobileDesktop';
import {ELogoMobileDesktop} from '../LogoMobileDesktop/interface/logo-mobile-desktop.interface';

const Navbar = () => {
    const {isMobile} = useIsMobile();

    return (
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>
                <LogoMobileDesktop type={ELogoMobileDesktop.NORMAL} />

                {!isMobile && <ul>
                    <li className={style.links}>
                        <Link data-cy="nab-sign-in-link" className={style.linksText} to={BrowserRoutes.SIGN_IN}>
                            Acessar
                        </Link>
                        <Link data-cy="nab-sign-up-link" className={style.linksText} to={BrowserRoutes.SIGN_UP_TYPE}>
                            Cadastre-se
                        </Link>
                    </li>
                </ul>}
            </nav>
        </header>
    );
};

export default memo(Navbar);
