import { Route, Routes } from "react-router-dom";
import AboutUs from "./Page/AboutUs";
import ContactUs from "./Page/ContactUs";
import Home from "./Page/Home";
import Project from "./Page/Project";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
