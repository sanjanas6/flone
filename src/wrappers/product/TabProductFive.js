import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGridTwo from "./ProductGridTwo";

const TabProductFive = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass
}) => {
  return (
    <div className={clsx("product-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
          <Nav
            variant="pills"
            className={clsx("product-tab-list-2 mb-60", productTabClass)}
          >
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav>
              <div className="row">
                <ProductGridTwo
                  category={category}
                  type="bestSeller"
                  limit={4}
                  spaceBottomClass="mb-25"
                />
              </div>
            <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={"/shop-grid-standard"}
          >
            VIEW MORE PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
};

TabProductFive.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductFive;
