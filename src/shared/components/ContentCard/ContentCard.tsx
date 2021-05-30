import React, {useCallback} from 'react';

import style from './content-card.module.css';
import IContentCard from './interfaces/content-card.interface';

const ContentCard: React.FC<IContentCard> = ({label, type, image, title, onClick, description}) => {
    const defineLabelColor = useCallback(
        () => {
            return type === 'Blog' ? 'pink-bg' : 'purple';
        },
        [type],
    );

    return (
        <article className={style.cardContainer} onClick={onClick}>
            <div className={style.header}>
                <span className={`${style.headerLabel} ${defineLabelColor()}`}>{label}</span>
                <img className={style.headerBanner} src={image} alt="Banner"/>
            </div>
            <div className={style.content}>
                <h2 className={style.contentTitle}>{title}</h2>
                <span className={style.contentDescription}>{description}</span>
            </div>
        </article>
    );
};

export default ContentCard;
