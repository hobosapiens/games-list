import { useState } from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './GenresFilter.module.scss';

const GenresFilter = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const genres = useSelector(state => state.gamesReducer.genres);
  const section =  pathname !== '/' ? `${pathname.match(/^\/[a-z]+/)[0]}/` : '/spel/';

    return (
      <div className="dropdown">
        <button
          className="dropdown__toggle"
          onClick={() => setOpen(!open)}
        >
          Spelgenrer
        </button>
        {open && (
          <ul className="dropdown__menu">
            {genres.map(genre => (
                <li className={styles.dropdown__item} key={genre}>
                    <NavLink to={section + genre}>{genre}</NavLink>
                </li>
            ))}
          </ul>
        )}
      </div>
    )
}

GenresFilter.propTypes = {
    value: PropTypes.string
}

export default GenresFilter;