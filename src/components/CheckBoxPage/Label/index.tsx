import React from "react";

import { FormControlLabel, type FormControlLabelProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CustomizeMUIFormControlLabelProp {
	cssStyle?: React.CSSProperties;
}

const CustomizeMUIFormControlLabel = styled(FormControlLabel)(
	(props: CustomizeMUIFormControlLabelProp) => ({
		width: "auto",
		height: "auto",
		fontWeight: 600,
		"& .Mui-disabled": {
			color: "gray",
			fontWeight: 300,
		},
	})
);

const MUIFormControlLabel: React.FC<FormControlLabelProps> = (
	props: FormControlLabelProps
) => {
	return <CustomizeMUIFormControlLabel {...props} />;
};

export default MUIFormControlLabel;
