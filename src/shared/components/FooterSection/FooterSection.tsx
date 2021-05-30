import React from 'react';

import arrow from 'assets/Icons/Arrow.svg';
import style from './footer.module.css';
import AppButton from '../../../pages/Landing/components/AppButton/AppButton';
import useIsMobile from 'shared/hooks/useIsMobile';

const FooterSection: React.FC = () => {
    const {isMobile} = useIsMobile()

    function toggleLinksVisibility(idIcon: string, idLinks: string): void {
        const icon = document.getElementById(idIcon) as HTMLElement;
        const links = document.getElementById(idLinks) as HTMLElement;

        if (links.style.display !== 'block') {
            links.classList.add('expand');
            links.classList.remove('collapse');
            icon.classList.remove('rotate180degToZero');
            icon.classList.add('rotate180deg');
            links.style.display = 'block';
            return;
        }

        icon.classList.remove('rotate180deg');
        icon.classList.add('rotate180degToZero');
        links.style.display = 'none';
        links.classList.add('collapse');
        links.classList.remove('expand');
    }

    return (
        <section className={style.footerContainer}>
            <div>
                <span
                    id="about"
                    className={style.titleContainer}
                    onClick={() => toggleLinksVisibility('aboutIcon', 'aboutLinks')}
                >
                    <h1 className={style.title}>Sobre nós</h1>
                    {isMobile && <img id="aboutIcon" src={arrow} alt="Expandir"/>}
                </span>
                {isMobile && <hr/>}

                <ul id="aboutLinks" className={style.linksContainer}>
                    <li className={style.links}>Valores e história</li>
                    <li className={style.links}>Nossa equipe</li>
                    <li>Trabalhe conosco</li>
                </ul>
            </div>

            <div className={style.container}>
                <span
                    id="contact"
                    className={style.titleContainer}
                    onClick={() => toggleLinksVisibility('contactIcon', 'contactLinks')}
                >
                    <h1 className={style.title}>Contato</h1>
                    {isMobile && <img id="contactIcon" src={arrow} alt="Expandir"/>}
                </span>
                {isMobile && <hr/>}

                <ul id="contactLinks" className={style.linksContainer}>
                    <li className={style.links}>Enviar mensagem</li>
                    <li className={style.links}>Tenho um feedback</li>
                    <li>F.A.Q</li>
                </ul>
            </div>

            <div className={style.container}>
                <span
                    id="content"
                    className={style.titleContainer}
                    onClick={() => toggleLinksVisibility('contentIcon', 'contentLinks')}
                >
                    <h1 className={style.title}>Conteúdo</h1>
                    {isMobile && <img id="contentIcon" src={arrow} alt="Expandir"/>}
                </span>
                {isMobile && <hr/>}

                <ul id="contentLinks" className={style.linksContainer}>
                    <li className={style.links}>Cursos on Demand</li>
                    <li className={style.links}>Cursos sazonais</li>
                    <li>Tem uma ideia? manda pra gente!</li>
                </ul>
            </div>

            <div className={style.store}>
                <AppButton direction="column"/>

                <p className={style.brasil}>Brasil</p>

                <p className={style.rights}>Termos de Uso e Privacidade
                    <br/>
                    © 2021 Presente ✋
                </p>
            </div>
        </section>
    );
};

export default FooterSection;
