(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7033:e=>{e.exports={footer:"Footer_footer__JiI2X",nav:"Footer_nav__xIGvo"}},3129:e=>{e.exports={header:"Header_header__5X5wX",hidden:"Header_hidden__Q2yHz",marqueeContainer:"Header_marqueeContainer__V2TNN",marquee:"Header_marquee__zkoB1",mainNav:"Header_mainNav__6bCt2",logo:"Header_logo__WbVCI"}},8826:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>p,default:()=>d,getServerSideProps:()=>h,getStaticPaths:()=>u,getStaticProps:()=>c,reportWebVitals:()=>f,routeModule:()=>j,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>g,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>m});var i=r(7093),s=r(5244),n=r(1323),o=r(5949),a=r(5214),l=r(6971);let d=(0,n.l)(l,"default"),c=(0,n.l)(l,"getStaticProps"),u=(0,n.l)(l,"getStaticPaths"),h=(0,n.l)(l,"getServerSideProps"),p=(0,n.l)(l,"config"),f=(0,n.l)(l,"reportWebVitals"),m=(0,n.l)(l,"unstable_getStaticProps"),x=(0,n.l)(l,"unstable_getStaticPaths"),g=(0,n.l)(l,"unstable_getStaticParams"),v=(0,n.l)(l,"unstable_getServerProps"),_=(0,n.l)(l,"unstable_getServerSideProps"),j=new i.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:a.default,Document:o.default},userland:l})},6971:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let i=r(167),s=r(997),n=i._(r(6689)),o=i._(r(7828)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends n.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||a[e]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:d.error,children:[(0,s.jsx)(o.default,{children:(0,s.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:d.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,s.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,s.jsx)("div",{style:d.wrap,children:(0,s.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=l,c.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5214:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var i=r(997);let s=require("next/head");var n=r.n(s),o=r(580),a=r.n(o);r(108);var l=r(1664),d=r.n(l),c=r(5675),u=r.n(c),h=r(6689),p=r.n(h),f=r(3129),m=r.n(f);let x=()=>{let[e,t]=(0,h.useState)(0),[r,s]=(0,h.useState)(m().header),[n,o]=(0,h.useState)(!1),a=["This is the most important thing in the world!","Feel free to contact us at the footer below!","Welcome to the bluechip99 website!"];return(0,h.useEffect)(()=>{let e=window.pageYOffset,t=function(e,t){let r;return function(...t){let i=this;clearTimeout(r),r=setTimeout(()=>e.apply(i,t),50)}}(()=>{let t=window.pageYOffset;t>e?(o(!1),s(`${m().header} ${m().hidden}`)):(o(!0),s(m().header)),e=t},0);return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[n]),(0,h.useEffect)(()=>{let e=document.querySelector(`.${m().marquee}`);if(e){let t=e.scrollWidth;e.style.animationDuration=`${t/100}s`}let r=()=>{t(e=>(e+1)%a.length)};return e&&e.addEventListener("animationiteration",r),()=>{e&&e.removeEventListener("animationiteration",r)}},[a.length]),i.jsx("header",{className:r,children:(0,i.jsxs)("nav",{className:m().mainNav,children:[i.jsx(d(),{href:"/",legacyBehavior:!0,children:i.jsx("a",{children:i.jsx(u(),{src:"/images/logo.webp",alt:"Logo",width:200,height:50,className:m().logo})})}),i.jsx("div",{className:m().marqueeContainer,children:(0,i.jsxs)("div",{className:m().marquee,children:[i.jsx("p",{children:a[e]})," "]})})]})})};var g=r(7033),v=r.n(g);let _=p().memo(()=>(0,i.jsxs)("footer",{className:v().footer,children:[i.jsx("p",{children:"\xa9 2024 bluechip99 MANAGEMENT LLC. All rights reserved."}),(0,i.jsxs)("nav",{className:v().nav,children:[i.jsx(d(),{href:"/privacy-policy",children:"Privacy Policy"}),i.jsx(d(),{href:"/terms-of-service",children:"Terms of Service"}),i.jsx(d(),{href:"/about",children:"About"}),i.jsx(d(),{href:"/contact",children:"Contact"})]})]}));function j({Component:e,pageProps:t}){return(0,i.jsxs)("div",{className:"parent-container",children:[i.jsx(n(),{children:i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),i.jsx(x,{}),i.jsx(e,{...t}),i.jsx(_,{})]})}j.propTypes={Component:a().elementType.isRequired,pageProps:a().object.isRequired};let b=j},5949:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(997),s=r(6859);function n(){return(0,i.jsxs)(s.Html,{children:[i.jsx(s.Head,{}),(0,i.jsxs)("body",{children:[i.jsx(s.Main,{}),i.jsx(s.NextScript,{})]})]})}},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[117,61,859],()=>r(8826));module.exports=i})();