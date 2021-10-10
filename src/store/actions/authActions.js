import decode from "jwt-decode";
import instance from "./instance";

// Action Types
import * as actionType from "./types";

export const signup = (userData, history, setShow) => async (dispatch) => {
  try {
    const res = await instance.post(`/signup`, userData);

    dispatch(setUser(res.data.token));

    history.push("/");
  } catch (error) {
    console.log(error);
    setShow(true);
  }
};

export const signin = (userData, history, setShow) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);

    dispatch(setUser(res.data.token));
    history.push("/");
  } catch (error) {
    console.log(error);
    setShow(true);
  }
};

export const logout = (history) => {
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");

  if (token) {
    const currentTime = Date.now();
    const user = decode(token);

    if (currentTime > user.exp) return setUser();
    else return setUser(token);
  }

  return setUser();
};

const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    return {
      type: actionType.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    return {
      type: actionType.SET_USER,
      payload: null,
    };
  }
};
