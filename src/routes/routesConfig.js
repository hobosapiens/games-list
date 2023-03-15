import { Navigate } from 'react-router-dom';
import GamesPage from '@containers/GamesPage';
import GamePage from '@containers/GamePage';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '../containers/NotFoundPage';

const routesConfig = [
    {
        path: '/',
        element: <Navigate replace to="/spel" />
    },
    {
        path: '/games-list',
        element: <Navigate replace to="/spel" />
    },
    {
        path: '/spel',
        element: <GamesPage />
    },
    {
        path: '/spel/:genre',
        element: <GamesPage />
    },
    {
        path: '/spel/:genre/:namn',
        element: <GamePage />
    },
    {
        path: '/favoriter',
        element: <FavoritesPage />
    },
    {
        path: '/favoriter/:genre',
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