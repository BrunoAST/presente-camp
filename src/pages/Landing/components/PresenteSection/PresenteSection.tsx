import React from 'react';

import style from './presente-section.module.css';
import bgMobile from 'assets/Background/Landing/FooterMobileVector.png';
import bgDesktop from 'assets/Background/Landing/FooterDesktopVector.svg';
import logo from 'assets/Logo/Normal/ReduzidaColorida.svg';
import useIsMobile from 'shared/hooks/useIsMobile';

const PresenteSection: React.FC = () => {
    const {isMobile} = useIsMobile();

    return (
        <>
            <h1 className={style.title}>Estaremos presentes</h1>

            {isMobile && <img draggable={false} className={style.footerImage} src={bgMobile} alt="Imagem de rodapé"/>}
            {!isMobile && <img draggable={false} className={style.footerImage} src={bgDesktop} alt="Imagem de rodapé"/>}

            <img draggable={false} className={style.logo} src={logo} alt="Logo"/>
        </>
    );
}

export default PresenteSection;
