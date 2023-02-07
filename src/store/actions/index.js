import { ADD_GAME_TO_FAVORITE, REMOVE_GAME_TO_FAVORITE, SET_GAMES } from '@store/constants/actionTypes';

export const setGames = games => ({
    type: SET_GAMES,
    payload: games
})

export const setGameToFavorite = game => ({
    type: ADD_GAME_TO_FAVORITE,
    payload: game
})

export const removeGameToFavorite = game => ({
    type: REMOVE_GAME_TO_FAVORITE,
    payload: game
})