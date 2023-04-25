import { FormLabel, type FormLabelProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizedMUIFormGroupLabel = styled(FormLabel)((props) => ({
	width: "auto",
	height: "auto",
	fontSize: 18.5,
	fontWeight: "bold",
	...props?.theme?.checkBoxGroupLableCSSProperties,
}));

interface MUIFormLabelProps extends FormLabelProps {
	text: string;
}

const MUIFormLabel: React.FC<MUIFormLabelProps> = ({
	text,
	...props
}: MUIFormLabelProps) => {
	return (
		<CustomizedMUIFormGroupLabel {...props}>
			{text}
		</CustomizedMUIFormGroupLabel>
	);
};

export default MUIFormLabel;
