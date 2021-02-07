// action types 
export const ADD_INPUT_TO_HISTORY = "ADD_INPUT_TO_HISTORY"
export const SET_ANS_INDEX = "SET_ANS_INDEX"
export const CLEAR_HISTORY = "CLEAR_HISTORY"
export const SET_ANGLE_TYPE = "SET_ANGLE_TYPE"
export const REMAKE_PARSER = "REMAKE_PARSER"

// action creators
export const addInputToHistory = (input, result) => ({
    type: ADD_INPUT_TO_HISTORY,
    payload: {input: input, result: result},
})

export const setAnsIndex = index => ({
    type: SET_ANS_INDEX,
    payload: index,
})

export const clearHistory = () => ({
    type: CLEAR_HISTORY,
    payload: null
})

export const setAngleType = angleTypeKey => ({
    type: SET_ANGLE_TYPE,
    payload: angleTypeKey,
})

export const remakeParser = angleTypeKey => ({
    type: REMAKE_PARSER,
    payload: angleTypeKey,
})
