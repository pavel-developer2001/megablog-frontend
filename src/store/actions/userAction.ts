import { Dispatch } from "react";
import { setUsers } from "../reducers/userReducer";
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
