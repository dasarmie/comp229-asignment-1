import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import "./App.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="gradient: linear-gradient: blue, vh-100">
      <BrowserRouter>
       <NavBar />
       <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
