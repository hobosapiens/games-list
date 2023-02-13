import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addGameToFavorite, removeGameFromFavorite } from '@store/actions';
import IconStar from '@components/Icons/IconStar';

import styles from './ToggleFavorite.module.scss';

const ToggleFavorite = ({ type = 'icon', game }) => {
    const dispatch = useDispatch();
    const [isInFavorites, setIsInFavorites] = useState(false)
    const favoriteGames = useSelector(state => state.gamesReducer.favorites);

    useEffect(() => {
        setIsInFavorites(favoriteGames.includes(game));
    }, [favoriteGames, game]);

    const toggleFavorite = game => {
        if(favoriteGames.includes(game)) {
            dispatch(removeGameFromFavorite(game));
        } else {
            dispatch(addGameToFavorite(game));
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

ToggleFavorite.propTypes = {
    type: PropTypes.string,
    game: PropTypes.string
}

export default ToggleFavorite;