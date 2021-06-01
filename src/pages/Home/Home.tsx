import React, {useCallback, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import style from './home.module.css';
import CustomCarousel from 'shared/components/CustomCarousel/CustomCarousel';
import ContentCard from 'shared/components/ContentCard/ContentCard';
import Blogs from 'shared/constants/blog.const';
import Opportunities from 'shared/constants/opportunities';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import CurrentCourse from './components/CurrentCourse/CurrentCourse';
import {getItem} from '../../shared/local-storage/user-local-storage';

const Home: React.FC = () => {
    const navigate = useNavigate()
    const [blogs] = useState(Blogs);
    const [opportunities] = useState(Opportunities);

    const blogsByInterests = useCallback(
        () => {
            if (!getItem().interests) return [];

            return blogs.filter(data =>
                getItem().interests.includes(data.interests)
            );
        },
        [blogs],
    );

    const opportunitiesByInterests = useCallback(
        () => {
            if (!getItem().interests) return [];

            return opportunities.filter(data =>
                getItem().interests.includes(data.interests)
            );
        },
        [opportunities],
    );

    return (
        <div className={style.container}>
            <div className={style.carousel}>
                <CustomCarousel/>
            </div>

            <section className={style.content}>
                <h2 className={style.titles}>Continue o seu curso</h2>

                <CurrentCourse/>
            </section>

            <section className={style.content}>
                <div className={style.titleWrapper}>
                    <h2 className={style.titles}>Publicações mais recentes do blog</h2>
                    {blogsByInterests().length > 3 && <Link className="emphasis orange-fg" to={'/conteudo/blog'}>Ver mais</Link>}
                </div>

                <ul className={style.publications}>
                    {
                        blogsByInterests().splice(0, 3).map((item, index) =>
                            <li key={index}>
                                <ContentCard
                                    label="Blog"
                                    type="Blog"
                                    image={item.banner}
                                    title={item.title}
                                    description={item.description}
                                    onClick={() => navigate(`/blog/${item.id}`)}
                                />
                            </li>
                        )
                    }
                </ul>
            </section>

            <section className={style.content}>
                <div className={style.titleWrapper}>
                    <h2 className={style.titles}>Vagas disponíveis para você</h2>
                    {opportunitiesByInterests().length > 3 && <Link className="emphasis orange-fg" to={BrowserRoutes.NOT_FOUND}>Ver mais</Link>}
                </div>

                <ul className={style.publications}>
                    {
                        opportunitiesByInterests().splice(0, 3).map((item, index) =>
                            <li key={index}>
                                <ContentCard
                                    label="Vaga"
                                    type="Opportunities"
                                    image={item.banner}
                                    title={item.title}
                                    description={item.description}
                                    onClick={() => navigate(BrowserRoutes.NOT_FOUND)}
                                />
                            </li>
                        )
                    }
                </ul>
            </section>
        </div>
    );
};

export default Home;
