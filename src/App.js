import "./App.css";
import { Switch, Route } from "react-router";

//component
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Signin from "./components/usersComponents/Signin";
import Signup from "./components/usersComponents/Signup";
import Departments from "./components/departments/Departments";
import AddDepartment from "./components/departments/AddDepartment";
import AddDivision from "./components/divisions/AddDivision";
import AddEmployee from "./components/employees/AddEmployee";

function App() {
  return (
    <>
      <NavBar />

      <Route path="/new-employee/:depSlug/:divSlug">
        <AddEmployee />
      </Route>

      <Route path="/new-division/:depSlug">
        <AddDivision />
      </Route>

      <Switch>
        <Route path="/new-department">
          <AddDepartment />
        </Route>
        <Route path="/departmints">
          <Departments />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
