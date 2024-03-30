"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[191],{2168:function(e,a,r){var n=r(9490),t=r(579),i=function(e){var a=e.title,r=e.titleTemplate,i=e.description;return(0,t.jsx)(n.vd,{children:(0,t.jsxs)(n.mg,{children:[(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsxs)("title",{children:[a," | ",r]}),(0,t.jsx)("meta",{name:"description",content:i})]})})};i.defaultProps={title:"Fascinatingly Dark",titleTemplate:"Product Page",description:"Product page of flone react minimalist eCommerce template."},a.A=i},191:function(e,a,r){r.r(a);var n=r(5043),t=r(3216),i=r(5475),s=r(2168),l=r(153),o=r(970),c=r(579);a.default=function(){var e=(0,t.zy)().pathname;return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(s.A,{titleTemplate:"Not Found",description:"404 of flone react minimalist eCommerce template."}),(0,c.jsxs)(l.A,{headerTop:"visible",children:[(0,c.jsx)(o.A,{pages:[{label:"Home",path:"/"},{label:"404 page",path:""+e}]}),(0,c.jsx)("div",{className:"error-area pt-40 pb-100",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row justify-content-center",children:(0,c.jsx)("div",{className:"col-xl-7 col-lg-8 text-center",children:(0,c.jsxs)("div",{className:"error",children:[(0,c.jsx)("h1",{children:"404"}),(0,c.jsx)("h2",{children:"OPPS! PAGE NOT FOUND"}),(0,c.jsx)("p",{children:"Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable."}),(0,c.jsxs)("form",{className:"searchform mb-50",children:[(0,c.jsx)("input",{type:"text",name:"search",id:"error_search",placeholder:"Search...",className:"searchform__input"}),(0,c.jsx)("button",{type:"submit",className:"searchform__submit",children:(0,c.jsx)("i",{className:"fa fa-search"})})]}),(0,c.jsx)(i.N_,{to:"/",className:"error-btn",children:"Back to home page"})]})})})})})]})]})}},970:function(e,a,r){var n=r(9397),t=r(5475),i=r(579);a.A=function(e){var a=e.pages;return(0,i.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(n.A,{children:null===a||void 0===a?void 0:a.map((function(e,r){var s=e.path,l=e.label;return r!==a.length-1?(0,i.jsx)(n.A.Item,{linkProps:{to:s},linkAs:t.N_,children:l},l):(0,i.jsx)(n.A.Item,{active:!0,children:l},l)}))})})})}},2673:function(e,a,r){r.d(a,{A:function(){return d}});var n=r(5544),t=r(5043),i=(r(2667),r(8232),r(1456));r(6723),r(1342);r(4723),new WeakMap;var s=r(4140),l=r(579),o=["onKeyDown"];var c=t.forwardRef((function(e,a){var r,t=e.onKeyDown,c=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o),d=(0,s.Am)(Object.assign({tagName:"a"},c)),u=(0,n.A)(d,1)[0],m=(0,i.A)((function(e){u.onKeyDown(e),null==t||t(e)}));return(r=c.href)&&"#"!==r.trim()&&"button"!==c.role?(0,l.jsx)("a",Object.assign({ref:a},c,{onKeyDown:t})):(0,l.jsx)("a",Object.assign({ref:a},c,u,{onKeyDown:m}))}));c.displayName="Anchor";var d=c},4140:function(e,a,r){r.d(a,{Am:function(){return l}});var n=r(5544),t=r(5043),i=r(579),s=["as","disabled"];function l(e){var a=e.tagName,r=e.disabled,n=e.href,t=e.target,i=e.rel,s=e.role,l=e.onClick,o=e.tabIndex,c=void 0===o?0:o,d=e.type;a||(a=null!=n||null!=t||null!=i?"a":"button");var u={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},u];var m=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==l||l(e)};return"a"===a&&(n||(n="#"),r&&(n=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:c,href:n,target:"a"===a?t:void 0,"aria-disabled":r||void 0,rel:"a"===a?i:void 0,onClick:m,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),m(e))}},u]}var o=t.forwardRef((function(e,a){var r=e.as,t=e.disabled,o=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,s),c=l(Object.assign({tagName:r,disabled:t},o)),d=(0,n.A)(c,2),u=d[0],m=d[1].tagName;return(0,i.jsx)(m,Object.assign({},o,u,{ref:a}))}));o.displayName="Button",a.Ay=o},9397:function(e,a,r){r.d(a,{A:function(){return b}});var n=r(9379),t=r(45),i=r(8139),s=r.n(i),l=r(5043),o=r(7852),c=r(2673),d=r(579),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=l.forwardRef((function(e,a){var r=e.bsPrefix,i=e.active,l=void 0!==i&&i,m=e.children,f=e.className,h=e.as,v=void 0===h?"li":h,b=e.linkAs,p=void 0===b?c.A:b,x=e.linkProps,j=void 0===x?{}:x,g=e.href,N=e.title,A=e.target,y=(0,t.A)(e,u),k=(0,o.oU)(r,"breadcrumb-item");return(0,d.jsx)(v,(0,n.A)((0,n.A)({ref:a},y),{},{className:s()(k,f,{active:l}),"aria-current":l?"page":void 0,children:l?m:(0,d.jsx)(p,(0,n.A)((0,n.A)({},j),{},{href:g,title:N,target:A,children:m}))}))}));m.displayName="BreadcrumbItem";var f=m,h=["bsPrefix","className","listProps","children","label","as"],v=l.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,l=e.listProps,c=void 0===l?{}:l,u=e.children,m=e.label,f=void 0===m?"breadcrumb":m,v=e.as,b=void 0===v?"nav":v,p=(0,t.A)(e,h),x=(0,o.oU)(r,"breadcrumb");return(0,d.jsx)(b,(0,n.A)((0,n.A)({"aria-label":f,className:i,ref:a},p),{},{children:(0,d.jsx)("ol",(0,n.A)((0,n.A)({},c),{},{className:s()(x,null==c?void 0:c.className),children:u}))}))}));v.displayName="Breadcrumb";var b=Object.assign(v,{Item:f})}}]);
//# sourceMappingURL=191.b59a1486.chunk.js.map