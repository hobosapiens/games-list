import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { setGameToFavorite, removeGameToFavorite } from '@store/actions';
import IconStar from '@components/Icons/Star';

import styles from './UiToggleFavorite.module.css';

const UiToggleFavorite = ({ game }) => {
    const [isInFavorites, setIsInFavorites] = useState(false)
    const dispatch = useDispatch();
    const favoriteGames = useSelector(state => state.favoriteReducer.favoriteGames);

    useEffect(() => {
        setIsInFavorites(favoriteGames.includes(game));
    }, [favoriteGames, game]);

    const set = game => {
        dispatch(setGameToFavorite(game));
    }

    const remove = game => {
        dispatch(removeGameToFavorite(game));
    }

    const toggleFavorite = game => {
        if(favoriteGames.includes(game)) {
            remove(game)
        } else {
            set(game)
        }
    }
    return (
        <>
            <div onClick={() => toggleFavorite(game)}>
                <IconStar color={isInFavorites ? 'yellow' : 'gray'} />
            </div>
        </>
    )
}

UiToggleFavorite.propTypes = {
    game: PropTypes.string
}

export default UiToggleFavorite;