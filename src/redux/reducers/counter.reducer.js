import * as ACTIONS from '../actions/counter.action'

const initState = {
    count: 0
}

const CounterButtonStore = (state = initState, action) => {
    // console.log("reducer 1");
    // console.log(action);
    switch (action.type) {
        case ACTIONS.DECREASE_COUNTER_STATE: {
            return {
                count : state.count - 1
            }
        }
        case ACTIONS.INCREASE_COUNTER_STATE: {
            return {
                count : state.count + 1
            }
        }
        case ACTIONS.UPDATE_COUNTER_STATE: {
            if(action.payload.number === ''){
                return {
                    count: 0
                } 
            }
            return {
                count : parseInt(action.payload.number)
            }
        }
        default: return state;
    }
}

export default CounterButtonStore