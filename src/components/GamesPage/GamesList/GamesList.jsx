import styles from './GamesList.module.css';

const GamesList = ({ games }) => {
    return (
        <ul className={ styles.list }>
            {games.map(({name, short, url}) => (
                <li key={name} className={ styles.item }>
                    <p className={ styles.item__name }>{name}</p>
                    <a href={url} className={ styles.item__link }>
                        <img className={ styles.item__img } src={`http://www.royalgames.com/images/games/${short}/${short}_170x80.gif`} alt={name} />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default GamesList;