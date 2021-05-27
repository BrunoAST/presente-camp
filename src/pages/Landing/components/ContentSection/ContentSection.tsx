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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor amet netus neque nisl sit. Enim hac
                    sit
                    fusce eu tempus. Ante duis amet eget tellus dapibus velit. Enim pellentesque pulvinar auctor
                    convallis.
                    Tincidunt molestie ut morbi consequat, sed morbi ipsum quam. Tortor facilisis blandit vestibulum
                    fermentum quis eget
                </p>
            </div>
        </section>
    );
};

export default ContentSection;
