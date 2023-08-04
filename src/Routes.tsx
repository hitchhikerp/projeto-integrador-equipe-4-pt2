import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Panel from "./pages/Panel";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/panel",
      element: <Panel />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
