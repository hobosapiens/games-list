import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ToggleFavorite from '@components/ToggleFavorite'

import styles from './GameCard.module.scss';

const GameCard = ({ game }) => {
    return (
        <li className={ styles.card }>
            <Link to={game.url}>
                <img 
                    className={ styles.card__img } 
                    src={`http://www.royalgames.com/images/games/${game.short}/${game.short}_170x80.gif`} 
                    alt={game.name} 
                />
            </Link>
            <div className={styles.card__info}>
                <div className={styles.card__favorite}>
                    <ToggleFavorite type="icon" game={game.short} />
                </div>
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