import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addGameToFavorite, removeGameFromFavorite } from '@store/actions';
import IconStar from '@components/Icons/IconStar';

import styles from './UiToggleFavorite.module.scss';

const UiToggleFavorite = ({ type = 'icon', game }) => {
    const [isInFavorites, setIsInFavorites] = useState(false)
    const dispatch = useDispatch();
    const favoriteGames = useSelector(state => state.gamesReducer.favorites);

    useEffect(() => {
        setIsInFavorites(favoriteGames.includes(game));
    }, [favoriteGames, game]);

    const set = game => {
        dispatch(addGameToFavorite(game));
    }

    const remove = game => {
        dispatch(removeGameFromFavorite(game));
    }

    const toggleFavorite = game => {
        if(favoriteGames.includes(game)) {
            remove(game)
        } else {
            set(game)
        }
    }
    return (
        <div 
            onClick={() => toggleFavorite(game)} 
            className={type === 'icon' ? styles.toggler : styles.button}
        >
            <IconStar 
                color={isInFavorites ? '#FFCD4D' : '#F5F5F5'} 
                stroke={isInFavorites ? '#D2691E' : '#808080'} 
            />
            {type === 'button' && (
                <span>{isInFavorites ? 'Added to favorites' : 'Not yet in favorites'}</span>
            )}
        </div>
    )
}

UiToggleFavorite.propTypes = {
    type: PropTypes.string,
    game: PropTypes.string
}

export default UiToggleFavorite;