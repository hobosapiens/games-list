import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '../../components/Header/Header';
import { useDispatch } from "react-redux"
import { loadGames } from '@store/reducers/gamesReducer';
import { withError } from '@hoc/withError';
import { useSelector } from 'react-redux';

const App = ({setError}) => {
  const isError = useSelector(state => state.gamesReducer.error);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadGames());
      setError(isError);
  },[dispatch, isError, setError]);

  return (
    <>
      <Header />
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
    </>
  )
}

export default withError(App);
