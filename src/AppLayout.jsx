import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";
import LocomotiveScroll from "locomotive-scroll";

function AppLayout() {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#2a323f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
