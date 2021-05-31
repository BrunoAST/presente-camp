import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import style from './current-course.module.css';

import {CustomLinearProgress} from '@material/Progress';
import {ContainedButton} from '@material/Button';
import {BrowserRoutes} from 'shared/constants/browser-route.const';
import CurrentCourseConst from './constants/current-course.const';
import {getItem} from 'shared/local-storage/user-local-storage';

const CurrentCourse: React.FC = () => {
    const [courses] = useState(CurrentCourseConst);
    const navigate = useNavigate();

    const currentCourseByInterests = useCallback(
        () => {
            return courses.find(data => getItem().interests.includes(data.interest));
        },
        [courses],
    );

    return (
        <article className={style.container}>
            <img draggable={false} className={style.courseImage} src={currentCourseByInterests()?.banner} alt="Curso em andamento"/>

            <div className={style.courseDescription}>
                <h1 className={style.title}>{currentCourseByInterests()?.title}</h1>

                <span className={style.courseName}>
                    <p>{currentCourseByInterests()?.subtitle}</p>
                    <div className={style.divider}/>
                    <p>{currentCourseByInterests()?.interest}</p>
                </span>

                <div className={style.progress}>
                    <CustomLinearProgress variant="determinate" value={currentCourseByInterests()?.progress}/>
                    <span className={`${style.currentProgress} font-1`}>{currentCourseByInterests()?.progress}%</span>
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
