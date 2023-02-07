import { SET_GAMES, SET_ERROR } from '@store/constants/actionTypes';
import { setGames } from '@store/actions';
import { getApiGames } from '@utils/network';
import { GAME_SERVICE } from '@constants/api';
import { setError } from '../actions';

const initialState = {
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
        default:
            return state;
    }
}

const reformatedGames = games => {
    return games.map((game) => ({
        'name': game.name,
        'short': game.short,
        'url': game.url,
        'genre': game.url.match(/\/spel\/(\w+)\//)[1]
    }))
}

export const loadGames = () => async (dispatch) => {
    const res = await getApiGames(GAME_SERVICE);
    if (!res) {
        dispatch(setError(true))
        return;
    }
    dispatch(setGames(reformatedGames(res.games)));
  } 

export default gamesReducer;