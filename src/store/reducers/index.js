const SET_USERS = "SET_USERS";
const SET_AUTHOR = "SET_AUTHOR ";
const SET_TOKEN = "SET_TOKEN";

const initialState = {
	users: [],
	author: {},
	token: "",
};
export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: action.payload,
			};
		case SET_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		case SET_AUTHOR:
			return {
				...state,
				author: action.payload,
			};

		default:
			return state;
	}
}

export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const setAuthor = (payload) => ({ type: SET_AUTHOR, payload });
export const setToken = (payload) => ({ type: SET_TOKEN, payload });
