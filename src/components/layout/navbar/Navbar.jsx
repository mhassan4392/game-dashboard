import BrowserNavbar from "./BrowserNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div className="shrink-0">
      <BrowserNavbar />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
