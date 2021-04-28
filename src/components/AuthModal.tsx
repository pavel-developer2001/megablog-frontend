import React from "react";
import {
	Backdrop,
	Fade,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	Modal,
	OutlinedInput,
	TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

interface State {
	amount: string;
	password: string;
	weight: string;
	weightRange: string;
	showPassword: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
		form: {
			display: "grid",
		},
		register: {
			margin: "10px 10px",
			color: "saddlebrown",
			textDecoration: "none",
		},
	})
);
const AuthModal = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const classes = useStyles();
	const [values, setValues] = React.useState<State>({
		amount: "",
		password: "",
		weight: "",
		weightRange: "",
		showPassword: false,
	});
	const handleChange = (prop: keyof State) => (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};
	return (
		<div>
			<Button
				variant='contained'
				onClick={() => setOpen(!open)}
				color='secondary'
			>
				Войти
			</Button>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={() => setOpen(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<h2 id='transition-modal-title'>Войти</h2>
						<form className={classes.form} noValidate autoComplete='off'>
							<TextField id='outlined-basic' label='Логин' variant='outlined' />
							<FormControl variant='outlined'>
								<InputLabel htmlFor='outlined-adornment-password'>
									Пароль
								</InputLabel>
								<OutlinedInput
									id='outlined-adornment-password'
									type={values.showPassword ? "text" : "password"}
									value={values.password}
									onChange={handleChange("password")}
									endAdornment={
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge='end'
											>
												{values.showPassword ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									}
									labelWidth={70}
								/>
							</FormControl>
							<Link className={classes.register} to='/register'>
								<h2 onClick={() => setOpen(false)}>Регистрация</h2>
							</Link>
							<Button variant='contained' color='primary'>
								Войти
							</Button>
						</form>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default AuthModal;
