import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import GameCard from '@components/GamesPage/GameCard';

import styles from './GamesList.module.scss';

const GamesList = ({ games }) => {
    const searchValue = useSelector(state => state.gamesReducer.search);
    const [gamesAfterSearch, setGamesAfterSearch] = useState(null);

    // useMemo
    useEffect(() => {
        const searchedGames = games => {
            if(!searchValue) return games;
            
            return games.filter((contact) => {
                return contact.name.toLowerCase().includes(searchValue.toLowerCase())
            })
        }

        setGamesAfterSearch(searchedGames(games));
    },[games, searchValue]);

    return (
        <>
            {gamesAfterSearch?.length
                ? (
                    <ul className={ styles.list }>
                        {gamesAfterSearch.map((game, index) => <GameCard game={game} key={index} />)}
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