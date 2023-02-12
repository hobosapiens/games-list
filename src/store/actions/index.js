import { 
    ADD_GAME_TO_FAVORITE, REMOVE_GAME_FROM_FAVORITE, 
    SET_GAMES, SET_GENRES, SET_SEARCH, SET_ERROR 
} from '@store/constants/actionTypes';

export const setGames = games => ({
    type: SET_GAMES,
    payload: games
})

export const addGameToFavorite = game => ({
    type: ADD_GAME_TO_FAVORITE,
    payload: game
})

export const removeGameFromFavorite = game => ({
    type: REMOVE_GAME_FROM_FAVORITE,
    payload: game
})

export const setGenres = genres => ({
    type: SET_GENRES,
    payload: genres
})

export const setSearch = search => ({
    type: SET_SEARCH,
    payload: search
})

export const setError = error => ({
    type: SET_ERROR,
    payload: error
})