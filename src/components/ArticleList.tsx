import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { Link } from "react-router-dom";

import imageFon from "../static/image.jpg";
import { format } from "date-fns";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchPosts } from "../store/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/userAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      margin: "0 auto",
      marginBottom: "25px",
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    a: { textDecoration: "none" },
    title: {
      textAlign: "center",
    },
    list: {
      marginTop: "45px",
    },
  })
);
type ArticleListItemProps = {
  title: string;
  likes: number;
  postId: number;
  date: number;
  userId: number;
};
const ArticleListItem: React.FC<ArticleListItemProps> = React.memo(
  ({ title, likes, postId, date, userId }) => {
    const classes = useStyles();

    //@ts-ignore
    const user = useSelector((state) => state.users.user);
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(fetchUser(userId));
    }, [userId]);

    return (
      <Card className={classes.root}>
        <Link className={classes.a} to={`/user/${userId}`}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}></Avatar>
            }
            title={user.user}
            subheader={format(new Date(date), "dd/MM/yyyy kk:mm")}
          />
        </Link>
        <CardMedia
          className={classes.media}
          image={imageFon}
          title='Paella dish'
        />
        <CardContent>
          <Typography className={classes.title} variant='h6' component='h6'>
            <Link className={classes.a} to={`/posts/${postId}`}>
              {title}
            </Link>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteBorderIcon />
          </IconButton>
          <Typography variant='body1' component='strong'>
            {likes}
          </Typography>
        </CardActions>
      </Card>
    );
  }
);

const ArticleList = () => {
  //@ts-ignore
  const { data } = useTypedSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const { loading } = useTypedSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {loading ? (
        <p>loading</p>
      ) : data ? (
        data.map((info: any) => {
          return (
            <ArticleListItem
              key={info.id}
              postId={info.id}
              title={info.postTitle}
              likes={info.countLike}
              date={info.createdAt}
              userId={info.userId}
            />
          );
        })
      ) : (
        <p>Нет постов</p>
      )}
    </div>
  );
};
export default ArticleList;
