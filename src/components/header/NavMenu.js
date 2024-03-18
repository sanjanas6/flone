import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/home"}>
              {t("Home")}
            </Link>
            </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              {" "}
              {t("Shop")}
              </Link>
           </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("Pages")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/cart"}>
                  {t("Cart")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/checkout"}>
                  {t("Checkout")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/wishlist"}>
                  {t("wishlist")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/not-found"}>
                  {t("404_page")}
                </Link>
              </li>
            </ul>
          </li> 
          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>
              {t("About-us")}
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>
              {t("Contact-us")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
