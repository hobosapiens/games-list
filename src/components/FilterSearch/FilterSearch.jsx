import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './FilterSearch.module.scss';

const FilterSearch = () => {
    const genres = useSelector(state => state.gamesReducer.genres);
    const { pathname } = useLocation();
    const section =  pathname !== '/' ? `${pathname.match(/^\/[a-z]+/)[0]}/` : '/spel/';
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.filter}>
                <ul className={styles.filter__list}>
                    {genres.map(genre => (
                        <li className={styles.filter__item} key={genre}>
                            <NavLink to={section + genre}>{genre}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>           
        </div>
    )
}

FilterSearch.propTypes = {
    value: PropTypes.string
}

export default FilterSearch;