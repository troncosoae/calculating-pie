// action types 
export const ADD_INPUT_TO_HISTORY = "ADD_INPUT_TO_HISTORY"
export const SET_ANS_INDEX = "SET_ANS_INDEX"

// action creators
export const addInputToHistory = (input, result) => ({
    type: ADD_INPUT_TO_HISTORY,
    payload: {input: input, result: result},
})

export const setAnsIndex = index => ({
    type: SET_ANS_INDEX,
    payload: index,
})
