"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1958],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8277:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"[Mysql] sql\u8bed\u53e5",sidebar_position:3},s=void 0,p={unversionedId:"Mysql/sql",id:"Mysql/sql",title:"[Mysql] sql\u8bed\u53e5",description:"1\u3001SQL \u8bed\u53e5\u7684\u5206\u7c7b",source:"@site/docs/Mysql/sql.md",sourceDirName:"Mysql",slug:"/Mysql/sql",permalink:"/docs/Mysql/sql",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Mysql/sql.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"[Mysql] sql\u8bed\u53e5",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[Mysql] mysql\u6982\u8ff0",permalink:"/docs/Mysql/rdbms"},next:{title:"[Nginx] \u4fe1\u53f7\u53c2\u6570\u53ca\u914d\u7f6e\u6587\u4ef6\u4ecb\u7ecd",permalink:"/docs/Nginx/sign"}},c=[{value:"1\u3001SQL \u8bed\u53e5\u7684\u5206\u7c7b",id:"1sql-\u8bed\u53e5\u7684\u5206\u7c7b",children:[],level:2},{value:"2\u3001SQL \u8bed\u53e5\u7684\u57fa\u672c\u64cd\u4f5c",id:"2sql-\u8bed\u53e5\u7684\u57fa\u672c\u64cd\u4f5c",children:[{value:"\u2606 MySQL \u7684\u57fa\u672c\u7ed3\u6784",id:"-mysql-\u7684\u57fa\u672c\u7ed3\u6784",children:[],level:3},{value:"\u2606 \u6570\u636e\u5e93\u7684\u57fa\u672c\u64cd\u4f5c",id:"-\u6570\u636e\u5e93\u7684\u57fa\u672c\u64cd\u4f5c",children:[],level:3},{value:"\u2460 \u521b\u5efa\u6570\u636e\u5e93",id:"-\u521b\u5efa\u6570\u636e\u5e93",children:[],level:3},{value:"\u6848\u4f8b\uff1a\u521b\u5efa\u6570\u636e\u5e93\u7684\u76f8\u5173\u6848\u4f8b",id:"\u6848\u4f8b\u521b\u5efa\u6570\u636e\u5e93\u7684\u76f8\u5173\u6848\u4f8b",children:[],level:3},{value:"\u2461 \u67e5\u8be2\u5df2\u521b\u5efa\u6570\u636e\u5e93",id:"-\u67e5\u8be2\u5df2\u521b\u5efa\u6570\u636e\u5e93",children:[],level:3},{value:"\u2462 \u4fee\u6539\u6570\u636e\u5e93\u4fe1\u606f",id:"-\u4fee\u6539\u6570\u636e\u5e93\u4fe1\u606f",children:[],level:3},{value:"\u2463 \u5220\u9664\u6570\u636e\u5e93",id:"-\u5220\u9664\u6570\u636e\u5e93",children:[],level:3}],level:2},{value:"TODO",id:"todo",children:[],level:2}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1sql-\u8bed\u53e5\u7684\u5206\u7c7b"},"1\u3001SQL \u8bed\u53e5\u7684\u5206\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DDL(Data Definition Languages)\u8bed\u53e5:"),(0,l.kt)("p",{parentName:"li"},"==\u6570\u636e\u5b9a\u4e49\u8bed\u8a00==,\u8fd9\u4e9b\u8bed\u53e5\u5b9a\u4e49\u4e86\u4e0d\u540c\u7684\u6570\u636e\u6bb5\u3001\u6570\u636e\u5e93\u3001\u8868\u3001\u5217\u3001\u7d22\u5f15\u7b49\u6570\u636e\u5e93\u5bf9\u8c61\u7684\u5b9a\u4e49\u3002\u5e38\u7528\u7684\u8bed\u53e5\u5173\u952e\u5b57\u4e3b\u8981\u5305\u62ec ",(0,l.kt)("strong",{parentName:"p"},"create\u3001drop\u3001alter\u3001rename\u3001truncate"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DML(Data Manipulation Language)\u8bed\u53e5:"),(0,l.kt)("p",{parentName:"li"},"==\u6570\u636e\u64cd\u7eb5\u8bed\u53e5==,\u7528\u4e8e\u6dfb\u52a0\u3001\u5220\u9664\u3001\u66f4\u65b0\u548c\u67e5\u8be2\u6570\u636e\u5e93\u8bb0\u5f55,\u5e76\u68c0\u67e5\u6570\u636e\u5b8c\u6574\u6027,\u5e38\u7528\u7684\u8bed\u53e5\u5173\u952e\u5b57\u4e3b\u8981\u5305\u62ec ",(0,l.kt)("strong",{parentName:"p"},"insert\u3001delete\u3001update"),"\u7b49\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DCL(Data Control Language)\u8bed\u53e5:"),(0,l.kt)("p",{parentName:"li"},"==\u6570\u636e\u63a7\u5236\u8bed\u53e5==,\u7528\u4e8e\u63a7\u5236\u4e0d\u540c\u6570\u636e\u6bb5\u76f4\u63a5\u7684\u8bb8\u53ef\u548c\u8bbf\u95ee\u7ea7\u522b\u7684\u8bed\u53e5\u3002\u8fd9\u4e9b\u8bed\u53e5\u5b9a\u4e49\u4e86\u6570\u636e\u5e93\u3001\u8868\u3001\u5b57\u6bb5\u3001\u7528\u6237\u7684\u8bbf\u95ee\u6743\u9650\u548c\u5b89\u5168\u7ea7\u522b\u3002\u4e3b\u8981\u7684\u8bed\u53e5\u5173\u952e\u5b57\u5305\u62ec ",(0,l.kt)("strong",{parentName:"p"},"grant\u3001revoke")," \u7b49\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"DQL(Data Query Language)\u8bed\u53e5:"),(0,l.kt)("p",{parentName:"li"},"==\u6570\u636e\u67e5\u8be2\u8bed\u53e5==\uff0c\u7528\u4e8e\u4ece\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u4e2d\u68c0\u7d22\u4fe1\u606f\u3002\u4e3b\u8981\u7684\u8bed\u53e5\u5173\u952e\u5b57\u5305\u62ec ",(0,l.kt)("strong",{parentName:"p"},"select")))),(0,l.kt)("h2",{id:"2sql-\u8bed\u53e5\u7684\u57fa\u672c\u64cd\u4f5c"},"2\u3001SQL \u8bed\u53e5\u7684\u57fa\u672c\u64cd\u4f5c"),(0,l.kt)("h3",{id:"-mysql-\u7684\u57fa\u672c\u7ed3\u6784"},"\u2606 MySQL \u7684\u57fa\u672c\u7ed3\u6784"),(0,l.kt)("p",null,"\u4e00\u4e2a MySQL DBMS \u53ef\u4ee5\u540c\u65f6\u5b58\u653e\u591a\u4e2a\u6570\u636e\u5e93\uff0c\u7406\u8bba\u4e0a\u4e00\u4e2a\u9879\u76ee\u5c31\u5bf9\u5e94\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u5982\u535a\u5ba2\u9879\u76ee blog \u6570\u636e\u5e93\u3001\u5546\u57ce\u9879\u76ee shop \u6570\u636e\u5e93\u3001\u5fae\u4fe1\u9879\u76ee wechat \u6570\u636e\u5e93\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6570\u636e\u5e93\u4e2d\u8fd8\u53ef\u4ee5\u540c\u65f6\u5305\u542b\u591a\u4e2a\u6570\u636e\u8868\uff0c\u800c\u6570\u636e\u8868\u624d\u662f\u771f\u6b63\u7528\u4e8e\u5b58\u653e\u6570\u636e\u7684\u4f4d\u7f6e\u3002\uff08\u7c7b\u4f3c\u6211\u4eec Office \u8f6f\u4ef6\u4e2d\u7684 Excel \u8868\u683c\uff09\uff0c\u7406\u8bba\u4e0a\u4e00\u4e2a\u529f\u80fd\u5c31\u5bf9\u5e94\u4e00\u4e2a\u6570\u636e\u8868\u3002\u5982\u535a\u5ba2\u7cfb\u7edf\u4e2d\u7684\u7528\u6237\u7ba1\u7406\u529f\u80fd\uff0c\u5c31\u9700\u8981\u4e00\u4e2a user \u6570\u636e\u8868\u3001\u535a\u5ba2\u4e2d\u7684\u6587\u7ae0\u5c31\u9700\u8981\u4e00\u4e2a article \u6570\u636e\u8868\u3001\u535a\u5ba2\u4e2d\u7684\u8bc4\u8bba\u5c31\u9700\u8981\u4e00\u4e2a message \u6570\u636e\u8868\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6570\u636e\u8868\u53c8\u53ef\u4ee5\u62c6\u5206\u4e3a\u591a\u4e2a\u5b57\u6bb5\uff0c\u6bcf\u4e2a\u5b57\u6bb5\u5c31\u662f\u4e00\u4e2a\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u6570\u636e\u8868\u9664\u4e86\u5b57\u6bb5\u4ee5\u5916\uff0c\u8fd8\u6709\u5f88\u591a\u884c\uff0c\u6bcf\u4e00\u884c\u90fd\u662f\u4e00\u6761\u5b8c\u6574\u7684\u6570\u636e\uff08\u8bb0\u5f55\uff09\u3002"),(0,l.kt)("h3",{id:"-\u6570\u636e\u5e93\u7684\u57fa\u672c\u64cd\u4f5c"},"\u2606 \u6570\u636e\u5e93\u7684\u57fa\u672c\u64cd\u4f5c"),(0,l.kt)("h3",{id:"-\u521b\u5efa\u6570\u636e\u5e93"},"\u2460 \u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u57fa\u672c\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mysql> create database \u6570\u636e\u5e93\u540d\u79f0;\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7279\u522b\u6ce8\u610f\uff1a\u5728 MySQL \u4e2d\uff0c\u5f53\u4e00\u6761 SQL \u8bed\u53e5\u7f16\u5199\u5b8c\u6bd5\u540e\uff0c\u4e00\u5b9a\u8981\u4f7f\u7528\u5206\u53f7;\u8fdb\u884c\u7ed3\u5c3e\uff0c\u5426\u5219\u7cfb\u7edf\u8ba4\u4e3a\u8fd9\u6761\u8bed\u53e5\u8fd8\u6ca1\u6709\u7ed3\u675f\u3002"))),(0,l.kt)("h3",{id:"\u6848\u4f8b\u521b\u5efa\u6570\u636e\u5e93\u7684\u76f8\u5173\u6848\u4f8b"},"\u6848\u4f8b\uff1a\u521b\u5efa\u6570\u636e\u5e93\u7684\u76f8\u5173\u6848\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"\u521b\u5efadb1\u5e93\ncreate database db1;\n\n\u521b\u5efadb1\u5e93\u5e76\u6307\u5b9a\u9ed8\u8ba4\u5b57\u7b26\u96c6\ncreate database db1 default charset gbk;\n\n\u5982\u679c\u5b58\u5728\u4e0d\u62a5\u9519(if not exists)\ncreate database if not exists db1 default character set utf8;\n\u8bf4\u660e\uff1a\u4e0d\u80fd\u521b\u5efa\u76f8\u540c\u540d\u5b57\u7684\u6570\u636e\u5e93\uff01\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6269\u5c55")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6269\u5c55\uff1a\u7f16\u7801\u683c\u5f0f\uff0c\u5e38\u89c1\u7684 gbk\uff08\u4e2d\u56fd\u7684\u7f16\u7801\u683c\u5f0f\uff09\u4e0e utf8\uff08\u56fd\u9645\u901a\u7528\u7f16\u7801\u683c\u5f0f\uff09"),(0,l.kt)("p",{parentName:"div"},"\u65e9\u671f\u662f latin1 \u4ec5\u652f\u6301 256 \u4e2a\u5b57\u7b26 \uff08abcd\u30011234\u3001\u4f20\u7edf\u5b57\u7b26\uff09"),(0,l.kt)("p",{parentName:"div"},"\u56fd\u5185\u6c49\u5b57\u65e0\u6cd5\u901a\u8fc7 256 \u4e2a\u5b57\u7b26\u8fdb\u884c\u63cf\u8ff0\uff0c\u6240\u4ee5\u56fd\u5185\u5f00\u53d1\u4e86\u81ea\u5df1\u7684\u7f16\u7801\u683c\u5f0f gb2312\uff0c\u5347\u7ea7 gbk"),(0,l.kt)("p",{parentName:"div"},"\u4e2d\u56fd\u53f0\u6e7e\u4e1a\u5f00\u53d1\u4e86\u4e00\u5957\u81ea\u5df1\u7684\u7f16\u7801\u683c\u5f0f big5"),(0,l.kt)("p",{parentName:"div"},"\u5f88\u591a\u9879\u76ee\u5e76\u4e0d\u4ec5\u4ec5\u53ea\u5728\u672c\u5730\u4f7f\u7528\uff0c\u4e5f\u53ef\u80fd\u652f\u6301\u591a\u56fd\u8bed\u8a00\uff0c\u6807\u51c6\u5316\u7ec4\u7ec7\u5f00\u53d1\u4e86\u4e00\u5957\u901a\u7528\u7f16\u7801 utf8\uff0c\u540e\u6765 5.6 \u7248\u672c\u4ee5\u540e\u53c8\u8fdb\u884c\u4e86\u5347\u7ea7 utf8mb4"))),(0,l.kt)("h3",{id:"-\u67e5\u8be2\u5df2\u521b\u5efa\u6570\u636e\u5e93"},"\u2461 \u67e5\u8be2\u5df2\u521b\u5efa\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u57fa\u672c\u8bed\u6cd5\uff1a"),(0,l.kt)("p",null,"\u663e\u793a\u6240\u6709\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mysql> show databases;\n")),(0,l.kt)("p",null,"\u663e\u793a\u67d0\u4e2a\u6570\u636e\u5e93\u7684\u6570\u636e\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mysql> show create database db_itheima;\n")),(0,l.kt)("h3",{id:"-\u4fee\u6539\u6570\u636e\u5e93\u4fe1\u606f"},"\u2462 \u4fee\u6539\u6570\u636e\u5e93\u4fe1\u606f"),(0,l.kt)("p",null,"\u5728 MySQL5 \u4ee5\u540e\u7684\u7248\u672c\u4e2d\uff0cMySQL \u4e0d\u652f\u6301\u66f4\u6539\u6570\u636e\u5e93\u7684\u540d\u79f0\u3002\u6211\u4eec\u6240\u8c13\u7684\u4fee\u6539\u6570\u636e\u5e93\u4e3b\u8981\u4fee\u6539\u7684\u662f\u6570\u636e\u5e93\u7684\u7f16\u7801\u683c\u5f0f\u3002"),(0,l.kt)("p",null,"\u57fa\u672c\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mysql> alter database \u6570\u636e\u5e93\u540d\u79f0 default charset=\u65b0\u7f16\u7801\u683c\u5f0f;\n")),(0,l.kt)("p",null,"\u6848\u4f8b\uff1a\u628a db_itheima \u6570\u636e\u5e93\u7684\u7f16\u7801\u683c\u5f0f\u66f4\u6539\u4e3a gbk"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mysql> alter database db_itheima default charset=gbk;\n")),(0,l.kt)("h3",{id:"-\u5220\u9664\u6570\u636e\u5e93"},"\u2463 \u5220\u9664\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u57fa\u672c\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mysql> drop database \u6570\u636e\u5e93\u540d\u79f0;\n")),(0,l.kt)("p",null,"\u6848\u4f8b\uff1a\u5220\u9664 db_itheima \u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"mysql> drop database db_itheima;\n")),(0,l.kt)("h2",{id:"todo"},"TODO"))}u.isMDXComponent=!0}}]);