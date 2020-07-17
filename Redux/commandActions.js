// action types 
export const ADD_COMMAND = "ADD_COMMAND"

// action creators
export const addCommand = (textName, textDefine) => ({
    type: ADD_COMMAND,
    payload: {textName: textName, textDefine: textDefine, isDefault: false},
})