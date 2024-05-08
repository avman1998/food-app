import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Contact from "./components/Contact.jsx";
import Error from "./components/Error.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
