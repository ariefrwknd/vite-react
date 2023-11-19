import { Route, Routes } from "react-router";

const Component = () => <h1>Qoncierge</h1>

function QonciergeRoute() {
	return (
		<>
			<Routes>
				<Route path="/" element={ <Component /> } />
			</Routes>
		</>
	);
}

export default QonciergeRoute;
