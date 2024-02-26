import navStyles from "../styles/Nav.module.css";
import Drawer from "./Drawer";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Drawer />
      <img
        src={"/images/SJ_Small_new.png"}
        className={navStyles.navLogo}
      />
    </nav>
  );
};
export default Nav;
