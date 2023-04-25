import React from "react";

import { Box } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import MUIModal from "@components/BottomSheet/Modal";

const ContainerBox = styled(Box)(() => ({
	width: "100%",
	height: "100%",
	backgroundColor: "rgba(72,72,72,0.65)",
	position: "absolute",
	top: "0%",
	left: "0%",
	overflow: "hidden",
}));

const MIN_H = 10;
const MAX_H = 640 - 349;
const bottomSheetHeight = 640 - MIN_H;

const ModalTheme = createTheme({
	bottomSheetHeight: bottomSheetHeight,
	bottomSheetBasicTranslateY: MAX_H,
});

const BottomSheet = () => {
	return (
		<ThemeProvider theme={ModalTheme}>
			<ContainerBox>
				<MUIModal minHeight={MIN_H} maxHeight={MAX_H} />
			</ContainerBox>
		</ThemeProvider>
	);
};

export default BottomSheet;
