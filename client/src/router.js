import { createBrowserRouter } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "add",
    element: <Add />,
  },
  {
    path: "update/:id",
    element: <Update />,
  },
]);

export default router;
