import { NavLink } from 'react-router-dom';

import { useSearch } from '@context/SearchProvider';

import styles from './Header.module.scss';

const Header = () => {
    const isSearch = useSearch();
    return (
        <div className={styles.header}>
            <div className={styles.header__container}> 
                <ul className={styles.navigation}>
                    <li className={styles.navigation__item}><NavLink to="/spel">Alla Spel</NavLink></li>
                    <li className={styles.navigation__item}><NavLink to="/favoriter">Favoriter</NavLink></li>
                </ul>
                <div className={styles.search}>
                    <input
                        type='text'
                        placeholder="Sök på namn"
                        value={isSearch.searchValue}
                        onChange={(event) => isSearch.handleSearch(event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;