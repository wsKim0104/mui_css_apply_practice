import React from "react";

import { Typography } from "@mui/material";
import { blue, green, orange, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

// 원래 설정된 breakpoint 범위
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
//https://mui.com/material-ui/customization/breakpoints/#custom-breakpoints
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

const MediaQueryPage = () => {
	return (
		<Root>
			<Typography>down(sm) : orange</Typography>
			<Typography>up(sm) : red</Typography>
			<Typography>up(md) : blue</Typography>
			<Typography>up(lg) : green</Typography>
		</Root>
	);
};

export default MediaQueryPage;
