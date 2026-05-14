import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        { index: true, Component: Portfolio },
        { path: "skills", Component: Skills },
        ],
    },
]);