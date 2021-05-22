import React from 'react';

import style from './app-button.module.css';
import Button from 'shared/components/Button/Button';
import appStore from 'assets/Background/Landing/Apple.svg';
import googlePlay from 'assets/Background/Landing/GoolePlay.svg';

const AppButton: React.FC = () => {
    return (
        <div className={style.cardContainerButtons}>
            <Button
                style={{
                    padding: '.6rem 0',
                    width: '230px'
                }}
                onClick={() => {
                }}>
                <div className={style.cardContainerAppButton}>
                    <img src={appStore} loading="lazy" alt="App Store"/>
                    <div className={style.cardContainerAppButtonDescription}>
                        <span className={style.cardContainerAppButtonAvailableOn}>Disponível na</span>
                        <span className={style.cardContainerAppButtonStore}>App Store</span>
                    </div>
                </div>
            </Button>

            <Button
                style={{
                    padding: '.6rem',
                    width: '230px'
                }}
                onClick={() => {
                }}>
                <div className={style.cardContainerAppButton}>
                    <img src={googlePlay} alt="Google Play"/>
                    <div className={style.cardContainerAppButtonDescription}>
                        <span className={style.cardContainerAppButtonAvailableOn}>Disponível na</span>
                        <span className={style.cardContainerAppButtonStore}>Google Play</span>
                    </div>
                </div>
            </Button>
        </div>
    );
};

export default AppButton;
