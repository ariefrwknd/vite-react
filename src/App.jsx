import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>legacy Target</h1>
      <h1>legacy chunks: false</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
  // return <RouterProvider router={router} />;
}

export default App;
