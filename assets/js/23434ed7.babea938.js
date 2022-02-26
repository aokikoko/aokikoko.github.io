"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7764],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),v=r,u=d["".concat(c,".").concat(v)]||d[v]||m[v]||l;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"[JS] \u53d8\u91cf\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5\u539f\u7406",sidebar_position:2},c=void 0,s={unversionedId:"javascript/var-let-const",id:"javascript/var-let-const",title:"[JS] \u53d8\u91cf\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5\u539f\u7406",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u7b2c\u4e8c\u7ae0 3-3 \u53d8\u91cf",source:"@site/docs/javascript/var-let-const.md",sourceDirName:"javascript",slug:"/javascript/var-let-const",permalink:"/docs/javascript/var-let-const",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/var-let-const.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"[JS] \u53d8\u91cf\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5\u539f\u7406",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[JS] \u5173\u4e8e\u4ec0\u4e48\u662fJavascript",permalink:"/docs/javascript/ecma"},next:{title:"[JS] \u6570\u636e\u7c7b\u578b",permalink:"/docs/javascript/type"}},p=[{value:"<code>var\u5173\u952e\u5b57</code>",id:"var\u5173\u952e\u5b57",children:[{value:"var\u58f0\u660e\u4f5c\u7528\u57df",id:"var\u58f0\u660e\u4f5c\u7528\u57df",children:[],level:3},{value:"var\u58f0\u660e\u63d0\u5347",id:"var\u58f0\u660e\u63d0\u5347",children:[],level:3}],level:2},{value:"<code>let\u58f0\u660e</code>",id:"let\u58f0\u660e",children:[{value:"\u5757\u4f5c\u7528\u57df",id:"\u5757\u4f5c\u7528\u57df",children:[],level:3},{value:"\u6682\u65f6\u6027\u6b7b\u533a",id:"\u6682\u65f6\u6027\u6b7b\u533a",children:[],level:3},{value:"\u5168\u5c40\u58f0\u660e",id:"\u5168\u5c40\u58f0\u660e",children:[],level:3},{value:"for \u5faa\u73af\u4e2d\u7684 let \u58f0\u660e",id:"for-\u5faa\u73af\u4e2d\u7684-let-\u58f0\u660e",children:[],level:3}],level:2},{value:"<code>const \u58f0\u660e</code>",id:"const-\u58f0\u660e",children:[{value:"\u4e0d\u80fd\u7528 const \u6765\u58f0\u660e\u8fed\u4ee3\u53d8\u91cf",id:"\u4e0d\u80fd\u7528-const-\u6765\u58f0\u660e\u8fed\u4ee3\u53d8\u91cf",children:[],level:3}],level:2},{value:"<code>\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5</code>",id:"\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5",children:[{value:"\u6ce8\u610f\u58f0\u660e\u4e0e\u8d4b\u503c",id:"\u6ce8\u610f\u58f0\u660e\u4e0e\u8d4b\u503c",children:[],level:3},{value:"1. \u4e0d\u4f7f\u7528 var",id:"1-\u4e0d\u4f7f\u7528-var",children:[],level:3},{value:"2. const \u4f18\u5148\uff0clet \u6b21\u4e4b",id:"2-const-\u4f18\u5148let-\u6b21\u4e4b",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u7b2c\u4e8c\u7ae0 3-3 \u53d8\u91cf")),(0,l.kt)("p",null,"ECMAScript \u53d8\u91cf\u662f\u677e\u6563\u7c7b\u578b\u7684\uff0c\u610f\u601d\u662f\u53d8\u91cf\u53ef\u4ee5\u7528\u4e8e\u4fdd\u5b58\u4efb\u4f55\u7c7b\u578b\u7684\u6570\u636e\u3002\u6bcf\u4e2a\u53d8\u91cf\u53ea\u4e0d\u8fc7\u662f\u4e00\u4e2a\u7528\u4e8e\u4fdd\u5b58\u4efb\u610f\u503c\u7684\u547d\u540d\u5360\u4f4d\u7b26\u3002\u6709 3 \u4e2a\u5173\u952e\u5b57\u53ef\u4ee5\u58f0\u660e\u53d8\u91cf\uff1avar\u3001const \u548c let\u3002\u5176\u4e2d\uff0cvar \u5728ECMAScript \u7684\u6240\u6709\u7248\u672c\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u800c const \u548c let \u53ea\u80fd\u5728ECMAScript 6 \u53ca\u66f4\u665a\u7684\u7248\u672c\u4e2d\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"var\u5173\u952e\u5b57"},(0,l.kt)("inlineCode",{parentName:"h2"},"var\u5173\u952e\u5b57")),(0,l.kt)("h3",{id:"var\u58f0\u660e\u4f5c\u7528\u57df"},"var\u58f0\u660e\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"\u4f7f\u7528 var \u64cd\u4f5c\u7b26\u5b9a\u4e49\u7684\u53d8\u91cf\u4f1a\u6210\u4e3a\u5305\u542b\u5b83\u7684\u51fd\u6570\u7684\u5c40\u90e8\u53d8\u91cf\u3002\u6bd4\u5982\uff0c\u4f7f\u7528 var\n\u5728\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\uff0c\u5c31\u610f\u5473\u7740\u8be5\u53d8\u91cf\u5c06\u5728\u51fd\u6570\u9000\u51fa\u65f6\u88ab\u9500\u6bc1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u5c40\u90e8\u53d8\u91cf",title:"\u5c40\u90e8\u53d8\u91cf"},'function test() {\n var message = "hi"; // \u5c40\u90e8\u53d8\u91cf\n}\ntest();\nconsole.log(message); // \u51fa\u9519\uff01\n')),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0cmessage \u53d8\u91cf\u662f\u5728\u51fd\u6570\u5185\u90e8\u4f7f\u7528 var \u5b9a\u4e49\u7684\u3002\u51fd\u6570\u53eb test()\uff0c\u8c03\u7528\u5b83\u4f1a\u521b\u5efa\u8fd9\u4e2a\u53d8\u91cf\u5e76\u7ed9\u5b83\u8d4b\u503c\u3002\u8c03\u7528\u4e4b\u540e\u53d8\u91cf\u968f\u5373\u88ab\u9500\u6bc1\uff0c\u56e0\u6b64\u793a\u4f8b\u4e2d\u7684\u6700\u540e\u4e00\u884c\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002\u4e0d\u8fc7\uff0c\u5728\u51fd\u6570\u5185\u5b9a\u4e49\u53d8\u91cf\u65f6\u7701\u7565 var \u64cd\u4f5c\u7b26\uff0c\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"\u5168\u5c40\u53d8\u91cf"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u5168\u5c40\u53d8\u91cf",title:"\u5168\u5c40\u53d8\u91cf"},'function test() {\n message = "hi"; // \u5168\u5c40\u53d8\u91cf\n}\ntest();\nconsole.log(message); // "hi" \n')),(0,l.kt)("p",null,"\u53bb\u6389\u4e4b\u524d\u7684 var \u64cd\u4f5c\u7b26\u4e4b\u540e\uff0cmessage \u5c31\u53d8\u6210\u4e86\u5168\u5c40\u53d8\u91cf\u3002\u53ea\u8981\u8c03\u7528\u4e00\u6b21\u51fd\u6570 test()\uff0c\u5c31\u4f1a\u5b9a\u4e49\u8fd9\u4e2a\u53d8\u91cf\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u51fd\u6570\u5916\u90e8\u8bbf\u95ee\u5230\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6ce8\u610f \u867d\u7136\u53ef\u4ee5\u901a\u8fc7\u7701\u7565 var \u64cd\u4f5c\u7b26\u5b9a\u4e49\u5168\u5c40\u53d8\u91cf\uff0c\u4f46\u4e0d\u63a8\u8350\u8fd9\u4e48\u505a\u3002\u5728\u5c40\u90e8\u4f5c\u7528\u57df\u4e2d\u5b9a\n\u4e49\u7684\u5168\u5c40\u53d8\u91cf\u5f88\u96be\u7ef4\u62a4\uff0c\u4e5f\u4f1a\u9020\u6210\u56f0\u60d1\u3002\u8fd9\u662f\u56e0\u4e3a\u4e0d\u80fd\u4e00\u4e0b\u5b50\u65ad\u5b9a\u7701\u7565 var \u662f\u4e0d\u662f\u6709\u610f\u800c\n\u4e3a\u4e4b\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c\u50cf\u8fd9\u6837\u7ed9\u672a\u58f0\u660e\u7684\u53d8\u91cf\u8d4b\u503c\uff0c\u5219\u4f1a\u5bfc\u81f4\u629b\u51fa ReferenceError\u3002"))),(0,l.kt)("h3",{id:"var\u58f0\u660e\u63d0\u5347"},"var\u58f0\u660e\u63d0\u5347"),(0,l.kt)("p",null,"\u4f7f\u7528 var \u65f6\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4e0d\u4f1a\u62a5\u9519\u3002\u8fd9\u662f\u56e0\u4e3a\u4f7f\u7528\u8fd9\u4e2a\u5173\u952e\u5b57\u58f0\u660e\u7684\u53d8\u91cf\u4f1a\u81ea\u52a8\u63d0\u5347\u5230\u51fd\u6570\u4f5c\u7528\u57df\u9876\u90e8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n console.log(age);\n var age = 26;\n}\nfoo(); // undefined\n")),(0,l.kt)("p",null,"\u4e4b\u6240\u4ee5\u4e0d\u4f1a\u62a5\u9519\uff0c\u662f\u56e0\u4e3a ECMAScript \u8fd0\u884c\u65f6\u628a\u5b83\u770b\u6210\u7b49\u4ef7\u4e8e\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n var age;\n console.log(age);\n age = 26;\n}\nfoo(); // undefined \n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"let\u58f0\u660e"},(0,l.kt)("inlineCode",{parentName:"h2"},"let\u58f0\u660e")),(0,l.kt)("h3",{id:"\u5757\u4f5c\u7528\u57df"},"\u5757\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"let \u8ddf var \u7684\u4f5c\u7528\u5dee\u4e0d\u591a\uff0c\u4f46\u6709\u7740\u975e\u5e38\u91cd\u8981\u7684\u533a\u522b\u3002\u6700\u660e\u663e\u7684\u533a\u522b\u662f\uff0clet \u58f0\u660e\u7684\u8303\u56f4\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\u5757\u4f5c\u7528\u57df"),"\uff0c\u800c var \u58f0\u660e\u7684\u8303\u56f4\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\u51fd\u6570\u4f5c\u7528\u57df"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u5757\u4f5c\u7528\u57df\u6f14\u793a",title:"\u5757\u4f5c\u7528\u57df\u6f14\u793a"},"if (true) {\n var name = 'Matt';\n console.log(name); // Matt\n}\nconsole.log(name); // Matt \n\n// ----------------------------------------\n\nif (true) {\n let age = 26;\n console.log(age); // 26\n}\nconsole.log(age); // ReferenceError: age \u6ca1\u6709\u5b9a\u4e49\n")),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0cage \u53d8\u91cf\u4e4b\u6240\u4ee5\u4e0d\u80fd\u5728 if \u5757\u5916\u90e8\u88ab\u5f15\u7528\uff0c\u662f\u56e0\u4e3a\u5b83\u7684\u4f5c\u7528\u57df\u4ec5\u9650\u4e8e\u8be5\u5757\u5185\u90e8\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"\u5757\u4f5c\u7528\u57df\u662f\u51fd\u6570\u4f5c\u7528\u57df\u7684\u5b50\u96c6"),"\uff0c\u56e0\u6b64\u9002\u7528\u4e8e var \u7684\u4f5c\u7528\u57df\u9650\u5236\u540c\u6837\u4e5f\u9002\u7528\u4e8e let\u3002\nlet \u4e5f\u4e0d\u5141\u8bb8\u540c\u4e00\u4e2a\u5757\u4f5c\u7528\u57df\u4e2d\u51fa\u73b0\u5197\u4f59\u58f0\u660e\u3002\u8fd9\u6837\u4f1a\u5bfc\u81f4\u62a5\u9519\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=let\u91cd\u590d\u58f0\u660e\u62a5\u9519",title:"let\u91cd\u590d\u58f0\u660e\u62a5\u9519"},"var name;\nvar name;\nlet age;\nlet age; // SyntaxError\uff1b\u6807\u8bc6\u7b26 age \u5df2\u7ecf\u58f0\u660e\u8fc7\u4e86\n")),(0,l.kt)("p",null,"\u5f53\u7136\uff0cJavaScript \u5f15\u64ce\u4f1a\u8bb0\u5f55\u7528\u4e8e\u53d8\u91cf\u58f0\u660e\u7684\u6807\u8bc6\u7b26\u53ca\u5176\u6240\u5728\u7684\u5757\u4f5c\u7528\u57df\uff0c\u56e0\u6b64\u5d4c\u5957\u4f7f\u7528\u76f8\u540c\u7684\u6807\u8bc6\u7b26\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c\u8fd9\u662f\u56e0\u4e3a\u540c\u4e00\u4e2a\u5757\u4e2d\u6ca1\u6709\u91cd\u590d\u58f0\u660e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var name = 'Nicholas';\nconsole.log(name); // 'Nicholas'\nif (true) {\n var name = 'Matt';\n console.log(name); // 'Matt'\n}\nlet age = 30;\nconsole.log(age); // 30\nif (true) {\n let age = 26;\n console.log(age); // 26\n} \n")),(0,l.kt)("p",null,"\u5bf9\u58f0\u660e\u5197\u4f59\u62a5\u9519\u4e0d\u4f1a\u56e0\u6df7\u7528 let \u548c var \u800c\u53d7\u5f71\u54cd\u3002\u8fd9\u4e24\u4e2a\u5173\u952e\u5b57\u58f0\u660e\u7684\u5e76\u4e0d\u662f\u4e0d\u540c\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u5b83\u4eec\u53ea\u662f\u6307\u51fa\u53d8\u91cf\u5728\u76f8\u5173\u4f5c\u7528\u57df\u5982\u4f55\u5b58\u5728\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var name;\nlet name; // SyntaxError\nlet age;\nvar age; // SyntaxError\n")),(0,l.kt)("h3",{id:"\u6682\u65f6\u6027\u6b7b\u533a"},"\u6682\u65f6\u6027\u6b7b\u533a"),(0,l.kt)("p",null,"let \u4e0e var \u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u7684\u533a\u522b\uff0c\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"let \u58f0\u660e\u7684\u53d8\u91cf\u4e0d\u4f1a\u5728\u4f5c\u7528\u57df\u4e2d\u88ab\u63d0\u5347"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=\u6682\u65f6\u6027\u6b7b\u533a",title:"\u6682\u65f6\u6027\u6b7b\u533a"},"// name \u4f1a\u88ab\u63d0\u5347\nconsole.log(name); // undefined\nvar name = 'Matt';\n// age \u4e0d\u4f1a\u88ab\u63d0\u5347\nconsole.log(age); // ReferenceError\uff1aage \u6ca1\u6709\u5b9a\u4e49\nlet age = 26; \n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"temporal dead zone")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u89e3\u6790\u4ee3\u7801\u65f6\uff0cJavaScript \u5f15\u64ce\u4e5f\u4f1a\u6ce8\u610f\u51fa\u73b0\u5728\u5757\u540e\u9762\u7684 let \u58f0\u660e\uff0c\u53ea\u4e0d\u8fc7\u5728\u6b64\u4e4b\u524d\u4e0d\u80fd\u4ee5\u4efb\u4f55\u65b9\u5f0f\u6765\u5f15\u7528\u672a\u58f0\u660e\u7684\u53d8\u91cf\u3002\u5728 let \u58f0\u660e\u4e4b\u524d\u7684\u6267\u884c\u77ac\u95f4\u88ab\u79f0\u4e3a\u201c\u6682\u65f6\u6027\u6b7b\u533a\u201d\uff08temporal dead zone\uff09\uff0c\u5728\u6b64\u9636\u6bb5\u5f15\u7528\u4efb\u4f55\u540e\u9762\u624d\u58f0\u660e\u7684\u53d8\u91cf\u90fd\u4f1a\u629b\u51fa ReferenceError\u3002"))),(0,l.kt)("h3",{id:"\u5168\u5c40\u58f0\u660e"},"\u5168\u5c40\u58f0\u660e"),(0,l.kt)("p",null,"\u4e0e var \u5173\u952e\u5b57\u4e0d\u540c\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"let \u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\u4e0d\u4f1a\u6210\u4e3a window \u5bf9\u8c61\u7684\u5c5e\u6027"),"\uff08var \u58f0\u660e\u7684\u53d8\u91cf\u5219\u4f1a\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var name = 'Matt';\nconsole.log(window.name); // 'Matt'\nlet age = 26;\nconsole.log(window.age); // undefined\n")),(0,l.kt)("p",null,"\u4e0d\u8fc7\uff0clet \u58f0\u660e\u4ecd\u7136\u662f\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u53d1\u751f\u7684\uff0c\u76f8\u5e94\u53d8\u91cf\u4f1a\u5728\u9875\u9762\u7684\u751f\u547d\u5468\u671f\u5185\u5b58\u7eed\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u907f\u514d SyntaxError\uff0c\u5fc5\u987b\u786e\u4fdd\u9875\u9762\u4e0d\u4f1a\u91cd\u590d\u58f0\u660e\u540c\u4e00\u4e2a\u53d8\u91cf\u3002"),(0,l.kt)("h3",{id:"for-\u5faa\u73af\u4e2d\u7684-let-\u58f0\u660e"},"for \u5faa\u73af\u4e2d\u7684 let \u58f0\u660e"),(0,l.kt)("p",null,"\u5728 let \u51fa\u73b0\u4e4b\u524d\uff0cfor \u5faa\u73af\u5b9a\u4e49\u7684\u8fed\u4ee3\u53d8\u91cf\u4f1a\u6e17\u900f\u5230\u5faa\u73af\u4f53\u5916\u90e8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (var i = 0; i < 5; ++i) {\n // \u5faa\u73af\u903b\u8f91\n}\nconsole.log(i); // 5 \n")),(0,l.kt)("p",null,"\u6539\u6210\u4f7f\u7528 let \u4e4b\u540e\uff0c\u8fd9\u4e2a\u95ee\u9898\u5c31\u6d88\u5931\u4e86\uff0c\u56e0\u4e3a\u8fed\u4ee3\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u4ec5\u9650\u4e8e for \u5faa\u73af\u5757\u5185\u90e8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 5; ++i) {\n // \u5faa\u73af\u903b\u8f91\n}\nconsole.log(i); // ReferenceError: i \u6ca1\u6709\u5b9a\u4e49\n")),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 var \u7684\u65f6\u5019\uff0c\u6700\u5e38\u89c1\u7684\u95ee\u9898\u5c31\u662f\u5bf9\u8fed\u4ee3\u53d8\u91cf\u7684\u5947\u7279\u58f0\u660e\u548c\u4fee\u6539\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (var i = 0; i < 5; ++i) {\n setTimeout(() => console.log(i), 0)\n}\n// \u4f60\u53ef\u80fd\u4ee5\u4e3a\u4f1a\u8f93\u51fa 0\u30011\u30012\u30013\u30014\n// \u5b9e\u9645\u4e0a\u4f1a\u8f93\u51fa 5\u30015\u30015\u30015\u30015\n")),(0,l.kt)("p",null,"\u4e4b\u6240\u4ee5\u4f1a\u8fd9\u6837\uff0c\u662f\u56e0\u4e3a\u5728\u9000\u51fa\u5faa\u73af\u65f6\uff0c\u8fed\u4ee3\u53d8\u91cf\u4fdd\u5b58\u7684\u662f\u5bfc\u81f4\u5faa\u73af\u9000\u51fa\u7684\u503c\uff1a5\u3002\u5728\u4e4b\u540e\u6267\u884c\u8d85\u65f6\u903b\u8f91\u65f6\uff0c\u6240\u6709\u7684 i \u90fd\u662f\u540c\u4e00\u4e2a\u53d8\u91cf\uff0c\u56e0\u800c\u8f93\u51fa\u7684\u90fd\u662f\u540c\u4e00\u4e2a\u6700\u7ec8\u503c\u3002\n\u800c\u5728\u4f7f\u7528 let \u58f0\u660e\u8fed\u4ee3\u53d8\u91cf\u65f6\uff0cJavaScript \u5f15\u64ce\u5728\u540e\u53f0\u4f1a\u4e3a\u6bcf\u4e2a\u8fed\u4ee3\u5faa\u73af\u58f0\u660e\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u53d8\u91cf\u3002\n\u6bcf\u4e2a setTimeout \u5f15\u7528\u7684\u90fd\u662f\u4e0d\u540c\u7684\u53d8\u91cf\u5b9e\u4f8b\uff0c\u6240\u4ee5 console.log \u8f93\u51fa\u7684\u662f\u6211\u4eec\u671f\u671b\u7684\u503c\uff0c\u4e5f\u5c31\u662f\u5faa\u73af\u6267\u884c\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u8fed\u4ee3\u53d8\u91cf\u7684\u503c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (let i = 0; i < 5; ++i) {\n setTimeout(() => console.log(i), 0)\n}\n// \u4f1a\u8f93\u51fa 0\u30011\u30012\u30013\u30014\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u79cd\u6bcf\u6b21\u8fed\u4ee3\u58f0\u660e\u4e00\u4e2a\u72ec\u7acb\u53d8\u91cf\u5b9e\u4f8b\u7684\u884c\u4e3a\u9002\u7528\u4e8e\u6240\u6709\u98ce\u683c\u7684 for \u5faa\u73af\uff0c\u5305\u62ec for-in \u548c for-of\u5faa\u73af\u3002"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"const-\u58f0\u660e"},(0,l.kt)("inlineCode",{parentName:"h2"},"const \u58f0\u660e")),(0,l.kt)("p",null,"const \u7684\u884c\u4e3a\u4e0e let \u57fa\u672c\u76f8\u540c\uff0c\u552f\u4e00\u4e00\u4e2a\u91cd\u8981\u7684\u533a\u522b\u662f\u7528\u5b83\u58f0\u660e\u53d8\u91cf\u65f6\u5fc5\u987b\u540c\u65f6\u521d\u59cb\u5316\u53d8\u91cf\uff0c\u4e14\u5c1d\u8bd5\u4fee\u6539 const \u58f0\u660e\u7684\u53d8\u91cf\u4f1a\u5bfc\u81f4\u8fd0\u884c\u65f6\u9519\u8bef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=const",title:"const"},"const age = 26;\nage = 36; // TypeError: \u7ed9\u5e38\u91cf\u8d4b\u503c\n\n// const \u4e5f\u4e0d\u5141\u8bb8\u91cd\u590d\u58f0\u660e\nconst name = 'Matt';\nconst name = 'Nicholas'; // SyntaxError\n// const \u58f0\u660e\u7684\u4f5c\u7528\u57df\u4e5f\u662f\u5757\nconst name = 'Matt';\nif (true) {\n const name = 'Nicholas';\n}\nconsole.log(name); // Matt \n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"const \u58f0\u660e\u7684\u9650\u5236\u53ea\u9002\u7528\u4e8e\u5b83\u6307\u5411\u7684\u53d8\u91cf\u7684\u5f15\u7528\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5982\u679c const \u53d8\u91cf\u5f15\u7528\u7684\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u4fee\u6539\u8fd9\u4e2a\u5bf9\u8c61\u5185\u90e8\u7684\u5c5e\u6027\u5e76\u4e0d\u8fdd\u53cd const \u7684\u9650\u5236\u3002"),(0,l.kt)("p",{parentName:"div"},"const person = {};",(0,l.kt)("br",{parentName:"p"}),"\n","person.name = 'Matt'; // ok"))),(0,l.kt)("h3",{id:"\u4e0d\u80fd\u7528-const-\u6765\u58f0\u660e\u8fed\u4ee3\u53d8\u91cf"},"\u4e0d\u80fd\u7528 const \u6765\u58f0\u660e\u8fed\u4ee3\u53d8\u91cf"),(0,l.kt)("p",null,"JavaScript \u5f15\u64ce\u4f1a\u4e3a for \u5faa\u73af\u4e2d\u7684 let \u58f0\u660e\u5206\u522b\u521b\u5efa\u72ec\u7acb\u7684\u53d8\u91cf\u5b9e\u4f8b\uff0c\u867d\u7136 const \u53d8\u91cf\u8ddf let \u53d8\u91cf\u5f88\u76f8\u4f3c\uff0c\u4f46\u662f\u4e0d\u80fd\u7528 const \u6765\u58f0\u660e\u8fed\u4ee3\u53d8\u91cf\uff08\u56e0\u4e3a\u8fed\u4ee3\u53d8\u91cf\u4f1a\u81ea\u589e\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"for (const i = 0; i < 10; ++i) {} // TypeError\uff1a\u7ed9\u5e38\u91cf\u8d4b\u503c\n")),(0,l.kt)("p",null,"\u4e0d\u8fc7\uff0c\u5982\u679c\u4f60\u53ea\u60f3\u7528 const \u58f0\u660e\u4e00\u4e2a\u4e0d\u4f1a\u88ab\u4fee\u6539\u7684 for \u5faa\u73af\u53d8\u91cf\uff0c\u90a3\u4e5f\u662f\u53ef\u4ee5\u7684\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6bcf\u6b21\u8fed\u4ee3\u53ea\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u53d8\u91cf\u3002\u8fd9\u5bf9 for-of \u548c for-in \u5faa\u73af\u7279\u522b\u6709\u610f\u4e49\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let i = 0;\nfor (const j = 7; i < 5; ++i) {\n console.log(j);\n}\n// 7, 7, 7, 7, 7\nfor (const key in {a: 1, b: 2}) {\n console.log(key);\n}\n// a, b\nfor (const value of [1,2,3,4,5]) {\n console.log(value);\n}\n// 1, 2, 3, 4, 5 \n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5"},(0,l.kt)("inlineCode",{parentName:"h2"},"\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5")),(0,l.kt)("p",null,"ECMAScript 6 \u589e\u52a0 let \u548c const \u4ece\u5ba2\u89c2\u4e0a\u4e3a\u8fd9\u95e8\u8bed\u8a00\u66f4\u7cbe\u786e\u5730\u58f0\u660e\u4f5c\u7528\u57df\u548c\u8bed\u4e49\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u652f\u6301\u3002\u884c\u4e3a\u602a\u5f02\u7684 var \u6240\u9020\u6210\u7684\u5404\u79cd\u95ee\u9898\uff0c\u5df2\u7ecf\u8ba9 JavaScript \u793e\u533a\u4e3a\u4e4b\u82e6\u607c\u4e86\u5f88\u591a\u5e74\u3002\u968f\u7740\u8fd9\u4e24\u4e2a\u65b0\u5173\u952e\u5b57\u7684\u51fa\u73b0\uff0c\u65b0\u7684\u6709\u52a9\u4e8e\u63d0\u5347\u4ee3\u7801\u8d28\u91cf\u7684\u6700\u4f73\u5b9e\u8df5\u4e5f\u9010\u6e10\u663e\u73b0\u3002"),(0,l.kt)("h3",{id:"\u6ce8\u610f\u58f0\u660e\u4e0e\u8d4b\u503c"},"\u6ce8\u610f\u58f0\u660e\u4e0e\u8d4b\u503c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u60c5\u51b5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7ed3 \u679c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"let age; console.log(age);"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ea\u58f0\u660e \u4e0d\u8d4b\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"console.log(age);"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u58f0\u660e \u4e0d\u8d4b\u503c \u76f4\u63a5\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u62a5\u9519")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"age = 18; console.log(age)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u58f0\u660e \u53ea\u8d4b\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"10 (\u4e0d\u63d0\u5021)")))),(0,l.kt)("h3",{id:"1-\u4e0d\u4f7f\u7528-var"},"1. \u4e0d\u4f7f\u7528 var"),(0,l.kt)("p",null,"\u6709\u4e86 let \u548c const\uff0c\u5927\u591a\u6570\u5f00\u53d1\u8005\u4f1a\u53d1\u73b0\u81ea\u5df1\u4e0d\u518d\u9700\u8981 var \u4e86\u3002\u9650\u5236\u81ea\u5df1\u53ea\u4f7f\u7528 let \u548c const\u6709\u52a9\u4e8e\u63d0\u5347\u4ee3\u7801\u8d28\u91cf\uff0c\u56e0\u4e3a\u53d8\u91cf\u6709\u4e86\u660e\u786e\u7684\u4f5c\u7528\u57df\u3001\u58f0\u660e\u4f4d\u7f6e\uff0c\u4ee5\u53ca\u4e0d\u53d8\u7684\u503c\u3002"),(0,l.kt)("h3",{id:"2-const-\u4f18\u5148let-\u6b21\u4e4b"},"2. const \u4f18\u5148\uff0clet \u6b21\u4e4b"),(0,l.kt)("p",null,"\u4f7f\u7528 const \u58f0\u660e\u53ef\u4ee5\u8ba9\u6d4f\u89c8\u5668\u8fd0\u884c\u65f6\u5f3a\u5236\u4fdd\u6301\u53d8\u91cf\u4e0d\u53d8\uff0c\u4e5f\u53ef\u4ee5\u8ba9\u9759\u6001\u4ee3\u7801\u5206\u6790\u5de5\u5177\u63d0\u524d\u53d1\u73b0\u4e0d\u5408\u6cd5\u7684\u8d4b\u503c\u64cd\u4f5c\u3002\u56e0\u6b64\uff0c\u5f88\u591a\u5f00\u53d1\u8005\u8ba4\u4e3a\u5e94\u8be5\u4f18\u5148\u4f7f\u7528 const \u6765\u58f0\u660e\u53d8\u91cf\uff0c\u53ea\u5728\u63d0\u524d\u77e5\u9053\u672a\u6765\u4f1a\u6709\u4fee\u6539\u65f6\uff0c\u518d\u4f7f\u7528 let\u3002\u8fd9\u6837\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u66f4\u6709\u4fe1\u5fc3\u5730\u63a8\u65ad\u67d0\u4e9b\u53d8\u91cf\u7684\u503c\u6c38\u8fdc\u4e0d\u4f1a\u53d8\uff0c\u540c\u65f6\u4e5f\u80fd\u8fc5\u901f\u53d1\u73b0\u56e0\u610f\u5916\u8d4b\u503c\u5bfc\u81f4\u7684\u975e\u9884\u671f\u884c\u4e3a\u3002"))}d.isMDXComponent=!0}}]);