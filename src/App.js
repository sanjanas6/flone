import { Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/Home"));
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
const Product = lazy(() => import("./pages/shop-product/Product"));
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);
const ProductTabRight = lazy(() =>
  import("./pages/shop-product/ProductTabRight")
);
const ProductSticky = lazy(() => import("./pages/shop-product/ProductSticky"));
const ProductSlider = lazy(() => import("./pages/shop-product/ProductSlider"));
const ProductFixedImage = lazy(() =>
  import("./pages/shop-product/ProductFixedImage")
);
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const Login = lazy(() => import("./pages/other/Login"));
const Register = lazy(() => import("./pages/other/Register"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = () => {
 
  return (
      <Router>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="Fascinatingly Dark-preloader-wrapper">
                <div className="Fascinatingly Dark-preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path={ "/"}
                element={<Home/>}
              />
              <Route
                path={"/home"}
                element={<Home/>}
              />
              <Route
                path={ "/shop"}
                element={<ShopGridStandard/>}
              />
             <Route
                path={ "/product/:id"}
                element={<Product />}
              />
              <Route
                path={ "/product-tab-left/:id"}
                element={<ProductTabLeft/>}
              />
              <Route
                path={ "/product-tab-right/:id"}
                element={<ProductTabRight/>}
              />
              <Route
                path={ "/product-sticky/:id"}
                element={<ProductSticky/>}
              />
              <Route
                path={ "/product-slider/:id"}
                element={<ProductSlider/>}
              />
              <Route
                path={ "/product-fixed-image/:id"}
                element={<ProductFixedImage/>}
              /> 
              <Route
                path={ "/about"}
                element={<About/>}
              />
              <Route
                path={ "/contact"}
                element={<Contact/>}
              />
              <Route
                path={ "/my-account"}
                element={<MyAccount/>}
              />
              <Route
                path={ "/login"}
                element={<Login/>}
              />
              <Route
                path={ "/register"}
                element={<Register/>}
              />
              <Route
                path={ "/cart"}
                element={<Cart/>}
              />
              <Route
                path={ "/wishlist"}
                element={<Wishlist/>}
              />
              <Route
                path={ "/checkout"}
                element={<Checkout/>}
              /> 
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </Router>
  );
};

export default App;