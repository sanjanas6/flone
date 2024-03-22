import React from 'react'
var New  = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Brancy - Cosmetic &amp; Beauty Salon Website Template</title>
          <meta name="robots" content="noindex, follow" />
          <meta name="description" content="Brancy - Cosmetic & Beauty Salon Website Template" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="keywords" content="bootstrap, ecommerce, ecommerce html, beauty, cosmetic shop, beauty products, cosmetic, beauty shop, cosmetic store, shop, beauty store, spa, cosmetic, cosmetics, beauty salon" />
          <meta name="author" content="codecarnival" />
          {/* Favicon */}
          <link rel="shortcut icon" type="image/x-icon" href="./assets/images/favicon.webp" />
          {/* CSS (Font, Vendor, Icon, Plugins & Style CSS files) */}
          {/* Font CSS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          {/* Vendor CSS (Bootstrap & Icon Font) */}
          <link rel="stylesheet" href="./assets/css/vendor/bootstrap.min.css" />
          {/* Plugins CSS (All Plugins Files) */}
          <link rel="stylesheet" href="assets/css/plugins/swiper-bundle.min.css" />
          <link rel="stylesheet" href="assets/css/plugins/font-awesome.min.css" />
          <link rel="stylesheet" href="assets/css/plugins/fancybox.min.css" />
          <link rel="stylesheet" href="assets/css/plugins/nice-select.css" />
          {/* Style CSS */}
          <link rel="stylesheet" href="./assets/css/style.min.css" />
          {/*== Wrapper Start ==*/}
          <div className="wrapper">
            {/*== Start Header Wrapper ==*/}
            <header className="header-area sticky-header header-transparent">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-5 col-lg-2 col-xl-1">
                    <div className="header-logo">
                      <a href="index.html">
                        <img className="logo-main" src="assets/images/logo.webp" width={95} height={68} alt="Logo" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7 col-xl-7 d-none d-lg-block">
                    <div className="header-navigation ps-7">
                      <ul className="main-nav justify-content-start">
                        <li className="has-submenu"><a href="index.html">home</a>
                          <ul className="submenu-nav">
                            <li><a href="index.html">Home One</a></li>
                            <li><a href="index-two.html">Home Two</a></li>
                          </ul>
                        </li>
                        <li><a href="about-us.html">about</a></li>
                        <li className="has-submenu position-static"><a href="product.html">shop</a>
                          <ul className="submenu-nav-mega">
                            <li><a href="#/" className="mega-title">Shop Layout</a>
                              <ul>
                                <li><a href="product.html">Shop 3 Column</a></li>
                                <li><a href="product-four-columns.html">Shop 4 Column</a></li>
                                <li><a href="product-left-sidebar.html">Shop Left Sidebar</a></li>
                                <li><a href="product-right-sidebar.html">Shop Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a href="#/" className="mega-title">Single Product</a>
                              <ul>
                                <li><a href="product-details-normal.html">Single Product Normal</a></li>
                                <li><a href="product-details.html">Single Product Variable</a></li>
                                <li><a href="product-details-group.html">Single Product Group</a></li>
                                <li><a href="product-details-affiliate.html">Single Product Affiliate</a></li>
                              </ul>
                            </li>
                            <li><a href="#/" className="mega-title">Others Pages</a>
                              <ul>
                                <li><a href="product-cart.html">Shopping Cart</a></li>
                                <li><a href="product-checkout.html">Checkout</a></li>
                                <li><a href="product-wishlist.html">Wishlist</a></li>
                                <li><a href="product-compare.html">Compare</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-submenu"><a href="blog.html">Blog</a>
                          <ul className="submenu-nav">
                            <li className="has-submenu"><a href="#/">Blog Layout</a>
                              <ul className="submenu-nav">
                                <li><a href="blog.html">Blog Grid</a></li>
                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                              </ul>
                            </li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                          </ul>
                        </li>
                        <li className="has-submenu"><a href="account-login.html">Pages</a>
                          <ul className="submenu-nav">
                            <li><a href="account-login.html">My Account</a></li>
                            <li><a href="faq.html">Frequently Questions</a></li>
                            <li><a href="page-not-found.html">Page Not Found</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-7 col-lg-3 col-xl-4">
                    <div className="header-action justify-content-end">
                      <button className="header-action-btn ms-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasSearch" aria-controls="AsideOffcanvasSearch">
                        <span className="icon">
                          <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect className="icon-rect" width={30} height={30} fill="url(#pattern1)" />
                            <defs>
                              <pattern id="pattern1" patternContentUnits="objectBoundingBox" width={1} height={1}>
                                <use xlinkHref="#image0_504:11" transform="scale(0.0333333)" />
                              </pattern>
                              <image id="image0_504:11" width={30} height={30} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIie2Wu04CQRSGP0G2EUtIbHwA8B3EQisLIcorEInx8hbEZ9DKy6toDI1oAgalNFpDoYWuxZzJjoTbmSXERP7kZDbZ859vdmb27MJcf0gBUAaugRbQk2gBV3IvmDa0BLwA4Zh4BorTACaAU6fwPXAI5IAliTxwBDScvJp4vWWhH0BlTLEEsC+5Fu6lkgNdV/gKDnxHCw2I9rSiNQNV8baBlMZYJtpTn71KAg9SY3dUYn9xezLPgG8P8BdwLteq5X7CzDbnAbXKS42WxtQVUzoGeFlqdEclxXrnhmhhkqR+8KuMqzHA1vumAddl3IwB3pLxVmOyr1NjwKQmURJ4lBp7GmOAafghpg1qdSDeDrCoNReJWmZB4dsAPsW7rYVa1Rx4FbOEw5TEPKmFvgMZX3DCgYeYNniMaQ5piTXghGhPLdTmZ33hYNpem98f/UHRwSxvhqhXx4anMA3/EmhiOlJPJnSBOb3uQcpOE65VhujPpAms/Bu4u+x3swRbeB24mTV4LgB+AFuLedkPkcmmAAAAAElFTkSuQmCC" />
                            </defs>
                          </svg>
                        </span>
                      </button>
                      <button className="header-action-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasCart" aria-controls="AsideOffcanvasCart">
                        <span className="icon">
                          <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect className="icon-rect" width={30} height={30} fill="url(#pattern2)" />
                            <defs>
                              <pattern id="pattern2" patternContentUnits="objectBoundingBox" width={1} height={1}>
                                <use xlinkHref="#image0_504:9" transform="scale(0.0333333)" />
                              </pattern>
                              <image id="image0_504:9" width={30} height={30} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABFUlEQVRIie2VMU7DMBSGvwAqawaYuAmKxCW4A1I5Qg4AA93KBbp1ZUVUlQJSVVbCDVhgzcTQdLEVx7WDQ2xLRfzSvzzb+d6zn2MYrkugBBYevuWsHKiFn2JBMwH8Bq6Aw1jgBwHOYwGlPgT4LDZ4I8BJDNiEppl034UEJ8DMAJ0DByHBACPgUYEugePQUKkUWAmnsaB/Ry/YO9aXCwlT72AdrqaWEohwBWxSwc8ReIVtYIr5bM5pXqO+Men7rozGlkVSv4lJj1WQfsbvXVkNVNk1eEK4ik9/yuwzAPhLh5iuU4jtftMDR4ZJJXChxTJ2H3zXGDgWc43/X2Wro8G81a8u2fXU2nXiLVAxvNIKuPGW/r/2SltF+a3Rkw4pmwAAAABJRU5ErkJggg==" />
                            </defs>
                          </svg>
                        </span>
                      </button>
                      <a className="header-action-btn" href="account-login.html">
                        <span className="icon">
                          <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect className="icon-rect" width={30} height={30} fill="url(#pattern3)" />
                            <defs>
                              <pattern id="pattern3" patternContentUnits="objectBoundingBox" width={1} height={1}>
                                <use xlinkHref="#image0_504:10" transform="scale(0.0333333)" />
                              </pattern>
                              <image id="image0_504:10" width={30} height={30} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABEUlEQVRIie3UMUoDYRDF8Z8psqUpLBRrBS+gx7ATD6E5iSjeQQ/gJUzEwmChnZZaKZiQ0ljsLkhQM5/5Agr74DX7DfOfgZ1Hoz+qAl30Marcx2H1thCtY4DJN76parKqmAH9DM+6eTcArX2QE3yVAO7lBA8TwMNIw6UgeJI46My+rWCjUQL0LVIUBd8lgEO1UfBZAvg8oXamCuWNRu64nRNMmUo/wReSXLXayoDoKc9miMvqW/ZNG2VRNLla2MYudrCFTvX2intlnl/gGu/zDraGYzyLZ/UTjrD6G2AHpxgnAKc9xgmWo9BNPM4BnPYDNiLg24zQ2oNpyFdZvRKZLlGhnvvKPzXXti/Yy7hEo3+iD9EHtgdqxQnwAAAAAElFTkSuQmCC" />
                            </defs>
                          </svg>
                        </span>
                      </a>
                      <button className="header-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#AsideOffcanvasMenu" aria-controls="AsideOffcanvasMenu">
                        <span />
                        <span />
                        <span />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/*== End Header Wrapper ==*/}
            <main className="main-content">
              {/*== Start Hero Area Wrapper ==*/}
              <section className="hero-slider-area position-relative">
                <div className="swiper hero-slider-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide hero-slide-item">
                      <div className="container">
                        <div className="row align-items-center position-relative">
                          <div className="col-12 col-md-6">
                            <div className="hero-slide-content">
                              <div className="hero-slide-text-img"><img src="assets/images/slider/text-theme.webp" width={427} height={232} alt="Image" /></div>
                              <h2 className="hero-slide-title">CLEAN FRESH</h2>
                              <p className="hero-slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                              <a className="btn btn-border-dark" href="product.html">BUY NOW</a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="hero-slide-thumb">
                              <img src="assets/images/slider/slider1.webp" width={841} height={832} alt="Image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hero-slide-text-shape"><img src="assets/images/slider/text1.webp" width={70} height={955} alt="Image" /></div>
                      <div className="hero-slide-social-shape" />
                    </div>
                    <div className="swiper-slide hero-slide-item">
                      <div className="container">
                        <div className="row align-items-center position-relative">
                          <div className="col-12 col-md-6">
                            <div className="hero-slide-content">
                              <div className="hero-slide-text-img"><img src="assets/images/slider/text-theme.webp" width={427} height={232} alt="Image" /></div>
                              <h2 className="hero-slide-title">Facial Cream</h2>
                              <p className="hero-slide-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                              <a className="btn btn-border-dark" href="product.html">BUY NOW</a>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div className="hero-slide-thumb">
                              <img src="assets/images/slider/slider2.webp" width={841} height={832} alt="Image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hero-slide-text-shape"><img src="assets/images/slider/text1.webp" width={70} height={955} alt="Image" /></div>
                      <div className="hero-slide-social-shape" />
                    </div>
                  </div>
                  {/*== Add Pagination ==*/}
                  <div className="hero-slider-pagination" />
                </div>
                <div className="hero-slide-social-media">
                  <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="fa fa-pinterest-p" /></a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter" /></a>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook" /></a>
                </div>
              </section>
              {/*== End Hero Area Wrapper ==*/}
              {/*== Start Product Category Area Wrapper ==*/}
              <section className="section-space pb-0">
                <div className="container">
                  <div className="row g-3 g-sm-6">
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-category-item">
                        <img className="icon" src="assets/images/shop/category/1.webp" width={70} height={80} alt="Image-HasTech" />
                        <h3 className="title">Hare care</h3>
                        <span className="flag-new">new</span>
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-category-item" data-bg-color="#FFEDB4">
                        <img className="icon" src="assets/images/shop/category/2.webp" width={80} height={80} alt="Image-HasTech" />
                        <h3 className="title">Skin care</h3>
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-lg-0 mt-sm-6 mt-4">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-category-item" data-bg-color="#DFE4FF">
                        <img className="icon" src="assets/images/shop/category/3.webp" width={80} height={80} alt="Image-HasTech" />
                        <h3 className="title">Lip stick</h3>
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-category-item" data-bg-color="#FFEACC">
                        <img className="icon" src="assets/images/shop/category/4.webp" width={80} height={80} alt="Image-HasTech" />
                        <h3 className="title">Face skin</h3>
                        <span data-bg-color="#835BF4" className="flag-new">sale</span>
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-category-item" data-bg-color="#FFDAE0">
                        <img className="icon" src="assets/images/shop/category/5.webp" width={80} height={80} alt="Image-HasTech" />
                        <h3 className="title">Blusher</h3>
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 col-lg-2 col-xl-2 mt-xl-0 mt-sm-6 mt-4">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-category-item" data-bg-color="#FFF3DA">
                        <img className="icon" src="assets/images/shop/category/6.webp" width={80} height={80} alt="Image-HasTech" />
                        <h3 className="title">Natural</h3>
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                  </div>
                </div>
              </section>
              {/*== End Product Category Area Wrapper ==*/}
              {/*== Start Product Area Wrapper ==*/}
              <section className="section-space">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title text-center">
                        <h2 className="title">Top sale</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/1.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Readable content DX22</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/2.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Modern Eye Brush</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/3.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Voyage face cleaner</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/4.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Impulse Duffle</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/5.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Sprite Yoga Straps1</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-9">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/6.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Fusion facial cream</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                  </div>
                </div>
              </section>
              {/*== End Product Area Wrapper ==*/}
              {/*== Start Product Banner Area Wrapper ==*/}
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-banner-item">
                        <img src="assets/images/shop/banner/1.webp" width={370} height={370} alt="Image-HasTech" />
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                    <div className="col-sm-6 col-lg-4 mt-sm-0 mt-6">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-banner-item">
                        <img src="assets/images/shop/banner/2.webp" width={370} height={370} alt="Image-HasTech" />
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                    <div className="col-sm-6 col-lg-4 mt-lg-0 mt-6">
                      {/*== Start Product Category Item ==*/}
                      <a href="product.html" className="product-banner-item">
                        <img src="assets/images/shop/banner/3.webp" width={370} height={370} alt="Image-HasTech" />
                      </a>
                      {/*== End Product Category Item ==*/}
                    </div>
                  </div>
                </div>
              </section>
              {/*== End Product Banner Area Wrapper ==*/}
              {/*== Start Product Area Wrapper ==*/}
              <section className="section-space pb-0">
                <div className="container">
                  <div className="row mb-n4 mb-sm-n10 g-3 g-sm-6">
                    <div className="col-6 col-lg-4 mb-4 mb-sm-8">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/4.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Readable content DX22</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-8">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/5.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Voyage face cleaner</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                    <div className="col-6 col-lg-4 mb-4 mb-sm-8">
                      {/*== Start Product Item ==*/}
                      <div className="product-item">
                        <div className="product-thumb">
                          <a className="d-block" href="product-details.html">
                            <img src="assets/images/shop/6.webp" width={370} height={450} alt="Image-HasTech" />
                          </a>
                          <span className="flag-new">new</span>
                          <div className="product-action">
                            <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                              <i className="fa fa-expand" />
                            </button>
                            <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                              <span>Add to cart</span>
                            </button>
                            <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                              <i className="fa fa-heart-o" />
                            </button>
                          </div>
                        </div>
                        <div className="product-info">
                          <div className="product-rating">
                            <div className="rating">
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-o" />
                              <i className="fa fa-star-half-o" />
                            </div>
                            <div className="reviews">150 reviews</div>
                          </div>
                          <h4 className="title"><a href="product-details.html">Impulse Duffle</a></h4>
                          <div className="prices">
                            <span className="price">$210.00</span>
                            <span className="price-old">300.00</span>
                          </div>
                        </div>
                        <div className="product-action-bottom">
                          <button type="button" className="product-action-btn action-btn-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                            <i className="fa fa-expand" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                            <i className="fa fa-heart-o" />
                          </button>
                          <button type="button" className="product-action-btn action-btn-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                      {/*== End prPduct Item ==*/}
                    </div>
                  </div>
                </div>
              </section>
              {/*== End Product Area Wrapper ==*/}
              {/*== Start Blog Area Wrapper ==*/}
              <section className="section-space">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title text-center">
                        <h2 className="title">Blog posts</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-n9">
                    <div className="col-sm-6 col-lg-4 mb-8">
                      {/*== Start Blog Item ==*/}
                      <div className="post-item">
                        <a href="blog-details.html" className="thumb">
                          <img src="assets/images/blog/1.webp" width={370} height={320} alt="Image-HasTech" />
                        </a>
                        <div className="content">
                          <a className="post-category" href="blog.html">beauty</a>
                          <h4 className="title"><a href="blog-details.html">Lorem ipsum dolor sit amet consectetur adipiscing.</a></h4>
                          <ul className="meta">
                            <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                            <li className="post-date">February 13, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/*== End Blog Item ==*/}
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-8">
                      {/*== Start Blog Item ==*/}
                      <div className="post-item">
                        <a href="blog-details.html" className="thumb">
                          <img src="assets/images/blog/2.webp" width={370} height={320} alt="Image-HasTech" />
                        </a>
                        <div className="content">
                          <a className="post-category post-category-two" data-bg-color="#A49CFF" href="blog.html">beauty</a>
                          <h4 className="title"><a href="blog-details.html">Facial Scrub is natural treatment for face.</a></h4>
                          <ul className="meta">
                            <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                            <li className="post-date">February 13, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/*== End Blog Item ==*/}
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-8">
                      {/*== Start Blog Item ==*/}
                      <div className="post-item">
                        <a href="blog-details.html" className="thumb">
                          <img src="assets/images/blog/3.webp" width={370} height={320} alt="Image-HasTech" />
                        </a>
                        <div className="content">
                          <a className="post-category post-category-three" data-bg-color="#9CDBFF" href="blog.html">beauty</a>
                          <h4 className="title"><a href="blog-details.html">Benefit of Hot Ston Spa for your health &amp; life.</a></h4>
                          <ul className="meta">
                            <li className="author-info"><span>By:</span> <a href="blog.html">Tomas De Momen</a></li>
                            <li className="post-date">February 13, 2022</li>
                          </ul>
                        </div>
                      </div>
                      {/*== End Blog Item ==*/}
                    </div>
                  </div>
                </div>
              </section>
              {/*== End Blog Area Wrapper ==*/}
              {/*== Start News Letter Area Wrapper ==*/}
              <section className="section-space pt-0">
                <div className="container">
                  <div className="newsletter-content-wrap" data-bg-img="assets/images/photos/bg1.webp">
                    <div className="newsletter-content">
                      <div className="section-title mb-0">
                        <h2 className="title">Join with us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                      </div>
                    </div>
                    <div className="newsletter-form">
                      <form>
                        <input type="email" className="form-control" placeholder="enter your email" />
                        <button className="btn-submit" type="submit"><i className="fa fa-paper-plane" /></button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              {/*== End News Letter Area Wrapper ==*/}
            </main>
            {/*== Start Footer Area Wrapper ==*/}
            <footer className="footer-area">
              {/*== Start Footer Main ==*/}
              <div className="footer-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <div className="widget-item">
                        <div className="widget-about">
                          <a className="widget-logo" href="index.html">
                            <img src="assets/images/logo.webp" width={95} height={68} alt="Logo" />
                          </a>
                          <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-5 mt-md-0 mt-9">
                      <div className="widget-item">
                        <h4 className="widget-title">Information</h4>
                        <ul className="widget-nav">
                          <li><a href="blog.html">Blog</a></li>
                          <li><a href="about-us.html">About us</a></li>
                          <li><a href="contact.html">Contact</a></li>
                          <li><a href="faq.html">Privacy</a></li>
                          <li><a href="account-login.html">Login</a></li>
                          <li><a href="product.html">Shop</a></li>
                          <li><a href="my-account.html">My Account</a></li>
                          <li><a href="faq.html">FAQs</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mt-lg-0 mt-6">
                      <div className="widget-item">
                        <h4 className="widget-title">Social Info</h4>
                        <div className="widget-social">
                          <a href="https://twitter.com/" target="_blank" rel="noopener"><i className="fa fa-twitter" /></a>
                          <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i className="fa fa-facebook" /></a>
                          <a href="https://www.pinterest.com/" target="_blank" rel="noopener"><i className="fa fa-pinterest-p" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*== End Footer Main ==*/}
              {/*== Start Footer Bottom ==*/}
              <div className="footer-bottom">
                <div className="container pt-0 pb-0">
                  <div className="footer-bottom-content">
                    <p className="copyright">© 2022 Brancy. Made with <i className="fa fa-heart" /> by <a target="_blank" href="https://themeforest.net/user/codecarnival">Codecarnival.</a></p>
                  </div>
                </div>
              </div>
              {/*== End Footer Bottom ==*/}
            </footer>
            {/*== End Footer Area Wrapper ==*/}
            {/*== Scroll Top Button ==*/}
            <div id="scroll-to-top" className="scroll-to-top"><span className="fa fa-angle-up" /></div>
            {/*== Start Product Quick Wishlist Modal ==*/}
            <aside className="product-action-modal modal fade" id="action-WishlistModal" tabIndex={-1} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="product-action-view-content">
                      <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa fa-times" />
                      </button>
                      <div className="modal-action-messages">
                        <i className="fa fa-check-square-o" /> Added to wishlist successfully!
                      </div>
                      <div className="modal-action-product">
                        <div className="thumb">
                          <img src="assets/images/shop/modal1.webp" alt="Organic Food Juice" width={466} height={320} />
                        </div>
                        <h4 className="product-name"><a href="product-details.html">Readable content DX22</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/*== End Product Quick Wishlist Modal ==*/}
            {/*== Start Product Quick Add Cart Modal ==*/}
            <aside className="product-action-modal modal fade" id="action-CartAddModal" tabIndex={-1} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="product-action-view-content">
                      <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="fa fa-times" />
                      </button>
                      <div className="modal-action-messages">
                        <i className="fa fa-check-square-o" /> Added to cart successfully!
                      </div>
                      <div className="modal-action-product">
                        <div className="thumb">
                          <img src="assets/images/shop/modal1.webp" alt="Organic Food Juice" width={466} height={320} />
                        </div>
                        <h4 className="product-name"><a href="product-details.html">Readable content DX22</a></h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/*== End Product Quick Add Cart Modal ==*/}
            {/*== Start Aside Search Form ==*/}
            <aside className="aside-search-box-wrapper offcanvas offcanvas-top" tabIndex={-1} id="AsideOffcanvasSearch" aria-labelledby="offcanvasTopLabel">
              <div className="offcanvas-header">
                <h5 className="d-none" id="offcanvasTopLabel">Aside Search</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fa fa-close" /></button>
              </div>
              <div className="offcanvas-body">
                <div className="container pt--0 pb--0">
                  <div className="search-box-form-wrap">
                    <div className="search-note">
                      <p>Start typing and press Enter to search</p>
                    </div>
                    <form action="#" method="post">
                      <div className="aside-search-form position-relative">
                        <label htmlFor="SearchInput" className="visually-hidden">Search</label>
                        <input id="SearchInput" type="search" className="form-control" placeholder="Search entire store…" />
                        <button className="search-button" type="submit"><i className="fa fa-search" /></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </aside>
            {/*== End Aside Search Form ==*/}
            {/*== Start Product Quick View Modal ==*/}
            <aside className="product-cart-view-modal modal fade" id="action-QuickViewModal" tabIndex={-1} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="product-quick-view-content">
                      <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <span className="fa fa-close" />
                      </button>
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6">
                            {/*== Start Product Thumbnail Area ==*/}
                            <div className="product-single-thumb">
                              <img src="assets/images/shop/quick-view1.webp" width={544} height={560} alt="Image-HasTech" />
                            </div>
                            {/*== End Product Thumbnail Area ==*/}
                          </div>
                          <div className="col-lg-6">
                            {/*== Start Product Info Area ==*/}
                            <div className="product-details-content">
                              <h5 className="product-details-collection">Premioum collection</h5>
                              <h3 className="product-details-title">Offbline Instant Age Rewind Eraser.</h3>
                              <div className="product-details-review mb-5">
                                <div className="product-review-icon">
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-o" />
                                  <i className="fa fa-star-half-o" />
                                </div>
                                <button type="button" className="product-review-show">150 reviews</button>
                              </div>
                              <p className="mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, repellendus. Nam voluptate illo ut quia non sapiente provident alias quos laborum incidunt, earum accusamus, natus. Vero pariatur ut veniam sequi amet consectetur.</p>
                              <div className="product-details-pro-qty">
                                <div className="pro-qty">
                                  {/* <input type="text" title="Quantity" defaultValue={01} /> */}
                                </div>
                              </div>
                              <div className="product-details-action">
                                <h4 className="price">$254.22</h4>
                                <div className="product-details-cart-wishlist">
                                  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">Add to cart</button>
                                </div>
                              </div>
                            </div>
                            {/*== End Product Info Area ==*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            {/*== End Product Quick View Modal ==*/}
            {/*== Start Aside Cart ==*/}
            <aside className="aside-cart-wrapper offcanvas offcanvas-end" tabIndex={-1} id="AsideOffcanvasCart" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h1 className="d-none" id="offcanvasRightLabel">Shopping Cart</h1>
                <button className="btn-aside-cart-close" data-bs-dismiss="offcanvas" aria-label="Close">Shopping Cart <i className="fa fa-chevron-right" /></button>
              </div>
              <div className="offcanvas-body">
                <ul className="aside-cart-product-list">
                  <li className="aside-product-list-item">
                    <a href="#/" className="remove">×</a>
                    <a href="product-details.html">
                      <img src="assets/images/shop/cart1.webp" width={68} height={84} alt="Image" />
                      <span className="product-title">Leather Mens Slipper</span>
                    </a>
                    <span className="product-price">1 × £69.99</span>
                  </li>
                  <li className="aside-product-list-item">
                    <a href="#/" className="remove">×</a>
                    <a href="product-details.html">
                      <img src="assets/images/shop/cart2.webp" width={68} height={84} alt="Image" />
                      <span className="product-title">Quickiin Mens shoes</span>
                    </a>
                    <span className="product-price">1 × £20.00</span>
                  </li>
                </ul>
                <p className="cart-total"><span>Subtotal:</span><span className="amount">£89.99</span></p>
                <a className="btn-total" href="product-cart.html">View cart</a>
                <a className="btn-total" href="product-checkout.html">Checkout</a>
              </div>
            </aside>
            {/*== End Aside Cart ==*/}
            {/*== Start Aside Menu ==*/}
            <aside className="off-canvas-wrapper offcanvas offcanvas-start" tabIndex={-1} id="AsideOffcanvasMenu" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h1 className="d-none" id="offcanvasExampleLabel">Aside Menu</h1>
                <button className="btn-menu-close" data-bs-dismiss="offcanvas" aria-label="Close">menu <i className="fa fa-chevron-left" /></button>
              </div>
              <div className="offcanvas-body">
                <div id="offcanvasNav" className="offcanvas-menu-nav">
                  <ul>
                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">home</a>
                      <ul>
                        <li><a href="index.html">Home One</a></li>
                        <li><a href="index-two.html">Home Two</a></li>
                      </ul>
                    </li>
                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="about-us.html">about</a></li>
                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">shop</a>
                      <ul>
                        <li><a href="#" className="offcanvas-nav-item">Shop Layout</a>
                          <ul>
                            <li><a href="product.html">Shop 3 Column</a></li>
                            <li><a href="product-four-columns.html">Shop 4 Column</a></li>
                            <li><a href="product-left-sidebar.html">Shop Left Sidebar</a></li>
                            <li><a href="product-right-sidebar.html">Shop Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li><a href="#" className="offcanvas-nav-item">Single Product</a>
                          <ul>
                            <li><a href="product-details-normal.html">Single Product Normal</a></li>
                            <li><a href="product-details.html">Single Product Variable</a></li>
                            <li><a href="product-details-group.html">Single Product Group</a></li>
                            <li><a href="product-details-affiliate.html">Single Product Affiliate</a></li>
                          </ul>
                        </li>
                        <li><a href="#" className="offcanvas-nav-item">Others Pages</a>
                          <ul>
                            <li><a href="product-cart.html">Shopping Cart</a></li>
                            <li><a href="product-checkout.html">Checkout</a></li>
                            <li><a href="product-wishlist.html">Wishlist</a></li>
                            <li><a href="product-compare.html">Compare</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">Blog</a>
                      <ul>
                        <li><a className="offcanvas-nav-item" href="#">Blog Layout</a>
                          <ul>
                            <li><a href="blog.html">Blog Grid</a></li>
                            <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="#">Pages</a>
                      <ul>
                        <li><a href="account-login.html">My Account</a></li>
                        <li><a href="faq.html">Frequently Questions</a></li>
                        <li><a href="page-not-found.html">Page Not Found</a></li>
                      </ul>
                    </li>
                    <li className="offcanvas-nav-parent"><a className="offcanvas-nav-item" href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </aside>
            {/*== End Aside Menu ==*/}
          </div>
          {/*== Wrapper End ==*/}
          {/* JS Vendor, Plugins & Activation Script Files */}
          {/* Vendors JS */}
          {/* Plugins JS */}
          {/* Custom Main JS */}
        </div>
      );
    }
  });

  export default New

