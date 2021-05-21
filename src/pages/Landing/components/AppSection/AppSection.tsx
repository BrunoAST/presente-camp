import React from 'react';

import appBanner from 'assets/Background/Landing/AppBanner.png';
import AppStore from 'assets/Background/Landing/Apple.svg';
import GooglePlay from 'assets/Background/Landing/GoolePlay.svg';
import style from './app-section.module.css';
import Button from 'shared/components/Button/Button';

const AppSection: React.FC = () => {
    return (
        <section className={style.cardContainer}>
            <img className={style.cardContainerBannerImg} loading="lazy" src={appBanner} alt="Banner"/>

            <article className={style.cardContainerDetail}>
                <h3 className={style.cardContainerDetailTitle}>Estude quando e onde quiser, <br/> Baixe já em seu
                    dispositivo móvel</h3>

                <div className={style.cardContainerButtons}>
                    <Button onClick={() => {
                    }}>
                        <div className={style.cardContainerAppButton}>
                            <img src={AppStore} loading="lazy" alt="App Store"/>
                            <div className={style.cardContainerAppButtonDescription}>
                                <span className={style.cardContainerAppButtonAvailableOn}>Disponível na</span>
                                <span className={style.cardContainerAppButtonStore}>App Store</span>
                            </div>
                        </div>
                    </Button>

                    <Button onClick={() => {
                    }}>
                        <div className={style.cardContainerAppButton}>
                            <img src={GooglePlay} loading="lazy" alt="Google Play"/>
                            <div className={style.cardContainerAppButtonDescription}>
                                <span className={style.cardContainerAppButtonAvailableOn}>Disponível na</span>
                                <span className={style.cardContainerAppButtonStore}>Google Play</span>
                            </div>
                        </div>
                    </Button>
                </div>
            </article>
        </section>
    );
};

export default AppSection;
