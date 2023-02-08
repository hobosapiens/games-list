import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}> 
                <ul className={styles.navigation}>
                    <li className={styles.navigation__item}><NavLink to="/spel">All Games</NavLink></li>
                    <li className={styles.navigation__item}><NavLink to="/favoriter">Favorites</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;