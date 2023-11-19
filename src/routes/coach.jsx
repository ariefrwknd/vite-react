import { Route, Routes } from "react-router-dom";

const Component = () => <h1>Coach</h1>

function CoachRoute() {
	return (
		<div >
			<Routes>
				<Route path="/" element={
						<Component />
				} />
			</Routes>
		</div>
	);
}

export default CoachRoute;
