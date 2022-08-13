"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),v=a,b=u["".concat(l,".").concat(v)]||u[v]||p[v]||i;return r?n.createElement(b,o(o({ref:t},d),{},{components:r})):n.createElement(b,o({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},27374:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={slug:"jdbc",title:"[Java] jdbc",sidebar_position:6},o=void 0,c={unversionedId:"Java/jdbc",id:"Java/jdbc",title:"[Java] jdbc",description:"JDBC\u6982\u5ff5",source:"@site/docs/Java/jdbc.md",sourceDirName:"Java",slug:"/Java/jdbc",permalink:"/docs/Java/jdbc",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Java/jdbc.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{slug:"jdbc",title:"[Java] jdbc",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"[Java] Tomcat",permalink:"/docs/Java/tomcat"},next:{title:"[Java] \u9762\u5411\u5bf9\u8c61",permalink:"/docs/Java/oop"}},l=[{value:"JDBC\u6982\u5ff5",id:"jdbc\u6982\u5ff5",children:[],level:2},{value:"JDBC\u529f\u80fd\u7c7b\u8be6\u89e3",id:"jdbc\u529f\u80fd\u7c7b\u8be6\u89e3",children:[{value:"DriverManager",id:"drivermanager",children:[],level:3},{value:"Connection",id:"connection",children:[],level:3},{value:"Statement",id:"statement",children:[],level:3},{value:"ResultSet",id:"resultset",children:[],level:3}],level:2}],s={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"jdbc\u6982\u5ff5"},"JDBC\u6982\u5ff5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JDBC (Java database Connectivity java \u6570\u636e\u5e93\u8fde\u63a5) \u662f\u4e00\u79cd\u7528\u4e8e\u6267\u884c SQL \u8bed\u53e5\u7684 Java API, \u53ef\u4ee5\u4e3a\u591a\u79cd\u5173\u7cfb\u578b\u6570\u636e\u5e93\u63d0\u4f9b\u7edf\u4e00\u8bbf\u95ee, \u5b83\u662f\u7531\u4e00\u7ec4\u7528 Java \u8bed\u8a00\u7f16\u5199\u7684\u7c7b\u548c\u63a5\u53e3\u7ec4\u6210\u7684")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u672c\u8d28: \u5c31\u662f java \u5b98\u65b9\u63d0\u4f9b\u7684\u4e00\u5957\u89c4\u8303(\u63a5\u53e3), \u7528\u4e8e\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u5b9e\u73b0\u4e0d\u540c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u8fde\u63a5"))),(0,a.kt)("h2",{id:"jdbc\u529f\u80fd\u7c7b\u8be6\u89e3"},"JDBC\u529f\u80fd\u7c7b\u8be6\u89e3"),(0,a.kt)("h3",{id:"drivermanager"},"DriverManager"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DriverManager\u9a71\u52a8\u7ba1\u7406\u5bf9\u8c61")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dm",src:r(9279).Z})),(0,a.kt)("h3",{id:"connection"},"Connection"),(0,a.kt)("h3",{id:"statement"},"Statement"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sta",src:r(86293).Z})),(0,a.kt)("h3",{id:"resultset"},"ResultSet"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"resset",src:r(89549).Z})))}d.isMDXComponent=!0},9279:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dm-ed12acc6c11997c82dde0aead7e89c54.jpg"},89549:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resset-67efba1e574c02c853270ae73c726c8b.jpg"},86293:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sta-57cb65307ed836bb7f36dd183be17329.jpg"}}]);