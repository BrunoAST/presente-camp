import React, {memo} from 'react';

import style from './navbar.module.scss';

const Navbar: React.FC = () => {
    return (
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>

            </nav>
        </header>
    );
}

export default memo(Navbar);
