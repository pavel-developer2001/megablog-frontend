import { Avatar, Button, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import BlogApi from "../apis/BlogApi";
import { format } from "date-fns";

const Article: React.FC<any> = ({ postId }) => {
	const [post, setPost] = React.useState<any>([]);
	//@ts-ignore
	React.useEffect(async () => {
		const responce: any = await BlogApi.get(`/posts/${postId}`);
		setPost(responce);
	}, []);
	//@ts-ignore

	// console.log(
	// 	format(new Date(post?.data?.data?.createdAt), "dd/MM/yyyy kk:mm")
	// );
	return (
		<div>
			<Link to='/user'>
				<CardHeader
					avatar={<Avatar aria-label='recipe'></Avatar>}
					title='Dark side'
				/>
			</Link>
			<Button variant='contained' color='primary' endIcon={<AddIcon />}>
				Подписаться
			</Button>

			<Typography variant='h4' gutterBottom>
				{post?.data?.data?.postTitle}
			</Typography>
			<Typography variant='overline' display='block' gutterBottom>
				{post?.data?.data?.createdAt}
			</Typography>
			<Typography variant='body1' gutterBottom>
				{post?.data?.data?.postText}
			</Typography>
		</div>
	);
};

export default Article;
