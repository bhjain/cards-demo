import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/sotre";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div style={{ backgroundColor: "#E5E5E5" }}>
        <App />
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
