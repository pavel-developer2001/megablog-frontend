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
import AuthModal from "./AuthModal";
import UserAvatar from "./UserAvatar";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { Link } from "react-router-dom";

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
      width: "100%",
      marginRight: "40%",
      marginLeft: "10px",
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
    fon: {
      backgroundColor: "red",
      color: "black",
      borderRadius: "4px",
      padding: "4px",
      marginRight: "3px",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
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

  const { token } = useTypedSelector((state) => state.users);
  React.useEffect(() => {}, [token]);

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.head} to='/'>
              <strong className={classes.fon}>MEGA</strong>BLOG
            </Link>
          </Typography>
          {token ? <UserAvatar /> : <AuthModal />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
