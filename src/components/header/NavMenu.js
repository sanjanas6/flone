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
            <Link to={ "/home"}>
              {t("Home")}
            </Link>
            </li>

          <li>
            <Link to={ "/shop"}>
              {" "}
              {t("Shop")}
              </Link>
           </li>
          {/* <li>
            <Link to={ "/"}>
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
                <Link to={ "/cart"}>
                  {t("Cart")}
                </Link>
              </li>
              <li>
                <Link to={ "/checkout"}>
                  {t("Checkout")}
                </Link>
              </li>
             </ul>
          </li>  */}
          <li>
            <Link to={ "/about"}>
              {t("About-us")}
            </Link>
          </li>
          <li>
            <Link to={ "/contact"}>
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
