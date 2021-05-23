import React from 'react';

import style from './register-header.module.css';
import logo from 'assets/Logo/Normal/ReduzidaColorida.svg';
import IRegisterHeader from './interface/register-header.interface';

const RegisterHeader: React.FC<IRegisterHeader> = ({title, description}) => {
    return (
        <div className={style.header}>
            <img className="mb-24" src={logo} alt="Logo"/>
            <h1 className="signUpTitle">{title}</h1>
            <p className="font-4">{description}</p>
        </div>
    );
};

export default RegisterHeader;
