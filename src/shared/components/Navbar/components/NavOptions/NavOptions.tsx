import React from 'react';
import {Link} from 'react-router-dom';

import style from './nav-options.module.css';
import {BrowserRoutes} from '../../../../constants/browser-route.const';

const NavOptions: React.FC = () => {
    return (
        <ul className={style.links}>
            <li>
                <Link
                    className={`${style.topics} ${style.courses}`}
                    to={BrowserRoutes.COURSES}
                >
                    Cursos
                </Link>
            </li>

            <li>
                <Link
                    className={`${style.topics} ${style.blog}`}
                    to={BrowserRoutes.BLOG}
                >
                    Blog
                </Link>
            </li>

            <li>
                <Link
                    className={`${style.topics} ${style.opportunities}`}
                    to={BrowserRoutes.OPPORTUNITIES}
                >
                    Vagas
                </Link>
            </li>
        </ul>
    );
};

export default NavOptions;
