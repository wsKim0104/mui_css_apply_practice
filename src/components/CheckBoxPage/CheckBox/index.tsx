import React from "react";

import { Checkbox, type CheckboxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

/* checkbox 영역 */

const CustomizedMUICheckBox = styled(Checkbox)((props) => ({
	width: "auto",
	height: "auto",
	/* checkbox 의 사이즈 조정 */
	"&.MuiSvgIcon-root": { fontSize: 27.5 },
	/* checkbox 가 check 되었을 때의 style */
	"&.Mui-checked": {
		color: props?.theme?.palette?.primary?.main,
	},
	"&.Mui-disabled": {
		color: props?.theme?.disabled?.main,
	},
	...props?.theme?.checkBoxCSSProperties,
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

type MUICheckBoxProps = CheckboxProps;

const MUICheckBox: React.FC<MUICheckBoxProps> = (props: MUICheckBoxProps) => {
	return <CustomizedMUICheckBox {...label} {...props} />;
};

export default MUICheckBox;
