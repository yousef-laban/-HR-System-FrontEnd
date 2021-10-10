import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

//
import { fetchDepartments } from "./store/actions/departmentActions";
import { fetchDivisions } from "./store/actions/divisionAuctions";
import { fetchEmployees } from "./store/actions/employeeActions";
import { checkForToken } from "./store/actions/authActions";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

store.dispatch(fetchDepartments());
store.dispatch(fetchDivisions());
store.dispatch(fetchEmployees());
store.dispatch(checkForToken());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
