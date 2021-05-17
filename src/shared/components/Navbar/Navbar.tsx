import React, { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from './navbar.module.css';
import { BrowserRoutes } from '../../constants/browser-route.const';
import Button from '../Button/Button';

const Navbar: React.FC = () => {
    const [filter, setFilter] = useState<string>('');
    const [isCartOpened, setIsCartOpened] = useState<boolean>(false);
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        if (!filter || !filter?.trim()) {
            navigate(`${BrowserRoutes.HOME}`);
            return;
        }

        navigate(`${BrowserRoutes.HOME}/${filter}`);
    }

    return (
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>
                <Link
                    className={`${style.linkHome}`}
                    to={BrowserRoutes.HOME}
                    onClick={() => setFilter('')}
                    aria-label="Voltar para a página principal"
                >
                    {/*<img*/}
                    {/*    className={`${style.icon} ${style.iconMobile}`}*/}
                    {/*    src={theme?.images.logoIcon}*/}
                    {/*    alt="Logo"*/}
                    {/*    width="150px"*/}
                    {/*    height="50px"*/}
                    {/*/>*/}
                    {/*<img className={`${style.icon} ${style.iconDesktop}`} src={theme?.images.logoFull} alt="Logo" />*/}
                </Link>

                <div className={`${style.searchWrapper}`}>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={style.input}
                            type="text"
                            data-cy="searchBar"
                            placeholder="Placeholder"
                            onChange={(event) => setFilter(event.target.value)}
                            value={filter}
                        />
                    </form>

                    <Button
                        click={(event) => handleSubmit(event)}
                        hasRipple={true}
                        type="Icon"
                        dataCy="searchButton"
                        ariaLabel="Botão de pesquisa"
                        style={{
                            position: 'absolute',
                            right: '0'
                        }}
                    >
                        {/*<img*/}
                        {/*    className={`${style.searchIcon}`}*/}
                        {/*    src={theme?.images.icons.searchIco}*/}
                        {/*    alt="Ícone de pesquisa"*/}
                        {/*    width="20px"*/}
                        {/*    height="20px"*/}
                        {/*/>*/}
                    </Button>
                </div>

                <div className={`${style.cartButton}`}>
                    <Button
                        hasRipple={true}
                        type="Label"
                        dataCy="cartButton"
                        ariaLabel="Exibir carrinho"
                        style={{
                            backgroundColor: 'transparent',
                            display: 'flex',
                            gap: '12px',
                        }}
                        click={() => setIsCartOpened(true)}
                    >
                        {/*<img*/}
                        {/*    width="25px"*/}
                        {/*    height="25px"*/}
                        {/*    src={theme?.images.icons.cartIcon}*/}
                        {/*    alt="Ícone do carrinho"*/}
                        {/*/>*/}

                        <span data-cy="cartItemsCounter">
                            {/*{cartItem.reduce((acc, current) => acc + current.quantity, 0)}*/}
                        </span>
                    </Button>
                </div>
            </nav>
        </header>
    );
}

export default memo(Navbar);
