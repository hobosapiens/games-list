import { useState, useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import IconArrow from '@components/Icons/IconArrow';

import styles from './GenresFilter.module.scss';

const handleUrl = url => {
  if(!url) return;

  let [section, genre] = url.slice(1).split('/');

  return ({
    section: section || '/spel/',
    genre: genre || null
  })
}

const GenresFilter = () => {
  const [open, setOpen] = useState(false);
  const [currentPageParams, setCurrentPageParams] = useState(null);

  const { pathname } = useLocation();
  const dropdown = useRef(null);
  const allGenres = useSelector(state => state.gamesReducer.genres);

  useEffect(() => {
    setCurrentPageParams(handleUrl(pathname))

    const handleClickOutside = (event) => {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdown, pathname]);

  return (
    <div className={styles.dropdown} ref={dropdown}>
      <button
        className={styles.dropdown__toggler}
        onClick={() => setOpen(!open)}
      >
        <span>Spelgenrer</span>
        <span className={cn(styles.dropdown__icon, open && styles.active)}>
          <IconArrow />
        </span>
      </button>
      <ul className={cn(styles.dropdown__menu, open && styles.show)}>
        {allGenres?.map(genre => (
            <li 
              className={cn(
                styles.dropdown__item, 
                currentPageParams?.genre === genre && styles.active
              )}
              key={genre}
            >
              <NavLink 
                to={`${currentPageParams?.section}/${genre}`} 
                className={styles.dropdown__link}
              >
                {genre}
              </NavLink>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default GenresFilter;