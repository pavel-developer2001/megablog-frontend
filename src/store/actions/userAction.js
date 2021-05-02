import { setUsers } from "../reducers/userReducer";

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			const responce = await fetch("http://localhost:5000/api/user");
			const json = await responce.json();
			dispatch(setUsers(json));
		} catch (e) {
			console.log(e.message);
		}
	};
};
