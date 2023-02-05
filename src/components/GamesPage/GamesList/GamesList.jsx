import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './GamesList.module.css';

const GamesList = ({ games }) => {
    const showThis = (index) => console.log(index)   
    return (
        <ul className={ styles.list }>
            {games.map(({name, short, url, genre}, index) => (
                <li key={name} className={ styles.item }>
                    <p className={ styles.item__name }><b>{name}</b></p>
                    <Link to={url} className={ styles.item__link }>
                        <img className={ styles.item__img } src={`http://www.royalgames.com/images/games/${short}/${short}_170x80.gif`} alt={name} />
                    </Link>
                    <p>Genre: {genre}</p>
                    <button onClick={() => showThis(index)}>Spel</button>
                </li>
            ))}
        </ul>
    )
}

GamesList.propTypes = {
    games: PropTypes.array
}

export default GamesList;