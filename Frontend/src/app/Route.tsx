import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Portfolio from "./components/Portfolio";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        { index: true, Component: Portfolio },
        ],
    },
]);