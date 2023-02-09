import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GameCard from '@components/GamesPage/GameCard';
import { useSearch } from '@context/SearchProvider';
import UiLoader from '@components/UI/UiLoader';

import styles from './GamesList.module.scss';

const GamesList = ({ games }) => {
    const isSearch = useSearch();
    const [gamesAfterSearch, setGamesAfterSearch] = useState(null);

    useEffect(() => {
        const searchedGames = games => {
            if(!isSearch.searchValue) return games;
            
            return games.filter((contact) => {
                return contact.name.toLowerCase().includes(isSearch.searchValue.toLowerCase())
            })
        }

        setGamesAfterSearch(searchedGames(games));
    },[games, isSearch.searchValue]);

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