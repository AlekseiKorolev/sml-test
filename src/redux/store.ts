import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducer as formReducer } from "redux-form";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEhnancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  form: formReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware), composeEhnancers())
);

export default store;
