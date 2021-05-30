import React from 'react';
import {Link} from 'react-router-dom';

import style from './nav-options.module.css';

const NavOptions: React.FC = () => {
    return (
        <ul className={style.links}>
            <li>
                <Link
                    className={`${style.topics} ${style.courses}`}
                    to={'/conteudo/curso'}
                >
                    Cursos
                </Link>
            </li>

            <li>
                <Link
                    className={`${style.topics} ${style.blog}`}
                    to={'/conteudo/blog'}
                >
                    Blog
                </Link>
            </li>

            <li>
                <Link
                    className={`${style.topics} ${style.opportunities}`}
                    to={'/conteudo/vaga'}
                >
                    Vagas
                </Link>
            </li>
        </ul>
    );
};

export default NavOptions;
