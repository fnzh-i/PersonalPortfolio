import { RouterProvider } from "react-router";
import { router } from "./Route";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }
    return <RouterProvider router={router} />;
}

export default App
