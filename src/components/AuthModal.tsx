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
import Button from "@material-ui/core/Button";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import BlogApi from "../apis/BlogApi";
import { setAuthor, setToken } from "../store/reducers/userReducer";
import { useDispatch } from "react-redux";

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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const loginUser = async (e: any) => {
    e.preventDefault();
    const responce = await BlogApi.post("/user/login", {
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(responce.data.data));
    localStorage.setItem("token", responce.data.token);
    dispatch(setToken(responce.data.token));
    dispatch(setAuthor(responce.data.data));
    history.push(`/user/${responce.data.data.id}`);
    setEmail("");
    setPassword("");
  };

  const classes = useStyles();

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
              <TextField
                id='outlined-basic'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='Email'
                variant='outlined'
              />
              <FormControl variant='outlined'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Пароль
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      ></IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
              <Link className={classes.register} to='/register'>
                <h2 onClick={() => setOpen(false)}>Регистрация</h2>
              </Link>
              <Button
                variant='contained'
                type='submit'
                onClick={loginUser}
                color='primary'
              >
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
