import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
const FeatureIconThreeSingle = ({
  data,
  spaceBottomClass,
  featureShapeClass
}) => {
  return (
      <div className={clsx("support-wrap-2 support-padding-2 text-center", featureShapeClass, spaceBottomClass)}>
         <Link to={data.link}>        
        <div className="support-content-2">
           <img
            className="animated"
            src={ data.image}
            alt=""
          />
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
        </Link>
      </div>
  );
};
FeatureIconThreeSingle.propTypes = {
  data: PropTypes.shape({}),
  featureShapeClass: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconThreeSingle;
