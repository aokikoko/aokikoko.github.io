"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3545],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(t),s=o,f=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},31988:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=t(87462),o=t(63366),l=(t(67294),t(3905)),a=["components"],i={title:"[JS] \u6a21\u5757\u6a21\u5f0f(ES6\u4e4b\u524d)",sidebar_position:20},u=void 0,d={unversionedId:"javascript/modules1",id:"javascript/modules1",title:"[JS] \u6a21\u5757\u6a21\u5f0f(ES6\u4e4b\u524d)",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u7b2c26\u7ae0",source:"@site/docs/javascript/modules1.md",sourceDirName:"javascript",slug:"/javascript/modules1",permalink:"/docs/javascript/modules1",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/modules1.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"[JS] \u6a21\u5757\u6a21\u5f0f(ES6\u4e4b\u524d)",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"[JS] \u4e8b\u4ef6",permalink:"/docs/javascript/event"},next:{title:"[JS] \u6a21\u5757\u6a21\u5f0f(ES6\u51fa\u73b0\u7684\u6a21\u5757\u5316)",permalink:"/docs/javascript/modules2"}},p=[{value:"\u7406\u89e3\u6a21\u5757\u6a21\u5f0f",id:"\u7406\u89e3\u6a21\u5757\u6a21\u5f0f",children:[{value:"\u6a21\u5757\u6807\u8bc6\u7b26",id:"\u6a21\u5757\u6807\u8bc6\u7b26",children:[],level:3},{value:"\u5165\u53e3",id:"\u5165\u53e3",children:[],level:3},{value:"\u5f02\u6b65\u4f9d\u8d56",id:"\u5f02\u6b65\u4f9d\u8d56",children:[],level:3},{value:"\u52a8\u6001\u4f9d\u8d56",id:"\u52a8\u6001\u4f9d\u8d56",children:[],level:3},{value:"\u9759\u6001\u5206\u6790",id:"\u9759\u6001\u5206\u6790",children:[],level:3}],level:2},{value:"\u4f7f\u7528 ES6 \u4e4b\u524d\u7684\u6a21\u5757\u52a0\u8f7d\u5668",id:"\u4f7f\u7528-es6-\u4e4b\u524d\u7684\u6a21\u5757\u52a0\u8f7d\u5668",children:[{value:"CommonJS",id:"commonjs",children:[],level:3},{value:"AMD\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49",id:"amd\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49",children:[],level:3},{value:"UMD\u901a\u7528\u6a21\u5757\u5b9a\u4e49",id:"umd\u901a\u7528\u6a21\u5757\u5b9a\u4e49",children:[],level:3}],level:2}],m={toc:p};function c(e){var n=e.components,i=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u7b2c26\u7ae0")),(0,l.kt)("h2",{id:"\u7406\u89e3\u6a21\u5757\u6a21\u5f0f"},"\u7406\u89e3\u6a21\u5757\u6a21\u5f0f"),(0,l.kt)("p",null,"ECMAScript 6 \u6a21\u5757\u89c4\u8303\u51fa\u73b0\u4e4b\u524d, \u867d\u7136\u6d4f\u89c8\u5668\u539f\u751f\u4e0d\u652f\u6301\u6a21\u5757\u7684\u884c\u4e3a\uff0c\u4f46\u8feb\u5207\u9700\u8981\u8fd9\u6837\u7684\u884c\u4e3a\u3002ECMAScript \u540c\u6837\u4e0d\u652f\u6301\u6a21\u5757\uff0c\u56e0\u6b64\u5e0c\u671b\u4f7f\u7528\u6a21\u5757\u6a21\u5f0f\u7684\u5e93\u6216\u4ee3\u7801\u5e93\u5fc5\u987b\u57fa\u4e8e JavaScript \u7684\u8bed\u6cd5\u548c\u8bcd\u6cd5\u7279\u6027\u201c\u4f2a\u9020\u201d\u51fa\u7c7b\u4f3c\u6a21\u5757\u7684\u884c\u4e3a\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a JavaScript \u662f\u5f02\u6b65\u52a0\u8f7d\u7684\u89e3\u91ca\u578b\u8bed\u8a00\uff0c\u6240\u4ee5\u5f97\u5230\u5e7f\u6cdb\u5e94\u7528\u7684\u5404\u79cd\u6a21\u5757\u5b9e\u73b0\u4e5f\u8868\u73b0\u51fa\u4e0d\u540c\u7684\u5f62\u6001\u3002\u8fd9\u4e9b\u4e0d\u540c\u7684\u5f62\u6001\u51b3\u5b9a\u4e86\u4e0d\u540c\u7684\u7ed3\u679c\uff0c\u4f46\u6700\u7ec8\u5b83\u4eec\u90fd\u5b9e\u73b0\u4e86\u7ecf\u5178\u7684\u6a21\u5757\u6a21\u5f0f\u3002"),(0,l.kt)("h3",{id:"\u6a21\u5757\u6807\u8bc6\u7b26"},"\u6a21\u5757\u6807\u8bc6\u7b26"),(0,l.kt)("p",null,"\u6a21\u5757\u6807\u8bc6\u7b26\u662f\u6240\u6709\u6a21\u5757\u7cfb\u7edf\u901a\u7528\u7684\u6982\u5ff5\u3002\u6a21\u5757\u7cfb\u7edf\u672c\u8d28\u4e0a\u662f\u952e/\u503c\u5b9e\u4f53\uff0c\u5176\u4e2d\u6bcf\u4e2a\u6a21\u5757\u90fd\u6709\u4e2a\u53ef\u7528\u4e8e\u5f15\u7528\u5b83\u7684\u6807\u8bc6\u7b26\u3002\u8fd9\u4e2a\u6807\u8bc6\u7b26\u5728\u6a21\u62df\u6a21\u5757\u7684\u7cfb\u7edf\u4e2d\u53ef\u80fd\u662f\u5b57\u7b26\u4e32\uff0c\u5728\u539f\u751f\u5b9e\u73b0\u7684\u6a21\u5757\u7cfb\u7edf\u4e2d\u53ef\u80fd\u662f\u6a21\u5757\u6587\u4ef6\u7684\u5b9e\u9645\u8def\u5f84\u3002"),(0,l.kt)("p",null,"\u6709\u7684\u6a21\u5757\u7cfb\u7edf\u652f\u6301\u660e\u786e\u58f0\u660e\u6a21\u5757\u7684\u6807\u8bc6\uff0c\u8fd8\u6709\u7684\u6a21\u5757\u7cfb\u7edf\u4f1a\u9690\u5f0f\u5730\u4f7f\u7528\u6587\u4ef6\u540d\u4f5c\u4e3a\u6a21\u5757\u6807\u8bc6\u7b26\u3002\u4e0d\u7ba1\u600e\u6837\uff0c\u5b8c\u5584\u7684\u6a21\u5757\u7cfb\u7edf\u4e00\u5b9a\u4e0d\u4f1a\u5b58\u5728\u6a21\u5757\u6807\u8bc6\u51b2\u7a81\u7684\u95ee\u9898\uff0c\u4e14\u7cfb\u7edf\u4e2d\u7684\u4efb\u4f55\u6a21\u5757\u90fd\u5e94\u8be5\u80fd\u591f\u65e0\u6b67\u4e49\u5730\u5f15\u7528\u5176\u4ed6\u6a21\u5757\u3002"),(0,l.kt)("p",null,"\u5c06\u6a21\u5757\u6807\u8bc6\u7b26\u89e3\u6790\u4e3a\u5b9e\u9645\u6a21\u5757\u7684\u8fc7\u7a0b\u8981\u6839\u636e\u6a21\u5757\u7cfb\u7edf\u5bf9\u6807\u8bc6\u7b26\u7684\u5b9e\u73b0\u3002\u539f\u751f\u6d4f\u89c8\u5668\u6a21\u5757\u6807\u8bc6\u7b26\u5fc5\u987b\u63d0\u4f9b\u5b9e\u9645 JavaScript \u6587\u4ef6\u7684\u8def\u5f84\u3002\u9664\u4e86\u6587\u4ef6\u8def\u5f84\uff0cNode.js \u8fd8\u4f1a\u641c\u7d22 node_modules \u76ee\u5f55\uff0c\u7528\u6807\u8bc6\u7b26\u53bb\u5339\u914d\u5305\u542b index.js \u7684\u76ee\u5f55\u3002"),(0,l.kt)("h3",{id:"\u5165\u53e3"},"\u5165\u53e3"),(0,l.kt)("p",null,"\u76f8\u4e92\u4f9d\u8d56\u7684\u6a21\u5757\u5fc5\u987b\u6307\u5b9a\u4e00\u4e2a\u6a21\u5757\u4f5c\u4e3a\u5165\u53e3\uff08entry point\uff09\uff0c\u8fd9\u4e5f\u662f\u4ee3\u7801\u6267\u884c\u7684\u8d77\u70b9\u3002\u8fd9\u662f\u7406\u6240\u5f53\u7136\u7684\uff0c\u56e0\u4e3a JavaScript \u662f\u987a\u5e8f\u6267\u884c\u7684\uff0c\u5e76\u4e14\u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u6240\u4ee5\u4ee3\u7801\u5fc5\u987b\u6709\u6267\u884c\u7684\u8d77\u70b9\u3002\u5165\u53e3\u6a21\u5757\u4e5f\u53ef\u80fd\u4f9d\u8d56\u5176\u4ed6\u6a21\u5757\uff0c\u5176\u4ed6\u6a21\u5757\u540c\u6837\u53ef\u80fd\u6709\u81ea\u5df1\u7684\u4f9d\u8d56\u3002\u4e8e\u662f\u6a21\u5757\u5316 JavaScript \u5e94\u7528\u7a0b\u5e8f\u7684\u6240\u6709\u6a21\u5757\u4f1a\u6784\u6210\u4f9d\u8d56\u56fe\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rely",src:t(91374).Z})),(0,l.kt)("p",null,"\u56fe\u4e2d\u7684\u7bad\u5934\u8868\u793a\u4f9d\u8d56\u65b9\u5411\uff1a\u6a21\u5757 A \u4f9d\u8d56\u6a21\u5757 B \u548c\u6a21\u5757 C\uff0c\u6a21\u5757 B \u4f9d\u8d56\u6a21\u5757 D \u548c\u6a21\u5757 E\uff0c\u6a21\u5757 C \u4f9d\u8d56\u6a21\u5757 E\u3002\u56e0\u4e3a\u6a21\u5757\u5fc5\u987b\u5728\u4f9d\u8d56\u52a0\u8f7d\u5b8c\u6210\u540e\u624d\u80fd\u88ab\u52a0\u8f7d\uff0c\u6240\u4ee5\u8fd9\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u5165\u53e3\u6a21\u5757 A \u5fc5\u987b\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u5176\u4ed6\u90e8\u5206\u52a0\u8f7d\u540e\u624d\u80fd\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u201c\u52a0\u8f7d\u201d\u7684\u6982\u5ff5\u53ef\u4ee5\u6709\u591a\u79cd\u5b9e\u73b0\u65b9\u5f0f\u3002\u56e0\u4e3a\u6a21\u5757\u662f\u4f5c\u4e3a\u5305\u542b\u5c06\u7acb\u5373\u6267\u884c\u7684 JavaScript\u4ee3\u7801\u7684\u6587\u4ef6\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u4e00\u79cd\u53ef\u80fd\u662f\u6309\u7167\u4f9d\u8d56\u56fe\u7684\u8981\u6c42\u4f9d\u6b21\u8bf7\u6c42\u5404\u4e2a\u811a\u672c\u3002\u5bf9\u4e8e\u524d\u9762\u7684\u5e94\u7528\u7a0b\u5e8f\u6765\u8bf4\uff0c\u4e0b\u9762\u7684\u811a\u672c\u8bf7\u6c42\u987a\u5e8f\u80fd\u591f\u6ee1\u8db3\u4f9d\u8d56\u56fe\u7684\u8981\u6c42\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<script src="moduleE.js"><\/script>\n<script src="moduleD.js"><\/script>\n<script src="moduleC.js"><\/script>\n<script src="moduleB.js"><\/script>\n<script src="moduleA.js"><\/script>\n')),(0,l.kt)("p",null,"\u6a21\u5757\u52a0\u8f7d\u662f\u201c\u963b\u585e\u7684\u201d\uff0c\u8fd9\u610f\u5473\u7740\u524d\u7f6e\u64cd\u4f5c\u5fc5\u987b\u5b8c\u6210\u624d\u80fd\u6267\u884c\u540e\u7eed\u64cd\u4f5c\u3002\u6bcf\u4e2a\u6a21\u5757\u5728\u81ea\u5df1\u7684\u4ee3\u7801\u5230\u8fbe\u6d4f\u89c8\u5668\u4e4b\u540e\u5b8c\u6210\u52a0\u8f7d\uff0c\u6b64\u65f6\u5176\u4f9d\u8d56\u5df2\u7ecf\u52a0\u8f7d\u5e76\u521d\u59cb\u5316\u3002\u4e0d\u8fc7\uff0c\u8fd9\u4e2a\u7b56\u7565\u5b58\u5728\u4e00\u4e9b\u6027\u80fd\u548c\u590d\u6742\u6027\u95ee\u9898\u3002\u4e3a\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u800c\u6309\u987a\u5e8f\u52a0\u8f7d\u4e94\u4e2a JavaScript \u6587\u4ef6\u5e76\u4e0d\u7406\u60f3\uff0c\u5e76\u4e14\u624b\u52a8\u7ba1\u7406\u6b63\u786e\u7684\u52a0\u8f7d\u987a\u5e8f\u4e5f\u9887\u4e3a\u68d8\u624b\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u5f02\u6b65\u4f9d\u8d56"},"\u5f02\u6b65\u4f9d\u8d56"),(0,l.kt)("p",null,"\u56e0\u4e3a JavaScript \u53ef\u4ee5\u5f02\u6b65\u6267\u884c\uff0c\u6240\u4ee5\u5982\u679c\u80fd\u6309\u9700\u52a0\u8f7d\u5c31\u597d\u4e86\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u53ef\u4ee5\u8ba9 JavaScript \u901a\u77e5\u6a21\u5757\u7cfb\u7edf\u5728\u5fc5\u8981\u65f6\u52a0\u8f7d\u65b0\u6a21\u5757\uff0c\u5e76\u5728\u6a21\u5757\u52a0\u8f7d\u5b8c\u6210\u540e\u63d0\u4f9b\u56de\u8c03\u3002\u5728\u4ee3\u7801\u5c42\u9762\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u4f2a\u4ee3\u7801\u6765\u5b9e\u73b0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5728\u6a21\u5757 A \u91cc\u9762\nload('moduleB').then(function(moduleB) {\n moduleB.doStuff();\n}); \n")),(0,l.kt)("p",null,"\u6a21\u5757 A \u7684\u4ee3\u7801\u4f7f\u7528\u4e86 moduleB \u6807\u8bc6\u7b26\u5411\u6a21\u5757\u7cfb\u7edf\u8bf7\u6c42\u52a0\u8f7d\u6a21\u5757 B\uff0c\u5e76\u4ee5\u6a21\u5757 B \u4f5c\u4e3a\u53c2\u6570\u8c03\u7528\u56de\u8c03\u3002\u6a21\u5757 B \u53ef\u80fd\u5df2\u52a0\u8f7d\u5b8c\u6210\uff0c\u4e5f\u53ef\u80fd\u5fc5\u987b\u91cd\u65b0\u8bf7\u6c42\u548c\u521d\u59cb\u5316\uff0c\u4f46\u8fd9\u91cc\u7684\u4ee3\u7801\u5e76\u4e0d\u5173\u5fc3\u3002\u8fd9\u4e9b\u4e8b\u60c5\u90fd\u4ea4\u7ed9\u4e86\u6a21\u5757\u52a0\u8f7d\u5668\u53bb\u8d1f\u8d23\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u91cd\u5199\u524d\u9762\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ea\u4f7f\u7528\u52a8\u6001\u6a21\u5757\u52a0\u8f7d\uff0c\u90a3\u4e48\u4f7f\u7528\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"<script>\u6807\u7b7e\u5373\u53ef\u5b8c\u6210\u6a21\u5757 A \u7684"),"\u52a0\u8f7d\u3002\u6a21\u5757 A \u4f1a\u6309\u9700\u8bf7\u6c42\u6a21\u5757\u6587\u4ef6\uff0c\u800c\u4e0d\u4f1a\u751f\u6210\u5fc5\u9700\u7684\u4f9d\u8d56\u5217\u8868\u3002\u8fd9\u6837\u6709\u51e0\u4e2a\u597d\u5904\uff0c\u5176\u4e2d\u4e4b\u4e00\u5c31\u662f\u6027\u80fd\uff0c\u56e0\u4e3a\u5728\u9875\u9762\u52a0\u8f7d\u65f6\u53ea\u9700\u540c\u6b65\u52a0\u8f7d\u4e00\u4e2a\u6587\u4ef6\u3002\u8fd9\u4e9b\u811a\u672c\u4e5f\u53ef\u4ee5\u5206\u79bb\u51fa\u6765\uff0c\u6bd4\u5982\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"<script>\u6807\u7b7e\u5e94\u7528 defer \u6216 async \u5c5e\u6027\uff0c\u518d\u52a0\u4e0a\u80fd\u591f\u8bc6\u522b\u5f02\u6b65"),"\u811a\u672c\u4f55\u65f6\u52a0\u8f7d\u548c\u521d\u59cb\u5316\u7684\u903b\u8f91\u3002"),(0,l.kt)("h3",{id:"\u52a8\u6001\u4f9d\u8d56"},"\u52a8\u6001\u4f9d\u8d56"),(0,l.kt)("p",null,"\u6709\u4e9b\u6a21\u5757\u7cfb\u7edf\u8981\u6c42\u5f00\u53d1\u8005\u5728\u6a21\u5757\u5f00\u59cb\u5217\u51fa\u6240\u6709\u4f9d\u8d56\uff0c\u800c\u6709\u4e9b\u6a21\u5757\u7cfb\u7edf\u5219\u5141\u8bb8\u5f00\u53d1\u8005\u5728\u7a0b\u5e8f\u7ed3\u6784\u4e2d\u52a8\u6001\u6dfb\u52a0\u4f9d\u8d56\u3002\u52a8\u6001\u6dfb\u52a0\u7684\u4f9d\u8d56\u6709\u522b\u4e8e\u6a21\u5757\u5f00\u5934\u5217\u51fa\u7684\u5e38\u89c4\u4f9d\u8d56\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u5fc5\u987b\u5728\u6a21\u5757\u6267\u884c\u524d\u52a0\u8f7d\u5b8c\u6bd5\u3002\u4e0b\u9762\u662f\u52a8\u6001\u4f9d\u8d56\u52a0\u8f7d\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"if (loadCondition) {\n require('./moduleA');\n} \n")),(0,l.kt)("p",null,"\u5728\u8fd9\u4e2a\u6a21\u5757\u4e2d\uff0c\u662f\u5426\u52a0\u8f7d moduleA \u662f\u8fd0\u884c\u65f6\u786e\u5b9a\u7684\u3002\u52a0\u8f7d moduleA \u65f6\u53ef\u80fd\u662f\u963b\u585e\u7684\uff0c\u4e5f\u53ef\u80fd\u5bfc\u81f4\u6267\u884c\uff0c\u4e14\u53ea\u6709\u6a21\u5757\u52a0\u8f7d\u540e\u624d\u4f1a\u7ee7\u7eed\u3002\u65e0\u8bba\u600e\u6837\uff0c\u6a21\u5757\u5185\u90e8\u7684\u4ee3\u7801\u5728 moduleA \u52a0\u8f7d\u524d\u90fd\u4e0d\u80fd\u6267\u884c\uff0c\u56e0\u4e3amoduleA \u7684\u5b58\u5728\u662f\u540e\u7eed\u6a21\u5757\u884c\u4e3a\u6b63\u786e\u7684\u5173\u952e\u3002\u52a8\u6001\u4f9d\u8d56\u53ef\u4ee5\u652f\u6301\u66f4\u590d\u6742\u7684\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f46\u4ee3\u4ef7\u662f\u589e\u52a0\u4e86\u5bf9\u6a21\u5757\u8fdb\u884c\u9759\u6001\u5206\u6790\u7684\u96be\u5ea6\u3002"),(0,l.kt)("h3",{id:"\u9759\u6001\u5206\u6790"},"\u9759\u6001\u5206\u6790"),(0,l.kt)("p",null,"\u6a21\u5757\u4e2d\u5305\u542b\u7684\u53d1\u9001\u5230\u6d4f\u89c8\u5668\u7684 JavaScript \u4ee3\u7801\u7ecf\u5e38\u4f1a\u88ab\u9759\u6001\u5206\u6790\uff0c\u5206\u6790\u5de5\u5177\u4f1a\u68c0\u67e5\u4ee3\u7801\u7ed3\u6784\u5e76\u5728\u4e0d\u5b9e\u9645\u6267\u884c\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u63a8\u65ad\u5176\u884c\u4e3a\u3002\u5bf9\u9759\u6001\u5206\u6790\u53cb\u597d\u7684\u6a21\u5757\u7cfb\u7edf\u53ef\u4ee5\u8ba9\u6a21\u5757\u6253\u5305\u7cfb\u7edf\u66f4\u5bb9\u6613\u5c06\u4ee3\u7801\u5904\u7406\u4e3a\u8f83\u5c11\u7684\u6587\u4ef6\u3002\u5b83\u8fd8\u5c06\u652f\u6301\u5728\u667a\u80fd\u7f16\u8f91\u5668\u91cc\u667a\u80fd\u81ea\u52a8\u5b8c\u6210\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4f7f\u7528-es6-\u4e4b\u524d\u7684\u6a21\u5757\u52a0\u8f7d\u5668"},"\u4f7f\u7528 ES6 \u4e4b\u524d\u7684\u6a21\u5757\u52a0\u8f7d\u5668"),(0,l.kt)("p",null,"ES6 \u539f\u751f\u652f\u6301\u6a21\u5757\u4e4b\u524d\uff0c\u4f7f\u7528\u6a21\u5757\u7684 JavaScript \u4ee3\u7801\u672c\u8d28\u4e0a\u662f\u5e0c\u671b\u4f7f\u7528\u9ed8\u8ba4\u6ca1\u6709\u7684\u8bed\u8a00\u6027\u3002\u56e0\u6b64\uff0c\u5fc5\u987b\u6309\u7167\u7b26\u5408\u67d0\u79cd\u89c4\u8303\u7684\u6a21\u5757\u8bed\u6cd5\u6765\u7f16\u5199\u4ee3\u7801\uff0c\u53e6\u5916\u8fd8\u9700\u8981\u5355\u72ec\u7684\u6a21\u5757\u5de5\u5177\u628a\u8fd9\u6a21\u5757\u8bed\u6cd5\u4e0eJavaScript \u8fd0\u884c\u65f6\u8fde\u63a5\u8d77\u6765\u3002\u8fd9\u91cc\u7684\u6a21\u5757\u8bed\u6cd5\u548c\u8fde\u63a5\u65b9\u5f0f\u6709\u4e0d\u540c\u7684\u8868\u73b0\u5f62\u5f0f\uff0c\u5e38\u9700\u8981\u5728\u6d4f\u89c8\u5668\u4e2d\u989d\u5916\u52a0\u8f7d\u5e93\u6216\u8005\u5728\u6784\u5efa\u65f6\u5b8c\u6210\u9884\u5904\u7406\u3002"),(0,l.kt)("h3",{id:"commonjs"},"CommonJS"),(0,l.kt)("p",null,"CommonJS \u89c4\u8303\u6982\u8ff0\u4e86\u540c\u6b65\u58f0\u660e\u4f9d\u8d56\u7684\u6a21\u5757\u5b9a\u4e49\u3002\u8fd9\u4e2a\u89c4\u8303\u4e3b\u8981\u7528\u4e8e\u5728\u670d\u52a1\u5668\u7aef\u5b9e\u73b0\u6a21\u5757\u5316\u4ee3\u7801\u7ec4\u7ec7\uff0c\u4f46\u4e5f\u53ef\u7528\u4e8e\u5b9a\u4e49\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528\u7684\u6a21\u5757\u4f9d\u8d56\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"CommonJS \u6a21\u5757\u8bed\u6cd5\u4e0d\u80fd\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u8fd0\u884c"),"\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e00\u822c\u8ba4\u4e3a\uff0cNode.js\u7684\u6a21\u5757\u7cfb\u7edf\u4f7f\u7528\u4e86CommonJS\u89c4\u8303\uff0c\u5b9e\u9645\u4e0a\u5e76\u4e0d\u5b8c\u5168\u6b63\u786e\u3002Node.js\u4f7f\u7528\u4e86\u8f7b\u5fae\u4fee\u6539\u7248\u672c\u7684 CommonJS\uff0c\u56e0\u4e3a Node.js \u4e3b\u8981\u5728\u670d\u52a1\u5668\u73af\u5883\u4e0b\u4f7f\u7528\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u8003\u8651\u7f51\u7edc\u5ef6\u8fdf\u95ee\u9898\u3002"))),(0,l.kt)("p",null,"CommonJS \u6a21\u5757\u5b9a\u4e49\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"require()"),"\u6307\u5b9a\u4f9d\u8d56\uff0c\u800c\u4f7f\u7528 exports \u5bf9\u8c61\u5b9a\u4e49\u81ea\u5df1\u7684\u516c\u5171 API\u4e0b\u9762\u7684\u4ee3\u7801\u5c55\u793a\u4e86\u7b80\u5355\u7684\u6a21\u5757\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var moduleB = require('./moduleB');\nmodule.exports = {\n stuff: moduleB.doStuff();\n}; \n")),(0,l.kt)("p",null,"\u65e0\u8bba\u4e00\u4e2a\u6a21\u5757\u5728 require()\u4e2d\u88ab\u5f15\u7528\u591a\u5c11\u6b21\uff0c\u6a21\u5757\u6c38\u8fdc\u662f\u5355\u4f8b\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0cmoduleA \u53ea\u4f1a\u88ab\u6253\u5370\u4e00\u6b21\u3002\u8fd9\u662f\u56e0\u4e3a\u65e0\u8bba\u8bf7\u6c42\u591a\u5c11\u6b21\uff0cmoduleA \u53ea\u4f1a\u88ab\u52a0\u8f7d\u4e00\u6b21\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log('moduleA');\nvar a1 = require('./moduleA');\nvar a2 = require('./moduleA');\nconsole.log(a1 === a2); // true\n")),(0,l.kt)("p",null,"\u6a21\u5757\u7b2c\u4e00\u6b21\u52a0\u8f7d\u540e\u4f1a\u88ab\u7f13\u5b58\uff0c\u540e\u7eed\u52a0\u8f7d\u4f1a\u53d6\u5f97\u7f13\u5b58\u7684\u6a21\u5757\uff08\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff09\u3002\u6a21\u5757\u52a0\u8f7d\u987a\u5e8f\u7531\u4f9d\u8d56\u56fe\u51b3\u5b9a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log('moduleA');\nrequire('./moduleA');\nrequire('./moduleB'); // \"moduleA\"\nrequire('./moduleA'); \n")),(0,l.kt)("p",null,"CommonJS \u4e2d\uff0c\u6a21\u5757\u52a0\u8f7d\u662f\u6a21\u5757\u7cfb\u7edf\u6267\u884c\u7684\u540c\u6b65\u64cd\u4f5c\u3002\u56e0\u6b64 require()\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u5d4c\u5165\u5728\u6a21\u5757\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log('moduleA');\nif (loadCondition) {\n require('./moduleA');\n}\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0cmoduleA \u53ea\u4f1a\u5728 loadCondition \u6c42\u503c\u4e3a true \u65f6\u624d\u4f1a\u52a0\u8f7d\u3002\u8fd9\u4e2a\u52a0\u8f7d\u662f\u540c\u6b65\u7684\uff0c\u56e0\u6b64 if()\u5757\u4e4b\u524d\u7684\u4efb\u4f55\u4ee3\u7801\u90fd\u4f1a\u5728\u52a0\u8f7d moduleA \u4e4b\u524d\u6267\u884c\uff0c\u800c if()\u5757\u4e4b\u540e\u7684\u4efb\u4f55\u4ee3\u7801\u90fd\u4f1a\u5728\u52a0\u8f7d moduleA \u4e4b\u540e\u6267\u884c\u3002\u56e0\u6b64\uff0c\u5982\u679c moduleA \u5df2\u7ecf\u5728\u524d\u9762\u67d0\u4e2a\u5730\u65b9\u52a0\u8f7d\u8fc7\u4e86\uff0c\u8fd9\u4e2a\u6761 require()\u5c31\u610f\u5473\u7740\u53ea\u66b4\u9732 moduleA \u8fd9\u4e2a\u547d\u540d\u7a7a\u95f4\u800c\u5df2\u3002"),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u6a21\u5757\u7cfb\u7edf\u662f Node.js \u5b9e\u73b0\u7684\uff0c\u56e0\u6b64./moduleB \u662f\u76f8\u5bf9\u8def\u5f84\uff0c\u6307\u5411\u4e0e\u5f53\u524d\u6a21\u5757\u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u4e2d\u7684\u6a21\u5757\u76ee\u6807\u3002Node.js \u4f1a\u4f7f\u7528 require()\u8c03\u7528\u4e2d\u7684\u6a21\u5757\u6807\u8bc6\u7b26\u5b57\u7b26\u4e32\u53bb\u89e3\u6790\u6a21\u5757\u5f15\u7528\u3002\u5728Node.js \u4e2d\u53ef\u4ee5\u4f7f\u7528\u7edd\u5bf9\u6216\u76f8\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u5728 node_modules \u76ee\u5f55\u4e2d\u4f9d\u8d56\u7684\u6a21\u5757\u6807\u8bc6\u7b26\u3002\u6211\u4eec\u5e76\u4e0d\u5173\u5fc3\u8fd9\u4e9b\u7ec6\u8282\uff0c\u91cd\u8981\u7684\u662f\u77e5\u9053\u5728\u4e0d\u540c\u7684 CommonJS \u5b9e\u73b0\u4e2d\u6a21\u5757\u5b57\u7b26\u4e32\u5f15\u7528\u7684\u542b\u4e49\u53ef\u80fd\u4e0d\u540c\u3002\u4e0d\u8fc7\uff0c\u6240\u6709 CommonJS \u98ce\u683c\u7684\u5b9e\u73b0\u5171\u540c\u4e4b\u5904\u662f\u6a21\u5757\u4e0d\u4f1a\u6307\u5b9a\u81ea\u5df1\u7684\u6807\u8bc6\u7b26\uff0c\u5b83\u4eec\u7684\u6807\u8bc6\u7b26\u7531\u5176\u5728\u6a21\u5757\u6587\u4ef6\u5c42\u7ea7\u4e2d\u7684\u4f4d\u7f6e\u51b3\u5b9a\u3002"),(0,l.kt)("p",null,"CommonJS \u4f9d\u8d56\u51e0\u4e2a\u5168\u5c40\u5c5e\u6027\u5982 require \u548c module.exports\u3002\u5982\u679c\u60f3\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528 CommonJS\u6a21\u5757\uff0c\u5c31\u9700\u8981\u4e0e\u5176\u975e\u539f\u751f\u7684\u6a21\u5757\u8bed\u6cd5\u4e4b\u95f4\u6784\u7b51\u201c\u6865\u6881\u201d\u3002\u6a21\u5757\u7ea7\u4ee3\u7801\u4e0e\u6d4f\u89c8\u5668\u8fd0\u884c\u65f6\u4e4b\u95f4\u4e5f\u9700\u8981\u67d0\u79cd\u201c\u5c4f\u969c\u201d\uff0c\u56e0\u4e3a\u6ca1\u6709\u5c01\u88c5\u7684 CommonJS \u4ee3\u7801\u5728\u6d4f\u89c8\u5668\u4e2d\u6267\u884c\u4f1a\u521b\u5efa\u5168\u5c40\u53d8\u91cf\u3002\u8fd9\u663e\u7136\u4e0e\u6a21\u5757\u6a21\u5f0f\u7684\u521d\u8877\u76f8\u6096\u3002"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848\u662f\u63d0\u524d\u628a\u6a21\u5757\u6587\u4ef6\u6253\u5305\u597d\uff0c\u628a\u5168\u5c40\u5c5e\u6027\u8f6c\u6362\u4e3a\u539f\u751f JavaScript \u7ed3\u6784\uff0c\u5c06\u6a21\u5757\u4ee3\u7801\u5c01\u88c5\u5728\u51fd\u6570\u95ed\u5305\u4e2d\uff0c\u6700\u7ec8\u53ea\u63d0\u4f9b\u4e00\u4e2a\u6587\u4ef6\u3002\u4e3a\u4e86\u4ee5\u6b63\u786e\u7684\u987a\u5e8f\u6253\u5305\u6a21\u5757\uff0c\u9700\u8981\u4e8b\u5148\u751f\u6210\u5168\u9762\u7684\u4f9d\u8d56\u56fe\u3002"),(0,l.kt)("h3",{id:"amd\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49"},"AMD\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49"),(0,l.kt)("p",null,"CommonJS \u4ee5\u670d\u52a1\u5668\u7aef\u4e3a\u76ee\u6807\u73af\u5883\uff0c\u80fd\u591f\u4e00\u6b21\u6027\u628a\u6240\u6709\u6a21\u5757\u90fd\u52a0\u8f7d\u5230\u5185\u5b58\uff0c\u800c\u5f02\u6b65\u6a21\u5757\u5b9a\u4e49\uff08AMD\uff0cAsynchronous Module Definition\uff09\u7684\u6a21\u5757\u5b9a\u4e49\u7cfb\u7edf\u5219\u4ee5\u6d4f\u89c8\u5668\u4e3a\u76ee\u6807\u6267\u884c\u73af\u5883\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u8fd9\u9700\u8981\u8003\u8651\u7f51\u7edc\u5ef6\u8fdf\u7684\u95ee\u9898\u3002")," "),(0,l.kt)("p",null,"AMD \u7684\u4e00\u822c\u7b56\u7565\u662f\u8ba9\u6a21\u5757\u58f0\u660e\u81ea\u5df1\u7684\u4f9d\u8d56\uff0c\u800c\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u7684\u6a21\u5757\u7cfb\u7edf\u4f1a\u6309\u9700\u83b7\u53d6\u4f9d\u8d56\uff0c\u5e76\u5728\u4f9d\u8d56\u52a0\u8f7d\u5b8c\u6210\u540e\u7acb\u5373\u6267\u884c\u4f9d\u8d56\u5b83\u4eec\u7684\u6a21\u5757\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"AMD \u6a21\u5757\u5b9e\u73b0\u7684\u6838\u5fc3\u662f\u7528\u51fd\u6570\u5305\u88c5\u6a21\u5757\u5b9a\u4e49\u3002"),"\u8fd9\u6837\u53ef\u4ee5\u9632\u6b62\u58f0\u660e\u5168\u5c40\u53d8\u91cf\uff0c\u5e76\u5141\u8bb8\u52a0\u8f7d\u5668\u5e93\u63a7\u5236\u4f55\u65f6\u52a0\u8f7d\u6a21\u5757\u3002\u5305\u88c5\u51fd\u6570\u4e5f\u4fbf\u4e8e\u6a21\u5757\u4ee3\u7801\u7684\u79fb\u690d\uff0c\u56e0\u4e3a\u5305\u88c5\u51fd\u6570\u5185\u90e8\u7684\u6240\u6709\u6a21\u5757\u4ee3\u7801\u4f7f\u7528\u7684\u90fd\u662f\u539f\u751fJavaScript \u7ed3\u6784\u3002\u5305\u88c5\u6a21\u5757\u7684\u51fd\u6570\u662f\u5168\u5c40 define \u7684\u53c2\u6570\uff0c\u5b83\u662f\u7531 AMD \u52a0\u8f7d\u5668\u5e93\u7684\u5b9e\u73b0\u5b9a\u4e49\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// ID \u4e3a'moduleA'\u7684\u6a21\u5757\u5b9a\u4e49\u3002moduleA \u4f9d\u8d56 moduleB\uff0c\n// moduleB \u4f1a\u5f02\u6b65\u52a0\u8f7d\ndefine('moduleA', ['moduleB'], function(moduleB) {\n return {\n stuff: moduleB.doStuff();\n };\n}); \n")),(0,l.kt)("p",null,"AMD \u4e5f\u652f\u6301 require \u548c exports \u5bf9\u8c61\uff0c\u901a\u8fc7\u5b83\u4eec\u53ef\u4ee5\u5728 AMD \u6a21\u5757\u5de5\u5382\u51fd\u6570\u5185\u90e8\u5b9a\u4e49 CommonJS\u98ce\u683c\u7684\u6a21\u5757\u3002\u8fd9\u6837\u53ef\u4ee5\u50cf\u8bf7\u6c42\u6a21\u5757\u4e00\u6837\u8bf7\u6c42\u5b83\u4eec\uff0c\u4f46 AMD \u52a0\u8f7d\u5668\u4f1a\u5c06\u5b83\u4eec\u8bc6\u522b\u4e3a\u539f\u751f AMD \u7ed3\u6784\uff0c\u800c\u4e0d\u662f\u6a21\u5757\u5b9a\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"define('moduleA', ['require', 'exports'], function(require, exports) {\n var moduleB = require('moduleB');\n exports.stuff = moduleB.doStuff();\n});\n// \u52a8\u6001\u4f9d\u8d56\u4e5f\u662f\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u652f\u6301\u7684\uff1a\ndefine('moduleA', ['require'], function(require) {\n if (condition) {\n var moduleB = require('moduleB');\n }\n}); \n")),(0,l.kt)("h3",{id:"umd\u901a\u7528\u6a21\u5757\u5b9a\u4e49"},"UMD\u901a\u7528\u6a21\u5757\u5b9a\u4e49"),(0,l.kt)("p",null,"\u4e3a\u4e86\u7edf\u4e00 CommonJS \u548c AMD \u751f\u6001\u7cfb\u7edf\uff0c\u901a\u7528\u6a21\u5757\u5b9a\u4e49\uff08UMD\uff0cUniversal Module Definition\uff09\u89c4\u8303\u5e94\u8fd0\u800c\u751f\u3002UMD \u53ef\u7528\u4e8e\u521b\u5efa\u8fd9\u4e24\u4e2a\u7cfb\u7edf\u90fd\u53ef\u4ee5\u4f7f\u7528\u7684\u6a21\u5757\u4ee3\u7801\u3002\u672c\u8d28\u4e0a\uff0cUMD \u5b9a\u4e49\u7684\u6a21\u5757\u4f1a\u5728\u542f\u52a8\u65f6\u68c0\u6d4b\u8981\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\u7cfb\u7edf\uff0c\u7136\u540e\u8fdb\u884c\u9002\u5f53\u914d\u7f6e\uff0c\u5e76\u628a\u6240\u6709\u903b\u8f91\u5305\u88c5\u5728\u4e00\u4e2a\u7acb\u5373\u8c03\u7528\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\uff08IIFE\uff09. \u867d\u7136\u8fd9\u79cd\u7ec4\u5408\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u4f46\u5728\u5f88\u591a\u573a\u666f\u4e0b\u8db3\u4ee5\u5b9e\u73b0\u4e24\u4e2a\u751f\u6001\u7684\u5171\u5b58\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u53ea\u5305\u542b\u4e00\u4e2a\u4f9d\u8d56\u7684 UMD \u6a21\u5757\u5b9a\u4e49\u7684\u793a\u4f8b\uff08\u6765\u6e90\u4e3a GitHub \u4e0a\u7684 UMD \u4ed3\u5e93\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"(function (root, factory) {\n if (typeof define === 'function' && define.amd) {\n // AMD\u3002\u6ce8\u518c\u4e3a\u533f\u540d\u6a21\u5757\n define(['moduleB'], factory);\n } else if (typeof module === 'object' && module.exports) {\n // Node\u3002\u4e0d\u652f\u6301\u4e25\u683c CommonJS\n // \u4f46\u53ef\u4ee5\u5728 Node \u8fd9\u6837\u652f\u6301 module.exports \u7684\n // \u7c7b CommonJS \u73af\u5883\u4e0b\u4f7f\u7528\n module.exports = factory(require(' moduleB '));\n } else {\n // \u6d4f\u89c8\u5668\u5168\u5c40\u4e0a\u4e0b\u6587\uff08root \u662f window\uff09\n root.returnExports = factory(root. moduleB);\n }\n}(this, function (moduleB) {\n // \u4ee5\u67d0\u79cd\u65b9\u5f0f\u4f7f\u7528 moduleB\n // \u5c06\u8fd4\u56de\u503c\u4f5c\u4e3a\u6a21\u5757\u7684\u5bfc\u51fa\n // \u8fd9\u4e2a\u4f8b\u5b50\u8fd4\u56de\u4e86\u4e00\u4e2a\u5bf9\u8c61\n // \u4f46\u662f\u6a21\u5757\u4e5f\u53ef\u4ee5\u8fd4\u56de\u51fd\u6570\u4f5c\u4e3a\u5bfc\u51fa\u503c\n return {};\n})); \n")),(0,l.kt)("p",null,"\u6b64\u6a21\u5f0f\u6709\u652f\u6301\u4e25\u683c CommonJS \u548c\u6d4f\u89c8\u5668\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u4f53\u3002\u4e0d\u5e94\u8be5\u671f\u671b\u624b\u5199\u8fd9\u4e2a\u5305\u88c5\u51fd\u6570\uff0c\u5b83\u5e94\u8be5\u7531\u6784\u5efa\u5de5\u5177\u81ea\u52a8\u751f\u6210\u3002\u5f00\u53d1\u8005\u53ea\u9700\u4e13\u6ce8\u4e8e\u6a21\u5757\u7684\u5185\u7531\u5bb9\uff0c\u800c\u4e0d\u5fc5\u5173\u5fc3\u8fd9\u4e9b\u6837\u677f\u4ee3\u7801\u3002"),(0,l.kt)("hr",null))}c.isMDXComponent=!0},91374:function(e,n,t){n.Z=t.p+"assets/images/rely-d4ab90a12fcda96211b17c0f1e6d9b1e.JPG"}}]);