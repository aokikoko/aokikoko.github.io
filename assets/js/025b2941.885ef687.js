"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6243],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:e},l),{},{components:n})):r.createElement(f,a({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8346:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={title:"[Http] Options\u8bf7\u6c42\u7684\u89e3\u91ca",sidebar_position:1},c=void 0,s={unversionedId:"Http/OptionsRequest",id:"Http/OptionsRequest",title:"[Http] Options\u8bf7\u6c42\u7684\u89e3\u91ca",description:"\u7b80\u5355\u8bf7\u6c42\u548c\u590d\u6742\u8bf7\u6c42\u7684\u533a\u522b",source:"@site/docs/Http/OptionsRequest.md",sourceDirName:"Http",slug:"/Http/OptionsRequest",permalink:"/docs/Http/OptionsRequest",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Http/OptionsRequest.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[Http] Options\u8bf7\u6c42\u7684\u89e3\u91ca",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[Cli] npm\u5347\u7ea7\u7248\u672c\u540e\u4ecd\u7136\u663e\u793a\u4e3a\u539f\u7248\u672c",permalink:"/docs/Cli/npm"},next:{title:"[Node] Buffer",permalink:"/docs/Node.js/buffer"}},l=[{value:"\u7b80\u5355\u8bf7\u6c42\u548c\u590d\u6742\u8bf7\u6c42\u7684\u533a\u522b",id:"\u7b80\u5355\u8bf7\u6c42\u548c\u590d\u6742\u8bf7\u6c42\u7684\u533a\u522b",children:[],level:2},{value:"\u9884\u68c0\u8bf7\u6c42(Options)",id:"\u9884\u68c0\u8bf7\u6c42options",children:[],level:2}],u={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7b80\u5355\u8bf7\u6c42\u548c\u590d\u6742\u8bf7\u6c42\u7684\u533a\u522b"},"\u7b80\u5355\u8bf7\u6c42\u548c\u590d\u6742\u8bf7\u6c42\u7684\u533a\u522b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/*\n  \u7b80\u5355\u8bf7\u6c42\n    1. \u53ea\u80fd\u662fget \u548c post\u8bf7\u6c42 \u6216 head\u8bf7\u6c42\n    2. \u4e0d\u80fd\u624b\u52a8\u8bbe\u7f6e\u4ee5\u4e0b4\u79cd\u4e4b\u5916\u7684\u8bf7\u6c42\u5934\u4fe1\u606f\n      accept\n      accept-language\n      content-language\n      content-type\n    3. \u5982\u679c\u662fpost\u8bf7\u6c42, \u8bf7\u6c42content-type\u53ea\u80fd\u662f\u4ee5\u4e0b\u4e09\u4e2a\n      application/x-www-http-urlencoded\n      multipart/form-data\n      text/plain\n\n      \u5173\u4e8eapplication/x-www-http-urlencoded,\u662f\u4f20\u7edf\u8868\u5355\u9ed8\u8ba4\u8bf7\u6c42\u65b9\u5f0f,\n      jquey\u7684$ajax\u53d1\u9001\u7684post\u8bf7\u6c42\u5c5e\u4e8e\u7b80\u5355\u8bf7\u6c42, \u56e0\u4e3a\u5b83\u9ed8\u8ba4\u662f\u8fd9\u79cd\u683c\u5f0f\n      \u800caxios\u5c01\u88c5\u7684post\u8bf7\u6c42\u9ed8\u8ba4\u662fapplication/json\u683c\u5f0f\u7684, \u6240\u4ee5\u7528axios\u53d1\u8bf7\u6c42\n      \u9ed8\u8ba4\u5c5e\u4e8e\u590d\u6742\u8bf7\u6c42\n  \u590d\u6742\u8bf7\u6c42\n    \u9664\u7b80\u5355\u8bf7\u6c42\u4e4b\u5916\u7684\u8bf7\u6c42\n*/\n")),(0,i.kt)("h2",{id:"\u9884\u68c0\u8bf7\u6c42options"},"\u9884\u68c0\u8bf7\u6c42(Options)"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"  \u56e0\u4e3a\u590d\u6742\u8bf7\u6c42\u53ef\u80fd\u643a\u5e26\u6570\u636e\u6bd4\u8f83\u591a, \u6bd4\u5982post\u53d1\u6570\u636e\n\u6240\u4ee5\u4e0d\u4f1a\u76f4\u63a5\u53d1\u590d\u6742\u8bf7\u6c42, \u6bd4\u5982\u8de8\u57df\u7684\u8bdd\u6d4f\u89c8\u5668\u6ca1\u6709\u7ed3\u679c,\n\u53d1\u9001\u6210\u672c\u8f83\u9ad8, \u6240\u4ee5\u91c7\u7528\u5148\u53d1\u4e00\u4e2a\u7a7a\u8bf7\u6c42(\u9884\u68c0\u8bf7\u6c42),\n\u8fd9\u4e2a\u8bf7\u6c42\u4e0d\u4f1a\u643a\u5e26\u4efb\u4f55\u6570\u636e, \u53ea\u9700\u8981\u670d\u52a1\u5668\u54cd\u5e94,\n\u5982\u679c\u8de8\u57df\u7684\u8bdd, \u670d\u52a1\u5668\u4f1a\u8bbe\u7f6e\u54cd\u5e94\u5934, access-allow-origin\u7b49\u5934,\n\u8fd9\u4e2a\u8bf7\u6c42\u56de\u6765\u4e4b\u540e, \u6d4f\u89c8\u5668\u5224\u65adoptions\u8bf7\u6c42\u7684\u54cd\u5e94\u5934\u91cc\u4fe1\u606f,\n\u5982\u679c\u5141\u8bb8\u8de8\u57df\u7ee7\u7eed\u53d1\u9001\u643a\u5e26\u6570\u636e\u7684\u8bf7\u6c42,\n\u5982\u679c\u5931\u8d25\u4e0d\u53d1\u9001\u540e\u7eed\u8bf7\u6c42"))))}d.isMDXComponent=!0}}]);