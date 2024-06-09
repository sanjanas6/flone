import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Fascinatingly Dark</h1>
          <p>
            Fascinatingly dark was founded with the intent to create beauty solutions that are safe, honest and effective.

            We pair the best aspects of ancient methodology with learning from contemporary knowledge, to offer beauty solutions that work on multiple levels.
            All products are organic,chemical free and vegan(add signs).
            <br />
            <strong> A Humbel Start - </strong>My aunt was diagnosed with severe eye infection because of Kajal of a well known brand and this motivated us to make kajal with ayurvedic method.
            Then we diversified and added lipcare ranges too and still we are working to introduce new products.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
