import { Dispatch } from "react";
import {
  setUsers,
  setUser,
  setAuthor,
  setToken,
} from "../reducers/userReducer";
import { UserAction } from "../types/user";
import { UserApi } from "../../apis/services/user/userApi";
export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const data = await UserApi.getAllUsers();
      //@ts-ignore
      dispatch(setUsers(data));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
export const fetchUser = (userId: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const data = await UserApi.getUser(userId);

      //@ts-ignore
      dispatch(setUser(data));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
export const registerFetchUser = (payload: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const data = await UserApi.registerUser(payload);
      //@ts-ignore
      dispatch(setAuthor(data.data));
      //@ts-ignore
      dispatch(setToken(data.token));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
export const loginFetchUser = (payload: any) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const data = await UserApi.loginUser(payload);
      //@ts-ignore
      dispatch(setAuthor(data.data));
      //@ts-ignore
      dispatch(setToken(data.token));
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
