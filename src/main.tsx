import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "./App";
import "./styles/main.css";

import "./i18n.js"

createRoot(document.getElementById("root")!).render(
  <ParallaxProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ParallaxProvider>
);
