// action types 
export const ADD_CONSTANT = "ADD_CONSTANT"

// action creators
export const addConstant = (textSym, textName, textValue) => ({
    type: ADD_CONSTANT,
    payload: {textSym: textSym, textName: textName, textValue: textValue, isDefault: false},
})