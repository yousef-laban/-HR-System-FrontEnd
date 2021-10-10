import * as actiontype from "../actions/types";

const initialState = {
  divisions: [],
  loading: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.FETCH_DIVISIONS:
      return {
        ...state,
        divisions: action.payload,
        loading: false,
      };
    case actiontype.ADD_DIVISION:
      return {
        ...state,
        divisions: [...state.divisions, action.payload],
      };

    default:
      return state;
  }
};
export default reducer;
