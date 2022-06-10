import initialState from "./initialState";
import {legacy_createStore} from 'redux'
import rootReducer from '../reducers/rootReducer'

const store = legacy_createStore(rootReducer, initialState)


export default store