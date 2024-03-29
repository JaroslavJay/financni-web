import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./pages/LayOut";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ErrorSite from "./pages/ErrorSite";
import DomůV2 from "./pages/DomůV2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<DomůV2 />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<ErrorSite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
