const prefix = `[counter buttons]`;

export const DECREASE_COUNTER_STATE = `${prefix} DECREASE_COUNTER_STATE`;
export const INCREASE_COUNTER_STATE = `${prefix} INCREASE_COUNTER_STATE`;
export const UPDATE_COUNTER_STATE = `${prefix} UPDATE_COUNTER_STATE`;

export const decrease_counter_state = () => ({
    type : DECREASE_COUNTER_STATE
})

export const increase_counter_state = () => ({
    type : INCREASE_COUNTER_STATE
})

export const update_counter_state = number => ({
    type : UPDATE_COUNTER_STATE,
    payload: number
}) 