import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import GamesList from '@components/GamesPage/GamesList';
import UiLoader from '@components/UI/UiLoader';

import styles from './GamesPage.module.scss';

const GamesPage = () => {
    const { genre } = useParams();
    const storedGames = useSelector(state => state.gamesReducer.games);
    const [games, setGames] = useState(null);

    useEffect(() => {
        if (storedGames) {
            setGames(filteredGames(storedGames, genre))
        }
    },[storedGames, genre]);

    const filteredGames = (games, genre) => {
        if(!genre) return games;
        return games.filter(game => game.genre === genre);
    }

    return (
        <>
            {games ? <GamesList games={games} /> : <UiLoader />}
        </>
    )
}

GamesPage.propTypes = {
    setError: PropTypes.func,
    error: PropTypes.bool,
}

export default GamesPage;