import React from 'react';
import Tools from '../Tools/Tools';

import style from './tools-section.module.css';

const ToolsSection: React.FC = () => {
    return (
        <section className={style.toolsContainer}>
            <div>
                <h1 className={style.toolsTitle}>Aqui você pode</h1>

                <p className={`${style.toolsParagraph} mt-24 mb-32`}>
                    Graças a <span className="purple-fg">empresas incríveis</span>
                    nos tornamos uma comunidade cada vez maior e autosuficiente
                </p>

                <Tools/>
            </div>

            <article>
                <p className={`${style.toolsDescription} mt-16`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor amet netus neque nisl sit. Enim hac
                    sit
                    fusce eu tempus. Ante duis amet eget tellus dapibus velit. Enim pellentesque pulvinar auctor
                    convallis.
                    Tincidunt molestie ut morbi consequat, sed morbi ipsum quam.
                </p>
                <br/>
                <p className={style.toolsDescription}>
                    Tortor facilisis blandit vestibulum fermentum quis eget mauris velit lacus. Dis mi quam amet tempus
                    rhoncus volutpat eu, eu. Viverra fringilla sit tortor imperdiet magna. Pharetra dictum hac dapibus
                    viverra sit est. Scelerisque vitae fusce ornare sed. Eu lectus venenatis sollicitudin pellentesque
                    odio
                    at magna sed. Tristique ultrices id sit imperdiet fusce lacus ut sapien.
                </p>
            </article>
        </section>
    );
};

export default ToolsSection;
