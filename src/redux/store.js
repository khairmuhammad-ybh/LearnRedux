import { createStore , compose, applyMiddleware } from 'redux'
import MainReduer from './reducers/main.reducer'
import {persistReducer, persistStore} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose

const peristConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['Auth']
}

const rootReducer = (state, action) => {
    return MainReduer(state, action)
}

const middlewares = []

const persistedReducer = persistReducer(peristConfig, rootReducer)

export const store = createStore (
    persistedReducer,
    composeEnhancer(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store)
 
// export default store