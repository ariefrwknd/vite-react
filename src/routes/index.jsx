import { createBrowserRouter } from "react-router-dom";
import QonciergeRoute from "./qoncierge";
import CoachRoute from "./coach";
import KasirRoute from "./kasir";

// Kasir

export const router = createBrowserRouter([
	{
		path: "/*",
		element: <QonciergeRoute />,
	},
	{
		path: "coach/*",
		element: <CoachRoute />,
	},
	{
		path: "kasir/*",
		element: <KasirRoute />,
	},
]);

export default router;
