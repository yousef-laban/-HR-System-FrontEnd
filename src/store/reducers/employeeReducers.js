import * as actiontype from "../actions/types";

const initialState = {
  employees: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FETCH_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    case actiontype.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    default:
      return state;
  }
};
export default reducer;
