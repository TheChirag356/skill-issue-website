import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";
import LocomotiveScroll from "locomotive-scroll";

function AppLayout() {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#191919]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
