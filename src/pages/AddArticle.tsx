import { Button, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { addFetchPost } from "../store/actions/postAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "40px",
      padding: "0px 30px",
    },
    input: {
      display: "block",
      width: "76%",
      marginBottom: "20px",
    },
    form: {
      width: "100%",
      margin: "0 auto",
    },
  })
);

const AddArticle = () => {
  const classes = useStyles();
  const [postTitle, setPostTitle] = React.useState("");
  const [postText, setPostText] = React.useState("");
  const users: any = localStorage.getItem("user");
  const [userId] = React.useState(JSON.parse(users).id);
  const history = useHistory();
  const dispatch = useDispatch();

  const addNewPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const payload = {
        postTitle,
        postText,
        userId,
      };
      dispatch(addFetchPost(payload));
      history.push("/");

      setPostTitle("");
      setPostText("");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={classes.root}>
      <form noValidate autoComplete='off' className={classes.form}>
        <Grid container>
          <Grid item xs={9}>
            {" "}
            <TextField
              size='small'
              id='outlined-basic'
              className={classes.input}
              label='Заголовок'
              variant='outlined'
              fullWidth
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <TextField
              className={classes.input}
              id='outlined-multiline-static'
              label='Текст'
              multiline
              rows={10}
              variant='outlined'
              fullWidth
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            {" "}
            <Button
              variant='contained'
              type='submit'
              color='primary'
              disableElevation
              onClick={addNewPost}
            >
              Опубликовать
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddArticle;
