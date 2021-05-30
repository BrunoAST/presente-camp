import React, {lazy, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import style from './blog.module.css';
import useGetRouteId from 'shared/hooks/useGetRouteId';
import IBlog from 'shared/interfaces/blog.interface';
import Blogs from 'shared/constants/blog.const';
import useIsMobile from 'shared/hooks/useIsMobile';

const Indication = lazy(() => import('./components/Indication/Indication'));
const Impediments = lazy(() => import('./components/Impediments/Impediments'));

const Blog: React.FC = () => {
    const {isMobile} = useIsMobile()
    const [content, setContent] = useState<IBlog>();
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
                </div>
            </section>
        </div>
    );
};

export default Blog;
