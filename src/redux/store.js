import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import movieSearchReducer from "./reducers/movieSearchReducer";

let redusers = combineReducers({
  movieSearchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
