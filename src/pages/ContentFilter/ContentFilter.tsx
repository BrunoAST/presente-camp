import React from 'react';
import {useNavigate} from 'react-router-dom';

import style from './content-filter.module.css';
import useFilterContent from 'shared/hooks/useFilterContent';
import ContentCard from 'shared/components/ContentCard/ContentCard';
import ContentType from 'shared/type/content-type';
import IContent from 'shared/interfaces/content.interface';
import {BrowserRoutes} from 'shared/constants/browser-route.const';

const ContentFilter: React.FC = () => {
    const navigate = useNavigate();
    const {content, filteredContent} = useFilterContent();

    function defineLabel(type: ContentType): string {
        if (type === 'Opportunities') return 'Vagas';
        if (type === 'Blog') return 'Blog';
        return 'Cursos';
    }

    function navigateToContent(data: IContent): void {
        if (data.type === 'Opportunities' || data.type === 'Course') {
            navigate(BrowserRoutes.NOT_FOUND);
            return;
        }

        navigate(`/blog/${data.id}`);
    }

    return (
        <section className={style.container}>
            <div>
                <h1 className={`${style.title} ${content.titleColor}`}>{content.title}</h1>
                <p className={`paragraph font-3`}>{content.description}</p>
            </div>

            {filteredContent.length > 0 && <ul className={style.listContainer}>
                {
                    filteredContent.map((data, index) =>
                        <li key={index}>
                            <ContentCard
                                onClick={() => navigateToContent(data)}
                                type={data.type}
                                description={data.description}
                                image={data.banner}
                                title={data.title}
                                label={defineLabel(data.type)}
                            />
                        </li>
                    )
                }
            </ul>}

        </section>
    );
};

export default ContentFilter;
