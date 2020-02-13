import {combineReducers} from 'redux'
import CounterButtonStore from './counter.reducer'
import Counter2ButtonStore from './counter2.reducer'
import AuthenticatorButtonStore from './authenticator.reducer'

export default combineReducers ({
    Counter : CounterButtonStore,
    Counter2 : Counter2ButtonStore,
    Auth : AuthenticatorButtonStore
}) 