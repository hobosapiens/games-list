import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';

const App = () => {
  return (
    <>
      <ul>
          <li><NavLink to="/spel">Games</NavLink></li>
          <li><NavLink to="/favoriter">Favorites</NavLink></li>
      </ul>
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
