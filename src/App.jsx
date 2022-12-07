import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import WritePost from "./pages/WritePost";
import "./style.scss";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/write",
        element: <WritePost />,
      },
      {
        path: "/post",
        element: <Post />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <div className="relative min-h-screen">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
