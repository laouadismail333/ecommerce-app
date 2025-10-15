import Banner from "./component/Banner";
import Explore from "./component/Explore";
import Latest from "./component/Latest/Latest";
import Navbar from "./component/Navbar";
import SocialMedia from "./component/SocialMedia";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Latest />
      <Explore />
      <SocialMedia />
    </div>
  );
}
