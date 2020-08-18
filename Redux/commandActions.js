// action types 
export const ADD_COMMAND = "ADD_COMMAND"
export const REMOVE_COMMAND = "REMOVE_COMMAND"

// action creators
export const addCommand = (textName, textDefine) => ({
    type: ADD_COMMAND,
    payload: {textName: textName, textDefine: textDefine, isDefault: false},
})

export const removeCommand = index => ({
    type: REMOVE_COMMAND,
    payload: index,
})
