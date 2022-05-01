"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[790],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=l,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10192:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],o={title:"[JS] \u5ba2\u6237\u7aef\u68c0\u6d4b",sidebar_position:11},u=void 0,p={unversionedId:"javascript/client",id:"javascript/client",title:"[JS] \u5ba2\u6237\u7aef\u68c0\u6d4b",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u7b2c\u5341\u4e09\u7ae0",source:"@site/docs/javascript/client.md",sourceDirName:"javascript",slug:"/javascript/client",permalink:"/docs/javascript/client",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/client.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"[JS] \u5ba2\u6237\u7aef\u68c0\u6d4b",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"[JS] BOM",permalink:"/docs/javascript/BOM"},next:{title:"[JS] DOM",permalink:"/docs/javascript/DOM"}},c=[{value:"\u80fd\u529b\u68c0\u6d4b",id:"\u80fd\u529b\u68c0\u6d4b",children:[],level:2},{value:"\u7528\u6237\u4ee3\u7406\u68c0\u6d4b",id:"\u7528\u6237\u4ee3\u7406\u68c0\u6d4b",children:[{value:"\u7528\u6237\u4ee3\u7406\u7684\u5386\u53f2",id:"\u7528\u6237\u4ee3\u7406\u7684\u5386\u53f2",children:[],level:3},{value:"\u6d4f\u89c8\u5668\u5206\u6790",id:"\u6d4f\u89c8\u5668\u5206\u6790",children:[],level:3}],level:2},{value:"\u8f6f\u4ef6\u4e0e\u786c\u4ef6\u68c0\u6d4b",id:"\u8f6f\u4ef6\u4e0e\u786c\u4ef6\u68c0\u6d4b",children:[{value:"\u8bc6\u522b\u6d4f\u89c8\u5668\u4e0e\u64cd\u4f5c\u7cfb\u7edf",id:"\u8bc6\u522b\u6d4f\u89c8\u5668\u4e0e\u64cd\u4f5c\u7cfb\u7edf",children:[],level:3},{value:"\u6d4f\u89c8\u5668\u5143\u6570\u636e",id:"\u6d4f\u89c8\u5668\u5143\u6570\u636e",children:[],level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",children:[],level:3}],level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u7b2c\u5341\u4e09\u7ae0")),(0,a.kt)("h1",{id:"\u5ba2\u6237\u7aef\u68c0\u6d4b"},"\u5ba2\u6237\u7aef\u68c0\u6d4b"),(0,a.kt)("p",null,"\u867d\u7136\u6d4f\u89c8\u5668\u5382\u5546\u9f50\u5fc3\u534f\u529b\u60f3\u8981\u5b9e\u73b0\u4e00\u81f4\u7684\u63a5\u53e3\uff0c\u4f46\u4e8b\u5b9e\u4e0a\u4ecd\u7136\u662f\u6bcf\u5bb6\u6d4f\u89c8\u5668\u90fd\u6709\u81ea\u5df1\u7684\u957f\u5904\u4e0e\u4e0d\u8db3\u3002\u8de8\u5e73\u53f0\u7684\u6d4f\u89c8\u5668\u5c3d\u7ba1\u7248\u672c\u76f8\u540c\uff0c\u4f46\u603b\u4f1a\u5b58\u5728\u4e0d\u540c\u7684\u95ee\u9898\u3002\u8fd9\u4e9b\u5dee\u5f02\u8feb\u4f7f Web \u5f00\u53d1\u8005\u8981\u4e48\u9762\u5411\u6700\u5927\u516c\u7ea6\u6570\u800c\u8bbe\u8ba1\uff0c\u8981\u4e48\uff08\u66f4\u5e38\u89c1\u5730\uff09\u4f7f\u7528\u5404\u79cd\u65b9\u6cd5\u6765\u68c0\u6d4b\u5ba2\u6237\u7aef\uff0c\u4ee5\u514b\u670d\u6216\u907f\u514d\u8fd9\u4e9b\u7f3a\u9677\u3002"),(0,a.kt)("h2",{id:"\u80fd\u529b\u68c0\u6d4b"},"\u80fd\u529b\u68c0\u6d4b"),(0,a.kt)("p",null,"\u80fd\u529b\u68c0\u6d4b\uff08\u53c8\u79f0\u7279\u6027\u68c0\u6d4b\uff09\u5373\u5728 JavaScript \u8fd0\u884c\u65f6\u4e2d\u4f7f\u7528\u4e00\u5957\u7b80\u5355\u7684\u68c0\u6d4b\u903b\u8f91\uff0c\u6d4b\u8bd5\u6d4f\u89c8\u5668\u662f\u5426\u652f\u6301\u67d0\u79cd\u7279\u6027\u3002\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u8981\u6c42\u4e8b\u5148\u77e5\u9053\u7279\u5b9a\u6d4f\u89c8\u5668\u7684\u4fe1\u606f\uff0c\u53ea\u9700\u68c0\u6d4b\u81ea\u5df1\u5173\u5fc3\u7684\u80fd\u529b\u662f\u5426\u5b58\u5728\u5373\u53ef\u3002\u80fd\u529b\u68c0\u6d4b\u7684\u57fa\u672c\u6a21\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (object.propertyInQuestion) {\n // \u4f7f\u7528 object.propertyInQuestion\n}\n")),(0,a.kt)("p",null,"\u6bd4\u5982\uff0cIE5 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\u6ca1\u6709 document.getElementById()\u8fd9\u4e2a DOM \u65b9\u6cd5\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7document.all \u5c5e\u6027\u5b9e\u73b0\u540c\u6837\u7684\u529f\u80fd\u3002\u4e3a\u6b64\uff0c\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u80fd\u529b\u68c0\u6d4b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function getElement(id) {\n if (document.getElementById) {\n return document.getElementById(id);\n } else if (document.all) {\n return document.all[id];\n } else {\n throw new Error("No way to retrieve element!");\n }\n} \n')),(0,a.kt)("h2",{id:"\u7528\u6237\u4ee3\u7406\u68c0\u6d4b"},"\u7528\u6237\u4ee3\u7406\u68c0\u6d4b"),(0,a.kt)("p",null,"\u7528\u6237\u4ee3\u7406\u68c0\u6d4b\u901a\u8fc7\u6d4f\u89c8\u5668\u7684\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u786e\u5b9a\u4f7f\u7528\u7684\u662f\u4ec0\u4e48\u6d4f\u89c8\u5668\u3002\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u5305\u542b\u5728\u6bcf\u4e2aHTTP \u8bf7\u6c42\u7684\u5934\u90e8\uff0c\u5728 JavaScript \u4e2d\u53ef\u4ee5\u901a\u8fc7 navigator.userAgent \u8bbf\u95ee\u3002\u5728\u670d\u52a1\u5668\u7aef\uff0c\u5e38\u89c1\u7684\u505a\u6cd5\u662f\u6839\u636e\u63a5\u6536\u5230\u7684\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u786e\u5b9a\u6d4f\u89c8\u5668\u5e76\u6267\u884c\u76f8\u5e94\u64cd\u4f5c\u3002\u800c\u5728\u5ba2\u6237\u7aef\uff0c\u7528\u6237\u4ee3\u7406\u68c0\u6d4b\u88ab\u8ba4\u4e3a\u662f\u4e0d\u53ef\u9760\u7684\uff0c\u53ea\u5e94\u8be5\u5728\u6ca1\u6709\u5176\u4ed6\u9009\u9879\u65f6\u518d\u8003\u8651\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u6700\u53d7\u4e89\u8bae\u7684\u5730\u65b9\u5c31\u662f\u5728\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\u91cc\uff0c\u6d4f\u89c8\u5668\u90fd\u901a\u8fc7\u5728\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u5305\u542b\u9519\u8bef\u6216\u8bef\u5bfc\u6027\u4fe1\u606f\u6765\u6b3a\u9a97\u670d\u52a1\u5668\u3002\u8981\u7406\u89e3\u80cc\u540e\u7684\u539f\u56e0\uff0c\u5fc5\u987b\u56de\u987e\u4e00\u4e0b\u81ea Web \u51fa\u73b0\u4e4b\u540e\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u7684\u5386\u53f2\u3002"),(0,a.kt)("h3",{id:"\u7528\u6237\u4ee3\u7406\u7684\u5386\u53f2"},"\u7528\u6237\u4ee3\u7406\u7684\u5386\u53f2"),(0,a.kt)("p",null,"\u7565"),(0,a.kt)("h3",{id:"\u6d4f\u89c8\u5668\u5206\u6790"},"\u6d4f\u89c8\u5668\u5206\u6790"),(0,a.kt)("p",null,"\u60f3\u8981\u77e5\u9053\u81ea\u5df1\u4ee3\u7801\u8fd0\u884c\u5728\u4ec0\u4e48\u6d4f\u89c8\u5668\u4e0a\uff0c\u5927\u90e8\u5206\u5f00\u53d1\u8005\u4f1a\u5206\u6790 window.navigator.userAgent\u8fd4\u56de\u7684\u5b57\u7b26\u4e32\u503c\u3002\u6240\u6709\u6d4f\u89c8\u5668\u90fd\u4f1a\u63d0\u4f9b\u8fd9\u4e2a\u503c\uff0c\u5982\u679c\u76f8\u4fe1\u8fd9\u4e9b\u8fd4\u56de\u503c\u5e76\u57fa\u4e8e\u7ed9\u5b9a\u7684\u4e00\u7ec4\u6d4f\u89c8\u5668\u68c0\u6d4b\u8fd9\u4e2a\u5b57\u7b26\u4e32\uff0c\u6700\u7ec8\u4f1a\u5f97\u5230\u5173\u4e8e\u6d4f\u89c8\u5668\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u6bd4\u8f83\u7cbe\u786e\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u76f8\u6bd4\u4e8e\u80fd\u529b\u68c0\u6d4b\uff0c\u7528\u6237\u4ee3\u7406\u68c0\u6d4b\u8fd8\u662f\u6709\u4e00\u5b9a\u4f18\u52bf\u7684\u3002\u80fd\u529b\u68c0\u6d4b\u53ef\u4ee5\u4fdd\u8bc1\u811a\u672c\u4e0d\u5fc5\u7406\u4f1a\u6d4f\u89c8\u5668\u800c\u6b63\u5e38\u6267\u884c\u3002\u73b0\u4ee3\u6d4f\u89c8\u5668\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u7684\u8fc7\u53bb\u3001\u73b0\u5728\u548c\u672a\u6765\u683c\u5f0f\u90fd\u662f\u6709\u7ae0\u53ef\u5faa\u7684\uff0c\u6211\u4eec\u80fd\u591f\u5229\u7528\u5b83\u4eec\u51c6\u786e\u8bc6\u522b\u6d4f\u89c8\u5668\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. \u4f2a\u9020\u7528\u6237\u4ee3\u7406")),(0,a.kt)("p",null,"\u901a\u8fc7\u68c0\u6d4b\u7528\u6237\u4ee3\u7406\u6765\u8bc6\u522b\u6d4f\u89c8\u5668\u5e76\u4e0d\u662f\u5b8c\u7f8e\u7684\u65b9\u5f0f\uff0c\u6bd5\u7adf\u8fd9\u4e2a\u5b57\u7b26\u4e32\u662f\u53ef\u4ee5\u9020\u5047\u7684\u3002\u53ea\u4e0d\u8fc7\u5b9e\u73b0window.navigator \u5bf9\u8c61\u7684\u6d4f\u89c8\u5668\uff08\u5373\u6240\u6709\u73b0\u4ee3\u6d4f\u89c8\u5668\uff09\u90fd\u4f1a\u63d0\u4f9b userAgent \u8fd9\u4e2a\u53ea\u8bfb\u5c5e\u6027\u3002\u56e0\u6b64\u7b80\u5355\u5730\u7ed9\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u5176\u4ed6\u503c\u4e0d\u4f1a\u6709\u6548\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(window.navigator.userAgent);\n// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)\nChrome/65.0.3325.181 Safari/537.36\nwindow.navigator.userAgent = 'foobar';\nconsole.log(window.navigator.userAgent);\n// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)\nChrome/65.0.3325.181 Safari/537.36\n")),(0,a.kt)("p",null,"\u4e0d\u8fc7\uff0c\u901a\u8fc7\u7b80\u5355\u7684\u529e\u6cd5\u53ef\u4ee5\u7ed5\u8fc7\u8fd9\u4e2a\u9650\u5236\u3002\u6bd4\u5982\uff0c\u6709\u4e9b\u6d4f\u89c8\u5668\u63d0\u4f9b\u4f2a\u79c1\u6709\u7684",(0,a.kt)("strong",{parentName:"p"},"defineGetter"),"\u65b9\u6cd5\uff0c\u5229\u7528\u5b83\u53ef\u4ee5\u7be1\u6539\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(window.navigator.userAgent);\n// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)\nChrome/65.0.3325.181 Safari/537.36\nwindow.navigator.__defineGetter__('userAgent', () => 'foobar');\nconsole.log(window.navigator.userAgent);\n// foobar\n")),(0,a.kt)("p",null,"\u5bf9\u4ed8\u8fd9\u79cd\u9020\u5047\u662f\u4e00\u4ef6\u5403\u529b\u4e0d\u8ba8\u597d\u7684\u4e8b\u3002\u68c0\u6d4b\u7528\u6237\u4ee3\u7406\u662f\u5426\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u88ab\u7be1\u6539\u8fc7\u662f\u53ef\u80fd\u7684\uff0c\u4f46\u603b\u4f53\u6765\u770b\u8fd8\u662f\u4e00\u573a\u732b\u6349\u8001\u9f20\u7684\u6e38\u620f\u3002"),(0,a.kt)("p",null,"\u4e0e\u5176\u52b3\u5fc3\u8d39\u529b\u68c0\u6d4b\u9020\u5047\uff0c\u4e0d\u5982\u66f4\u597d\u5730\u4e13\u6ce8\u4e8e\u6d4f\u89c8\u5668\u8bc6\u522b\u3002\u5982\u679c\u76f8\u4fe1\u6d4f\u89c8\u5668\u8fd4\u56de\u7684\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\uff0c\u90a3\u5c31\u53ef\u4ee5\u7528\u5b83\u6765\u5224\u65ad\u6d4f\u89c8\u5668\u3002\u5982\u679c\u6000\u7591\u811a\u672c\u6216\u6d4f\u89c8\u5668\u53ef\u80fd\u7be1\u6539\u8fd9\u4e2a\u503c\uff0c\u90a3\u6700\u597d\u8fd8\u662f\u4f7f\u7528\u80fd\u529b\u68c0\u6d4b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. \u5206\u6790\u6d4f\u89c8\u5668")),(0,a.kt)("p",null,"\u901a\u8fc7\u89e3\u6790\u6d4f\u89c8\u5668\u8fd4\u56de\u7684\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u6781\u5176\u51c6\u786e\u5730\u63a8\u65ad\u51fa\u4e0b\u5217\u76f8\u5173\u7684\u73af\u5883\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u7248\u672c"),(0,a.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u6e32\u67d3\u5f15\u64ce"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u7c7b\u578b\uff08\u684c\u9762/\u79fb\u52a8\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u751f\u4ea7\u5546"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u578b\u53f7"),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf"),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c")),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u65b0\u6d4f\u89c8\u5668\u3001\u65b0\u64cd\u4f5c\u7cfb\u7edf\u548c\u65b0\u786c\u4ef6\u8bbe\u5907\u968f\u65f6\u53ef\u80fd\u51fa\u73b0\uff0c\u5176\u4e2d\u5f88\u591a\u53ef\u80fd\u6709\u7740\u7c7b\u4f3c\u4f46\u5e76\u4e0d\u76f8\u540c\u7684\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u3002\u56e0\u6b64\uff0c\u7528\u6237\u4ee3\u7406\u89e3\u6790\u7a0b\u5e8f\u9700\u8981\u4e0e\u65f6\u4ff1\u8fdb\uff0c\u9891\u7e41\u66f4\u65b0\uff0c\u4ee5\u514d\u843d\u4f0d\u3002\u8fd9\u91cc\u63a8\u8350\u4e00\u4e9b GitHub \u4e0a\u7ef4\u62a4\u6bd4\u8f83\u9891\u7e41\u7684\u7b2c\u4e09\u65b9\u7528\u6237\u4ee3\u7406\u89e3\u6790\u7a0b\u5e8f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bowser"),(0,a.kt)("li",{parentName:"ul"},"UAParser.js"),(0,a.kt)("li",{parentName:"ul"},"Platform.js"),(0,a.kt)("li",{parentName:"ul"},"CURRENT-DEVICE"),(0,a.kt)("li",{parentName:"ul"},"Google Closure"),(0,a.kt)("li",{parentName:"ul"},"Mootools")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u8f6f\u4ef6\u4e0e\u786c\u4ef6\u68c0\u6d4b"},"\u8f6f\u4ef6\u4e0e\u786c\u4ef6\u68c0\u6d4b"),(0,a.kt)("p",null,"\u73b0\u4ee3\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86\u4e00\u7ec4\u4e0e\u9875\u9762\u6267\u884c\u73af\u5883\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u6d4f\u89c8\u5668\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u786c\u4ef6\u548c\u5468\u8fb9\u8bbe\u5907\u4fe1\u606f\u3002\u8fd9\u4e9b\u5c5e\u6027\u53ef\u4ee5\u901a\u8fc7\u66b4\u9732\u5728 window.navigator \u4e0a\u7684\u4e00\u7ec4 API \u83b7\u5f97\u3002\u4e0d\u8fc7\uff0c\u8fd9\u4e9b API \u7684\u8de8\u6d4f\u89c8\u5668\u652f\u6301\u8fd8\u4e0d\u591f\u597d\uff0c\u8fdc\u672a\u8fbe\u5230\u6807\u51c6\u5316\u7684\u7a0b\u5ea6"),(0,a.kt)("h3",{id:"\u8bc6\u522b\u6d4f\u89c8\u5668\u4e0e\u64cd\u4f5c\u7cfb\u7edf"},"\u8bc6\u522b\u6d4f\u89c8\u5668\u4e0e\u64cd\u4f5c\u7cfb\u7edf"),(0,a.kt)("p",null,"\u7565"),(0,a.kt)("h3",{id:"\u6d4f\u89c8\u5668\u5143\u6570\u636e"},"\u6d4f\u89c8\u5668\u5143\u6570\u636e"),(0,a.kt)("p",null,"\u7565"),(0,a.kt)("h3",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,a.kt)("p",null,"\u7565"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u68c0\u6d4b\u662f JavaScript \u4e2d\u4e89\u8bae\u6700\u591a\u7684\u8bdd\u9898\u4e4b\u4e00\u3002\u56e0\u4e3a\u4e0d\u540c\u6d4f\u89c8\u5668\u4e4b\u95f4\u5b58\u5728\u5dee\u5f02\uff0c\u6240\u4ee5\u7ecf\u5e38\u9700\u8981\u6839\u636e\u6d4f\u89c8\u5668\u7684\u80fd\u529b\u6765\u7f16\u5199\u4e0d\u540c\u7684\u4ee3\u7801\u3002\u5ba2\u6237\u7aef\u68c0\u6d4b\u6709\u4e0d\u5c11\u65b9\u5f0f\uff0c\u4f46\u4e0b\u9762\u4e24\u79cd\u7528\u5f97\u6700\u591a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u80fd\u529b\u68c0\u6d4b")),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u4e4b\u524d\u5148\u6d4b\u8bd5\u6d4f\u89c8\u5668\u7684\u7279\u5b9a\u80fd\u529b\u3002\u4f8b\u5982\uff0c\u811a\u672c\u53ef\u4ee5\u5728\u8c03\u7528\u67d0\u4e2a\u51fd\u6570\u4e4b\u524d\u5148\u68c0\u67e5\u5b83\u662f\u5426\u5b58\u5728\u3002\u8fd9\u79cd\u5ba2\u6237\u7aef\u68c0\u6d4b\u65b9\u5f0f\u53ef\u4ee5\u8ba9\u5f00\u53d1\u8005\u4e0d\u5fc5\u8003\u8651\u7279\u5b9a\u7684\u6d4f\u89c8\u5668\u6216\u7248\u672c\uff0c\u800c\u53ea\u9700\u5173\u6ce8\u67d0\u4e9b\u80fd\u529b\u662f\u5426\u5b58\u5728\u3002\u80fd\u529b\u68c0\u6d4b\u4e0d\u80fd\u7cbe\u786e\u5730\u53cd\u6620\u7279\u5b9a\u7684\u6d4f\u89c8\u5668\u6216\u7248\u672c\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u4ee3\u7406\u68c0\u6d4b")),(0,a.kt)("p",null,"\u901a\u8fc7\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u786e\u5b9a\u6d4f\u89c8\u5668\u3002\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u5305\u542b\u5173\u4e8e\u6d4f\u89c8\u5668\u7684\u5f88\u591a\u4fe1\u606f\u901a\u5e38\u5305\u62ec\u6d4f\u89c8\u5668\u3001\u5e73\u53f0\u3001\u64cd\u4f5c\u7cfb\u7edf\u548c\u6d4f\u89c8\u5668\u7248\u672c\u3002\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u6709\u4e00\u4e2a\u76f8\u5f53\u957f\u7684\u53d1\u5c55\u53f2\uff0c\u5f88\u591a\u6d4f\u89c8\u5668\u90fd\u8bd5\u56fe\u6b3a\u9a97\u7f51\u7ad9\u76f8\u4fe1\u81ea\u5df1\u662f\u522b\u7684\u6d4f\u89c8\u5668\u3002\u7528\u6237\u4ee3\u7406\u68c0\u6d4b\u4e5f\u6bd4\u8f83\u9ebb\u70e6\uff0c\u7279\u522b\u662f\u6d89\u53ca Opera\u4f1a\u5728\u4ee3\u7406\u5b57\u7b26\u4e32\u4e2d\u9690\u85cf\u81ea\u5df1\u4fe1\u606f\u7684\u65f6\u5019\u3002\u5373\u4f7f\u5982\u6b64\uff0c\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u4e5f\u53ef\u4ee5\u7528\u6765\u786e\u5b9a\u6d4f\u89c8\u5668\u4f7f\u7528\u7684\u6e32\u67d3\u5f15\u64ce\u4ee5\u53ca\u5e73\u53f0\uff0c\u5305\u62ec\u79fb\u52a8\u8bbe\u5907\u548c\u6e38\u620f\u673a\u3002"),(0,a.kt)("p",null,"\u5728\u9009\u62e9\u5ba2\u6237\u7aef\u68c0\u6d4b\u65b9\u6cd5\u65f6\uff0c\u9996\u9009\u662f\u4f7f\u7528\u80fd\u529b\u68c0\u6d4b\u3002\u7279\u6b8a\u80fd\u529b\u68c0\u6d4b\u8981\u653e\u5728\u6b21\u8981\u4f4d\u7f6e\uff0c\u4f5c\u4e3a\u51b3\u5b9a\u4ee3\u7801\u903b\u8f91\u7684\u53c2\u8003\u3002\u7528\u6237\u4ee3\u7406\u68c0\u6d4b\u662f\u6700\u540e\u4e00\u4e2a\u9009\u62e9\uff0c\u56e0\u4e3a\u5b83\u8fc7\u4e8e\u4f9d\u8d56\u7528\u6237\u4ee3\u7406\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u8f6f\u4ef6\u548c\u786c\u4ef6\u76f8\u5173\u7684\u4fe1\u606f\u3002\u8fd9\u4e9b\u4fe1\u606f\u901a\u8fc7 screen \u548c navigator \u5bf9\u8c61\u66b4\u9732\u51fa\u6765\u3002\u5229\u7528\u8fd9\u4e9b API\uff0c\u53ef\u4ee5\u83b7\u53d6\u5173\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u3001\u6d4f\u89c8\u5668\u3001\u786c\u4ef6\u3001\u8bbe\u5907\u4f4d\u7f6e\u3001\u7535\u6c60\u72b6\u6001\u7b49\u65b9\u9762\u7684\u51c6\u786e\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);