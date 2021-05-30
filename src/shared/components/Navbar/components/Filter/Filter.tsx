import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import style from './filter.module.css';
import searchIcon from 'assets/Icons/lupa.svg';

const Filter: React.FC = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');

    return (
        <form className={style.form} onSubmit={(event) => {
            event.preventDefault();
            navigate(`/conteudo/${filter}`);
        }}>
            <label className={style.icon} htmlFor="filter">
                <img src={searchIcon} alt="Pesquisar"/>
            </label>
            <input
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
