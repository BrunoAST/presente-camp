import React from 'react';

import style from './app-section.module.css';
import AppButton from '../AppButton/AppButton';

const AppSection: React.FC = () => {
    return (
        <section className={style.cardContainer}>
            <div className={style.shape1}/>
            <div className={style.shape2}/>
            <div className={style.shape3}/>
            <article className={style.cardContainerDetail}>
                <h3 className={style.cardContainerDetailTitle}>
                    Estude quando e onde quiser, <br/> Baixe já em seu dispositivo móvel
                </h3>

                <AppButton/>
            </article>
        </section>
    );
};

export default AppSection;
