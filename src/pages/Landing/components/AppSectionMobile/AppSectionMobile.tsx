import React from 'react';

import style from './app-section-mobile.module.css';
import appBannerMobile from 'assets/Background/Landing/AppBannerMobile.png';

const AppSectionMobile: React.FC = () => {
    return (
        <section className={style.cardContainer}>
            <div className={style.bannerContainer}>
                <img src={appBannerMobile} alt="Banner"/>
            </div>

            <div className={style.descriptionContainer}>
                <h1>Estude quando e onde quiser, baixe já em seu dispositivo móvel</h1>
            </div>
        </section>
    );
};

export default AppSectionMobile;
