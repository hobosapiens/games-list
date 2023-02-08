import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GamesList from '@components/GamesPage/GamesList';

import styles from './FavoritesPage.module.scss';

const FavoritesPage = () => {
    const { genre } = useParams();
    const favoriteGames = useSelector(state => state.gamesReducer.favorites);
    const storedGames = useSelector(state => state.gamesReducer.games);
    const [games, setGames] = useState(null);
    

    useEffect(() => {
        if (storedGames) {
            setGames(sortedGames(filteredGames(storedGames, favoriteGames), genre))
        }
    },[storedGames, favoriteGames, genre]);

    const filteredGames = (games, favorites) => {
        if(!favorites) return [];
        return games.filter((game) => favorites.includes(game.short));
    }

    const sortedGames = (games, genre) => {
        if(!genre) return games;
        return games.filter(game => game.genre === genre);
    }

    return (
        <>
            {games?.length ? <GamesList games={games} /> : <div>No favorites yet</div>}
        </>
    )
}

export default FavoritesPage;