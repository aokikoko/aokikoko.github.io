"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2557],{3905:(e,t,l)=>{l.d(t,{Zo:()=>o,kt:()=>k});var n=l(67294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function p(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):p(p({},t),e)),l},o=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=s(l),k=i,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return l?n.createElement(m,p(p({ref:t},o),{},{components:l})):n.createElement(m,p({ref:t},o))}));function k(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=l.length,p=new Array(a);p[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,p[1]=r;for(var s=2;s<a;s++)p[s]=l[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},83979:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>p,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=l(87462),i=(l(67294),l(3905));const a={title:"[Http] \u5927\u8bddHttp(\u4e0a)",sidebar_position:2},p=void 0,r={unversionedId:"Http/tcpip1",id:"Http/tcpip1",title:"[Http] \u5927\u8bddHttp(\u4e0a)",description:"TCP/IP \u534f\u8bae\u65cf\u53ca 4 \u5c42\u5206\u5c42",source:"@site/docs/Http/tcpip1.md",sourceDirName:"Http",slug:"/Http/tcpip1",permalink:"/docs/Http/tcpip1",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Http/tcpip1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"[Http] \u5927\u8bddHttp(\u4e0a)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[Http] Options\u8bf7\u6c42\u7684\u89e3\u91ca",permalink:"/docs/Http/OptionsRequest"},next:{title:"[Http] \u5927\u8bddHttp(\u4e2d)",permalink:"/docs/Http/tcpip2"}},c=[{value:"TCP/IP \u534f\u8bae\u65cf\u53ca 4 \u5c42\u5206\u5c42",id:"tcpip-\u534f\u8bae\u65cf\u53ca-4-\u5c42\u5206\u5c42",children:[],level:2},{value:"TCP/IP \u534f\u8bae\u65cf\u5206\u5c42",id:"tcpip-\u534f\u8bae\u65cf\u5206\u5c42",children:[{value:"\u5e94\u7528\u5c42",id:"\u5e94\u7528\u5c42",children:[],level:3},{value:"\u4f20\u8f93\u5c42",id:"\u4f20\u8f93\u5c42",children:[],level:3},{value:"\u7f51\u7edc\u5c42",id:"\u7f51\u7edc\u5c42",children:[],level:3},{value:"\u94fe\u8def\u5c42",id:"\u94fe\u8def\u5c42",children:[],level:3}],level:2},{value:"\u6570\u636e\u5305\u7684\u5c01\u88c5\u8fc7\u7a0b",id:"\u6570\u636e\u5305\u7684\u5c01\u88c5\u8fc7\u7a0b",children:[],level:2},{value:"\u4f20\u8f93\u5c42-tcp \u4e09\u6b21\u63e1\u624b",id:"\u4f20\u8f93\u5c42-tcp-\u4e09\u6b21\u63e1\u624b",children:[{value:"\u7b2c\u4e00\u6b21\u63e1\u624b",id:"\u7b2c\u4e00\u6b21\u63e1\u624b",children:[],level:3},{value:"\u7b2c\u4e8c\u6b21\u63e1\u624b",id:"\u7b2c\u4e8c\u6b21\u63e1\u624b",children:[],level:3},{value:"\u7b2c\u4e09\u6b21\u63e1\u624b",id:"\u7b2c\u4e09\u6b21\u63e1\u624b",children:[],level:3}],level:2},{value:"HTTP \u4e8b\u52a1\u5904\u7406\u8fc7\u7a0b",id:"http-\u4e8b\u52a1\u5904\u7406\u8fc7\u7a0b",children:[],level:2},{value:"HTTP \u534f\u8bae\u7279\u70b9",id:"http-\u534f\u8bae\u7279\u70b9",children:[{value:"\u652f\u6301\u5ba2\u6237/\u670d\u52a1\u5668\u6a21\u5f0f",id:"\u652f\u6301\u5ba2\u6237\u670d\u52a1\u5668\u6a21\u5f0f",children:[],level:3},{value:"\u7b80\u5355\u5feb\u901f",id:"\u7b80\u5355\u5feb\u901f",children:[],level:3},{value:"\u7075\u6d3b",id:"\u7075\u6d3b",children:[],level:3},{value:"\u65e0\u8fde\u63a5",id:"\u65e0\u8fde\u63a5",children:[],level:3},{value:"\u65e0\u72b6\u6001",id:"\u65e0\u72b6\u6001",children:[],level:3}],level:2},{value:"URI \u4e0e URL",id:"uri-\u4e0e-url",children:[{value:"\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u91cc\u8f93\u5165\u7684\u5730\u5740\u5e94\u8be5\u53eb<code>URL</code>\u8fd8\u662f<code>URI</code>?",id:"\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u91cc\u8f93\u5165\u7684\u5730\u5740\u5e94\u8be5\u53eburl\u8fd8\u662furi",children:[],level:4},{value:"URI",id:"uri",children:[],level:3},{value:"URL",id:"url",children:[],level:3}],level:2},{value:"HTTP \u62a5\u6587\u7ed3\u6784\u5206\u6790",id:"http-\u62a5\u6587\u7ed3\u6784\u5206\u6790",children:[{value:"HTTP \u62a5\u6587\u5934",id:"http-\u62a5\u6587\u5934",children:[{value:"\u901a\u7528\u62a5\u6587\u5934",id:"\u901a\u7528\u62a5\u6587\u5934",children:[],level:4},{value:"\u8bf7\u6c42\u62a5\u6587\u5934",id:"\u8bf7\u6c42\u62a5\u6587\u5934",children:[],level:4},{value:"\u54cd\u5e94\u62a5\u6587\u5934",id:"\u54cd\u5e94\u62a5\u6587\u5934",children:[],level:4},{value:"\u5b9e\u4f53\u62a5\u6587\u5934",id:"\u5b9e\u4f53\u62a5\u6587\u5934",children:[],level:4}],level:3}],level:2},{value:"HTTP \u8bf7\u6c42\u65b9\u6cd5\u5256\u6790",id:"http-\u8bf7\u6c42\u65b9\u6cd5\u5256\u6790",children:[{value:"head",id:"head",children:[],level:3},{value:"delete",id:"delete",children:[],level:3},{value:"options",id:"options",children:[],level:3},{value:"trace/connect",id:"traceconnect",children:[],level:3},{value:"connect",id:"connect",children:[],level:3}],level:2},{value:"\u72b6\u6001\u7801",id:"\u72b6\u6001\u7801",children:[{value:"\u5e38\u7528\u72b6\u6001\u7801",id:"\u5e38\u7528\u72b6\u6001\u7801",children:[],level:3}],level:2},{value:"\u72b6\u6001\u673a\u5236",id:"\u72b6\u6001\u673a\u5236",children:[{value:"Cookie",id:"cookie",children:[],level:3},{value:"Session",id:"session",children:[],level:3},{value:"\u4fdd\u5b58 session id \u7684\u65b9\u5f0f",id:"\u4fdd\u5b58-session-id-\u7684\u65b9\u5f0f",children:[],level:3},{value:"Session \u7684\u6709\u6548\u671f",id:"session-\u7684\u6709\u6548\u671f",children:[],level:3},{value:"Cookie \u4e0e session",id:"cookie-\u4e0e-session",children:[],level:3}],level:2}],s={toc:c};function o(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tcpip-\u534f\u8bae\u65cf\u53ca-4-\u5c42\u5206\u5c42"},"TCP/IP \u534f\u8bae\u65cf\u53ca 4 \u5c42\u5206\u5c42"),(0,i.kt)("p",null,"TCP/IP \u534f\u8bae\u5176\u5b9e\u662f\u4e00\u7cfb\u5217\u4e0e\u4e92\u8054\u7f51\u76f8\u5173\u8054\u7684\u534f\u8bae\u96c6\u5408\u8d77\u6765\u7684\u603b\u79f0, \u5206\u5c42\u7ba1\u7406\u662f TCP/IP \u534f\u8bae\u7684\u91cd\u8981\u7279\u5f81"),(0,i.kt)("h2",{id:"tcpip-\u534f\u8bae\u65cf\u5206\u5c42"},"TCP/IP \u534f\u8bae\u65cf\u5206\u5c42"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tcp",src:l(41036).Z})),(0,i.kt)("h3",{id:"\u5e94\u7528\u5c42"},"\u5e94\u7528\u5c42"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"yingyong",src:l(48620).Z})),(0,i.kt)("h3",{id:"\u4f20\u8f93\u5c42"},"\u4f20\u8f93\u5c42"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chuanshu",src:l(45574).Z})),(0,i.kt)("h3",{id:"\u7f51\u7edc\u5c42"},"\u7f51\u7edc\u5c42"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chuanshu",src:l(45574).Z})),(0,i.kt)("h3",{id:"\u94fe\u8def\u5c42"},"\u94fe\u8def\u5c42"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chuanshu",src:l(77473).Z})),(0,i.kt)("h2",{id:"\u6570\u636e\u5305\u7684\u5c01\u88c5\u8fc7\u7a0b"},"\u6570\u636e\u5305\u7684\u5c01\u88c5\u8fc7\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"fengbao",src:l(55891).Z})),(0,i.kt)("h2",{id:"\u4f20\u8f93\u5c42-tcp-\u4e09\u6b21\u63e1\u624b"},"\u4f20\u8f93\u5c42-tcp \u4e09\u6b21\u63e1\u624b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"woshou",src:l(78277).Z})),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u6b21\u63e1\u624b"},"\u7b2c\u4e00\u6b21\u63e1\u624b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"first",src:l(67051).Z})),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b21\u63e1\u624b"},"\u7b2c\u4e8c\u6b21\u63e1\u624b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"second",src:l(77002).Z})),(0,i.kt)("h3",{id:"\u7b2c\u4e09\u6b21\u63e1\u624b"},"\u7b2c\u4e09\u6b21\u63e1\u624b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"third",src:l(95984).Z})),(0,i.kt)("h2",{id:"http-\u4e8b\u52a1\u5904\u7406\u8fc7\u7a0b"},"HTTP \u4e8b\u52a1\u5904\u7406\u8fc7\u7a0b"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chuli",src:l(84601).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chulixiangxi",src:l(55188).Z})),(0,i.kt)("p",null,"\u4ee5 winshark \u6293\u5305\u67d0\u7f51\u7ad9\u5206\u6790\u4e09\u6b21\u63e1\u624b:"),(0,i.kt)("p",null,"\u9996\u5148\u901a\u8fc7 dns \u89e3\u6790\u627e\u5230 ip \u5730\u5740, \u63a5\u4e0b\u6765\u5ba2\u6237\u7aef\u7aef\u53e3\u5230 80 \u7aef\u53e3, \u4e5f\u5c31\u662f tcp \u4f20\u8f93\u5c42\u7684\u4e09\u6b21\u63e1\u624b, \u63a5\u4e0b\u6765\u8bbf\u95ee\u67d0 http \u8bf7\u6c42, \u5982\u679c\u4e0b\u6b21\u518d\u8bbf\u95ee\u53d1\u73b0\u90fd\u662f\u5f88\u5feb\u5173\u95ed\u518d\u6b21 3 \u6b21\u63e1\u624b\u518d\u6b21\u83b7\u53d6"),(0,i.kt)("h2",{id:"http-\u534f\u8bae\u7279\u70b9"},"HTTP \u534f\u8bae\u7279\u70b9"),(0,i.kt)("h3",{id:"\u652f\u6301\u5ba2\u6237\u670d\u52a1\u5668\u6a21\u5f0f"},"\u652f\u6301\u5ba2\u6237/\u670d\u52a1\u5668\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5ba2\u6237/\u670d\u52a1\u5668\u6a21\u5f0f\u5de5\u4f5c\u7684\u65b9\u5f0f\u662f\u7531\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u5668\u53d1\u51fa\u8bf7\u6c42, \u670d\u52a1\u5668\u7aef\u54cd\u5e94\u8bf7\u6c42, \u5e76\u8fdb\u884c\u76f8\u5e94\u670d\u52a1"),(0,i.kt)("h3",{id:"\u7b80\u5355\u5feb\u901f"},"\u7b80\u5355\u5feb\u901f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u670d\u52a1\u65f6, \u53ea\u9700\u4f20\u9001\u8bf7\u6c42\u65b9\u6cd5\u548c\u8def\u5f84"),(0,i.kt)("li",{parentName:"ul"},"\u7531\u4e8e HTTP \u534f\u8bae\u7b80\u5355, \u4f7f\u5f97 HTTP \u670d\u52a1\u5668\u7684\u7a0b\u5e8f\u89c4\u6a21\u5c0f, \u56e0\u800c\u901a\u4fe1\u901f\u5ea6\u5f88\u5feb")),(0,i.kt)("h3",{id:"\u7075\u6d3b"},"\u7075\u6d3b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HTTP \u5141\u8bb8\u4f20\u8f93\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u5bf9\u8c61")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6b63\u5728\u4f20\u8f93\u7684\u7c7b\u578b\u7531 Content-Type (Content-Type \u662f\u7531 HTTP \u5305\u4e2d\u7528\u6765\u8868\u793a\u5185\u5bb9\u7c7b\u578b\u7684\u6807\u8bc6)\u52a0\u4ee5\u6807\u8bb0"))),(0,i.kt)("h3",{id:"\u65e0\u8fde\u63a5"},"\u65e0\u8fde\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u65e0\u8fde\u63a5\u7684\u542b\u4e49\u662f\u9650\u5236\u6bcf\u6b21\u8fde\u63a5\u53ea\u5904\u7406\u4e00\u4e2a\u8bf7\u6c42"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5904\u7406\u5b8c\u5ba2\u6237\u7684\u8bf7\u6c42, \u5e76\u6536\u5230\u5ba2\u6237\u7684\u5e94\u7b54\u540e, \u5373\u65ad\u5f00\u8fde\u63a5"),(0,i.kt)("li",{parentName:"ul"},"\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u8282\u7701\u4f20\u8f93\u65f6\u95f4")),(0,i.kt)("h3",{id:"\u65e0\u72b6\u6001"},"\u65e0\u72b6\u6001"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP \u534f\u8bae\u662f\u65e0\u72b6\u6001\u534f\u8bae"),(0,i.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u662f\u6307\u534f\u8bae\u5bf9\u4e8e\u4e8b\u52a1\u5904\u7406\u6ca1\u6709\u8bb0\u5fc6\u80fd\u529b, \u7f3a\u5c11\u72b6\u6001\u610f\u5473\u7740\u5982\u679c\u540e\u7eed\u5904\u7406\u9700\u8981\u524d\u9762\u7684\u4fe1\u606f, \u5219\u5b83\u5fc5\u987b\u91cd\u4f20, \u8fd9\u6837\u53ef\u80fd\u5bfc\u81f4\u6bcf\u6b21\u8fde\u63a5\u4f20\u9001\u7684\u6570\u636e\u91cf\u589e\u5927"),(0,i.kt)("li",{parentName:"ul"},"\u53e6\u4e00\u65b9\u9762, \u5728\u670d\u52a1\u5668\u4e0d\u9700\u8981\u5148\u524d\u4fe1\u606f\u65f6\u5b83\u7684\u5e94\u7b54\u5c31\u8f83\u5feb")),(0,i.kt)("h2",{id:"uri-\u4e0e-url"},"URI \u4e0e URL"),(0,i.kt)("h4",{id:"\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u91cc\u8f93\u5165\u7684\u5730\u5740\u5e94\u8be5\u53eburl\u8fd8\u662furi"},"\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u5730\u5740\u680f\u91cc\u8f93\u5165\u7684\u5730\u5740\u5e94\u8be5\u53eb",(0,i.kt)("inlineCode",{parentName:"h4"},"URL"),"\u8fd8\u662f",(0,i.kt)("inlineCode",{parentName:"h4"},"URI"),"?"),(0,i.kt)("p",null,"\u7b54\u6848: URI = URL + URN \u6765\u81ea\u5b98\u65b9\u6807\u51c6\u6587\u6863"),(0,i.kt)("h3",{id:"uri"},"URI"),(0,i.kt)("p",null,"URI: \u4e00\u4e2a\u7d27\u51d1\u7684\u5b57\u7b26\u4e32\u7528\u6765\u6807\u793a\u62bd\u8c61\u6216\u7269\u7406\u8d44\u6e90"),(0,i.kt)("p",null,"URI \u53ef\u4ee5\u8fdb\u4e00\u6b65\u88ab\u5206\u4e3a\u5b9a\u4f4d\u7b26, \u540d\u5b57\u6216\u4e24\u8005\u90fd\u662f"),(0,i.kt)("p",null,'\u672f\u8bed"Uniform Resource Locator" (URL)\u662f URI \u7684\u5b50\u96c6, \u9664\u4e86\u786e\u5b9a\u4e00\u4e2a\u8d44\u6e90, \u8fd8\u63d0\u4f9b\u4e00\u79cd\u5b9a\u4f4d\u8be5\u8d44\u6e90\u7684\u4e3b\u8981\u8bbf\u95ee\u673a\u5236(\u5982\u5176\u7f51\u7edc"\u4f4d\u7f6e")'),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("p",null,"URI \u53ef\u4ee5\u5206\u4e3a URL, URN \u6216\u540c\u65f6\u5177\u5907 locators \u548c names \u7279\u6027\u7684\u4e00\u4e2a\u4e1c\u897f"),(0,i.kt)("p",null,"URN \u4f5c\u7528\u5c31\u597d\u50cf\u4e00\u4e2a\u4eba\u7684\u540d\u5b57, URL \u5c31\u50cf\u4e00\u4e2a\u4eba\u7684\u5730\u5740"),(0,i.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4: URN \u786e\u5b9a\u4e86\u4e1c\u897f\u7684\u8eab\u4efd, URL \u63d0\u4f9b\u4e86\u627e\u5230\u5b83\u7684\u65b9\u5f0f"),(0,i.kt)("p",null,'URI \u548c URL \u6700\u5927\u7684\u5dee\u522b\u662f"\u8bbf\u95ee\u673a\u5236"'),(0,i.kt)("p",null,"URN \u662f\u552f\u4e00\u6807\u8bc6\u7684\u4e00\u90e8\u5206, \u662f\u8eab\u4efd\u4fe1\u606f"),(0,i.kt)("h2",{id:"http-\u62a5\u6587\u7ed3\u6784\u5206\u6790"},"HTTP \u62a5\u6587\u7ed3\u6784\u5206\u6790"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"baowen",src:l(54469).Z})),(0,i.kt)("h3",{id:"http-\u62a5\u6587\u5934"},"HTTP \u62a5\u6587\u5934"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HTTP \u7684\u62a5\u6587\u5934\u5927\u4f53\u53ef\u4ee5\u5206\u4e3a\u56db\u7c7b, \u5206\u522b\u662f:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u901a\u7528\u62a5\u6587\u5934"),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u62a5\u6587\u5934"),(0,i.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u62a5\u6587\u5934"),(0,i.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u62a5\u6587\u5934"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HTTP/1.1 \u91cc\u4e00\u5171\u89c4\u8303\u4e86 47 \u79cd\u62a5\u6587\u5934\u5b57\u6bb5"))),(0,i.kt)("h4",{id:"\u901a\u7528\u62a5\u6587\u5934"},"\u901a\u7528\u62a5\u6587\u5934"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728\u8bf7\u6c42\u5934\u548c\u54cd\u5e94\u5934\u4e2d\u4f7f\u7528"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tongyong",src:l(18329).Z})),(0,i.kt)("h4",{id:"\u8bf7\u6c42\u62a5\u6587\u5934"},"\u8bf7\u6c42\u62a5\u6587\u5934"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"qingqiu",src:l(39434).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accept \u4f5c\u7528: \u6d4f\u89c8\u5668\u7aef\u53ef\u4ee5\u63a5\u53d7\u7684\u5a92\u4f53\u7c7b\u578b")),(0,i.kt)("p",null,"Accept: text/html \u4ee3\u8868\u6d4f\u89c8\u5668\u53ef\u4ee5\u63a5\u53d7\u670d\u52a1\u5668\u56de\u53d1\u7684\u7c7b\u578b\u4e3a text/html \u4e5f\u5c31\u662f\u6211\u4eec\u5e38\u8bf4\u7684 html \u6587\u6863, \u5982\u679c\u670d\u52a1\u5668\u65e0\u6cd5\u8fd4\u56de text/html \u7c7b\u578b\u7684\u6570\u636e, \u670d\u52a1\u5668\u5e94\u8be5\u8fd4\u56de\u4e00\u4e2a 406 \u9519\u8bef(Non Acceptable). \u73b0\u5728\u591a\u6570\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept: */*")," \u4ee3\u8868\u6d4f\u89c8\u5668\u53ef\u4ee5\u5904\u7406\u6240\u6709\u7c7b\u578b"),(0,i.kt)("p",null,"\u5982\u679c\u60f3\u8981\u7ed9\u663e\u793a\u7684\u5a92\u4f53\u7c7b\u578b\u589e\u52a0\u4f18\u5148\u7ea7, \u5219\u4f7f\u7528 q= \u6765\u989d\u5916\u8868\u793a\u6743\u91cd\u503c; \u91cd\u503c q \u7684\u8303\u56f4\u662f 0 - 1(\u53ef\u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u540e\u4e09\u4f4d), 1 \u4e3a\u6700\u5927\u503c, \u4e0d\u6307\u5b9a\u6743\u91cd q \u503c\u65f6, \u9ed8\u8ba4\u6743\u91cd\u4e3a q=1.0. \u5f53\u670d\u52a1\u5668\u63d0\u4f9b\u591a\u79cd\u5185\u5bb9\u65f6, \u5c06\u4f1a\u9996\u5148\u8fd4\u56de\u6743\u91cd\u503c\u6700\u9ad8\u7684\u5a92\u4f53\u7c7b\u578b."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accept-Encoding")),(0,i.kt)("p",null,"\u4f5c\u7528: \u6d4f\u89c8\u5668\u7533\u660e\u81ea\u5df1\u63a5\u6536\u7684\u7f16\u7801\u65b9\u6cd5, \u901a\u5e38\u6307\u5b9a\u538b\u7f29\u65b9\u6cd5, \u662f\u5426\u652f\u6301\u538b\u7f29, \u652f\u6301\u4ec0\u4e48\u538b\u7f29\u65b9\u6cd5(gzip, deflate)"),(0,i.kt)("p",null,"Accept-Encoding: gzip, deflate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Accept-Language")),(0,i.kt)("p",null,"\u4f5c\u7528: \u6d4f\u89c8\u5668\u7533\u660e\u81ea\u5df1\u63a5\u6536\u7684\u8bed\u8a00"),(0,i.kt)("p",null,"Accept-Language: zh-cn, zh; q=0.7, en-us, en;q=0.3"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u518d\u670d\u52a1\u5668\u6709\u4e2d\u6587\u7248\u8d44\u6e90\u7684\u60c5\u51b5\u4e0b, \u4f1a\u8bf7\u6c42\u5176\u8fd4\u56de\u4e2d\u6587\u7248\u5bf9\u5e94\u7684\u76f8\u5e94, \u6ca1\u6709\u4e2d\u6587\u7248\u65f6, \u5219\u8bf7\u6c42\u8fd4\u56de\u82f1\u6587\u7248\u54cd\u5e94"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Connection")),(0,i.kt)("p",null,"Connention: keep-alive \u5f53\u4e00\u4e2a\u7f51\u9875\u6253\u5f00\u5b8c\u6210\u540e, \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7528\u4e8e\u4f20\u8f93 HTTP \u6570\u636e\u7684 TCP \u8fde\u63a5\u4e0d\u4f1a\u5173\u95ed, \u5982\u679c\u5ba2\u6237\u7aef\u518d\u6b21\u8bbf\u95ee\u8fd9\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u7f51\u9875, \u4f1a\u7ee7\u7eed\u4f7f\u7528\u8fd9\u4e00\u6761\u5df2\u7ecf\u5efa\u7acb\u7684\u8fde\u63a5. \u8282\u7701 3 \u6b21\u63e1\u624b\u7684\u6d6a\u8d39"),(0,i.kt)("p",null,"Connention: close \u4ee3\u8868\u4e00\u4e2a Request \u5b8c\u6210\u540e, \u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7528\u4e8e\u4f20\u8f93 HTTP \u6570\u636e\u7684 TCP \u8fde\u63a5\u4f1a\u5173\u95ed, \u5f53\u5ba2\u6237\u7aef\u518d\u6b21\u53d1\u9001 Request, \u9700\u8981\u91cd\u65b0\u5efa\u7acb Tcp \u8fde\u63a5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host")),(0,i.kt)("p",null,"\u4f5c\u7528: \u8bf7\u6c42\u62a5\u5934\u57df\u4e3b\u8981\u7528\u4e8e\u6307\u5b9a\u88ab\u8bf7\u6c42\u8d44\u6e90\u7684 Internet \u4e3b\u673a\u548c\u7aef\u53e3\u53f7, \u5b83\u901a\u5e38\u4ece HTTP URL \u4e2d\u63d0\u53d6\u51fa\u6765\u7684"),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165: ",(0,i.kt)("a",{parentName:"p",href:"http://www.xxx.com:8080"},"http://www.xxx.com:8080")),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u53d1\u9001\u7684\u8bf7\u6c42\u6d88\u606f\u4e2d, \u5c31\u4f1a\u5305\u542b Host \u8bf7\u6c42\u62a5\u5934\u57df, \u5982\u4e0b: Host: ",(0,i.kt)("a",{parentName:"p",href:"http://www.xxx.com:8080"},"www.xxx.com:8080")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Referer")),(0,i.kt)("p",null,"\u5f53\u6d4f\u89c8\u5668\u5411 web \u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u7684\u65f6\u5019, \u4e00\u822c\u4f1a\u5e26\u4e0a Referer, \u544a\u8bc9\u670d\u52a1\u5668\u6211\u662f\u4ece\u54ea\u4e2a\u9875\u9762\u94fe\u63a5\u8fc7\u6765\u7684, \u670d\u52a1\u5668\u7c4d\u6b64\u53ef\u4ee5\u83b7\u5f97\u4e00\u4e9b\u4fe1\u606f\u7528\u4e8e\u5904\u7406"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"User-Agent")),(0,i.kt)("p",null,"\u4f5c\u7528: \u544a\u8bc9 HTTP \u670d\u52a1\u5668, \u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u548c\u6d4f\u89c8\u5668\u7684\u540d\u79f0\u548c\u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Content-Type")),(0,i.kt)("p",null,"\u4f5c\u7528: \u8bf4\u660e\u4e86\u62a5\u6587\u4f53\u5185\u5bf9\u8c61\u7684\u5a92\u4f53\u7c7b\u578b"),(0,i.kt)("p",null,"text/html"),(0,i.kt)("p",null,"image/xxx"),(0,i.kt)("p",null,"application/xxx"),(0,i.kt)("h4",{id:"\u54cd\u5e94\u62a5\u6587\u5934"},"\u54cd\u5e94\u62a5\u6587\u5934"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"xiangying",src:l(88871).Z})),(0,i.kt)("h4",{id:"\u5b9e\u4f53\u62a5\u6587\u5934"},"\u5b9e\u4f53\u62a5\u6587\u5934"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"shiti",src:l(2078).Z})),(0,i.kt)("h2",{id:"http-\u8bf7\u6c42\u65b9\u6cd5\u5256\u6790"},"HTTP \u8bf7\u6c42\u65b9\u6cd5\u5256\u6790"),(0,i.kt)("p",null,"HTTP/1.1 \u5e38\u7528\u65b9\u6cd5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"get"),(0,i.kt)("li",{parentName:"ol"},"post"),(0,i.kt)("li",{parentName:"ol"},"put"),(0,i.kt)("li",{parentName:"ol"},"head"),(0,i.kt)("li",{parentName:"ol"},"delete"),(0,i.kt)("li",{parentName:"ol"},"options"),(0,i.kt)("li",{parentName:"ol"},"trace"),(0,i.kt)("li",{parentName:"ol"},"connect")),(0,i.kt)("h3",{id:"head"},"head"),(0,i.kt)("p",null,"\u7c7b\u4f3c\u4e8e get \u8bf7\u6c42, \u53ea\u4e0d\u8fc7\u8fd4\u56de\u7684\u54cd\u5e94\u4e2d\u6ca1\u6709\u5177\u4f53\u7684\u5185\u5bb9, \u7528\u4e8e\u83b7\u53d6\u62a5\u5934"),(0,i.kt)("p",null,"\u591a\u7528\u6765\u6d4b\u8bd5\u8fde\u63a5\u80fd\u4e0d\u80fd\u8bbf\u95ee, \u6700\u8fd1\u662f\u5426\u6709\u66f4\u65b0"),(0,i.kt)("h3",{id:"delete"},"delete"),(0,i.kt)("p",null,"\u8bf7\u6c42\u670d\u52a1\u5668\u5220\u9664\u6307\u5b9a\u7684\u8d44\u6e90"),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"\u7528\u6765\u67e5\u8be2\u9488\u5bf9\u8bf7\u6c42 URI \u6307\u5b9a\u7684\u8d44\u6e90\u652f\u6301\u7684\u65b9\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"options",src:l(67330).Z})),(0,i.kt)("h3",{id:"traceconnect"},"trace/connect"),(0,i.kt)("p",null,"\u56de\u663e\u670d\u52a1\u5668\u6536\u5230\u7684\u8bf7\u6c42, \u4e3b\u8981\u7528\u4e8e\u6d4b\u8bd5\u6216\u8bca\u65ad"),(0,i.kt)("h3",{id:"connect"},"connect"),(0,i.kt)("p",null,"\u5f00\u542f\u4e00\u4e2a\u5ba2\u6237\u7aef\u4e0e\u6240\u8bf7\u6c42\u8d44\u6e90\u4e4b\u95f4\u7684\u53cc\u5411\u6c9f\u901a\u7684\u901a\u9053, \u5b83\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u96a7\u9053"),(0,i.kt)("h2",{id:"\u72b6\u6001\u7801"},"\u72b6\u6001\u7801"),(0,i.kt)("p",null,"\u662f\u7528\u4ee5\u8868\u793a\u7f51\u9875\u670d\u52a1\u5668\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae\u54cd\u5e94\u72b6\u6001\u7684 3 \u4f4d\u6570\u5b57\u4ee3\u7801"),(0,i.kt)("h3",{id:"\u5e38\u7528\u72b6\u6001\u7801"},"\u5e38\u7528\u72b6\u6001\u7801"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"200",src:l(71798).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"300",src:l(62434).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"400",src:l(98251).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"500",src:l(25175).Z})),(0,i.kt)("h2",{id:"\u72b6\u6001\u673a\u5236"},"\u72b6\u6001\u673a\u5236"),(0,i.kt)("h3",{id:"cookie"},"Cookie"),(0,i.kt)("p",null,"cookie \u5b9e\u9645\u4e0a\u662f\u4e00\u5c0f\u6bb5\u7684\u6587\u672c\u4fe1\u606f, \u5ba2\u6237\u7aef\u8bf7\u6c42\u670d\u52a1\u5668, \u5982\u679c\u670d\u52a1\u5668\u9700\u8981\u8bb0\u5f55\u8be5\u7528\u6237\u72b6\u6001, \u5c31\u5411\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u9881\u53d1\u4e00\u4e2a cookie, \u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u4f1a\u628a cookie \u4fdd\u5b58\u8d77\u6765, \u5f53\u6d4f\u89c8\u5668\u518d\u8bf7\u6c42\u8be5\u7f51\u7ad9\u65f6, \u6d4f\u89c8\u5668\u628a\u8bf7\u6c42\u7684\u7f51\u5740\u8fde\u540c\u8be5 cookie \u4e00\u540c\u63d0\u4ea4\u7ed9\u670d\u52a1\u5668, \u670d\u52a1\u5668\u68c0\u67e5\u8be5 cookie, \u4ee5\u6b64\u6765\u8fa8\u8ba4\u7528\u6237\u72b6\u6001"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cookie",src:l(20272).Z})),(0,i.kt)("h3",{id:"session"},"Session"),(0,i.kt)("p",null,"Session \u662f\u53e6\u4e00\u79cd\u8bb0\u5f55\u5ba2\u6237\u72b6\u6001\u7684\u673a\u5236, \u4fdd\u5b58\u5728\u670d\u52a1\u5668\u4e0a, \u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u8bbf\u95ee\u670d\u52a1\u5668\u7684\u65f6\u5019, \u670d\u52a1\u5668\u628a\u5ba2\u6237\u7aef\u4fe1\u606f\u4ee5\u67d0\u79cd\u5f62\u5f0f\u8bb0\u5f55\u5728\u670d\u52a1\u5668\u4e0a"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668\u518d\u6b21\u8bbf\u95ee\u65f6\u53ea\u9700\u8981\u4ece\u8be5 session \u4e2d\u67e5\u627e\u8be5\u5ba2\u6237\u7aef\u7684\u72b6\u6001\u5c31\u53ef\u4ee5\u4e86"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"session",src:l(96662).Z})),(0,i.kt)("h3",{id:"\u4fdd\u5b58-session-id-\u7684\u65b9\u5f0f"},"\u4fdd\u5b58 session id \u7684\u65b9\u5f0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cookie")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"url \u91cd\u5199"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u6bd4\u5982: http://../xxx;Sessionid=DFSJKJFKSJJSDFJKJLJL \u6216\u4f5c\u4e3a\u67e5\u8be2\u5b57\u7b26\u4e32 http://../xxx?Sessionid=DFSJKJFKSJJSDFJKJLJL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9690\u85cf\u8868\u5355"))),(0,i.kt)("h3",{id:"session-\u7684\u6709\u6548\u671f"},"Session \u7684\u6709\u6548\u671f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Session \u8d85\u65f6\u5931\u6548")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8c03\u7528 HttpSession.invalidate()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u670d\u52a1\u5668\u8fdb\u7a0b\u88ab\u7ec8\u6b62"))),(0,i.kt)("h3",{id:"cookie-\u4e0e-session"},"Cookie \u4e0e session"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b58\u653e\u4f4d\u7f6e\u4e0d\u540c"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cookie \u4fdd\u5b58\u5728\u5ba2\u6237\u7aef, session \u4fdd\u5b58\u5728\u670d\u52a1\u7aef"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u5168\u6027(\u9690\u79c1\u7b56\u7565)\u4e0d\u540c"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cookie \u4fdd\u5b58\u5728\u6d4f\u89c8\u5668, \u5ba2\u6237\u7aef\u53ef\u89c1, \u5bb9\u6613\u88ab\u7be1\u6539"),(0,i.kt)("li",{parentName:"ul"},"session \u5b58\u50a8\u5728\u670d\u52a1\u5668\u4e0a, \u5bf9\u5ba2\u6237\u7aef\u6765\u8bf4\u900f\u660e, \u4e0d\u4f1a\u6cc4\u9732\u654f\u611f\u4fe1\u606f"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6709\u6548\u671f\u4e0d\u540c"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"cookie \u53ef\u957f\u65f6\u95f4"),(0,i.kt)("li",{parentName:"ul"},"session \u5728\u670d\u52a1\u5668\u7aef\u9700\u8981\u5b9a\u65f6\u6e05\u7406")))))}o.isMDXComponent=!0},71798:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/200-e21fc5a6c417e3968cf4edc3f8f66872.JPG"},62434:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/300-fcebd1421c59e1af6191bfe618dbf5dc.JPG"},78277:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/3ci-8fda712d80b78b62b44bbcbd802f32e5.JPG"},98251:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/400-8537f0fa522e53dbec5e9a6a5d7f3d2d.JPG"},25175:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/500-ded0f9a3cec60a51ef6fc6c56e633f13.JPG"},54469:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/baowen-6f65f65fe9058ba28c9a7b2b47124a76.JPG"},45574:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/chuanshu-1b9a0fd01ac0bbc06989670f89a6b0af.JPG"},84601:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/chuli-426e1488925c9039355a462908cc8dde.JPG"},55188:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/chulixiangxi-528047c38b92eeec329d9ea10ab35f53.JPG"},20272:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/cookie-88ed4e5ea5d687b442af8ed13a79fd99.JPG"},55891:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/fengbao-981a644c031a12340d0fb227bb98b0d4.JPG"},67051:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/first-295983bca101ace54db1831322cccfb1.JPG"},77473:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/lianlu-8aa0c64e45fde826a72fb32eab833766.JPG"},67330:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/options-83ceb7c86ec2376a24a98c80de0450cf.JPG"},39434:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/qingqiu-df356355c429a9d3d427c2117989c829.JPG"},77002:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/second-baee3a9ef998a299358d4996b2bf5046.JPG"},96662:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/session-ac118a869deda365c949a96f7ea75795.JPG"},2078:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/shiti-4319215f85dd4905b8e4a45b8fa0e96f.JPG"},41036:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/tcp-e25d1b500e2afe990fd736e2630b2170.JPG"},95984:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/third-53e333b742c6176112cea03485183ed0.JPG"},18329:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/tongyong-49c99fc4ac918e90089e3329a25787a8.JPG"},88871:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/xiangying-0b1b031c1e809eaba8bbcb644a359129.JPG"},48620:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/yingyong-accd6bb1a318d3ede627eb211f63d4a9.JPG"}}]);