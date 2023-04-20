import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import { makeStyles } from "@mui/styles";

import Home from "@pages/home";

const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" element={<Home />} />)
);

const useStyles = makeStyles({
	root: {
		width: "100%",
		height: window.innerHeight,
	},
});

const App = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
