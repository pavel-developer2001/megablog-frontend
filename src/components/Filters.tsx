import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Button, Fab, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
		root: {
			textAlign: "center",
		},
		button: {
			marginTop: "15px",
			borderRadius: "20px",
			padding: "10px",
		},
		a: { textDecoration: "none" },
	})
);

export default function Filters() {
	const classes = useStyles();
	const [age, setAge] = React.useState("");

	const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setAge(event.target.value as string);
	};

	return (
		<div className={classes.root}>
			<FormControl variant='outlined' className={classes.formControl}>
				<InputLabel id='demo-simple-select-outlined-label'>Фильтр</InputLabel>
				<Select
					labelId='demo-simple-select-outlined-label'
					id='demo-simple-select-outlined'
					value={age}
					onChange={handleChange}
					label='Фильтр'
				>
					<MenuItem value={10}>По популярности</MenuItem>
					<MenuItem value={20}>По последним обновлениям</MenuItem>
				</Select>
			</FormControl>
			<Link to='/add' className={classes.a}>
				<Button
					variant='contained'
					color='default'
					className={classes.button}
					endIcon={<AddIcon />}
				>
					Написать статью
				</Button>
			</Link>
		</div>
	);
}
