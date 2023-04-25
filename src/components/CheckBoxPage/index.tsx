import React from "react";

import { Box, FormControl, FormGroup } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import MUICheckBox from "@components/CheckBoxPage/CheckBox";
import MUIFormLabel from "@components/CheckBoxPage/FormLabel";
import MUIFormControlLabel from "@components/CheckBoxPage/Label";

const Container = styled(Box)`
	width: 360px;
	height: 640px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	box-sizing: border-box;
`;

const CheckBoxGroupTheme = createTheme({
	disabled: {
		main: "rgba(45,45,45,0.65)",
	},
	palette: {
		primary: {
			main: green[500],
		},
		secondary: {
			main: orange[200],
		},
	},
	labelStyle: {
		fontSize: 18.5,
		fontColor: "#000",
	},
	checkBoxCSSProperties: {
		backgroundColor: "#fff",
	},
	checkBoxLabelCSSProperties: {
		backgroundColor: "#fff",
	},
	checkBoxGroupLableCSSProperties: {
		backgroundColor: "#fff",
		fontSize: 20.5,
		fontWeight: "bold",
		color: "red",
	},
});

interface CheckStateType {
	[keys: string]: boolean;
}

interface ReducerStateType {
	checkGroupValue: CheckStateType;
}

interface ActionType {
	type: string;
	data: {
		keyStr: string;
	};
}
function checkBoxReducer(
	prevState: ReducerStateType,
	action: ActionType
): ReducerStateType {
	switch (action.type) {
		case "CHECK": {
			const {
				data: { keyStr },
			} = action;
			const prevValue = prevState.checkGroupValue[keyStr];
			return {
				checkGroupValue: {
					...prevState.checkGroupValue,
					[keyStr]: !prevValue,
				},
			};
		}
		default:
			return { ...prevState };
	}
}

/* checkbox page 영역 */
const CheckBoxPage = () => {
	const [state, dispatch] = React.useReducer(checkBoxReducer, {
		checkGroupValue: {
			CheckBox1: true,
			CheckBox2: false,
			CheckBox3: false,
		},
	});
	const { checkGroupValue } = state;
	return (
		<Container>
			<ThemeProvider theme={CheckBoxGroupTheme}>
				<FormControl component="fieldset" variant="standard">
					<MUIFormLabel text="Check Box Title" />
					<FormGroup>
						{Object.keys(checkGroupValue).map((v) => (
							<MUIFormControlLabel
								key={v}
								label="CheckBox2"
								name="CheckBoxGroup1"
								checked={checkGroupValue[v]}
								control={<MUICheckBox />}
								labelPlacement="start"
								onChange={() =>
									dispatch({
										type: "CHECK",
										data: { keyStr: v },
									})
								}
							/>
						))}
					</FormGroup>
				</FormControl>
			</ThemeProvider>
		</Container>
	);
};

export default CheckBoxPage;
