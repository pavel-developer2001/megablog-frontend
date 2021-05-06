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
import imageFon from "../static/image.jpg";
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
		a: { textDecoration: "none" },
		title: {
			textAlign: "center",
		},
		list: {
			marginTop: "45px",
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
	const [user, setUser] = React.useState<any>([]);
	//@ts-ignore
	React.useEffect(async () => {
		const responce = await BlogApi.get(`/user/${userId}`);
		setUser(responce);
	}, []);
	//@ts-ignore
	// console.log(responce);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<Link className={classes.a} to={`/user/${userId}`}>
				<CardHeader
					avatar={
						<Avatar aria-label='recipe' className={classes.avatar}></Avatar>
					}
					title={user?.data?.data?.user}
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
	const classes = useStyles();
	return (
		<div className={classes.list}>
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
