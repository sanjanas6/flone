import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
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
          {/* <Nav
            variant="pills"
            className={clsx("product-tab-list-2 mb-60", productTabClass)}
          >
            <Nav.Item>
              <Nav.Link eventKey="bestSeller">
                <h4>Best Sellers</h4>
              </Nav.Link>
            </Nav.Item>
          </Nav> */}

          <div class="section-space pb-0" >               
             <  div class="row g-3 g-sm-6">
              <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                   
                      <Link to={"/shop-grid-standard"} className="product-category-item" data-bg-color="#FFEDB4">
                        <img className="icon" src="assets/img/icon-img/2.webp" width={80} height={80} alt="" />
                        <h3 className="title">Lip Balm</h3>
                      </Link>
                    
                   
                   
                      <Link to={"/shop-grid-standard"} className="product-category-item" data-bg-color="#DFE4FF">
                        <img className="icon" src="assets/img/icon-img/3.webp" width={80} height={80} alt="" />
                        <h3 className="title">Tint</h3>
                      </Link>
                      
                   
                      <Link to={"/shop-grid-standard"} className="product-category-item" data-bg-color="#FFEACC">
                        <img className="icon" src="assets/img/icon-img/5.webp" width={80} height={80} alt="" />
                        <h3 className="title">Hot Hue</h3>
                      </Link>
                    
                  
                   
                      <Link to={"/shop-grid-standard"} className="product-category-item" data-bg-color="#FFF3DA">
                        <img className="icon" src="assets/img/icon-img/6.webp" width={80} height={80} alt="" />
                        <h3 className="title">Lip Gloss</h3>
                      </Link>                                                  
                    </div>
                    </div>
                    </div>
                  


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
