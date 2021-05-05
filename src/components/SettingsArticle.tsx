import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//@ts-ignore
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { Button, IconButton } from "@material-ui/core";

const SettingsArticle = () => {
	const [editing, setEditing] = React.useState(false);
	return (
		<PopupState variant='popover' popupId='demo-popup-menu'>
			{(popupState: any) => (
				<React.Fragment>
					<IconButton
						// onClick={() => setOff(!off)}
						{...bindTrigger(popupState)}
						aria-label='delete'
					>
						<MoreVertIcon />
					</IconButton>
					<Menu {...bindMenu(popupState)}>
						<MenuItem onClick={popupState.close}>
							{" "}
							{!editing && (
								<Button
									variant='contained'
									color='default'
									onClick={() => setEditing(!editing)}
									startIcon={<CreateIcon />}
								>
									Редактировать
								</Button>
							)}
							{editing && (
								<Button
									variant='contained'
									color='default'
									// onClick={handleEdit}
									startIcon={<CheckIcon />}
								>
									Готово
								</Button>
							)}
						</MenuItem>
						<MenuItem onClick={popupState.close}>
							<Button
								variant='contained'
								color='secondary'
								// onClick={removeTodo}
								startIcon={<DeleteIcon />}
							>
								Удалить
							</Button>
						</MenuItem>
					</Menu>
				</React.Fragment>
			)}
		</PopupState>
	);
};

export default SettingsArticle;
