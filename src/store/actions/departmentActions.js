import * as actiontype from "./types";
import instance from "./instance";

export const fetchDepartments = () => async (dispatch) => {
  try {
    const res = await instance.get("/departments");
    dispatch({
      type: actiontype.FETCH_DEPARTMENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDepartment =
  (departmentData, history) => async (dispatch) => {
    try {
      const res = await instance.post("/department", departmentData);
      dispatch({
        type: actiontype.ADD_DEPARTMENT,
        payload: res.data,
      });

      history.push("/departmints");
    } catch (error) {
      console.log(error);
    }
  };
