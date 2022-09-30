"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,v=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61465:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={slug:"vue-virtual",title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-\u865a\u62dfDOM",sidebar_position:19},a=void 0,u={unversionedId:"interview/vue7",id:"interview/vue7",title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-\u865a\u62dfDOM",description:"Vue \u751f\u6210\u865a\u62df dom \u7684\u8fc7\u7a0b",source:"@site/docs/interview/vue7.md",sourceDirName:"interview",slug:"/interview/vue-virtual",permalink:"/docs/interview/vue-virtual",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/interview/vue7.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{slug:"vue-virtual",title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-\u865a\u62dfDOM",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-Vue\u54cd\u5e94\u5f0f\u539f\u7406",permalink:"/docs/interview/vue-res"},next:{title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-Vuex",permalink:"/docs/interview/vuex"}},l=[{value:"Vue \u751f\u6210\u865a\u62df dom \u7684\u8fc7\u7a0b",id:"vue-\u751f\u6210\u865a\u62df-dom-\u7684\u8fc7\u7a0b",children:[],level:2}],p={toc:l};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"vue-\u751f\u6210\u865a\u62df-dom-\u7684\u8fc7\u7a0b"},"Vue \u751f\u6210\u865a\u62df dom \u7684\u8fc7\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"virtual",src:r(72225).Z})),(0,i.kt)("p",null,"\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"Vue2.x"),"\u5f00\u59cb\u5185\u90e8\u4f7f\u7528\u7684\u865a\u62df",(0,i.kt)("inlineCode",{parentName:"p"},"DOM"),"\uff0c\u5c31\u662f\u6539\u9020\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Snabbdom"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Snabbdom"),"\u6e90\u7801\u5927\u7ea6 200 \u884c\u4f5c\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7\u6a21\u5757\u6765\u8fdb\u884c\u6269\u5c55\uff0c\u6240\u4ee5\u529f\u80fd\u6bd4\u8f83\u5f3a\u5927\u3002"),(0,i.kt)("p",null,"\u6e90\u7801\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\u5f00\u53d1\uff0c\u5b98\u65b9\u5ba3\u79f0\u662f\u6700\u5757\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Virtual Dom"),"\u4e4b\u4e00\u3002"))}c.isMDXComponent=!0},72225:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/virtual-e98224869762882b4a72a3d1f7297056.png"}}]);