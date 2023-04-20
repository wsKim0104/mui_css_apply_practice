import React from "react";

import Radio, { RadioProps } from "@mui/material/Radio";
import { styled } from "@mui/material/styles";

interface RadioStyleProp extends RadioProps {
	checkedColor?: string;
}

const RadioCustomizeComponnet = styled(Radio)<RadioStyleProp>(
	({ checkedColor }) => ({
		"&.MuiRadio-root": {
			width: 50,
			height: 50,
		},
		"&.Mui-disabled": {
			color: "#454545",
		},
		"&.Mui-checked": {
			color: "red",
		},
	})
);

// const RadioComponent: React.FC<RadioStyleProp> = (props: RadioStyleProp) => {
// 	return <RadioCustomizeComponnet {...props} />;
// };
const RadioComponent: React.FC<RadioStyleProp> = ({
	checkedColor,
	...props
}: RadioStyleProp) => {
	return (
		<Radio
			sx={{
				"&..mUI": {
					color: checkedColor,
				},
			}}
			{...props}
		/>
	);
};

export default RadioComponent;
