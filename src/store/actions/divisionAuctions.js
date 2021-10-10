import * as actiontype from "./types";
import instance from "./instance";

export const fetchDivisions = () => async (dispatch) => {
  try {
    const res = await instance.get("/divisions");
    dispatch({
      type: actiontype.FETCH_DIVISIONS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createDivision = (divisionData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/division", divisionData);
    dispatch({
      type: actiontype.ADD_DIVISION,
      payload: res.data,
    });

    history.push("/departmints");
  } catch (error) {
    console.log(error);
  }
};
