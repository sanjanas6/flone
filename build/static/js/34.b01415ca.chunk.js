"use strict";(self.webpackChunkfascinatingly_dark_react=self.webpackChunkfascinatingly_dark_react||[]).push([[34],{1034:function(e,s,i){i.r(s),i.d(s,{default:function(){return P}});var t=i(5043),a=i(9456),c=i(3216),r=i(2168),n=i(153),l=i(970),o=i(8024),d=i(2731),u=i(3024),p=i(2821),m=i(7362),h=i(579),j=function(e){var s,i=e.product;return(0,h.jsx)("div",{className:"product-large-image-wrapper product-large-image-wrapper--slider",children:null!==i&&void 0!==i&&null!==(s=i.image)&&void 0!==s&&s.length?(0,h.jsx)(m.A,{options:{spaceBetween:15,slidesPerView:3,loop:!0,navigation:!0,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},768:{slidesPerView:2},1024:{slidesPerView:3}}},children:i.image.map((function(e,s){return(0,h.jsx)(m.q,{children:(0,h.jsx)("div",{className:"single-image",children:(0,h.jsx)("img",{src:e,className:"img-fluid",alt:""})})},s)}))}):null})},x=i(9379),f=i(5544),v=i(5475),N=i(5913),g=i(5721),b=i(4990),k=i(3492),y=function(e){var s=e.product,i=e.discountedPrice,c=(e.currency,e.finalDiscountedPrice),r=e.finalProductPrice,n=e.cartItems,l=e.wishlistItem,o=e.compareItem,d=(0,a.wA)(),u=(0,t.useState)(s.variation?s.variation[0].color:""),m=(0,f.A)(u,2),j=m[0],y=m[1],w=(0,t.useState)(s.variation?s.variation[0].size[0].name:""),P=(0,f.A)(w,2),C=P[0],A=P[1],z=(0,t.useState)(s.variation?s.variation[0].size[0].stock:s.stock),S=(0,f.A)(z,2),I=S[0],_=S[1],q=(0,t.useState)(1),B=(0,f.A)(q,2),D=B[0],F=B[1],T=(0,p.pQ)(n,s,j,C);return(0,h.jsxs)("div",{className:"product-details-content pro-details-slider-content",children:[(0,h.jsx)("h2",{children:s.name}),(0,h.jsx)("div",{className:"product-details-price justify-content-center",children:null!==i?(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)("span",{children:"\u20b9"+c})," ",(0,h.jsx)("span",{className:"old",children:"\u20b9"+r})]}):(0,h.jsxs)("span",{children:["\u20b9"+r," "]})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"pro-details-rating-wrap justify-content-center",children:(0,h.jsx)("div",{className:"pro-details-rating mr-0",children:(0,h.jsx)(N.A,{ratingValue:s.rating})})}):"",(0,h.jsx)("div",{className:"pro-details-list",children:(0,h.jsx)("p",{children:s.shortDescription})}),s.variation?(0,h.jsxs)("div",{className:"pro-details-size-color justify-content-center",children:[(0,h.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,h.jsx)("span",{children:"Color"}),(0,h.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,h.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,h.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===j?"checked":"",onChange:function(){y(e.color),A(e.size[0].name),_(e.size[0].stock),F(1)}}),(0,h.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,h.jsxs)("div",{className:"pro-details-size",children:[(0,h.jsx)("span",{children:"Size"}),(0,h.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===j?e.size.map((function(e,s){return(0,h.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,h.jsx)("input",{type:"radio",value:e.name,checked:e.name===C?"checked":"",onChange:function(){A(e.name),_(e.stock),F(1)}}),(0,h.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,h.jsx)("div",{className:"pro-details-quality justify-content-center",children:(0,h.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,h.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,h.jsxs)("div",{className:"pro-details-quality justify-content-center",children:[(0,h.jsxs)("div",{className:"cart-plus-minus",children:[(0,h.jsx)("button",{onClick:function(){return F(D>1?D-1:1)},className:"dec qtybutton",children:"-"}),(0,h.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:D,readOnly:!0}),(0,h.jsx)("button",{onClick:function(){return F(D<I-T?D+1:D)},className:"inc qtybutton",children:"+"})]}),(0,h.jsx)("div",{className:"pro-details-cart btn-hover",children:I&&I>0?(0,h.jsxs)("button",{onClick:function(){return d((0,g.bE)((0,x.A)((0,x.A)({},s),{},{quantity:D,selectedProductColor:j||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:C||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:T>=I,children:[" ","Add To Cart"," "]}):(0,h.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-details-wishlist",children:(0,h.jsx)("button",{className:void 0!==l?"active":"",disabled:void 0!==l,title:void 0!==l?"Added to wishlist":"Add to wishlist",onClick:function(){return d((0,b.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-details-compare",children:(0,h.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to compare":"Add to compare",onClick:function(){return d((0,k.wL)(s))},children:(0,h.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,h.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,h.jsx)("span",{children:"Categories :"}),(0,h.jsx)("ul",{children:s.category.map((function(e,s){return(0,h.jsx)("li",{children:(0,h.jsx)(v.N_,{to:"/shop",children:e})},s)}))})]}):"",s.tag?(0,h.jsxs)("div",{className:"pro-details-meta justify-content-center",children:[(0,h.jsx)("span",{children:"Tags :"}),(0,h.jsx)("ul",{children:s.tag.map((function(e,s){return(0,h.jsx)("li",{children:(0,h.jsx)(v.N_,{to:"/shop",children:e})},s)}))})]}):"",(0,h.jsx)("div",{className:"pro-details-social",children:(0,h.jsxs)("ul",{className:"justify-content-center",children:[(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//facebook.com",children:(0,h.jsx)("i",{className:"fa fa-facebook"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//dribbble.com",children:(0,h.jsx)("i",{className:"fa fa-dribbble"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//pinterest.com",children:(0,h.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//twitter.com",children:(0,h.jsx)("i",{className:"fa fa-twitter"})})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:"//linkedin.com",children:(0,h.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})},w=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,t=e.product,c=(0,a.d4)((function(e){return e.currency})),r=(0,a.d4)((function(e){return e.cart})).cartItems,n=(0,a.d4)((function(e){return e.wishlist})).wishlistItems,l=(0,a.d4)((function(e){return e.compare})).compareItems,o=n.find((function(e){return e.id===t.id})),d=l.find((function(e){return e.id===t.id})),m=(0,p.do)(t.price,t.discount),x=+(t.price*c.currencyRate).toFixed(2),f=+(m*c.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,u.A)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-12 mb-50",children:(0,h.jsx)(j,{product:t})}),(0,h.jsx)("div",{className:"col-lg-12 text-center",children:(0,h.jsx)(y,{product:t,discountedPrice:m,currency:c,finalDiscountedPrice:f,finalProductPrice:x,cartItems:r,wishlistItem:o,compareItem:d})})]})})})},P=function(){var e=(0,c.zy)().pathname,s=(0,c.g)().id,i=(0,a.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,h.jsxs)(t.Fragment,{children:[(0,h.jsx)(r.A,{titleTemplate:"Product Page",description:"Product page of Fascinatingly Dark react minimalist eCommerce template."}),(0,h.jsxs)(n.A,{headerTop:"visible",children:[(0,h.jsx)(l.A,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:e}]}),(0,h.jsx)(w,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i}),(0,h.jsx)(d.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,h.jsx)(o.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}}}]);
//# sourceMappingURL=34.b01415ca.chunk.js.map