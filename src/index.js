import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import store, { persistor } from "./reducers";
import "./assets/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("movies-app")
);
