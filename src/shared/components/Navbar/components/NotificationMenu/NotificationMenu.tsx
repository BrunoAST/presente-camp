import React from 'react';
import {Link} from 'react-router-dom';

import style from './notification-menu.module.css';
import notification1 from 'assets/Icons/Notification1.svg';
import notification2 from 'assets/Icons/Notification2.svg';
import notification3 from 'assets/Icons/Notification3.svg';
import { BrowserRoutes } from 'shared/constants/browser-route.const';

const NotificationMenu: React.FC = () => {
    return (
        <>
            <h4 className={style.dropdownTitle}>Notificações</h4>

            <li className={`${style.listItem} mt-16`}>
                <Link className={style.linkContainer} to={BrowserRoutes.NOT_FOUND}>
                    <img src={notification1} alt="Notificação"/>

                    <div>
                        <h5 className={style.notificationTitle}>Já leu isso aqui?</h5>
                        <p className={style.notificationParagraph}>
                            Pessoas com mesmos interesses que você adoram esse artigo, então trouxemos para você! 🤓
                        </p>
                    </div>
                </Link>
                <hr className={`my-24`}/>
            </li>

            <li className={`${style.listItem}`}>
                <Link className={style.linkContainer} to={BrowserRoutes.NOT_FOUND}>
                    <img src={notification2} alt="Notificação"/>

                    <div>
                        <h5 className={style.notificationTitle}>Inscrições abertas:</h5>
                        <p className={style.notificationParagraph}>
                            A Apperture Science acaba de dar início a um curso temporário que é a sua cara 📝
                        </p>
                    </div>
                </Link>
                <hr className={`my-24`}/>
            </li>

            <li className={`${style.listItem} mb-24`}>
                <Link className={style.linkContainer} to={BrowserRoutes.NOT_FOUND}>
                    <img src={notification3} alt="Notificação"/>

                    <div>
                        <h5 className={style.notificationTitle}>Nova oportunidade!</h5>
                        <p className={style.notificationParagraph}>
                            Uma vaga acabou de dar match com você 🎉
                        </p>
                    </div>
                </Link>
            </li>
        </>
    );
};

export default NotificationMenu;
