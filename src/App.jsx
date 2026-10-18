import { BrowserRouter, Routes } from "react-router-dom";
import Homesecreen from "./screen/Home/home";
import { Route } from "react-router-dom";
import Navebar from "./components/nave/nav";
import Footer from "./section/fottersection/footer";
import About from "./screen/About/about";
import Services from "./screen/services/sercives";
import Contact from "./screen/contact/contact";
import Blog from "./screen/Blog/bolg";

function App() {
  return (
    <>
      <Navebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homesecreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
