import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

//import ButtonComponent from "@components/Button_Theme";
// import ButtonComponent from "@components/Button";
import CheckBoxPage from "@components/CheckBoxPage";

// import RadioComponent from "@components/RadioBox";

const useStyles = makeStyles({
	root: {
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	innerBox: {
		width: 360,
		height: 640,
		overflowY: "scroll",
		border: "1px solid #454545",
		display: "flex",
		flexDirection: "column",
	},
});

const Home = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.innerBox}>
				<CheckBoxPage />
			</Box>
		</Box>
	);
};

export default Home;
