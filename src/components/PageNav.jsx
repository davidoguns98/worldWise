import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { nav } from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={StyleSheet.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default PageNav;
