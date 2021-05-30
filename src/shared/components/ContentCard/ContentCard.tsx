import React from 'react';

import style from './content-card.module.css';
import IContentCard from './interfaces/content-card.interface';

const ContentCard: React.FC<IContentCard> = ({label, labelColor, image}) => {
    return (
        <article className={style.cardContainer}>
            <div className={style.header}>
                <span className={style.label} style={{backgroundColor: labelColor}}>{label}</span>
                <img src={image} alt="Banner"/>
            </div>
        </article>
    );
};

export default ContentCard;
