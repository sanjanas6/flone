"use strict";(self.webpackChunkflone_react=self.webpackChunkflone_react||[]).push([[865],{7865:function(e,r,t){t.r(r);var a=t(675),n=t(467),s=t(5544),i=t(5043),l=t(3216),c=t(153),o=t(970),u=t(7154),d=t(64),p=t.n(d),h=t(579);r.default=function(){var e=(0,l.zy)().pathname,r=(0,l.Zp)(),t=(0,i.useState)(""),d=(0,s.A)(t,2),m=d[0],g=d[1],v=(0,i.useState)(""),x=(0,s.A)(v,2),f=x[0],b=x[1],j=(0,i.useState)(""),A=(0,s.A)(j,2),N=A[0],w=A[1],k=function(){var e=(0,n.A)((0,a.A)().mark((function e(t){var n;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.A.post("http://localhost:8080/api/v1/auth/register",{email:f,phone:m,password:N});case 4:(n=e.sent).data.success?(p().fire({icon:"success",title:"Registration Successful",text:"User Registered Successfully!"}),r("/login")):p().fire({icon:"error",title:"Registration Failed",text:n.data.message}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),p().fire({icon:"error",title:"Registration Failed",text:"An error occurred during registration"}),console.error("Registration failed:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}();return(0,h.jsx)(i.Fragment,{children:(0,h.jsxs)(c.A,{headerTop:"visible",children:[(0,h.jsx)(o.A,{pages:[{label:"Home",path:"/"},{label:"Register",path:""+e}]}),(0,h.jsx)("div",{className:"login-register-area pt-100 pb-100",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsx)("div",{className:"col-lg-7 col-md-12 ms-auto me-auto",children:(0,h.jsx)("div",{className:"login-register-wrapper",children:(0,h.jsx)("div",{className:"login-form-container",children:(0,h.jsx)("div",{className:"login-register-form",children:(0,h.jsxs)("form",{onSubmit:k,children:[(0,h.jsx)("input",{type:"number",name:"mobile-number",placeholder:"Mobile Number",value:m,onChange:function(e){return g(e.target.value)}}),(0,h.jsx)("input",{name:"user-email",placeholder:"Email",type:"email",value:f,onChange:function(e){return b(e.target.value)}}),(0,h.jsx)("input",{type:"password",name:"user-password",placeholder:"Password",value:N,onChange:function(e){return w(e.target.value)}}),(0,h.jsx)("div",{className:"button-box",children:(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)("span",{children:"Register"})})})]})})})})})})})})]})})}},970:function(e,r,t){var a=t(9397),n=t(5475),s=t(579);r.A=function(e){var r=e.pages;return(0,s.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(a.A,{children:null===r||void 0===r?void 0:r.map((function(e,t){var i=e.path,l=e.label;return t!==r.length-1?(0,s.jsx)(a.A.Item,{linkProps:{to:i},linkAs:n.N_,children:l},l):(0,s.jsx)(a.A.Item,{active:!0,children:l},l)}))})})})}}}]);
//# sourceMappingURL=865.e326a54c.chunk.js.map