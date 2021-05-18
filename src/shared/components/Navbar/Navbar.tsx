import React, {memo} from 'react';
import {Link} from 'react-router-dom';

import desktopLogo from 'assets/Logo/Logo.svg';
import mobileLogo from 'assets/Logo/LogoReduzida.svg';
import style from './navbar.module.css';
import useIsMobile from '../../hooks/useIsMobile';
import {BrowserRoutes} from '../../constants/browser-route.const';

const Navbar = () => {
    const {isMobile} = useIsMobile();

    return (
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>
                <Link to={BrowserRoutes.LANDING}>
                    {!isMobile && <img src={desktopLogo} alt="Logo"/>}
                    {isMobile && <img src={mobileLogo} alt="Logo"/>}
                </Link>

                {!isMobile && <ul>
                    <li className={style.links}>
                        <Link data-cy="nab-sign-in-link" className={style.linksText} to={BrowserRoutes.SIGN_IN}>
                            Acessar
                        </Link>
                        <Link data-cy="nab-sign-up-link" className={style.linksText} to={BrowserRoutes.SIGN_UP}>
                            Cadastre-se
                        </Link>
                    </li>
                </ul>}

                {isMobile && <ul className={style.listMobile}>
                    <li className={style.linksMobile}>
                        <Link data-cy="nab-sign-in-link" className={style.linksText} to={BrowserRoutes.SIGN_IN}>
                            Acessar
                        </Link>
                        <Link data-cy="nab-sign-up-link" className={style.linksText} to={BrowserRoutes.SIGN_UP}>
                            Cadastre-se
                        </Link>
                    </li>
                </ul>}
            </nav>
        </header>
    );
}

export default memo(Navbar);
