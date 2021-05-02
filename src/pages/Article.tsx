import { Avatar, Button, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import BlogApi from "../apis/BlogApi";
import { format } from "date-fns";

const Article: React.FC<any> = ({ postId }) => {
	const [post, setPost] = React.useState<any>([]);
	const [loading, setLoading] = React.useState(true);
	const [newDate, setNewDate] = React.useState("");
	//@ts-ignore
	React.useEffect(async () => {
		const responce: any = await BlogApi.get(`/posts/${postId}`);
		setPost(responce);
		setLoading(false);
	}, []);
	const [user, setUser] = React.useState<any>([]);
	//@ts-ignore
	React.useEffect(async () => {
		const findUser = await post?.data?.data?.userId;
		const responce = await BlogApi.get(`/user/${findUser}`);
		const reformat = await post?.data?.data?.createdAt;
		const newFormat = await format(new Date(reformat), "dd/MM/yyyy kk:mm");
		setNewDate(newFormat);
		setUser(responce);
		setLoading(false);
	}, [post]);
	//@ts-ignore
	console.log(newDate);
	return (
		<div>
			<Link to={`/user/${post?.data?.data?.userId}`}>
				{loading ? (
					<p>loading</p>
				) : (
					<CardHeader
						avatar={<Avatar aria-label='recipe'></Avatar>}
						title={user.data?.data?.user}
					/>
				)}
			</Link>
			<Button variant='contained' color='primary' endIcon={<AddIcon />}>
				Подписаться
			</Button>

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
