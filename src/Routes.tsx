import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
<<<<<<< HEAD
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
=======
import Pedidos from "./pages/Pedidos";
import Detalhes from "./pages/Detalhes";
import Servicos from "./pages/Servicos";
import Relatorios from "./pages/Relatorios";
export default function Routes() {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
        },
        {
            path: '/pedidos',
            element: <Pedidos />,
        },
        {
            path: '/detalhes',
            element: <Detalhes />,
        },
        {
            path: '/servicos',
            element: <Servicos />,
        },
        {
            path: '/relatorios',
            element: <Relatorios />,
        }
    ])
    return <RouterProvider router={routes} />;
>>>>>>> f5fb15d496c3628f83ac3991ab25a5b0d6f43c55
}
