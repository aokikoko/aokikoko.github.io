"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=l,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83357:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"[Mysql] \u591a\u8868\u64cd\u4f5c",sidebar_position:12},i=void 0,o={unversionedId:"DataBase/ddl",id:"DataBase/ddl",title:"[Mysql] \u591a\u8868\u64cd\u4f5c",description:"\u591a\u8868\u64cd\u4f5c",source:"@site/docs/DataBase/ddl.md",sourceDirName:"DataBase",slug:"/DataBase/ddl",permalink:"/docs/DataBase/ddl",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/DataBase/ddl.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"[Mysql] \u591a\u8868\u64cd\u4f5c",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"[Mysql] \u4f01\u4e1a\u67b6\u6784\u7f13\u5b58\u4e2d\u95f4\u4ef6\u5206\u5e03\u5f0fRedis",permalink:"/docs/DataBase/redis"},next:{title:"[DevOps] \u666e\u7f57\u7c73\u4fee\u65af",permalink:"/docs/DevOps/prometheus"}},c=[{value:"\u591a\u8868\u64cd\u4f5c",id:"\u591a\u8868\u64cd\u4f5c",children:[{value:"\u4e00\u5bf9\u4e00",id:"\u4e00\u5bf9\u4e00",children:[],level:3},{value:"\u4e00\u5bf9\u591a",id:"\u4e00\u5bf9\u591a",children:[],level:3},{value:"\u591a\u5bf9\u591a",id:"\u591a\u5bf9\u591a",children:[],level:3}],level:2},{value:"\u591a\u8868\u67e5\u8be2",id:"\u591a\u8868\u67e5\u8be2",children:[{value:"\u591a\u8868\u67e5\u8be2\u5206\u7c7b",id:"\u591a\u8868\u67e5\u8be2\u5206\u7c7b",children:[],level:3},{value:"1.\u5185\u8fde\u63a5\u67e5\u8be2",id:"1\u5185\u8fde\u63a5\u67e5\u8be2",children:[],level:3}],level:2}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u591a\u8868\u64cd\u4f5c"},"\u591a\u8868\u64cd\u4f5c"),(0,l.kt)("h3",{id:"\u4e00\u5bf9\u4e00"},"\u4e00\u5bf9\u4e00"),(0,l.kt)("p",null,"\u9002\u7528\u573a\u666f: \u4eba\u548c\u8eab\u4efd\u8bc1. \u4e00\u4e2a\u4eba\u53ea\u6709\u4e00\u4e2a\u8eab\u4efd\u8bc1, \u4e00\u4e2a\u8eab\u4efd\u8bc1\u5bf9\u5e94\u4e00\u4e2a\u4eba"),(0,l.kt)("p",null,"\u5efa\u8868\u539f\u5219: \u5728\u4efb\u610f\u4e00\u4e2a\u8868\u5efa\u7acb\u5916\u952e, \u53bb\u5173\u8054\u53e6\u5916\u4e00\u4e2a\u8868\u7684\u4e3b\u952e"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"yi",src:r(81146).Z})),(0,l.kt)("h3",{id:"\u4e00\u5bf9\u591a"},"\u4e00\u5bf9\u591a"),(0,l.kt)("p",null,"\u9002\u7528\u573a\u666f: \u7528\u6237\u548c\u8ba2\u5355, \u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u6709\u591a\u4e2a\u8ba2\u5355"),(0,l.kt)("p",null,"\u5546\u54c1\u5206\u7c7b\u548c\u5546\u54c1, \u4e00\u4e2a\u5206\u7c7b\u4e0b\u53ef\u4ee5\u6709\u591a\u4e2a\u5546\u54c1"),(0,l.kt)("p",null,"\u5efa\u8868\u539f\u5219: \u5728\u591a\u7684\u5730\u65b9, \u5efa\u7acb\u5916\u952e\u7ea6\u675f, \u6765\u5173\u8054\u4e00\u7684\u4e00\u65b9\u4e3b\u952e"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"yidui",src:r(45575).Z})),(0,l.kt)("h3",{id:"\u591a\u5bf9\u591a"},"\u591a\u5bf9\u591a"),(0,l.kt)("p",null,"\u9002\u7528\u573a\u666f: \u5b66\u751f\u548c\u8bfe\u7a0b, \u4e00\u4e2a\u5b66\u751f\u53ef\u4ee5\u9009\u62e9\u591a\u4e2a\u8bfe\u7a0b, \u4e00\u4e2a\u8bfe\u7a0b\u4e5f\u53ef\u4ee5\u88ab\u591a\u4e2a\u5b66\u751f\u9009\u62e9"),(0,l.kt)("p",null,"\u5efa\u8868\u539f\u5219: \u9700\u8981\u501f\u52a9\u7b2c\u4e09\u5f20\u4e2d\u95f4\u8868, \u4e2d\u95f4\u8868\u81f3\u5c11\u5305\u542b\u4e24\u4e2a\u5217, \u8fd9\u4e24\u4e2a\u5217\u4f5c\u4e3a\u4e2d\u95f4\u8868\u7684\u5916\u952e, \u5206\u522b\u5173\u8054\u4e24\u5f20\u8868\u7684\u4e3b\u952e"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"duo",src:r(83872).Z})),(0,l.kt)("h2",{id:"\u591a\u8868\u67e5\u8be2"},"\u591a\u8868\u67e5\u8be2"),(0,l.kt)("h3",{id:"\u591a\u8868\u67e5\u8be2\u5206\u7c7b"},"\u591a\u8868\u67e5\u8be2\u5206\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5185\u8fde\u63a5\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u8fde\u63a5\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5173\u8054\u67e5\u8be2")),(0,l.kt)("h3",{id:"1\u5185\u8fde\u63a5\u67e5\u8be2"},"1.\u5185\u8fde\u63a5\u67e5\u8be2"),(0,l.kt)("p",null,"\u7565"))}d.isMDXComponent=!0},83872:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/duo-9de45b4db3702189d9dec7310fd3b2e9.jpg"},81146:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/yi-c8cdc18f09cb46872245e66f16e6a579.jpg"},45575:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/yidui-e3a53033892ed6726cebe9bc42d72cf1.jpg"}}]);