import { combineReducers } from "redux";
import user from "./authReducer";
import departments from "./departmentReducer";
import divisions from "./divistionReducers";
import employees from "./employeeReducers";

const rootReducer = combineReducers({
  user: user,
  departments: departments,
  divisions: divisions,
  employees: employees,
});

export default rootReducer;
