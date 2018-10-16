import { REGISTER_USER, LOGIN_USER } from "../actions/types";
import { history } from "../reducers/store";
import axios from "axios";

export const registerUser = ({
  username,
  password,
  password2,
  email
}) => dispatch => {
  axios
    .post("/api/auth/register", { username, password, password2, email })
    .then(result => {
      dispatch({
        type: REGISTER_USER,
        payload: {
          registration: {
            success: result.data.success,
            msg: result.data.msg
          }
        }
      });
      result.data.success ? history.push("/login") : null;
    });
};

export const loginUser = ({ username, password }) => dispatch => {
  axios
    .post("/api/auth/login", { username, password })
    .then(result => {
      localStorage.setItem("jwtToken", result.data.token);
      localStorage.setItem("username", username);
      history.goBack();
    })
    .catch(error => {
      if (error.response.status === 401) {
        dispatch({
          type: LOGIN_USER,
          payload: {
            login: {
              msg: "Incorrect username & password combination."
            }
          }
        });
      }
    });
};

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("username");
  history.push("/login");
};
