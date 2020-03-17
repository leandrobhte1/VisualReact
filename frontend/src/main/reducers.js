import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'
import senhaReducer from '../senha/senhaReducer'

const rootReducer = combineReducers({
    senha: senhaReducer
})

export default rootReducer