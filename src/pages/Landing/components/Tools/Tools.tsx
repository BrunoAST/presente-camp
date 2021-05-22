import React, { useEffect, useState } from 'react';

import js from 'assets/Background/Landing/Tools/Js.svg';
import html from 'assets/Background/Landing/Tools/HTML.svg';
import css from 'assets/Background/Landing/Tools/CSS.svg';
import angular from 'assets/Background/Landing/Tools/Angular.svg';
import figma from 'assets/Background/Landing/Tools/Figma.svg';
import sketch from 'assets/Background/Landing/Tools/Sketch.svg';
import vsc from 'assets/Background/Landing/Tools/VSC.svg';
import react from 'assets/Background/Landing/Tools/React.svg';
import photoshop from 'assets/Background/Landing/Tools/Photoshop.png';
import xd from 'assets/Background/Landing/Tools/AdobeXD.png';
import illustrator from 'assets/Background/Landing/Tools/Illustrator.png';
import afterEffects from 'assets/Background/Landing/Tools/AfterEffects.png';
import style from './tools.module.css';
import useIsMobile from 'shared/hooks/useIsMobile';

const Tools: React.FC = () => {
    const [classes, setClasses] = useState<string>();
    const {isMobile} = useIsMobile()

    useEffect(() => {
        function defineClass() {
            if (isMobile) {
                setClasses(style.listContainer);
                return;
            }
            setClasses(style.gridContainer);
        }

        defineClass();
    }, [isMobile]);

    return (
        <div className={classes}>
            <img className={style.imageFilter} src={js} alt="Javascript"/>
            <img className={style.imageFilter} src={html} alt="HTML"/>
            <img className={style.imageFilter} src={css} alt="CSS"/>
            <img className={style.imageFilter} src={angular} alt="Angular"/>
            <img className={style.imageFilter} src={figma} alt="Figma"/>
            <img className={style.imageFilter} src={sketch} alt="Sketch"/>
            <img className={style.imageFilter} src={vsc} alt="Visual Studio Code"/>
            <img className={style.imageFilter} src={react} alt="React"/>
            <img className={style.imageFilter} src={photoshop} alt="Photoshop"/>
            <img className={style.imageFilter} src={xd} alt="AdobeXD"/>
            <img className={style.imageFilter} src={illustrator} alt="Adobe Illustrator"/>
            <img className={style.imageFilter} src={afterEffects} alt="Adobe After Effects"/>
        </div>
    );
};

export default Tools;
