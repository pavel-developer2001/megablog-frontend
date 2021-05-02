const SET_POSTS = "SET_POSTS";

const initialState = {
	posts: [],
};
export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
}

export const setPosts = (payload) => ({ type: SET_POSTS, payload });
