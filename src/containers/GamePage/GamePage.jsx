import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoremIpsum } from 'react-lorem-ipsum';

import UiLoader from '@components/UI/UiLoader';

import styles from './GamePage.module.css';

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
                                <div className={styles.game__genre}>{game.genre}</div>
                            </div>
                            <div className={styles.game__controls}>
                                <div className={styles.game__favorite}>game__favorite</div>
                                <div className={styles.game__play}>game__play</div>
                            </div>
                        </div>

                        <div className={styles.game__description}>
                            <div className={styles.game__text_top}>
                                <LoremIpsum avgWordsPerSentence={4} startWithLoremIpsum={false} />
                            </div>
                            <div className={styles.game__gameplay}>
                                <img 
                                    className={styles.game__screenshot}
                                    src={`http://www.royalgames.com/images/games/${game.short}/dumps/screen_${game.short}.gif`} 
                                    alt="screenShot"
                                />
                                <div className={styles.game__text_bottom}>
                                    <LoremIpsum p={1} startWithLoremIpsum={false} />
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