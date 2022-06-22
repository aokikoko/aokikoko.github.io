"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const l={title:"[Node] \u4e8b\u4ef6\u5faa\u73af",sidebar_position:8},r=void 0,i={unversionedId:"Node.js/eventloop",id:"Node.js/eventloop",title:"[Node] \u4e8b\u4ef6\u5faa\u73af",description:"-----",source:"@site/docs/Node.js/eventloop.md",sourceDirName:"Node.js",slug:"/Node.js/eventloop",permalink:"/docs/Node.js/eventloop",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Node.js/eventloop.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"[Node] \u4e8b\u4ef6\u5faa\u73af",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"[Node] \u7f51\u7edc\u4e03\u5c42\u6a21\u578bOSI",permalink:"/docs/Node.js/osi"},next:{title:"[Node] \u591a\u8fdb\u7a0b",permalink:"/docs/Node.js/cluster"}},s=[{value:"\u4e8b\u4ef6\u5faa\u73af\u4ecb\u7ecd",id:"\u4e8b\u4ef6\u5faa\u73af\u4ecb\u7ecd",children:[{value:"\u6d4f\u89c8\u5668\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af",id:"\u6d4f\u89c8\u5668\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af",children:[],level:3},{value:"nodejs\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af",id:"nodejs\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af",children:[],level:3}],level:2},{value:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",id:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af",children:[{value:"Javascript\u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684\uff1f",id:"javascript\u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684",children:[],level:3},{value:"\u4efb\u52a1\u961f\u5217",id:"\u4efb\u52a1\u961f\u5217",children:[],level:3},{value:"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",id:"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1",children:[],level:3},{value:"\u9ad8\u9891\u9762\u8bd5\u9898",id:"\u9ad8\u9891\u9762\u8bd5\u9898",children:[],level:3}],level:2},{value:"nodejs\u4e8b\u4ef6\u5faa\u73af",id:"nodejs\u4e8b\u4ef6\u5faa\u73af",children:[{value:"\u9636\u6bb5\u6982\u89c8",id:"\u9636\u6bb5\u6982\u89c8",children:[],level:3},{value:"\u4ee3\u7801\u6267\u884c1",id:"\u4ee3\u7801\u6267\u884c1",children:[],level:3},{value:"\u4ee3\u7801\u6267\u884c2",id:"\u4ee3\u7801\u6267\u884c2",children:[],level:3},{value:"\u4ee3\u7801\u6267\u884c3",id:"\u4ee3\u7801\u6267\u884c3",children:[],level:3},{value:"process.nextTick",id:"processnexttick",children:[{value:"\u8bbe\u8ba1\u539f\u56e0",id:"\u8bbe\u8ba1\u539f\u56e0",children:[],level:4},{value:"nextTick\u5e94\u7528\u573a\u666f",id:"nexttick\u5e94\u7528\u573a\u666f",children:[],level:4}],level:3},{value:"process.nextTick \u548c setTimeout \u548c setImmediate \u533a\u522b??",id:"processnexttick-\u548c-settimeout-\u548c-setimmediate-\u533a\u522b",children:[],level:3}],level:2}],p={toc:s};function c(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u4e8b\u4ef6\u5faa\u73af\u4ecb\u7ecd"},"\u4e8b\u4ef6\u5faa\u73af\u4ecb\u7ecd"),(0,o.kt)("h3",{id:"\u6d4f\u89c8\u5668\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af"},"\u6d4f\u89c8\u5668\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af"),(0,o.kt)("p",null,"\u4e3a\u4e86\u534f\u8c03\u4e8b\u4ef6\uff08event\uff09\uff0c\u7528\u6237\u4ea4\u4e92\uff08user interaction\uff09\uff0c\u811a\u672c\uff08script\uff09\uff0c\u6e32\u67d3\uff08rendering\uff09\uff0c\u7f51\u7edc\uff08networking\uff09\u7b49\uff0c\u7528\u6237\u4ee3\u7406\uff08user agent\uff09\u5fc5\u987b\u4f7f\u7528\u4e8b\u4ef6\u5faa\u73af\uff08event loops\uff09\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," To coordinate events, user interaction, scripts, rendering, networking, and so forth, user agents must use\xa0event loops\xa0as described in this section. Each\xa0agent\xa0has an associated\xa0event loop.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\uff1aPostMessage,  MutationObserver\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u4ea4\u4e92\uff1a click\uff0c onScroll\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u6e32\u67d3\uff1a \u89e3\u6790dom\uff0ccss\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u811a\u672c\uff1ajs\u811a\u672c\u6267\u884c")),(0,o.kt)("h3",{id:"nodejs\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af"},"nodejs\u4e2d\u7684\u4e8b\u4ef6\u5faa\u73af"),(0,o.kt)("p",null,"\u4e8b\u4ef6\u5faa\u73af\u5141\u8bb8Node.js\u6267\u884c\u975e\u963b\u585eI / O\u64cd\u4f5c - \u5c3d\u7ba1JavaScript\u662f\u5355\u7ebf\u7a0b\u7684 - \u901a\u8fc7\u5c3d\u53ef\u80fd\u5c06\u64cd\u4f5c\u5378\u8f7d\u5230\u7cfb\u7edf\u5185\u6838\u3002\n\u7531\u4e8e\u5927\u591a\u6570\u73b0\u4ee3\u5185\u6838\u90fd\u662f\u591a\u7ebf\u7a0b\u7684\uff0c\u56e0\u6b64\u5b83\u4eec\u53ef\u4ee5\u5904\u7406\u5728\u540e\u53f0\u6267\u884c\u7684\u591a\u4e2a\u64cd\u4f5c\u3002\u5f53\u5176\u4e2d\u4e00\u4e2a\u64cd\u4f5c\u5b8c\u6210\u65f6\uff0c\u5185\u6838\u4f1a\u544a\u8bc9Node.js\uff0c\u4ee5\u4fbf\u53ef\u4ee5\u5c06\u76f8\u5e94\u7684\u56de\u8c03\u6dfb\u52a0\u5230\u8f6e\u8be2\u961f\u5217\u4e2d\u4ee5\u6700\u7ec8\u6267\u884c\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The event loop is what allows Node.js to perform non-blocking I/O operations \u2014 despite the fact that JavaScript is single-threaded \u2014 by offloading operations to the system kernel whenever possible.\nSince most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the\xa0poll\xa0queue to eventually be executed. We'll explain this in further detail later in this topic.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\uff1a EventEmitter"),(0,o.kt)("li",{parentName:"ul"},"\u975e\u963b\u585eI / O\uff1a\u7f51\u7edc\u8bf7\u6c42\uff0c\u6587\u4ef6\u8bfb\u5199\u7b49"),(0,o.kt)("li",{parentName:"ul"},"\u811a\u672c\uff1ajs\u811a\u672c\u6267\u884c")),(0,o.kt)("h2",{id:"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af"},"\u6d4f\u89c8\u5668\u4e8b\u4ef6\u5faa\u73af"),(0,o.kt)("h3",{id:"javascript\u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684"},"Javascript\u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684\uff1f"),(0,o.kt)("p",null,"\u6d4f\u89c8\u5668js\u7684\u4f5c\u7528\u662f\u64cd\u4f5cDOM\uff0c\u8fd9\u51b3\u5b9a\u4e86\u5b83\u53ea\u80fd\u662f\u5355\u7ebf\u7a0b\uff0c\u5426\u5219\u4f1a\u5e26\u6765\u5f88\u590d\u6742\u7684\u540c\u6b65\u95ee\u9898\u3002\u6bd4\u5982\uff0c\u5047\u5b9aJavaScript\u540c\u65f6\u6709\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u4e00\u4e2a\u7ebf\u7a0b\u5728\u67d0\u4e2aDOM\u8282\u70b9\u4e0a\u6dfb\u52a0\u5185\u5bb9\uff0c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u5220\u9664\u4e86\u8fd9\u4e2a\u8282\u70b9\uff0c\u8fd9\u65f6\u6d4f\u89c8\u5668\u5e94\u8be5\u4ee5\u54ea\u4e2a\u7ebf\u7a0b\u4e3a\u51c6\uff1f"),(0,o.kt)("h3",{id:"\u4efb\u52a1\u961f\u5217"},"\u4efb\u52a1\u961f\u5217"),(0,o.kt)("p",null,"\u5355\u7ebf\u7a0b\u5c31\u610f\u5473\u7740\u6240\u6709\u4efb\u52a1\u9700\u8981\u6392\u961f\uff0c\u5982\u679c\u56e0\u4e3a\u4efb\u52a1cpu\u8ba1\u7b97\u91cf\u5927\u8fd8\u597d\uff0c\u4f46\u662fI/O\u64cd\u4f5ccpu\u662f\u95f2\u7740\u7684\u3002\u6240\u4ee5js\u5c31\u8bbe\u8ba1\u6210\u4e86\u4e00\u95e8\u5f02\u6b65\u7684\u8bed\u8a00\uff0c\u4e0d\u4f1a\u505a\u65e0\u754f\u7684\u7b49\u5f85\u3002\u4efb\u52a1\u53ef\u4ee5\u5206\u6210\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u540c\u6b65\u4efb\u52a1\uff08synchronous\uff09\uff0c\u53e6\u4e00\u79cd\u662f\u5f02\u6b65\u4efb\u52a1\uff08asynchronous\uff09\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uff081\uff09\u6240\u6709\u540c\u6b65\u4efb\u52a1\u90fd\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u6267\u884c\uff0c\u5f62\u6210\u4e00\u4e2a\u6267\u884c\u6808\uff08execution context stack\uff09\u3002"),(0,o.kt)("p",{parentName:"blockquote"},'\uff082\uff09\u4e3b\u7ebf\u7a0b\u4e4b\u5916\uff0c\u8fd8\u5b58\u5728\u4e00\u4e2a"\u4efb\u52a1\u961f\u5217"\uff08task queue\uff09\u3002\u53ea\u8981\u5f02\u6b65\u4efb\u52a1\u6709\u4e86\u8fd0\u884c\u7ed3\u679c\uff0c\u5c31\u5728"\u4efb\u52a1\u961f\u5217"\u4e4b\u4e2d\u653e\u7f6e\u4e00\u4e2a\u4e8b\u4ef6\u3002'),(0,o.kt)("p",{parentName:"blockquote"},'\uff083\uff09\u4e00\u65e6"\u6267\u884c\u6808"\u4e2d\u7684\u6240\u6709\u540c\u6b65\u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u7cfb\u7edf\u5c31\u4f1a\u8bfb\u53d6"\u4efb\u52a1\u961f\u5217"\uff0c\u770b\u770b\u91cc\u9762\u6709\u54ea\u4e9b\u4e8b\u4ef6\u3002\u90a3\u4e9b\u5bf9\u5e94\u7684\u5f02\u6b65\u4efb\u52a1\uff0c\u4e8e\u662f\u7ed3\u675f\u7b49\u5f85\u72b6\u6001\uff0c\u8fdb\u5165\u6267\u884c\u6808\uff0c\u5f00\u59cb\u6267\u884c\u3002'),(0,o.kt)("p",{parentName:"blockquote"},"\uff084\uff09\u4e3b\u7ebf\u7a0b\u4e0d\u65ad\u91cd\u590d\u4e0a\u9762\u7684\u7b2c\u4e09\u6b65\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(() => {\n  console.log('setTimeout')\n}, 0);\n\nconsole.log('main1');\nconsole.log('main2');\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'\u4e3b\u7ebf\u7a0b\u4ece"\u4efb\u52a1\u961f\u5217"\u4e2d\u8bfb\u53d6\u4e8b\u4ef6\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u662f\u5faa\u73af\u4e0d\u65ad\u7684\uff0c\u6240\u4ee5\u6574\u4e2a\u7684\u8fd9\u79cd\u8fd0\u884c\u673a\u5236\u53c8\u79f0\u4e3aEvent Loop\uff08\u4e8b\u4ef6\u5faa\u73af\uff09\u3002')),(0,o.kt)("h3",{id:"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1"},"\u5b8f\u4efb\u52a1\u4e0e\u5fae\u4efb\u52a1"),(0,o.kt)("p",null,"\u9664\u4e86\u5e7f\u4e49\u7684\u540c\u6b65\u4efb\u52a1\u548c\u5f02\u6b65\u4efb\u52a1\uff0cJavaScript \u5355\u7ebf\u7a0b\u4e2d\u7684\u4efb\u52a1\u53ef\u4ee5\u7ec6\u5206\u4e3a\u5b8f\u4efb\u52a1\uff08macrotask\uff09\u548c\u5fae\u4efb\u52a1(microtask)\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"macrotask: script(\u6574\u4f53\u4ee3\u7801), setTimeout, setInterval, setImmediate, I/O, UI rendering\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"microtask\uff1aprocess.nextTick, Promise, Object.observe, MutationObserver\u3002"))),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"\u5b8f\u4efb\u52a1\u8fdb\u5165\u4e3b\u7ebf\u7a0b\uff0c\u6267\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u6536\u96c6\u5fae\u4efb\u52a1\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c\u7acb\u9a6c\u6267\u884c\u5fae\u4efb\u52a1\u4e2d\u7684\u4efb\u52a1\u3002\u5fae\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u5c06\u518d\u6b21\u6536\u96c6\u5b8f\u4efb\u52a1\uff0c\u5e76\u52a0\u5165\u5b8f\u4efb\u52a1\u961f\u5217\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53cd\u590d\u6267\u884c1\uff0c2\u6b65\u9aa4"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u5fae\u5b8f\u4efb\u52a1",src:n(57373).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(() => {\n  console.log('setTimeout')\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('promise');\n});\n\nconsole.log('main');\n\n// 1. main 2. promise 3. setTimeout\n// script\u8fdb\u5165\u4e3b\u7ebf\u7a0b, \u78b0\u5230settimeout\u7b49\u5f02\u6b65\u4e22\u5230I/O\u91cc, \n// \u78b0\u5230promise \u4e22\u5230\u4efb\u52a1\u961f\u5217\u91cc\uff0c \u5f53\u4e3b\u7ebf\u7a0b\u6267\u884c\u5b8c\u6210\u4e4b\u540e\uff0c \u518d\u53bb\u5fae\u4efb\u52a1\u961f\u5217\u91cc\u9762\u53bb\u627e\n// \u6267\u884c\u5fae\u4efb\u52a1\u961f\u5217\u91cc\u7684\u4efb\u52a1, \u6bd4\u5982promise. \u5f53\u5fae\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u4e4b\u540e, \u518d\u5f00\u542f\u4e00\u8f6e\u65b0\u7684\u5faa\u73af, \u5b8f\u4efb\u52a1   \n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u8be6\u7ec6\u6b65\u9aa4 ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," \u9996\u5148\u6709\u4e2a\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1\u961f\u5217, \u9664\u6b64\u4e4b\u5916\u8fd8\u6709\u4e2a I/O, \u4e13\u95e8\u8d1f\u8d23\u7b49\u5f85\u7684\u7ebf\u7a0b",(0,o.kt)("br",{parentName:"p"}),"\n","\u67093\u4e2a, settimeout promise log('main')",(0,o.kt)("br",{parentName:"p"}),"\n","\u9996\u5148 settimeout\u52a0\u5230\u5b8f\u4efb\u52a1\u961f\u5217,  \u5b83\u6709\u4e2a\u56de\u8c03 , 0\u79d2\u540e\u6253\u5370\u4e00\u4e2alog",(0,o.kt)("br",{parentName:"p"}),"\n","\u90a3\u4e48I/O\u91cc\u6709\u4e86 console.log('settimeout'), \u6b64\u65f6 settimeout\u51fa\u6808, \u56e0\u4e3a\u5b8f\u4efb\u52a1\u5df2\u7ecf\u6267\u884c\u5b8c\u4e86",(0,o.kt)("br",{parentName:"p"}),"\n","promise.resolve \u518d\u6b21\u5165\u6808, promise.resolve\u5165\u6808\u4e4b\u540e, console.log('promise')\u52a0\u5165\u5fae\u4efb\u52a1\u961f\u5217",(0,o.kt)("br",{parentName:"p"}),"\n","promise.resolve \u7684\u4efb\u52a1\u5b8c\u6210, \u51fa\u6808. \u7136\u540econsole.log('main')\u5165\u6808, \u6267\u884c\u5b8c\u4e4b\u540e\u51fa\u6808",(0,o.kt)("br",{parentName:"p"}),"\n","\u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u4e4b\u540e\u518d\u53bb\u5fae\u4efb\u52a1\u961f\u5217\u91cc\u770b\u6709\u6ca1\u6709\u5fae\u4efb\u52a1, \u6b64\u65f6\u53d1\u73b0\u6709\u4e2aconsole.log('promise') \u6267\u884c\u5b8c\u4e4b\u540e\u51fa\u6808",(0,o.kt)("br",{parentName:"p"}),"\n","\u6b64\u65f6, \u5de5\u4f5c\u672a\u5b8c\u6210, \u56e0\u4e3aI/O\u4e2d\u8fd8\u6709\u4e2a log('settimeout')\u6ca1\u6267\u884c\u5b8c, \u8fd9\u4e2a\u662fsettimeout\u7684\u56de\u8c03\u51fd\u6570, \u5c5e\u4e8e\u5b8f\u4efb\u52a1",(0,o.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5, \u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u5b8f\u4efb\u52a1\u961f\u5217.",(0,o.kt)("br",{parentName:"p"}),"\n","\u56e0\u4e3a, \u5b8f\u4efb\u52a1\u6267\u884c\u5b8c\u4e4b\u540e\u6267\u884c\u5fae\u4efb\u52a1, \u5fae\u4efb\u52a1\u6267\u884c\u5b8c\u53c8\u4ea7\u751f\u65b0\u7684\u5b8f\u4efb\u52a1, \u65b0\u7684\u5b8f\u4efb\u52a1\u662flog('settimeou')",(0,o.kt)("br",{parentName:"p"}),"\n","\u5b83\u4f1a\u52a0\u5165\u5230\u65b0\u7684\u5b8f\u4efb\u52a1\u961f\u5217\u91cc, \u6b64\u65f6\u5728settimeout\u51fd\u6570\u91cc\u6ca1\u6709\u5176\u4ed6\u7684\u6bd4\u5982promise, \u56e0\u6b64\u4e0d\u4f1a\u4ea7\u751f\u5fae\u4efb\u52a1\u961f\u5217",(0,o.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u5fae\u961f\u5217\u662f\u7a7a\u7684, console.log('settimeout')\u6267\u884c\u5b8c\u51fa\u6808, \u6574\u4e2a\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5",(0,o.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u6253\u5370\u987a\u5e8f\u5982\u4e0a"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4e8b\u4ef6\u5faa\u73af")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6bcf\u6267\u884c\u4e00\u8f6e\u5b8f\u4efb\u52a1\u548c\u5fae\u4efb\u52a1, \u53eb\u505a\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af"),(0,o.kt)("p",{parentName:"div"},"\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u4f1a\u6267\u884c\u4e00\u6b21\u5b8f\u4efb\u52a1\uff0c\u4ee5\u53ca\u6240\u6709\u7684\u5fae\u4efb\u52a1\n\u8fd9\u662f\u6d4f\u89c8\u5668\u6807\u51c6\u5b9a\u4e49\u7684"))),(0,o.kt)("h3",{id:"\u9ad8\u9891\u9762\u8bd5\u9898"},"\u9ad8\u9891\u9762\u8bd5\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(() => {\n  console.log('setTimeout');\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('promise');\n  Promise.resolve().then(() => {\n    console.log('promise2');\n  });\n});\n\nconsole.log('main');\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," \u6bcf\u8f6e\u4e8b\u4ef6\u5faa\u73af\u6267\u884c\u4e00\u4e2a\u5b8f\u4efb\u52a1\u548c\u6240\u6709\u7684\u5fae\u4efb\u52a1\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(() => {\n  Promise.resolve().then(() => {\n    console.log('promise');\n  });\n}, 0);\n\nPromise.resolve().then(() => {\n  setTimeout(() => {\n    console.log('setTimeout');\n  }, 0);\n});\n\nconsole.log('main');\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4efb\u52a1\u961f\u5217")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," \u4efb\u52a1\u961f\u5217\u4e00\u5b9a\u4f1a\u4fdd\u6301\u5148\u8fdb\u5148\u51fa\u7684\u987a\u5e8f\u6267\u884c\u3002"))),(0,o.kt)("h2",{id:"nodejs\u4e8b\u4ef6\u5faa\u73af"},"nodejs\u4e8b\u4ef6\u5faa\u73af"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5f53Node.js\u542f\u52a8\u65f6\u4f1a\u521d\u59cb\u5316event loop, \u6bcf\u4e00\u4e2aevent loop\u90fd\u4f1a\u5305\u542b\u6309\u5982\u4e0b\u516d\u4e2a\u5faa\u73af\u9636")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"nodejs\u4e8b\u4ef6\u5faa\u73af\u548c\u6d4f\u89c8\u5668\u7684\u4e8b\u4ef6\u5faa\u73af\u5b8c\u5168\u4e0d\u4e00\u6837\u3002"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the REPL, which is not covered in this document) which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20190528144107202",src:n(65458).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u6ce8\u610f: \u56fe\u4e2d\u7684\u6bcf\u4e2a\u65b9\u6846\u88ab\u79f0\u4f5c\u4e8b\u4ef6\u5faa\u73af\u7684\u4e00\u4e2a\u201d\u9636\u6bb5(phase)\u201d"),", \u8fd96\u4e2a\u9636\u6bb5\u4e3a\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af\u3002",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"\u800c\u5728\u6d4f\u89c8\u5668\u91cc\u9762, \u4e00\u8f6e\u5b8f\u961f\u5217\u548c\u6240\u6709\u5fae\u961f\u5217\u6267\u884c, \u88ab\u79f0\u4e3a\u4e00\u8f6e\u4e8b\u4ef6\u5faa\u73af"))),(0,o.kt)("h3",{id:"\u9636\u6bb5\u6982\u89c8"},"\u9636\u6bb5\u6982\u89c8"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"timers(\u5b9a\u65f6\u5668)")," : \u6b64\u9636\u6bb5\u6267\u884c\u90a3\u4e9b\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout()")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"setInterval()")," \u8c03\u5ea6\u7684\u56de\u8c03\u51fd\u6570.",(0,o.kt)("br",{parentName:"p"}),"\n","\u7edf\u79f0\u4e3a\u5b9a\u65f6\u5668, \u4e5f\u5c31\u662f\u8bf4timers\u8fd9\u4e2a\u9636\u6bb5\u53bb\u6267\u884c\u5b9a\u65f6\u5668\u7684\u56de\u8c03")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"I/O callbacks(I/O\u56de\u8c03)")," : \u6b64\u9636\u6bb5\u4f1a\u6267\u884c\u51e0\u4e4e\u6240\u6709\u7684\u56de\u8c03\u51fd\u6570, \u9664\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"close callbacks(\u5173\u95ed\u56de\u8c03)")," \u548c \u90a3\u4e9b\u7531 ",(0,o.kt)("strong",{parentName:"p"},"timers")," \u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"setImmediate()"),"\u8c03\u5ea6\u7684\u56de\u8c03."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"setImmediate \u662fnodejs\u63d0\u4f9b\u7684\u4e00\u4e2a\u5f02\u6b65\u8c03\u5ea6\u7684\u65b9\u6cd5\nsetImmediate \u7ea6\u7b49\u4e8e setTimeout(cb,0)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"idle(\u7a7a\u8f6c), prepare : \u6b64\u9636\u6bb5\u53ea\u5728\u5185\u90e8\u4f7f\u7528")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"poll(\u8f6e\u8be2)")," : \u68c0\u7d22\u65b0\u7684I/O\u4e8b\u4ef6; \u5728\u6070\u5f53\u7684\u65f6\u5019Node\u4f1a\u963b\u585e\u5728\u8fd9\u4e2a\u9636\u6bb5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"check(\u68c0\u67e5) : ",(0,o.kt)("inlineCode",{parentName:"p"},"setImmediate()")," \u8bbe\u7f6e\u7684\u56de\u8c03\u4f1a\u5728\u6b64\u9636\u6bb5\u88ab\u8c03\u7528")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"close callbacks(\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03): \u8bf8\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"socket.on('close', ...)")," \u6b64\u7c7b\u7684\u56de\u8c03\u5728\u6b64\u9636\u6bb5\u88ab\u8c03\u7528"))),(0,o.kt)("p",null,"\u5728\u4e8b\u4ef6\u5faa\u73af\u7684\u6bcf\u6b21\u8fd0\u884c\u4e4b\u95f4, Node.js\u4f1a\u68c0\u67e5\u5b83\u662f\u5426\u5728\u7b49\u5f85\u5f02\u6b65I/O\u6216\u5b9a\u65f6\u5668, \u5982\u679c\u6ca1\u6709\u7684\u8bdd\u5c31\u4f1a\u81ea\u52a8\u5173\u95ed."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679cevent loop\u8fdb\u5165\u4e86 poll\u9636\u6bb5\uff0c\u4e14\u4ee3\u7801\u672a\u8bbe\u5b9atimer\uff0c\u5c06\u4f1a\u53d1\u751f\u4e0b\u9762\u60c5\u51b5\uff1a"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679cpoll queue\u4e0d\u4e3a\u7a7a\uff0cevent loop\u5c06\u540c\u6b65\u7684\u6267\u884cqueue\u91cc\u7684callback,\u76f4\u81f3queue\u4e3a\u7a7a\uff0c\u6216\u6267\u884c\u7684callback\u5230\u8fbe\u7cfb\u7edf\u4e0a\u9650;"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679cpoll queue\u4e3a\u7a7a\uff0c\u5c06\u4f1a\u53d1\u751f\u4e0b\u9762\u60c5\u51b5\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ee3\u7801\u5df2\u7ecf\u88absetImmediate()\u8bbe\u5b9a\u4e86callback, event loop\u5c06\u7ed3\u675fpoll\u9636\u6bb5\u8fdb\u5165check\u9636\u6bb5\uff0c\u5e76\u6267\u884ccheck\u9636\u6bb5\u7684queue (check\u9636\u6bb5\u7684queue\u662f setImmediate\u8bbe\u5b9a\u7684)"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ee3\u7801\u6ca1\u6709\u8bbe\u5b9asetImmediate(callback)\uff0cevent loop\u5c06\u963b\u585e\u5728\u8be5\u9636\u6bb5\u7b49\u5f85callbacks\u52a0\u5165poll queue,\u4e00\u65e6\u5230\u8fbe\u5c31\u7acb\u5373\u6267\u884c")))),(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679cevent loop\u8fdb\u5165\u4e86 poll\u9636\u6bb5\uff0c\u4e14\u4ee3\u7801\u8bbe\u5b9a\u4e86timer\uff1a"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679cpoll queue\u8fdb\u5165\u7a7a\u72b6\u6001\u65f6\uff08\u5373poll \u9636\u6bb5\u4e3a\u7a7a\u95f2\u72b6\u6001\uff09\uff0cevent loop\u5c06\u68c0\u67e5timers,\u5982\u679c\u67091\u4e2a\u6216\u591a\u4e2atimers\u65f6\u95f4\u65f6\u95f4\u5df2\u7ecf\u5230\u8fbe\uff0cevent loop\u5c06\u6309\u5faa\u73af\u987a\u5e8f\u8fdb\u5165 timers \u9636\u6bb5\uff0c\u5e76\u6267\u884ctimer queue."))),(0,o.kt)("h3",{id:"\u4ee3\u7801\u6267\u884c1"},"\u4ee3\u7801\u6267\u884c1"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"path.resolve()")," \u65b9\u6cd5\u4f1a\u628a\u4e00\u4e2a\u8def\u5f84\u6216\u8def\u5f84\u7247\u6bb5\u7684\u5e8f\u5217\u89e3\u6790\u4e3a\u4e00\u4e2a\u7edd\u5bf9\u8def\u5f84\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"fs.readFile")," \u5f02\u6b65\u5730\u8bfb\u53d6\u6587\u4ef6\u7684\u5168\u90e8\u5185\u5bb9\u3002"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"__dirname")," nodejs\u63d0\u4f9b\u7684\u4e00\u4e2a\u5168\u5c40\u7684\u53d8\u91cf, \u603b\u662f\u6307\u5411\u88ab\u6267\u884c\u6587\u4ef6\u5939\u7684\u7edd\u5bf9\u8def\u5f84")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var fs = require('fs');\nvar path = require('path');\n\nfunction someAsyncOperation (callback) {\n  // \u82b1\u8d392\u6beb\u79d2\n  fs.readFile(path.resolve(__dirname, '/read.txt'), callback);\n}\n\nvar timeoutScheduled = Date.now();\nvar fileReadTime = 0;\n\nsetTimeout(function () {\n  var delay = Date.now() - timeoutScheduled;\n  console.log('setTimeout: ' + (delay) + \"ms have passed since I was scheduled\");\n  console.log('fileReaderTime',fileReadtime - timeoutScheduled);\n}, 10);\n\nsomeAsyncOperation(function () {\n  fileReadtime = Date.now();\n  while(Date.now() - fileReadtime < 20) {\n\n  }\n});\n")),(0,o.kt)("h3",{id:"\u4ee3\u7801\u6267\u884c2"},"\u4ee3\u7801\u6267\u884c2"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var fs = require('fs');\n\nfunction someAsyncOperation (callback) {\n  var time = Date.now();\n  // \u82b1\u8d399\u6beb\u79d2\n  fs.readFile('/path/to/xxxx.pdf', callback);\n}\n\nvar timeoutScheduled = Date.now();\nvar fileReadTime = 0;\nvar delay = 0;\n\nsetTimeout(function () {\n  delay = Date.now() - timeoutScheduled;\n}, 5);\n\nsomeAsyncOperation(function () {\n  fileReadtime = Date.now();\n  while(Date.now() - fileReadtime < 20) {\n\n  }\n  console.log('setTimeout: ' + (delay) + \"ms have passed since I was scheduled\");\n  console.log('fileReaderTime',fileReadtime - timeoutScheduled);\n});\n")),(0,o.kt)("h3",{id:"\u4ee3\u7801\u6267\u884c3"},"\u4ee3\u7801\u6267\u884c3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728nodejs\u4e2d\uff0c setTimeout(demo, 0) === setTimeout(demo, 1)"),(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u6d4f\u89c8\u5668\u91cc\u9762 setTimeout(demo, 0) === setTimeout(demo, 4)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(function timeout () {\n  console.log('timeout');\n},1);\n\nsetImmediate(function immediate () {\n  console.log('immediate');\n});\n// setImmediate\u5b83\u6709\u65f6\u5019\u662f1ms\u4e4b\u524d\u6267\u884c\uff0c\u6709\u65f6\u5019\u53c8\u662f1ms\u4e4b\u540e\u6267\u884c\uff1f\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u56e0\u4e3aevent loop\u7684\u542f\u52a8\u4e5f\u662f\u9700\u8981\u65f6\u95f4\u7684\uff0c\u53ef\u80fd\u6267\u884c\u5230poll\u9636\u6bb5\u5df2\u7ecf\u8d85\u8fc7\u4e861ms\uff0c\u6b64\u65f6setTimeout\u4f1a\u5148\u6267\u884c\u3002\u53cd\u4e4bsetImmediate\u5148\u6267\u884c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var path = require('path');\nvar fs = require('fs');\n\nfs.readFile(path.resolve(__dirname, '/read.txt'), () => {\n    setImmediate(() => {\n        console.log('setImmediate');\n    })\n    \n    setTimeout(() => {\n        console.log('setTimeout')\n    }, 0)\n});\n")),(0,o.kt)("h3",{id:"processnexttick"},"process.nextTick"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"process.nextTick()\u4e0d\u5728event loop\u7684\u4efb\u4f55\u9636\u6bb5\u6267\u884c\uff0c\u800c\u662f\u5728\u5404\u4e2a\u9636\u6bb5\u5207\u6362\u7684\u4e2d\u95f4\u6267\u884c"),",\u5373\u4ece\u4e00\u4e2a\u9636\u6bb5\u5207\u6362\u5230\u4e0b\u4e2a\u9636\u6bb5\u524d\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var fs = require('fs');\n\nfs.readFile(__filename, () => {\n  setTimeout(() => {\n    console.log('setTimeout');\n  }, 0);\n  setImmediate(() => {\n    console.log('setImmediate');\n    process.nextTick(()=>{\n      console.log('nextTick3');\n    })\n  });\n  process.nextTick(()=>{\n    console.log('nextTick1');\n  })\n  process.nextTick(()=>{\n    console.log('nextTick2');\n  })\n});\n")),(0,o.kt)("h4",{id:"\u8bbe\u8ba1\u539f\u56e0"},"\u8bbe\u8ba1\u539f\u56e0"),(0,o.kt)("p",null,"\u5141\u8bb8\u5f00\u53d1\u8005\u901a\u8fc7\u9012\u5f52\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"process.nextTick()")," \u6765\u963b\u585eI/O\u64cd\u4f5c\u3002"),(0,o.kt)("h4",{id:"nexttick\u5e94\u7528\u573a\u666f"},"nextTick\u5e94\u7528\u573a\u666f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u591a\u4e2a\u4e8b\u4ef6\u91cc\u4ea4\u53c9\u6267\u884cCPU\u8fd0\u7b97\u5bc6\u96c6\u578b\u7684\u4efb\u52a1\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var http = require('http');\n\nfunction compute() {\n    \n    process.nextTick(compute);//\n}\n\nhttp.createServer(function(req, res) {  // \u670d\u52a1http\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u8fd8\u80fd\u62bd\u7a7a\u8fdb\u884c\u4e00\u4e9b\u8ba1\u7b97\u4efb\u52a1\n     res.writeHead(200, {'Content-Type': 'text/plain'});\n     res.end('Hello World');\n}).listen(5000, '127.0.0.1');\n\ncompute();\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u9012\u5f52\u7684\u8c03\u7528compute()\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5728\u4e8b\u4ef6\u5faa\u73af\u4e2d\u4f7f\u7528process.nextTick()\u5b9a\u4e49compute()\u5728\u4e0b\u4e00\u4e2a\u65f6\u95f4\u70b9\u6267\u884c\u5373\u53ef\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u5982\u679c\u6709\u65b0\u7684http\u8bf7\u6c42\u8fdb\u6765\uff0c\u4e8b\u4ef6\u5faa\u73af\u673a\u5236\u4f1a\u5148\u5904\u7406\u65b0\u7684\u8bf7\u6c42\uff0c\u7136\u540e\u518d\u8c03\u7528compute()\u3002\u53cd\u4e4b\uff0c\u5982\u679c\u4f60\u628acompute()\u653e\u5728\u4e00\u4e2a\u9012\u5f52\u8c03\u7528\u91cc\uff0c\u90a3\u7cfb\u7edf\u5c31\u4f1a\u4e00\u76f4\u963b\u585e\u5728compute()\u91cc\uff0c\u65e0\u6cd5\u5904\u7406\u65b0\u7684http\u8bf7\u6c42\u4e86\u3002")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4fdd\u6301\u56de\u8c03\u51fd\u6570\u5f02\u6b65\u6267\u884c\u7684\u539f\u5219")),(0,o.kt)("p",null,"\u5f53\u4f60\u7ed9\u4e00\u4e2a\u51fd\u6570\u5b9a\u4e49\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u65f6\uff0c\u4f60\u8981\u786e\u4fdd\u8fd9\u4e2a\u56de\u8c03\u662f\u88ab\u5f02\u6b65\u6267\u884c\u7684\u3002\u4e0b\u9762\u6211\u4eec\u770b\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4f8b\u5b50\u4e2d\u7684\u56de\u8c03\u8fdd\u53cd\u4e86\u8fd9\u4e00\u539f\u5219\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function asyncFake(data, callback) {        \n    if(data === 'foo') callback(true);\n    else callback(false);\n}\n\nasyncFake('bar', function(result) {\n    // this callback is actually called synchronously!\n});\n")),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48\u8fd9\u6837\u4e0d\u597d\u5462\uff1f\u6211\u4eec\u6765\u770bNode.js \u6587\u6863\u91cc\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var client = net.connect(8124, function() { \n    console.log('client connected');\n    client.write('world!\\r\\n');\n});\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u91cc\uff0c\u5982\u679c\u56e0\u4e3a\u67d0\u79cd\u539f\u56e0\uff0cnet.connect()\u53d8\u6210\u540c\u6b65\u6267\u884c\u7684\u4e86\uff0c\u56de\u8c03\u51fd\u6570\u5c31\u4f1a\u88ab\u7acb\u523b\u6267\u884c\uff0c\u56e0\u6b64\u56de\u8c03\u51fd\u6570\u5199\u5230\u5ba2\u6237\u7aef\u7684\u53d8\u91cf\u5c31\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u521d\u59cb\u5316\u4e86\u3002"),(0,o.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528process.nextTick()\u628a\u4e0a\u9762asyncFake()\u6539\u6210\u5f02\u6b65\u6267\u884c\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function asyncReal(data, callback) {\n    process.nextTick(function() {\n        callback(data === 'foo');       \n    });\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7528\u5728\u4e8b\u4ef6\u89e6\u53d1\u8fc7\u7a0b\u4e2d"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"EventEmitter\u67092\u4e2a\u6bd4\u8f83\u6838\u5fc3\u7684\u65b9\u6cd5\uff0c on\u548cemit\u3002node\u81ea\u5e26\u53d1\u5e03/\u8ba2\u9605\u6a21\u5f0f")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var EventEmitter = require('events').EventEmitter;\n\nfunction StreamLibrary(resourceName) { \n    this.emit('start');\n}\nStreamLibrary.prototype.__proto__ = EventEmitter.prototype;   // inherit from EventEmitter\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var stream = new StreamLibrary('fooResource');\n\nstream.on('start', function() {\n    console.log('Reading has started');\n});\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function StreamLibrary(resourceName) {      \n    var self = this;\n\n    process.nextTick(function() {\n        self.emit('start');\n    });  // \u4fdd\u8bc1\u8ba2\u9605\u6c38\u8fdc\u5728\u53d1\u5e03\u4e4b\u524d\n\n    // read from the file, and for every chunk read, do:        \n    \n}\n")),(0,o.kt)("h3",{id:"processnexttick-\u548c-settimeout-\u548c-setimmediate-\u533a\u522b"},"process.nextTick \u548c setTimeout \u548c setImmediate \u533a\u522b??"))}c.isMDXComponent=!0},57373:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20190526110746356-8ec73a1a1851e7c1d506672f377a8e63.png"},65458:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20190528144107202-9451ac9348ac449ea171ff2e1933bdca.png"}}]);