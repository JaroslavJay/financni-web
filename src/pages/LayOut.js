import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterBar />
    </div>
  );
};

export default LayOut;
