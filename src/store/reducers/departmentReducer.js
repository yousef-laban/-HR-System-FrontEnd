import * as actiontype from "../actions/types";

const initialState = {
  departments: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FETCH_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
        loading: false,
      };
    case actiontype.ADD_DEPARTMENT:
      return {
        ...state,
        departments: [...state.departments, action.payload],
      };

    default:
      return state;
  }
};
export default reducer;
