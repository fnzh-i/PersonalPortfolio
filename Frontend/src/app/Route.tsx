import { Suspense, lazy, type ComponentType, type LazyExoticComponent } from "react";
import { createBrowserRouter } from "react-router";

const Root = lazy(() => import("./components/Root"));
const About = lazy(() => import("./components/About"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Skills = lazy(() => import("./components/Skills"));
const TechStack = lazy(() => import("./components/TechStack"));
const Projects = lazy(() => import("./components/Projects"));

function RouteFallback() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#050508] text-white">
            <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
                <span className="text-sm tracking-wide text-white/80">Loading page...</span>
            </div>
        </div>
    );
}

function withSuspense(Component: LazyExoticComponent<ComponentType>) {
    return (
        <Suspense fallback={<RouteFallback />}>
            <Component />
        </Suspense>
    );
}


export const router = createBrowserRouter([
    {
        path: "/",
        element: withSuspense(Root),
        children: [
        { index: true, element: withSuspense(Portfolio) },
        { path: "about", element: withSuspense(About) },
        { path: "skills", element: withSuspense(Skills) },
        { path: "stack", element: withSuspense(TechStack) },
        { path: "projects", element: withSuspense(Projects) },
        ],
    },
]);