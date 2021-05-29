import React from 'react';
import {Link} from 'react-router-dom';

import style from './user-menu.module.css';
import {BrowserRoutes} from '../../../../constants/browser-route.const';

const UserMenu: React.FC = () => {
    function logout(): void {
        console.log('LOGOUT');
    }

    return (
        <>
            <h4 className={style.dropdownTitle}>Conta</h4>
            <li className={`${style.listItem} mt-24`}>
                <Link to={BrowserRoutes.NOT_FOUND}>Ver meu perfil</Link>
                <hr className={`my-24`}/>
            </li>

            <li className={style.listItem}>
                <Link to={BrowserRoutes.NOT_FOUND}>Configurar minha conta</Link>
                <hr className={`my-24`}/>
            </li>

            <li className={style.listItem}>
                <Link to={BrowserRoutes.NOT_FOUND}>Sobre o presente</Link>
                <hr className={`my-24`}/>
            </li>

            <li className={`${style.listItem} mb-24`}>
                <button className={style.logout} onClick={logout}>Sair</button>
            </li>
        </>
    );
};

export default UserMenu;
