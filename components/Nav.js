
import navStyles from '../styles/Nav.module.css';
import Drawer from "./Drawer";


const Nav = ({data})=>{

    return(
        <nav className={navStyles.nav}>
          <Drawer />
          <img src={data.image.url} className={navStyles.navLogo}  />
        </nav>
    )
}
export default Nav;
