import { createStore } from 'redux';
import rootReducer from '../Reducers'

export default function configureStore() {
    const store = function() {
        return createStore(rootReducer)
    }

    return store;
}