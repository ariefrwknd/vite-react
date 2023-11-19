import { Route, Routes } from "react-router-dom";

function KasirRoute() {
  const Component = () => <h1>Kasir</h1>

	return (
		<>
			<Routes>
				<Route path="/" element={<Component />} />
			</Routes>
		</>
	);
}

export default KasirRoute;
