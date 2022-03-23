import * as actions from "../actionTypes";

export const setLogin = (login) => ({
  type: actions.SET_LOGIN,
  payload: login,
});

export const setPassword = (password) => ({
  type: actions.SET_PASSWORD,
  payload: password,
});

export const setToken = (token) => ({
  type: actions.SET_TOKEN,
  payload: token,
});

export const setLogout = () => ({
  type: actions.SET_LOGOUT,
});
