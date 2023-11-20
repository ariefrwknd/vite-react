import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import App from "./App.jsx";
import "./index.css";

const intervalInDay = (60 * 60 * 1000) / (1000 * 60 * 60 * 24);

// registerSW({
//   onRegistered(r) {
//     r &&
//       setInterval(() => {
//         r.update();
//       }, intervalInDay);
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
