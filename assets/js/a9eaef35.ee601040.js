"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4146],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=o,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7928:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={slug:"obj",title:"[\u9762\u8bd5\u9898] JS-\u5bf9\u8c61\u5e38\u89c1\u95ee\u9898",sidebar_position:10},p=void 0,c={unversionedId:"interview/obj",id:"interview/obj",title:"[\u9762\u8bd5\u9898] JS-\u5bf9\u8c61\u5e38\u89c1\u95ee\u9898",description:"1\u3001\u5bf9\u8c61\u7684\u5c5e\u6027",source:"@site/docs/interview/obj.md",sourceDirName:"interview",slug:"/interview/obj",permalink:"/docs/interview/obj",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/interview/obj.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{slug:"obj",title:"[\u9762\u8bd5\u9898] JS-\u5bf9\u8c61\u5e38\u89c1\u95ee\u9898",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"[\u9762\u8bd5\u9898] JS-\u51fd\u6570",permalink:"/docs/interview/function"},next:{title:"[JS] \u5173\u4e8e\u4ec0\u4e48\u662fJavascript",permalink:"/docs/javascript/ecma"}},s=[{value:"1\u3001\u5bf9\u8c61\u7684\u5c5e\u6027",id:"1\u5bf9\u8c61\u7684\u5c5e\u6027",children:[],level:2}],u={toc:s};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u5bf9\u8c61\u7684\u5c5e\u6027"},"1\u3001\u5bf9\u8c61\u7684\u5c5e\u6027"),(0,a.kt)("p",null,"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u975e\u5e38\u7684\u7b80\u5355\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  userName: "zhangsan",\n};\n')),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u4fee\u6539\u5c5e\u6027\u7684\u7279\u6027\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty()"),"\u6765\u5b8c\u6210\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  userName: "zhangsan",\n};\nObject.defineProperty(person, "userName", {\n  writable: false,\n});\nperson.userName = "lisi"; //\u65e0\u6cd5\u5b8c\u6210\u503c\u7684\u4fee\u6539\nconsole.log(person.userName); //zhangsan\n')),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"getter()"),"\u51fd\u6570\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"setter( )"),"\u51fd\u6570\uff0c\u8fd9\u4e24\u4e2a\u51fd\u6570\u53ef\u4ee5\u5b9e\u73b0\u5bf9\u8c61\u7684\u79c1\u6709\u5c5e\u6027\uff0c\u79c1\u6709\u5c5e\u6027\u4e0d\u5bf9\u5916\u516c\u5e03\uff0c\u5982\u679c\u60f3\u8981\u5bf9\u79c1\u6709\u5c5e\u6027\u8fdb\u884c\u8bfb\u53d6\u548c\u5199\u5165\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"getter()"),"\u51fd\u6570\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"setter( )"),"\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  _age: 20, // _age\u8868\u793a\u79c1\u6709\u5c5e\u6027\n};\nObject.defineProperty(person, "age", {\n  get: function () {\n    return this._age;\n  },\n  //\u5728\u7ed9\u79c1\u6709\u5c5e\u6027\u8d4b\u503c\u7684\u65f6\u5019\uff0c\u5b8c\u6210\u5bf9\u5e94\u7684\u6821\u9a8c\u529f\u80fd\n  set: function (value) {\n    if (value >= 18) {\n      this._age = value;\n      console.log("\u53ef\u4ee5\u6d4f\u89c8\u8be5\u7f51\u7ad9");\n    } else {\n      console.log("\u4e0d\u53ef\u4ee5\u6d4f\u89c8\u8be5\u7f51\u7ad9");\n    }\n  },\n});\nconsole.log(person.age); //20\nperson.age = 12;\nconsole.log(person.age); //20\nperson.age = 30;\nconsole.log(person.age); // 30\n')),(0,a.kt)("p",null,"\u5173\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("inlineCode",{parentName:"p"},"vue"),"\u54cd\u5e94\u5f0f\u539f\u7406\u7684\u8bfe\u7a0b\u3002"))}f.isMDXComponent=!0}}]);