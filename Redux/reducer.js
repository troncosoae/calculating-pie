import {combineReducers} from 'redux'
import { create, all } from 'mathjs'

import { ADD_INPUT_TO_HISTORY, SET_ANS_INDEX, SET_ANGLE_TYPE } from './mainActions'
import { NEW_BUTTON_ARRAY } from './buttonsActions'
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
        default:
            return state
    }
}


const defaultButtonsArray = [
    ['sqrt', 'square', 'pi', 'e', 'log10'],
    ['openP', 'closeP', 'pwr', 'log', 'comma'],
    ['cos', 'sin', 'tan', 'shift']
]

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

const reducer = combineReducers({
    main: mainReducer,
    buttons: buttonsReducer,
})

export default reducer