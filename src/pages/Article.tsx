import { Avatar, Button, CardHeader, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const Article = () => {
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
				Топ 5 забавных аниме ч.1
			</Typography>
			<Typography variant='overline' display='block' gutterBottom>
				4 апреля 2020
			</Typography>
			<Typography variant='body1' gutterBottom>
				В данном топе я постараюсь выделить сериалы, в которых не так много
				серий, около 12 +-или же которые состоят из нескольких минут. Т.к.
				существуют и многосерийные смешные аниме, а для них нужно больше времени
				на просмотр всего сериала. Но если же хотите, напишите в комментарии и я
				постараюсь сделать вторую/третью часть с длинными сериалами. 5 место
			</Typography>
		</div>
	);
};

export default Article;
