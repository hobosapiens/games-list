import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers'
import { setLocalStorage } from '@utils/localStorage';

const store = configureStore({
    reducer: rootReducer,
    devtool: composeWithDevTools(applyMiddleware(thunk))
})

store.subscribe(() => {
    setLocalStorage('favoriteGames', store.getState().gamesReducer.favorites)
})

 export default store;