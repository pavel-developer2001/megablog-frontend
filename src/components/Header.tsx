import React from "react";
import {
	fade,
	createStyles,
	makeStyles,
	Theme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

import AuthModal from "./AuthModal";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			"&:hover": {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				width: "auto",
			},
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		head: {
			color: "white",
			textDecoration: "none",
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
	})
);

export default function Header() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						<Link className={classes.head} to='/'>
							{" "}
							MEGABLOG
						</Link>
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Поиск…'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
					<AuthModal />
					{/* <Button color='inherit' onClick={() => setOpen(!open)}>
						Регистрация
					</Button> */}
				</Toolbar>
			</AppBar>
		</div>
	);
}