import { Button, TextField } from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { setAuthor, setToken } from "../store/reducers/userReducer";
import BlogApi from "../apis/BlogApi";
import { useHistory } from "react-router-dom";

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
	const dispatch = useDispatch();
	const history = useHistory();
	const [user, setUser] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [password2, setPassword2] = React.useState("");
	const registerUser = async (e: any) => {
		e.preventDefault();
		try {
			const responce = await BlogApi.post("/user/register", {
				user,
				email,
				password,
				password2,
			});
			localStorage.setItem("user", JSON.stringify(responce.data.data));
			localStorage.setItem("token", responce.data.token);
			dispatch(setToken(responce.data.token));
			dispatch(setAuthor(responce.data.data));
			history.push(`/user/${responce.data.data.id}`);
			setUser("");
			setEmail("");
			setPassword("");
			setPassword2("");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div className={classes.root}>
			<h2>Регистрация</h2>
			<form className={classes.form}>
				<TextField
					id='outlined-basic'
					label='Имя'
					variant='outlined'
					value={user}
					onChange={(e) => setUser(e.target.value)}
				/>
				<TextField
					id='outlined-basic'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label='Email'
					variant='outlined'
				/>
				<TextField
					id='outlined-password-input'
					label='Пароль'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete='current-password'
					variant='outlined'
				/>
				<TextField
					id='outlined-password-input'
					label='Повторить пароль'
					type='password'
					value={password2}
					onChange={(e) => setPassword2(e.target.value)}
					autoComplete='current-password'
					variant='outlined'
				/>
				<Button
					variant='contained'
					type='submit'
					onClick={registerUser}
					color='primary'
				>
					Зарегистрироваться
				</Button>
			</form>
		</div>
	);
};

export default Register;
