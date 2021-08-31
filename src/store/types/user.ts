export enum UserActionTypes {
  SET_USERS = "SET_USERS",
  SET_USER = "SET_USER",
  SET_AUTHOR = "SET_AUTHOR ",
  SET_TOKEN = "SET_TOKEN",
}
export type UserState = {
  users: any[];
  author: any;
  token: string | null;
  user: any;
};
export type SetUsersAction = {
  type: UserActionTypes.SET_USERS;
  payload: any[];
};
export type SetUserAction = {
  type: UserActionTypes.SET_USER;
  payload: any[];
};
export type SetTokenAction = {
  type: UserActionTypes.SET_TOKEN;
  payload: string;
};
export type SetAuthorAction = {
  type: UserActionTypes.SET_AUTHOR;
  payload: any[];
};
export type UserAction =
  | SetUsersAction
  | SetTokenAction
  | SetAuthorAction
  | SetUserAction;
