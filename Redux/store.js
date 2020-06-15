import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

// thunk+applyMiddleware allows to use async action 
const store = createStore(reducer)

export default store



// store = {
//     main: {
//         ans: ñalskjfd,
//         prser: {
//             scope: {

//             },
//         },
//     },
//     constants: [

//     ],
//     commands: [

//     ],
//     colors: [

//     ],
//     buttons: [

//     ]
// }
