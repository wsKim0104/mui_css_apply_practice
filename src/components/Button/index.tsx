import React from "react";

import { styled } from "@mui/system";

interface ButtonStyleProp {
	csstyle?: React.CSSProperties;
}

const CustomButton = styled("button")((props: ButtonStyleProp) => ({
	backgroundColor: props.csstyle?.backgroundColor
		? props.csstyle?.backgroundColor
		: "#2d2d2d",
	width: props.csstyle?.width ? props.csstyle?.width : 286,
	height: props.csstyle?.height ? props.csstyle?.height : 50,
	border: props.csstyle?.border ? props.csstyle?.border : "none",
	color: "#fff",
	"&:hover": {
		backgroundColor: "#EEEEEE",
	},
	...props,
}));

interface ComponentProps {
	label: string;
	csstyle?: React.CSSProperties;
}

const ButtonComponent: React.FC<ComponentProps> = (props: ComponentProps) => {
	const { label, csstyle } = props;
	return <CustomButton style={csstyle}>{label}</CustomButton>;
};

export default ButtonComponent;
