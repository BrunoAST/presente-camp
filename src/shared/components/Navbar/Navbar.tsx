import React, {memo} from 'react';

import style from './navbar.module.css';

const Navbar = () => {
    return (
        <header className={`${style.header}`}>
            <nav className={`${style.nav}`}>
                <h1>OLA</h1>
            </nav>
        </header>
    );
}

export default memo(Navbar);
