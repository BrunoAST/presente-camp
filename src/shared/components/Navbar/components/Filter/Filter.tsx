import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import style from './filter.module.css';
import useIsMobile from 'shared/hooks/useIsMobile';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Filter: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const {isMobile} = useIsMobile();
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');

    useEffect(
        () => {
            showSearchInput(false);
        },
        [isMobile, showSearchInput],
    );

    function showSearchInput(show: boolean): void {
        if (!isMobile) {
            formRef.current?.classList.remove(style.overForm);
            labelRef.current?.classList.remove(style.overIcon);
            inputRef.current?.classList.remove(style.overFilter);
            return;
        }
        if (show) {
            formRef.current?.classList.toggle(style.overForm);
            labelRef.current?.classList.toggle(style.overIcon);
            inputRef.current?.classList.toggle(style.overFilter);
        }
    }

    return (
        <form ref={formRef} className={style.form} onSubmit={(event) => {
            event.preventDefault();
            navigate(`/conteudo/${filter}`);
        }}>
            <label ref={labelRef} onClick={() => showSearchInput(true)} className={style.icon} htmlFor="filter">
                <FontAwesomeIcon className={`font-2`} icon={faSearch}/>
            </label>
            <input
                ref={inputRef}
                id={"filter"}
                className={style.filter}
                type="text"
                placeholder="Pesquisar"
                onChange={(event) => setFilter(event.target.value)}
            />
        </form>
    );
};

export default Filter;
