import {combineReducers} from 'redux'
import { create, all } from 'mathjs'

import { defaultCommandsArray, defaultConstantsArray, defaultButtonsArray } from './defaultValues'
import { ADD_INPUT_TO_HISTORY, SET_ANS_INDEX, SET_ANGLE_TYPE, CLEAR_HISTORY } from './mainActions'
import { NEW_BUTTON_ARRAY } from './buttonsActions'
import { SET_SETTINGS_ANGLE } from './settingsActions'
import { ADD_CONSTANT } from './constantActions'
import { change_angle_type } from '../MathBox/mathBox'


const math = create(all, {
})


const mainReducer = (state = {ansIndex: 0, parser: math.parser(), inputsArray: []}, action) => {
    switch (action.type) {
        case ADD_INPUT_TO_HISTORY:
            return {
                ...state,
                ansIndex: 0,
                inputsArray: [
                    {textInput: action.payload.input, textResult: action.payload.result},
                    ...state.inputsArray,
                ]
            }
        case SET_ANS_INDEX:
            return {
                ...state,
                ansIndex: action.payload,
            }
        case SET_ANGLE_TYPE:
            return {
                ...state,
                parser: change_angle_type(action.payload, state.parser),
            }
        case CLEAR_HISTORY:
            return {
                ...state,
                inputsArray: [],
                parser: math.parser(),
            }
        default:
            return state
    }
}

const buttonsReducer = (state = {buttonsArray: defaultButtonsArray}, action) => {
    switch (action.type) {
        case NEW_BUTTON_ARRAY:
            return {
                ...state,
                buttonsArray: action.payload,
            }
        default: 
            return state
    }
}

const settingsReducer = (state = {angleType:'rad'}, action) => {
    switch (action.type) {
        case SET_SETTINGS_ANGLE: 
            return {
                ...state,
                angleType: action.payload
            }
        default:
            return state;
    }
}

const constantsReducer = (state = {constantsArray: defaultConstantsArray}, action) => {
    switch(action.type) {
        case ADD_CONSTANT:
            return {
                ...state,
                constantsArray: [
                    ...state.constantsArray,
                    action.payload
                ],
            }
        default:
            return state;
    }
}

const commandsReducer = (state = {commandsArray: defaultCommandsArray}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const reducer = combineReducers({
    main: mainReducer,
    buttons: buttonsReducer,
    settings: settingsReducer,
    constants: constantsReducer,
    commands: commandsReducer,
})

export default reducer