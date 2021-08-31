import { Avatar, Typography } from "@material-ui/core";
import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../store/actions/userAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "max-content",
      margin: "0 auto",
      display: "flex",
    },
    user: {
      display: "flex",
      marginTop: "25px",
    },
    name: {
      marginLeft: "10px",
      marginTop: "20px",
      fontSize: "40px",
    },
    avatar: {
      width: "100px",
      height: " 100px",
    },
  })
);
type ProfileProps = {
  userId: string;
};
const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const classes = useStyles();
  //@ts-ignore
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    async function fetchData() {
      await dispatch(fetchUser(userId));
    }
    fetchData();
  }, [userId]);

  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <Avatar src='/broken-image.jpg' className={classes.avatar} />
        <Typography className={classes.name} variant='h5'>
          {user.user}
        </Typography>
      </div>
    </div>
  );
};

export default Profile;
