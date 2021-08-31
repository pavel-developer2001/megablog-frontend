import { UserAction, UserActionTypes, UserState } from "../types/user";
const initialState: UserState = {
  users: [],
  author: {},
  user: [],
  token: "",
};

export default function usersReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UserActionTypes.SET_USER:
      return {
        ...state,
        //@ts-ignore
        user: action.payload.data,
      };
    case UserActionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case UserActionTypes.SET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };

    default:
      return state;
  }
}

export const setUsers = (payload: any[]) => ({
  type: UserActionTypes.SET_USERS,
  payload,
});
export const setUser = (payload: any[]) => ({
  type: UserActionTypes.SET_USER,
  payload,
});
export const setAuthor = (payload: any) => ({
  type: UserActionTypes.SET_AUTHOR,
  payload,
});
export const setToken = (payload: string) => ({
  type: UserActionTypes.SET_TOKEN,
  payload,
});
