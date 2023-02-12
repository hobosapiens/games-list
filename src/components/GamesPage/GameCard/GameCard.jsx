import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import UiToggleFavorite from '@components/UI/UiToggleFavorite'

import styles from './GameCard.module.scss';

const GameCard = ({ game }) => {
    return (
        <li className={ styles.card }>
            <img 
                className={ styles.card__img } 
                src={`http://www.royalgames.com/images/games/${game.short}/${game.short}_170x80.gif`} 
                alt={game.name} 
            />
            <div className={styles.card__info}>
                <div className={styles.card__favorite}><UiToggleFavorite game={game.short} /></div>
                <div className={styles.card__text}>
                    <Link className={ styles.card__genre } to={`/spel/${game.genre}`}>#{game.genre}</Link>
                    <Link to={game.url} className={ styles.card__name }>{game.name}</Link>
                </div>
            </div>
        </li>
    )
}

GameCard.propTypes = {
    game: PropTypes.object
}

export default GameCard;