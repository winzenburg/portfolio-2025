import { useEffect } from "react";
import { Redirect } from "wouter";

/**
 * Legacy Brand Hub URL. Canonical identity page is /about.
 * Netlify also 301s /brand-hub → /about for crawlers.
 */
export default function BrandHub() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.replace("/about");
    }
  }, []);

  return <Redirect to="/about" />;
}
