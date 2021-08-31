import React from "react";

import { Avatar, CardHeader, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BlogApi from "../apis/BlogApi";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setFetchPost } from "../store/actions/postAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "max-content",
      margin: "0 auto",
    },
    a: { textDecoration: "none" },
    user: {
      display: "inline-flex",
      marginRight: "30px",
    },
    userContent: {
      display: "tableCell",
    },
    block: {
      display: "block",
    },
    input: {
      display: "none",
    },
  })
);
type ArticleProps = {
  postId: string;
};
const Article: React.FC<ArticleProps> = ({ postId }) => {
  const [newDate, setNewDate] = React.useState("");
  //@ts-ignore
  const post = useSelector((state) => state.posts.post);
  const loading = useSelector<any>((state) => state.posts.loading);

  const dispatch = useDispatch();
  const classes = useStyles();

  React.useEffect(() => {
    async function fetchData() {
      dispatch(setFetchPost(postId));
    }
    fetchData();
  }, [postId]);
  const [user, setUser] = React.useState<any>([]);

  React.useEffect(() => {
    async function fetchData() {
      const findUser = await post[0]?.userId;
      const responce = await BlogApi.get(`/user/${findUser}`);
      const reformat = await post[0]?.createdAt;
      const newFormat = await format(new Date(reformat), "dd/MM/yyyy kk:mm");
      setNewDate(newFormat);
      setUser(responce);
    }
    fetchData();
  }, [post]);
  return (
    <div className={classes.root}>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Link className={classes.a} to={`/user/${post[0]?.userId}`}>
            <CardHeader
              className={classes.user}
              avatar={<Avatar aria-label='recipe'></Avatar>}
              title={user.data?.data?.user}
            />
          </Link>
          <div className={classes.block}></div>
          <Typography variant='h4' gutterBottom>
            {post[0]?.postTitle}
          </Typography>
          <Typography variant='overline' display='block' gutterBottom>
            {newDate}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {post[0]?.postText}
          </Typography>
        </>
      )}
    </div>
  );
};

export default Article;
