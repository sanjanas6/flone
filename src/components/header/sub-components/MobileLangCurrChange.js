import { useSelector, useDispatch } from "react-redux";

const MobileLangCurrChange = () => {
  const dispatch = useDispatch();

  return (
    <div className="mobile-menu-middle">
      <div className="lang-curr-style">
        <span className="title mb-2">Choose Language </span>
       </div>
      <div className="lang-curr-style">
        <span className="title mb-2">Choose Currency</span>
      </div>
    </div>
  );
};

export default MobileLangCurrChange;
