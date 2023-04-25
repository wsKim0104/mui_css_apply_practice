import React from "react";

import { Typography } from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 300,
			md: 600,
			lg: 900,
			xl: 1236,
		},
	},
});

const Root = styled("div")(({ theme }) => ({
	padding: theme.spacing(1),
	[theme.breakpoints.down("sm")]: {
		backgroundColor: orange[500],
	},
	[theme.breakpoints.up("sm")]: {
		backgroundColor: blue[500],
	},
	[theme.breakpoints.up("md")]: {
		backgroundColor: red[500],
	},
	[theme.breakpoints.up("lg")]: {
		backgroundColor: green[500],
	},
}));

const MediaQueryChangedBreakPointsPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Root>
				<Typography>down(sm = 300이하) : orange</Typography>
				<Typography>up(sm = 300이상) : blue</Typography>
				<Typography>up(md = 600이상) : red</Typography>
				<Typography>up(lg = 900이상) : green</Typography>
			</Root>
		</ThemeProvider>
	);
};

export default MediaQueryChangedBreakPointsPage;
