import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const BannerThirtySix = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceBottomClass)}>
      <div className="container padding-20-row-col">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={ "/shop"}>
                <img
                  src={
                     "/assets/img/banner/banner-56.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-6">
                <Link to={ "/shop"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-banner mb-20">
              <Link to={ "/shop"}>
                <img
                  src={
                     "/assets/img/banner/banner-57.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-7">
                <span>Black Friday</span>
                <h2>Big Sale</h2>
                <Link to={ "/shop"}>
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="single-banner mb-20">
              <Link to={ "/shop"}>
                <img
                  src={
                     "/assets/img/banner/banner-58.png"
                  }
                  alt=""
                />
              </Link>
              <div className="banner-content-8">
                <span>Black</span>
                <h2>Friday</h2>
                <p>sale up to 50%</p>
                <Link to={ "/shop"}>
                  <i className="fa fa-long-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerThirtySix.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerThirtySix;
