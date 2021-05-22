import React from 'react';

import orangePattern from 'assets/Background/Landing/OrangeVector.svg';
import orangePatternMobile from 'assets/Background/Landing/OrangeVectorMobile.svg';
import pinkPattern from 'assets/Background/Landing/PinkVector.svg';
import pinkPatternMobile from 'assets/Background/Landing/PinkVectorMobile.svg';
import style from './landing.module.css';
import Typewriter from './components/Typewriter/Typewriter';
import useIsMobile from 'shared/hooks/useIsMobile';
import Button from 'shared/components/Button/Button';
import AppSection from './components/AppSection/AppSection';
import AppSectionMobile from './components/AppSectionMobile/AppSectionMobile';
import ToolsSection from './components/ToolsSection/ToolsSection';

const Landing = () => {
    const {isMobile} = useIsMobile()

    return (
        <section className={style.landingOverflow}>
            {!isMobile && <img className={style.orangePattern} src={orangePattern} alt="Pattern"/>}
            {isMobile && <img className={style.orangePattern} src={orangePatternMobile} alt="Pattern"/>}
            {!isMobile && <img className={style.pinkPattern} src={pinkPattern} alt="Pattern"/>}
            {isMobile && <img className={style.pinkPattern} src={pinkPatternMobile} alt="Pattern"/>}

            <section className={`${style.introductionSection} ${style.landingContainer}`}>
                <div className={style.typewriter}>
                    <Typewriter/>
                </div>

                <p className={style.introductionParagraph}>
                    O <span className={`${style.introductionParagraphEmphasis} font-4`}>Presente</span> é a conexão
                    entre
                    <span className={`${style.introductionParagraphEmphasis} font-4`}>&nbsp;minorias </span> em busca de
                    qualificação
                    para o mercado de trabalho <span className={`${style.introductionParagraphEmphasis} font-4`}>e empresas </span>
                    mentoras e contratantes <span
                    className={`${style.introductionParagraphEmphasis} font-4`}>pró-diversidade</span>
                </p>

                <div className={style.introductionKnownMore}>
                    <Button
                        style={{padding: '12px 30px'}}
                        onClick={() => {
                        }}>
                        Saiba mais
                    </Button>
                </div>
            </section>

            {!isMobile && <AppSection/>}
            {isMobile && <AppSectionMobile/>}

            <ToolsSection/>
        </section>
    );
};

export default Landing;
