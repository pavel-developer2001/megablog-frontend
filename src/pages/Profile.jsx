import { Avatar, Button, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

const Profile = ({ userId }) => {
	// const { author } = useSelector((state) => state.users);
	// console.log(author);
	const users = localStorage.getItem("user");
	//@ts-ignore
	// console.log(JSON.parse(users));
	// console.log(users);
	return (
		<div>
			<Avatar src='/broken-image.jpg' />
			<Typography variant='h5'>{JSON.parse(users).user}</Typography>

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
