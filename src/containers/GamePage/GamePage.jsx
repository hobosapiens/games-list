import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoremIpsum } from 'react-lorem-ipsum';

import UiLoader from '@components/UI/UiLoader';
import UiButton from '@components/UI/UiButton';
import ToggleFavorite from '@components/ToggleFavorite';

import styles from './GamePage.module.scss';

const defineCurrentGame = (games, genre, name) => {
    if(!games) return;

    return games?.find(game => {
        return game.url.includes(`/${genre}/${name}`);
    })
};

const GamePage = () => {
    const {namn: name, genre} = useParams();
    const storedGames = useSelector(state => state.gamesReducer.games);

    const currentGame = useMemo(
        () => defineCurrentGame(storedGames, genre, name), 
        [genre, name, storedGames]
    )

    return (
        <>
            {!currentGame
                ? <UiLoader />
                : <Game game={currentGame} />
            }
        </>
    )
}

const Game = ({ game }) => {
    return (
        <div className={styles.game}>
            <div className={styles.game__image}>
                <img 
                    src={`http://www.royalgames.com/images/games/${game.short}/tournamentPage/${game.short}_764x260.jpg`} 
                    alt="bigImage" 
                />
            </div>
            <div className={styles.game__main}>
                <div className={styles.game__title}>
                    <div className={styles.game__name}>{game.name}</div>
                    <Link className={ styles.game__genre } to={`/spel/${game.genre}`}>#{game.genre}</Link>
                </div>
                <div className={styles.game__controls}>
                    <div className={styles.game__favorite}>
                        <ToggleFavorite type={'button'} game={game.short} />
                        
                    </div>
                    <div className={styles.game__play}>
                        <UiButton 
                            text={'Play!'} 
                            onClick={() => {alert(`Starting '${game.name}'. Have fun!`)}} 
                        />
                    </div>
                </div>
            </div>
            <div className={styles.game__description}>
                <div className={styles.game__text_top}>
                    <LoremIpsum avgWordsPerSentence={4} />
                </div>
                <div className={styles.game__gameplay}>
                    <img 
                        className={styles.game__screenshot}
                        src={`http://www.royalgames.com/images/games/${game.short}/dumps/screen_${game.short}.gif`} 
                        alt="screenShot"
                    />
                    <div className={styles.game__text_bottom}>
                        <LoremIpsum p={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

GamePage.propTypes = {
    game: PropTypes.object
}

export default GamePage;