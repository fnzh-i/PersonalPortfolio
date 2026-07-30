import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
        { index: true, Component: Portfolio },
        { path: "about", Component: About },
        { path: "skills", Component: Skills },
        { path: "stack", Component: TechStack },
        { path: "projects", Component: Projects },
        ],
    },
]);