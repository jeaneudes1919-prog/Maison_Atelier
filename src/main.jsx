import React from "react";import {createRoot} from "react-dom/client";import {BrowserRouter} from "react-router-dom";
import "@fontsource-variable/inter";import "@fontsource/playfair-display/500.css";import "@fontsource/playfair-display/600.css";
import "./index.css";import App from "./App.jsx";import {Store} from "./store.jsx";
createRoot(document.getElementById("root")).render(<BrowserRouter><Store><App/></Store></BrowserRouter>);
