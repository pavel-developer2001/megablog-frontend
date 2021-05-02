import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogApi from "../apis/BlogApi";
import { format } from "date-fns";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
			margin: "0 auto",
			marginBottom: "25px",
		},
		media: {
			height: 0,
			paddingTop: "56.25%", // 16:9
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
	})
);

const ArticleListItem: React.FC<any> = ({
	title,
	likes,
	postId,
	date,
	userId,
}) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const responce = BlogApi.get(`/user/${userId}`);
	//@ts-ignore
	// console.log(responce);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<Link to='/user/10'>
				<CardHeader
					avatar={
						<Avatar aria-label='recipe' className={classes.avatar}></Avatar>
					}
					title='Dark side'
					subheader={format(new Date(date), "dd/MM/yyyy kk:mm")}
				/>
			</Link>
			<CardMedia
				className={classes.media}
				image='/static/images/cards/paella.jpg'
				title='Paella dish'
			/>
			<CardContent>
				<Typography variant='h6' component='h6'>
					<Link to={`/posts/${postId}`}>{title}</Link>
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteBorderIcon />
				</IconButton>
				<Typography variant='body1' component='strong'>
					{likes}
				</Typography>
				<IconButton aria-label='add to favorites'>
					<ChatBubbleOutlineIcon />
				</IconButton>
				<Typography variant='body1' component='strong'>
					12
				</Typography>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'
				></IconButton>
			</CardActions>
		</Card>
	);
};

const ArticleList = () => {
	//@ts-ignore
	const { data } = useSelector((state) => state?.posts?.posts);
	return (
		<div className='article-list'>
			{data?.map((info: any) => {
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
			})}
		</div>
	);
};
export default ArticleList;
