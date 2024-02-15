import {JSX} from "react";
import {createBrowserRouter} from "react-router-dom";

import Home from "~p/Home";
import CreateContact from "~p/CreateContact";
import EditContact from "~p/EditContact";
import NotFound from "~p/NotFound";

type Route = {
    name: string;
    path: string;
    element: JSX.Element;
    errorElement?: JSX.Element;
};

const routes: Route[] = [
    {
        name: "home",
        path: "/",
        element: <Home/>,
        errorElement: <NotFound />,
    },
    {
        name: "createContact",
        path: "/create-contact",
        element: <CreateContact />,
    },
    {
        name: "editContact",
        path: "/edit-contact/:id",
        element: <EditContact />,
    },
];

const router = createBrowserRouter(routes);

export default router;
