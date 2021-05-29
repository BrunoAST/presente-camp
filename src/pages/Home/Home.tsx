import React from 'react';

import style from './home.module.css';
import CustomCarousel from 'shared/components/CustomCarousel/CustomCarousel';

const Home: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.carousel}>
                <CustomCarousel/>
            </div>
        </div>
    );
};

export default Home;
