"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9347],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),w=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=w(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=w(t),c=l,m=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=s;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var w=2;w<o;w++)r[w]=t[w];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9911:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return w},toc:function(){return d}});var a=t(7462),l=t(3366),o=(t(7294),t(3905)),r=["components"],i={title:"[JS] BOM",sidebar_position:10},p=void 0,w={unversionedId:"javascript/BOM",id:"javascript/BOM",title:"[JS] BOM",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u7b2c\u5341\u4e8c\u7ae0",source:"@site/docs/javascript/BOM.md",sourceDirName:"javascript",slug:"/javascript/BOM",permalink:"/docs/javascript/BOM",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/BOM.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"[JS] BOM",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"[JS] \u671f\u7ea6\u4e0e\u5f02\u6b65\u51fd\u6570",permalink:"/docs/javascript/Promise"},next:{title:"[JS] \u6a21\u5757\u6a21\u5f0f(ES6\u4e4b\u524d)",permalink:"/docs/javascript/modules1"}},d=[{value:"window \u5bf9\u8c61",id:"window-\u5bf9\u8c61",children:[{value:"Global \u4f5c\u7528\u57df",id:"global-\u4f5c\u7528\u57df",children:[],level:3},{value:"\u7a97\u53e3\u5173\u7cfb",id:"\u7a97\u53e3\u5173\u7cfb",children:[],level:3},{value:"\u7a97\u53e3\u4f4d\u7f6e",id:"\u7a97\u53e3\u4f4d\u7f6e",children:[],level:3},{value:"\u50cf\u7d20\u6bd4",id:"\u50cf\u7d20\u6bd4",children:[],level:3},{value:"\u7a97\u53e3\u5927\u5c0f",id:"\u7a97\u53e3\u5927\u5c0f",children:[],level:3},{value:"\u5bfc\u822a\u4e0e\u6253\u5f00\u65b0\u7a97\u53e3",id:"\u5bfc\u822a\u4e0e\u6253\u5f00\u65b0\u7a97\u53e3",children:[],level:3}],level:2},{value:"\u5b9a\u65f6\u5668",id:"\u5b9a\u65f6\u5668",children:[],level:2}],u={toc:d};function s(e){var n=e.components,i=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u7b2c\u5341\u4e8c\u7ae0")),(0,o.kt)("h1",{id:"bom"},"BOM"),(0,o.kt)("p",null,"\u867d\u7136 ECMAScript \u628a\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\uff08BOM\uff0cBrowser Object Model\uff09\u63cf\u8ff0\u4e3a JavaScript \u7684\u6838\u5fc3\uff0c\u4f46\u5b9e\u9645\u4e0a BOM \u662f\u4f7f\u7528 JavaScript \u5f00\u53d1 Web \u5e94\u7528\u7a0b\u5e8f\u7684\u6838\u5fc3\u3002BOM \u63d0\u4f9b\u4e86\u4e0e\u7f51\u9875\u65e0\u5173\u7684\u6d4f\u89c8\u5668\u529f\u80fd\u5bf9\u8c61. \u591a\u5e74\u6765\uff0cBOM \u662f\u5728\u7f3a\u4e4f\u89c4\u8303\u7684\u80cc\u666f\u4e0b\u53d1\u5c55\u8d77\u6765\u7684\uff0c\u56e0\u6b64\u65e2\u5145\u6ee1\u4e50\u8da3\u53c8\u95ee\u9898\u591a\u591a\u3002\u6bd5\u7adf\uff0c\u6d4f\u89c8\u5668\u5f00\u53d1\u5546\u90fd\u6309\u7167\u81ea\u5df1\u7684\u610f\u613f\u6765\u4e3a\u5b83\u6dfb\u7816\u52a0\u74e6\u3002\u6700\u7ec8\uff0c\u6d4f\u89c8\u5668\u5b9e\u73b0\u4e4b\u95f4\u5171\u901a\u7684\u90e8\u5206\u6210\u4e3a\u4e86\u4e8b\u5b9e\u6807\u51c6\uff0c\u4e3a Web \u5f00\u53d1\u63d0\u4f9b\u4e86\u6d4f\u89c8\u5668\u95f4\u4e92\u64cd\u4f5c\u7684\u57fa\u7840\u3002HTML5 \u89c4\u8303\u4e2d\u6709\u4e00\u90e8\u5206\u6db5\u76d6\u4e86 BOM \u7684\u4e3b\u8981\u5185\u5bb9\uff0c\u56e0\u4e3a W3C \u5e0c\u671b\u5c06JavaScript \u5728\u6d4f\u89c8\u5668\u4e2d\u6700\u57fa\u7840\u7684\u90e8\u5206\u6807\u51c6\u5316\u3002"),(0,o.kt)("h2",{id:"window-\u5bf9\u8c61"},"window \u5bf9\u8c61"),(0,o.kt)("p",null,"BOM \u7684\u6838\u5fc3\u662f window \u5bf9\u8c61\uff0c\u8868\u793a\u6d4f\u89c8\u5668\u7684\u5b9e\u4f8b\u3002window \u5bf9\u8c61\u5728\u6d4f\u89c8\u5668\u4e2d\u6709\u4e24\u91cd\u8eab\u4efd\uff0c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u662fECMAScript \u4e2d\u7684 Global \u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u53e6\u4e00\u4e2a\u5c31\u662f\u6d4f\u89c8\u5668\u7a97\u53e3\u7684 JavaScript \u63a5\u53e3")),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u7f51\u9875\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u5bf9\u8c61\u3001\u53d8\u91cf\u548c\u51fd\u6570\u90fd\u4ee5 window \u4f5c\u4e3a\u5176 Global \u5bf9\u8c61\uff0c\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5176\u4e0a\u5b9a\u4e49\u7684\u5168\u5c40\u65b9\u6cd5\u3002"),(0,o.kt)("h3",{id:"global-\u4f5c\u7528\u57df"},"Global \u4f5c\u7528\u57df"),(0,o.kt)("p",null,"\u56e0\u4e3a window \u5bf9\u8c61\u88ab\u590d\u7528\u4e3a ECMAScript \u7684 Global \u5bf9\u8c61\uff0c\u6240\u4ee5\u901a\u8fc7 var \u58f0\u660e\u7684\u6240\u6709\u5168\u5c40\u53d8\u91cf\u548c\u51fd\u6570\u90fd\u4f1a\u53d8\u6210 window \u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var age = 29;\nvar sayAge = () => alert(this.age);\nalert(window.age); // 29 \nsayAge(); // 29\nwindow.sayAge(); // 29\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\uff0c\u53d8\u91cf age \u548c\u51fd\u6570 sayAge()\u88ab\u5b9a\u4e49\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\uff0c\u5b83\u4eec\u81ea\u52a8\u6210\u4e3a\u4e86 window \u5bf9\u8c61\u7684\u6210\u5458\u3002\u56e0\u6b64\uff0c\u53d8\u91cf age \u53ef\u4ee5\u901a\u8fc7 window.age \u6765\u8bbf\u95ee\uff0c\u800c\u51fd\u6570 sayAge()\u4e5f\u53ef\u4ee5\u901a\u8fc7 window.sayAge()\u6765\u8bbf\u95ee\u3002\u56e0\u4e3a sayAge()\u5b58\u5728\u4e8e\u5168\u5c40\u4f5c\u7528\u57df\uff0cthis.age \u6620\u5c04\u5230 window.age\uff0c\u6240\u4ee5\u5c31\u53ef\u4ee5\u663e\u793a\u6b63\u786e\u7684\u7ed3\u679c\u4e86\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5728\u8fd9\u91cc\u4f7f\u7528 let \u6216 const \u66ff\u4ee3 var\uff0c\u5219\u4e0d\u4f1a\u628a\u53d8\u91cf\u6dfb\u52a0\u7ed9\u5168\u5c40\u5bf9\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let age = 29;\nconst sayAge = () => alert(this.age);\nalert(window.age); // undefined\nsayAge(); // undefined\nwindow.sayAge(); // TypeError: window.sayAge is not a function\n")),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u8bbf\u95ee\u672a\u58f0\u660e\u7684\u53d8\u91cf\u4f1a\u629b\u51fa\u9519\u8bef\uff0c\u4f46\u662f\u53ef\u4ee5\u5728 window \u5bf9\u8c61\u4e0a\u67e5\u8be2\u662f\u5426\u5b58\u5728\u53ef\u80fd\u672a\u58f0\u660e\u7684\u53d8\u91cf\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u8fd9\u4f1a\u5bfc\u81f4\u629b\u51fa\u9519\u8bef\uff0c\u56e0\u4e3a oldValue \u6ca1\u6709\u58f0\u660e\nvar newValue = oldValue;\n// \u8fd9\u4e0d\u4f1a\u629b\u51fa\u9519\u8bef\uff0c\u56e0\u4e3a\u8fd9\u91cc\u662f\u5c5e\u6027\u67e5\u8be2\n// newValue \u4f1a\u88ab\u8bbe\u7f6e\u4e3a undefined\nvar newValue = window.oldValue;\n")),(0,o.kt)("h3",{id:"\u7a97\u53e3\u5173\u7cfb"},"\u7a97\u53e3\u5173\u7cfb"),(0,o.kt)("p",null,"top \u5bf9\u8c61\u59cb\u7ec8\u6307\u5411\u6700\u4e0a\u5c42\uff08\u6700\u5916\u5c42\uff09\u7a97\u53e3\uff0c\u5373\u6d4f\u89c8\u5668\u7a97\u53e3\u672c\u8eab\u3002\u800c parent \u5bf9\u8c61\u5219\u59cb\u7ec8\u6307\u5411\u5f53\u524d\u7a97\u53e3\u7684\u7236\u7a97\u53e3\u3002\u5982\u679c\u5f53\u524d\u7a97\u53e3\u662f\u6700\u4e0a\u5c42\u7a97\u53e3\uff0c\u5219 parent \u7b49\u4e8e top\uff08\u90fd\u7b49\u4e8e window\uff09\u3002\u6700\u4e0a\u5c42\u7684 window\u5982\u679c\u4e0d\u662f\u901a\u8fc7 window.open()\u6253\u5f00\u7684\uff0c\u90a3\u4e48\u5176 name \u5c5e\u6027\u5c31\u4e0d\u4f1a\u5305\u542b\u503c"),(0,o.kt)("p",null,"\u8fd8\u6709\u4e00\u4e2a self \u5bf9\u8c61\uff0c\u5b83\u662f\u7ec8\u6781 window \u5c5e\u6027\uff0c\u59cb\u7ec8\u4f1a\u6307\u5411 window\u3002\u5b9e\u9645\u4e0a\uff0cself \u548c window \u5c31\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61\u3002\u4e4b\u6240\u4ee5\u8fd8\u8981\u66b4\u9732 self\uff0c\u5c31\u662f\u4e3a\u4e86\u548c top\u3001parent \u4fdd\u6301\u4e00\u81f4\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e9b\u5c5e\u6027\u90fd\u662f window \u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u56e0\u6b64\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"window.parent"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"window.top")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"window.self"),"\u90fd\u53ef\u4ee5\u3002\u8fd9\u610f\u5473\u7740\u53ef\u4ee5\u628a\u8bbf\u95ee\u591a\u4e2a\u7a97\u53e3\u7684 window \u5bf9\u8c61\u4e32\u8054\u8d77\u6765\uff0c\u6bd4\u5982 window.parent.parent\u3002"),(0,o.kt)("h3",{id:"\u7a97\u53e3\u4f4d\u7f6e"},"\u7a97\u53e3\u4f4d\u7f6e"),(0,o.kt)("p",null,"window \u5bf9\u8c61\u7684\u4f4d\u7f6e\u53ef\u4ee5\u901a\u8fc7\u4e0d\u540c\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u6765\u786e\u5b9a\u3002\u73b0\u4ee3\u6d4f\u89c8\u5668\u63d0\u4f9b\u4e86 screenLeft \u548cscreenTop \u5c5e\u6027\uff0c\u7528\u4e8e\u8868\u793a\u7a97\u53e3\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u5de6\u4fa7\u548c\u9876\u90e8\u7684\u4f4d\u7f6e \uff0c\u8fd4\u56de\u503c\u7684\u5355\u4f4d\u662f CSS \u50cf\u7d20\u3002"),(0,o.kt)("h3",{id:"\u50cf\u7d20\u6bd4"},"\u50cf\u7d20\u6bd4"),(0,o.kt)("p",null,"CSS \u50cf\u7d20\u662f Web \u5f00\u53d1\u4e2d\u4f7f\u7528\u7684\u7edf\u4e00\u50cf\u7d20\u5355\u4f4d\u3002\u8fd9\u4e2a\u5355\u4f4d\u7684\u80cc\u540e\u5176\u5b9e\u662f\u4e00\u4e2a\u89d2\u5ea6\uff1a0.0213\xb0\u3002\u5982\u679c\u5c4f\u5e55\u8ddd\u79bb\u4eba\u773c\u662f\u4e00\u81c2\u957f\uff0c\u5219\u4ee5\u8fd9\u4e2a\u89d2\u5ea6\u8ba1\u7b97\u7684 CSS \u50cf\u7d20\u5927\u5c0f\u7ea6\u4e3a 1/96 \u82f1\u5bf8\u3002\u8fd9\u6837\u5b9a\u4e49\u50cf\u7d20\u5927\u5c0f\u662f\u4e3a\u4e86\u5728\u4e0d\u540c\u8bbe\u5907\u4e0a\u7edf\u4e00\u6807\u51c6\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff0c\u4f4e\u5206\u8fa8\u7387\u5e73\u677f\u8bbe\u5907\u4e0a 12 \u50cf\u7d20\uff08CSS \u50cf\u7d20\uff09\u7684\u6587\u5b57\u5e94\u8be5\u4e0e\u9ad8\u6e05 4K \u5c4f\u5e55\u4e0b12 \u50cf\u7d20\uff08CSS \u50cf\u7d20\uff09\u7684\u6587\u5b57\u5177\u6709\u76f8\u540c\u5927\u5c0f\u3002\u8fd9\u5c31\u5e26\u6765\u4e86\u4e00\u4e2a\u95ee\u9898\uff0c\u4e0d\u540c\u50cf\u7d20\u5bc6\u5ea6\u7684\u5c4f\u5e55\u4e0b\u5c31\u4f1a\u6709\u4e0d\u540c\u7684\u7f29\u653e\u7cfb\u6570\uff0c\u4ee5\u4fbf\u628a",(0,o.kt)("inlineCode",{parentName:"p"},"\u7269\u7406\u50cf\u7d20\uff08\u5c4f\u5e55\u5b9e\u9645\u7684\u5206\u8fa8\u7387\uff09"),"\u8f6c\u6362\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"CSS \u50cf\u7d20\uff08\u6d4f\u89c8\u5668\u62a5\u544a\u7684\u865a\u62df\u5206\u8fa8\u7387\uff09"),"\u3002"),(0,o.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u624b\u673a\u5c4f\u5e55\u7684\u7269\u7406\u5206\u8fa8\u7387\u53ef\u80fd\u662f 1920\xd71080\uff0c\u4f46\u56e0\u4e3a\u5176\u50cf\u7d20\u53ef\u80fd\u975e\u5e38\u5c0f\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u5c31\u9700\u8981\u5c06\u5176\u5206\u8fa8\u7387\u964d\u4e3a\u8f83\u4f4e\u7684\u903b\u8f91\u5206\u8fa8\u7387\uff0c\u6bd4\u5982 640\xd7320\u3002\u8fd9\u4e2a\u7269\u7406\u50cf\u7d20\u4e0e CSS \u50cf\u7d20\u4e4b\u95f4\u7684\u8f6c\u6362\u6bd4\u7387\u7531window.devicePixelRatio \u5c5e\u6027\u63d0\u4f9b\u3002\u5bf9\u4e8e\u5206\u8fa8\u7387\u4ece 1920\xd71080 \u8f6c\u6362\u4e3a 640\xd7320 \u7684\u8bbe\u5907\uff0cwindow.devicePixelRatio \u7684\u503c\u5c31\u662f 3\u3002\u8fd9\u6837\u4e00\u6765\uff0c12 \u50cf\u7d20\uff08CSS \u50cf\u7d20\uff09\u7684\u6587\u5b57\u5b9e\u9645\u4e0a\u5c31\u4f1a\u7528 36 \u50cf\u7d20\u7684\u7269\u7406\u50cf\u7d20\u6765\u663e\u793a\u3002window.devicePixelRatio \u5b9e\u9645\u4e0a\u4e0e\u6bcf\u82f1\u5bf8\u50cf\u7d20\u6570\uff08DPI\uff0cdots per inch\uff09\u662f\u5bf9\u5e94\u7684\u3002DPI \u8868\u793a\u5355\u4f4d\u50cf\u7d20\u5bc6\u5ea6\uff0c\u800c window.devicePixelRatio \u8868\u793a\u7269\u7406\u50cf\u7d20\u4e0e\u903b\u8f91\u50cf\u7d20\u4e4b\u95f4\u7684\u7f29\u653e\u7cfb\u6570\u3002"),(0,o.kt)("h3",{id:"\u7a97\u53e3\u5927\u5c0f"},"\u7a97\u53e3\u5927\u5c0f"),(0,o.kt)("p",null,"\u5728\u4e0d\u540c\u6d4f\u89c8\u5668\u4e2d\u786e\u5b9a\u6d4f\u89c8\u5668\u7a97\u53e3\u5927\u5c0f\u6ca1\u6709\u60f3\u8c61\u4e2d\u90a3\u4e48\u5bb9\u6613\u3002\u6240\u6709\u73b0\u4ee3\u6d4f\u89c8\u5668\u90fd\u652f\u6301 4 \u4e2a\u5c5e\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"innerWidth"),(0,o.kt)("li",{parentName:"ul"},"innerHeight"),(0,o.kt)("li",{parentName:"ul"},"outerWidth"),(0,o.kt)("li",{parentName:"ul"},"outerHeight")),(0,o.kt)("p",null,"innerWidth\u548c innerHeight \u8fd4\u56de\u6d4f\u89c8\u5668\u7a97\u53e3\u4e2d\u9875\u9762\u89c6\u53e3\u7684\u5927\u5c0f\uff08\u4e0d\u5305\u542b\u6d4f\u89c8\u5668\u8fb9\u6846\u548c\u5de5\u5177\u680f\uff09\u3002"),(0,o.kt)("p",null,"outerWidth \u548c outerHeight \u8fd4\u56de\u6d4f\u89c8\u5668\u7a97\u53e3\u81ea\u8eab\u7684\u5927\u5c0f\uff08\u4e0d\u7ba1\u662f\u5728\u6700\u5916\u5c42 window \u4e0a\u4f7f\u7528\uff0c\u8fd8\u662f\u5728\u7a97\u683c",(0,o.kt)("inlineCode",{parentName:"p"},"<frame>"),"\u4e2d\u4f7f\u7528\uff09\u3002"),(0,o.kt)("h3",{id:"\u5bfc\u822a\u4e0e\u6253\u5f00\u65b0\u7a97\u53e3"},"\u5bfc\u822a\u4e0e\u6253\u5f00\u65b0\u7a97\u53e3"),(0,o.kt)("p",null,"window.open()\u65b9\u6cd5\u53ef\u4ee5\u7528\u4e8e\u5bfc\u822a\u5230\u6307\u5b9a URL\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u6253\u5f00\u65b0\u6d4f\u89c8\u5668\u7a97\u53e3"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u63a5\u6536 4\u4e2a\u53c2\u6570\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8981\u52a0\u8f7d\u7684 URL"),(0,o.kt)("li",{parentName:"ul"},"\u76ee\u6807\u7a97\u53e3"),(0,o.kt)("li",{parentName:"ul"},"\u7279\u6027\u5b57\u7b26\u4e32"),(0,o.kt)("li",{parentName:"ul"},"\u8868\u793a\u65b0\u7a97\u53e3\u5728\u6d4f\u89c8\u5668\u5386\u53f2\u8bb0\u5f55\u4e2d\u662f\u5426\u66ff\u4ee3\u5f53\u524d\u52a0\u8f7d\u9875\u9762\u7684\u5e03\u5c14\u503c")),(0,o.kt)("p",null,"\u901a\u5e38\uff0c\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\u65f6\u53ea\u4f20\u524d 3 \u4e2a\u53c2\u6570\uff0c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u53ea\u6709\u5728\u4e0d\u6253\u5f00\u65b0\u7a97\u53e3\u65f6\u624d\u4f1a\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u5982\u679c window.open()\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684\u7a97\u53e3\u6216\u7a97\u683c\uff08frame\uff09\u7684\u540d\u5b57\uff0c\u5219\u4f1a\u5728\u5bf9\u5e94\u7684\u7a97\u53e3\u6216\u7a97\u683c\u4e2d\u6253\u5f00 URL\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u4e0e<a href="http://www.wrox.com" target="topFrame"/>\u76f8\u540c\nwindow.open("http://www.wrox.com/", "topFrame"); \n')),(0,o.kt)("p",null,'\u6267\u884c\u8fd9\u884c\u4ee3\u7801\u7684\u7ed3\u679c\u5c31\u5982\u540c\u7528\u6237\u70b9\u51fb\u4e86\u4e00\u4e2a href \u5c5e\u6027\u4e3a"',(0,o.kt)("a",{parentName:"p",href:"http://www.wrox.com%22%EF%BC%8Ctarget"},'http://www.wrox.com"\uff0ctarget'),' \u5c5e\u6027\u4e3a"topFrame"\u7684\u94fe\u63a5\u3002\u5982\u679c\u6709\u4e00\u4e2a\u7a97\u53e3\u540d\u53eb"topFrame"\uff0c\u5219\u8fd9\u4e2a\u7a97\u53e3\u5c31\u4f1a\u6253\u5f00\u8fd9\u4e2a URL\uff1b\u5426\u5219\u5c31\u4f1a\u6253\u5f00\u4e00\u4e2a\u65b0\u7a97\u53e3\u5e76\u5c06\u5176\u547d\u540d\u4e3a"topFrame"\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u7a97\u53e3\u540d\uff0c\u6bd4\u5982_self\u3001_parent\u3001_top \u6216_blank\u3002'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u5f39\u51fa\u7a97\u53e3")),(0,o.kt)("p",null,"\u5982\u679c window.open()\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e0d\u662f\u5df2\u6709\u7a97\u53e3\uff0c\u5219\u4f1a\u6253\u5f00\u4e00\u4e2a\u65b0\u7a97\u53e3\u6216\u6807\u7b7e\u9875\u3002\u7b2c\u4e09\u4e2a\u53c2\u6570\u5373\u7279\u6027\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6307\u5b9a\u65b0\u7a97\u53e3\u7684\u914d\u7f6e\u3002\u5982\u679c\u6ca1\u6709\u4f20\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u5219\u65b0\u7a97\u53e3\uff08\u6216\u6807\u7b7e\u9875\uff09\u4f1a\u5e26\u6709\u6240\u6709\u9ed8\u8ba4\u7684\u6d4f\u89c8\u5668\u7279\u6027\uff08\u5de5\u5177\u680f\u3001\u5730\u5740\u680f\u3001\u72b6\u6001\u680f\u7b49\u90fd\u662f\u9ed8\u8ba4\u914d\u7f6e\uff09\u3002\u5982\u679c\u6253\u5f00\u7684\u4e0d\u662f\u65b0\u7a97\u53e3\uff0c\u5219\u5ffd\u7565\u7b2c\u4e09\u4e2a\u53c2\u6570\u3002\u7279\u6027\u5b57\u7b26\u4e32\u662f\u4e00\u4e2a\u9017\u53f7\u5206\u9694\u7684\u8bbe\u7f6e\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u6307\u5b9a\u65b0\u7a97\u53e3\u5305\u542b\u7684\u7279\u6027\u3002\u4e0b\u8868\u5217\u51fa\u4e86\u4e00\u4e9b\u9009\u9879\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"windowopen",src:t(3254).Z}),"\n",(0,o.kt)("img",{alt:"windowopen2",src:t(2396).Z})),(0,o.kt)("p",null,"\u8fd9\u4e9b\u8bbe\u7f6e\u9700\u8981\u4ee5\u9017\u53f7\u5206\u9694\u7684\u540d\u503c\u5bf9\u5f62\u5f0f\u51fa\u73b0\uff0c\u5176\u4e2d\u540d\u503c\u5bf9\u4ee5\u7b49\u53f7\u8fde\u63a5\u3002\uff08\u7279\u6027\u5b57\u7b26\u4e32\u4e2d\u4e0d\u80fd\u5305\u542b\u7a7a\u683c\u3002\uff09\u6765\u770b\u4e0b\u9762\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'window.open("http://www.wrox.com/",\n "wroxWindow",\n "height=400,width=400,top=10,left=10,resizable=yes");\n')),(0,o.kt)("p",null,"\u8fd9\u884c\u4ee3\u7801\u4f1a\u6253\u5f00\u4e00\u4e2a\u53ef\u7f29\u653e\u7684\u65b0\u7a97\u53e3\uff0c\u5927\u5c0f\u4e3a 400 \u50cf\u7d20\xd7400 \u50cf\u7d20\uff0c\u4f4d\u4e8e\u79bb\u5c4f\u5e55\u5de6\u8fb9\u53ca\u9876\u8fb9\u5404 10 \u50cf\u7d20\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,"window.open()\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u65b0\u5efa\u7a97\u53e3\u7684\u5f15\u7528\u3002\u8fd9\u4e2a\u5bf9\u8c61\u4e0e\u666e\u901a window \u5bf9\u8c61\u6ca1\u6709\u533a\u522b\uff0c\u53ea\u662f\u4e3a\u63a7\u5236\u65b0\u7a97\u53e3\u63d0\u4f9b\u4e86\u65b9\u4fbf\u3002\u4f8b\u5982\uff0c\u67d0\u4e9b\u6d4f\u89c8\u5668\u9ed8\u8ba4\u4e0d\u5141\u8bb8\u7f29\u653e\u6216\u79fb\u52a8\u4e3b\u7a97\u53e3\uff0c\u4f46\u53ef\u80fd\u5141\u8bb8\u7f29\u653e\u6216\u79fb\u52a8\u901a\u8fc7window.open()\u521b\u5efa\u7684\u7a97\u53e3\u3002\u8ddf\u4f7f\u7528\u4efb\u4f55 window \u5bf9\u8c61\u4e00\u6837\uff0c\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5bf9\u8c61\u64cd\u7eb5\u65b0\u6253\u5f00\u7684\u7a97\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let wroxWin = window.open("http://www.wrox.com/",\n "wroxWindow",\n "height=400,width=400,top=10,left=10,resizable=yes");\n\n // \u7f29\u653e\nwroxWin.resizeTo(500, 500);\n// \u79fb\u52a8\nwroxWin.moveTo(100, 100);\n')),(0,o.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528 close()\u65b9\u6cd5\u50cf\u8fd9\u6837\u5173\u95ed\u65b0\u6253\u5f00\u7684\u7a97\u53e3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"wroxWin.close();\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u53ea\u80fd\u7528\u4e8e window.open()\u521b\u5efa\u7684\u5f39\u51fa\u7a97\u53e3\u3002\u867d\u7136\u4e0d\u53ef\u80fd\u4e0d\u7ecf\u7528\u6237\u786e\u8ba4\u5c31\u5173\u95ed\u4e3b\u7a97\u53e3\uff0c\u4f46\u5f39\u51fa\u7a97\u53e3\u53ef\u4ee5\u8c03\u7528 top.close()\u6765\u5173\u95ed\u81ea\u5df1\u3002\u5173\u95ed\u7a97\u53e3\u4ee5\u540e\uff0c\u7a97\u53e3\u7684\u5f15\u7528\u867d\u7136\u8fd8\u5728\uff0c\u4f46\u53ea\u80fd\u7528\u4e8e\u68c0\u67e5\u5176 closed \u5c5e\u6027\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"wroxWin.close();\nalert(wroxWin.closed); // true\n")),(0,o.kt)("p",null,"\u65b0\u521b\u5efa\u7a97\u53e3\u7684 window \u5bf9\u8c61\u6709\u4e00\u4e2a\u5c5e\u6027 opener\uff0c\u6307\u5411\u6253\u5f00\u5b83\u7684\u7a97\u53e3\u3002\u8fd9\u4e2a\u5c5e\u6027\u53ea\u5728\u5f39\u51fa\u7a97\u53e3\u7684\u6700\u4e0a\u5c42 window \u5bf9\u8c61\uff08top\uff09\u6709\u5b9a\u4e49\uff0c\u662f\u6307\u5411\u8c03\u7528 window.open()\u6253\u5f00\u5b83\u7684\u7a97\u53e3\u6216\u7a97\u683c\u7684\u6307\u9488\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let wroxWin = window.open("http://www.wrox.com/",\n "wroxWindow",\n "height=400,width=400,top=10,left=10,resizable=yes");\nalert(wroxWin.opener === window); // true \n')),(0,o.kt)("p",null,"\u867d\u7136\u65b0\u5efa\u7a97\u53e3\u4e2d\u6709\u6307\u5411\u6253\u5f00\u5b83\u7684\u7a97\u53e3\u7684\u6307\u9488\uff0c\u4f46\u53cd\u4e4b\u5219\u4e0d\u7136\u3002\u7a97\u53e3\u4e0d\u4f1a\u8ddf\u8e2a\u8bb0\u5f55\u81ea\u5df1\u6253\u5f00\u7684\u65b0\u7a97\u53e3\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u9700\u8981\u81ea\u5df1\u8bb0\u5f55\u3002"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u6d4f\u89c8\u5668\u4e2d\uff0c\u6bcf\u4e2a\u6807\u7b7e\u9875\u4f1a\u8fd0\u884c\u5728\u72ec\u7acb\u7684\u8fdb\u7a0b\u4e2d\u3002\u5982\u679c\u4e00\u4e2a\u6807\u7b7e\u9875\u6253\u5f00\u4e86\u53e6\u4e00\u4e2a\uff0c\u800c window\u5bf9\u8c61\u9700\u8981\u8ddf\u53e6\u4e00\u4e2a\u6807\u7b7e\u9875\u901a\u4fe1\uff0c\u90a3\u4e48\u6807\u7b7e\u4fbf\u4e0d\u80fd\u8fd0\u884c\u5728\u72ec\u7acb\u7684\u8fdb\u7a0b\u4e2d\u3002\u5728\u8fd9\u4e9b\u6d4f\u89c8\u5668\u4e2d\uff0c\u53ef\u4ee5\u5c06\u65b0\u6253\u5f00\u7684\u6807\u7b7e\u9875\u7684 opener \u5c5e\u6027\u8bbe\u7f6e\u4e3a null\uff0c\u8868\u793a\u65b0\u6253\u5f00\u7684\u6807\u7b7e\u9875\u53ef\u4ee5\u8fd0\u884c\u5728\u72ec\u7acb\u7684\u8fdb\u7a0b\u4e2d\u3002\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let wroxWin = window.open("http://www.wrox.com/",\n "wroxWindow",\n "height=400,width=400,top=10,left=10,resizable=yes");\nwroxWin.opener = null;\n')),(0,o.kt)("p",null,"\u628a opener \u8bbe\u7f6e\u4e3a null \u8868\u793a\u65b0\u6253\u5f00\u7684\u6807\u7b7e\u9875\u4e0d\u9700\u8981\u4e0e\u6253\u5f00\u5b83\u7684\u6807\u7b7e\u9875\u901a\u4fe1\uff0c\u56e0\u6b64\u53ef\u4ee5\u5728\u72ec\u7acb\u8fdb\u7a0b\u4e2d\u8fd0\u884c\u3002\u8fd9\u4e2a\u8fde\u63a5\u4e00\u65e6\u5207\u65ad\uff0c\u5c31\u65e0\u6cd5\u6062\u590d\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u5b89\u5168\u9650\u5236")),(0,o.kt)("p",null,"\u5f39\u51fa\u7a97\u53e3\u6709\u6bb5\u65f6\u95f4\u88ab\u5728\u7ebf\u5e7f\u544a\u7528\u6ee5\u4e86\u3002\u5f88\u591a\u5728\u7ebf\u5e7f\u544a\u4f1a\u628a\u5f39\u51fa\u7a97\u53e3\u4f2a\u88c5\u6210\u7cfb\u7edf\u5bf9\u8bdd\u6846\uff0c\u8bf1\u5bfc\u7528\u6237\u70b9\u51fb\u3002\u56e0\u4e3a\u957f\u5f97\u50cf\u7cfb\u7edf\u5bf9\u8bdd\u6846\uff0c\u6240\u4ee5\u7528\u6237\u5f88\u96be\u5206\u6e05\u8fd9\u4e9b\u5f39\u7a97\u7684\u6765\u6e90\u3002\u4e3a\u4e86\u8ba9\u7528\u6237\u80fd\u591f\u533a\u5206\u6e05\u695a\uff0c\u6d4f\u89c8\u5668\u5f00\u59cb\u5bf9\u5f39\u7a97\u65bd\u52a0\u9650\u5236\u3002"),(0,o.kt)("p",null,"IE \u7684\u65e9\u671f\u7248\u672c\u5b9e\u73b0\u9488\u5bf9\u5f39\u7a97\u7684\u591a\u91cd\u5b89\u5168\u9650\u5236\uff0c\u5305\u62ec\u4e0d\u5141\u8bb8\u521b\u5efa\u5f39\u7a97\u6216\u628a\u5f39\u7a97\u79fb\u51fa\u5c4f\u5e55\u4e4b\u5916\uff0c\u4ee5\u53ca\u4e0d\u5141\u8bb8\u9690\u85cf\u72b6\u6001\u680f\u7b49\u3002\u4ece IE7 \u5f00\u59cb\uff0c\u5730\u5740\u680f\u4e5f\u4e0d\u80fd\u9690\u85cf\u4e86\uff0c\u800c\u4e14\u5f39\u7a97\u9ed8\u8ba4\u662f\u4e0d\u80fd\u79fb\u52a8\u6216\u7f29\u653e\u7684\u3002Firefox 1\u7981\u7528\u4e86\u9690\u85cf\u72b6\u6001\u680f\u7684\u529f\u80fd\uff0c\u56e0\u6b64\u65e0\u8bba window.open()\u7684\u7279\u6027\u5b57\u7b26\u4e32\u662f\u4ec0\u4e48\uff0c\u90fd\u4e0d\u4f1a\u9690\u85cf\u5f39\u7a97\u7684\u72b6\u6001\u680f\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u6d4f\u89c8\u5668\u4f1a\u5728\u7528\u6237\u64cd\u4f5c\u4e0b\u624d\u5141\u8bb8\u521b\u5efa\u5f39\u7a97\u3002\u5728\u7f51\u9875\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u8c03\u7528 window.open()\u6ca1\u6709\u6548\u679c\u800c\u4e14\u8fd8\u53ef\u80fd\u5bfc\u81f4\u5411\u7528\u6237\u663e\u793a\u9519\u8bef\u3002\u5f39\u7a97\u901a\u5e38\u53ef\u80fd\u5728\u9f20\u6807\u70b9\u51fb\u6216\u6309\u4e0b\u952e\u76d8\u4e2d\u67d0\u4e2a\u952e\u7684\u60c5\u51b5\u4e0b\u624d\u80fd\u6253\u5f00\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. \u5f39\u7a97\u5c4f\u853d\u7a0b\u5e8f")),(0,o.kt)("p",null,"\u6240\u6709\u73b0\u4ee3\u6d4f\u89c8\u5668\u90fd\u5185\u7f6e\u4e86\u5c4f\u853d\u5f39\u7a97\u7684\u7a0b\u5e8f\uff0c\u56e0\u6b64\u5927\u591a\u6570\u610f\u6599\u4e4b\u5916\u7684\u5f39\u7a97\u90fd\u4f1a\u88ab\u5c4f\u853d\u3002\u5728\u6d4f\u89c8\u5668\u5c4f\u853d\u5f39\u7a97\u65f6\uff0c\u53ef\u80fd\u4f1a\u53d1\u751f\u4e00\u4e9b\u4e8b\u3002\u5982\u679c\u6d4f\u89c8\u5668\u5185\u7f6e\u7684\u5f39\u7a97\u5c4f\u853d\u7a0b\u5e8f\u963b\u6b62\u4e86\u5f39\u7a97\uff0c\u90a3\u4e48 window.open()\u5f88\u53ef\u80fd\u4f1a\u8fd4\u56de null\u3002\u6b64\u65f6\uff0c\u53ea\u8981\u68c0\u67e5\u8fd9\u4e2a\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u5c31\u53ef\u4ee5\u77e5\u9053\u5f39\u7a97\u662f\u5426\u88ab\u5c4f\u853d\u4e86\uff0c\u6bd4\u5982:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let wroxWin = window.open("http://www.wrox.com", "_blank");\nif (wroxWin == null){\n alert("The popup was blocked!");\n} \n')),(0,o.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u6269\u5c55\u6216\u5176\u4ed6\u7a0b\u5e8f\u5c4f\u853d\u5f39\u7a97\u65f6\uff0cwindow.open()\u901a\u5e38\u4f1a\u629b\u51fa\u9519\u8bef\u3002\u56e0\u6b64\u8981\u51c6\u786e\u68c0\u6d4b\u5f39\u7a97\u662f\u5426\u88ab\u5c4f\u853d\uff0c\u9664\u4e86\u68c0\u6d4b window.open()\u7684\u8fd4\u56de\u503c\uff0c\u8fd8\u8981\u628a\u5b83\u7528 try/catch \u5305\u88c5\u8d77\u6765\uff0c\u50cf\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let blocked = false;\ntry {\n let wroxWin = window.open("http://www.wrox.com", "_blank");\n if (wroxWin == null){\n    blocked = true;\n }\n} catch (ex){\n blocked = true;\n}\nif (blocked){\n alert("The popup was blocked!");\n} \n')),(0,o.kt)("p",null,"\u65e0\u8bba\u5f39\u7a97\u662f\u7528\u4ec0\u4e48\u65b9\u6cd5\u5c4f\u853d\u7684\uff0c\u4ee5\u4e0a\u4ee3\u7801\u90fd\u53ef\u4ee5\u51c6\u786e\u5224\u65ad\u8c03\u7528 window.open()\u7684\u5f39\u7a97\u662f\u5426\u88ab\u5c4f\u853d\u4e86"),(0,o.kt)("h2",{id:"\u5b9a\u65f6\u5668"},"\u5b9a\u65f6\u5668"),(0,o.kt)("p",null,"setTimeout()\u65b9\u6cd5\u901a\u5e38\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u662f\u5305\u542b JavaScript \u4ee3\u7801\u7684\u5b57\u7b26\u4e32\u6216\u8005\u4e00\u4e2a\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8981\u7b49\u5f85\u7684\u6beb\u79d2\u6570\uff0c\u800c\u4e0d\u662f\u8981\u6267\u884c\u4ee3\u7801\u7684\u786e\u5207\u65f6\u95f4\u3002\u8be5\u53c2\u6570\u53ea\u662f\u544a\u8bc9 JavaScript \u5f15\u64ce\u5728\u6307\u5b9a\u7684\u6beb\u79d2\u6570\u8fc7\u540e\u628a\u4efb\u52a1\u6dfb\u52a0\u5230\u8fd9\u4e2a\u961f\u5217\u3002\u5982\u679c\u961f\u5217\u662f\u7a7a\u7684\uff0c\u5219\u4f1a\u7acb\u5373\u6267\u884c\u8be5\u4ee3\u7801\u3002\u5982\u679c\u961f\u5217\u4e0d\u662f\u7a7a\u7684\uff0c\u5219\u4ee3\u7801\u5fc5\u987b\u7b49\u5f85\u524d\u9762\u7684\u4efb\u52a1\u6267\u884c\u5b8c\u624d\u80fd\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u8c03\u7528 setTimeout()\u65f6\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u8868\u793a\u8be5\u8d85\u65f6\u6392\u671f\u7684\u6570\u503c ID\u3002\u8fd9\u4e2a\u8d85\u65f6 ID \u662f\u88ab\u6392\u671f\u6267\u884c\u4ee3\u7801\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u53ef\u7528\u4e8e\u53d6\u6d88\u8be5\u4efb\u52a1\u3002\u8981\u53d6\u6d88\u7b49\u5f85\u4e2d\u7684\u6392\u671f\u4efb\u52a1\uff0c\u53ef\u4ee5\u8c03\u7528 clearTimeout()\u65b9\u6cd5\u5e76\u4f20\u5165\u8d85\u65f6 ID\uff0c\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// \u8bbe\u7f6e\u8d85\u65f6\u4efb\u52a1\nlet timeoutId = setTimeout(() => alert("Hello world!"), 1000);\n// \u53d6\u6d88\u8d85\u65f6\u4efb\u52a1\nclearTimeout(timeoutId);\n')),(0,o.kt)("p",null,"\u53ea\u8981\u662f\u5728\u6307\u5b9a\u65f6\u95f4\u5230\u8fbe\u4e4b\u524d\u8c03\u7528 clearTimeout()\uff0c\u5c31\u53ef\u4ee5\u53d6\u6d88\u8d85\u65f6\u4efb\u52a1\u3002\u5728\u4efb\u52a1\u6267\u884c\u540e\u518d\u8c03\u7528clearTimeout()\u6ca1\u6709\u6548\u679c\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f \u6240\u6709\u8d85\u65f6\u6267\u884c\u7684\u4ee3\u7801\uff08\u51fd\u6570\uff09\u90fd\u4f1a\u5728\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\u7684\u4e00\u4e2a\u533f\u540d\u51fd\u6570\u4e2d\u8fd0\u884c\uff0c\u56e0\u6b64\u51fd\n\u6570\u4e2d\u7684 this \u503c\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u59cb\u7ec8\u6307\u5411 window\uff0c\u800c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u662f undefined\u3002\u5982\u679c\n\u7ed9 setTimeout()\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\uff0c\u90a3\u4e48 this \u4f1a\u4fdd\u7559\u4e3a\u5b9a\u4e49\u5b83\u65f6\u6240\u5728\u7684\u8bcd\u6c47\u4f5c\u7528\u57df\u3002"))),(0,o.kt)("p",null,"setInterval()\u4e0e setTimeout()\u7684\u4f7f\u7528\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u53ea\u4e0d\u8fc7\u6307\u5b9a\u7684\u4efb\u52a1\u4f1a\u6bcf\u9694\u6307\u5b9a\u65f6\u95f4\u5c31\u6267\u884c\u4e00\u6b21\uff0c\u76f4\u5230\u53d6\u6d88\u5faa\u73af\u5b9a\u65f6\u6216\u8005\u9875\u9762\u5378\u8f7d\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6ce8\u610f \u8fd9\u91cc\u7684\u5173\u952e\u70b9\u662f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4e5f\u5c31\u662f\u95f4\u9694\u65f6\u95f4\uff0c\u6307\u7684\u662f\u5411\u961f\u5217\u6dfb\u52a0\u65b0\u4efb\u52a1\u4e4b\u524d\u7b49\n\u5f85\u7684\u65f6\u95f4\u3002\u6bd4\u5982\uff0c\u8c03\u7528 setInterval()\u7684\u65f6\u95f4\u4e3a 01:00:00\uff0c\u95f4\u9694\u65f6\u95f4\u4e3a 3000 \u6beb\u79d2\u3002\u8fd9\u610f\n\u5473\u7740 01:00:03 \u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u628a\u4efb\u52a1\u6dfb\u52a0\u5230\u6267\u884c\u961f\u5217\u3002\u6d4f\u89c8\u5668\u4e0d\u5173\u5fc3\u8fd9\u4e2a\u4efb\u52a1\u4ec0\u4e48\u65f6\u5019\u6267\u884c\n\u6216\u8005\u6267\u884c\u8981\u82b1\u591a\u957f\u65f6\u95f4\u3002\u56e0\u6b64\uff0c\u5230\u4e86 01:00:06\uff0c\u5b83\u4f1a\u518d\u5411\u961f\u5217\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u4efb\u52a1\u3002\u7531\u6b64\u53ef\u770b\n\u51fa\uff0c\u6267\u884c\u65f6\u95f4\u77ed\u3001\u975e\u963b\u585e\u7684\u56de\u8c03\u51fd\u6570\u6bd4\u8f83\u9002\u5408 setInterval()\u3002"))),(0,o.kt)("p",null,"setInterval()\u65b9\u6cd5\u4e5f\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5faa\u73af\u5b9a\u65f6 ID\uff0c\u53ef\u4ee5\u7528\u4e8e\u5728\u672a\u6765\u67d0\u4e2a\u65f6\u95f4\u70b9\u4e0a\u53d6\u6d88\u5faa\u73af\u5b9a\u65f6\u3002\u76f8\u5bf9\u4e8e setTimeout()\u800c\u8a00\uff0c\u53d6\u6d88\u5b9a\u65f6\u7684\u80fd\u529b\u5bf9 setInterval()\u66f4\u52a0\u91cd\u8981\u3002\u6bd5\u7adf\uff0c\u5982\u679c\u4e00\u76f4\u4e0d\u7ba1\u5b83\uff0c\u90a3\u4e48\u5b9a\u65f6\u4efb\u52a1\u4f1a\u4e00\u76f4\u6267\u884c\u5230\u9875\u9762\u5378\u8f7d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let num = 0, intervalId = null;\nlet max = 10;\nlet incrementNumber = function() {\n num++;\n // \u5982\u679c\u8fbe\u5230\u6700\u5927\u503c\uff0c\u5219\u53d6\u6d88\u6240\u6709\u672a\u6267\u884c\u7684\u4efb\u52a1\n if (num == max) {\n clearInterval(intervalId);\n alert("Done");\n }\n}\nintervalId = setInterval(incrementNumber, 500);\n')))}s.isMDXComponent=!0},3254:function(e,n,t){n.Z=t.p+"assets/images/windowopen-80cd6ba73c43fb02ce167dbf7414238f.JPG"},2396:function(e,n,t){n.Z=t.p+"assets/images/windowopen2-82816b31e681eb7f41e0e6af2eb7f130.JPG"}}]);