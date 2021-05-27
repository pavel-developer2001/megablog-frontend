import React from "react";

import { Avatar, CardHeader, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BlogApi from "../apis/BlogApi";
import { format } from "date-fns";

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
  const [post, setPost] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);
  const [newDate, setNewDate] = React.useState("");
  const classes = useStyles();

  React.useEffect(() => {
    async function fetchData() {
      const responce: any = await BlogApi.get(`/posts/${postId}`);
      setPost(responce);
      setLoading(false);
    }
    fetchData();
  }, [postId]);
  const [user, setUser] = React.useState<any>([]);

  React.useEffect(() => {
    async function fetchData() {
      const findUser = await post?.data?.data?.userId;
      const responce = await BlogApi.get(`/user/${findUser}`);
      const reformat = await post?.data?.data?.createdAt;
      const newFormat = await format(new Date(reformat), "dd/MM/yyyy kk:mm");
      setNewDate(newFormat);
      setUser(responce);
      setLoading(false);
    }
    fetchData();
  }, [post]);
  return (
    <div className={classes.root}>
      <Link className={classes.a} to={`/user/${post?.data?.data?.userId}`}>
        {loading ? (
          <p>loading</p>
        ) : (
          <CardHeader
            className={classes.user}
            avatar={<Avatar aria-label='recipe'></Avatar>}
            title={user.data?.data?.user}
          />
        )}
      </Link>
      <div className={classes.block}></div>
      <Typography variant='h4' gutterBottom>
        {post?.data?.data?.postTitle}
      </Typography>
      <Typography variant='overline' display='block' gutterBottom>
        {newDate}
      </Typography>
      <Typography variant='body1' gutterBottom>
        {post?.data?.data?.postText}
      </Typography>
    </div>
  );
};

export default Article;
