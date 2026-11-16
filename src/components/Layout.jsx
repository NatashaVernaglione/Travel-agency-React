import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="contenitore">
        <Hero />
        {/* qui entrano <main> ed eventualmente <aside> della pagina */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
