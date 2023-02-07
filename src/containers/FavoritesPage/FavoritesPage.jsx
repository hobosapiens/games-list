import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import GamesList from '@components/GamesPage/GamesList';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const favoriteGames = useSelector(state => state.favoriteReducer.items);
    const storedGames = useSelector(state => state.gamesReducer.items);
    const [games, setGames] = useState(null);

    useEffect(() => {
        if (storedGames) {
            setGames(filteredGames(storedGames, favoriteGames))
        }
    },[storedGames, favoriteGames]);

    const filteredGames = (games, favorites) => {
        if(!favorites) return [];
        return games.filter((game) => favorites.includes(game.short));
    }

    return (
        <>
            {games?.length ? <GamesList games={games} /> : <div>No favorites yet</div>}
        </>
    )
}

export default FavoritesPage;