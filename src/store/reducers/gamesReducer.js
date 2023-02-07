import { ADD_GAME_TO_FAVORITE, REMOVE_GAME_TO_FAVORITE, SET_GAMES, SET_ERROR } from '@store/constants/actionTypes';
import { setGames } from '@store/actions';
import { getApiGames } from '@utils/network';
import { GAME_SERVICE } from '@constants/api';
import { setError } from '../actions';
import { getLocalStorage } from '@utils/localStorage';

const initialState = {
    favorites: getLocalStorage('favoriteGames'),
    items: [],
    error: false
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                items: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case ADD_GAME_TO_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_GAME_TO_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item !== action.payload),
                }
        default:
            return state;
    }
}

const reformatedGames = (games, favorites) => {
    return games.map((game) => ({
        'name': game.name,
        'short': game.short,
        'url': game.url,
        'genre': game.url.match(/\/spel\/(\w+)\//)[1],
        'inFavorites': favorites.includes(game.short)
    }))
}

export const loadGames = (state = initialState) => async (dispatch) => {
    const res = await getApiGames(GAME_SERVICE);
    if (!res) {
        dispatch(setError(true))
        return;
    }
    dispatch(setGames(reformatedGames(res.games, state.favorites)));
  } 

export default gamesReducer;