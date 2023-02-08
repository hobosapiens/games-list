import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoremIpsum } from 'react-lorem-ipsum';

import UiLoader from '@components/UI/UiLoader';
import UiButtonBig from '@components/UI/UiButtonBig';
import UiToggleFavorite from '@components/UI/UiToggleFavorite';

import styles from './GamePage.module.scss';

const GamePage = () => {
    const {namn: name, genre} = useParams();
    const [game, setGame] = useState(null);
    const storedGames = useSelector(state => state.gamesReducer.games);

    useEffect(() => {
        if(storedGames.length) {
            const currentGame = storedGames.find(object => {
                return object.url.includes(`/${genre}/${name}/`);
            });
            
            setGame(currentGame)
        }
    },[genre, name, storedGames]);

    return (
        <>
            {!game
                ? <UiLoader />
                : (
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
                                    <UiToggleFavorite game={game.short} />
                                    <span>Added to Favourite</span>
                                </div>
                                <div className={styles.game__play}>
                                    <UiButtonBig text={'Play!'} />
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
            )}
        </>
    )
}

GamePage.propTypes = {
    game: PropTypes.object
}

export default GamePage;