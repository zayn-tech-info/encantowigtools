import { StrictMode } from "react";
import { createRoot } from "react-dom/client"
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>
);
