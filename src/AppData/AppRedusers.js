import * as actions from "../actionTypes";

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADD:
      return [
        ...state,
        {
          taskName: action.payload.taskName,
          description: action.payload.description,
          user_id: action.payload.user_id,
        },
      ];
    default:
      return state;
  }
}
