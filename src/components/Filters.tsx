import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      textAlign: "center",
    },
    button: {
      marginTop: "15px",
      borderRadius: "20px",
      padding: "10px",
    },
    a: { textDecoration: "none" },
  })
);

export default function Filters() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to='/add' className={classes.a}>
        <Button
          variant='contained'
          color='default'
          className={classes.button}
          endIcon={<AddIcon />}
        >
          Написать статью
        </Button>
      </Link>
    </div>
  );
}
