import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Portfolio from "./Portfolio";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        { index: true, Component: Portfolio },
        ],
    },
]);