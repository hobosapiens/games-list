import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import GamesList from '@components/GamesPage/GamesList';

const filterGames = (games, favorites) => {
    if(!favorites) return [];
    return games.filter((game) => favorites.includes(game.short));
}

const sortGames = (games, genre) => {
    if(!genre) return games;

    return games?.filter(game => game.genre === genre);
}

const FavoritesPage = () => {
    const { genre } = useParams();
    const favoriteGames = useSelector(state => state.gamesReducer.favorites);
    const storedGames = useSelector(state => state.gamesReducer.games);

    const sortedFilteredGames = useMemo(
        () => sortGames(filterGames(storedGames, favoriteGames), genre), 
        [favoriteGames, genre, storedGames]
    );
    
    return (
        <>
            {sortedFilteredGames?.length 
                ? <GamesList games={sortedFilteredGames} /> 
                : <div>No favorites yet</div>
            }
        </>
    )
}

export default FavoritesPage;