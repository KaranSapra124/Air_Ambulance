import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import WorldwideSolutions from "./pages/WorldwideSolutions";
import Blogs from "./pages/Blogs";
import React from "react";
import Navbar from "./Components/Global/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/worldwide-solutions", element: <WorldwideSolutions /> },
      { path: "/blogs", element: <Blogs /> },
    ],
    
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
