import { Dispatch } from "react";
import { setUsers } from "../reducers/userReducer";
import { UserAction } from "../types/user";

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const responce = await fetch("http://localhost:5000/api/user");
			const json = await responce.json();
			//@ts-ignore
			dispatch(setUsers(json));
		} catch (e) {
			console.log(e.message);
		}
	};
};
