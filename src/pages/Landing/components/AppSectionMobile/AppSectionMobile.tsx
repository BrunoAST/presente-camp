import React from 'react';

import style from './app-section-mobile.module.css';
import appBanner from 'assets/Background/Landing/AppBanner.png';
import AppButton from '../AppButton/AppButton';

const AppSectionMobile: React.FC = () => {
    return (
        <section className={style.cardContainer}>

            <div className={style.bannerContainer}>
                <img className={style.appBanner} src={appBanner} alt="Banner"/>
            </div>

            <div className={style.descriptionContainer}>
                <h1>Estude quando e onde quiser, baixe já em seu dispositivo móvel</h1>
            </div>

            <div className={style.appButtonContainer}>
                <AppButton direction="column"/>
            </div>
        </section>
    );
};

export default AppSectionMobile;
