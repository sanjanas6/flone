"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[506],{425:function(e,s,a){var i=a(9379),t=a(5544),c=a(5043),n=a(8906),l=a(3310),r=a(9456),o=a(5913),d=a(7362),m=a(2821),u=a(5721),p=a(4990),h=a(3492),x=a(579);s.A=function(e){var s=e.product,a=(e.currency,e.discountedPrice),j=e.finalProductPrice,g=e.finalDiscountedPrice,v=e.show,f=e.onHide,N=e.wishlistItem,b=e.compareItem,w=(0,c.useState)(null),C=(0,t.A)(w,2),y=C[0],A=C[1],k=(0,r.wA)(),S=(0,r.d4)((function(e){return e.cart})).cartItems,P=(0,c.useState)(s.variation?s.variation[0].color:""),F=(0,t.A)(P,2),I=F[0],B=F[1],_=(0,c.useState)(s.variation?s.variation[0].size[0].name:""),q=(0,t.A)(_,2),z=q[0],E=q[1],T=(0,c.useState)(s.variation?s.variation[0].size[0].stock:s.stock),H=(0,t.A)(T,2),R=H[0],D=H[1],O=(0,c.useState)(1),L=(0,t.A)(O,2),V=L[0],M=L[1],J=(0,m.pQ)(S,s,I,z),U={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:y},modules:[n._R,n.WO]},Q={onSwiper:A,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,x.jsxs)(l.A,{show:v,onHide:function(){A(null),f()},className:"product-quickview-modal-wrapper",children:[(0,x.jsx)(l.A.Header,{closeButton:!0}),(0,x.jsx)("div",{className:"modal-body",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,x.jsx)("div",{className:"product-large-image-wrapper",children:(0,x.jsx)(d.A,{options:U,children:s.image&&s.image.map((function(e,s){return(0,x.jsx)(d.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,x.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,x.jsx)(d.A,{options:Q,children:s.image&&s.image.map((function(e,s){return(0,x.jsx)(d.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))})})]}),(0,x.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,x.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,x.jsx)("h2",{children:s.name}),(0,x.jsx)("div",{className:"product-details-price",children:null!==a?(0,x.jsxs)(c.Fragment,{children:[(0,x.jsx)("span",{children:"\u20b9"+g})," ",(0,x.jsx)("span",{className:"old",children:"\u20b9"+j})]}):(0,x.jsxs)("span",{children:["\u20b9"+j," "]})}),s.rating&&s.rating>0?(0,x.jsx)("div",{className:"pro-details-rating-wrap",children:(0,x.jsx)("div",{className:"pro-details-rating",children:(0,x.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,x.jsx)("div",{className:"pro-details-list",children:(0,x.jsx)("p",{children:s.shortDescription})}),s.variation?(0,x.jsxs)("div",{className:"pro-details-size-color",children:[(0,x.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,x.jsx)("span",{children:"Color"}),(0,x.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,x.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,x.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===I?"checked":"",onChange:function(){B(e.color),E(e.size[0].name),D(e.size[0].stock),M(1)}}),(0,x.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,x.jsxs)("div",{className:"pro-details-size",children:[(0,x.jsx)("span",{children:"Size"}),(0,x.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===I?e.size.map((function(e,s){return(0,x.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,x.jsx)("input",{type:"radio",value:e.name,checked:e.name===z?"checked":"",onChange:function(){E(e.name),D(e.stock),M(1)}}),(0,x.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,x.jsx)("div",{className:"pro-details-quality",children:(0,x.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,x.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,x.jsxs)("div",{className:"pro-details-quality",children:[(0,x.jsxs)("div",{className:"cart-plus-minus",children:[(0,x.jsx)("button",{onClick:function(){return M(V>1?V-1:1)},className:"dec qtybutton",children:"-"}),(0,x.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:V,readOnly:!0}),(0,x.jsx)("button",{onClick:function(){return M(V<R-J?V+1:V)},className:"inc qtybutton",children:"+"})]}),(0,x.jsx)("div",{className:"pro-details-cart btn-hover",children:R&&R>0?(0,x.jsxs)("button",{onClick:function(){return k((0,u.bE)((0,i.A)((0,i.A)({},s),{},{quantity:V,selectedProductColor:I||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:z||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:J>=R,children:[" ","Add To Cart"," "]}):(0,x.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,x.jsx)("div",{className:"pro-details-wishlist",children:(0,x.jsx)("button",{className:void 0!==N?"active":"",disabled:void 0!==N,title:void 0!==N?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,p.U4)(s))},children:(0,x.jsx)("i",{className:"pe-7s-like"})})}),(0,x.jsx)("div",{className:"pro-details-compare",children:(0,x.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to compare":"Add to compare",onClick:function(){return k((0,h.wL)(s))},children:(0,x.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,s,a){var i=a(5043),t=a(579);s.A=function(e){for(var s=e.ratingValue,a=[],c=0;c<5;c++)a.push((0,t.jsx)("i",{className:"fa fa-star-o"},c));if(s&&s>0)for(var n=0;n<=s-1;n++)a[n]=(0,t.jsx)("i",{className:"fa fa-star-o yellow"},n);return(0,t.jsx)(i.Fragment,{children:a})}},2168:function(e,s,a){var i=a(9490),t=a(579),c=function(e){var s=e.title,a=e.titleTemplate,c=e.description;return(0,t.jsx)(i.vd,{children:(0,t.jsxs)(i.mg,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsxs)("title",{children:[s," | ",a]}),(0,t.jsx)("meta",{name:"description",content:c})]})})};c.defaultProps={title:"Fascinatingly Dark",titleTemplate:"Product Page",description:"Product page of Fascinatingly Dark react minimalist eCommerce template."},s.A=c},7362:function(e,s,a){a.d(s,{q:function(){return r.qr}});var i=a(436),t=a(9379),c=a(5043),n=a(3024),l=a(8906),r=a(4671),o=a(579),d=(0,c.forwardRef)((function(e,s){var a=e.options,c=e.prevIcon,d=e.nextIcon,m=e.children,u=e.className,p=e.navClass,h=void 0!==(null===a||void 0===a?void 0:a.modules)?a.modules:[],x="prev-".concat(p||"swiper-nav"),j="next-".concat(p||"swiper-nav"),g=(0,t.A)((0,t.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===a||void 0===a||!a.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},a),{},{modules:[l.Vx,l.dK,l.Jq,l.Ij].concat((0,i.A)(h)),navigation:!(null===a||void 0===a||!a.navigation)&&{prevEl:".".concat(x),nextEl:".".concat(j)},pagination:!(null===a||void 0===a||!a.pagination)&&{clickable:!0}});return(0,o.jsxs)("div",{className:(0,n.A)("swiper-wrap",u),ref:s,children:[(0,o.jsx)(r.RC,(0,t.A)((0,t.A)({},g),{},{children:m})),(null===g||void 0===g?void 0:g.navigation)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(x),children:(0,o.jsx)("i",{className:(0,n.A)(c,"icon")})}),(0,o.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(j),children:(0,o.jsx)("i",{className:(0,n.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},5506:function(e,s,a){a.r(s),a.d(s,{default:function(){return S}});var i=a(5043),t=a(2168),c=a(153),n=a(8906),l=a(7362),r=a(579),o=function(e){var s=e.data;return(0,r.jsx)("div",{className:"single-slider-2 slider-height-1 d-flex align-items-center slider-height-res hm-13-slider",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12",children:(0,r.jsxs)("div",{className:"slider-content-13 slider-animated-1",children:[(0,r.jsx)("h5",{className:"animated",children:s.title}),(0,r.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}})]})})})})})},d=JSON.parse('[{"id":1,"title":"","subtitle":"","image":"/assets/img/slider/happinessday.png","url":"/shop"}]'),m={effect:"fade",fadeEffect:{crossFade:!0},modules:[n._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},u=function(){return(0,r.jsx)("div",{className:"slider-area",children:(0,r.jsx)("div",{className:"slider-active nav-style-1",children:d&&(0,r.jsx)(l.A,{options:m,children:d.map((function(e,s){return(0,r.jsx)(l.q,{children:(0,r.jsx)(o,{data:e})},s)}))})})})},p=a(3024),h=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Free shipping on all order"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Free shipping on all order"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Free shipping on all order"}]'),x=function(e){var s=e.data,a=e.spaceBottomClass,i=e.featureShapeClass;return(0,r.jsx)("div",{className:(0,p.A)("support-wrap-2 support-padding-2 text-center",i,a),children:(0,r.jsxs)("div",{className:"support-content-2",children:[(0,r.jsx)("img",{className:"animated",src:""+s.image,alt:""}),(0,r.jsx)("h5",{children:s.title}),(0,r.jsx)("p",{children:s.subtitle})]})})},j=function(e){var s=e.bgColorClass,a=e.spaceBottomClass,i=e.featureShapeClass;return(0,r.jsx)("div",{className:(0,p.A)("support-area",s,a),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:null===h||void 0===h?void 0:h.map((function(e,s){return(0,r.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:(0,r.jsx)(x,{data:e,spaceBottomClass:"mb-30",featureShapeClass:i})},s)}))})})})},g=a(5475),v=a(9456),f=a(2821),N=a(5544),b=a(425),w=a(5721),C=a(4990),y=(a(3492),function(e){var s=e.product,a=e.currency,t=e.cartItem,c=e.wishlistItem,n=e.compareItem,l=e.spaceBottomClass,o=e.colorClass,d=e.titlePriceClass,m=(0,i.useState)(!1),u=(0,N.A)(m,2),h=u[0],x=u[1],j=(0,f.do)(s.price,s.discount),y=+(s.price*a.currencyRate).toFixed(2),A=+(j*a.currencyRate).toFixed(2),k=(0,v.wA)();return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)("div",{className:(0,p.A)("product-wrap-2",l,o),children:[(0,r.jsxs)("div",{className:"product-img",children:[(0,r.jsxs)(g.N_,{to:"/product/"+s.id,children:[(0,r.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,r.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,r.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,r.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,r.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,r.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,r.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,r.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,r.jsx)(g.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,r.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,r.jsxs)("button",{onClick:function(){return k((0,w.bE)(s))},className:void 0!==t&&t.quantity>0?"active":"",disabled:void 0!==t&&t.quantity>0,title:void 0!==t?"Added to cart":"Add to cart",children:[" ",(0,r.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,r.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,r.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,r.jsx)("button",{onClick:function(){return x(!0)},title:"Quick View",children:(0,r.jsx)("i",{className:"fa fa-eye"})})]})]}),(0,r.jsxs)("div",{className:"product-content-2",children:[(0,r.jsxs)("div",{className:"title-price-wrap-2 ".concat(d||""),children:[(0,r.jsx)("h3",{children:(0,r.jsx)(g.N_,{to:"/product/"+s.id,children:s.name})}),(0,r.jsx)("div",{className:"price-2",children:null!==j?(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("span",{children:"\u20b9"+A})," ",(0,r.jsx)("span",{className:"old",children:"\u20b9"+y})]}):(0,r.jsxs)("span",{children:["\u20b9"+y," "]})})]}),(0,r.jsx)("div",{className:"pro-wishlist-2",children:(0,r.jsx)("button",{className:void 0!==c?"active":"",disabled:void 0!==c,title:void 0!==c?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,C.U4)(s))},children:(0,r.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,r.jsx)(b.A,{show:h,onHide:function(){return x(!1)},product:s,currency:a,discountedPrice:j,finalProductPrice:y,finalDiscountedPrice:A,wishlistItem:c,compareItem:n})]})}),A=function(e){var s=e.spaceBottomClass,a=e.colorClass,t=e.titlePriceClass,c=e.category,n=e.type,l=e.limit,o=(0,v.d4)((function(e){return e.product})).products,d=(0,v.d4)((function(e){return e.currency})),m=(0,v.d4)((function(e){return e.cart})).cartItems,u=(0,f.d$)(o,c,n,l);return(0,r.jsx)(i.Fragment,{children:null===u||void 0===u?void 0:u.map((function(e){return(0,r.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,r.jsx)(y,{spaceBottomClass:s,colorClass:a,product:e,currency:d,cartItem:m.find((function(s){return s.id===e.id})),titlePriceClass:t})},e.id)}))})},k=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,i=e.category;e.productTabClass;return(0,r.jsx)("div",{className:(0,p.A)("product-area",s,a),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{class:"section-space pb-0",children:(0,r.jsx)("div",{class:"row g-3 g-sm-6",children:(0,r.jsxs)("div",{className:"col-6 col-lg-4 col-lg-2 col-xl-2",children:[(0,r.jsxs)(g.N_,{to:"/shop",className:"product-category-item","data-bg-color":"#FFEDB4",children:[(0,r.jsx)("img",{className:"icon",src:"assets/img/icon-img/2.webp",width:80,height:80,alt:""}),(0,r.jsx)("h3",{className:"title",children:"Lip Balm"})]}),(0,r.jsxs)(g.N_,{to:"/shop",className:"product-category-item","data-bg-color":"#DFE4FF",children:[(0,r.jsx)("img",{className:"icon",src:"assets/img/icon-img/3.webp",width:80,height:80,alt:""}),(0,r.jsx)("h3",{className:"title",children:"Tint"})]}),(0,r.jsxs)(g.N_,{to:"/shop",className:"product-category-item","data-bg-color":"#FFEACC",children:[(0,r.jsx)("img",{className:"icon",src:"assets/img/icon-img/5.webp",width:80,height:80,alt:""}),(0,r.jsx)("h3",{className:"title",children:"Hot Hue"})]}),(0,r.jsxs)(g.N_,{to:"/shop",className:"product-category-item","data-bg-color":"#FFF3DA",children:[(0,r.jsx)("img",{className:"icon",src:"assets/img/icon-img/6.webp",width:80,height:80,alt:""}),(0,r.jsx)("h3",{className:"title",children:"Lip Gloss"})]})]})})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsx)(A,{category:i,type:"bestSeller",limit:4,spaceBottomClass:"mb-25"})}),(0,r.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,r.jsx)(g.N_,{className:"loadMore6",to:"/shop",children:"VIEW MORE PRODUCTS"})})]})})},S=function(){return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(t.A,{titleTemplate:"Cosmetics Home",description:"Cosmetics home of fascinatingly Dark react minimalist eCommerce template."}),(0,r.jsxs)(c.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",children:[(0,r.jsx)(u,{}),(0,r.jsx)(k,{spaceTopClass:"pt-95",spaceBottomClass:"pb-70",category:"cosmetics"}),(0,r.jsx)(j,{spaceBottomClass:"pb-70",featureShapeClass:"support-shape-3"})]})]})}}}]);
//# sourceMappingURL=506.a3303e1b.chunk.js.map