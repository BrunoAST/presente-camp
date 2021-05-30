import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import style from './home.module.css';
import CustomCarousel from 'shared/components/CustomCarousel/CustomCarousel';
import ContentCard from 'shared/components/ContentCard/ContentCard';
import Blogs from 'shared/constants/blog.const';


const Home: React.FC = () => {
    const navigate = useNavigate()
    const [blog] = useState(Blogs);

    return (
        <>
            <div className={style.container}>
                <div className={style.carousel}>
                    <CustomCarousel/>
                </div>

                <section className={style.content}>
                    <h2 className={style.titles}>Publicações mais recentes do blog</h2>

                    <ul className={style.publications}>
                        {
                            blog.map((item, index) =>
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
            </div>
        </>
    );
};

export default Home;
