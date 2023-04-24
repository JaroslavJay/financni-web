import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./pages/LayOut";
import Domů from "./pages/Domů";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ErrorSite from "./pages/ErrorSite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Domů />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<ErrorSite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
