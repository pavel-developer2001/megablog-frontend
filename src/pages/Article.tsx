import {
	Avatar,
	Button,
	CardHeader,
	Grid,
	IconButton,
	Typography,
} from "@material-ui/core";
import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//@ts-ignore
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import BlogApi from "../apis/BlogApi";
import { format } from "date-fns";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "max-content",
			margin: "0 auto",
		},
		a: { textDecoration: "none" },
		user: {
			display: "inline-flex",
			marginRight: "30px",
		},
		userContent: {
			display: "tableCell",
		},
		block: {
			display: "block",
		},
	})
);
const Article: React.FC<any> = ({ postId }) => {
	const [post, setPost] = React.useState<any>([]);
	const [loading, setLoading] = React.useState(true);
	const [newDate, setNewDate] = React.useState("");
	const [editing, setEditing] = React.useState(false);
	const classes = useStyles();
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
	return (
		<div className={classes.root}>
			<Link className={classes.a} to={`/user/${post?.data?.data?.userId}`}>
				{loading ? (
					<p>loading</p>
				) : (
					<CardHeader
						className={classes.user}
						avatar={<Avatar aria-label='recipe'></Avatar>}
						title={user.data?.data?.user}
					/>
				)}
			</Link>

			<PopupState variant='popover' popupId='demo-popup-menu'>
				{(popupState: any) => (
					<React.Fragment>
						<IconButton
							// onClick={() => setOff(!off)}
							{...bindTrigger(popupState)}
							aria-label='delete'
						>
							<MoreVertIcon />
						</IconButton>
						<Menu {...bindMenu(popupState)}>
							<MenuItem onClick={popupState.close}>
								{" "}
								{!editing && (
									<Button
										variant='contained'
										color='default'
										onClick={() => setEditing(!editing)}
										startIcon={<CreateIcon />}
									>
										Редактировать
									</Button>
								)}
								{editing && (
									<Button
										variant='contained'
										color='default'
										// onClick={handleEdit}
										startIcon={<CheckIcon />}
									>
										Готово
									</Button>
								)}
							</MenuItem>
							<MenuItem onClick={popupState.close}>
								<Button
									variant='contained'
									color='secondary'
									// onClick={removeTodo}
									startIcon={<DeleteIcon />}
								>
									Удалить
								</Button>
							</MenuItem>
						</Menu>
					</React.Fragment>
				)}
			</PopupState>
			<div className={classes.block}></div>
			{/* )} */}
			{/* <Button variant='contained' color='primary' endIcon={<AddIcon />}>
				Подписаться
			</Button> */}

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
