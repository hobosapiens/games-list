import { useEffect, useState } from 'react';
import { withError } from '@hoc/withError';
import { getApiGames } from '@utils/network';
import { GAME_SERVICE } from '@constants/api';
import GamesList from '@components/GamesPage/GamesList';

import styles from './GamesPage.module.css';

const GamesPage = ({setError, error}) => {
    const [games, setGames] = useState(null);

    useEffect(() => {
        const getGames = async (url) => {
            const res = await getApiGames(url);
            if (res) {
                setGames(res.games);
                setError(false);
            } else {
                setError(true);
            }
        };

        getGames(GAME_SERVICE);
    }, [setError, setGames]);

    return (
        <>
            {games && <GamesList games={games} />}
        </>
    )
}

export default withError(GamesPage);