"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6056],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,p=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||p;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=t.length,a=new Array(p);a[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<p;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},807:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var r=t(7462),i=t(3366),p=(t(7294),t(3905)),a=["components"],o={title:"[Cli] npm\u5347\u7ea7\u7248\u672c\u540e\u4ecd\u7136\u663e\u793a\u4e3a\u539f\u7248\u672c",sidebar_position:4},l=void 0,c={unversionedId:"Cli/npm",id:"Cli/npm",title:"[Cli] npm\u5347\u7ea7\u7248\u672c\u540e\u4ecd\u7136\u663e\u793a\u4e3a\u539f\u7248\u672c",description:"\u73b0\u8c61\u63cf\u8ff0",source:"@site/docs/Cli/npm.md",sourceDirName:"Cli",slug:"/Cli/npm",permalink:"/docs/Cli/npm",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Cli/npm.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"[Cli] npm\u5347\u7ea7\u7248\u672c\u540e\u4ecd\u7136\u663e\u793a\u4e3a\u539f\u7248\u672c",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"[Cli] Git\u63d0\u4ea4\u65f6\u89c4\u8303",permalink:"/docs/Cli/gitcommit copy"},next:{title:"[Http] Options\u8bf7\u6c42\u7684\u89e3\u91ca",permalink:"/docs/Http/OptionsRequest"}},m=[{value:"\u73b0\u8c61\u63cf\u8ff0",id:"\u73b0\u8c61\u63cf\u8ff0",children:[],level:2},{value:"\u539f\u56e0",id:"\u539f\u56e0",children:[],level:2},{value:"\u89e3\u51b3\u65b9\u6cd5\u4e00",id:"\u89e3\u51b3\u65b9\u6cd5\u4e00",children:[{value:"1.\u67e5\u770b\u8def\u5f84",id:"1\u67e5\u770b\u8def\u5f84",children:[],level:3},{value:"2.\u4fee\u6539 npm \u5168\u5c40\u5b89\u88c5\u8def\u5f84",id:"2\u4fee\u6539-npm-\u5168\u5c40\u5b89\u88c5\u8def\u5f84",children:[],level:3},{value:"3.\u91cd\u65b0\u6267\u884c npm \u5347\u7ea7\u547d\u4ee4",id:"3\u91cd\u65b0\u6267\u884c-npm-\u5347\u7ea7\u547d\u4ee4",children:[],level:3}],level:2},{value:"\u89e3\u51b3\u65b9\u6cd5\u4e8c",id:"\u89e3\u51b3\u65b9\u6cd5\u4e8c",children:[],level:2}],u={toc:m};function s(e){var n=e.components,o=(0,i.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"\u73b0\u8c61\u63cf\u8ff0"},"\u73b0\u8c61\u63cf\u8ff0"),(0,p.kt)("p",null,"\u539f npm \u7248\u672c\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"6.14.8"),", \u9700\u8981\u5347\u7ea7\u5230 7 \u4ee5\u4e0a\u7248\u672c, \u56e0\u6b64\u6267\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"npm install -g npm"),", \u5b89\u88c5\u6210\u529f\u540e, \u6267\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"npm -v"),"\u68c0\u6d4b\u7248\u672c, \u4ecd\u7136\u663e\u793a",(0,p.kt)("inlineCode",{parentName:"p"},"6.14.8"),"\u7684\u8001\u7248\u672c, \u5982\u56fe:\n",(0,p.kt)("img",{alt:"npm-v",src:t(5765).Z})),(0,p.kt)("h2",{id:"\u539f\u56e0"},"\u539f\u56e0"),(0,p.kt)("p",null,"\u56e0\u4e3a\u6b64\u65f6\u7cfb\u7edf\u4e2d\u5b58\u5728\u4e24\u4e2a npm \u6587\u4ef6, \u5176\u4e2d\u4e00\u4e2a\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"npm\u5b89\u88c5\u8def\u5f84"),", \u53e6\u4e00\u4e2a\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"npm\u5168\u5c40\u5b89\u88c5\u8def\u5f84"),", \u4e24\u4e2a npm \u7684\u8def\u5f84\u5e76\u4e0d\u4e00\u81f4.",(0,p.kt)("br",{parentName:"p"}),"\n","\u521a\u521a\u5b89\u88c5\u66f4\u65b0\u7684\u662f npm \u5b89\u88c5\u8def\u5f84\u4e0b\u7684 npm, \u800c\u6267\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"npm -v"),"\u547d\u4ee4\u4f7f\u7528\u7684 npm \u662f\u6211\u4eec\u5728\u5b89\u88c5 node \u65f6\u5168\u5c40\u5b89\u88c5\u8def\u5f84\u4e0b\u7684 npm"),(0,p.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5\u4e00"},"\u89e3\u51b3\u65b9\u6cd5\u4e00"),(0,p.kt)("p",null,"\u5c06 npm \u5168\u5c40\u5b89\u88c5\u7684\u8def\u5f84\u4fee\u6539\u4e3a npm \u7684\u5b89\u88c5\u8def\u5f84"),(0,p.kt)("h3",{id:"1\u67e5\u770b\u8def\u5f84"},"1.\u67e5\u770b\u8def\u5f84"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"npm root -g   // \u67e5\u770bnpm\u7684\u5b89\u88c5\u8def\u5f84\nnpm config get prefix //\u67e5\u770bnpm\u7684\u5168\u5c40\u5b89\u88c5\u8def\u5f84\n")),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"path",src:t(2746).Z})),(0,p.kt)("h3",{id:"2\u4fee\u6539-npm-\u5168\u5c40\u5b89\u88c5\u8def\u5f84"},"2.\u4fee\u6539 npm \u5168\u5c40\u5b89\u88c5\u8def\u5f84"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"npm config set prefix npm\u7684\u5b89\u88c5\u8def\u5f84\n\n// npm config set prefix C:\\Users\\xx\\AppData\\Roaming\\npm\\node_modules\n")),(0,p.kt)("h3",{id:"3\u91cd\u65b0\u6267\u884c-npm-\u5347\u7ea7\u547d\u4ee4"},"3.\u91cd\u65b0\u6267\u884c npm \u5347\u7ea7\u547d\u4ee4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"npm install -g npm\n")),(0,p.kt)("p",null,"\u518d\u6b21\u67e5\u770b",(0,p.kt)("inlineCode",{parentName:"p"},"npm -v"),"\u53d1\u73b0\u7248\u672c\u6210\u529f\u66f4\u65b0"),(0,p.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5\u4e8c"},"\u89e3\u51b3\u65b9\u6cd5\u4e8c"),(0,p.kt)("p",null,"\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"git bash"),"\u7ec8\u7aef, \u800c\u4e0d\u662f cmd \u91cc\u6267\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"npm install -g npm"),"\u547d\u4ee4"))}s.isMDXComponent=!0},5765:function(e,n,t){n.Z=t.p+"assets/images/npm-a8f25bdd93fc0bd942a45950884c0b86.JPG"},2746:function(e,n,t){n.Z=t.p+"assets/images/path-86aa233e4e6531e232c09cd054b5eb16.JPG"}}]);