"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[234],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7643:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={title:"[JS] \u5173\u4e8e\u4ec0\u4e48\u662fJavascript",sidebar_position:1},c=void 0,p={unversionedId:"javascript/ecma",id:"javascript/ecma",title:"[JS] \u5173\u4e8e\u4ec0\u4e48\u662fJavascript",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u7b2c\u4e00\u7ae0",source:"@site/docs/javascript/ecma.md",sourceDirName:"javascript",slug:"/javascript/ecma",permalink:"/docs/javascript/ecma",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/ecma.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[JS] \u5173\u4e8e\u4ec0\u4e48\u662fJavascript",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[React] redux",permalink:"/docs/React/redux"},next:{title:"[JS] \u53d8\u91cf\u58f0\u660e\u98ce\u683c\u53ca\u6700\u4f73\u5b9e\u8df5\u539f\u7406",permalink:"/docs/javascript/var-let-const"}},u=[{value:"ECMAScript",id:"ecmascript",children:[],level:2},{value:"DOM",id:"dom",children:[{value:"\u4e3a\u4ec0\u4e48 DOM \u662f\u5fc5\u9700\u7684",id:"\u4e3a\u4ec0\u4e48-dom-\u662f\u5fc5\u9700\u7684",children:[],level:3}],level:2},{value:"BOM",id:"bom",children:[],level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[],level:2}],s={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u7b2c\u4e00\u7ae0")),(0,i.kt)("p",null,"\u867d\u7136JavaScript\u548cECMAScript\u57fa\u672c\u4e0a\u662f\u540c\u4e49\u8bcd, \u4f46JS\u8fdc\u8fdc\u4e0d\u9650\u4e8eECMA-262\u6240\u5b9a\u4e49\u7684\u90a3\u6837.  "),(0,i.kt)("p",null,"\u6ca1\u9519, \u5b8c\u6574JavaScript\u5b9e\u73b0\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u90e8\u5206:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6838\u5fc3 (ECMAScript)"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u6863\u5bf9\u8c61\u6a21\u578b (DOM)"),(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b (BOM)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1",src:r(5582).Z})),(0,i.kt)("h2",{id:"ecmascript"},"ECMAScript"),(0,i.kt)("p",null,"ECMAScript, \u5373ECMA-262\u5b9a\u4e49\u7684\u8bed\u8a00, \u5e76\u4e0d\u5c40\u9650\u4e8eWeb\u6d4f\u89c8\u5668. \u4e8b\u5b9e\u4e0a, \u8fd9\u95e8\u8bed\u8a00\u6ca1\u6709\u548c\u8f93\u51fa\u4e4b\u7c7b\u7684\u65b9\u6cd5. \u5373ECMA-262\u5c06\u8fd9\u95e8\u8bed\u8a00\u4f5c\u4e3a\u4e00\u4e2a\u57fa\u51c6\u6765\u5b9a\u4e49, \u4ee5\u4fbf\u5728\u5b83\u4e4b\u4e0a\u518d\u6784\u5efa\u66f4\u7a33\u5065\u7684\u811a\u672c\u8bed\u8a00. ",(0,i.kt)("strong",{parentName:"p"},"Web\u6d4f\u89c8\u5668\u53ea\u662fECMAScript\u5b9e\u73b0\u53ef\u80fd\u5b58\u5728\u7684\u4e00\u79cd\u5bbf\u4e3b\u73af\u5883(host environment)")," \u5bbf\u4e3b\u73af\u5883\u63d0\u4f9bECMAScript\u7684\u57fa\u51c6\u5b9e\u73b0 \u548c \u4e0e\u73af\u5883\u81ea\u8eab\u4ea4\u4e92\u5fc5\u987b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u6269\u5c55")),(0,i.kt)("h2",{id:"dom"},"DOM"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6587\u6863\u5bf9\u8c61\u6a21\u578b (DOM, Document Object Model)")," \u662f\u4e00\u4e2a\u5e94\u7528\u7f16\u7a0b\u63a5\u53e3(API), \u7528\u4e8e\u5728HTML\u4e2d\u4f7f\u7528\u6269\u5c55\u7684XML. DOM\u5c06\u6574\u4e2a\u9875\u9762\u62bd\u8c61\u4e3a\u4e00\u7ec4\u5206\u5c42\u8282\u70b9. HTML\u6216XML\u9875\u9762\u7684\u6bcf\u4e2a\u7ec4\u6210\u90e8\u5206\u90fd\u662f\u4e00\u79cd\u8282\u70b9, \u5305\u542b\u4e0d\u540c\u7684\u6570\u636e. \u6bd4\u5982\u4e0b\u9762\u7684HTML\u9875\u9762:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n  <head>\n    <title>Sample Page</title>\n  </head>\n  <body>\n    <p>Hello World!</p>\n  </body>\n</html>\n")),(0,i.kt)("p",null,"\u8fd9\u4e9b\u4ee3\u7801\u901a\u8fc7DOM\u53ef\u4ee5\u8868\u793a\u4e3a\u4e00\u7ec4\u5206\u5c42\u8282\u70b9, \u5982\u56fe:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2",src:r(3847).Z})),(0,i.kt)("p",null,"DOM \u901a\u8fc7\u521b\u5efa\u8868\u793a\u6587\u6863\u7684\u6811\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u968f\u5fc3\u6240\u6b32\u5730\u63a7\u5236\u7f51\u9875\u7684\u5185\u5bb9\u548c\u7ed3\u6784\u3002\u4f7f\u7528 DOM API\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u5220\u9664\u3001\u6dfb\u52a0\u3001\u66ff\u6362\u3001\u4fee\u6539\u8282\u70b9\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u4ec0\u4e48-dom-\u662f\u5fc5\u9700\u7684"},"\u4e3a\u4ec0\u4e48 DOM \u662f\u5fc5\u9700\u7684"),(0,i.kt)("p",null,"\u5728 IE4 \u548c Netscape Navigator 4 \u652f\u6301\u4e0d\u540c\u5f62\u5f0f\u7684\u52a8\u6001 HTML\uff08DHTML\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u9996\u5148\u53ef\u4ee5\u505a\u5230\u4e0d\u5237\u65b0\u9875\u9762\u800c\u4fee\u6539\u9875\u9762\u5916\u89c2\u548c\u5185\u5bb9\u3002\u8fd9\u4ee3\u8868\u4e86 Web \u6280\u672f\u7684\u4e00\u4e2a\u5de8\u5927\u8fdb\u6b65\uff0c\u4f46\u4e5f\u66b4\u9732\u4e86\u5f88\u5927\u7684\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u7531\u4e8e\u7f51\u666f\u548c\u5fae\u8f6f\u91c7\u7528\u4e0d\u540c\u601d\u8def\u5f00\u53d1 DHTML\uff0c\u5f00\u53d1\u8005\u5199\u4e00\u4e2a HTML \u9875\u9762\u5c31\u53ef\u4ee5\u5728\u4efb\u4f55\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u597d\u65e5\u5b50\u5c31\u6b64\u7ec8\u7ed3\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e3a\u4e86\u4fdd\u6301 Web \u8de8\u5e73\u53f0\u7684\u672c\u6027"),"\uff0c\u5fc5\u987b\u8981\u505a\u70b9\u4ec0\u4e48\u3002\u4eba\u4eec\u62c5\u5fc3\u5982\u679c\u65e0\u6cd5\u63a7\u5236\u7f51\u666f\u548c\u5fae\u8f6f\u5404\u884c\u5176\u662f\uff0c\u90a3\u4e48 Web \u5c31\u4f1a\u53d1\u751f\u5206\u88c2\uff0c\u5bfc\u81f4\u4eba\u4eec\u9762\u5411\u6d4f\u89c8\u5668\u5f00\u53d1\u7f51\u9875\u3002\u5c31\u5728\u8fd9\u65f6\uff0c\u4e07\u7ef4\u7f51\u8054\u76df\uff08W3C\uff0cWorld Wide Web Consortium\uff09\u5f00\u59cb\u4e86\u5236\u5b9a DOM \u6807\u51c6\u7684\u8fdb\u7a0b\u3002"),(0,i.kt)("h2",{id:"bom"},"BOM"),(0,i.kt)("p",null,"IE3 \u548c Netscape Navigator 3 \u63d0\u4f9b\u4e86\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09 API\uff0c\u7528\u4e8e\u652f\u6301\u8bbf\u95ee\u548c\u64cd\u4f5c\u6d4f\u89c8\u5668\u7684\u7a97\u53e3\u3002\u4f7f\u7528 BOM\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u64cd\u63a7\u6d4f\u89c8\u5668\u663e\u793a\u9875\u9762\u4e4b\u5916\u7684\u90e8\u5206\u3002\u800c BOM \u771f\u6b63\u72ec\u4e00\u65e0\u4e8c\u7684\u5730\u65b9\uff0c\u5f53\u7136\u4e5f\u662f\u95ee\u9898\u6700\u591a\u7684\u5730\u65b9\uff0c\u5c31\u662f\u5b83\u662f\u552f\u4e00\u4e00\u4e2a\u6ca1\u6709\u76f8\u5173\u6807\u51c6\u7684 JavaScript \u5b9e\u73b0\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HTML5"),"\u6539\u53d8\u4e86\u8fd9\u4e2a\u5c40\u9762\uff0c\u8fd9\u4e2a\u7248\u672c\u7684 HTML \u4ee5\u6b63\u5f0f\u89c4\u8303\u7684\u5f62\u5f0f\u6db5\u76d6\u4e86\u5c3d\u53ef\u80fd\u591a\u7684 BOM \u7279\u6027\u3002\u7531\u4e8e HTML5 \u7684\u51fa\u73b0\uff0c\u4e4b\u524d\u5f88\u591a\u4e0e BOM \u6709\u5173\u7684\u95ee\u9898\u90fd\u8fce\u5203\u800c\u89e3\u4e86\u3002"),(0,i.kt)("p",null,"\u603b\u4f53\u6765\u8bf4\uff0cBOM \u4e3b\u8981\u9488\u5bf9\u6d4f\u89c8\u5668\u7a97\u53e3\u548c\u5b50\u7a97\u53e3\uff08frame\uff09\uff0c\u4e0d\u8fc7\u4eba\u4eec\u901a\u5e38\u4f1a\u628a\u4efb\u4f55\u7279\u5b9a\u4e8e\u6d4f\u89c8\u5668\u7684\u6269\u5c55\u90fd\u5f52\u5728 BOM \u7684\u8303\u7574\u5185\u3002\u6bd4\u5982\uff0c\u4e0b\u9762\u5c31\u662f\u8fd9\u6837\u4e00\u4e9b\u6269\u5c55\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f39\u51fa\u65b0\u6d4f\u89c8\u5668\u7a97\u53e3\u7684\u80fd\u529b\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u3001\u7f29\u653e\u548c\u5173\u95ed\u6d4f\u89c8\u5668\u7a97\u53e3\u7684\u80fd\u529b\uff1b"),(0,i.kt)("li",{parentName:"ul"},"navigator \u5bf9\u8c61\uff0c\u63d0\u4f9b\u5173\u4e8e\u6d4f\u89c8\u5668\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"location \u5bf9\u8c61\uff0c\u63d0\u4f9b\u6d4f\u89c8\u5668\u52a0\u8f7d\u9875\u9762\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"screen \u5bf9\u8c61\uff0c\u63d0\u4f9b\u5173\u4e8e\u7528\u6237\u5c4f\u5e55\u5206\u8fa8\u7387\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"performance \u5bf9\u8c61\uff0c\u63d0\u4f9b\u6d4f\u89c8\u5668\u5185\u5b58\u5360\u7528\u3001\u5bfc\u822a\u884c\u4e3a\u548c\u65f6\u95f4\u7edf\u8ba1\u7684\u8be6\u5c3d\u4fe1\u606f\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9 cookie \u7684\u652f\u6301\uff1b"),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u81ea\u5b9a\u4e49\u5bf9\u8c61\uff0c\u5982 XMLHttpRequest \u548c IE \u7684 ActiveXObject\u3002")),(0,i.kt)("p",null,"\u56e0\u4e3a\u5728\u5f88\u957f\u65f6\u95f4\u5185\u90fd\u6ca1\u6709\u6807\u51c6\uff0c\u6240\u4ee5\u6bcf\u4e2a\u6d4f\u89c8\u5668\u5b9e\u73b0\u7684\u90fd\u662f\u81ea\u5df1\u7684 BOM\u3002\u6709\u4e00\u4e9b\u6240\u8c13\u7684\u4e8b\u5b9e\u6807\u51c6\uff0c\u6bd4\u5982\u5bf9\u4e8e window \u5bf9\u8c61\u548c navigator \u5bf9\u8c61\uff0c\u6bcf\u4e2a\u6d4f\u89c8\u5668\u90fd\u4f1a\u7ed9\u5b83\u4eec\u5b9a\u4e49\u81ea\u5df1\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u73b0\u5728\u6709\u4e86HTML5\uff0cBOM \u7684\u5b9e\u73b0\u7ec6\u8282\u5e94\u8be5\u4f1a\u65e5\u8d8b\u4e00\u81f4\u3002"),(0,i.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,i.kt)("p",null,"JavaScript \u662f\u4e00\u95e8\u7528\u6765\u4e0e\u7f51\u9875\u4ea4\u4e92\u7684\u811a\u672c\u8bed\u8a00\uff0c\u5305\u542b\u4ee5\u4e0b\u4e09\u4e2a\u7ec4\u6210\u90e8\u5206\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ECMAScript\uff1a\u7531 ECMA-262 \u5b9a\u4e49\u5e76\u63d0\u4f9b\u6838\u5fc3\u529f\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u6863\u5bf9\u8c61\u6a21\u578b\uff08DOM\uff09\uff1a\u63d0\u4f9b\u4e0e\u7f51\u9875\u5185\u5bb9\u4ea4\u4e92\u7684\u65b9\u6cd5\u548c\u63a5\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff09\uff1a\u63d0\u4f9b\u4e0e\u6d4f\u89c8\u5668\u4ea4\u4e92\u7684\u65b9\u6cd5\u548c\u63a5\u53e3\u3002")))}m.isMDXComponent=!0},5582:function(e,t,r){t.Z=r.p+"assets/images/1-0a32fc994bcc7fec1ae23caf2c543cf4.JPG"},3847:function(e,t,r){t.Z=r.p+"assets/images/2-aaacb1d20cd1b20eb993d72382498ed5.JPG"}}]);