import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from 'react'
import "animate.css/animate.compat.css"


import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
