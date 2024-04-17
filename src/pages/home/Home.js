import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";

const Home = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Cosmetics Home"
        description="Cosmetics home of fascinatingly Dark react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        <HeroSliderEight />
        <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        />
        </LayoutOne>
    </Fragment>
  );
};
export default Home;