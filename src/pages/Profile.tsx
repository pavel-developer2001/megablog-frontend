import { Avatar, Button, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import BlogApi from "../apis/BlogApi";

const Profile: React.FC<any> = ({ userId }) => {
	const [user, setUser] = React.useState<any>([]);
	//@ts-ignore
	React.useEffect(async () => {
		const responce = await BlogApi.get(`/user/${userId}`);
		setUser(responce);
	}, []);

	return (
		<div>
			<Avatar src='/broken-image.jpg' />
			<Typography variant='h5'>{user?.data?.data?.user}</Typography>
			<Typography variant='button' display='block' gutterBottom>
				Количество подписчиков: 100
			</Typography>
			<Button variant='contained' color='primary' endIcon={<AddIcon />}>
				Подписаться на канал
			</Button>
		</div>
	);
};

export default Profile;
