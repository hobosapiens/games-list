import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import routesConfig from '@routes/routesConfig';
import { loadGames } from '@store/reducers/gamesReducer';
import GenresFilter from '@components/Header/GenresFilter';
import Navigation from '@components/Header/Navigation';
import Search from '@components/Header/Search';
import ErrorMessage from '@components/ErrorMessage';

import styles from './App.module.scss';

const App = () => {
  const isError = useSelector(state => state.gamesReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadGames());
  },[dispatch]);

  return (
    <>
      <Header />
      {isError 
        ? <ErrorMessage />
        : <Content />
      }
    </>
  )
}

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__container}>
            <Navigation />
            <Search />
            <GenresFilter />
        </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className="content">
      <Routes>
          {routesConfig.map((route, index) => (
          <Route
              key={index}
              path={route.path}
              element={route.element}
          />
          ))}
      </Routes>
    </div>
  )
}

export default App;
