import { Fragment } from "react"; 
import { useLocation } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of Fascinatingly Dark react minimalist eCommerce template."
      /> 
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        {/* <Breadcrumb 
          pages={[
            {label: "Home", path:  "/" },
            {label: "About us", path:  pathname }
          ]} 
        /> */}

        {/* section title with text */}
        <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" />

        {/* banner */}
        {/* <BannerOne spaceBottomClass="pb-70" /> */}

        {/* text grid */}
        <TextGridOne spaceBottomClass="pb-70" />

        {/* team member */}
        {/* <TeamMemberOne spaceTopClass="pt-95" spaceBottomClass="pb-70" /> */}

        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-70" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default About;
