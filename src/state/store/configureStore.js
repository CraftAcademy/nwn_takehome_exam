import {
  legacy_createStore
} from 'redux'
import rootReducer from '../reducers/rootReducer'

const configureStore = () => {
  return legacy_createStore(rootReducer)
}
export default configureStore