import * as actions from "./actionTypes";
export const addTask = (task) => ({
  type: actions.TASK_ADD,
  payload: task,
});
export const toggleTask = (id) => ({
  type: actions.TASK_TOGGLE,
  payload: { id },
});
export const removeTask = (id) => ({
  type: actions.TASK_REMOVE,
  payload: { id },
});

export const setLogin = (login) => ({
  type: actions.SET_LOGIN,
  payload: login,
});
export const setPassword = (password) => ({
  type: actions.SET_PASSWORD,
  payload: password,
});
