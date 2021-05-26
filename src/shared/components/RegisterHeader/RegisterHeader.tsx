import React from 'react';
import {useNavigate} from 'react-router-dom';

import style from './register-header.module.css';
import logo from 'assets/Logo/Normal/ReduzidaColorida.svg';
import IRegisterHeader from './interface/register-header.interface';
import {BrowserRoutes} from '../../constants/browser-route.const';

const RegisterHeader: React.FC<IRegisterHeader> = ({title, description}) => {
    const navigate = useNavigate()

    return (
        <div className={style.header}>
            <img style={{cursor: 'pointer'}} onClick={() => navigate(BrowserRoutes.LANDING)} className="mb-24"
                 src={logo} alt="Logo"/>
            <h1 className="signUpTitle">{title}</h1>
            <p className="font-4">{description}</p>
        </div>
    );
};

export default RegisterHeader;
