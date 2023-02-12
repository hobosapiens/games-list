import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import GameCard from '@containers/GamesPage/GameCard';

import styles from './GamesList.module.scss';

const searchGames = (games, searchValue) => {
    if(!searchValue) return games;
    
    return games?.filter((contact) => {
        return contact.name.toLowerCase().includes(searchValue.toLowerCase())
    })
}

const GamesList = ({ games }) => {
    const searchValue = useSelector(state => state.gamesReducer.search);

    const searchedGames = useMemo(
        () => searchGames(games, searchValue), 
        [games, searchValue]
    );

    return (
        <>
            {searchedGames?.length
                ? (
                    <ul className={ styles.list }>
                        {searchedGames.map((game, index) => <GameCard game={game} key={index} />)}
                    </ul>
                )
                : <div>Inget hittat 😔</div>
            }
        </>
    )
}

GamesList.propTypes = {
    games: PropTypes.array
}

export default GamesList;