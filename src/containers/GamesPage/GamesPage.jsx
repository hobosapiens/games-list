import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { withError } from '@hoc/withError';
import GamesList from '@components/GamesPage/GamesList';
import UiLoader from '@components/UI/UiLoader';
import { getApiGames } from '@utils/network';
import { GAME_SERVICE } from '@constants/api';

import styles from './GamesPage.module.css';

const GamesPage = ({setError, error}) => {
    const { genre } = useParams();
    const [games, setGames] = useState(null);

    useEffect(() => {
        const getGames = async (url) => {
            const res = await getApiGames(url);
            if (res) {
                setGames(filterGames(reformatGames(res.games), genre));
                setError(false);
            } else {
                setError(true);
            }
        };

        getGames(GAME_SERVICE);
    }, [setError, setGames, genre]);

    const reformatGames = games => {
        return games.map((game) => ({
            'name': game.name,
            'short': game.short,
            'url': game.url,
            'genre': game.url.match(/\/spel\/(\w+)\//)[1]
        }))
    }

    const filterGames = (games, genre) => {
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