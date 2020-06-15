// action types 
export const NEW_BUTTON_ARRAY = "NEW_BUTTON_ARRAY"

// action creators
export const newButtonArrayButtons = buttonArray => ({
    type: NEW_BUTTON_ARRAY,
    payload: buttonArray,
})