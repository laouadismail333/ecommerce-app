import { useState, useEffect } from "react";
import Banner from "./component/Banner";
import Explore from "./component/Explore";
import Footer from "./component/Footer";
import Latest from "./component/Latest/Latest";
import Navbar from "./component/Navbar";
import SocialMedia from "./component/SocialMedia";
import Loading from "./component/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3s loading duration
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Navbar />
      <Banner />
      <Latest />
      <Explore />
      <SocialMedia />
      <Footer />
    </div>
  );
}
