import React from 'react';

import style from './content-filter.module.css';
import useFilterContent from 'shared/hooks/useFilterContent';

const ContentFilter: React.FC = () => {
    const {content} = useFilterContent();

    return (
        <section className={style.container}>
            <div>
                <h1 className={`${style.title} ${content.titleColor}`}>{content.title}</h1>
                <p className={`paragraph font-3`}>{content.description}</p>
            </div>
        </section>
    );
};

export default ContentFilter;
