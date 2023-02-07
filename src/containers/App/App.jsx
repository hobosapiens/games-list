import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '../../components/Header/Header';
import { useDispatch } from "react-redux"
import { loadGames } from '@store/reducers/gamesReducer';

const App = () => {
  const dispatch = useDispatch();
  dispatch(loadGames());
  return (
    <>
      <Header />
      <Routes>
          {routesConfig.map((route, index) => (
          <Route
              key={index}
              path={route.path}
              element={route.element}
          />
          ))}
      </Routes>
    </>
  )
}

export default App;
