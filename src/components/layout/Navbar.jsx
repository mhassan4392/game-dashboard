import BrowserNavbar from "./browser";
import MobileNavbar from "./mobile";

const Navbar = () => {
  return (
    <div className="h-[6vh] lg:h-[11vh] mb-2">
      <BrowserNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
