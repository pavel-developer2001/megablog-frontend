import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import BlogApi from "../apis/BlogApi";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

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
  const [user, setUser] = React.useState<any>([]);
  const classes = useStyles();

  React.useEffect(() => {
    async function fetchData() {
      const responce = await BlogApi.get(`/user/${userId}`);
      setUser(responce);
    }
    fetchData();
  }, [userId]);

  return (
    <div className={classes.root}>
      <div className={classes.user}>
        <Avatar src='/broken-image.jpg' className={classes.avatar} />
        <Typography className={classes.name} variant='h5'>
          {user?.data?.data?.user}
        </Typography>
      </div>
    </div>
  );
};

export default Profile;
