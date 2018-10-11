import { REGISTER_USER, LOGIN_USER } from "../actions/types";

const initialState = {
  registration: {
    success: false,
    msg: null
  },
  login: {
    msg: null
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      state.registration = action.payload.registration;
      return { ...state };
    case LOGIN_USER:
      state.login = action.payload.login;
      return { ...state };
    default:
      return { ...state };
  }
}
