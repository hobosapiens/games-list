import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './FavoritesPage.module.css';

const FavoritesPage = () => {
    const favoriteGames = useSelector(state => state.favoriteReducer.favoriteGames);

    return (
        <>
            <div>{favoriteGames}</div>
        </>
    )
}

FavoritesPage.propTypes = {
    value: PropTypes.string
}

export default FavoritesPage;