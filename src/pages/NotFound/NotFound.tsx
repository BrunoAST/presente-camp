import React from 'react';
import { Link } from 'react-router-dom';

import style from './not-found.module.css';
import notFound from 'assets/NotFound/cuate.svg';
import bg from 'assets/Background/BackgoundBlur.png';
import {BrowserRoutes} from '../../shared/constants/browser-route.const';

const NotFound: React.FC = () => {
    return (
        <>
            <img className="background" src={bg} alt="Background"/>
            
            <section className={style.notFoundContainer}>
                <h1 className={style.notFoundTitle}>Eita!</h1>

                <p className={style.notFoundParagraph}>A página que você está tentando acessar ainda está em construção.</p>

                {/*TODO: Adicionar lógica para retornar para a home se estiver logado*/}
                <Link className={style.backHome} to={BrowserRoutes.LANDING}>Voltar para página inicial</Link>

                <img className={style.notFoundImage} src={notFound} alt="Não encontrado"/>
            </section>
        </>
    );
};

export default NotFound;
