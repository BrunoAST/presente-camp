import React from 'react';

import style from './app-section.module.css';
import AppButton from '../AppButton/AppButton';
import appBanner from 'assets/Background/Landing/AppBannerDesktop.png';

const AppSection: React.FC = () => {
    return (
        <section className={style.cardContainer}>
            <div className={style.shape1}/>
            <div className={style.shape2}/>
            <div className={style.shape3}>
                <img className={style.cardContainerBannerImg} src={appBanner} alt="Banner"/>
            </div>

            <article className={style.cardContainerDetail}>
                <h3 className={style.cardContainerDetailTitle}>
                    Estude quando e onde quiser, baixe já em seu dispositivo móvel
                </h3>

                <AppButton/>
            </article>
        </section>
    );
};

export default AppSection;
