import { Navigate } from 'react-router-dom';
import GamesPage from '@containers/GamesPage';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '../containers/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        element: <Navigate replace to="/spel" />
    },
    {
        path: '/spel',
        element: <GamesPage />
    },
    {
        path: '/favoriter',
        element: <FavoritesPage />
    },
    {
        path: '/hittades-inte',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export default routesConfig;