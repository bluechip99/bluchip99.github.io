(()=>{var e={};e.id=888,e.ids=[888],e.modules={7033:e=>{e.exports={footer:"Footer_footer__JiI2X",nav:"Footer_nav__xIGvo"}},3129:e=>{e.exports={header:"Header_header__5X5wX",hidden:"Header_hidden__Q2yHz",marqueeContainer:"Header_marqueeContainer__V2TNN",marquee:"Header_marquee__zkoB1",mainNav:"Header_mainNav__6bCt2",logo:"Header_logo__WbVCI"}},5214:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>q});var i=t(997);let s=require("next/head");var a=t.n(s),n=t(580),o=t.n(n);t(108);var l=t(1664),c=t.n(l),d=t(5675),u=t.n(d),h=t(6689),m=t.n(h),p=t(3129),v=t.n(p);let x=()=>{let[e,r]=(0,h.useState)(0),[t,s]=(0,h.useState)(v().header),[a,n]=(0,h.useState)(!1),o=["This is the most important thing in the world!","Feel free to contact us at the footer below!","Welcome to the bluechip99 website!"];return(0,h.useEffect)(()=>{let e=window.pageYOffset,r=function(e,r){let t;return function(...r){let i=this;clearTimeout(t),t=setTimeout(()=>e.apply(i,r),50)}}(()=>{let r=window.pageYOffset;r>e?(n(!1),s(`${v().header} ${v().hidden}`)):(n(!0),s(v().header)),e=r},0);return window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)}},[a]),(0,h.useEffect)(()=>{let e=document.querySelector(`.${v().marquee}`);if(e){let r=e.scrollWidth;e.style.animationDuration=`${r/100}s`}let t=()=>{r(e=>(e+1)%o.length)};return e&&e.addEventListener("animationiteration",t),()=>{e&&e.removeEventListener("animationiteration",t)}},[o.length]),i.jsx("header",{className:t,children:(0,i.jsxs)("nav",{className:v().mainNav,children:[i.jsx(c(),{href:"/",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(u(),{src:"/images/logo.webp",alt:"Logo",width:200,height:50,className:v().logo})})}),i.jsx("div",{className:v().marqueeContainer,children:(0,i.jsxs)("div",{className:v().marquee,children:[i.jsx("p",{children:o[e]})," "]})})]})})};var f=t(7033),j=t.n(f);let _=m().memo(()=>(0,i.jsxs)("footer",{className:j().footer,children:[i.jsx("p",{children:"\xa9 2024 bluechip99 MANAGEMENT LLC. All rights reserved."}),(0,i.jsxs)("nav",{className:j().nav,children:[i.jsx(c(),{href:"/privacy-policy",children:"Privacy Policy"}),i.jsx(c(),{href:"/terms-of-service",children:"Terms of Service"}),i.jsx(c(),{href:"/about",children:"About"}),i.jsx(c(),{href:"/contact",children:"Contact"})]})]}));function w({Component:e,pageProps:r}){return(0,i.jsxs)("div",{className:"parent-container",children:[i.jsx(a(),{children:i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),i.jsx(x,{}),i.jsx(e,{...r}),i.jsx(_,{})]})}w.propTypes={Component:o().elementType.isRequired,pageProps:o().object.isRequired};let q=w},108:()=>{},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[117,61],()=>t(5214));module.exports=i})();