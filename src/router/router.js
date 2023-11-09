import About from "../pages/About";
import { Posts } from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import React from "react";
import Login from "../pages/Login";

// <Route path="/about" element={<About />} />
export const privateRoutes = [
  { element: <About />, path: "/about", exact: true },
  { element: <Posts />, path: "/posts", exact: true },
  { element: <PostIdPage />, path: "/posts/:id", exact: true },
  { element: <Error />, path: "*", exact: true },
];
export const publicRoutes = [
  { element: <Login />, path: "/login", exact: true },
  { element: <Login />, path: "*", exact: true },
];
