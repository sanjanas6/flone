"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[182],{3546:function(e,s,i){var a=i(9379),c=i(5544),r=i(5043),t=i(5475),n=i(9456),l=i(2821),d=i(5913),o=i(5721),u=i(4990),m=i(3492),p=i(579);s.A=function(e){var s=e.product,i=e.discountedPrice,h=(e.currency,e.finalDiscountedPrice),x=e.finalProductPrice,j=e.cartItems,f=e.wishlistItem,v=e.compareItem,N=(0,n.wA)(),g=(0,r.useState)(s.variation?s.variation[0].color:""),b=(0,c.A)(g,2),k=b[0],y=b[1],w=(0,r.useState)(s.variation?s.variation[0].size[0].name:""),C=(0,c.A)(w,2),A=C[0],P=C[1],z=(0,r.useState)(s.variation?s.variation[0].size[0].stock:s.stock),S=(0,c.A)(z,2),I=S[0],_=S[1],T=(0,r.useState)(1),q=(0,c.A)(T,2),B=q[0],D=q[1],F=(0,l.pQ)(j,s,k,A);return(0,p.jsxs)("div",{className:"product-details-content ml-70",children:[(0,p.jsx)("h2",{children:s.name}),(0,p.jsx)("div",{className:"product-details-price",children:null!==i?(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("span",{children:"\u20b9"+h})," ",(0,p.jsx)("span",{className:"old",children:"\u20b9"+x})]}):(0,p.jsxs)("span",{children:["\u20b9"+x," "]})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"pro-details-rating-wrap",children:(0,p.jsx)("div",{className:"pro-details-rating",children:(0,p.jsx)(d.A,{ratingValue:s.rating})})}):"",(0,p.jsx)("div",{className:"pro-details-list",children:(0,p.jsx)("p",{children:s.shortDescription})}),s.variation?(0,p.jsxs)("div",{className:"pro-details-size-color",children:[(0,p.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,p.jsx)("span",{children:"Color"}),(0,p.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,p.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===k?"checked":"",onChange:function(){y(e.color),P(e.size[0].name),_(e.size[0].stock),D(1)}}),(0,p.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,p.jsxs)("div",{className:"pro-details-size",children:[(0,p.jsx)("span",{children:"Size"}),(0,p.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===k?e.size.map((function(e,s){return(0,p.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,p.jsx)("input",{type:"radio",value:e.name,checked:e.name===A?"checked":"",onChange:function(){P(e.name),_(e.stock),D(1)}}),(0,p.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,p.jsx)("div",{className:"pro-details-quality",children:(0,p.jsx)("div",{className:"pro-details-cart btn-hover ml-0",children:(0,p.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,p.jsxs)("div",{className:"pro-details-quality",children:[(0,p.jsxs)("div",{className:"cart-plus-minus",children:[(0,p.jsx)("button",{onClick:function(){return D(B>1?B-1:1)},className:"dec qtybutton",children:"-"}),(0,p.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:B,readOnly:!0}),(0,p.jsx)("button",{onClick:function(){return D(B<I-F?B+1:B)},className:"inc qtybutton",children:"+"})]}),(0,p.jsx)("div",{className:"pro-details-cart btn-hover",children:I&&I>0?(0,p.jsxs)("button",{onClick:function(){return N((0,o.bE)((0,a.A)((0,a.A)({},s),{},{quantity:B,selectedProductColor:k||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:A||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:F>=I,children:[" ","Add To Cart"," "]}):(0,p.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-details-wishlist",children:(0,p.jsx)("button",{className:void 0!==f?"active":"",disabled:void 0!==f,title:void 0!==f?"Added to wishlist":"Add to wishlist",onClick:function(){return N((0,u.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-details-compare",children:(0,p.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to compare":"Add to compare",onClick:function(){return N((0,m.wL)(s))},children:(0,p.jsx)("i",{className:"pe-7s-shuffle"})})})]}),s.category?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Categories :"}),(0,p.jsx)("ul",{children:s.category.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(t.N_,{to:"/shop",children:e})},s)}))})]}):"",s.tag?(0,p.jsxs)("div",{className:"pro-details-meta",children:[(0,p.jsx)("span",{children:"Tags :"}),(0,p.jsx)("ul",{children:s.tag.map((function(e,s){return(0,p.jsx)("li",{children:(0,p.jsx)(t.N_,{to:"/shop",children:e})},s)}))})]}):"",(0,p.jsx)("div",{className:"pro-details-social",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//facebook.com",children:(0,p.jsx)("i",{className:"fa fa-facebook"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//dribbble.com",children:(0,p.jsx)("i",{className:"fa fa-dribbble"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//pinterest.com",children:(0,p.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//twitter.com",children:(0,p.jsx)("i",{className:"fa fa-twitter"})})}),(0,p.jsx)("li",{children:(0,p.jsx)("a",{href:"//linkedin.com",children:(0,p.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}},9182:function(e,s,i){i.r(s),i.d(s,{default:function(){return f}});var a=i(5043),c=i(9456),r=i(3216),t=i(2168),n=i(153),l=i(970),d=i(8024),o=i(2731),u=i(3024),m=i(2821),p=i(3546),h=i(579),x=function(e){var s,i=e.product;return(0,h.jsxs)("div",{className:"product-large-image-wrapper product-large-image-wrapper--sticky",children:[i.discount||i.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[i.discount?(0,h.jsxs)("span",{className:"pink",children:["-",i.discount,"%"]}):"",i.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsx)("div",{className:"product-sticky-image mb--10",children:null===i||void 0===i||null===(s=i.image)||void 0===s?void 0:s.map((function(e,s){return(0,h.jsx)("div",{className:"product-sticky-image__single mb-10",children:(0,h.jsx)("img",{src:""+e,alt:"",className:"img-fluid"})},s)}))})]})},j=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.product,r=(0,c.d4)((function(e){return e.currency})),t=(0,c.d4)((function(e){return e.cart})).cartItems,n=(0,c.d4)((function(e){return e.wishlist})).wishlistItems,l=(0,c.d4)((function(e){return e.compare})).compareItems,d=n.find((function(e){return e.id===a.id})),o=l.find((function(e){return e.id===a.id})),j=(0,m.do)(a.price,a.discount),f=+(a.price*r.currencyRate).toFixed(2),v=+(j*r.currencyRate).toFixed(2);return(0,h.jsx)("div",{className:(0,u.A)("shop-area",s,i),children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)(x,{product:a})}),(0,h.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,h.jsx)("div",{style:{position:"sticky",top:"75px"},children:(0,h.jsx)(p.A,{product:a,discountedPrice:j,currency:r,finalDiscountedPrice:v,finalProductPrice:f,cartItems:t,wishlistItem:d,compareItem:o})})})]})})})},f=function(){var e=(0,r.zy)().pathname,s=(0,r.g)().id,i=(0,c.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)(t.A,{titleTemplate:"Product Page",description:"Product page of Fascinatingly Dark react minimalist eCommerce template."}),(0,h.jsxs)(n.A,{headerTop:"visible",children:[(0,h.jsx)(l.A,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:""+e}]}),(0,h.jsx)(j,{spaceTopClass:"mt-100",spaceBottomClass:"mb-100",product:i}),(0,h.jsx)(o.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,h.jsx)(d.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}}}]);
//# sourceMappingURL=182.c3265721.chunk.js.map