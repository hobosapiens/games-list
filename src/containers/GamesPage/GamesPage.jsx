import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { withError } from '@hoc/withError';
import GamesList from '@components/GamesPage/GamesList';
import UiLoader from '@components/UI/UiLoader';

import styles from './GamesPage.module.css';

const GamesPage = () => {
    const { genre } = useParams();
    const storedGames = useSelector(state => state.gamesReducer.items);
    const [games, setGames] = useState(null);

    // useEffect(() => {
    //     const getGames = async (url) => {
    //         const res = await getApiGames(url);
    //         if (res) {
    //             setGamesToState(filteredGames(reformatGames(res.games), genre));
    //             setError(false);
    //         } else {
    //             setError(true);
    //         }
    //     };

    //     getGames(GAME_SERVICE);
    // });

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

export default withError(GamesPage);