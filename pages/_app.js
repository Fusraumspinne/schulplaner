import Layout from "@/komponenten/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/index.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}