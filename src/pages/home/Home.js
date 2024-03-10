import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerNine from "../../wrappers/banner/BannerEleven";
import TabProductFive from "../../wrappers/product/TabProductFive";

const Home = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Cosmetics Home"
        description="Cosmetics home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderEight />
        {/* tab product */}
        <TabProductFive
          spaceTopClass="pt-95"
          spaceBottomClass="pb-70"
          category="cosmetics"
        />
        {/* feature icon */}
        <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        />
        {/* testimonial */}
        <TestimonialOne spaceBottomClass="pb-95" />
        {/* banner */}
        <BannerNine spaceBottomClass="pb-70" />
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" />
        </LayoutOne>
    </Fragment>
  );
};

export default Home;
