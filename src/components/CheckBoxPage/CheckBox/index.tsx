import React from "react";

import { Checkbox, type CheckboxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

/* checkbox 영역 */
interface CustomizedMUICheckBoxProps extends CheckboxProps {
	checkedColor?: string;
	cssProperties?: React.CSSProperties;
}

const CustomizedMUICheckBox = styled(Checkbox)(
	(props: CustomizedMUICheckBoxProps) => ({
		width: "auto",
		height: "auto",
		/* checkbox 의 사이즈 조정 */
		"&.MuiSvgIcon-root": { fontSize: 27.5 },
		/* checkbox 가 check 되었을 때의 style */
		"&.Mui-checked": {
			color: props?.checkedColor ? props?.checkedColor : "orange",
		},
		"&.Mui-disabled": {
			color: "#454545",
		},
		...props.cssProperties,
	})
);

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MUICheckBox: React.FC<CustomizedMUICheckBoxProps> = (props) => {
	console.log(props);
	return <CustomizedMUICheckBox {...label} {...props} />;
};

export default MUICheckBox;
