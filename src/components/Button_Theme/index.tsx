import React from "react";

import { ThemeProvider, makeStyles } from "@mui/styles";

interface MyTheme {
	backgroundColor: string;
	boxShadow: string;
}

const useStyles = makeStyles((theme: MyTheme) => ({
	root: {
		backgroundColor: theme.backgroundColor,
		boxShadow: theme.boxShadow,
		fontSize: 15.5,
		border: 0,
		borderRadius: 5,
		color: "#fff",
		height: 30,
		padding: "0 30px",
	},
}));

const SingleButton = () => {
	const classes = useStyles();
	return <button className={classes.root}>button</button>;
};

const ButtonComponent = () => {
	return (
		<ThemeProvider<MyTheme>
			theme={{
				backgroundColor: "#2D2D2D",
			}}
		>
			<SingleButton />
		</ThemeProvider>
	);
};

export default ButtonComponent;
