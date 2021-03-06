import { actionTypes } from "../actions/auth";

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATION:
      return{
        user: action.payload
      }
    default:
      return state;
  }
};
