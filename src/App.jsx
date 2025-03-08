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
import IndividualBlog from "./Components/Blogs/IndividualBlog";
import NationalServices from "./Components/DropDown/NationalServices";
import InternationalServices from "./Components/DropDown/InternationalServices";
import IndustrialHealth from "./Components/DropDown/IndustrialHealth";
import AmbulanceFabrication from "./Components/DropDown/AmbulanceFabrication";
import HomeCare from "./Components/DropDown/HomeCare";

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
      { path: "/medical-assistance", element: <MedicalAssistance /> },
      { path: "/stretcher", element: <Stretcher /> },
      { path: "/emergency", element: <Emergency /> },
      { path: "/ambulance-igi", element: <Ambulance_In_IGI /> },
      { path: "/Blog-Page/:id", element: <IndividualBlog /> },
      { path: "/national-services", element: <NationalServices /> },
      {
        path: "/international-services",
        element: <InternationalServices />,
      },
      {
        path: "/industrial-health",
        element: <IndustrialHealth />,
      },
      {
        path: "/ambulance-fabrication",
        element: <AmbulanceFabrication />,
      },
      {
        path: "/home-care",
        element: <HomeCare />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
