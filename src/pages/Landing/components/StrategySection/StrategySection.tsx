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
                    Graças a <span className={`purple-fg`}>empresas incríveis</span> nos tornamos uma comunidade cada
                    vez maior e autosuficiente
                </h3>}

                {isMobile && <h3 className={`font-3 emphasis`}>
                    uma parceria do desenvolvimento do material de estudos à contratação
                </h3>}
            </div>

            <div>
                <p className={`${style.paragraph} font-2 mt-32`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor amet netus neque nisl sit. Enim hac
                    sit fusce eu tempus. Ante duis amet eget tellus dapibus velit. Enim pellentesque pulvinar auctor
                    convallis. Tincidunt molestie ut morbi consequat, sed morbi ipsum quam.
                </p>
                <br/>
                <p className={`${style.paragraph} font-2`}>
                    Tortor facilisis blandit vestibulum fermentum quis eget mauris velit lacus. Dis mi quam amet tempus
                    rhoncus volutpat eu, eu. Viverra fringilla sit tortor imperdiet magna. Pharetra dictum hac dapibus
                    viverra sit est. Scelerisque vitae fusce ornare sed. Eu lectus venenatis sollicitudin pellentesque
                    odio at magna sed. Tristique ultrices id sit imperdiet fusce lacus ut sapien.
                </p>
            </div>
        </section>
    );
};

export default StrategySection;
