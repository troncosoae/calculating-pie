// action types 
export const SET_SETTINGS_ANGLE = "SET_SETTINGS_ANGLE"

// action creators
export const setSettingsAngle = angleType => ({
    type: SET_SETTINGS_ANGLE,
    payload: angleType,
})