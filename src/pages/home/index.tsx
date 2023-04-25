import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import BottomSheet from "@components/BottomSheet";
// import ButtonComponent from "@components/Button_Theme";
// import ButtonComponent from "@components/Button";
// import CheckBoxPage from "@components/CheckBoxPage";
// import RadioComponent from "@components/RadioBox";
// import MediaQueryPage from "@components/MediaQueryPage/basic";
import MediaQueryChangedBreakPointsPage from "@components/MediaQueryPage/changeBreakpointsPixel";

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
		border: "1px solid #454545",
		display: "flex",
		flexDirection: "column",
		position: "relative",
	},
});

declare module "@mui/material/styles" {
	// theme customizing 을 위한 module augmentation
	interface Theme {
		disabled?: {
			main: string;
		};
		labelStyle?: {
			fontSize?: number | string;
			fontColor?: string;
			disabledFontColor?: string;
		};
		checkBoxCSSProperties?: React.CSSProperties;
		checkBoxLabelCSSProperties?: React.CSSProperties;
		checkBoxGroupLableCSSProperties?: React.CSSProperties;
		bottomSheetHeight?: number;
		bottomSheetBasicTranslateY?: number;
	}
	interface ThemeOptions {
		disabled?: {
			main: string;
		};
		labelStyle?: {
			fontSize?: number | string;
			fontColor?: string;
			disabledFontColor?: string;
		};
		checkBoxCSSProperties?: React.CSSProperties;
		checkBoxLabelCSSProperties?: React.CSSProperties;
		checkBoxGroupLableCSSProperties?: React.CSSProperties;
		bottomSheetHeight?: number;
		bottomSheetBasicTranslateY?: number;
	}
}

const Home = () => {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			{/* <Box className={classes.innerBox}>
				<BottomSheet />
				<CheckBoxPage />
				
			</Box> */}
			{/* <MediaQueryPage /> */}
			<MediaQueryChangedBreakPointsPage />
		</Box>
	);
};

export default Home;
