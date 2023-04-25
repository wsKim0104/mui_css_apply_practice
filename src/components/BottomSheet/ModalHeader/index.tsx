import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
	root: {
		width: "100%",
		height: 65,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	tabBar: {
		width: 30,
		height: 4,
		backgroundColor: "#D9D9D9",
		borderRadius: 2,
	},
	titleBox: {
		width: "auto",
		height: "auto",
		fontSize: 16,
		fontWeight: 700,
		color: "#000",
	},
	subTitleBox: {
		width: "auto",
		height: "auto",
		fontSize: 13,
		fontWeight: 400,
		color: "#898A8D",
	},
});

const ModalHeader = () => {
	const classes = useStyle();
	return (
		<Box className={classes.root}>
			<Box className={classes.tabBar} />
			<Box className={classes.titleBox}>Title</Box>
			<Box className={classes.subTitleBox}>Sub Text</Box>
		</Box>
	);
};

export default ModalHeader;
