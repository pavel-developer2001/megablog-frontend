export type SettingsState = {
	editing: boolean;
};
enum SettingsActionTypes {
	CHANGE_EDITING = "CHANGE_EDITING ",
}
type ChangeEditingAction = {
	type: SettingsActionTypes.CHANGE_EDITING;
};
type SettingsAction = ChangeEditingAction;
const initialState: SettingsState = {
	editing: false,
};
export default function usersReducer(
	state = initialState,
	action: SettingsAction
) {
	switch (action.type) {
		case SettingsActionTypes.CHANGE_EDITING:
			return {
				...state,
				editing: true,
			};

		default:
			return state;
	}
}

export const changeEditing = () => ({
	type: SettingsActionTypes.CHANGE_EDITING,
});
