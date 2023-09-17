import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default LayOut;
