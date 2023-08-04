import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
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
            path: '/detalhes',
            element: <Detalhes />,
        },
        {
          path: "/panel",
          element: <Pedidos />,
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
}
