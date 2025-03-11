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
import MedicalAssistance from "./Components/DropDown/MedicalAssistance";
import Stretcher from "./Components/DropDown/Stretcher";
import Emergency from "./Components/DropDown/Emergency";
import Ambulance_In_IGI from "./Components/DropDown/Ambulance_In_IGI";
import BlogsPage from "./pages/Blogs";
import IndustrialHealth from "./Components/DropDown/IndustrialHealth";
import InternationalServices from "./Components/DropDown/InternationalServices";
import NationalServices from "./Components/DropDown/NationalServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/worldwide-solutions", element: <WorldwideSolutions /> },
      { path: "/blogs", element: <BlogsPage /> },
      { path: "/air-ambulance", element: <Air_Ambulance /> },
      { path: "/train-ambulance", element: <Train_Ambulance /> },
      { path: "/road-ambulance", element: <Ambulance /> },
      { path: "/medical-assistance", element: <MedicalAssistance /> },
      { path: "/stretcher", element: <Stretcher /> },
      { path: "/emergency", element: <Emergency /> },
      { path: "/ambulance-igi", element: <Ambulance_In_IGI /> },
      { path: "/industrial-health", element: <IndustrialHealth /> },
      { path: "/ambulance-fabrication", element: <Ambulance /> },
      { path: "/home-care", element: <MedicalAssistance /> },
      { path: "/national-services", element: <NationalServices /> },
      { path: "/international-services", element: <InternationalServices /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
