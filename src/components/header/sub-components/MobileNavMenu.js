import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={ "/"}>{t("home")}</Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={ "/shop"}>
            {t("shop")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={ "/"}>{t("pages")}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={ "/cart"}>
                {t("cart")}
              </Link>
            </li>
            <li>
              <Link to={ "/checkout"}>
                {t("checkout")}
              </Link>
            </li>
            <li>
              <Link to={ "/wishlist"}>
                {t("wishlist")}
              </Link>
            </li>
            <li>
              <Link to={ "/my-account"}>
                {t("my_account")}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={ "/contact"}>
            {t("contact_us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
