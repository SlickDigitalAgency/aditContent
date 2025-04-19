// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter here
import App from "./App.tsx";
import "./index.css"; // Global styles
import Navbar from "./components/global/navbar/Navbar.tsx"; // Navbar component
import Footer from "./components/global/footer/Footer.tsx"; // Footer component

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
