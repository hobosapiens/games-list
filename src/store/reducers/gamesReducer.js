import { 
    ADD_GAME_TO_FAVORITE, REMOVE_GAME_FROM_FAVORITE, 
    SET_GAMES, SET_GENRES, SET_SEARCH, SET_ERROR 
} from '@store/constants/actionTypes';
import { setGames } from '@store/actions';
import { getApiGames } from '@api/getApiGames';
import { MOCK_GAMES } from '@constants';
import { setGenres } from '../actions';
import { setError } from '../actions';
import { getLocalStorage } from '@utils/localStorage';

const initialState = {
    favorites: getLocalStorage('favoriteGames'),
    games: null,
    genres: null,
    search: '',
    error: false
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAMES:
            return {
                ...state,
                games: action.payload
            }
        case ADD_GAME_TO_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_GAME_FROM_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => item !== action.payload),
            }
        case SET_GENRES:
            return {
                ...state,
                genres: action.payload,
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
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

const reformatedGames = (games) => {
    return games.map((game) => ({
        'name': game.name,
        'short': game.short,
        'url': game.url.split('/?language=sv')[0],
        'genre': getGenreFromUrl(game.url)
    }))
}

const findGenres = games => {
    const genresArray = games.map(game => getGenreFromUrl(game.url));
    return genresArray.filter((item, index) => genresArray.indexOf(item) === index);
}

const getGenreFromUrl = url => {
    return url.match(/\/spel\/(\w+)\//)[1];
}

export const loadGames = (state = initialState) => async (dispatch) => {
    const res = await getApiGames(MOCK_GAMES);

    if (!res) {
        dispatch(setError(true))
        return;
    }

    dispatch(setGames(reformatedGames(res.games, state.favorites)));
    dispatch(setGenres(findGenres(res.games)));
  } 

export default gamesReducer;