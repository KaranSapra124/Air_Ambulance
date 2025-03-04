import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import WorldwideSolutions from "./pages/WorldwideSolutions";
import Blogs from "./pages/Blogs";
import React from "react";
import Navbar from "./Components/Global/Navbar";
import Air_Ambulance from "./Components/DropDown/Air_Ambulance";
import Train_Ambulance from "./Components/DropDown/Train_Ambulane";
import Ambulance from "./Components/DropDown/Ambulance";

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
      { path: "/air-ambulance", element: <Air_Ambulance /> },
      { path: "/train-ambulance", element: <Train_Ambulance /> },
      { path: "/road-ambulance", element: <Ambulance /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
