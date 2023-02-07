import { SET_GAMES } from '@store/constants/actionTypes';
import { setGames } from '@store/actions';
import { getApiGames } from '@utils/network';
import { GAME_SERVICE } from '@constants/api';

const initialState = [];

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                items: action.payload
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
    dispatch(setGames(reformatedGames(res.games)))
  } 

export default gamesReducer;