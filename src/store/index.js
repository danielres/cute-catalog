import {
  compose as _compose,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { connectRoutes } from 'redux-first-router'

import routesMap from 'routesMap'
import productsReducer from './products/productsReducer'

const { REACT_APP_ENABLE_REDUX_DEVTOOLS } = process.env

const {
  reducer: locationReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
} = connectRoutes(routesMap)

const rootReducer = combineReducers({
  location: locationReducer,
  products: productsReducer,
})

const enhancers = [routerEnhancer]

const middlewares = [thunkMiddleware, routerMiddleware]

const compose =
  REACT_APP_ENABLE_REDUX_DEVTOOLS === 'true'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _compose
    : _compose

const composedEnhancers = compose(
  ...enhancers,
  applyMiddleware(...middlewares)
)

const store = createStore(rootReducer, composedEnhancers)

export default store