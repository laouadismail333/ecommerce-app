import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Banner from "./component/Banner";
import Explore from "./component/Explore";
import Footer from "./component/Footer";
import Latest from "./component/Latest/Latest";
import Navbar from "./component/Navbar";
import SocialMedia from "./component/SocialMedia";
import Loading from "./component/Loading";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ExplorePage from "./pages/Explore";
import Men from "./component/Latest/Men";
import Women from "./component/Latest/Women";
import Kids from "./component/Latest/Kids";
import Features from "./pages/Features";
import NotFound from "./pages/NotFound";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Router>
      <Routes>
        {/* Pages with Navbar & Footer */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Banner />
              <Latest />
              <Explore />
              <SocialMedia />
              <Footer />
            </>
          }
        />
        <Route
          path="/men"
          element={
            <>
              <Navbar />
              <Men />
              <Footer />
            </>
          }
        />
        <Route
          path="/women"
          element={
            <>
              <Navbar />
              <Women />
              <Footer />
            </>
          }
        />
        <Route
          path="/kids"
          element={
            <>
              <Navbar />
              <Kids />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <Navbar />
              <Features />
              <Footer />
            </>
          }
        />
        <Route
          path="/explore"
          element={
            <>
              <Navbar />
              <ExplorePage />
              <Footer />
            </>
          }
        />

        {/* 404 Page WITHOUT Navbar & Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
