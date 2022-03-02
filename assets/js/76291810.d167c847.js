"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[274],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,v=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?o.createElement(v,l(l({ref:n},u),{},{components:t})):o.createElement(v,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7856:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),l=["components"],i={title:"[JS] URL \u7f16\u7801\u65b9\u6cd5",sidebar_position:7},c=void 0,p={unversionedId:"javascript/url",id:"javascript/url",title:"[JS] URL \u7f16\u7801\u65b9\u6cd5",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u7b2c\u4e94\u7ae0 5-4",source:"@site/docs/javascript/url.md",sourceDirName:"javascript",slug:"/javascript/url",permalink:"/docs/javascript/url",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/url.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"[JS] URL \u7f16\u7801\u65b9\u6cd5",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"[JS] \u5783\u573e\u56de\u6536\u4e0e\u5185\u5b58\u7ba1\u7406",permalink:"/docs/javascript/recycle"},next:{title:"[JS] \u671f\u7ea6\u4e0e\u5f02\u6b65\u51fd\u6570",permalink:"/docs/javascript/Promise"}},u=[{value:"ecnodeURI( ) \u4e0e encodeURIComponent( )",id:"ecnodeuri--\u4e0e-encodeuricomponent-",children:[{value:"\u4e24\u8005\u4e3b\u8981\u533a\u522b",id:"\u4e24\u8005\u4e3b\u8981\u533a\u522b",children:[],level:3}],level:2},{value:"decodeURI( ) \u4e0e decodeURIComponent( )",id:"decodeuri--\u4e0e-decodeuricomponent-",children:[],level:2}],d={toc:u};function s(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u7b2c\u4e94\u7ae0 5-4")),(0,a.kt)("h2",{id:"ecnodeuri--\u4e0e-encodeuricomponent-"},"ecnodeURI( ) \u4e0e encodeURIComponent( )"),(0,a.kt)("p",null,"Global \u5bf9\u8c61\u662f ECMAScript \u4e2d\u6700\u7279\u522b\u7684\u5bf9\u8c61\uff0c\u56e0\u4e3a\u4ee3\u7801\u4e0d\u4f1a\u663e\u5f0f\u5730\u8bbf\u95ee\u5b83\u3002ECMA-262 \u89c4\u5b9a Global\u5bf9\u8c61\u4e3a\u4e00\u79cd\u515c\u5e95\u5bf9\u8c61\uff0c\u5b83\u6240\u9488\u5bf9\u7684\u662f\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u4e8b\u5b9e\u4e0a\uff0c\u4e0d\u5b58\u5728\u5168\u5c40\u53d8\u91cf\u6216\u5168\u5c40\u51fd\u6570\u8fd9\u79cd\u4e1c\u897f\u3002\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u548c\u51fd\u6570\u90fd\u4f1a\u53d8\u6210 Global \u5bf9\u8c61\u7684\u5c5e\u6027 \u3002\u6bd4\u5982: ",(0,a.kt)("inlineCode",{parentName:"p"},"isNaN()\u3001isFinite()\u3001parseInt()\u548c parseFloat()"),"\u5b9e\u9645\u4e0a\u90fd\u662f Global \u5bf9\u8c61\u7684\u65b9\u6cd5\u3002\u9664\u4e86\u8fd9\u4e9b\uff0cGlobal \u5bf9\u8c61\u4e0a\u8fd8\u6709\u53e6\u5916\u4e00\u4e9b\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"encodeURI()\u548c encodeURIComponent()\u65b9\u6cd5\u7528\u4e8e\u7f16\u7801\u7edf\u4e00\u8d44\u6e90\u6807\u8bc6\u7b26\uff08URI\uff09\uff0c\u4ee5\u4fbf\u4f20\u7ed9\u6d4f\u89c8\u5668\u3002\u6709\u6548\u7684 URI \u4e0d\u80fd\u5305\u542b\u67d0\u4e9b\u5b57\u7b26\uff0c\u6bd4\u5982\u7a7a\u683c\u3002\u4f7f\u7528 URI \u7f16\u7801\u65b9\u6cd5\u6765\u7f16\u7801 URI \u53ef\u4ee5\u8ba9\u6d4f\u89c8\u5668\u80fd\u591f\u7406\u89e3\u5b83\u4eec\uff0c\u540c\u65f6\u53c8\u4ee5\u7279\u6b8a\u7684 UTF-8 \u7f16\u7801\u66ff\u6362\u6389\u6240\u6709\u65e0\u6548\u5b57\u7b26\u3002"),(0,a.kt)("p",null,'ecnodeURI()\u65b9\u6cd5\u7528\u4e8e\u5bf9\u6574\u4e2a URI \u8fdb\u884c\u7f16\u7801\uff0c\u6bd4\u5982"',(0,a.kt)("a",{parentName:"p",href:"http://www.wrox.com/illegal"},"www.wrox.com/illegal"),' value.js"\u3002\u800cencodeURIComponent()\u65b9\u6cd5\u7528\u4e8e\u7f16\u7801 URI \u4e2d\u5355\u72ec\u7684\u7ec4\u4ef6\uff0c\u6bd4\u5982\u524d\u9762 URL \u4e2d\u7684"illegal value.js"\u3002'),(0,a.kt)("h3",{id:"\u4e24\u8005\u4e3b\u8981\u533a\u522b"},"\u4e24\u8005\u4e3b\u8981\u533a\u522b"),(0,a.kt)("p",null,"encodeURI()\u4e0d\u4f1a\u7f16\u7801\u5c5e\u4e8e URL \u7ec4\u4ef6\u7684\u7279\u6b8a\u5b57\u7b26\uff0c\u6bd4\u5982\u5192\u53f7\u3001\u659c\u6760\u3001\u95ee\u53f7\u3001\u4e95\u53f7"),(0,a.kt)("p",null,"encodeURIComponent()\u4f1a\u7f16\u7801\u5b83\u53d1\u73b0\u7684\u6240\u6709\u975e\u6807\u51c6\u5b57\u7b26\u3002"),(0,a.kt)("p",null,"\u6765\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let uri = "http://www.wrox.com/illegal value.js#start";\n\nconsole.log(encodeURI(uri)); \n// "http://www.wrox.com/illegal%20value.js#start" \n\nconsole.log(encodeURIComponent(uri)); \n// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"\n\n// \u8fd9\u91cc\u4f7f\u7528 encodeURI()\u7f16\u7801\u540e\uff0c\u9664\u7a7a\u683c\u88ab\u66ff\u6362\u4e3a%20 \u4e4b\u5916\uff0c\u6ca1\u6709\u4efb\u4f55\u53d8\u5316\u3002\n// \u800c encodeURIComponent()\u65b9\u6cd5\u5c06\u6240\u6709\u975e\u5b57\u6bcd\u5b57\u7b26\u90fd\u66ff\u6362\u6210\u4e86\u76f8\u5e94\u7684\u7f16\u7801\u5f62\u5f0f\u3002\n\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f7f\u7528\u9891\u7387")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e00\u822c\u6765\u8bf4\uff0c\u4f7f\u7528 encodeURIComponent()\u5e94\u8be5\u6bd4\u4f7f\u7528 encodeURI()\u7684\u9891\u7387\u66f4\u9ad8\uff0c\n\u8fd9\u662f\u56e0\u4e3a\u7f16\u7801\u67e5\u8be2\u5b57\u7b26\u4e32\u53c2\u6570\u6bd4\u7f16\u7801\u57fa\u51c6 URI \u7684\u6b21\u6570\u66f4\u591a\u3002"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"decodeuri--\u4e0e-decodeuricomponent-"},"decodeURI( ) \u4e0e decodeURIComponent( )"),(0,a.kt)("p",null,"decodeURI()\u53ea\u5bf9\u4f7f\u7528 encodeURI()\u7f16\u7801\u8fc7\u7684\u5b57\u7b26\u89e3\u7801\u3002\n\u4f8b\u5982\uff0c%20 \u4f1a\u88ab\u66ff\u6362\u4e3a\u7a7a\u683c\uff0c\u4f46%23 \u4e0d\u4f1a\u88ab\u66ff\u6362\u4e3a\u4e95\u53f7\uff08#\uff09\uff0c\u56e0\u4e3a\u4e95\u53f7\u4e0d\u662f\u7531 encodeURI()\u66ff\u6362\u7684\u3002"),(0,a.kt)("p",null,"decodeURIComponent()\u89e3\u7801\u6240\u6709\u88ab encodeURIComponent()\u7f16\u7801\u7684\u5b57\u7b26\uff0c\u57fa\u672c\u4e0a\u5c31\u662f\u89e3\u7801\u6240\u6709\u7279\u6b8a\u503c\u3002"),(0,a.kt)("p",null,"\u6765\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";\n// http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start\nconsole.log(decodeURI(uri));\n\n// http:// www.wrox.com/illegal value.js#start\nconsole.log(decodeURIComponent(uri)); \n\n// \u8fd9\u91cc\uff0curi \u53d8\u91cf\u4e2d\u5305\u542b\u4e00\u4e2a\u4f7f\u7528 encodeURIComponent()\u7f16\u7801\u8fc7\u7684\u5b57\u7b26\u4e32\u3002\n\n// \u9996\u5148\u8f93\u51fa\u7684\u662f\u4f7f\u7528decodeURI()\u89e3\u7801\u7684\u7ed3\u679c\uff0c\u53ef\u4ee5\u770b\u5230\u53ea\u7528\u7a7a\u683c\u66ff\u6362\u4e86%20\u3002\n\n// \u7136\u540e\u662f\u4f7f\u7528 decodeURIComponent()\u89e3\u7801\u7684\u7ed3\u679c\uff0c\u5176\u4e2d\u66ff\u6362\u4e86\u6240\u6709\u7279\u6b8a\u5b57\u7b26\uff0c\n// \u5e76\u8f93\u51fa\u4e86\u6ca1\u6709\u5305\u542b\u4efb\u4f55\u8f6c\u4e49\u7684\u5b57\u7b26\u4e32\u3002\uff08\u8fd9\u4e2a\u5b57\u7b26\u4e32\u4e0d\u662f\u6709\u6548\u7684 URL\u3002\uff09\n')))}s.isMDXComponent=!0}}]);