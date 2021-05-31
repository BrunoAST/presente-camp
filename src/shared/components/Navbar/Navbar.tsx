import React, {useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {faBell, faSignOutAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import style from './navbar.module.css';
import {BrowserRoutes} from '../../constants/browser-route.const';
import LogoMobileDesktop from '../LogoMobileDesktop/LogoMobileDesktop';
import {ELogoMobileDesktop} from '../LogoMobileDesktop/interface/logo-mobile-desktop.interface';
import UserMenu from './components/UserMenu/UserMenu';
import NotificationMenu from './components/NotificationMenu/NotificationMenu';
import NavOptions from './components/NavOptions/NavOptions';
import Filter from './components/Filter/Filter';
import {useAuthProvider} from '../../context/auth.context';
import useIsMobile from '../../hooks/useIsMobile';
import {setItem} from '../../local-storage/user-local-storage';

const Navbar = () => {
    const navigate = useNavigate();
    const {isMobile} = useIsMobile();
    const userMenu = useRef<HTMLUListElement>(null);
    const notificationMenu = useRef<HTMLUListElement>(null);
    const {isSigned, setIsSigned} = useAuthProvider();

    function toggleMenu(element: HTMLUListElement | null, toggleClass: string): void {
        if (element?.classList.contains(toggleClass)) {
            element?.classList.remove(toggleClass);
            return;
        }

        element?.classList.add(toggleClass);
    }

    return (
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>
                <LogoMobileDesktop type={ELogoMobileDesktop.NORMAL}/>

                {(isSigned) && <>
                    <NavOptions/>

                    <Filter/>

                    <div className={style.actionsContainer}>
                        {!isMobile && <button
                            onClick={() => {
                                toggleMenu(notificationMenu.current, style.dropdownNotificationOptionsVisible);
                                userMenu.current?.classList.remove(style.dropdownUserOptionsVisible);
                            }}
                            className={style.actions}
                        >
                            <FontAwesomeIcon icon={faBell}/>
                            <ul ref={notificationMenu}
                                className={`${style.dropdownNotificationOptions} ${style.dropdown}`}>
                                <NotificationMenu/>
                            </ul>
                        </button>}

                        {!isMobile && <button
                            onClick={() => {
                                toggleMenu(userMenu.current, style.dropdownUserOptionsVisible);
                                notificationMenu.current?.classList.remove(style.dropdownNotificationOptionsVisible);
                            }}
                            className={style.actions}
                        >
                            <FontAwesomeIcon icon={faUserCircle}/>
                            <ul ref={userMenu} className={`${style.dropdownUserOptions} ${style.dropdown}`}>
                                <UserMenu/>
                            </ul>
                        </button>}

                        {isMobile && <button
                            onClick={() => {
                                setItem({token: '', name: '', email: ''});
                                setIsSigned(false);
                                navigate(BrowserRoutes.LANDING);
                            }}
                            className={style.actions}
                        >
                            <FontAwesomeIcon className={`orange-fg`} icon={faSignOutAlt}/>
                        </button>}
                    </div>

                </>}

                {!isSigned && <ul>
                    <li className={style.links}>
                        <Link
                            data-cy="nav-sign-in-link"
                            className={`${style.linksText} ${style.signIn}`}
                            to={BrowserRoutes.SIGN_IN}
                        >
                            Acessar
                        </Link>
                        <Link
                            data-cy="nav-sign-up-link"
                            className={`${style.linksText} ${style.signUp}`}
                            to={BrowserRoutes.SIGN_UP}
                        >
                            Cadastre-se
                        </Link>
                    </li>
                </ul>}
            </nav>
        </header>
    );
};

export default Navbar;
