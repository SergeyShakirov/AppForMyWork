import * as actions from "../actionTypes";

const initionState = {
  token: null,
  login: "",
  password: "",
};

export default function reducer(state = initionState, action) {
  switch (action.type) {
    case actions.SET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    case actions.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case actions.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actions.SET_LOGOUT:
      return initionState;
    default:
      return state;
  }
}
