import React from "react";

import styled from "@emotion/styled";
import Radio, { RadioProps } from "@mui/material/Radio";

//import { styled } from "@mui/material/styles";

interface RadioStyleProp extends RadioProps {
	checkedColor?: string;
}

const RadioCustomizeComponent = styled(Radio)`
	width: 30px;
	height: 30px;
`;

const RadioComponent: React.FC<RadioStyleProp> = ({
	checkedColor,
	...props
}: RadioStyleProp) => {
	return <Radio {...props} />;
};

export default RadioComponent;
