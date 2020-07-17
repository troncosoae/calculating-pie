import {combineReducers} from 'redux'
import { create, all } from 'mathjs'

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


const defaultButtonsArray = [
    ['log', 'log10', 'pi', 'e', 'sqrt'],
    ['square', 'pwr', 'cos', 'sin', 'tan'],
    ['openP', 'closeP', 'comma', 'shift']
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

const defaultConstantsArray = [
    {textSym: "c", textName: "speedOfLight", textValue: math.evaluate("speedOfLight").toString(), isDefault: true},
    {textSym: "G", textName: "gravitationConstant", textValue: math.evaluate("gravitationConstant").toString(), isDefault: true},
    {textSym: "h", textName: "planckConstant", textValue: math.evaluate("planckConstant").toString(), isDefault: true},
    {textSym: "\u0127", textName: "reducedPlanckConstant", textValue: math.evaluate("reducedPlanckConstant").toString(), isDefault: true},
    {textSym: "\u03bc0", textName: "magneticConstant", textValue: math.evaluate("magneticConstant").toString(), isDefault: true},
    {textSym: "\u03B50", textName: "electricConstant", textValue: math.evaluate("electricConstant").toString(), isDefault: true},
    {textSym: "Z0", textName: "vacuumImpedance", textValue: math.evaluate("vacuumImpedance").toString(), isDefault: true},
    {textSym: "κ", textName: "coulomb", textValue: math.evaluate("coulomb").toString(), isDefault: true},
    {textSym: "e", textName: "elementaryCharge", textValue: math.evaluate("elementaryCharge").toString(), isDefault: true},
    {textSym: "\u03bcB", textName: "bohrMagneton", textValue: math.evaluate("bohrMagneton").toString(), isDefault: true},
    {textSym: "G0", textName: "conductanceQuantum", textValue: math.evaluate("conductanceQuantum").toString(), isDefault: true},
    {textSym: "G0inv", textName: "inverseConductanceQuantum", textValue: math.evaluate("inverseConductanceQuantum").toString(), isDefault: true},
    {textSym: "φ0", textName: "magneticFluxQuantum", textValue: math.evaluate("magneticFluxQuantum").toString(), isDefault: true},
    {textSym: "\u03bcN", textName: "nuclearMagneton", textValue: math.evaluate("nuclearMagneton").toString(), isDefault: true},
    {textSym: "Rk", textName: "klitzing", textValue: math.evaluate("klitzing").toString(), isDefault: true},
    {textSym: "a0", textName: "bohrRadius", textValue: math.evaluate("bohrRadius").toString(), isDefault: true},
    {textSym: "re", textName: "classicalElectronRadius", textValue: math.evaluate("classicalElectronRadius").toString(), isDefault: true},
    {textSym: "me", textName: "electronMass", textValue: math.evaluate("electronMass").toString(), isDefault: true},
    {textSym: "GF", textName: "fermiCoupling", textValue: math.evaluate("fermiCoupling").toString(), isDefault: true},
    {textSym: "a", textName: "fineStructure", textValue: math.evaluate("fineStructure").toString(), isDefault: true},
    {textSym: "Eh", textName: "hartreeEnergy", textValue: math.evaluate("hartreeEnergy").toString(), isDefault: true},
    {textSym: "mp", textName: "protonMass", textValue: math.evaluate("protonMass").toString(), isDefault: true},
    {textSym: "md", textName: "deuteronMass", textValue: math.evaluate("deuteronMass").toString(), isDefault: true},
    {textSym: "mn", textName: "neutronMass", textValue: math.evaluate("neutronMass").toString(), isDefault: true},
    {textSym: "h_2me", textName: "quantumOfCirculation", textValue: math.evaluate("quantumOfCirculation").toString(), isDefault: true},
    {textSym: "Rinf", textName: "rydberg", textValue: math.evaluate("rydberg").toString(), isDefault: true},
    {textSym: "TCS", textName: "thomsonCrossSection", textValue: math.evaluate("thomsonCrossSection").toString(), isDefault: true},
    {textSym: "WMA", textName: "weakMixingAngle", textValue: math.evaluate("weakMixingAngle").toString(), isDefault: true},
    {textSym: "EF", textName: "efimovFactor", textValue: math.evaluate("efimovFactor").toString(), isDefault: true},
    {textSym: "mu", textName: "atomicMass", textValue: math.evaluate("atomicMass").toString(), isDefault: true},
    {textSym: "Na", textName: "avogadro", textValue: math.evaluate("avogadro").toString(), isDefault: true},
    {textSym: "k", textName: "boltzmann", textValue: math.evaluate("boltzmann").toString(), isDefault: true},
    {textSym: "F", textName: "faraday", textValue: math.evaluate("faraday").toString(), isDefault: true},
    {textSym: "c1", textName: "firstRadiation", textValue: math.evaluate("firstRadiation").toString(), isDefault: true},
    {textSym: "F", textName: "faraday", textValue: math.evaluate("faraday").toString(), isDefault: true},
    {textSym: "n0", textName: "loschmidt", textValue: math.evaluate("loschmidt").toString(), isDefault: true},
    {textSym: "R", textName: "gasConstant", textValue: math.evaluate("gasConstant").toString(), isDefault: true},
    {textSym: "Nah", textName: "molarPlanckConstant", textValue: math.evaluate("molarPlanckConstant").toString(), isDefault: true},
    {textSym: "Vm", textName: "molarVolume", textValue: math.evaluate("molarVolume").toString(), isDefault: true},
    {textSym: "ST", textName: "sackurTetrode", textValue: math.evaluate("sackurTetrode").toString(), isDefault: true},
    {textSym: "c2", textName: "secondRadiation", textValue: math.evaluate("secondRadiation").toString(), isDefault: true},
    {textSym: "σ", textName: "stefanBoltzmann", textValue: math.evaluate("stefanBoltzmann").toString(), isDefault: true},
    {textSym: "b", textName: "wienDisplacement", textValue: math.evaluate("wienDisplacement").toString(), isDefault: true},
    {textSym: "Mu", textName: "molarMass", textValue: math.evaluate("molarMass").toString(), isDefault: true},
    {textSym: "Mu12C", textName: "molarMassC12", textValue: math.evaluate("molarMassC12").toString(), isDefault: true},
    {textSym: "gn", textName: "gravity", textValue: math.evaluate("gravity").toString(), isDefault: true},
    {textSym: "atm", textName: "atm", textValue: math.evaluate("atm").toString(), isDefault: true},
    {textSym: "lp", textName: "planckLength", textValue: math.evaluate("planckLength").toString(), isDefault: true},
    {textSym: "mp", textName: "planckMass", textValue: math.evaluate("planckMass").toString(), isDefault: true},
    {textSym: "tp", textName: "planckTime", textValue: math.evaluate("planckTime").toString(), isDefault: true},
    {textSym: "qp", textName: "planckCharge", textValue: math.evaluate("planckCharge").toString(), isDefault: true},
    {textSym: "Tp", textName: "planckTemperature", textValue: math.evaluate("planckTemperature").toString(), isDefault: true},
]

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

const defaultCommandsArray = [
    {textName: "Help on command", textDefine: "help(COMMAND)", isDefault: true},
    {textName: "Define Function", textDefine: "f(x,y)=2x+y", isDefault: true},
    {textName: "Define Matrix", textDefine: "A=[[1,2],[3,4]]", isDefault: true},
    {textName: "Solve linear equation (forward)", textDefine: "lsolve(A,b)", isDefault: true},
    {textName: "Matrix LU decomposition", textDefine: "lup(A)", isDefault: true},
    {textName: "Solves the linear system", textDefine: "lusolve(A,b)", isDefault: true},
    {textName: "Matrix QR decomposition", textDefine: "qr(A)", isDefault: true},
    {textName: "Rationalize", textDefine: "rationalize(expr)", isDefault: true},
    {textName: "Simplify", textDefine: "simplify(expr)", isDefault: true},
    {textName: "Solve linear equation (backward)", textDefine: "usolve(U,b)", isDefault: true},
    {textName: "Absolute value", textDefine: "abs(x)", isDefault: true},
    {textName: "Ciel", textDefine: "ceil(x)", isDefault: true},
    {textName: "Floor", textDefine: "floor(x)", isDefault: true},
    {textName: "Fix", textDefine: "fix(x)", isDefault: true},
    {textName: "Round", textDefine: "round(x)", isDefault: true},
    {textName: "Square root value", textDefine: "sqrt(x)", isDefault: true},
    {textName: "Cubic root value", textDefine: "cbrt(x)", isDefault: true},
    {textName: "Greatest common divisor", textDefine: "gcd([a,b,c])", isDefault: true},
    {textName: "Least common multiple", textDefine: "lcm([a,b,c])", isDefault: true},
    {textName: "Modulus", textDefine: "mod(x)", isDefault: true},
    {textName: "Bitwise AND", textDefine: "x & y", isDefault: true},
    {textName: "Bitwise OR", textDefine: "x | y", isDefault: true},
    {textName: "Bitwise NOT", textDefine: "~ y", isDefault: true},
    {textName: "Bitwise XOR", textDefine: "bitXor(x,y)", isDefault: true},
    {textName: "Left logical shift", textDefine: "x << y", isDefault: true},
    {textName: "Right logical shift", textDefine: "x >> y", isDefault: true},
    {textName: "Bell Numbers", textDefine: "bellNumbers(n)", isDefault: true},
    {textName: "Catalan Numbers", textDefine: "catalan(n)", isDefault: true},
    {textName: "Composition ", textDefine: "composition(n, k)", isDefault: true},
    {textName: "Stirling numbers of the second kind", textDefine: "stirlingS2(n, k)", isDefault: true},
    {textName: "Eucledian distance between two points", textDefine: "distance([x1, y1], [x2, y2])", isDefault: true},
    {textName: "Logical and", textDefine: "x and y", isDefault: true},
    {textName: "Logical or", textDefine: "x or y", isDefault: true},
    {textName: "Logical not", textDefine: "x not y", isDefault: true},
    {textName: "Logical xor", textDefine: "x xor y", isDefault: true},
    {textName: "Get matrix column", textDefine: "column(A, index)", isDefault: true},
    {textName: "Get matrix row", textDefine: "row(A, index)", isDefault: true},
    {textName: "Concatenate two or more matrices", textDefine: "concat(A, B)", isDefault: true},
    {textName: "Cross product for two vectors", textDefine: "cross(x, y)", isDefault: true},
    {textName: "Dot product for two vectors", textDefine: "dot(x, y)", isDefault: true},
    {textName: "Transpose and complex conjugate a matrix", textDefine: "ctranspose(A)", isDefault: true},
    {textName: "Determinant", textDefine: "det(A)", isDefault: true},
    {textName: "Diagonal of a matrix", textDefine: "diag(A)", isDefault: true},
    {textName: "Determinant", textDefine: "dot(x, y)", isDefault: true},
    {textName: "Eigenvalue and eigenvector of a real symmetric matrix", textDefine: "eigs(A)", isDefault: true},
    {textName: "Identity matrix", textDefine: "identity(n)", isDefault: true},
    {textName: "Inverse matrix", textDefine: "inv(A)", isDefault: true},
    {textName: "Transpose matrix", textDefine: "transpose(A)", isDefault: true},
    {textName: "Matrix of ones", textDefine: "ones(m, n, p, …)", isDefault: true},
    {textName: "Matrix of zeros", textDefine: "zeros(m, n, p, …)", isDefault: true},
    {textName: "Sort", textDefine: "sort(x)", isDefault: true},
    {textName: "Inverse matrix", textDefine: "inv(A)", isDefault: true},
    {textName: "Inverse matrix", textDefine: "inv(A)", isDefault: true},
    {textName: "Inverse matrix", textDefine: "inv(A)", isDefault: true},
]
// searchbar woudl be usefull

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