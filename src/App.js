import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="App font-serif m-0 max-w-full overflow-hidden"
      data-theme="aqua"
    >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
