import * as ACTIONS2 from '../actions/counter2.action'

const initState = {
    count2: 0
}

const Counter2ButtonStore = (state = initState, action) => {
    // console.log("reducer 2");
    // console.log(action);
    switch (action.type) {
        case ACTIONS2.DECREASE_COUNTER2_STATE: {
            return {
                count2 : state.count2 - 5
            }
        }
        case ACTIONS2.INCREASE_COUNTER2_STATE: {
            return {
                count2 : state.count2 + 5
            }
        }
        case ACTIONS2.UPDATE_COUNTER2_STATE: {
            if(action.payload.number === ""){
                return {
                    count2: 0
                }
            }
            return {
                count2 : parseInt(action.payload.number)
            }
        }
        default: return state;
    }
}

export default Counter2ButtonStore