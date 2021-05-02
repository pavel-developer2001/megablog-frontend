import React from "react";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setToken } from "../store/reducers/userReducer";
import { AccountCircle } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

const UserAvatar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const exitUser = () => {
		history.push("/register");
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		dispatch(setToken(""));
	};
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const users: any = localStorage.getItem("user");
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<IconButton
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleMenu}
				color='inherit'
			>
				<AccountCircle />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={open}
				onClose={handleClose}
			>
				<Link to={`/user/${JSON.parse(users).id}`}>
					<MenuItem onClick={handleClose}>Мой профиль</MenuItem>
				</Link>

				<Button variant='contained' onClick={exitUser} color='primary'>
					Выйти
				</Button>
			</Menu>
		</div>
	);
};

export default UserAvatar;
