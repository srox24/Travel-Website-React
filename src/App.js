import Header from "./components/Header";
import Home from "./Route/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Route/About";
import Contact from "./Route/Contact";
import Services from "./Route/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
