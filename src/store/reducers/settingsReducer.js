const CHANGE_EDITING = "CHANGE_EDITING ";

const initialState = {
	editing: false,
};
export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_EDITING:
			return {
				...state,
				editing: true,
			};

		default:
			return state;
	}
}

export const changeEditing = () => ({ type: CHANGE_EDITING });
