import { combineReducers } from 'redux'
import reducerTodo from './reducerTodo'
import reducerVisibilityFilter from './reducerVisibilityFilter'

export default combineReducers({
    reducerTodo,
    reducerVisibilityFilter
})