import "./index.css";

import { RouterProvider } from "react-router";
import indexRouter from "./router/index";

function App() {
  return <RouterProvider router={indexRouter} />;
}

export default App;
