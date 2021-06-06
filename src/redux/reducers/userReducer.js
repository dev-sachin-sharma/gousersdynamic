import { ActionTypes } from "../Types/action-types";

const initialState = {
  users: [],
};
export const AllUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_USER:
      return { ...state, users: payload };

    default:
      return state;
  }
};
export const SingleUserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SINGLE_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};

