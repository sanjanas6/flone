"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[115],{3546:function(e,s,i){var a=i(9379),l=i(5544),n=i(5043),r=i(5475),c=i(9456),t=i(2821),d=i(5913),o=i(5721),u=i(4990),m=i(3492),p=i(579);s.A=function(e){var s=e.product,i=e.discountedPrice,h=(e.currency,e.finalDiscountedPrice),x=e.finalProductPrice,j=e.cartItems,f=e.wishlistItem,g=e.compareItem,v=(0,c.wA)(),N=(0,n.useState)(s.variation?s.variation[0].color:""),b=(0,l.A)(N,2),w=b[0],A=b[1],k=(0,n.useState)(s.variation?s.variation[0].size[0].name:""),y=(0,l.A)(k,2),P=y[0],C=y[1],z=(0,n.useState)(s.variation?s.variation[0].size[0].stock:s.stock),S=(0,l.A)(z,2),T=S[0],I=S[1],q=(0,n.useState)(1),B=(0,l.A)(q,2),F=B[0],V=B[1],_=(0,t.pQ)(j,s,w,P);return(0,p.jsxs)("div",{className:"product-details-content ml-70",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==i?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsx)("span",{children:"\u20b9"+h})," ",(0,p.jsx)("span",{className:"old",children:"\u20b9"+x})]}):(0,p.jsxs)("span",{children:["\u20b9"+x," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(d.A,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.shortDescription})}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===w?"checked":"",onChange:function(){A(e.color),C(e.size[0].name),I(e.size[0].stock),V(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===w?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===P?"checked":"",onChange:function(){C(e.name),I(e.stock),V(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return V(F>1?F-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:F,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return V(F<T-_?F+1:F)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:T&&T>0?(0,p.jsxs)("button",{onClick:function(){return v((0,o.bE)((0,a.A)((0,a.A)({},s),{},{quantity:F,selectedProductColor:w||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:P||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:_>=T,children:[" ","Add To Cart"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to wishlist":"Add to wishlist",onClick:function(){return v((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==g?"active":"",disabled:void 0!==g,title:void 0!==g?"Added to compare":"Add to compare",onClick:function(){return v((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Categories :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(r.N_,{to:"/shop",children:e})},s)}))})]}):"",s.tag?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Tags :"}),(0,p.jsx)("ul",{children:s.tag.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(r.N_,{to:"/shop",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//facebook.com",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//dribbble.com",children:(0,p.jsx)("i",{className:"fa fa-dribbble"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//pinterest.com",children:(0,p.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//twitter.com",children:(0,p.jsx)("i",{className:"fa fa-twitter"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//linkedin.com",children:(0,p.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}},6115:function(e,s,i){i.r(s);var a=i(5043),l=i(9456),n=i(3216),r=i(2168),c=i(153),t=i(970),d=i(8024),o=i(2731),u=i(6827),m=i(579);s.default=function(){var e=(0,n.zy)().pathname,s=(0,n.g)().id,i=(0,l.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(r.A,{titleTemplate:"Product Page",description:"Product page of Fascinatingly Dark react minimalist eCommerce template."}),(0,m.jsxs)(c.A,{headerTop:"visible",children:[(0,m.jsx)(t.A,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:""+e}]}),(0,m.jsx)(u.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i,galleryType:"leftThumb"}),(0,m.jsx)(o.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,m.jsx)(d.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},6827:function(e,s,i){i.d(s,{A:function(){return v}});var a=i(9456),l=i(3024),n=i(2821),r=i(5544),c=i(5043),t=i(8906),d=i(5568),o=i(5459),u=i(4629),m=i(31),p=i(7362),h=i(579),x=function(e){var s,i,a=e.product,l=(0,c.useState)(null),n=(0,r.A)(l,2),x=n[0],j=n[1],f=(0,c.useState)(-1),g=(0,r.A)(f,2),v=g[0],N=g[1],b=null===a||void 0===a?void 0:a.image.map((function(e,s){return{src:""+e,key:s}})),w={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:x},modules:[t._R,t.WO]},A={onSwiper:j,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,h.jsxs)(c.Fragment,{children:[(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[a.discount||a.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[a.discount?(0,h.jsxs)("span",{className:"pink",children:["-",a.discount,"%"]}):"",a.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==a&&void 0!==a&&null!==(s=a.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:w,children:[a.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return N(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(d.A,{open:v>=0,index:v,close:function(){return N(-1)},slides:b,plugins:[o.A,u.Ay,m.A]})]}):null]}),(0,h.jsx)("div",{className:"product-small-image-wrapper mt-15",children:null!==a&&void 0!==a&&null!==(i=a.image)&&void 0!==i&&i.length?(0,h.jsx)(p.A,{options:A,children:a.image.map((function(e,s){return(0,h.jsx)(p.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))}):null})]})},j=i(3546),f=function(e){var s,i,a=e.product,n=e.thumbPosition,x=(0,c.useState)(null),j=(0,r.A)(x,2),f=j[0],g=j[1],v=(0,c.useState)(-1),N=(0,r.A)(v,2),b=N[0],w=N[1],A=null===a||void 0===a?void 0:a.image.map((function(e,s){return{src:""+e,key:s}})),k={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:f},modules:[t._R,t.WO]},y={onSwiper:g,spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,slideToClickedSlide:!0,direction:"vertical",breakpoints:{320:{slidesPerView:4,direction:"horizontal"},640:{slidesPerView:4,direction:"horizontal"},768:{slidesPerView:4,direction:"horizontal"},992:{slidesPerView:4,direction:"horizontal"},1200:{slidesPerView:4,direction:"vertical"}}};return(0,h.jsx)(c.Fragment,{children:(0,h.jsxs)("div",{className:"row row-5 test",children:[(0,h.jsx)("div",{className:(0,l.A)(n&&"left"===n?"col-xl-10 order-1 order-xl-2":"col-xl-10"),children:(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[a.discount||a.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[a.discount?(0,h.jsxs)("span",{className:"pink",children:["-",a.discount,"%"]}):"",a.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==a&&void 0!==a&&null!==(s=a.image)&&void 0!==s&&s.length?(0,h.jsxs)(p.A,{options:k,children:[null===a||void 0===a?void 0:a.image.map((function(e,s){return(0,h.jsxs)(p.q,{children:[(0,h.jsx)("button",{className:"lightgallery-button",onClick:function(){return w(s)},children:(0,h.jsx)("i",{className:"pe-7s-expand1"})}),(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})]},s)})),(0,h.jsx)(d.A,{open:b>=0,index:b,close:function(){return w(-1)},slides:A,plugins:[o.A,u.Ay,m.A]})]}):null]})}),(0,h.jsx)("div",{className:(0,l.A)(n&&"left"===n?"col-xl-2 order-2 order-xl-1":"col-xl-2"),children:(0,h.jsx)("div",{className:"product-small-image-wrapper product-small-image-wrapper--side-thumb",children:null!==a&&void 0!==a&&null!==(i=a.image)&&void 0!==i&&i.length?(0,h.jsx)(p.A,{options:y,children:a.image.map((function(e,s){return(0,h.jsx)(p.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))}):null})})]})})},g=function(e){var s=e.product;return(0,h.jsxs)("div",{className:"product-large-image-wrapper",children:[s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsx)("div",{className:"product-fixed-image",children:s.image?(0,h.jsx)("img",{src:""+s.image[0],alt:"",className:"img-fluid"}):""})]})},v=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,r=e.galleryType,c=e.product,t=(0,a.d4)((function(e){return e.currency})),d=(0,a.d4)((function(e){return e.cart})).cartItems,o=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,a.d4)((function(e){return e.compare})).compareItems,m=o.find((function(e){return e.id===c.id})),p=u.find((function(e){return e.id===c.id})),v=(0,n.do)(c.price,c.discount),N=+(c.price*t.currencyRate).toFixed(2),b=+(v*t.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,l.A)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:"leftThumb"===r?(0,h.jsx)(f,{product:c,thumbPosition:"left"}):"rightThumb"===r?(0,h.jsx)(f,{product:c}):"fixedImage"===r?(0,h.jsx)(g,{product:c}):(0,h.jsx)(x,{product:c})}),(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)(j.A,{product:c,discountedPrice:v,currency:t,finalDiscountedPrice:b,finalProductPrice:N,cartItems:d,wishlistItem:m,compareItem:p})})]})})})}}}]);
//# sourceMappingURL=115.fdd92373.chunk.js.map