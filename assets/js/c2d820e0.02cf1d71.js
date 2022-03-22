"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3681],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),i=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=i(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),k=i(n),c=l,d=k["".concat(o,".").concat(c)]||k[c]||u[c]||r;return n?a.createElement(d,p(p({ref:e},m),{},{components:n})):a.createElement(d,p({ref:e},m))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:l,p[1]=s;for(var i=2;i<r;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7999:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),p=["components"],s={title:"[Mysql] \u4f01\u4e1a\u67b6\u6784MySQL\u8bfb\u5199\u5206\u79bb",sidebar_position:4},o=void 0,i={unversionedId:"Mysql/rw",id:"Mysql/rw",title:"[Mysql] \u4f01\u4e1a\u67b6\u6784MySQL\u8bfb\u5199\u5206\u79bb",description:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0",source:"@site/docs/Mysql/rw.md",sourceDirName:"Mysql",slug:"/Mysql/rw",permalink:"/docs/Mysql/rw",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Mysql/rw.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"[Mysql] \u4f01\u4e1a\u67b6\u6784MySQL\u8bfb\u5199\u5206\u79bb",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"[Mysql] sql\u8bed\u53e5",permalink:"/docs/Mysql/sql"},next:{title:"[Mysql] \u4f01\u4e1a\u67b6\u6784\u7f13\u5b58\u4e2d\u95f4\u4ef6\u5206\u5e03\u5f0f",permalink:"/docs/Mysql/memcached"}},m=[{value:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0",id:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0",children:[{value:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848",id:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848",children:[],level:3}],level:2},{value:"MySQL \u8bfb\u5199\u5206\u79bb\u4ecb\u7ecd",id:"mysql-\u8bfb\u5199\u5206\u79bb\u4ecb\u7ecd",children:[{value:"1\u3001\u8bfb\u5199\u5206\u79bb\u7684\u76ee\u7684",id:"1\u8bfb\u5199\u5206\u79bb\u7684\u76ee\u7684",children:[],level:3},{value:"2\u3001\u8bfb\u5199\u5206\u79bb\u5e38\u89c1\u7684\u5b9e\u73b0\u65b9\u5f0f",id:"2\u8bfb\u5199\u5206\u79bb\u5e38\u89c1\u7684\u5b9e\u73b0\u65b9\u5f0f",children:[],level:3}],level:2},{value:"MySQL \u8bfb\u5199\u5206\u79bb\u6848\u4f8b\u5b9e\u73b0",id:"mysql-\u8bfb\u5199\u5206\u79bb\u6848\u4f8b\u5b9e\u73b0",children:[{value:"\u9996\u5148\u642d\u5efa M-S \u590d\u5236",id:"\u9996\u5148\u642d\u5efa-m-s-\u590d\u5236",children:[{value:"1\u3001master \u914d\u7f6e",id:"1master-\u914d\u7f6e",children:[],level:4},{value:"2\u3001slave \u914d\u7f6e",id:"2slave-\u914d\u7f6e",children:[],level:4}],level:3},{value:"\u65b9\u5f0f 1\u3001\u7b80\u5355\u4e1a\u52a1\u4ee3\u7801\u5b9e\u73b0",id:"\u65b9\u5f0f-1\u7b80\u5355\u4e1a\u52a1\u4ee3\u7801\u5b9e\u73b0",children:[],level:3},{value:"\u65b9\u5f0f 2\u3001\u6846\u67b6\u914d\u7f6e\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",id:"\u65b9\u5f0f-2\u6846\u67b6\u914d\u7f6e\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",children:[],level:3},{value:"\u65b9\u5f0f 3\u3001MyCAT \u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",id:"\u65b9\u5f0f-3mycat-\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb",children:[{value:"jdk \u5b89\u88c5",id:"jdk-\u5b89\u88c5",children:[],level:4}],level:3}],level:2}],u={toc:m};function k(t){var e=t.components,s=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0"},"\u4e1a\u52a1\u80cc\u666f\u63cf\u8ff0"),(0,r.kt)("p",null,"\u4e4b\u524d\u4e1a\u52a1\u4e2d\u662f\u5355\u53f0 MySQL \u63d0\u4f9b\u670d\u52a1\uff0c\u4f7f\u7528\u591a\u53f0 MySQL \u6570\u636e\u5e93\u670d\u52a1\u5668\uff0c\u964d\u4f4e\u5355\u53f0\u538b\u529b\uff0c\u5b9e\u73b0\u96c6\u7fa4\u67b6\u6784\u7684\u7a33\u5b9a\u6027\u548c\u9ad8\u53ef\u7528\u6027 \u6570\u636e\u7684\u4e00\u81f4\u6027 \u5b8c\u6574\u6027 replication"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e1a\u52a1\u6bd4\u5bf9\u548c\u5206\u6790\u53d1\u73b0\uff0c\u968f\u7740\u6d3b\u8dc3\u7528\u6237\u6570\u589e\u591a\uff0c\u8bfb\u53d6\u6570\u636e\u7684\u8bf7\u6c42\u53d8\u591a\uff0c\u6545\u7740\u91cd\u89e3\u51b3\u8bfb\u53d6\u6570\u636e\u7684\u538b\u529b"),(0,r.kt)("h3",{id:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848"},"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rw",src:n(418).Z})),(0,r.kt)("p",null,"\u6839\u636e\u4ee5\u4e0a\u4e1a\u52a1\u9700\u6c42\uff0c\u5728\u4e4b\u524d\u4e1a\u52a1\u67b6\u6784\u7684\u57fa\u7840\u4e0a\u5b9e\u73b0\u6570\u636e\u7684\u8bfb\u5199\u5206\u79bb"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2",src:n(4502).Z})),(0,r.kt)("h2",{id:"mysql-\u8bfb\u5199\u5206\u79bb\u4ecb\u7ecd"},"MySQL \u8bfb\u5199\u5206\u79bb\u4ecb\u7ecd"),(0,r.kt)("h3",{id:"1\u8bfb\u5199\u5206\u79bb\u7684\u76ee\u7684"},"1\u3001\u8bfb\u5199\u5206\u79bb\u7684\u76ee\u7684"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u73b0\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861"),"\uff1a"),(0,r.kt)("p",null,"\u200b \u5f53\u6570\u636e\u5e93\u8bf7\u6c42\u589e\u591a\u65f6\uff0c\u5355\u4f8b\u6570\u636e\u5e93\u4e0d\u80fd\u591f\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\u3002\u9700\u8981\u8fdb\u884c\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u6269\u5bb9\u3002\u591a\u53f0\u6570\u636e\u5e93\u540c\u65f6\u76f8\u5e94\u8bf7\u6c42\u3002\u4e5f\u5c31\u662f\u8bf4\u9700\u8981\u5bf9\u6570\u636e\u5e93\u7684\u8bf7\u6c42\uff0c\u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"\u8d1f\u8f7d\u5747\u8861")),(0,r.kt)("p",null,"\u200b \u4f46\u662f\u7531\u4e8e\u6570\u636e\u5e93\u670d\u52a1\u7279\u6b8a\u539f\u56e0\uff0c\u6570\u636e\u5e93\u6269\u5bb9\u57fa\u672c\u8981\u6c42\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u7684\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027"),"\u3002\u6240\u4ee5\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fdd\u8bc1\u591a\u53f0\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u6570\u636e\u4e00\u81f4\u6027\u548c\u5b8c\u6574\u6027"),"\uff0c\u4ee5 MySQL \u4e3a\u4f8b\u6765\u8bf4\uff0c\u5b98\u65b9\u63d0\u4f9b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e3b\u4ece\u590d\u5236\u673a\u5236"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bfb\u5199\u5206\u79bb\uff1a")),(0,r.kt)("p",null,"\u200b \u6570\u636e\u5e93\u7684\u8d1f\u8f7d\u5747\u8861\u4e0d\u540c\u4e8e\u5176\u4ed6\u670d\u52a1\u7684\u8d1f\u8f7d\u5747\u8861\uff0c\u6570\u636e\u8981\u6c42\u4e00\u81f4\u6027\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"\u57fa\u4e8e\u4e3b\u4ece\u590d\u5236\u7684\u57fa\u7840\u4e0a\uff0c\u5e38\u89c1\u7684\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861\u4f7f\u7528\u7684\u662f\u8bfb\u5199\u5206\u79bb\u65b9\u5f0f\u3002\u5199\u5165\u4e3b\u6570\u636e\u5e93\uff0c\u8bfb\u53d6\u5230\u4ece\u6570\u636e\u5e93"),"\u3002\u53ef\u4ee5\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u8bfb\u5199\u5206\u79bb\uff0c\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u8d1f\u8f7d\u5747\u8861\u5b9e\u73b0\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b9e\u9645\u4e1a\u52a1\u4e2d\uff0c\u8bfb\u5199\u5206\u79bb\u5b58\u5728\u7684\u4e00\u4e2a\u95ee\u9898\uff0c\u4e0d\u591f\u5b9e\u65f6\u6027\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u56e0\u6b64\u5bf9\u4e8e\u5b9e\u65f6\u6027\u7684\u89e3\u51b3\u65b9\u6848"),":"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5bf9\u4e8e\u8981\u6c42\u5b9e\u65f6\u6027\u9ad8\u7684\u4e1a\u52a1")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u2460 \u7f13\u5b58 \u5199\u4e3b\u5e93 \u5199\u7f13\u5b58 \u8bfb\u7f13\u5b58"),(0,r.kt)("p",{parentName:"div"},"\u2461 \u53ef\u4ee5\u8bfb\u4e3b"),(0,r.kt)("p",{parentName:"div"},"\u2462 \u6dfb\u52a0\u5b8c\u6570\u636e\u4e4b\u540e\uff0c\u6709\u4e00\u4e2a\u8df3\u8f6c\u7b49\u5f85\u7684\u65f6\u95f4\uff085s\uff09\uff0c\u6570\u636e\u6b63\u5728\u5ba1\u6838\u4e2d"))),(0,r.kt)("h3",{id:"2\u8bfb\u5199\u5206\u79bb\u5e38\u89c1\u7684\u5b9e\u73b0\u65b9\u5f0f"},"2\u3001\u8bfb\u5199\u5206\u79bb\u5e38\u89c1\u7684\u5b9e\u73b0\u65b9\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2460 \u4e1a\u52a1\u4ee3\u7801\u7684\u8bfb\u5199\u5206\u79bb")),(0,r.kt)("p",null,"\u9700\u8981\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\uff0c\u5224\u65ad\u6570\u636e\u64cd\u4f5c\u662f\u8bfb\u8fd8\u662f\u5199\uff0c\u8bfb\u8fde\u63a5\u4ece\u6570\u636e\u670d\u52a1\u5668\u64cd\u4f5c\uff0c\u5199\u8fde\u63a5\u4e3b\u6570\u636e\u5e93\u670d\u52a1\u5668\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4ee5\u5f53\u524d LNMP \u4e3a\u4f8b\uff0c\u9700\u8981\u901a\u8fc7 PHP \u4ee3\u7801\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2461 \u4e2d\u95f4\u4ef6\u4ee3\u7406\u65b9\u5f0f\u7684\u8bfb\u5199\u5206\u79bb")),(0,r.kt)("p",null,"\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\uff0c\u6570\u636e\u5e93\u7684\u64cd\u4f5c\uff0c\u4e0d\u76f4\u63a5\u8fde\u63a5\u6570\u636e\u5e93\uff0c\u800c\u662f\u5148\u8bf7\u6c42\u5230\u4e2d\u95f4\u4ef6\u670d\u52a1\u5668\uff08\u4ee3\u7406\uff09"),(0,r.kt)("p",null,"\u7531\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u5224\u65ad\u662f\u8bfb\u64cd\u4f5c\u53bb\u4ece\u6570\u636e\u670d\u52a1\u5668\uff0c\u5199\u64cd\u4f5c\u53bb\u4e3b\u6570\u636e\u670d\u52a1\u5668"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MySQL Proxy"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL \u5b98\u65b9 \u6d4b\u8bd5\u7248 \u4e0d\u518d\u7ef4\u62a4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Atlas"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5947\u864e 360 \u57fa\u4e8e MySQL Proxy ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/Qihoo360/Atlas"},"https://github.com/Qihoo360/Atlas"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DBProxy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f8e\u56e2\u70b9\u8bc4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amoeba"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e9\u671f\u963f\u91cc\u5df4\u5df4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cobar"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963f\u91cc\u5df4\u5df4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MyCat"),(0,r.kt)("td",{parentName:"tr",align:null},"\u57fa\u4e8e\u963f\u91cc\u5f00\u6e90\u7684 Cobar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kingshared"),(0,r.kt)("td",{parentName:"tr",align:null},"go \u8bed\u8a00\u5f00\u53d1",(0,r.kt)("a",{parentName:"td",href:"https://github.com/flike/kingshard"},"https://github.com/flike/kingshard"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proxysql"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://www.proxysql.com/"},"http://www.proxysql.com/"))))),(0,r.kt)("p",null,"\u4e5f\u5c31\u662f\u5982\u4e0b\u56fe\u793a\u67b6\u6784, \u7528\u4e86\u4e2d\u95f4\u4ef6\u670d\u52a1\u5668\u5bf9\u4e8e\u4e1a\u52a1\u4ee3\u7801\u6765\u8bf4\u7b97\u662f\u5355\u4f8b\u670d\u52a1\u5668, \u56e0\u4e3a\u53ea\u9700\u8981\u8fde\u63a5\u4e2d\u95f4\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"3",src:n(2339).Z})),(0,r.kt)("p",null,"\u95ee\uff1a\u5982\u4f55\u9009\u62e9\uff1f"),(0,r.kt)("p",null,"\u2460 \u4e1a\u52a1\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\uff0c\u64cd\u4f5c\u65b9\u4fbf\uff0c\u6210\u672c\u4f4e\uff0c\u5f53\u524d\u7684\u5f00\u53d1\u6846\u67b6\u57fa\u672c\u652f\u6301\u8bfb\u5199\u5206\u79bb"),(0,r.kt)("p",null,"\u2461 \u4e2d\u95f4\u4ef6\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u9664\u4e86\u80fd\u591f\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\uff0c\u8fd8\u53ef\u4ee5\u4f5c\u4e3a\u6570\u636e\u5e93\u96c6\u7fa4\u7684\u7ba1\u7406\u5e73\u53f0"),(0,r.kt)("h2",{id:"mysql-\u8bfb\u5199\u5206\u79bb\u6848\u4f8b\u5b9e\u73b0"},"MySQL \u8bfb\u5199\u5206\u79bb\u6848\u4f8b\u5b9e\u73b0"),(0,r.kt)("h3",{id:"\u9996\u5148\u642d\u5efa-m-s-\u590d\u5236"},"\u9996\u5148\u642d\u5efa M-S \u590d\u5236"),(0,r.kt)("p",null,"\u4e3b\u4ece\u590d\u5236\u7684\u539f\u7406 \uff1a\u4e3b\u670d\u52a1\u5668\u5f00\u542f bin-log\uff08\u8bb0\u5f55\u4e86\u5199\u64cd\u4f5c\uff09 \u4ece\u670d\u52a1\u5668\u83b7\u53d6\u5230\u4e3b\u670d\u52a1\u5668\u7684 bin-log \u8bb0\u5f55\u5230 relay-log \u4e2d\u3002\u4ece\u670d\u52a1\u5668\u5728\u901a\u8fc7\u5f02\u6b65\u7684\u7ebf\u7a0b\u65b9\u5f0f\uff0c\u5bf9\u4e8e relay-log \u8fdb\u884c\u91cd\u653e\u64cd\u4f5c\u3002"),(0,r.kt)("h4",{id:"1master-\u914d\u7f6e"},"1\u3001master \u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2460 \u5728 master \u670d\u52a1\u5668\u6388\u6743\uff0cslave \u670d\u52a1\u5668 replication slave \u6743\u9650")),(0,r.kt)("p",null,"slave \u662f\u901a\u8fc7 MySQL \u8fde\u63a5\u767b\u5f55\u5230 master \u4e0a\u6765\u8bfb\u53d6\u4e8c\u8fdb\u5236\u65e5\u5fd7\u7684\uff0c\u56e0\u6b64\u9700\u8981\u5728"),(0,r.kt)("p",null,"master \u4e0a\u7ed9 slave \u914d\u7f6e\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql > grant replication slave on *.* to 'slave'@'192.168.17.%'identified by '123456';\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2461master \u670d\u52a1\u5668\u6253\u5f00 bin-log \u65e5\u5fd7\uff0c\u5e76\u6807\u8bc6 server-id")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shell > vim /etc/my.cnf\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[mysqld]\nlog-bin = mysql-index\nserver-id = 1\n")),(0,r.kt)("p",null,"\u6ce8\u610f\u91cd\u542f mysql \u4f7f\u914d\u7f6e\u751f\u6548"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2462 \u5236\u4f5c\u4e00\u4e2a\u5b8c\u6574\u7684\u5907\u4efd")),(0,r.kt)("p",null,"\u5982\u679c\u786e\u8ba4\u4e3b\u4ece\u7684\u6570\u636e\u5e93\uff0c\u9ed8\u8ba4\u5f00\u59cb\u6570\u636e\u662f\u4e00\u81f4\u7684\uff0c\u53ef\u4ee5\u4e0d\u505a\u5907\u4efd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shell > mysqldump -uroot -p'123456' --all-databases > /root/mysql.sql\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2463 \u67e5\u770b master \u4e0a\u7684 bin-log \u53ca\u5176 position \u4f4d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql > show master status;\n")),(0,r.kt)("p",null,"\u67e5\u770b\u5e76\u8bb0\u5f55 File \u7684\u503c\uff0cPosition \u7684\u503c\u3002\u4e4b\u540e\u9700\u8981\u5728\u4ece\u670d\u52a1\u5668\u4e0a\uff0c\u6307\u5411\u8fd9\u4e9b\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bb0\u5f55\u5230\u7684 bin-log \u65e5\u5fd7\u6587\u4ef6\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Position"),(0,r.kt)("td",{parentName:"tr",align:null},"bin-log \u65e5\u5fd7\u6587\u4ef6\u6240\u8bb0\u5f55\u7684\u4f4d\u7f6e")))),(0,r.kt)("h4",{id:"2slave-\u914d\u7f6e"},"2\u3001slave \u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2460 \u6062\u590d\u5907\u4efd\u6587\u4ef6")),(0,r.kt)("p",null,"\u5982\u679c slave \u548c master \u7684\u6570\u636e\u672c\u8eab\u5c31\u662f\u76f8\u540c\u7684\uff0c\u53ef\u4ee5\u4e0d\u9009\u62e9\u5907\u4efd\u548c\u5bfc\u5165"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2461 \u914d\u7f6e server-id\uff0c\u6807\u8bc6\u670d\u52a1\u5668")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shell > vim /etc/my.cnf\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"[mysqld]\nserver-id=2\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u662f\u514b\u9686\u83b7\u53d6\u7684 MySQL \u5b9e\u4f8b\uff0c\u6240\u4ee5 auto.conf \u91cc\u8bb0\u5f55\u7684 UUID \u4e00\u6837\uff0c\u9700\u8981==\u5220\u9664/usr/local/mysql/data/auto.conf \u6587\u4ef6==\uff0c\u5426\u5219\u4e3b\u4ece\u65e0\u6cd5\u8bc6\u522b\u4e92\u76f8\u8eab\u4efd\uff0c\u91cd\u542f\u81ea\u52a8\u751f\u6210\u65b0\u7684\u5373\u53ef\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2462 \u914d\u7f6e slave replication")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql > stop slave;\nmysql> change master to master_host='192.168.17.101',master_user='slave1',master_password='123456',master_log_file='mysql-bin.000002',master_log_pos=333;\nmysql > start slave;\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("p",{parentName:"blockquote"},"master_host \u4e3b master \u7684 IP"),(0,r.kt)("p",{parentName:"blockquote"},"master_user \u4e3b master \u5141\u8bb8\u767b\u5f55\uff0c\u62e5\u6709 replication slave \u6743\u9650"),(0,r.kt)("p",{parentName:"blockquote"},"master_password \u7528\u6237\u7684\u5bc6\u7801"),(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u901a\u8fc7 mysql > show master status; \u5728 master \u6267\u884c"),(0,r.kt)("p",{parentName:"blockquote"},"master_log_file \u4e3b master \u8bb0\u5f55\u7684 bin-log \u65e5\u5fd7\u6587\u4ef6\u540d\u79f0"),(0,r.kt)("p",{parentName:"blockquote"},"master_log_pos \u4e3b master \u8bb0\u5f55\u7684 bin-log \u65e5\u5fd7\u6587\u4ef6\u5bf9\u5e94\u7684\u4f4d\u7f6e")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2463 \u542f\u52a8 replication\uff0c\u5e76\u68c0\u67e5\u7ed3\u679c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mysql"},"mysql > show slave status\\G;\n")),(0,r.kt)("p",null,"\u67e5\u770b\u5230\u4e24\u4e2a yes\uff0c\u4e3b\u4ece\u590d\u5236\u6210\u529f\u3002\u5426\u5219\uff0c\u67e5\u770b\u663e\u793a\u6700\u4e0b\u9762\u4fe1\u606f\uff0c\u901a\u8fc7 error \u4fe1\u606f\u8fdb\u884c\u6392\u67e5\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u65b9\u5f0f-1\u7b80\u5355\u4e1a\u52a1\u4ee3\u7801\u5b9e\u73b0"},"\u65b9\u5f0f 1\u3001\u7b80\u5355\u4e1a\u52a1\u4ee3\u7801\u5b9e\u73b0"),(0,r.kt)("p",null,"\u793a\u4f8b\u8bed\u6cd5\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n//\u521b\u5efa\u7c7b\nclass Mysql {\n  //\u6784\u9020\u65b9\u6cd5\n  //\u5f53\u7c7b\u88ab\u5b9e\u4f8b\u5316\u65f6,\u4f1a\u89e6\u53d1\u6b64\u65b9\u6cd5\n  public function __construct(){\n     $this->master = @new mysqli('192.168.17.100','tp5shop','$Abc3721','tp5shop');\n     $this->slave = @new mysqli('192.168.17.105','tp5shop','$Abc3721','tp5shop');\n     // \u5982\u679c\u4ece\u8fde\u63a5\u62a5\u9519,\u5c31\u8fde\u63a5\u4e3b\n     if($this->slave->connect_errno){\n      $this->slave=$this->master;\n     }\n  }\n  // SQL\u6267\u884c\u65b9\u6cd5\n  public function query($sql){\n    //\u5224\u65ad\u8bed\u53e5\u4e2d\u662f\u5426\u5b58\u5728selete\n    if(strpos($sql, 'select') !== false){\n      //\u8fd9\u662f\u67e5\u8be2\u64cd\u4f5c\n      $rs = $this->slave->query($sql);\n    }else{\n      $rs = $this->master->query($sql);\n    }\n    return $rs;\n  }\n}\n$mysql = new Mysql();\n$sql = \"select * from tpshop_goods\";\n$rs = $mysql->query($sql);\nwhile($row = $rs->fetch_assoc()){\n    var_dump($row['goods_name']);\n}\n")),(0,r.kt)("p",null,"\u5c06\u6b64\u4ee3\u7801\u4e0a\u4f20\u5230 web \u670d\u52a1\u5668\uff0c\u6d4b\u8bd5\u662f\u5426\u53ef\u4ee5\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\u3002\u6ce8\u610f\u4fee\u6539\u5bf9\u5e94\u7684\u8fde\u63a5\u5730\u5740\u3001\u7528\u6237\u540d\u79f0\u3001\u5bc6\u7801\u7b49\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#\u547d\u4ee4\u884c\u6267\u884cphp\u4ee3\u7801\u7684\u65b9\u5f0f\n#php\u9700\u8981\u63d0\u524d\u914d\u7f6e\u73af\u5883\u53d8\u91cf  xxx.php\u4e3a\u9700\u8981\u6267\u884c\u7684php\u811a\u672c\u6587\u4ef6\nshell > php  xxx.php\n")),(0,r.kt)("h3",{id:"\u65b9\u5f0f-2\u6846\u67b6\u914d\u7f6e\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb"},"\u65b9\u5f0f 2\u3001\u6846\u67b6\u914d\u7f6e\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2460 \u901a\u8fc7\u67e5\u770b thinkphp5 \u624b\u518c\u627e\u5230\u5904\u7406\u65b9\u6848")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2461 \u4fee\u6539\u9879\u76ee\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("p",null,"\u4e00\u5b9a\u8981\u5148\u53bb\u786e\u5b9a\u4e3b\u4ece\u6570\u636e\u5e93\u7684\u6570\u636e\u4e00\u81f4\uff08tp5shop\uff09\uff0c\u7528\u6237\u540d\u79f0\u548c\u5bc6\u7801\u53ef\u4ee5\u8fdb\u884c\u767b\u5f55\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shell > vim /usr/local/nginx/html/tp5shop/application/database.php\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    // \u6570\u636e\u5e93\u7c7b\u578b\n    'type'            => 'mysql',\n    // \u670d\u52a1\u5668\u5730\u5740\n    // 1\u3001\u4e3b\u4ece\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740  \u4e3b\u5728\u524d  \u4ece\u5728\u540e\n    'hostname'        => '192.168.17.100,192.168.17.105',\n    // 2\u3001\u4e3b\u4ece\u6570\u636e\u5e93\u7684\u540d\u79f0\u3001\u7528\u6237\u3001\u5bc6\u7801\u4e00\u6837\u7684\u8bdd\uff0c\u53ea\u914d\u7f6e\u4e00\u4efd\u5373\u53ef\u3002\u5982\u679c\u4e0d\u4e00\u6837\uff0c\u6309\u7167\u5148\u540e\u987a\u5e8f\uff0c\u9017\u53f7\u5206\u9694\n    // \u6570\u636e\u5e93\u540d\n    'database'        => 'tp5shop',\n    // \u7528\u6237\u540d\n    'username'        => 'tp5shop',\n    // \u5bc6\u7801\n    'password'        => '$Abc3721',\n    // \u7aef\u53e3\n    'hostport'        => '3306',\n    // \u8fde\u63a5dsn\n    'dsn'             => '',\n    // \u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\n    'params'          => [],\n    // \u6570\u636e\u5e93\u7f16\u7801\u9ed8\u8ba4\u91c7\u7528utf8\n    'charset'         => 'utf8',\n    // \u6570\u636e\u5e93\u8868\u524d\u7f00\n    'prefix'          => 'tpshop_',\n    // \u6570\u636e\u5e93\u8c03\u8bd5\u6a21\u5f0f\n    'debug'           => true,\n    // 3\u3001\u9879\u76ee\u6846\u67b6\u7684\u4e1a\u52a1\u4ee3\u7801\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb\uff0c\u4f7f\u7528\u7684\u662f\u5206\u5e03\u5f0f\uff08\u4e3b\u4ece\u670d\u52a1\u5668\uff09  \u914d\u7f6e\u4e3a1\n    // \u6570\u636e\u5e93\u90e8\u7f72\u65b9\u5f0f:0 \u96c6\u4e2d\u5f0f(\u5355\u4e00\u670d\u52a1\u5668),1 \u5206\u5e03\u5f0f(\u4e3b\u4ece\u670d\u52a1\u5668)\n    'deploy'          => 1,\n    // 4\u3001\u6570\u636e\u5e93\u8bfb\u5199\u5206\u79bb\u662f\u4e1a\u52a1\u4ee3\u7801\u5b9e\u73b0\u7684\uff0c\u914d\u7f6e\u4e3atrue\n    // \u6570\u636e\u5e93\u8bfb\u5199\u662f\u5426\u5206\u79bb \u4e3b\u4ece\u5f0f\u6709\u6548\n    'rw_separate'     => true,\n    // \u8bfb\u5199\u5206\u79bb\u540e \u4e3b\u670d\u52a1\u5668\u6570\u91cf\n    'master_num'      => 1,\n    // \u6307\u5b9a\u4ece\u670d\u52a1\u5668\u5e8f\u53f7\n    'slave_no'        => '',\n    // \u662f\u5426\u4e25\u683c\u68c0\u67e5\u5b57\u6bb5\u662f\u5426\u5b58\u5728\n")),(0,r.kt)("p",null,"\u6d4b\u8bd5 down \u4e3b\u5e93\uff0c\u770b\u4ece\u5e93\u662f\u5426\u53ef\u4ee5\u8bbf\u95ee\u3002thinkphp5 \u4e2d\uff0c\u5982\u679c slave \u5b95\u673a\uff0cmaster \u63d0\u4f9b\u8bfb\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"\u65b9\u5f0f-3mycat-\u5b9e\u73b0\u8bfb\u5199\u5206\u79bb"},"\u65b9\u5f0f 3\u3001MyCAT \u5b9e\u73b0\u8bfb\u5199\u5206\u79bb"),(0,r.kt)("p",null,"\u51c6\u5907\u4e00\u53f0\u670d\u52a1\u5668\uff0c\u4f5c\u4e3a\u6570\u636e\u5e93\u7684\u4e2d\u95f4\u4ef6\u670d\u52a1\u5668\uff0c\u914d\u7f6e\u57fa\u672c\u73af\u5883\uff0c\u7f51\u5361\u3001FQDN"),(0,r.kt)("p",null,"Mycat \u6570\u636e\u5e93\u4e2d\u95f4\u4ef6"),(0,r.kt)("p",null,"\u56fd\u5185\u6700\u6d3b\u8dc3\u7684\u3001\u6027\u80fd\u6700\u597d\u7684\u5f00\u6e90\u6570\u636e\u5e93\u4e2d\u95f4\u4ef6\uff01"),(0,r.kt)("p",null,"\u5b98\u65b9\u7f51\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://www.mycat.io/"},"http://www.mycat.io/")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MyCATApache/MyCAT-Server/"},"https://github.com/MyCATApache/MyCAT-Server/")),(0,r.kt)("p",null,"\u56e0\u4e3a mycat \u662f\u7531 java \u8bed\u8a00\u5f00\u53d1\uff0c\u5fc5\u987b\u4f7f\u7528 java \u7684\u8fd0\u884c\u73af\u5883\u624d\u80fd\u8fdb\u884c\u542f\u52a8\u548c\u64cd\u4f5c"),(0,r.kt)("h4",{id:"jdk-\u5b89\u88c5"},"jdk \u5b89\u88c5"),(0,r.kt)("p",null,"java \u9759\u6001\u7f16\u8bd1\u7684\u7f16\u7a0b\u8bed\u8a00 \u4ee3\u7801\u7f16\u8bd1\u6210\u673a\u5668\u7801 \u6267\u884c\u673a\u5668\u7801\u8f93\u51fa\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u7f16\u8bd1 jdk javac \u7f16\u8bd1 java \u4ee3\u7801"),(0,r.kt)("p",null,"\u8fd0\u884c jre \u7f16\u8bd1\u597d\u7684\u673a\u5668\u7801\uff08\u53ef\u4ee5\u6267\u884c\u6587\u4ef6\uff09 java"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u95ee\uff1a\u516c\u53f8\u670d\u52a1\u5668\u90e8\u7f72\u7684 java \u73af\u5883\u662f jdk \u8fd8\u662f jre\uff1f")),(0,r.kt)("p",null,"\u7b54\uff1ajre java \u89e3\u6790\u8fd0\u884c\u73af\u5883 \u4e00\u822c\u60c5\u51b5\u7f16\u8bd1\u8fc7\u7684\u53ef\u6267\u884c\u7684 java \u7a0b\u5e8f \uff0cjre \u5c31\u591f\u7528\u4e86\u3002"),(0,r.kt)("p",null,"jdk javac \u7f16\u8bd1\u7684\u73af\u5883 \u5982\u679c\u670d\u52a1\u5668\u4e0a\u4f20\u662f\u6e90\u4ee3\u7801\u6587\u4ef6 \u5c31\u53ef\u4ee5\u7f16\u8bd1\uff0c\u4e4b\u540e\u518d\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e1a\u52a1\u73af\u5883\u4e2d\uff0c\u5982\u679c\u5b58\u5728\u9700\u8981\u7f16\u8bd1\u7684\u60c5\u51b5\uff0c\u5c31\u9009\u62e9 jdk\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2460 \u4e0b\u8f7d\u5b89\u88c5 jdk")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"},"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html")),(0,r.kt)("p",null,"\u9009\u62e9\u4e0b\u8f7d x64 \u67b6\u6784.tar.gz \u5305"),(0,r.kt)("p",null,"\u4e0a\u4f20 mycat \u548c jdk \u5230 soft \u76ee\u5f55\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"shell > tar xvf jdk-8u192-linux-x64.tar.gz\nshell > mv jdk1.8.0_192 /usr/local/java\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2461 \u914d\u7f6e\u73af\u5883\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#\u8ffd\u52a0\u73af\u5883\u53d8\u91cf\nshell > echo "PATH=/usr/local/java/bin:$PATH" >> /etc/profile\nshell > source /etc/profile\n#\u68c0\u6d4bjava\u73af\u5883\u53d8\u91cf  \u5982\u679c\u770b\u5230\u7248\u672c\u4fe1\u606f\u5373\u4e3a\u6210\u529f\nshell > java -version\n')))}k.isMDXComponent=!0},4502:function(t,e,n){e.Z=n.p+"assets/images/2-e817f32617ae9419b5ae60b46a9a4860.jpg"},2339:function(t,e,n){e.Z=n.p+"assets/images/3-64b47a11c8919bb0e01e3d192a0a40f1.jpg"},418:function(t,e,n){e.Z=n.p+"assets/images/rw-ff59042b63797a432c65de1aca853026.jpg"}}]);