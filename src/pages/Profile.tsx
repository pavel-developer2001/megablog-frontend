import { Avatar, Button, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
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

const Profile: React.FC<any> = ({ userId }) => {
	const [user, setUser] = React.useState<any>([]);
	const classes = useStyles();
	//@ts-ignore
	React.useEffect(async () => {
		const responce = await BlogApi.get(`/user/${userId}`);
		setUser(responce);
	}, []);

	return (
		<div className={classes.root}>
			<div className={classes.user}>
				<Avatar src='/broken-image.jpg' className={classes.avatar} />
				<Typography className={classes.name} variant='h5'>
					{user?.data?.data?.user}
				</Typography>
			</div>

			{/* <Typography variant='button' display='block' gutterBottom>
				Количество подписчиков: 100
			</Typography>
			<Button variant='contained' color='primary' endIcon={<AddIcon />}>
				Подписаться на канал
			</Button> */}
		</div>
	);
};

export default Profile;
