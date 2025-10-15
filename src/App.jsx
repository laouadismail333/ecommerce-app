import Banner from "./component/Banner";
import Explore from "./component/Explore";
import Latest from "./component/Latest/Latest";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Latest />
      <Explore />
    </div>
  );
}
