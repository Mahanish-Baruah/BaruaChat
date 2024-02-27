import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Join from "./components/Join.jsx";
import Chat from "./components/Chat.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Join />,
    },
    {
        path: "/chat",
        element: <Chat />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
