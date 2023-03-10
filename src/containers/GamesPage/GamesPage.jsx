import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import GamesList from '@containers/GamesPage/GamesList';
import UiLoader from '@components/UI/UiLoader';

const filterByGenre = (games, genre) => {
    if(!genre) return games;

    return games?.filter(game => game.genre === genre);
}

const GamesPage = () => {
    const { genre } = useParams();
    const storedGames = useSelector(state => state.gamesReducer.games);

    const filteredGames = useMemo(
        () => filterByGenre(storedGames, genre),
        [genre, storedGames]
    );

    return (
        <>
            {filteredGames ? <GamesList games={filteredGames} /> : <UiLoader />}
        </>
    )
}

export default GamesPage;