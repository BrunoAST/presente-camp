import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import style from './user-menu.module.css';
import {BrowserRoutes} from '../../../../constants/browser-route.const';
import Logout from '../../../../helpers/logout';
import {useAuthProvider} from '../../../../context/auth.context';

const UserMenu: React.FC = () => {
    const navigate = useNavigate();
    const {setUserData, setIsSigned} = useAuthProvider();

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
                <Link onClick={(event) => {
                    event.preventDefault();
                    Logout(() => {
                        setIsSigned(false);
                        setUserData({interests: [], email: '', name: '', token: ''});
                        navigate(BrowserRoutes.LANDING);
                    });
                }} style={{width: '100%'}} to={BrowserRoutes.LANDING}>Sair</Link>
            </li>
        </>
    );
};

export default UserMenu;
