"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5655],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return t?a.createElement(k,l(l({ref:n},d),{},{components:t})):a.createElement(k,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},98358:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],o={slug:"vue-res",title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-Vue\u54cd\u5e94\u5f0f\u539f\u7406",sidebar_position:18},p=void 0,u={unversionedId:"interview/vue6",id:"interview/vue6",title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-Vue\u54cd\u5e94\u5f0f\u539f\u7406",description:"\u6570\u636e\u9a71\u52a8",source:"@site/docs/interview/vue6.md",sourceDirName:"interview",slug:"/interview/vue-res",permalink:"/docs/interview/vue-res",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/interview/vue6.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{slug:"vue-res",title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-Vue\u54cd\u5e94\u5f0f\u539f\u7406",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-VueRouter",permalink:"/docs/interview/vue-router"},next:{title:"[\u9762\u8bd5\u9898] Vue\u7cbe\u8bb2-\u865a\u62dfDOM",permalink:"/docs/interview/vue-virtual"}},d=[{value:"\u6570\u636e\u9a71\u52a8",id:"\u6570\u636e\u9a71\u52a8",children:[],level:2},{value:"\u54cd\u5e94\u5f0f\u7684\u6838\u5fc3\u539f\u7406",id:"\u54cd\u5e94\u5f0f\u7684\u6838\u5fc3\u539f\u7406",children:[{value:"<code>Object.defineProperty</code>\u57fa\u672c\u4f7f\u7528",id:"objectdefineproperty\u57fa\u672c\u4f7f\u7528",children:[],level:3},{value:"<code>Object.defineProperty</code>\u57fa\u672c\u4f7f\u7528(\u4e8c)",id:"objectdefineproperty\u57fa\u672c\u4f7f\u7528\u4e8c",children:[],level:3}],level:2},{value:"<code>Vue3</code>\u54cd\u5e94\u5f0f\u539f\u7406",id:"vue3\u54cd\u5e94\u5f0f\u539f\u7406",children:[],level:2},{value:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",id:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f",children:[],level:2},{value:"\u89c2\u5bdf\u8005\u6a21\u5f0f",id:"\u89c2\u5bdf\u8005\u6a21\u5f0f",children:[{value:"\u89c2\u5bdf\u8005\u6a21\u5f0f\u548c\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u7684\u533a\u522b",id:"\u89c2\u5bdf\u8005\u6a21\u5f0f\u548c\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u7684\u533a\u522b",children:[],level:3}],level:2}],s={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6570\u636e\u9a71\u52a8"},"\u6570\u636e\u9a71\u52a8"),(0,i.kt)("p",null,"\u5728\u5b9e\u73b0\u6574\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"\u54cd\u5e94\u5f0f\u4ee3\u7801\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u4e86\u89e3\u51e0\u4e2a\u6982\u5ff5\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u4e2a\uff1a\u6570\u636e\u9a71\u52a8"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u4e2a\uff1a\u54cd\u5e94\u5f0f\u7684\u6838\u5fc3\u539f\u7406"),(0,i.kt)("p",null,"\u7b2c\u4e09\u4e2a\uff1a\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u548c\u89c2\u5bdf\u8fd9\u6a21\u5f0f"),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e0b\u6570\u636e\u9a71\u52a8\u7684\u5185\u5bb9\uff1a"),(0,i.kt)("p",null,"\u6570\u636e\u54cd\u5e94\u5f0f\uff0c\u53cc\u5411\u7ed1\u5b9a\uff0c\u6570\u636e\u9a71\u52a8\uff08\u6211\u4eec\u7ecf\u5e38\u770b\u5230\u8fd9\u51e0\u4e2a\u8bcd\uff09"),(0,i.kt)("p",null,"\u6570\u636e\u54cd\u5e94\u5f0f\uff1a\u6570\u636e\u6a21\u578b\u4ec5\u4ec5\u662f\u666e\u901a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript"),"\u5bf9\u8c61\uff0c\u800c\u5f53\u6211\u4eec\u4fee\u6539\u6570\u636e\u65f6\uff0c\u89c6\u56fe\u4f1a\u8fdb\u884c\u66f4\u65b0\uff0c\u907f\u514d\u4e86\u9891\u7e41\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"DOM"),"\u64cd\u4f5c\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u8fd9\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"Jquery"),"\u4e0d\u4e00\u6837\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Jquery"),"\u662f\u9891\u7e41\u7684\u64cd\u4f5c",(0,i.kt)("inlineCode",{parentName:"p"},"Dom")),(0,i.kt)("p",null,"\u53cc\u5411\u7ed1\u5b9a\uff1a"),(0,i.kt)("p",null,"\u6570\u636e\u6539\u53d8\uff0c\u89c6\u56fe\u6539\u53d8\uff0c\u89c6\u56fe\u6539\u53d8\uff0c\u6570\u636e\u4e5f\u968f\u4e4b\u6539\u53d8( \u901a\u8fc7\u8fd9\u53e5\u8bdd\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5728\u53cc\u5411\u7ed1\u5b9a\u4e2d\u662f\u5305\u542b\u4e86\u6570\u636e\u54cd\u5e94\u5f0f\u7684\u5185\u5bb9)"),(0,i.kt)("p",null,"\u200b \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"v-model")," \u5728\u8868\u5355\u5143\u7d20\u4e0a\u521b\u5efa\u53cc\u5411\u6570\u636e\u7ed1\u5b9a"),(0,i.kt)("p",null,"\u6570\u636e\u9a71\u52a8\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"\u6700\u72ec\u7279\u7684\u7279\u6027\u4e4b\u4e00"),(0,i.kt)("p",null,"\u200b \u5f00\u53d1\u8fc7\u7a0b\u4e2d\u4ec5\u4ec5\u9700\u8981\u5173\u6ce8\u6570\u636e\u672c\u8eab\uff0c\u4e0d\u9700\u8981\u5173\u5fc3\u6570\u636e\u662f\u5982\u4f55\u6e32\u67d3\u5230\u89c6\u56fe\u4e2d\u7684\u3002\u4e3b\u6d41\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"MVVM"),"\u6846\u67b6\u90fd\u5df2\u7ecf\u5b9e\u73b0\u4e86\u6570\u636e\u54cd\u5e94\u5f0f\u4e0e\u53cc\u5411\u7ed1\u5b9a\uff0c\u6240\u4ee5\u53ef\u4ee5\u5c06\u6570\u636e\u7ed1\u5b9a\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"DOM"),"\u4e0a\u3002"),(0,i.kt)("h2",{id:"\u54cd\u5e94\u5f0f\u7684\u6838\u5fc3\u539f\u7406"},"\u54cd\u5e94\u5f0f\u7684\u6838\u5fc3\u539f\u7406"),(0,i.kt)("p",null,"\u5173\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"Vue2.x"),"\u7684\u54cd\u5e94\u5f0f\u539f\u7406\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u4e5f\u6709\u4ecb\u7ecd\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://cn.vuejs.org/v2/guide/reactivity.html")),(0,i.kt)("p",null,"\u5728\u8be5\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u6ce8\u610f\u5982\u4e0b\u4e00\u6bb5\u5185\u5bb9\uff1a"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f53\u4f60\u628a\u4e00\u4e2a\u666e\u901a\u7684 JavaScript \u5bf9\u8c61\u4f20\u5165 Vue \u5b9e\u4f8b\u4f5c\u4e3a data \u9009\u9879\uff0cVue \u5c06\u904d\u5386\u6b64\u5bf9\u8c61\u6240\u6709\u7684 property\uff0c\u5e76\u4f7f\u7528 Object.defineProperty \u628a\u8fd9\u4e9b property \u5168\u90e8\u8f6c\u4e3a getter/setter\u3002Object.defineProperty \u662f ES5 \u4e2d\u4e00\u4e2a\u65e0\u6cd5 \u964d\u7ea7 \u7684\u7279\u6027\uff0c\u8fd9\u4e5f\u5c31\u662f Vue \u4e0d\u652f\u6301 IE8 \u4ee5\u53ca\u66f4\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\u7684\u539f\u56e0\u3002"))),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u6587\u5b57\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Vue2.x"),"\u4e2d\u54cd\u5e94\u5f0f\u7684\u5b9e\u73b0\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Object.defineProperty"),"\u6765\u5b8c\u6210\u7684\uff0c\u6ce8\u610f\u8be5\u5c5e\u6027\u65e0\u6cd5\u964d\u7ea7(shim)\u5904\u7406\uff0c\u6240\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"\u4e0d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"IE8"),"\u4ee5\u53ca\u66f4\u4f4e\u7248\u672c\u7684\u6d4f\u89c8\u5668\u7684\u539f\u56e0\u3002"),(0,i.kt)("h3",{id:"objectdefineproperty\u57fa\u672c\u4f7f\u7528"},(0,i.kt)("inlineCode",{parentName:"h3"},"Object.defineProperty"),"\u57fa\u672c\u4f7f\u7528"),(0,i.kt)("p",null,"\u6765\u770b\u4e00\u4e0b\u5982\u4f55\u5c06\u5c5e\u6027\u901a\u8fc7 defineProperty \u65b9\u6cd5\u8f6c\u6362\u6210\u54cd\u5e94\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  <body>\n    <div id="app"></div>\n    <script>\n      // \u6a21\u62dfdata\u9009\u9879\n      let data = {\n        msg: "hello",\n      };\n      // \u6a21\u62dfvue\u5b9e\u4f8b\n      let vm = {};\n\n      // \u76f8\u5f53\u4e8e\u5728\u8fd9\u91cc\u505a\u4e86\u6570\u636e\u52ab\u6301\u7684\u64cd\u4f5c, \u5f53\u6211\u4eec\u53bb\u8bbf\u95ee\u6216\u8005\u8bf4\u8bbe\u7f6evm\u5bf9\u8c61\u5f53\u4e2d\u6210\u5458\u7684\u65f6\u5019, \u6211\u4eec\u8981\u505a\u4e00\u4e9b\u5e72\u9884\u6027\u7684\u64cd\u4f5c,\n      // msg\u53ef\u4ee5\u60f3\u8c61\u6210data\u5bf9\u8c61\u4e2d\u7684\u4e00\u4e2a\u5c5e\u6027\n      Object.defineProperty(vm, "msg", {\n        enumerate: true, // \u53ef\u679a\u4e3e\n        configurable: true, // \u53ef\u4ee5\u505a\u914d\u7f6e \u6bd4\u5982\u5220\u9664\u64cd\u4f5c\n        // \u6700\u91cd\u8981\u7684\u8fd8\u8981\u52a0\u4e0aget\u548cset\u65b9\u6cd5\n        get() {\n          console.log("get", data.msg);\n          return data.msg;\n        },\n        set(newValue) {\n          console.log("set", newValue);\n          if (newValue === data.msg) {\n            return;\n          }\n          data.msg = newValue;\n          document.querySelector("#app").textContent = data.msg;\n        },\n      });\n      vm.msg = "abc";\n      console.log(vm.msg);\n    <\/script>\n  </body>\n')),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801, \u5b9e\u73b0\u4e86\u53ea\u8981\u5bf9 vm \u4e2d\u7684 msg \u5c5e\u6027\u503c\u505a\u64cd\u4f5c\u7684\u8bdd, \u6bd4\u5982\u8bfb\u53d6\u6216\u4fee\u6539, \u90fd\u4f1a\u6267\u884c defineProperty \u91cc\u7684\u5185\u5bb9"),(0,i.kt)("h3",{id:"objectdefineproperty\u57fa\u672c\u4f7f\u7528\u4e8c"},(0,i.kt)("inlineCode",{parentName:"h3"},"Object.defineProperty"),"\u57fa\u672c\u4f7f\u7528(\u4e8c)"),(0,i.kt)("p",null,"\u4e0a\u9762\u4ec5\u4ec5\u662f\u5c06\u4e00\u4e2a\u5c5e\u6027, \u8f6c\u6362\u6210\u4e86 getter \u548c setter \u7684\u5f62\u5f0f, \u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u4e2d\u6709\u591a\u4e2a\u5c5e\u6027\u9700\u8981\u8f6c\u6362, \u53ef\u4ee5\u901a\u8fc7\u5faa\u73af\u904d\u5386\u7684\u5f62\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  <body>\n    <div id="app"></div>\n    <script>\n      // \u6a21\u62dfdata\u9009\u9879\n      let data = {\n        msg: "hello",\n        count: 10,\n      };\n      let vm = {};\n      ProxyData(data);\n      function ProxyData(data) {\n        Object.keys(data).forEach((key) => {\n          Object.defineProperty(vm, key, {\n            enumerable: true,\n            configurable: true,\n            get() {\n              console.log("get", key, data[key]);\n              return data[key];\n            },\n            set(newValue) {\n              console.log("set", key, newValue);\n              if (newValue === data[key]) {\n                return;\n              }\n              data[key] = newValue;\n              document.querySelector("#app").textContent = data[key];\n            },\n          });\n        });\n      }\n      vm.msg = "hello world";\n      console.log(vm.msg);\n    <\/script>\n  </body>\n')),(0,i.kt)("h2",{id:"vue3\u54cd\u5e94\u5f0f\u539f\u7406"},(0,i.kt)("inlineCode",{parentName:"h2"},"Vue3"),"\u54cd\u5e94\u5f0f\u539f\u7406"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vue3"),"\u7684\u54cd\u5e94\u5f0f\u539f\u7406\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u6765\u5b8c\u6210\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u76f4\u63a5\u76d1\u542c\u5bf9\u8c61\uff0c\u800c\u975e\u5c5e\u6027\uff0c\u6240\u4ee5\u5c06\u591a\u4e2a\u5c5e\u6027\u8f6c\u6362\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"getter/setter"),"\u7684\u65f6\u5019\uff0c\u4e0d\u9700\u8981\u4f7f\u7528\u5faa\u73af\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"ES6"),"\u8bfe\u7a0b\u4e2d\u65b0\u589e\u7684\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"IE11"),"\u4e0d\u652f\u6301"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5b9e\u73b0\u54cd\u5e94\u5f0f\u7684\u57fa\u672c\u4ee3\u7801\u5982\u4e0b(\u8be5\u4ee3\u7801\u7684\u529f\u80fd\u4e0e\u4e0a\u9762\u6240\u8bb2\u89e3\u7684\u662f\u4e00\u6837\u7684)\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  <body>\n    <div id="app"></div>\n    <script>\n      let data = {\n        msg: "hello",\n        count: 0,\n      };\n      // \u4e3adata\u5bf9\u8c61\u521b\u5efa\u4ee3\u7406\u5bf9\u8c61-vm, \u4ee5\u540e\u90fd\u662f\u901a\u8fc7\u4ee3\u7406\u5bf9\u8c61vm\u6765\u64cd\u4f5cdata\u4e2d\u7684msg\u548ccount\n      // Proxy\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e2a\u5bf9\u8c61, \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e2d\u8981\u8bbe\u7f6egetter\u548csetter\n      // get\u65b9\u6cd5\u7b2c\u4e00\u4e2a\u53c2\u6570target\u8868\u793a\u6240\u8981\u4ee3\u7406\u7684\u5bf9\u8c61, \u5728\u8fd9\u91cc\u5c31\u662fdata\n      // \u7b2c\u4e8c\u4e2a\u53c2\u6570key\u8868\u793a\u6240\u4ee3\u7406\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\n      let vm = new Proxy(data, {\n        get(target, key) {\n          console.log("get key:", key, target[key]);\n          return target[key];\n        },\n        set(target, key, newValue) {\n          console.log("set key:", key, newValue);\n          if (target[key] === newValue) {\n            return;\n          }\n          target[key] = newValue;\n          document.querySelector("#app").textContent = target[key];\n        },\n      });\n      vm.msg = "\u54c8\u54c8";\n      console.log(vm.msg);\n    <\/script>\n  </body>\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u4ee3\u7801\u6211\u4eec\u53d1\u73b0\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u7684\u4ee3\u7801\u662f\u7ed9\u5bf9\u8c61\u4e2d\u6240\u6709\u5c5e\u6027\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"getter/setter"),",\u800c\u4e0d\u9700\u8981\u901a\u8fc7\u5faa\u73af\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\uff0c\u6240\u4ee5\u4ee3\u7801\u66f4\u52a0\u7684\u7b80\u6d01\u3002"),(0,i.kt)("h2",{id:"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"},"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"),(0,i.kt)("p",null,"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff1a\u8ba2\u9605\u8005\uff0c\u53d1\u5e03\u8005\uff0c\u4fe1\u53f7\u4e2d\u5fc3"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'\u6211\u4eec\u5047\u5b9a\uff0c\u5b58\u5728\u4e00\u4e2a\u201c\u4fe1\u53f7\u4e2d\u5fc3\u201d\uff0c\u67d0\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6210\uff0c\u5c31\u5411\u4fe1\u53f7\u4e2d\u5fc3"\u53d1\u5e03"(publish)\u4e00\u4e2a\u4fe1\u53f7\uff0c\u5176\u5b83\u4efb\u52a1\u53ef\u4ee5\u5411\u4fe1\u53f7\u4e2d\u5fc3\u201c\u8ba2\u9605\u201d(subscribe)\u8fd9\u4e2a\u4fe1\u53f7\uff0c\u4ece\u800c\u77e5\u9053\u4ec0\u4e48\u65f6\u5019\u81ea\u5df1\u53ef\u4ee5\u5f00\u59cb\u6267\u884c\u3002\u8fd9\u5c31\u53eb\u505a"\u53d1\u5e03/\u8ba2\u9605\u6a21\u5f0f"(publish-subscribe pattern)'))),(0,i.kt)("p",null,"\u5bb6\u957f\u5411\u5b66\u751f\u6240\u5728\u7684\u73ed\u7ea7\u8ba2\u9605\u4e86\u83b7\u53d6\u5b66\u751f\u8003\u8bd5\u6210\u7ee9\u7684\u4e8b\u4ef6\uff0c\u5f53\u8001\u5e08\u516c\u5e03\u5b66\u751f\u7684\u6210\u7ee9\u540e\uff0c\u5c31\u4f1a\u81ea\u52a8\u901a\u77e5\u5b66\u751f\u7684\u5bb6\u957f\u3002"),(0,i.kt)("p",null,"\u5728\u6574\u4e2a\u6848\u4f8b\u4e2d\uff0c\u5b66\u751f\u6240\u5728\u7684\u73ed\u7ea7\u4e3a\u4fe1\u53f7\u4e2d\u5fc3\uff0c\u8001\u5e08\u4e3a\u53d1\u5e03\u8005\uff0c\u5bb6\u957f\u4e3a\u8ba2\u9605\u8005"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vue")," \u7684\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5c31\u662f\u57fa\u4e8e\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u6765\u5b9e\u73b0\u7684\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"\u4e2d\u5144\u5f1f\u7ec4\u4ef6\u901a\u4fe1\u8fc7\u7a0b\uff0c\u6765\u7406\u89e3\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// eventBus.js\n// \u4e8b\u4ef6\u4e2d\u5fc3\nlet eventHub=new Vue()\n//ComponentA.vue\naddTodo:function(){\n    //\u53d1\u5e03\u6d88\u606f(\u4e8b\u4ef6)\n    eventHub.$emit('add-todo',{text:this.newTodoText})\n    this.newTodoText=''\n}\n//ComponentB.vue\n//\u8ba2\u9605\u8005\ncreated:function(){\n    //\u8ba2\u9605\u6d88\u606f(\u4e8b\u4ef6)\n    eventHub.$on('add-todo',this.addTodo)\n}\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u7406\u89e3\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u4e2d\u7684\u6838\u5fc3\u6982\u5ff5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f</title>\n  </head>\n  <body>\n    <script>\n      class EventEmitter {\n        constructor() {\n          // {\'click\':[fn1,fn2],\'change\':[fn]}\n          // \u5b58\u50a8\u4e8b\u4ef6\u4e0e\u5904\u7406\u51fd\u6570\u7684\u5bf9\u5e94\u5173\u7cfb\n          this.subs = {};\n        }\n        //\u6ce8\u518c\u4e8b\u4ef6\n        //\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u4e8b\u4ef6\u540d\u79f0\n        // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5904\u7406\u51fd\u6570\n        // \u5c06\u5bf9\u5e94\u7684\u5904\u7406\u51fd\u6570\u6dfb\u52a0\u5230subs\u5bf9\u8c61\u4e2d\n        $on(eventType, fn) {\n          //\u5224\u65ad\u5bf9\u5e94\u7684eventType\u662f\u5426\u6709\u76f8\u5e94\u7684\u5904\u7406\u51fd\u6570\uff0c\u5982\u679c\u6709\uff0c\u76f4\u63a5\u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002\n          if (!this.subs[eventType]) {\n            this.subs[eventType] = [];\n          }\n          this.subs[eventType].push(fn);\n        }\n        //\u89e6\u53d1\u4e8b\u4ef6\n        $emit(eventType) {\n          if (this.subs[eventType]) {\n            this.subs[eventType].forEach((handler) => {\n              handler();\n            });\n          }\n        }\n      }\n      //\u6d4b\u8bd5\u4ee3\u7801\n      let em = new EventEmitter();\n      em.$on("click", () => {\n        console.log("click1");\n      });\n      em.$on("click", () => {\n        console.log("click2");\n      });\n      em.$emit("click");\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("h2",{id:"\u89c2\u5bdf\u8005\u6a21\u5f0f"},"\u89c2\u5bdf\u8005\u6a21\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vue"),"\u7684\u54cd\u5e94\u5f0f\u673a\u5236\u4f7f\u7528\u4e86\u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u6240\u4ee5\u6211\u4eec\u9996\u5148\u8981\u5148\u4e86\u89e3\u4e00\u4e0b\u89c2\u5bdf\u8005\u6a21\u5f0f"),(0,i.kt)("h3",{id:"\u89c2\u5bdf\u8005\u6a21\u5f0f\u548c\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u7684\u533a\u522b"},"\u89c2\u5bdf\u8005\u6a21\u5f0f\u548c\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u7684\u533a\u522b"),(0,i.kt)("p",null,"\u89c2\u5bdf\u8005\u6a21\u5f0f\u4e0e\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u7684\u533a\u522b\u662f\uff0c\u89c2\u5bdf\u8005\u6a21\u5f0f\u4e2d\u6ca1\u6709\u4e8b\u4ef6\u4e2d\u5fc3\uff0c\u53ea\u6709\u53d1\u5e03\u8005\u4e0e\u8ba2\u9605\u8005\uff0c\u5e76\u4e14\u53d1\u5e03\u8005\u9700\u8981\u77e5\u9053\u8ba2\u9605\u8005\u7684\u5b58\u5728\u3002"),(0,i.kt)("p",null,"\u89c2\u5bdf\u8005(\u8ba2\u9605\u8005)---",(0,i.kt)("inlineCode",{parentName:"p"},"Watcher")),(0,i.kt)("p",null,"\u200b ",(0,i.kt)("inlineCode",{parentName:"p"},"update():")," \u5f53\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u5177\u4f53\u8981\u505a\u7684\u4e8b\u60c5\u3002"),(0,i.kt)("p",null,"\u76ee\u6807(\u53d1\u5e03\u8005)--",(0,i.kt)("inlineCode",{parentName:"p"},"Dep")),(0,i.kt)("p",null,"\u200b ",(0,i.kt)("inlineCode",{parentName:"p"},"subs")," \u6570\u7ec4\uff1a\u5b58\u50a8\u6240\u6709\u7684\u89c2\u5bdf\u8005"),(0,i.kt)("p",null,"\u200b ",(0,i.kt)("inlineCode",{parentName:"p"},"addSub()")," \u6dfb\u52a0\u89c2\u5bdf\u8005\uff0c\u5c06\u5176\u4fdd\u5b58\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"subs"),"\u6570\u7ec4\u4e2d"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"notify()"),"\uff1a \u5f53\u4e8b\u4ef6\u53d1\u751f\u540e\uff0c\u8c03\u7528\u6240\u6709\u89c2\u5bdf\u8005\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"update()")," \u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\u89c2\u5bdf\u8005\u6a21\u5f0f</title>\n  </head>\n  <body>\n    <script>\n      //\u53d1\u5e03\u8005\n      class Dep {\n        constructor() {\n          //\u8bb0\u5f55\u6240\u6709\u7684\u8ba2\u9605\u8005\n          this.subs = [];\n        }\n        //\u6dfb\u52a0\u8ba2\u9605\u8005\n        addSub(sub) {\n          //\u8ba2\u9605\u8005\u4e2d\u5fc5\u987b\u6709update\u65b9\u6cd5\n          if (sub && sub.update) {\n            this.subs.push(sub);\n          }\n        }\n        //\u53d1\u5e03\u901a\u77e5\n        notify() {\n          //\u904d\u5386subs\u6570\u7ec4\uff0c\u8c03\u7528\u6bcf\u4e2a\u8ba2\u9605\u8005\u4e2d\u7684update\u65b9\u6cd5\n          this.subs.forEach((sub) => {\n            sub.update();\n          });\n        }\n      }\n      // \u8ba2\u9605\u8005--\u89c2\u5bdf\u8005\n      class Watcher {\n        //\u5fc5\u987b\u6709\u4e00update\u65b9\u6cd5,\u5f53\u4e8b\u4ef6\u53d1\u751f\u540e\uff0c\u5177\u4f53\u8981\u505a\u7684\u4e8b\u60c5\n        update() {\n          console.log("update something");\n        }\n      }\n      //\u6d4b\u8bd5\n      let dep = new Dep();\n      let watcher = new Watcher();\n      dep.addSub(watcher);\n      dep.notify();\n    <\/script>\n  </body>\n</html>\n\n')),(0,i.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u770b\u4e00\u4e0b\u89c2\u5bdf\u8005\u6a21\u5f0f\u4e0e\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\u7684\u533a\u522b\u3002"),(0,i.kt)("p",null,"\u89c2\u5bdf\u8005\u6a21\u5f0f\uff1a\u662f\u7531\u5177\u4f53\u76ee\u6807\u8c03\u5ea6\u7684\uff0c\u6bd4\u5982\u5f53\u4e8b\u4ef6\u89e6\u53d1\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Dep"),"\u5c31\u4f1a\u53bb\u8c03\u7528\u89c2\u5bdf\u8005\u7684\u65b9\u6cd5\uff0c\u6240\u4ee5\u89c2\u5bdf\u8005\u6a21\u5f0f\u7684\u8ba2\u9605\u8005\u4e0e\u53d1\u5e03\u8005\u4e4b\u95f4\u662f\u5b58\u5728\u4f9d\u8d56\u7684\u3002"),(0,i.kt)("p",null,"\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff1a\u7531\u7edf\u4e00\u8c03\u5ea6\u4e2d\u5fc3\u8c03\u7528\uff0c\u56e0\u6b64\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u4e0d\u9700\u8981\u77e5\u9053\u5bf9\u65b9\u7684\u5b58\u5728\u3002"))}c.isMDXComponent=!0}}]);