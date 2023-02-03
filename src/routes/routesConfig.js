import { Navigate } from 'react-router-dom';
import GamesPage from '@containers/GamesPage';
import FavoritesPage from '@containers/FavoritesPage';

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
    }
];

export default routesConfig;