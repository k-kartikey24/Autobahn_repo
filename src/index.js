import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import thunkMiddleware from 'redux-thunk'
import "react-toastify/dist/ReactToastify.css";

import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { contactReducer } from "./redux/reducers/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(contactReducer, composedEnhancer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
