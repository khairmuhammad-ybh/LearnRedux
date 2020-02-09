const prefix = `[counter2 buttons]`;

export const DECREASE_COUNTER2_STATE = `${prefix} DECREASE_COUNTER2_STATE`;
export const INCREASE_COUNTER2_STATE = `${prefix} INCREASE_COUNTER2_STATE`;
export const UPDATE_COUNTER2_STATE = `${prefix} UPDATE_COUNTER2_STATE`;

export const decrease_counter2_state = () => ({
    type : DECREASE_COUNTER2_STATE
})

export const increase_counter2_state = () => ({
    type : INCREASE_COUNTER2_STATE
})

export const update_counter2_state = number => ({
    type : UPDATE_COUNTER2_STATE,
    payload: number
})