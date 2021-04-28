import { Button, TextField } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			textAlign: "center",
		},
		form: {
			display: "inline-grid",
		},
	})
);
const Register = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<h2>Регистрация</h2>
			<form className={classes.form}>
				<TextField id='outlined-basic' label='Имя' variant='outlined' />
				<TextField id='outlined-basic' label='Email' variant='outlined' />
				<TextField
					id='outlined-password-input'
					label='Пароль'
					type='password'
					autoComplete='current-password'
					variant='outlined'
				/>
				<TextField
					id='outlined-password-input'
					label='Повторить пароль'
					type='password'
					autoComplete='current-password'
					variant='outlined'
				/>
				<Button variant='contained' color='primary'>
					Зарегистрироваться
				</Button>
			</form>
		</div>
	);
};

export default Register;
