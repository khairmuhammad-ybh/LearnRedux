import {combineReducers} from 'redux'
import CounterButtonStore from './counter.reducer'

export default combineReducers ({
    Counter : CounterButtonStore
})