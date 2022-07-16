"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5052],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(a),d=r,v=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(v,i(i({ref:e},s),{},{components:a})):n.createElement(v,i({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23039:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={slug:"tomcat",title:"[Java] Tomcat",sidebar_position:5},i=void 0,l={unversionedId:"Java/tomcat",id:"Java/tomcat",title:"[Java] Tomcat",description:"Tomcat \u670d\u52a1\u5668",source:"@site/docs/Java/tomcat.md",sourceDirName:"Java",slug:"/Java/tomcat",permalink:"/docs/Java/tomcat",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Java/tomcat.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"tomcat",title:"[Java] Tomcat",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"[Java] JavaEE\u89c4\u8303",permalink:"/docs/Java/JavaEE"},next:{title:"[Java] jdbc",permalink:"/docs/Java/jdbc"}},c=[{value:"Tomcat \u670d\u52a1\u5668",id:"tomcat-\u670d\u52a1\u5668",children:[],level:2},{value:"Tomcat \u4ecb\u7ecd",id:"tomcat-\u4ecb\u7ecd",children:[],level:2}],p={toc:c};function s(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tomcat-\u670d\u52a1\u5668"},"Tomcat \u670d\u52a1\u5668"),(0,r.kt)("p",null,"\u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u670d\u52a1\u5668, \u5f00\u6e90\u514d\u8d39"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8f7b\u91cf\u548c\u91cd\u91cf\u7ea7")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u91cd\u91cf\u7ea7\u662f\u5b9e\u73b0\u4e86\u5168\u90e8 JavaEE \u89c4\u8303, \u800c\u8f7b\u91cf\u7ea7\u7684 tomcat \u5b9e\u73b0\u4e86 jsp/servlet \u89c4\u8303"),(0,r.kt)("p",{parentName:"div"},"\u91cd\u91cf\u7ea7\u7684\u6709: weblogic, websphereAS, JBOSSAS"))),(0,r.kt)("h2",{id:"tomcat-\u4ecb\u7ecd"},"Tomcat \u4ecb\u7ecd"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tomcat \u76ee\u5f55\u7ed3\u6784")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mulu",src:a(86809).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8")),(0,r.kt)("p",null,"bin \u76ee\u5f55\u4e0b\nstartup.bat windows \u4e0b\u542f\u52a8\u6267\u884c\u6587\u4ef6\nstartup.sh linux \u4e0b\u542f\u52a8\u6267\u884c\u6587\u4ef6"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u505c\u6b62")),(0,r.kt)("p",null,"shutdown.bat windows \u4e0b\u5173\u95ed\u6267\u884c\u6587\u4ef6\nshutdown.sh linux \u4e0b\u5173\u95ed\u6267\u884c\u6587\u4ef6"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u95ee\u9898")),(0,r.kt)("p",null,"\u542f\u52a8\u7a97\u53e3\u4e00\u95ea\u800c\u8fc7: \u6ca1\u6709\u914d\u7f6e jdk \u73af\u5883\u53d8\u91cf\njava.net.BindException: \u7aef\u53e3 8080 \u88ab\u5360\u7528"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u81ea\u5df1\u7684\u9879\u76ee")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 webapps \u76ee\u5f55\u4e0b\u521b\u5efa\u81ea\u5df1\u7684\u6587\u4ef6\u5939"),(0,r.kt)("li",{parentName:"ul"},"\u5c06\u8d44\u6e90\u653e\u81f3\u8be5\u76ee\u5f55\u91cc"),(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8 tomcat, \u8f93\u5165\u6b63\u786e\u8def\u5f84")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u89e3\u51b3\u63a7\u5236\u53f0\u4e71\u7801\u95ee\u9898")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"conf\u6587\u4ef6\u5939\u4e0b/logging.properties \u7f16\u8f91 java.util.logging.ConsoleHandler.encoding = gbk")))}s.isMDXComponent=!0},86809:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/mulu-5f22932e8f6c01620e8028341b1f6b3c.jpg"}}]);