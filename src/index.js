import React from "react";
import ReactDOM from "react-dom/client";
//import react-router functions
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import UserProfile from "./pages/UserProfile";
// import ErrorPage from "./pages/ErrorPage";
import routes from "./routes.js";

const router = createBrowserRouter(routes);
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <ErrorPage />
//   }, 
//   {
//     path: "/about",
//     element: <About />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/login",
//     element: <Login />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/profile/:id",
//     element: <UserProfile />,
//     errorElement: <ErrorPage />
//   }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);