import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A ogni cambio pagina riporta lo scroll in alto
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
