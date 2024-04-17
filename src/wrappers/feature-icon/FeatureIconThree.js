import PropTypes from "prop-types";
import clsx from "clsx";
import featureIconData from "../../data/feature-icons/feature-icon-three.json";
import FeatureIconThreeSingle from "../../components/feature-icon/FeatureIconThreeSingle.js";
import {Link} from "react-router-dom";

const FeatureIconThree = ({
  bgColorClass,
  spaceBottomClass,
}) => {
  return (
    <div
      className={clsx("support-area", bgColorClass, spaceBottomClass)}
    >
      <div className="container">
        <div className="row">
          {featureIconData?.map((single, key) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
               {/* <Link to={"/shop"}> */}
              <FeatureIconThreeSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
FeatureIconThree.propTypes = {
  bgColorClass: PropTypes.string,
  featureShapeClass: PropTypes.string,
  spaceBottomClass: PropTypes.string
};
export default FeatureIconThree;