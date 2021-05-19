import React from 'react';

import style from './landing.module.css';
import Typewriter from './components/Typewriter/Typewriter';

const Landing = () => {
    return (
        <>
            <section className={style.presentation}>
                <Typewriter/>
                <div className={style.pattern}/>
            </section>
            {/* Apenas para testes */}
            {/*<FacebookLoginButton/>*/}
            {/*<GoogleLoginButton/>*/}
        </>
    );
}

export default Landing;
