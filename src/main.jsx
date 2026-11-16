import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";
import "./styles/TravelAgency.css";
import "./styles/Destinazioni.css";
import "./styles/Offerte.css";
import "./styles/Preventivo.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Travel-agency-React">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
