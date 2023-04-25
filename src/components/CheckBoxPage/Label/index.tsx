import React from "react";

import { FormControlLabel, type FormControlLabelProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizeMUIFormControlLabel = styled(FormControlLabel)((props) => ({
	width: "auto",
	height: "auto",
	fontWeight: 600,
	fontSize: props?.theme?.labelStyle?.fontSize,
	color: props?.theme?.labelStyle?.fontColor,
	"& .Mui-disabled": {
		color: props?.theme?.disabled?.main,
		fontWeight: 300,
	},
	...props?.theme?.checkBoxLabelCSSProperties,
}));

const MUIFormControlLabel: React.FC<FormControlLabelProps> = (
	props: FormControlLabelProps
) => {
	return <CustomizeMUIFormControlLabel {...props} />;
};

export default MUIFormControlLabel;
