import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <ul className={styles.navigation}>
            <li className={styles.navigation__item}><NavLink to="/spel">Alla Spel</NavLink></li>
            <li className={styles.navigation__item}><NavLink to="/favoriter">Favoriter</NavLink></li>
        </ul>
    )
}

Navigation.propTypes = {
    value: PropTypes.string
}

export default Navigation;