import * as actiontype from "./types";
import instance from "./instance";

export const fetchEmployees = () => async (dispatch) => {
  try {
    const res = await instance.get("/employees");
    dispatch({
      type: actiontype.FETCH_EMPLOYEES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createEmployee = (employeeData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/employee", employeeData);
    dispatch({
      type: actiontype.ADD_EMPLOYEE,
      payload: res.data,
    });

    history.push("/departmints");
  } catch (error) {
    console.log(error);
  }
};
