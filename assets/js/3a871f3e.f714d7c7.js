"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3341],{3905:function(A,e,n){n.d(e,{Zo:function(){return f},kt:function(){return m}});var t=n(7294);function i(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function r(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function s(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function o(A,e){if(null==A)return{};var n,t,i=function(A,e){if(null==A)return{};var n,t,i={},r=Object.keys(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=A[n]);return i}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(i[n]=A[n])}return i}var u=t.createContext({}),c=function(A){var e=t.useContext(u),n=e;return A&&(n="function"==typeof A?A(e):s(s({},e),A)),n},f=function(A){var e=c(A.components);return t.createElement(u.Provider,{value:e},A.children)},p={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},a=t.forwardRef((function(A,e){var n=A.components,i=A.mdxType,r=A.originalType,u=A.parentName,f=o(A,["components","mdxType","originalType","parentName"]),a=c(n),m=i,l=a["".concat(u,".").concat(m)]||a[m]||p[m]||r;return n?t.createElement(l,s(s({ref:e},f),{},{components:n})):t.createElement(l,s({ref:e},f))}));function m(A,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var r=n.length,s=new Array(r);s[0]=a;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=A,o.mdxType="string"==typeof A?A:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}a.displayName="MDXCreateElement"},4645:function(A,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return a},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return f}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={title:"[DevOps] jenkins",sidebar_position:3},u=void 0,c={unversionedId:"DevOps/jenkins",id:"DevOps/jenkins",title:"[DevOps] jenkins",description:"\u8ba4\u8bc6 jenkins",source:"@site/docs/DevOps/jenkins.md",sourceDirName:"DevOps",slug:"/DevOps/jenkins",permalink:"/docs/DevOps/jenkins",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/DevOps/jenkins.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"[DevOps] jenkins",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[DevOps] \u4ee3\u7801\u66f4\u65b0\u65b9\u6cd5",permalink:"/docs/DevOps/daima"},next:{title:"[Http] Options\u8bf7\u6c42\u7684\u89e3\u91ca",permalink:"/docs/Http/OptionsRequest"}},f=[{value:"\u8ba4\u8bc6 jenkins",id:"\u8ba4\u8bc6-jenkins",children:[],level:2},{value:"git+github+jenkins",id:"gitgithubjenkins",children:[{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",children:[],level:3}],level:2}],p={toc:f};function a(A){var e=A.components,o=(0,i.Z)(A,s);return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8ba4\u8bc6-jenkins"},"\u8ba4\u8bc6 jenkins"),(0,r.kt)("p",null,"\u200b Jenkins \u662f\u4e00\u4e2a\u53ef\u6269\u5c55\u7684\u6301\u7eed\u96c6\u6210\u5f15\u64ce\uff0c\u662f\u4e00\u4e2a\u5f00\u6e90\u8f6f\u4ef6\u9879\u76ee\uff0c\u65e8\u5728\u63d0\u4f9b\u4e00\u4e2a\u5f00\u653e\u6613\u7528\u7684\u8f6f\u4ef6\u5e73\u53f0\uff0c\u4f7f\u8f6f\u4ef6\u7684\u6301\u7eed\u96c6\u6210\u53d8\u6210\u53ef\u80fd\u3002Jenkins \u975e\u5e38\u6613\u4e8e\u5b89\u88c5\u548c\u914d\u7f6e\uff0c\u7b80\u5355\u6613\u7528\u3002"),(0,r.kt)("p",null,"\u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://jenkins.io/"},"https://jenkins.io/")),(0,r.kt)("h2",{id:"gitgithubjenkins"},"git+github+jenkins"),(0,r.kt)("h3",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1552924791657",src:n(9838).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u67b6\u6784\u56fe")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"1553086621836",src:n(5837).Z})))}a.isMDXComponent=!0},9838:function(A,e,n){e.Z=n.p+"assets/images/jenkins\u7269\u7406\u67b6\u6784-a0489007fe8aaeeb74f8dc4c4e453fbf.png"},5837:function(A,e){e.Z="data:image/png;base64,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"}}]);