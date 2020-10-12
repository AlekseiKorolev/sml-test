import React from "react";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import "./custom.scss";

import Form from "./components/form/form.component";

const reducers = combineReducers({ form: formReducer });
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
