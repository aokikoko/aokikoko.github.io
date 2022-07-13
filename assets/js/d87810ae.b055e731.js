"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5302],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=c(a),m=n,d=v["".concat(p,".").concat(m)]||v[m]||s[m]||l;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}v.displayName="MDXCreateElement"},99595:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={slug:"JavaEE",title:"[Java] JavaEE\u89c4\u8303",sidebar_position:4},i=void 0,o={unversionedId:"Java/ee",id:"Java/ee",title:"[Java] JavaEE\u89c4\u8303",description:"JavaEE \u89c4\u8303",source:"@site/docs/Java/ee.md",sourceDirName:"Java",slug:"/Java/JavaEE",permalink:"/docs/Java/JavaEE",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Java/ee.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"JavaEE",title:"[Java] JavaEE\u89c4\u8303",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"[Java] \u591a\u7ebf\u7a0b",permalink:"/docs/Java/thread"},next:{title:"[Java] Tomcat",permalink:"/docs/Java/tomcat"}},p=[{value:"JavaEE \u89c4\u8303",id:"javaee-\u89c4\u8303",children:[],level:2},{value:"\u7cfb\u7edf\u67b6\u6784",id:"\u7cfb\u7edf\u67b6\u6784",children:[{value:"CS \u7ed3\u6784",id:"cs-\u7ed3\u6784",children:[],level:3},{value:"BS \u7ed3\u6784",id:"bs-\u7ed3\u6784",children:[],level:3}],level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"javaee-\u89c4\u8303"},"JavaEE \u89c4\u8303"),(0,n.kt)("p",null,"JavaEE(Java Enterprise Edition): Java \u4f01\u4e1a\u7248"),(0,n.kt)("p",null,"\u5b83\u662f\u7531 SUN \u516c\u53f8\u9886\u5bfc, \u5404\u4e2a\u5382\u5bb6\u5171\u540c\u5236\u5b9a\u5e76\u5f97\u5230\u5e7f\u6cdb\u8ba4\u53ef\u7684\u5de5\u4e1a\u6807\u51c6."),(0,n.kt)("p",null,"JavaEE \u65e9\u671f\u53eb\u505a J2EE, J2EE \u7684\u7248\u672c\u4ece 1.0 \u5f00\u59cb\u5230 1.4 \u7ed3\u675f, \u800c JavaEE \u7248\u672c\u662f\u4ece JavaEE 5 \u7248\u672c\u5f00\u59cb"),(0,n.kt)("p",null,"JavaEE \u89c4\u8303\u662f\u5f88\u591a Java \u5f00\u53d1\u6280\u672f\u7684\u603b\u79f0, \u8fd9\u4e9b\u6280\u672f\u89c4\u8303\u90fd\u662f\u6cbf\u7528\u81ea J2EE \u7684, \u4e00\u5171\u5305\u62ec\u4e86 13 \u4e2a\u6280\u672f\u89c4\u8303: JDBC, JNDI, EJB, RMI, IDL/CORBA, JSP, Servlet, XML, JMS, JTA, JTS, JavaMail, JAF"),(0,n.kt)("h2",{id:"\u7cfb\u7edf\u67b6\u6784"},"\u7cfb\u7edf\u67b6\u6784"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u57fa\u7840\u7ed3\u6784\u5212\u5206"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CS \u7ed3\u6784"),(0,n.kt)("li",{parentName:"ul"},"BS \u7ed3\u6784"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6280\u672f\u9009\u578b\u5212\u5206"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Model \u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"MVC \u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u4e09\u5c42\u67b6\u6784 + MVC \u6a21\u578b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u90e8\u7f72\u65b9\u5f0f\u5212\u5206"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4f53\u5316\u7ed3\u6784"),(0,n.kt)("li",{parentName:"ul"},"\u5782\u76f4\u62c6\u5206\u7ed3\u6784"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u7ed3\u6784"),(0,n.kt)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u7ed3\u6784")))),(0,n.kt)("h3",{id:"cs-\u7ed3\u6784"},"CS \u7ed3\u6784"),(0,n.kt)("p",null,"Client Server \u5ba2\u6237\u7aef + \u670d\u52a1\u5668\u7684\u65b9\u5f0f"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cs",src:a(43827).Z})),(0,n.kt)("h3",{id:"bs-\u7ed3\u6784"},"BS \u7ed3\u6784"),(0,n.kt)("p",null,"Browser Server \u6d4f\u89c8\u5668 + \u670d\u52a1\u5668\u7684\u65b9\u5f0f"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bs",src:a(76642).Z})))}u.isMDXComponent=!0},76642:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bs-8094d7ecfac3534d9224089f9e648bba.jpg"},43827:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cs-d432fdd960f5ecd3a3e93870b8b78f1c.jpg"}}]);