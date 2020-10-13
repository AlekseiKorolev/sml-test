import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./custom.scss";

import Form from "./components/form/form.component";

function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}

export default App;
