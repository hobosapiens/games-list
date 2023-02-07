import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
                    <>
                        <img src={
                            `http://www.royalgames.com/images/games/${game.short}/tournamentPage/${game.short}_764x260.jpg`
                        } alt="screenShot" />
                        <div>{game.name}</div>
                        <div>{game.genre}</div>
                        <img src={
                            `http://www.royalgames.com/images/games/${game.short}/dumps/screen_${game.short}.gif`
                        } alt="bigImage" />
                    </>
            )}
        </>
    )
}

GamePage.propTypes = {
    game: PropTypes.object
}

export default GamePage;