import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, Middleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./reducers";
import { Provider } from "react-redux";

let middleware: Middleware[] = [thunk];

if (process.env.REACT_APP_IS_PRODUCTION !== "1") {
  middleware.push(logger);
}

export const store = createStore(reducers, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
