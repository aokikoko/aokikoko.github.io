"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1416],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return n?l.createElement(k,i(i({ref:t},m),{},{components:n})):l.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7771:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],p={title:"[Mysql] mysql\u6982\u8ff0",sidebar_position:2},o=void 0,s={unversionedId:"Mysql/rdbms",id:"Mysql/rdbms",title:"[Mysql] mysql\u6982\u8ff0",description:"1\u3001\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0e\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93",source:"@site/docs/Mysql/rdbms.md",sourceDirName:"Mysql",slug:"/Mysql/rdbms",permalink:"/docs/Mysql/rdbms",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Mysql/rdbms.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"[Mysql] mysql\u6982\u8ff0",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[Mysql] mysql\u65e0\u635f\u5347\u7ea7-\u6848\u4f8b\u62c6\u89e3",permalink:"/docs/Mysql/case"},next:{title:"[Mysql] sql\u8bed\u53e5",permalink:"/docs/Mysql/sql"}},m=[{value:"1\u3001\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0e\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93",id:"1\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0e\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93",children:[],level:2},{value:"2\u3001\u5e38\u89c1\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93",id:"2\u5e38\u89c1\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93",children:[],level:2},{value:"3\u3001\u4e8b\u52a1\u6982\u8ff0",id:"3\u4e8b\u52a1\u6982\u8ff0",children:[{value:"\u3220 \u4ec0\u4e48\u662f\u4e8b\u52a1\uff1f",id:"-\u4ec0\u4e48\u662f\u4e8b\u52a1",children:[],level:3},{value:"\u3221 \u4e8b\u52a1\u7279\u70b9(ACID\uff09",id:"-\u4e8b\u52a1\u7279\u70b9acid",children:[],level:3},{value:"\u3222 \u5e94\u7528\u573a\u666f",id:"-\u5e94\u7528\u573a\u666f",children:[],level:3}],level:2},{value:"3\u3001MySQL\u6570\u636e\u5e93\u4ecb\u7ecd",id:"3mysql\u6570\u636e\u5e93\u4ecb\u7ecd",children:[{value:"MySQL\u6570\u636e\u5e93\u7248\u672c",id:"mysql\u6570\u636e\u5e93\u7248\u672c",children:[],level:3}],level:2},{value:"4\u3001MySQL\u6570\u636e\u5e93\u5b89\u88c5",id:"4mysql\u6570\u636e\u5e93\u5b89\u88c5",children:[{value:"(1) windows\u7cfb\u7edf\u4e0a\u5b89\u88c5",id:"1-windows\u7cfb\u7edf\u4e0a\u5b89\u88c5",children:[],level:3},{value:"(2) centos7.6\u4e0a\u5b89\u88c5",id:"2-centos76\u4e0a\u5b89\u88c5",children:[{value:"centos\u73af\u5883\u51c6\u5907",id:"centos\u73af\u5883\u51c6\u5907",children:[],level:4}],level:3}],level:2},{value:"5\u3001MySQL\u7684\u5b89\u88c5\u7684\u51e0\u79cd\u65b9\u5f0f",id:"5mysql\u7684\u5b89\u88c5\u7684\u51e0\u79cd\u65b9\u5f0f",children:[{value:"\u4e8c\u8fdb\u5236\u8f6f\u4ef6\u5305\u5b89\u88c5",id:"\u4e8c\u8fdb\u5236\u8f6f\u4ef6\u5305\u5b89\u88c5",children:[],level:3},{value:"\u6e90\u7801\u5305\u7f16\u8bd1\u5b89\u88c5",id:"\u6e90\u7801\u5305\u7f16\u8bd1\u5b89\u88c5",children:[],level:3}],level:2},{value:"6\u3001MySQL\u7684\u5b89\u88c5\u7684\u533a\u522b",id:"6mysql\u7684\u5b89\u88c5\u7684\u533a\u522b",children:[],level:2},{value:"7\u3001\u533a\u5206\u6570\u636e\u5e93\u4e0e\u6570\u636e\u5e93\u5b9e\u4f8b",id:"7\u533a\u5206\u6570\u636e\u5e93\u4e0e\u6570\u636e\u5e93\u5b9e\u4f8b",children:[{value:"\u3220 \u4ec0\u4e48\u662fMySQL\u6570\u636e\u5e93\uff1f",id:"-\u4ec0\u4e48\u662fmysql\u6570\u636e\u5e93",children:[],level:3},{value:"\u3221 \u4ec0\u4e48\u662fMySQL\u6570\u636e\u5e93\u5b9e\u4f8b\uff1f",id:"-\u4ec0\u4e48\u662fmysql\u6570\u636e\u5e93\u5b9e\u4f8b",children:[],level:3},{value:"\u3222 \u6570\u636e\u5e93\u548c\u6570\u636e\u5e93\u5b9e\u4f8b\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f",id:"-\u6570\u636e\u5e93\u548c\u6570\u636e\u5e93\u5b9e\u4f8b\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48",children:[],level:3}],level:2},{value:"8\u3001MySQL\u7684GLIBC\u7248\u672c\u5b89\u88c5",id:"8mysql\u7684glibc\u7248\u672c\u5b89\u88c5",children:[],level:2},{value:"9\u3001MySQL\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5",id:"9mysql\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5",children:[],level:2}],c={toc:m};function u(e){var t=e.components,p=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0e\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93"},"1\u3001\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0e\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93"),(0,r.kt)("p",null,"RDBMS\uff08relational database management system\uff09\uff0c\u65e2\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u662f\u6307\u91c7\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"\u4e8c\u7ef4\u8868\u683c"),"\u6765\u7ec4\u7ec7\u6570\u636e\u7684\u6570\u636e\u5e93\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20200824093353050",src:n(1027).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6269\u5c55\uff1a\u6570\u636e\u5e93\u5728\u884c\u4e1a\u5185\u4e00\u822c\u4f1a\u6709\u4e24\u79cd\u60c5\u51b5\uff0c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u4e0e\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u3002\u975e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5e76\u4e0d\u662f\u901a\u8fc7\u4e8c\u7ef4\u8868\u683c\u6765\u7ef4\u62a4\u6570\u636e\u7684\uff0c\u800c\u662f\u901a\u8fc7key/value\u952e\u503c\u5bf9\u6765\u7ef4\u62a4\u6570\u636e\u7684\u3002"))),(0,r.kt)("h2",{id:"2\u5e38\u89c1\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93"},"2\u3001\u5e38\u89c1\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"oracle\u3001mysql"),"\u3001DB2\uff08IBM\uff09\u3001Sybase\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"SQL server"),"\uff08Microsoft\u5fae\u8f6f\uff09\u3001IBM Informix"),(0,r.kt)("p",null,"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6700\u5927\u7279\u70b9\u5c31\u662f==\u4e8b\u52a1\u7684\u4e00\u81f4\u6027=="),"\uff1a\u6240\u4ee5\u4e5f\u5728\u5bf9\u4e8b\u7269\u4e00\u81f4\u6027\u7684\u7ef4\u62a4\u4e2d\u6709\u5f88\u5927\u7684\u5f00\u9500."),(0,r.kt)("h2",{id:"3\u4e8b\u52a1\u6982\u8ff0"},"3\u3001\u4e8b\u52a1\u6982\u8ff0"),(0,r.kt)("h3",{id:"-\u4ec0\u4e48\u662f\u4e8b\u52a1"},"\u3220 \u4ec0\u4e48\u662f\u4e8b\u52a1\uff1f"),(0,r.kt)("p",null,"1\uff09\u4e8b\u52a1\u7531\u4e00\u6761\u6216\u8005\u591a\u6761sql\u8bed\u53e5\u7ec4\u6210\uff1b"),(0,r.kt)("p",null,"2\uff09\u5728\u4e8b\u52a1\u4e2d\u7684\u64cd\u4f5c\uff0c\u8fd9\u4e9bsql\u8bed\u53e5\u8981\u4e48\u90fd\u6210\u529f\u6267\u884c\uff0c\u8981\u4e48\u90fd\u4e0d\u6267\u884c\uff0c\u8fd9\u5c31\u662f\u4e00\u4e2a\u4e8b\u52a1\u3002 "),(0,r.kt)("p",null,"==\u4e3e\u4f8b\u8bf4\u660e\uff1a=="),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\xa0\xa0\xa0 \u767b\u9646ATM\u673a\uff0c\u8f93\u5165\u5bc6\u7801\uff1b "),(0,r.kt)("li",{parentName:"ol"},"\xa0\xa0\xa0 \u8fde\u63a5\u6570\u636e\u5e93\uff0c\u9a8c\u8bc1\u5bc6\u7801\uff1b "),(0,r.kt)("li",{parentName:"ol"},"\xa0\xa0\xa0 \u9a8c\u8bc1\u6210\u529f\uff0c\u83b7\u5f97\u7528\u6237\u4fe1\u606f\uff0c\u6bd4\u5982\u5b58\u6b3e\u4f59\u989d\u7b49\uff1b "),(0,r.kt)("li",{parentName:"ol"},"\xa0\xa0\xa0 \u7528\u6237\u8f93\u5165\u9700\u8981\u8f6c\u8d26\u7684\u91d1\u989d\uff0c\u6309\u4e0b\u786e\u8ba4\u952e\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\xa0\xa0\xa0 ==\u4ece\u540e\u53f0\u6570\u636e\u5e93\u4e2d\u51cf\u6389\u7528\u6237\u8d26\u6237\u4e0a\u7684\u5bf9\u5e94\u91d1\u989d\uff08update\u8bed\u53e5\uff09\uff1b== "),(0,r.kt)("li",{parentName:"ol"},"\xa0\xa0\xa0 ==\u4ece\u540e\u53f0\u6570\u636e\u5e93\u4e2d\u7ed9\u5bf9\u65b9\u8d26\u6237\u589e\u52a0\u76f8\u5e94\u7684\u91d1\u989d\uff08update\u8bed\u53e5\uff09\uff1b== "),(0,r.kt)("li",{parentName:"ol"},"\xa0\xa0\xa0 \u786e\u8ba4\uff0c\u9000\u5361\uff0c\u8d70\u4eba\uff1b")),(0,r.kt)("h3",{id:"-\u4e8b\u52a1\u7279\u70b9acid"},"\u3221 \u4e8b\u52a1\u7279\u70b9(ACID\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u539f\u5b50\u6027(Atomicity)\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u4e8b\u52a1\u4e2d\u7684\u5168\u90e8\u64cd\u4f5c\u5728\u6570\u636e\u5e93\u4e2d\u662f\u4e0d\u53ef\u5206\u5272\u7684\uff0c\u8981\u4e48==\u5168\u90e8\u5b8c\u6210==\uff0c\u8981\u4e48==\u5747\u4e0d\u6267\u884c==\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u81f4\u6027(Consistency)\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u6307\u4e8b\u52a1\u5fc5\u987b\u4f7f\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001\u53d8\u6362\u5230\u53e6\u4e00\u4e2a\u4e00\u81f4\u6027\u72b6\u6001\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2a\u4e8b\u52a1\u6267\u884c\u4e4b\u524d\u548c\u6267\u884c\u4e4b\u540e\u90fd\u5fc5\u987b\u5904\u4e8e\u4e00\u81f4\u6027\u72b6\u6001\uff0c\u4e0d\u80fd\u7834\u574f\u5173\u7cfb\u6570\u636e\u7684\u5b8c\u6574\u6027\u4ee5\u53ca\u4e1a\u52a1\u903b\u8f91\u4e0a\u7684\u4e00\u81f4\u6027\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9694\u79bb\u6027(Isolation)\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u4e8b\u52a1\u7684\u6267\u884c\u4e0d\u53d7\u5176\u4ed6\u4e8b\u52a1\u7684\u5e72\u6270\uff0c\u4e8b\u52a1\u6267\u884c\u7684\u4e2d\u95f4\u7ed3\u679c\u5bf9\u5176\u4ed6\u4e8b\u52a1\u5fc5\u987b\u662f\u900f\u660e\u7684\u3002\u9694\u79bb\u6027\u662f\u5f53\u591a\u4e2a\u7528\u6237\u5e76\u53d1\u8bbf\u95ee\u6570\u636e\u5e93\u65f6\uff0c\u6bd4\u5982\u64cd\u4f5c\u540c\u4e00\u5f20\u8868\u65f6\uff0c\u6570\u636e\u5e93\u4e3a\u6bcf\u4e00\u4e2a\u7528\u6237\u5f00\u542f\u7684\u4e8b\u52a1\uff0c\u4e0d\u80fd\u88ab\u5176\u4ed6\u4e8b\u52a1\u7684\u64cd\u4f5c\u6240\u5e72\u6270\uff0c\u591a\u4e2a\u5e76\u53d1\u4e8b\u52a1\u4e4b\u95f4\u8981\u76f8\u4e92\u9694\u79bb\u3002 ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6301\u4e45\u6027(Durability)\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u6301\u4e45\u6027\u662f\u6307\u4e00\u4e2a\u4e8b\u52a1\u4e00\u65e6\u88ab\u63d0\u4ea4\u4e86\uff0c\u90a3\u4e48\u5bf9\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\u7684\u6539\u53d8\u5c31\u662f\u6c38\u4e45\u6027\u7684\uff0c\u5373\u4fbf\u662f\u5728\u6570\u636e\u5e93\u7cfb\u7edf\u9047\u5230\u6545\u969c\u7684\u60c5\u51b5\u4e0b\u4e5f\u4e0d\u4f1a\u4e22\u5931\u63d0\u4ea4\u4e8b\u52a1\u7684\u64cd\u4f5c\u3002 "))),(0,r.kt)("h3",{id:"-\u5e94\u7528\u573a\u666f"},"\u3222 \u5e94\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u5bf9\u6570\u636e\u7684\u4e00\u81f4\u6027\u8981\u6c42\u8f83\u9ad8;\u5178\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u94f6\u884c\u53ca\u652f\u4ed8\u7cfb\u7edf\u7c7b"),"\uff1b"),(0,r.kt)("h2",{id:"3mysql\u6570\u636e\u5e93\u4ecb\u7ecd"},"3\u3001MySQL\u6570\u636e\u5e93\u4ecb\u7ecd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL\u662f\u4e00\u79cd\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u745e\u5178MySQL AB \u516c\u53f8\u5f00\u53d1\uff0c\u76ee\u524d\u5c5e\u4e8eOracle\u65d7\u4e0b"),(0,r.kt)("li",{parentName:"ul"},"MySQL\u662fC/S\u67b6\u6784")),(0,r.kt)("h3",{id:"mysql\u6570\u636e\u5e93\u7248\u672c"},"MySQL\u6570\u636e\u5e93\u7248\u672c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u793e\u533a\u7248\uff1aMySQL Community Edition  (GPL) ")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u770b\u505a\u662f\u4f01\u4e1a\u7248\u7684\u201c\u5e7f\u6cdb\u4f53\u9a8c\u7248\uff08\u5c0f\u767d\u9f20\u7248\uff09\u201d\uff0c\u672a\u7ecf\u5404\u4e2a\u4e13\u6709\u7cfb\u7edf\u5e73\u53f0\u7684\u538b\u529b\u6d4b\u8bd5\u548c\u6027\u80fd\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ol"},"\u57fa\u4e8eGPL\u534f\u8bae\u53d1\u5e03\uff0c\u53ef\u4ee5\u968f\u610f\u4e0b\u8f7d\u4f7f\u7528 "),(0,r.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u4efb\u4f55\u5b98\u65b9\u6280\u672f\u652f\u6301\u670d\u52a1 "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u4f01\u4e1a\u7248\uff1aMySQL Enterprise Edition(commercial) ")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e86\u6bd4\u8f83\u5168\u9762\u7684\u9ad8\u7ea7\u529f\u80fd\u3001\u7ba1\u7406\u5de5\u5177\u53ca\u6280\u672f\u652f\u6301 "),(0,r.kt)("li",{parentName:"ol"},"\u5b89\u5168\u6027\u3001\u7a33\u5b9a\u6027\u3001\u53ef\u6269\u5c55\u6027\u6bd4\u8f83\u597d"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7248\uff1aMySQL Cluster CGE(commercial) ")))),(0,r.kt)("h2",{id:"4mysql\u6570\u636e\u5e93\u5b89\u88c5"},"4\u3001MySQL\u6570\u636e\u5e93\u5b89\u88c5"),(0,r.kt)("h3",{id:"1-windows\u7cfb\u7edf\u4e0a\u5b89\u88c5"},"(1) windows\u7cfb\u7edf\u4e0a\u5b89\u88c5"),(0,r.kt)("p",null,"\u7565"),(0,r.kt)("h3",{id:"2-centos76\u4e0a\u5b89\u88c5"},"(2) centos7.6\u4e0a\u5b89\u88c5"),(0,r.kt)("h4",{id:"centos\u73af\u5883\u51c6\u5907"},"centos\u73af\u5883\u51c6\u5907"),(0,r.kt)("p",null,"\u2460 \u8bbe\u7f6e\u4e3b\u673a\u540d\u79f0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# hostnamectl set-hostname centos7.itcast.cn\n# su\n")),(0,r.kt)("p",null,"\u2461 \u66f4\u6539IP\u83b7\u53d6\u65b9\u5f0f\u4e3a\u9759\u6001\u8bbe\u7f6e\u4ee5\u53ca\u7ed1\u5b9a\u4e3b\u673a\u540d+IP\u5230/etc/hosts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'# vi /etc/sysconfig/network-scripts/ifcfg-ens33\nTYPE="Ethernet"\nBOOTPROTO="none"\nIPADDR=10.1.1.10\nNETMASK=255.255.255.0\nGATEWAY=10.1.1.2\nDNS1=8.8.8.8\nDNS2=119.29.29.29\nNAME="ens33"\nDEVICE="ens33"\nONBOOT="yes"\n\n# vi /etc/hosts\n10.1.1.10 centos7.itcast.cn\n\n# systemctl restart network\n\u5982\u679c\u662f\u591a\u7f51\u5361\u5f62\u5f0f\uff0c\u5efa\u8bae\u4f7f\u7528ifdown\u4e0eifup\n# ifdown ens33\n# ifup ens33\n\n# ip a\n')),(0,r.kt)("p",null,"\u2462 \u5173\u95ed\u9632\u706b\u5899\u4e0eSELinux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl stop firewalld\n# systemctl disable firewalld\n\n# setenforce 0\n# vim /etc/selinux/config\nSELINUX=disabled\n")),(0,r.kt)("p",null,"\u2463 \u914d\u7f6e\u516c\u7f51YUM\u6e90\uff08\u53ef\u4ee5\u8003\u8651\u817e\u8baf\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# yum install wget -y\n# mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n# wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.cloud.tencent.com/repo/centos7_base.repo\n\n# yum clean all\n# yum makecache\n")),(0,r.kt)("p",null,"\u2464 \u5b89\u88c5\u6269\u5c55\u8f6f\u4ef6\uff08bash-completion\u81ea\u52a8\u8865\u5168\u3001vim\u7f16\u8f91\u5668\u3001net-tools\u7f51\u7edc\u5de5\u5177\u5305\u4ee5\u53cantpdate\u65f6\u95f4\u540c\u6b65\u5de5\u5177\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# yum install bash-completion vim net-tools ntpdate -y\n")),(0,r.kt)("p",null,"\u2465 ntpdate\u65f6\u95f4\u540c\u6b65 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# ntpdate 120.25.108.11\n")),(0,r.kt)("h2",{id:"5mysql\u7684\u5b89\u88c5\u7684\u51e0\u79cd\u65b9\u5f0f"},"5\u3001MySQL\u7684\u5b89\u88c5\u7684\u51e0\u79cd\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u4e8c\u8fdb\u5236\u8f6f\u4ef6\u5305\u5b89\u88c5"},"\u4e8c\u8fdb\u5236\u8f6f\u4ef6\u5305\u5b89\u88c5"),(0,r.kt)("p",null,"\u2460 yum\u5b89\u88c5\u6216rpm\u5b89\u88c5\uff08\u7565\uff09"),(0,r.kt)("p",null,"\u2461 glibc\u7248\u672c\u5b89\u88c5\uff08\u76f8\u5f53\u4e8eWindows\u4e2d\u7684\u7eff\u8272\u8f6f\u4ef6\uff09"),(0,r.kt)("p",null,"  \u547d\u540d\uff1a==mysql-5.7.31-linux-glibc2.12-x86_64.tar.gz== "),(0,r.kt)("p",null,"  \u4f9d\u8d56",(0,r.kt)("sup",{parentName:"p",id:"fnref-glibc"},(0,r.kt)("a",{parentName:"sup",href:"#fn-glibc",className:"footnote-ref"},"glibc")),"\u5e93\uff0c\u53ef\u4ee5\u5b89\u88c5\u5728\u901a\u7528\u7684Linux\u7cfb\u7edf\u4e0b"),(0,r.kt)("h3",{id:"\u6e90\u7801\u5305\u7f16\u8bd1\u5b89\u88c5"},"\u6e90\u7801\u5305\u7f16\u8bd1\u5b89\u88c5"),(0,r.kt)("p",null,"\u547d\u540d\uff1amysql-5.7.31.tar.gz\uff0c\u901a\u7528\u7684Linux\u4e0b\u90fd\u53ef\u4ee5\u7f16\u8bd1\u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"6mysql\u7684\u5b89\u88c5\u7684\u533a\u522b"},"6\u3001MySQL\u7684\u5b89\u88c5\u7684\u533a\u522b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b89\u88c5\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f18\u70b9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7f3a\u70b9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rpm"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5\u5378\u8f7d\u7b80\u5355"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u5b9a\u5236\u6027\u5dee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"glibc"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u5b9a\u5236\u6027\u76f8\u6bd4rpm\u5305\u7075\u6d3b\u4e9b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5\u76f8\u6bd4rpm\u5305\u590d\u6742\u4e9b\uff0c\u9700\u8981\u624b\u52a8\u521d\u59cb\u5316\u6570\u636e\u5e93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6e90\u7801\u5b89\u88c5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u5b9a\u5236\u6027\u6700\u5f3a\uff0c\u6839\u636e\u9700\u6c42\u548c\u529f\u80fd\u5b9a\u5236"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b89\u88c5\u9ebb\u70e6\uff0c\u9700\u8981\u624b\u52a8\u521d\u59cb\u5316\u6570\u636e\u5e93")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u4f01\u4e1a\u4e2d\uff0c\u6570\u636e\u5e93\u7684\u5b89\u88c5\u5f88\u5c11\u4f7f\u7528rpm\u65b9\u5f0f\uff0c\u5927\u90e8\u5206\u90fd\u662f\u57fa\u4e8e\u6e90\u7801\u5b89\u88c5\u4ee5\u53caglibc\u5b89\u88c5\uff01")),(0,r.kt)("h2",{id:"7\u533a\u5206\u6570\u636e\u5e93\u4e0e\u6570\u636e\u5e93\u5b9e\u4f8b"},"7\u3001\u533a\u5206\u6570\u636e\u5e93\u4e0e\u6570\u636e\u5e93\u5b9e\u4f8b"),(0,r.kt)("h3",{id:"-\u4ec0\u4e48\u662fmysql\u6570\u636e\u5e93"},"\u3220 \u4ec0\u4e48\u662fMySQL\u6570\u636e\u5e93\uff1f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\uff08database\uff09\uff1a")," \u64cd\u4f5c\u7cfb\u7edf\u6216\u5b58\u50a8\u4e0a\u7684==\u6570\u636e\u6587\u4ef6\u7684\u96c6\u5408==\u3002mysql\u6570\u636e\u5e93\u4e2d\uff0c\u6570\u636e\u5e93\u6587\u4ef6\u53ef\u4ee5\u662f",(0,r.kt)("em",{parentName:"p"}," .frm\u3001"),".MYD\u3001",(0,r.kt)("em",{parentName:"p"},".MYI\u3001"),".ibd\u7b49\u7ed3\u5c3e\u7684\u6587\u4ef6\uff0c \u4e0d\u540c\u5b58\u50a8\u5f15\u64ce\u6587\u4ef6\u7c7b\u578b\u4e0d\u540c\u3002"),(0,r.kt)("h3",{id:"-\u4ec0\u4e48\u662fmysql\u6570\u636e\u5e93\u5b9e\u4f8b"},"\u3221 \u4ec0\u4e48\u662fMySQL\u6570\u636e\u5e93\u5b9e\u4f8b\uff1f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5e93\u5b9e\u4f8b\uff08instance\uff09\uff1a")," \u7531==\u540e\u53f0\u8fdb\u7a0b\u6216\u8005\u7ebf\u7a0b==\u4ee5\u53ca\u4e00\u4e2a==\u5171\u4eab\u5185\u5b58\u533a==\u7ec4\u6210\u3002\u5171\u4eab\u5185\u5b58\u53ef\u4ee5\u88ab\u8fd0\u884c\u7684\u540e\u53f0\u7ebf\u7a0b\u6240\u5171\u4eab\u3002 \u6570\u636e\u5e93\u5b9e\u4f8b\u624d\u662f\u771f\u6b63\u64cd\u4f5c\u6570\u636e\u5e93\u7684\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aMySQL\u7684\u540e\u53f0\u5b88\u62a4\u7a0b\u5e8f==mysqld==\u662f\u5355\u8fdb\u7a0b\u591a\u7ebf\u7a0b\u7684\u5de5\u4f5c\u6a21\u5f0f\u3002"),(0,r.kt)("h3",{id:"-\u6570\u636e\u5e93\u548c\u6570\u636e\u5e93\u5b9e\u4f8b\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48"},"\u3222 \u6570\u636e\u5e93\u548c\u6570\u636e\u5e93\u5b9e\u4f8b\u4e4b\u95f4\u7684\u5173\u7cfb\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6570\u636e\u5e93\u5b9e\u4f8b\u548c\u6570\u636e\u5e93\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u5173\u7cfb\uff0c\u4e5f\u5c31\u662f==\u4e00\u4e2a\u6570\u636e\u5e93\u5b9e\u4f8b\u5bf9\u5e94\u4e00\u4e2a\u6570\u636e\u5e93==\uff1b \u4f46\u662f\uff0c\u5728\u96c6\u7fa4\u73af\u5883\u4e2d\u5b58\u5728==\u591a\u4e2a\u6570\u636e\u5e93\u5b9e\u4f8b\u5171\u540c\u4f7f\u7528\u4e00\u4e2a\u6570\u636e\u5e93==\u3002oracle RAC"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"8mysql\u7684glibc\u7248\u672c\u5b89\u88c5"},"8\u3001MySQL\u7684GLIBC\u7248\u672c\u5b89\u88c5"),(0,r.kt)("p",null,"\u7565"),(0,r.kt)("h2",{id:"9mysql\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5"},"9\u3001MySQL\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5"),(0,r.kt)("p",null,"\u7565"))}u.isMDXComponent=!0},1027:function(e,t,n){t.Z=n.p+"assets/images/image-20200824093353050-6193c4b57f0c713aa2a356a1b0ea0d79.png"}}]);