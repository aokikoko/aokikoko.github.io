"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[696],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36434:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),l=(r(67294),r(3905));const a={title:"[JS] \u4e25\u683c\u6a21\u5f0f",sidebar_position:69},i=void 0,o={unversionedId:"javascript/Strictmode",id:"javascript/Strictmode",title:"[JS] \u4e25\u683c\u6a21\u5f0f",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u9644\u5f55",source:"@site/docs/javascript/Strictmode.md",sourceDirName:"javascript",slug:"/javascript/Strictmode",permalink:"/docs/javascript/Strictmode",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/Strictmode.md",tags:[],version:"current",sidebarPosition:69,frontMatter:{title:"[JS] \u4e25\u683c\u6a21\u5f0f",sidebar_position:69},sidebar:"tutorialSidebar",previous:{title:"[JS] \u6700\u4f73\u5b9e\u8df5\u4e4b\u90e8\u7f72",permalink:"/docs/javascript/bestparctice3"},next:{title:"[JS] \u51fd \u6570",permalink:"/docs/javascript/function"}},c=[{value:"\u6a21\u5f0f\u5f00\u542f",id:"\u6a21\u5f0f\u5f00\u542f",children:[],level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",children:[],level:2},{value:"\u5bf9\u8c61",id:"\u5bf9\u8c61",children:[],level:2},{value:"this \u5f3a\u5236\u8f6c\u578b",id:"this-\u5f3a\u5236\u8f6c\u578b",children:[],level:2},{value:"\u7c7b\u4e0e\u6a21\u5757",id:"\u7c7b\u4e0e\u6a21\u5757",children:[],level:2}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u9644\u5f55")),(0,l.kt)("h1",{id:"\u4e25\u683c\u6a21\u5f0f"},"\u4e25\u683c\u6a21\u5f0f"),(0,l.kt)("p",null,"ECMAScript 5 \u9996\u6b21\u5f15\u5165\u4e25\u683c\u6a21\u5f0f\u7684\u6982\u5ff5. \u4e25\u683c\u6a21\u5f0f\u7528\u4e8e\u9009\u62e9\u4ee5\u66f4\u4e25\u683c\u7684\u6761\u4ef6\u68c0\u67e5 JavaScript \u4ee3\u7801\u9519\u8bef\uff0c\u53ef\u4ee5\u5e94\u7528\u5230\u5168\u5c40\uff0c\u4e5f\u53ef\u4ee5\u5e94\u7528\u5230\u51fd\u6570\u5185\u90e8\u3002\u4e25\u683c\u6a21\u5f0f\u7684\u597d\u5904\u662f\u53ef\u4ee5\u63d0\u65e9\u53d1\u73b0\u9519\u8bef\uff0c\u56e0\u6b64\u53ef\u4ee5\u6355\u83b7\u67d0\u4e9b ECMAScript \u95ee\u9898\u5bfc\u81f4\u7684\u7f16\u7a0b\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u7406\u89e3\u4e25\u683c\u6a21\u5f0f\u7684\u89c4\u5219\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u672a\u6765\u7684 ECMAScript \u4f1a\u9010\u6b65\u5f3a\u5236\u5168\u5c40\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\u3002\u4e25\u683c\u6a21\u5f0f\u5df2\u5f97\u5230\u6240\u6709\u4e3b\u6d41\u6d4f\u89c8\u5668\u652f\u6301\u3002"),(0,l.kt)("h2",{id:"\u6a21\u5f0f\u5f00\u542f"},"\u6a21\u5f0f\u5f00\u542f"),(0,l.kt)("p",null,"\u8981\u9009\u62e9\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\uff0c\u9700\u8981\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\u7f16\u8bd1\u6307\u793a\uff08pragma\uff09\uff0c\u5373\u4e00\u4e2a\u4e0d\u8d4b\u503c\u7ed9\u4efb\u4f55\u53d8\u91cf\u7684\u5b57\u7b26\u4e32\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'"use strict"; \n')),(0,l.kt)("p",null,"\u8fd9\u6837\u4e00\u4e2a\u5373\u4f7f\u5728 ECMAScript 3 \u4e2d\u4e5f\u6709\u6548\u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u517c\u5bb9\u4e0d\u652f\u6301\u4e25\u683c\u6a21\u5f0f\u7684 JavaScript \u5f15\u64ce\u3002\u652f\u6301\u4e25\u683c\u6a21\u5f0f\u7684\u5f15\u64ce\u4f1a\u542f\u7528\u4e25\u683c\u6a21\u5f0f\uff0c\u800c\u4e0d\u652f\u6301\u7684\u5f15\u64ce\u5219\u4f1a\u5c06\u8fd9\u4e2a\u7f16\u8bd1\u6307\u793a\u5f53\u6210\u4e00\u4e2a\u672a\u8d4b\u503c\u7684\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u628a\u8fd9\u4e2a\u7f16\u8bd1\u6307\u793a\u5e94\u7528\u5230\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u5373\u51fd\u6570\u5916\u90e8\uff0c\u5219\u6574\u4e2a\u811a\u672c\u90fd\u4f1a\u6309\u7167\u4e25\u683c\u6a21\u5f0f\u6765\u89e3\u6790\u3002\u8fd9\u610f\u5473\u7740\u5728\u6700\u7ec8\u4f1a\u4e0e\u5176\u4ed6\u811a\u672c\u62fc\u63a5\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7684\u811a\u672c\u4e2d\u6dfb\u52a0\u4e86\u7f16\u8bd1\u6307\u793a\uff0c\u4f1a\u5c06\u8be5\u6587\u4ef6\u4e2d\u7684\u6240\u6709 JavaScript \u7f6e\u4e8e\u4e25\u683c\u6a21\u5f0f\u4e4b\u4e0b\u3002"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u50cf\u4e0b\u9762\u8fd9\u6837\u53ea\u5728\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\u5f00\u542f\u4e25\u683c\u6a21\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function doSomething() {\n "use strict";\n // \u5176\u4ed6\u4ee3\u7801\n} \n')),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u80fd\u63a7\u5236\u9875\u9762\u4e2d\u7684\u6240\u6709\u811a\u672c\uff0c\u90a3\u4e48\u5efa\u8bae\u53ea\u5728\u7ecf\u8fc7\u6d4b\u8bd5\u7684\u7279\u5b9a\u51fd\u6570\u4e2d\u542f\u7528\u4e25\u683c\u6a21\u5f0f\u3002"),(0,l.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("p",null,"\u4e25\u683c\u6a21\u5f0f\u4e0b\u5982\u4f55\u521b\u5efa\u53d8\u91cf\u53ca\u4f55\u65f6\u4f1a\u521b\u5efa\u53d8\u91cf\u90fd\u4f1a\u53d1\u751f\u53d8\u5316\u3002\u7b2c\u4e00\u4e2a\u53d8\u5316\u662f\u4e0d\u5141\u8bb8\u610f\u5916\u521b\u5efa\u5168\u5c40\u53d8\u91cf\u3002\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u4ee5\u4e0b\u4ee3\u7801\u53ef\u4ee5\u521b\u5efa\u5168\u5c40\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u53d8\u91cf\u672a\u58f0\u660e\n// \u975e\u4e25\u683c\u6a21\u5f0f\uff1a\u521b\u5efa\u5168\u5c40\u53d8\u91cf\n// \u4e25\u683c\u6a21\u5f0f\uff1a\u629b\u51fa ReferenceError\nmessage = "Hello world!"; \n')),(0,l.kt)("p",null,"\u867d\u7136\u8fd9\u91cc\u7684 message \u6ca1\u6709\u524d\u7f6e let \u5173\u952e\u5b57\uff0c\u4e5f\u6ca1\u6709\u660e\u786e\u5b9a\u4e49\u4e3a\u5168\u5c40\u5bf9\u8c61\u7684\u5c5e\u6027 \uff0c\u4f46\u4ecd\u7136\u4f1a\u81ea\u52a8\u521b\u5efa\u4e3a\u5168\u5c40\u53d8\u91cf\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u7ed9\u672a\u58f0\u660e\u7684\u53d8\u91cf\u8d4b\u503c\u4f1a\u5728\u6267\u884c\u4ee3\u7801\u65f6\u629b\u51fa ReferenceError\u3002"),(0,l.kt)("p",null,"\u76f8\u5173\u7684\u53e6\u4e00\u4e2a\u53d8\u5316\u662f\u65e0\u6cd5\u5728\u53d8\u91cf\u4e0a\u8c03\u7528 delete\u3002\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u5141\u8bb8\u8fd9\u6837\uff0c\u4f46\u53ef\u80fd\u4f1a\u9759\u9ed8\u5931\u8d25\uff08\u8fd4 false\uff09\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5c1d\u8bd5\u5220\u9664\u53d8\u91cf\u4f1a\u5bfc\u81f4\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u5220\u9664\u53d8\u91cf\n// \u975e\u4e25\u683c\u6a21\u5f0f\uff1a\u9759\u9ed8\u5931\u8d25\n// \u4e25\u683c\u6a21\u5f0f\uff1a\u629b\u51fa ReferenceError\nlet color = "red";\ndelete color;\n')),(0,l.kt)("p",null,"\u4e25\u683c\u6a21\u5f0f\u4e5f\u5bf9\u53d8\u91cf\u540d\u589e\u52a0\u4e86\u9650\u5236\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u4e0d\u5141\u8bb8\u53d8\u91cf\u540d\u4e3a implements\u3001interface\u3001let\u3001package\u3001private\u3001protected\u3001public\u3001static \u548c yield\u3002\u8fd9\u4e9b\u662f\u76ee\u524d\u7684\u4fdd\u7559\u5b57\uff0c\u53ef\u80fd\u5728\u5c06\u6765\u7684 ECMAScript \u7248\u672c\u4e2d\u7528\u5230\u3002\u5982\u679c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f7f\u7528\u8fd9\u4e9b\u540d\u79f0\u4f5c\u4e3a\u53d8\u91cf\u540d\uff0c\u5219\u4f1a\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef"),(0,l.kt)("h2",{id:"\u5bf9\u8c61"},"\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u64cd\u4f5c\u5bf9\u8c61\u6bd4\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u66f4\u5bb9\u6613\u629b\u51fa\u9519\u8bef\u3002\u4e25\u683c\u6a21\u5f0f\u503e\u5411\u4e8e\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u4f1a\u9759\u9ed8\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u629b\u51fa\u9519\u8bef\uff0c\u589e\u52a0\u4e86\u5f00\u53d1\u4e2d\u63d0\u524d\u53d1\u73b0\u9519\u8bef\u7684\u53ef\u80fd\u6027\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\u4e0b\u8bd5\u56fe\u64cd\u7eb5\u5bf9\u8c61\u5c5e\u6027\u4f1a\u5f15\u53d1\u9519\u8bef\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ed9\u53ea\u8bfb\u5c5e\u6027\u8d4b\u503c\u4f1a\u629b\u51fa TypeError\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u4e0d\u53ef\u914d\u7f6e\u5c5e\u6027\u4e0a\u4f7f\u7528 delete \u4f1a\u629b\u51fa TypeError\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7ed9\u4e0d\u5b58\u5728\u7684\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u4f1a\u629b\u51fa TypeError\u3002")),(0,l.kt)("h2",{id:"this-\u5f3a\u5236\u8f6c\u578b"},"this \u5f3a\u5236\u8f6c\u578b"),(0,l.kt)("p",null,"JavaScript \u4e2d\u6700\u5927\u7684\u4e00\u4e2a\u5b89\u5168\u95ee\u9898\uff0c\u4e5f\u662f\u6700\u4ee4\u4eba\u56f0\u60d1\u7684\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b this \u7684\u503c\u662f\u5982\u4f55\u786e\u5b9a\u7684\u3002\u4f7f\u7528\u51fd\u6570\u7684 apply()\u6216 call()\u65b9\u6cd5\u65f6\uff0c\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b null \u6216 undefined \u503c\u4f1a\u88ab\u5f3a\u5236\u8f6c\u578b\u4e3a\u5168\u5c40\u5bf9\u8c61\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5219\u59cb\u7ec8\u4ee5\u6307\u5b9a\u503c\u4f5c\u4e3a\u51fd\u6570 this \u7684\u503c\uff0c\u65e0\u8bba\u6307\u5b9a\u7684\u662f\u4ec0\u4e48\u503c\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u8bbf\u95ee\u5c5e\u6027\n// \u975e\u4e25\u683c\u6a21\u5f0f\uff1a\u8bbf\u95ee\u5168\u5c40\u5c5e\u6027\n// \u4e25\u683c\u6a21\u5f0f\uff1a\u629b\u51fa\u9519\u8bef\uff0c\u56e0\u4e3a this \u503c\u4e3a null\nlet color = "red";\nfunction displayColor() {\n alert(this.color);\n}\ndisplayColor.call(null);\n')),(0,l.kt)("p",null,'\u8fd9\u91cc\u5728\u8c03\u7528 displayColor.call()\u65f6\u4f20\u5165 null \u4f5c\u4e3a this \u7684\u503c\uff0c\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u8be5\u51fd\u6570\u7684 this\u503c\u662f\u5168\u5c40\u5bf9\u8c61\u3002\u7ed3\u679c\u4f1a\u663e\u793a"red"\u3002\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u8be5\u51fd\u6570\u7684 this \u503c\u662f null\uff0c\u56e0\u6b64\u5728\u8bbf\u95ee null \u7684\u5c5e\u6027\u65f6\u4f1a\u629b\u51fa\u9519\u8bef\u3002'),(0,l.kt)("p",null,"\u901a\u5e38\uff0c\u51fd\u6570\u4f1a\u5c06\u5176 this \u7684\u503c\u8f6c\u578b\u4e3a\u4e00\u79cd\u5bf9\u8c61\u7c7b\u578b\uff0c\u8fd9\u79cd\u884c\u4e3a\u7ecf\u5e38\u88ab\u79f0\u4e3a\u201c\u88c5\u7bb1\u201d\uff08boxing\uff09\u3002\u8fd9\u610f\u5473\u7740\u539f\u59cb\u503c\u4f1a\u8f6c\u578b\u4e3a\u5b83\u4eec\u7684\u5305\u88c5\u5bf9\u8c61\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {\n console.log(this);\n}\nfoo.call(); // Window {}\nfoo.call(2); // Number {2} \n\n")),(0,l.kt)("p",null,"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u6267\u884c\u4ee5\u4e0a\u4ee3\u7801\u65f6\uff0cthis \u7684\u503c\u4e0d\u4f1a\u518d\u201c\u88c5\u7bb1\u201d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function foo() {\n "use strict";\n console.log(this);\n}\n\nfoo.call(); // undefined\nfoo.call(2); // 2\n')),(0,l.kt)("h2",{id:"\u7c7b\u4e0e\u6a21\u5757"},"\u7c7b\u4e0e\u6a21\u5757"),(0,l.kt)("p",null,"\u7c7b\u548c\u6a21\u5757\u90fd\u662f ECMAScript 6 \u65b0\u589e\u7684\u4ee3\u7801\u5bb9\u5668\u7279\u6027\u3002\u5728\u4e4b\u524d\u7684 ECMAScript \u7248\u672c\u4e2d\u6ca1\u6709\u7c7b\u548c\u6a21\u5757\u8fd9\u4e24\u4e2a\u6982\u5ff5\uff0c\u56e0\u6b64\u4e0d\u7528\u8003\u8651\u4ece\u8bed\u6cd5\u4e0a\u517c\u5bb9\u4e4b\u524d\u7684 ECMAScript \u7248\u672c\u3002\u4e3a\u6b64\uff0cTC39 \u59d4\u5458\u4f1a\u51b3\u5b9a\u5728 ES6 \u7c7b\u548c\u6a21\u5757\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u4ee3\u7801\u9ed8\u8ba4\u90fd\u5904\u4e8e\u4e25\u683c\u6a21\u5f0f\u3002"))}s.isMDXComponent=!0}}]);