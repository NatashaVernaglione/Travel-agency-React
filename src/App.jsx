import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Destinazioni from "./pages/Destinazioni.jsx";
import Offerte from "./pages/Offerte.jsx";
import Contatti from "./pages/Contatti.jsx";
import Preventivo from "./pages/Preventivo.jsx";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinazioni" element={<Destinazioni />} />
        <Route path="/offerte" element={<Offerte />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/preventivo" element={<Preventivo />} />
      </Route>
    </Routes>
  );
}
