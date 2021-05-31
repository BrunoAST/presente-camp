import React, {useRef} from 'react';

import style from './course-tip.module.css';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const CourseTip: React.FC = () => {
    const tooltipRef = useRef<HTMLDivElement>(null);

    function toggleTooltip(): void {
        tooltipRef.current?.classList.toggle(style.dropdownVisible);
    }

    return (
        <div className={style.container}>
            <button className={style.button} onClick={toggleTooltip}>
                <FontAwesomeIcon className={`green-accent-fg`} icon={faInfoCircle}/>
            </button>

            <div ref={tooltipRef} className={style.dropdown}>
                <h4 className={style.dropdownTitle}>Sobre os cursos</h4>

                <div className={`${style.content} mt-24`}>
                    <h4 className={style.title}>Cursos Livres</h4>
                    <p className={style.description}>São aqueles que você pode realizar a qualquer momento</p>
                    <hr className={`my-24`}/>
                </div>

                <div className={`${style.content} mt-24 mb-24`}>
                    <h4 className={style.title}>Cursos Temporários</h4>
                    <p className={style.description}>
                        Criados em parceria entre o Presente e Empresas que compartilham do
                        mesmo propósito. Seu conteúdo só está disponível por um determinado período e, para fornecer um
                        suporte completo a todos, suas vagas são limitadas. Apesar disso nada impede que posteriormente
                        o conteúdo seja reformulado para o formato de curso livre 😄
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseTip;
