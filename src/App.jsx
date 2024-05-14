import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import CallButton from "./components/CallButton";
import Whyus from "./components/whyus";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add a default route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Whyus />
        <Footer />
        <CallButton />
      </div>
    </Router>
  );
}

export default App;
