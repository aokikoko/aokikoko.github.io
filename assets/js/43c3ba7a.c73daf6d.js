"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||k[m]||l;return n?a.createElement(g,p(p({ref:t},u),{},{components:n})):a.createElement(g,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35916:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],i={title:"[Nginx] \u4f01\u4e1a\u67b6\u6784\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861LB\u670d\u52a1\u5668",sidebar_position:11},o=void 0,s={unversionedId:"Nginx/lb",id:"Nginx/lb",title:"[Nginx] \u4f01\u4e1a\u67b6\u6784\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861LB\u670d\u52a1\u5668",description:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0",source:"@site/docs/Nginx/lb.md",sourceDirName:"Nginx",slug:"/Nginx/lb",permalink:"/docs/Nginx/lb",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Nginx/lb.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"[Nginx] \u4f01\u4e1a\u67b6\u6784\u9ad8\u53ef\u7528\u8d1f\u8f7d\u5747\u8861LB\u670d\u52a1\u5668",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"[Nginx] \u4f01\u4e1a\u67b6\u6784\u53cc\u70b9\u670d\u52a1\u5668HA-\u9ad8\u53ef\u7528",permalink:"/docs/Nginx/ha"},next:{title:"[Nginx] \u4f01\u4e1a\u67b6\u6784LB-\u8d1f\u8f7d\u5747\u8861\u4e4bLVS\u5b9e\u73b0",permalink:"/docs/Nginx/lvs"}},u=[{value:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0",id:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0",children:[],level:2},{value:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848",id:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848",children:[],level:2},{value:"\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u642d\u5efa",id:"\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u642d\u5efa",children:[{value:"1\u3001\u5f15\u5165\u8d1f\u8f7d\u5747\u8861\u6280\u672f",id:"1\u5f15\u5165\u8d1f\u8f7d\u5747\u8861\u6280\u672f",children:[],level:3},{value:"2\u3001\u8d1f\u8f7d\u5747\u8861\u5206\u7c7b",id:"2\u8d1f\u8f7d\u5747\u8861\u5206\u7c7b",children:[],level:3},{value:"3\u3001\u5e38\u89c1\u5b9e\u73b0\u65b9\u5f0f",id:"3\u5e38\u89c1\u5b9e\u73b0\u65b9\u5f0f",children:[],level:3},{value:"tip: \u4e09\u6b21\u63e1\u624b\u653b\u51fb",id:"tip-\u4e09\u6b21\u63e1\u624b\u653b\u51fb",children:[],level:3},{value:"4\u3001Nginx \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",id:"4nginx-\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e",children:[],level:3},{value:"5\u3001\u67e5\u770b\u786e\u8ba4\u8d1f\u8f7d\u5747\u8861",id:"5\u67e5\u770b\u786e\u8ba4\u8d1f\u8f7d\u5747\u8861",children:[],level:3},{value:"6\u3001\u8d1f\u8f7d\u5747\u8861\u540e\u83b7\u53d6\u5ba2\u6237\u7aef IP",id:"6\u8d1f\u8f7d\u5747\u8861\u540e\u83b7\u53d6\u5ba2\u6237\u7aef-ip",children:[],level:3},{value:"7\u3001upstream \u4e2d server \u7684\u5173\u952e\u5b57",id:"7upstream-\u4e2d-server-\u7684\u5173\u952e\u5b57",children:[],level:3},{value:"8\u3001session \u4e00\u81f4\u6027\u95ee\u9898",id:"8session-\u4e00\u81f4\u6027\u95ee\u9898",children:[],level:3},{value:"9\u3001Nginx \u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",id:"9nginx-\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5",children:[],level:3},{value:"10\u3001\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u9ad8\u53ef\u7528",id:"10\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u9ad8\u53ef\u7528",children:[],level:3}],level:2}],k={toc:u};function c(e){var t=e.components,i=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0"},"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0"),(0,l.kt)("p",null,"\u968f\u7740\u4e1a\u52a1\u91cf\u9aa4\u589e\uff0c\u4e4b\u524d\u5355\u70b9\u670d\u52a1\u5668\uff0c\u5df2\u7ecf\u4e0d\u80fd\u591f\u6ee1\u8db3\u4e1a\u52a1\u4f7f\u7528\u9700\u8981\u3002\u5982\u679c\u4e3b\u670d\u52a1\u5668\u5b95\u673a\uff0c\u5907\u670d\u52a1\u5668\u63d0\u4f9b\u670d\u52a1\uff0c\u56e0\u4e3a\u6d41\u91cf\u592a\u5927\uff0c\u5907\u4e5f\u5b95\u673a\u3002\u9700\u8981\u591a\u53f0\u670d\u52a1\u5668\uff0c\u540c\u65f6\u63d0\u4f9b\u670d\u52a1\u3002"),(0,l.kt)("h2",{id:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848"},"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa1",src:n(21406).Z})),(0,l.kt)("p",null,"\u4ee5\u4e0a\u67b6\u6784\u670d\u52a1\u5668\uff0c\u5df2\u7ecf\u4e0d\u80fd\u591f\u6ee1\u8db3\u4ee5\u4e0a\u63d0\u5230\u7684\u4e1a\u52a1\u9700\u6c42\u3002\u67b6\u6784\u53d1\u751f\u5982\u4e0b\u53d8\u5316"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa2",src:n(88081).Z})),(0,l.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u642d\u5efa"},"\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u642d\u5efa"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa3",src:n(64591).Z})),(0,l.kt)("h3",{id:"1\u5f15\u5165\u8d1f\u8f7d\u5747\u8861\u6280\u672f"},"1\u3001\u5f15\u5165\u8d1f\u8f7d\u5747\u8861\u6280\u672f"),(0,l.kt)("p",null,"\u8d1f\u8f7d\u5747\u8861\u6280\u672f \uff08load blance\uff09 \u662f\u4e00\u79cd\u6982\u5ff5 \u628a\u8d44\u6e90\u7684\u4f7f\u7528\u8fdb\u884c\u5e73\u5747\u5206\u914d\u3002"),(0,l.kt)("p",null,"\u8d1f\u8f7d\u5747\u8861\uff1a\u5206\u53d1\u6d41\u91cf\u3001\u8bf7\u6c42\u5230\u4e0d\u540c\u7684\u670d\u52a1\u5668\u3002\u4f7f\u6d41\u91cf\u5e73\u5747\u5206\u914d\uff08\u7406\u60f3\u7684\u72b6\u6001\u7684\uff09"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f5c\u7528\uff1a")),(0,l.kt)("p",null,"\u670d\u52a1\u5668\u5bb9\u707e \u6d41\u91cf\u5206\u53d1"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u4f5c\u7528\uff1a")),(0,l.kt)("p",null,"\u2460 \u6d41\u91cf\u5206\u53d1 \u8bf7\u6c42\u5e73\u5747 \u964d\u4f4e\u5355\u4f8b\u538b\u529b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5176\u4ed6\u4f5c\u7528\uff1a")),(0,l.kt)("p",null,"\u2461 \u5b89\u5168 \u9690\u85cf\u540e\u7aef\u771f\u5b9e\u670d\u52a1"),(0,l.kt)("p",null,"\u2462 \u5c4f\u853d\u975e\u6cd5\u8bf7\u6c42\uff08\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\uff09"),(0,l.kt)("h3",{id:"2\u8d1f\u8f7d\u5747\u8861\u5206\u7c7b"},"2\u3001\u8d1f\u8f7d\u5747\u8861\u5206\u7c7b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa4",src:n(96137).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1\uff09\u4e8c\u5c42\u8d1f\u8f7d\u5747\u8861\uff08mac\uff09")),(0,l.kt)("p",null,"\u6839\u636e OSI \u6a21\u578b\u5206\u7684\u4e8c\u5c42\u8fdb\u884c\u8d1f\u8f7d\uff0c\u4e00\u822c\u662f\u7528\u865a\u62df mac \u5730\u5740\u65b9\u5f0f\uff0c\u5916\u90e8\u5bf9\u865a\u62df MAC \u5730\u5740\u8bf7\u6c42\uff0c\u8d1f\u8f7d\u5747\u8861\u63a5\u6536\u540e\uff0c\u518d\u5206\u914d\u540e\u7aef\u5b9e\u9645\u7684 MAC \u5730\u5740\u54cd\u5e94"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2\uff09\u4e09\u5c42\u8d1f\u8f7d\u5747\u8861\uff08ip\uff09")),(0,l.kt)("p",null,"\u4e00\u822c\u91c7\u7528\u865a\u62df IP \u5730\u5740\u65b9\u5f0f\uff0c\u5916\u90e8\u5bf9\u865a\u62df\u7684 ip \u5730\u5740\u8bf7\u6c42\uff0c\u8d1f\u8f7d\u5747\u8861\u63a5\u6536\u540e\uff0c\u518d\u5206\u914d\u540e\u7aef\u5b9e\u9645\u7684 IP \u5730\u5740\u54cd\u5e94"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3\uff09\u56db\u5c42\u8d1f\u8f7d\u5747\u8861\uff08tcp\uff09")," \u4e5f\u79f0\u7f51\u7edc\u8fd0\u8f93\u5c42\u9762\u7684\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("p",null,"\u5728\u4e09\u5c42\u8d1f\u8f7d\u5747\u8861\u7684\u57fa\u7840\u4e0a\uff0c\u7528 ip+port \u63a5\u6536\u8bf7\u6c42\uff0c\u518d\u8f6c\u53d1\u5230\u5bf9\u5e94\u7684\u673a\u5668"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4\uff09\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\uff08http\uff09")," \u4e5f\u79f0\u667a\u80fd\u578b\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("p",null,"\u6839\u636e\u865a\u62df\u7684 url \u6216 IP\uff0c\u4e3b\u673a\u63a5\u6536\u8bf7\u6c42\uff0c\u518d\u8f6c\u5411\uff08\u53cd\u5411\u4ee3\u7406\uff09\u76f8\u5e94\u7684\u5904\u7406\u670d\u52a1\u5668"),(0,l.kt)("h3",{id:"3\u5e38\u89c1\u5b9e\u73b0\u65b9\u5f0f"},"3\u3001\u5e38\u89c1\u5b9e\u73b0\u65b9\u5f0f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b9e\u73b0\u65b9\u5f0f\u5206\u7c7b\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"\u2460 \u8f6f\u4ef6\u7ea7\u522b \u6027\u4ef7\u6bd4\u9ad8 \u53ef\u63a7\u6027\u5f3a"),(0,l.kt)("p",{parentName:"blockquote"},"\u2461 \u786c\u4ef6\u7ea7\u522b \u6027\u80fd\u597d \u4ef7\u683c\u9ad8 \u51e0\u4e07\u5230\u51e0\u5341\u4e07\u4e0d\u7b49")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u786c\u4ef6\u662f\u5b9e\u73b0\u65b9\u5f0f\uff1a")),(0,l.kt)("p",null,"F5 BIG-IP \u56db\u5c42\u548c\u4e03\u5c42"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8f6f\u4ef6\u5b9e\u73b0\u65b9\u5f0f\uff1a")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OSI \u5206\u5c42"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5b9e\u73b0\u65b9\u5f0f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e03\u5c42"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx\u3001HAProxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u56db\u5c42"),(0,l.kt)("td",{parentName:"tr",align:null},"LVS\u3001HAProxy\u3001Nginx\uff081.9 \u7248\u672c\u540e\uff09")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa5",src:n(76569).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56db\u5c42\u548c\u4e03\u5c42\u5bf9\u6bd4:")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa6",src:n(15093).Z})),(0,l.kt)("h3",{id:"tip-\u4e09\u6b21\u63e1\u624b\u653b\u51fb"},"tip: \u4e09\u6b21\u63e1\u624b\u653b\u51fb"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"C S"),(0,l.kt)("p",{parentName:"div"},"\u7b2c\u4e00\u6b21: C \u53d1\u9001\u6570\u636e\u5305\u7ed9 S",(0,l.kt)("br",{parentName:"p"}),"\n","\u7b2c\u4e8c\u6b21: S \u56de\u590d C \u6536\u5230\u7684\u6570\u636e\u5305 (ack+1)",(0,l.kt)("br",{parentName:"p"}),"\n","\u7b2c\u4e09\u6b21: C \u53d1\u9001\u6570\u636e\u5305 (ack + 1) \u7ed9 S \u610f\u601d\u662f S \u53d1\u73b0 C \u628a\u5305\u53d1\u56de\u6765\u4ee3\u8868 C \u6536\u5230\u4e86"),(0,l.kt)("p",{parentName:"div"},"\u4e09\u6b21\u63e1\u624b\u653b\u51fb\u662f\u53d1\u751f\u5728\u7b2c\u4e09\u6b21\u63e1\u624b\u4e4b\u524d, \u6bd4\u5982\u7b2c\u4e8c\u6b21\u4e4b\u540e S \u7aef\u7ed9 C \u7aef\u53d1\u4e86\u8bf7\u6c42\nS \u7aef\u7b49\u7740 C \u7aef\u518d\u53d1\u56de\u6765, syn \u653b\u51fb\u5ba2\u6237\u7aef\u4e0d\u53d1\u4e86, \u800c S \u7aef\u6253\u5f00\u4e86\u94fe\u63a5\u4e00\u76f4\u5728\u7b49\u5f85, \u8d85\u65f6\u65f6\u95f4\u5f88\u957f\u7684\n\u8bdd\u94fe\u63a5\u4e00\u76f4\u5728\u5f00\u542f\u6d88\u8017, \u6bcf\u4e00\u4e2a\u673a\u5668\u80fd\u6253\u5f00\u7684\u6700\u5927\u8fde\u63a5\u6570\u6709\u9650, \u4e5f\u5c31\u662f 65535 \u63cf\u8ff0\u6587\u4ef6\u6570"),(0,l.kt)("p",{parentName:"div"},"\u6240\u4ee5 syn \u653b\u51fb\u5c31\u662f\u8017\u5c3d\u7f51\u7edc\u8fde\u63a5\u6570"),(0,l.kt)("p",{parentName:"div"},"\u5982\u4f55\u9632\u5fa1:\n\u628a\u8d85\u65f6\u65f6\u95f4\u8c03\u77ed\u4e00\u4e9b\n\u53ef\u4ee5\u5728\u4e03\u5c42\u5224\u65ad\u662f\u4e0d\u662f\u4e00\u4e2a\u5ba2\u6237\u7aef, \u5982\u679c\u662f\u62ff\u4ee3\u7801\u6ca1\u6709\u5ba2\u6237\u7aef\u4fe1\u606f\u6216\u8005\u8eab\u4efd\u4fe1\u606f\u4e0d\u4e00\u81f4\u5c31\u65ad\u5f00, \u4e0d\u8fdb\u884c\u8bf7\u6c42"))),(0,l.kt)("h3",{id:"4nginx-\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e"},"4\u3001Nginx \u8d1f\u8f7d\u5747\u8861\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b98\u65b9\u6587\u6863"),"\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_upstream_module.html"},"http://nginx.org/en/docs/http/ngx_http_upstream_module.html")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u67b6\u6784\u5206\u6790\uff1a")),(0,l.kt)("p",{parentName:"blockquote"},"\u2460 \u7528\u6237\u8bbf\u95ee\u8bf7\u6c42 Nginx \u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668"),(0,l.kt)("p",{parentName:"blockquote"},"\u2461Nginx \u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u518d\u5206\u53d1\u8bf7\u6c42\u5230 web \u670d\u52a1\u5668"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\uff0c\u53ea\u9700\u4fee\u6539\u4f5c\u4e3a\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u7684 Nginx \u5373\u53ef\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2460 \u5728\u5ba2\u6237\u7aef\u89e3\u6790\u57df\u540d\u5230\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2461 \u5728\u8d1f\u8f7d\u5747\u8861\u7684 Nginx \u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u6ce8\u610f\u672c\u6b21\u67b6\u6784\u4e2d  server04\u7684Nginx\u670d\u52a1\u5668\u662f\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\nshell > cd /usr/local/nginx/conf/nginx.conf\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"#\u5728http\u6bb5\u8fdb\u884c\u914d\u7f6e\n#\u5206\u53d1\u8bf7\u6c42\u5230\u540e\u7aef\u670d\u52a1\u5668\nupstream shop {\n    #web1 server01\n    server 192.168.17.102;\n    #web2 server02\n    server 192.168.17.101\uff1b\n}\n#\u4fee\u6539\u4e4b\u524d\u7684shop\u7684server\u6bb5\u914d\u7f6e\nserver {\n    listen 80\uff1b\n    server_name www.shop.com;\n    location / {\n        #\u4ee3\u7406\u8f6c\u53d1\u5230shop\u6bb5  \u5339\u914d\u5230\u4e0a\u9762\u7684upstream\n        proxy_pass http://shop;\n        #\u4ee5\u4e0b\u4e24\u6761\u914d\u7f6e\uff0c\u5b9e\u8d28\u662f\u8bbe\u7f6e\u4e86\u4f20\u8f93\u7684header\u5934\u4fe1\u606f\n        #\u4f20\u8f93\u57df\u540d\u7ed9\u540e\u7aef\u670d\u52a1\u5668  \u8fdb\u884c\u8bc6\u522b  \u65b9\u4fbf\u5339\u914d\u5bf9\u5e94server\u865a\u62df\u4e3b\u673a\n        proxy_set_header Host $host;\n        #\u53d1\u9001\u5ba2\u6237\u7aefIP  \u7ed9\u540e\u7aef\u670d\u52a1\u5668  \u7528\u6765\u65b9\u4fbf\u540e\u7aef\u670d\u52a1\u5668\u8bc6\u522b\u7528\u6237\u771f\u5b9eIP\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2462 \u91cd\u8f7d\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668 Nginx \u914d\u7f6e\u6d4b\u8bd5\u67e5\u770b\u6548\u679c")),(0,l.kt)("p",null,"\u53ef\u4ee5\u505c\u6389\u5176\u4e2d\u4e00\u53f0 web \u670d\u52a1\u5668\u8fdb\u884c\u6d4b\u8bd5"),(0,l.kt)("h3",{id:"5\u67e5\u770b\u786e\u8ba4\u8d1f\u8f7d\u5747\u8861"},"5\u3001\u67e5\u770b\u786e\u8ba4\u8d1f\u8f7d\u5747\u8861"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u4f55\u786e\u8ba4\u670d\u52a1\u5668\u662f\u5426\u5b9e\u73b0\u4e86\u8d1f\u8f7d\u5747\u8861\uff1f"),(0,l.kt)("p",{parentName:"blockquote"},"\u2460 \u5728\u4e0d\u540c\u7684 web \u670d\u52a1\u5668\u540c\u8def\u7531\u8bbf\u95ee\u7684\u6587\u4ef6\u4e2d\uff0c\u5199\u5165\u4e0d\u540c\u7684\u4fe1\u606f\uff0c\u4ee5\u793a\u533a\u522b\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u2461 \u901a\u8fc7\u67e5\u770b\u540e\u7aef web \u670d\u52a1\u5668\u7684\u8bbf\u95ee\u65e5\u5fd7\u8fdb\u884c\u786e\u5b9a")),(0,l.kt)("p",null,"==",(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u4e00\uff1a\u5728\u4e0d\u540c\u670d\u52a1\u5668\u5199\u5165\u4e0d\u540c\u4fe1\u606f"),"=="),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2460 \u5206\u522b\u4fee\u6539 web \u670d\u52a1\u5668\u7684\u4fe1\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"shell > vim /usr/local/nginx/html/tp5shop/application/home/controller/Base.php\n")),(0,l.kt)("p",null,"\u5199\u5165\u4e00\u4e2a\u52a8\u6001\u53c2\u6570\uff0c\u6839\u636e php \u8bed\u6cd5\u81ea\u52a8\u8c03\u7528\u5f53\u524d\u4e3b\u673a\u540d\u79f0"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa7",src:n(79428).Z})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u2461 \u8bbf\u95ee\u67e5\u770b\u8d1f\u8f7d\u5747\u8861\u6548\u679c")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u65b9\u6cd5\u4e8c\uff1a\u67e5\u770b\u540e\u7aef web \u670d\u52a1\u5668\u7684\u8bbf\u95ee\u65e5\u5fd7")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"shell > cat /usr/local/nginx/logs/access.log\n")),(0,l.kt)("h3",{id:"6\u8d1f\u8f7d\u5747\u8861\u540e\u83b7\u53d6\u5ba2\u6237\u7aef-ip"},"6\u3001\u8d1f\u8f7d\u5747\u8861\u540e\u83b7\u53d6\u5ba2\u6237\u7aef IP"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8d1f\u8f7d\u5747\u8861\u4e4b\u540e\uff0c\u5728\u540e\u7aef\u7684 web \u670d\u52a1\u5668\u83b7\u53d6\u5230\u7684\u662f\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u7684 IP\uff0c\u800c\u4e0d\u80fd\u591f\u83b7\u53d6\u5230\u5ba2\u6237\u7aef\u7684\u771f\u5b9e IP\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u8fdb\u884c\u4ee5\u4e0b\u7279\u6b8a\u914d\u7f6e\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"\u2460 \u9996\u5148\u5728\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u4e2d\u914d\u7f6e\uff0c\u8f6c\u53d1\u5ba2\u6237\u7aef IP \u7ed9\u540e\u7aef web \u670d\u52a1\u5668"),(0,l.kt)("p",{parentName:"blockquote"},"\u2461 \u540e\u7aef web \u670d\u52a1\u5668\u9700\u8981\u914d\u7f6e\uff0c\u8bc6\u522b\u4ece\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u4f20\u8f93\u8fc7\u6765\u7684\u5ba2\u6237\u7aef\u771f\u5b9e IP")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b98\u65b9\u7f51\u5740"),"\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_realip_module.html"},"http://nginx.org/en/docs/http/ngx_http_realip_module.html")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f7f\u7528 ngx_http_realip_module \u6a21\u5757\u63d0\u4f9b\u7684 set_real_ip_from \u8bed\u6cd5\uff0c\u9ed8\u8ba4\u6b64\u6a21\u5757\u6ca1\u6709\u5b89\u88c5\uff0c\u9700\u8981\u7f16\u8bd1\u65f6\u6dfb\u52a0\u7f16\u8bd1\u53c2\u6570")),(0,l.kt)("p",null,"web \u670d\u52a1\u5668\u4e0a\u914d\u7f6e set_real_ip_from \u4ee3\u8868\u4ece\u54ea\u513f\u6765\u6e90\u7684 IP\uff0c\u9700\u8981\u8bc6\u522b\u771f\u5b9e\u5ba2\u6237\u7aef IP"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u914d\u7f6e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"#\u6b64\u914d\u7f6e\u5728web\u670d\u52a1\u5668\u4e0a\u7684nginx\n#\u53ef\u914d\u7f6e\u5230http\u3001server\u3001location\u4e2d\uff0c\u63a8\u8350\u914d\u7f6e\u5230server\u4e2d\n#\u914d\u7f6e\u9700\u8981\u8bc6\u522b\u7684IP\u6765\u6e90   \u8d1f\u8f7d\u5747\u8861\u7684IP\nset_real_ip_from  192.168.17.103\n")),(0,l.kt)("h3",{id:"7upstream-\u4e2d-server-\u7684\u5173\u952e\u5b57"},"7\u3001upstream \u4e2d server \u7684\u5173\u952e\u5b57"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"upstream \u4e2d\u7684\u5206\u53d1\u4e4b\u540e\u7684\u51e0\u4e2a\u5173\u952e\u5b57\uff1a"),(0,l.kt)("p",{parentName:"blockquote"},"backup \u5907 \u5176\u4ed6\u7684\u6ca1\u6709 backup \u6807\u8bc6\u7684\u90fd\u65e0\u54cd\u5e94\uff0c\u624d\u5206\u53d1\u5230 backup"),(0,l.kt)("p",{parentName:"blockquote"},"down \u6b64\u6761\u914d\u7f6e\uff0c\u4e0d\u4f1a\u88ab\u5206\u53d1\u5230")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream shop {\n    server 192.168.17.102 down;\n    server 192.168.17.101 backup\uff1b\n}\n")),(0,l.kt)("h3",{id:"8session-\u4e00\u81f4\u6027\u95ee\u9898"},"8\u3001session \u4e00\u81f4\u6027\u95ee\u9898"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u7ba1\u7406\u540e\u7aef\u9875\u9762\uff0c\u767b\u5f55\u53d1\u73b0\u9a8c\u8bc1\u7801\u4e0d\u901a\u8fc7")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5206\u6790\u539f\u56e0\uff1a")),(0,l.kt)("p",null,"\u2460 \u6bd4\u5982\u5206\u53d1\u5230 web1 \u670d\u52a1\u5668\uff0c\u751f\u6210\u9a8c\u8bc1\u7801\uff0c\u5b58\u50a8\u5230 session \u4e2d\uff0c\u9ed8\u8ba4\u5728\u670d\u52a1\u5668\u672c\u5730"),(0,l.kt)("p",null,"\u2461 \u518d\u6b21\u6821\u9a8c\u7684\u65f6\u5019\uff0c\u8bf7\u6c42\u5206\u53d1\u5230 web2 \u670d\u52a1\u5668\u4e86\uff0c\u6240\u6709\u9a8c\u8bc1\u7801\u4e00\u76f4\u6821\u9a8c\u4e0d\u901a\u8fc7"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u65b9\u6848\u601d\u8def\uff1a")),(0,l.kt)("p",null,"\u2460 \u751f\u6210\u548c\u9a8c\u8bc1 session \u90fd\u8bf7\u6c42\u540c\u4e00\u53f0\u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u2461 \u5171\u4eab session nfs mysql ==\u5185\u5b58\u7f13\u5b58\u8f6f\u4ef6\uff08memcached\u3001redis\uff09=="),(0,l.kt)("h3",{id:"9nginx-\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"},"9\u3001Nginx \u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Nginx \u5b98\u65b9\u9ed8\u8ba4 3 \u79cd\u8d1f\u8f7d\u5747\u8861\u7684\u7b97\u6cd5")),(0,l.kt)("p",{parentName:"blockquote"},"\u2460==Round-Robin RR \u8f6e\u8be2\uff08\u9ed8\u8ba4\uff09== \u4e00\u6b21\u4e00\u4e2a\u7684\u6765\uff08\u7406\u8bba\u4e0a\u7684\uff0c\u5b9e\u9645\u5b9e\u9a8c\u53ef\u80fd\u4f1a\u6709\u95f4\u9694\uff09"),(0,l.kt)("p",{parentName:"blockquote"},"\u2461==weight \u6743\u91cd== \u6743\u91cd\u9ad8\u591a\u5206\u53d1\u4e00\u4e9b \u670d\u52a1\u5668\u786c\u4ef6\u66f4\u597d\u7684\u8bbe\u7f6e\u6743\u91cd\u66f4\u9ad8\u4e00\u4e9b"),(0,l.kt)("p",{parentName:"blockquote"},"\u2462==ip_hash== \u540c\u4e00\u4e2a IP\uff0c\u6240\u6709\u7684\u8bbf\u95ee\u90fd\u5206\u53d1\u5230\u540c\u4e00\u4e2a web \u670d\u52a1\u5668")),(0,l.kt)("p",null,"Tip\uff1a"),(0,l.kt)("p",null,"\u7b2c\u4e09\u65b9\u6a21\u5757\u5b9e\u73b0\u7684\u8c03\u5ea6\u7b97\u6cd5 \u9700\u8981\u7f16\u8bd1\u5b89\u88c5\u7b2c\u4e09\u65b9\u6a21\u5757"),(0,l.kt)("p",null,"\u2463fair \u6839\u636e\u540e\u7aef\u670d\u52a1\u5668\u7684\u7e41\u5fd9\u7a0b\u5ea6 \u5c06\u8bf7\u6c42\u53d1\u5230\u975e\u7e41\u5fd9\u7684\u540e\u7aef\u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u2464url_hash \u5982\u679c\u5ba2\u6237\u7aef\u8bbf\u95ee\u7684 url \u662f\u540c\u4e00\u4e2a\uff0c\u5c06\u8f6c\u53d1\u5230\u540c\u4e00\u53f0\u540e\u7aef\u670d\u52a1\u5668"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u4e00\uff1a\u9a8c\u8bc1\u52a0\u6743\u8f6e\u8be2\u7b97\u6cd5")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u914d\u7f6e\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream shop {\n    #web1 server01\n    server 192.168.17.102 weight=5;\n    #web2 server02\n    server 192.168.17.101 weight=3\uff1b\n}\n")),(0,l.kt)("p",null,"server01 web 1 1 1 1 1 1"),(0,l.kt)("p",null,"server03 web 2 1 1 1"),(0,l.kt)("p",null,"8 \u6b21\u4e2d\uff0cserver01 \u5206\u53d1 5 \u6b21\uff0cserver03 \u5206\u53d1 3 \u6b21"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9a8c\u8bc1\u4e8c\uff1aip \u4e00\u81f4\u6027\u7b97\u6cd5")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u914d\u7f6e:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream shop {\n    #ip hash \u4e00\u81f4\u6027\u7b97\u6cd5\u914d\u7f6e  \u8bbe\u7f6e\u6b64\u9879  weight\u5c31\u5931\u6548\u4e86\n    ip_hash;\n    #web1 server01\n    server 192.168.17.102 weight=5;\n    #web2 server02\n    server 192.168.17.101 weight=3\uff1b\n}\n")),(0,l.kt)("h3",{id:"10\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u9ad8\u53ef\u7528"},"10\u3001\u5b9e\u73b0\u8d1f\u8f7d\u5747\u8861\u9ad8\u53ef\u7528"),(0,l.kt)("p",null,"\u6240\u6709\u7684\u8bf7\u6c42\u6d41\u91cf\uff0c\u90fd\u8981\u7ecf\u8fc7\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\uff0c\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u538b\u529b\u5f88\u5927\uff0c\u9632\u6b62\u5b83\u5b95\u673a\uff0c\u5bfc\u81f4\u540e\u7aef\u670d\u52a1\u6240\u6709\u90fd\u4e0d\u53ef\u7528\uff0c\u9700\u8981\u5bf9\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\uff0c\u505a\u9ad8\u53ef\u7528"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"fa8",src:n(72935).Z})),(0,l.kt)("p",null,"\u7ed9\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668 server04 \u505a\u4e00\u53f0\u5907\u7528\u670d\u52a1\u5668 server05\uff0c\u901a\u8fc7 keepalived \u5b9e\u73b0\u9ad8\u53ef\u7528\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7 keepalived \u5b9e\u73b0 VIP \u5728\u8d1f\u8f7d\u5747\u8861\u670d\u52a1\u5668\u7ec4\u7684\u5207\u6362\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"server04 master LB 192.168.17.103"),(0,l.kt)("p",{parentName:"blockquote"},"server05 backup LB 192.168.17.50")),(0,l.kt)("p",null,"\u4e3b\u8d1f\u8f7d\u5747\u8861\u7684 keepalived \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vrrp_instance VI_1 {\n    state BACKUP\n    interface eth0\n    #\u865a\u62df\u8def\u7531ID \u65b0ID \u4e0d\u8981\u4e4b\u524d\u7684\u51b2\u7a81\n    virtual_router_id 52\n    priority 100\n    nopreempt\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    virtual_ipaddress {\n        #\u6dfb\u52a0\u65b0VIP\n        192.168.17.201\n    }\n    track_script {\n        check_nginx\n    }\n}\n")),(0,l.kt)("p",null,"\u5907\u8d1f\u8f7d\u5747\u8861\u7684 keepalived \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vrrp_instance VI_1 {\n    state BACKUP\n    interface eth0\n    #\u4fee\u6539route_id\n    virtual_router_id 52\n    priority 99\n    nopreempt\n    advert_int 1\n    authentication {\n        auth_type PASS\n        auth_pass 1111\n    }\n    #unicast_src_ip 192.168.17.101\n    #unicast_peer {\n    #    192.168.17.102\n    #}\n    virtual_ipaddress {\n        #\u65b0VIP\n        192.168.17.201\n    }\n    track_script {\n        check_nginx\n    }\n}\n\n")))}c.isMDXComponent=!0},21406:function(e,t,n){t.Z=n.p+"assets/images/fa1-4cfcfb848837b128e4942467053d60cc.jpg"},88081:function(e,t,n){t.Z=n.p+"assets/images/fa2-e0a685b26cca0c3dca3ee836d03b3760.jpg"},64591:function(e,t,n){t.Z=n.p+"assets/images/fa3-f217b46cf5d7d07dfb855d5053c858d4.JPG"},96137:function(e,t,n){t.Z=n.p+"assets/images/fa4-7e7eafd5810a2a3f371d42faf203c9f5.jpg"},76569:function(e,t,n){t.Z=n.p+"assets/images/fa5-984325c1f0bb85a6a87006ba12e1a7a6.jpg"},15093:function(e,t,n){t.Z=n.p+"assets/images/fa6-3f392359442ed7bc742ac1c6ca808214.jpg"},79428:function(e,t,n){t.Z=n.p+"assets/images/fa7-7a154fccfedf55b0ad3429f6a987f862.png"},72935:function(e,t,n){t.Z=n.p+"assets/images/fa8-1e55fba55ff441320752c7fcfb81a26f.jpg"}}]);