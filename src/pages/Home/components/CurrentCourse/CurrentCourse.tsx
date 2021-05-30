import React from 'react';
import {useNavigate} from 'react-router-dom';

import style from './current-course.module.css';
import course from 'assets/Content/Courses/Course1.png';
import {CustomLinearProgress} from '@material/Progress';
import {ContainedButton} from '@material/Button';
import {BrowserRoutes} from 'shared/constants/browser-route.const';

const CurrentCourse: React.FC = () => {
    const navigate = useNavigate();

    return (
        <article className={style.container}>
            <img draggable={false} className={style.courseImage} src={course} alt="Curso em andamento"/>

            <div className={style.courseDescription}>
                <h1 className={style.title}>Como montar um briefing de UX Writing</h1>

                <span className={style.courseName}>
                    <p>Por: UX Writing</p>
                    <div className={style.divider}/>
                    <p>UX/UI</p>
                </span>

                <div className={style.progress}>
                    <CustomLinearProgress variant="determinate" value={10}/>
                    <span className={`${style.currentProgress} font-1`}>10%</span>
                </div>

                <ContainedButton
                    variant="contained"
                    type="button"
                    className={style.button}
                    onClick={() => navigate(BrowserRoutes.NOT_FOUND)}
                >
                    Continuar com os estudos
                </ContainedButton>
            </div>
        </article>
    );
};

export default CurrentCourse;
