
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileApplyButton from "./MobileApplyButton";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MobileApplyButton />
      <Toaster />
    </div>
  );
};

export default Layout;
