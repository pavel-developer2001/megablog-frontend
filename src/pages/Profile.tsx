import { Avatar, Button, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";

const Profile = () => {
	return (
		<div>
			<Avatar src='/broken-image.jpg' />
			<Typography variant='h5'>Dark side</Typography>
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
