import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={cn(styles.navigation__item, styles.all)}>
                <NavLink to="/spel">Alla Spel</NavLink>
            </div>
            <div className={cn(styles.navigation__item, styles.favorite)}>
                <NavLink to="/favoriter">Favoriter</NavLink>
            </div>
        </div>
    )
}

Navigation.propTypes = {
    value: PropTypes.string
}

export default Navigation;