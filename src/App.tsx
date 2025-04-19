import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetail from "./components/projectDetail/ProjectDetail";
import About from "./pages/about/About";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:slug" element={<ProjectDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default App;
