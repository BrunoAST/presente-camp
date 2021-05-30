import React from 'react';

import group from 'assets/Background/Landing/Group.png';
import style from './content-section.module.css';

const ContentSection: React.FC = () => {
    return (
        <section className={`${style.contentContainer}`}>
            <div>
                <img className={`${style.contentImage} mb-36`} src={group} alt="Grupo"/>
            </div>

            <div className={style.description}>
                <h1 className={`title`}>Conteúdos produzidos e pensados para você</h1>

                <p className={style.contentParagraph}>
                    Além do conteúdo formal propriamente dito, o Presente visa estruturar materiais de estudo e
                    capacitação tendo em mente as particularidades enfrentadas por mulheres, pessoas lgbtqia+ e negras,
                    juntos nos faremos mais presentes
                </p>
            </div>
        </section>
    );
};

export default ContentSection;
