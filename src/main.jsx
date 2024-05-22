import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
// import Contact from "./components/Contact.jsx";
import RestaurantPage from "./components/RestaurantPage.jsx";
import Error from "./components/Error.jsx";
import { lazy, Suspense } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const About = lazy(() => import("./components/About.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:res_id",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
