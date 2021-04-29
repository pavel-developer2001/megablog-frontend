const GET_TOKEN = "GET_TOKEN";
const SET_USERS = "SET_USERS";
const SET_AUTHOR = "SET_AUTHOR ";

const initialState = {
	token: "",
	users: [],
	author: {},
};
export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TOKEN:
			return {
				...state,
				token: action.payload,
			};
		case SET_USERS:
			return {
				...state,
				users: action.payload,
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

export const getToken = (payload) => ({ type: GET_TOKEN, payload });
export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const setAuthor = (payload) => ({ type: SET_AUTHOR, payload });
