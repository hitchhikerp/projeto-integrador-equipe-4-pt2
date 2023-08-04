import Login from "./pages/Login";
import Pedidos from "./pages/Pedidos";
import Detalhes from "./pages/Detalhes";
import Servicos from "./pages/Servicos";
import Relatorios from "./pages/Relatorios";
import Panel from "./pages/Panel";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
        },
        {
            path: "/panel",
            element: <Panel />,
          },
    ])
    return <RouterProvider router={routes} />;
}
