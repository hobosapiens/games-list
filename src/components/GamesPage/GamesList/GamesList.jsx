import PropTypes from 'prop-types';

import GameCard from '@components/GamesPage/GameCard';

import styles from './GamesList.module.scss';

const GamesList = ({ games }) => {
    return (
        <ul className={ styles.list }>
            {games.map((game, index) => <GameCard game={game} key={index} />)}
        </ul>
    )
}

GamesList.propTypes = {
    games: PropTypes.array
}

export default GamesList;