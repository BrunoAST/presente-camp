import React, {useCallback} from 'react';

import style from './content-card.module.css';
import IContentCard from './interfaces/content-card.interface';

const ContentCard: React.FC<IContentCard> = ({label, type, image, title, onClick, description}) => {
    const defineLabelColor = useCallback(
        () => {
            if (type === 'Blog') return 'pink-bg';
            if (type === 'Opportunities') return 'purple';
            return 'green-accent';
        },
        [type],
    );

    return (
        <article className={style.cardContainer} onClick={onClick}>
            <div className={style.header}>
                <span className={`${style.headerLabel} ${defineLabelColor()}`}>{label}</span>
                <img draggable={false} className={style.headerBanner} src={image} alt="Banner"/>
            </div>
            <div className={style.content}>
                <h2 className={style.contentTitle}>
                    {title.length > 30 ? `${title.slice(0, 45)}...` : title}
                </h2>
                <span
                    className={style.contentDescription}
                >
                    {description.length > 30 ? `${description.slice(0, 40)}...` : description}
                </span>
            </div>
        </article>
    );
};

export default ContentCard;
