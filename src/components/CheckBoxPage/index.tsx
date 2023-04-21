import React from "react";

import { Box } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import MUICheckBox from "@components/CheckBoxPage/CheckBox";
import MUIFormControlLabel from "@components/CheckBoxPage/Label";

const Container = styled(Box)`
	width: 360px;
	height: 640px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	box-sizing: border-box;
`;

/* checkbox page 영역 */
const CheckBoxPage = () => {
	return (
		<Container>
			<MUIFormControlLabel
				label="CheckBox1"
				name="CheckBoxGroup1"
				checked
				control={<MUICheckBox />}
				labelPlacement="start"
			/>
			<MUIFormControlLabel
				label="CheckBox2"
				name="CheckBoxGroup1"
				checked
				control={<MUICheckBox />}
				labelPlacement="start"
			/>
			<MUIFormControlLabel
				label="CheckBox3"
				name="CheckBoxGroup1"
				checked
				control={<MUICheckBox />}
				labelPlacement="start"
				disabled
			/>
		</Container>
	);
};

export default CheckBoxPage;
