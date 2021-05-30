import React from 'react';

import orangePattern from 'assets/Background/Landing/OrangeVector.svg';
import orangePatternMobile from 'assets/Background/Landing/OrangeVectorMobile.svg';
import pinkPattern from 'assets/Background/Landing/PinkVector.svg';
import pinkPatternMobile from 'assets/Background/Landing/PinkVectorMobile.svg';
import greenPattern from 'assets/Background/Landing/GreenVector.svg';
import greenPatternMobile from 'assets/Background/Landing/GreenVectorMobile.svg';
import style from './landing.module.css';
import Typewriter from './components/Typewriter/Typewriter';
import useIsMobile from 'shared/hooks/useIsMobile';
import Button from 'shared/components/Button/Button';
import AppSection from './components/AppSection/AppSection';
import AppSectionMobile from './components/AppSectionMobile/AppSectionMobile';
import ToolsSection from './components/ToolsSection/ToolsSection';
import ContentSection from './components/ContentSection/ContentSection';
import StrategySection from './components/StrategySection/StrategySection';
import PresenteSection from './components/PresenteSection/PresenteSection';

const Landing = () => {
    const {isMobile} = useIsMobile()

    return (
        <section className={style.landingOverflow}>
            {!isMobile && <img draggable={false} className={style.orangePattern} src={orangePattern} alt="Pattern"/>}
            {isMobile && <img draggable={false} className={style.orangePattern} src={orangePatternMobile} alt="Pattern"/>}
            {!isMobile && <img draggable={false} className={style.pinkPattern} src={pinkPattern} alt="Pattern"/>}
            {isMobile && <img draggable={false} className={style.pinkPattern} src={pinkPatternMobile} alt="Pattern"/>}

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

            {!isMobile && <img draggable={false} className={style.greenPattern} src={greenPattern} alt="Pattern"/>}
            {isMobile && <img draggable={false} className={style.greenPattern} src={greenPatternMobile} alt="Pattern"/>}

            <ToolsSection/>

            <ContentSection/>

            <StrategySection/>

            <PresenteSection/>
        </section>
    );
};

export default Landing;
