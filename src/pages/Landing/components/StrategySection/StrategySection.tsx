import React from 'react';

import style from './strategy.module.css';
import useIsMobile from 'shared/hooks/useIsMobile';

const StrategySection: React.FC = () => {
    const {isMobile} = useIsMobile();

    return (
        <section className={style.strategyContainer}>
            <div>
                <h1 className={`${style.title} title`}>Ferramentas e estratégias:</h1>
                {!isMobile &&
                <h3 className={style.subtitle}>
                    União faz a força e juntos somos mais fortes
                </h3>}

                {isMobile && <h3 className={`font-3 emphasis`}>
                    uma parceria do desenvolvimento do material de estudos à contratação
                </h3>}
            </div>

            <div>
                <p className={`${style.paragraph} font-2 mt-32`}>
                    O Presente oferece uma plataforma para o suporte e ferramentas necessárias não apenas
                    para o aprendizado dos estudantes, como também para as empresas que desejam fazer parte da mudança,
                    mas não sabem bem por onde podem começar. Oferecemos auxílio durante todo o processo de
                    desenvolvimento dos cursos de forma completamente gratuita.
                </p>
            </div>
        </section>
    );
};

export default StrategySection;
