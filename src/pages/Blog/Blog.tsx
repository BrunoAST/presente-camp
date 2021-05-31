import React, {lazy, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import style from './blog.module.css';
import useGetRouteId from 'shared/hooks/useGetRouteId';
import IContent from 'shared/interfaces/content.interface';
import Blogs from 'shared/constants/blog.const';

const Indication = lazy(() => import('./components/Indication/Indication'));
const Impediments = lazy(() => import('./components/Impediments/Impediments'));
const FirstAPI = lazy(() => import('./components/FirstAPI/FirstAPI'));
const DockerFundamentals = lazy(() => import('./components/DockerFundamentals/DockerFundamentals'));
const CORS = lazy(() => import('./components/CORS/CORS'));

const Blog: React.FC = () => {
    const [content, setContent] = useState<IContent>();
    const {id} = useGetRouteId(useLocation().pathname);

    useEffect(
        () => {
            function findBlog(): void {
                const blog = Blogs.filter(item => item.id.includes(id))[0];

                if (!blog) return;
                setContent(blog);
            }

            findBlog();
        },
        [id],
    );

    return (
        <div className={style.container}>
            <img draggable={false} className="banner" src={content?.banner} alt="Banner"/>

            <section className={style.contentContainer}>
                <div className={style.contentHeader}>
                    <h1 className={style.contentTitle}>{content?.title}</h1>

                    <span className={style.contentPublishDetail}>
                        <p>Por: {content?.by}</p>
                        <div className={style.divider}/>
                        <p>{content?.publishDate}</p>
                    </span>

                    {content?.content === 'Indication' && <Indication/>}
                    {content?.content === 'Impediments' && <Impediments/>}
                    {content?.content === 'First API' && <FirstAPI/>}
                    {content?.content === 'Docker' && <DockerFundamentals/>}
                    {content?.content === 'CORS' && <CORS/>}
                </div>
            </section>
        </div>
    );
};

export default Blog;
