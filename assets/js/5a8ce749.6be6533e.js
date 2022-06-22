"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,k=u["".concat(a,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(k,s(s({ref:t},c),{},{components:r})):n.createElement(k,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=u;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56307:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var n=r(87462),o=(r(67294),r(3905));const l={title:"[JS] \u671f\u7ea6\u4e0e\u5f02\u6b65\u51fd\u6570",sidebar_position:9},s=void 0,i={unversionedId:"javascript/Promise",id:"javascript/Promise",title:"[JS] \u671f\u7ea6\u4e0e\u5f02\u6b65\u51fd\u6570",description:"\u6458\u8bb0 -- \u9a6c\u7279 2020\u7248 \u7b2c\u5341\u4e00\u7ae0",source:"@site/docs/javascript/Promise.md",sourceDirName:"javascript",slug:"/javascript/Promise",permalink:"/docs/javascript/Promise",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/javascript/Promise.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"[JS] \u671f\u7ea6\u4e0e\u5f02\u6b65\u51fd\u6570",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"[JS] URL \u7f16\u7801\u65b9\u6cd5",permalink:"/docs/javascript/url"},next:{title:"[JS] BOM",permalink:"/docs/javascript/BOM"}},a=[{value:"<code>\u540c\u6b65\u4e0e\u5f02\u6b65</code>",id:"\u540c\u6b65\u4e0e\u5f02\u6b65",children:[{value:"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f",id:"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f",children:[{value:"\u56de\u8c03\u5730\u72f1",id:"\u56de\u8c03\u5730\u72f1",children:[],level:4}],level:3}],level:2},{value:"Promise \u671f\u7ea6",id:"promise-\u671f\u7ea6",children:[{value:"\u671f\u7ea6\u57fa\u7840",id:"\u671f\u7ea6\u57fa\u7840",children:[],level:3}],level:2}],p={toc:a};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u6458\u8bb0<Javascript\u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1> -- \u9a6c\u7279 2020\u7248 \u7b2c\u5341\u4e00\u7ae0")),(0,o.kt)("h2",{id:"\u540c\u6b65\u4e0e\u5f02\u6b65"},(0,o.kt)("inlineCode",{parentName:"h2"},"\u540c\u6b65\u4e0e\u5f02\u6b65")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u540c\u6b65\u884c\u4e3a"),"\u5bf9\u5e94\u5185\u5b58\u4e2d\u987a\u5e8f\u6267\u884c\u7684\u5904\u7406\u5668\u6307\u4ee4\u3002\u6bcf\u6761\u6307\u4ee4\u90fd\u4f1a\u4e25\u683c\u6309\u7167\u5b83\u4eec\u51fa\u73b0\u7684\u987a\u5e8f\u6765\u6267\u884c\uff0c\u800c\u6bcf\u6761\u6307\u4ee4\u6267\u884c\u540e\u4e5f\u80fd\u7acb\u5373\u83b7\u5f97\u5b58\u50a8\u5728\u7cfb\u7edf\u672c\u5730\uff08\u5982\u5bc4\u5b58\u5668\u6216\u7cfb\u7edf\u5185\u5b58\uff09\u7684\u4fe1\u606f\u3002\u8fd9\u6837\u7684\u6267\u884c\u6d41\u7a0b\u5bb9\u6613\u5206\u6790\u7a0b\u5e8f\u5728\u6267\u884c\u5230\u4ee3\u7801\u4efb\u610f\u4f4d\u7f6e\u65f6\u7684\u72b6\u6001\uff08\u6bd4\u5982\u53d8\u91cf\u7684\u503c\uff09\u3002"),(0,o.kt)("p",null,"\u76f8\u5bf9\u5730\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"\u5f02\u6b65\u884c\u4e3a"),"\u7c7b\u4f3c\u4e8e\u7cfb\u7edf\u4e2d\u65ad\uff0c\u5373\u5f53\u524d\u8fdb\u7a0b\u5916\u90e8\u7684\u5b9e\u4f53\u53ef\u4ee5\u89e6\u53d1\u4ee3\u7801\u6267\u884c\u3002\u5f02\u6b65\u64cd\u4f5c\u7ecf\u5e38\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u5f3a\u5236\u8fdb\u7a0b\u7b49\u5f85\u4e00\u4e2a\u957f\u65f6\u95f4\u7684\u64cd\u4f5c\u901a\u5e38\u662f\u4e0d\u53ef\u884c\u7684\uff08\u540c\u6b65\u64cd\u4f5c\u5219\u5fc5\u987b\u8981\u7b49\uff09\u3002\u5982\u679c\u4ee3\u7801\u8981\u8bbf\u95ee\u4e00\u4e9b\u9ad8\u5ef6\u8fdf\u7684\u8d44\u6e90\uff0c\u6bd4\u5982\u5411\u8fdc\u7a0b\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u5e76\u7b49\u5f85\u54cd\u5e94\uff0c\u90a3\u4e48\u5c31\u4f1a\u51fa\u73b0\u957f\u65f6\u95f4\u7684\u7b49\u5f85\u3002"),(0,o.kt)("h3",{id:"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f"},"\u4ee5\u5f80\u7684\u5f02\u6b65\u7f16\u7a0b\u6a21\u5f0f"),(0,o.kt)("p",null,"\u5f02\u6b65\u884c\u4e3a\u662f JavaScript \u7684\u57fa\u7840\uff0c\u4f46\u4ee5\u524d\u7684\u5b9e\u73b0\u4e0d\u7406\u60f3\u3002\u5728\u65e9\u671f\u7684 JavaScript \u4e2d\uff0c\u53ea\u652f\u6301\u5b9a\u4e49\u56de\u8c03\u51fd\u6570\u6765\u8868\u660e\u5f02\u6b65\u64cd\u4f5c\u5b8c\u6210\u3002\u4e32\u8054\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u95ee\u9898\uff0c\u901a\u5e38\u9700\u8981\u6df1\u5ea6\u5d4c\u5957\u7684\u56de\u8c03\u51fd\u6570\uff08\u4fd7\u79f0\u201c\u56de\u8c03\u5730\u72f1\u201d\uff09\u6765\u89e3\u51b3\u3002"),(0,o.kt)("h4",{id:"\u56de\u8c03\u5730\u72f1"},"\u56de\u8c03\u5730\u72f1"),(0,o.kt)("p",null,"\u591a\u5c42\u56de\u8c03\u51fd\u6570\u7684\u76f8\u4e92\u5d4c\u5957, \u5c31\u5f62\u6210\u4e86\u56de\u8c03\u5730\u72f1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"setTimeout(() => { // \u7b2c1\u5c42\u56de\u8c03\u51fd\u6570\n  console.log('\u5ef6\u65f61\u79d2\u540e\u8f93\u51fa')\n\n  setTimeout(() => {\n    console.log('\u5ef6\u65f62\u79d2\u540e\u8f93\u51fa')\n\n    setTimeout(() => {\n      console.log('\u5ef6\u65f63\u79d2\u540e\u8f93\u51fa')\n    }, 3000)\n  }, 2000)\n}, 1000)\n")),(0,o.kt)("h2",{id:"promise-\u671f\u7ea6"},"Promise \u671f\u7ea6"),(0,o.kt)("p",null,"\u671f\u7ea6\u662f\u5bf9\u5c1a\u4e0d\u5b58\u5728\u7ed3\u679c\u7684\u4e00\u4e2a\u66ff\u8eab\u3002"),(0,o.kt)("p",null,"\u671f\u7ea6\uff08promise\uff09\u8fd9\u4e2a\u540d\u5b57\u6700\u65e9\u662f\u7531 Daniel Friedman\u548c David Wise\u5728\u4ed6\u4eec\u4e8e 1976 \u5e74\u53d1\u8868\u7684\u8bba\u6587\u201cThe Impact of Applicative Programming on Multiprocessing\u201d\u4e2d\u63d0\u51fa\u6765\u7684\u3002\u4f46\u76f4\u5230\u5341\u51e0\u5e74\u4ee5\u540e\uff0cBarbara Liskov \u548c Liuba Shrira \u5728 1988 \u5e74\u53d1\u8868\u4e86\u8bba\u6587\u201cPromises: Linguistic Support forEfficient Asynchronous Procedure Calls in Distributed Systems\u201d\uff0c\u8fd9\u4e2a\u6982\u5ff5\u624d\u771f\u6b63\u786e\u7acb\u4e0b\u6765\u3002\u540c\u4e00\u65f6\u671f\u7684\u8ba1\u7b97\u673a\u79d1\u5b66\u5bb6\u8fd8\u4f7f\u7528\u4e86\u201c\u7ec8\u5c40\u201d\uff08eventual\uff09\u3001\u201c\u671f\u8bb8\u201d\uff08future\uff09\u3001\u201c\u5ef6\u8fdf\u201d\uff08delay\uff09\u548c\u201c\u8fdf\u4ed8\u201d\uff08deferred\uff09\u7b49\u672f\u8bed\u6307\u4ee3\u540c\u6837\u7684\u6982\u5ff5\u3002\u6240\u6709\u8fd9\u4e9b\u6982\u5ff5\u63cf\u8ff0\u7684\u90fd\u662f\u4e00\u79cd\u5f02\u6b65\u7a0b\u5e8f\u6267\u884c\u7684\u673a\u5236\u3002"),(0,o.kt)("h3",{id:"\u671f\u7ea6\u57fa\u7840"},"\u671f\u7ea6\u57fa\u7840"),(0,o.kt)("p",null,"ECMAScript 6 \u65b0\u589e\u7684\u5f15\u7528\u7c7b\u578b Promise\uff0c\u53ef\u4ee5\u901a\u8fc7 new \u64cd\u4f5c\u7b26\u6765\u5b9e\u4f8b\u5316\u3002\u521b\u5efa\u65b0\u671f\u7ea6\u65f6\u9700\u8981\u4f20\u5165\u6267\u884c\u5668\uff08executor\uff09\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff08\u540e\u9762\u9a6c\u4e0a\u4f1a\u4ecb\u7ecd\uff09\uff0c\u4e0b\u9762\u7684\u4f8b\u5b50\u4f7f\u7528\u4e86\u4e00\u4e2a\u7a7a\u51fd\u6570\u5bf9\u8c61\u6765\u5e94\u4ed8\u4e00\u4e0b\u89e3\u91ca\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Promise(() => {});\nsetTimeout(console.log, 0, p); // Promise <pending>\n")),(0,o.kt)("p",null,"\u4e4b\u6240\u4ee5\u8bf4\u662f\u5e94\u4ed8\u89e3\u91ca\u5668\uff0c\u662f\u56e0\u4e3a\u5982\u679c\u4e0d\u63d0\u4f9b\u6267\u884c\u5668\u51fd\u6570\uff0c\u5c31\u4f1a\u629b\u51fa SyntaxError\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u671f\u7ea6\u72b6\u6001\u673a"),"  "),(0,o.kt)("p",null,"\u5728\u628a\u4e00\u4e2a\u671f\u7ea6\u5b9e\u4f8b\u4f20\u7ed9 console.log()\u65f6\uff0c\u63a7\u5236\u53f0\u8f93\u51fa\uff08\u53ef\u80fd\u56e0\u6d4f\u89c8\u5668\u4e0d\u540c\u800c\u7565\u6709\u5dee\u5f02\uff09\u8868\u660e\u8be5\u5b9e\u4f8b\u5904\u4e8e\u5f85\u5b9a\uff08pending\uff09\u72b6\u6001\u3002\u5982\u524d\u6240\u8ff0\uff0c\u671f\u7ea6\u662f\u4e00\u4e2a\u6709\u72b6\u6001\u7684\u5bf9\u8c61\uff0c\u53ef\u80fd\u5904\u4e8e\u5982\u4e0b 3 \u79cd\u72b6\u6001\u4e4b\u4e00\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f85\u5b9a\uff08pending\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5151\u73b0\uff08fulfilled\uff0c\u6709\u65f6\u5019\u4e5f\u79f0\u4e3a\u201c\u89e3\u51b3\u201d\uff0cresolved\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u62d2\u7edd\uff08rejected\uff09")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u5f85\u5b9a\uff08pending\uff09"),"\u662f\u671f\u7ea6\u7684\u6700\u521d\u59cb\u72b6\u6001\u3002\u5728\u5f85\u5b9a\u72b6\u6001\u4e0b\uff0c\u671f\u7ea6\u53ef\u4ee5\u843d\u5b9a\uff08settled\uff09\u4e3a\u4ee3\u8868\u6210\u529f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u5151\u73b0\uff08fulfilled\uff09"),"\u72b6\u6001\uff0c\u6216\u8005\u4ee3\u8868\u5931\u8d25\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u62d2\u7edd\uff08rejected\uff09"),"\u72b6\u6001\u3002\u65e0\u8bba\u843d\u5b9a\u4e3a\u54ea\u79cd\u72b6\u6001\u90fd\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u4e0d\u53ef\u9006"),"\u7684\u3002\u53ea\u8981\u4ece\u5f85\u5b9a\u8f6c\u6362\u4e3a\u5151\u73b0\u6216\u62d2\u7edd\uff0c\u671f\u7ea6\u7684\u72b6\u6001\u5c31\u4e0d\u518d\u6539\u53d8\u3002\u800c\u4e14\uff0c\u4e5f\u4e0d\u80fd\u4fdd\u8bc1\u671f\u7ea6\u5fc5\u7136\u4f1a\u8131\u79bb\u5f85\u5b9a\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u91cd\u8981\u7684\u662f\uff0c\u671f\u7ea6\u7684\u72b6\u6001\u662f\u79c1\u6709\u7684\uff0c\u4e0d\u80fd\u76f4\u63a5\u901a\u8fc7 JavaScript \u68c0\u6d4b\u5230\u3002\u8fd9\u4e3b\u8981\u662f\u4e3a\u4e86\u907f\u514d\u6839\u636e\u8bfb\u53d6\u5230\u7684\u671f\u7ea6\u72b6\u6001\uff0c\u4ee5\u540c\u6b65\u65b9\u5f0f\u5904\u7406\u671f\u7ea6\u5bf9\u8c61\u3002\u53e6\u5916\uff0c\u671f\u7ea6\u7684\u72b6\u6001\u4e5f\u4e0d\u80fd\u88ab\u5916\u90e8 JavaScript \u4ee3\u7801\u4fee\u6539\u3002\u8fd9\u4e0e\u4e0d\u80fd\u8bfb\u53d6\u8be5\u72b6\u6001\u7684\u539f\u56e0\u662f\u4e00\u6837\u7684\uff1a\u671f\u7ea6\u6545\u610f\u5c06\u5f02\u6b65\u884c\u4e3a\u5c01\u88c5\u8d77\u6765\uff0c\u4ece\u800c\u9694\u79bb\u5916\u90e8\u7684\u540c\u6b65\u4ee3\u7801\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u89e3\u51b3\u503c\u3001\u62d2\u7edd\u7406\u7531\u53ca\u671f\u7ea6\u7528\u4f8b"),"  "),(0,o.kt)("p",null,"\u671f\u7ea6\u4e3b\u8981\u6709\u4e24\u5927\u7528\u9014\u3002\u9996\u5148\u662f\u62bd\u8c61\u5730\u8868\u793a\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\u3002\u671f\u7ea6\u7684\u72b6\u6001\u4ee3\u8868\u671f\u7ea6\u662f\u5426\u5b8c\u6210\u3002  "),(0,o.kt)("p",null,"\u201c\u5f85\u5b9a\u201d\u8868\u793a\u5c1a\u672a\u5f00\u59cb\u6216\u8005\u6b63\u5728\u6267\u884c\u4e2d\u3002"),(0,o.kt)("p",null,"\u201c\u5151\u73b0\u201d\u8868\u793a\u5df2\u7ecf\u6210\u529f\u5b8c\u6210"),(0,o.kt)("p",null,"\u201c\u62d2\u7edd\u201d\u5219\u8868\u793a\u6ca1\u6709\u6210\u529f\u5b8c\u6210\u3002"),(0,o.kt)("p",null,"\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u72b6\u6001\u673a\u5c31\u662f\u671f\u7ea6\u53ef\u4ee5\u63d0\u4f9b\u7684\u6700\u6709\u7528\u7684\u4fe1\u606f\u3002\u77e5\u9053\u4e00\u6bb5\u5f02\u6b65\u4ee3\u7801\u5df2\u7ecf\u5b8c\u6210\uff0c\u5bf9\u4e8e\u5176\u4ed6\u4ee3\u7801\u800c\u8a00\u5df2\u7ecf\u8db3\u591f\u4e86\u3002\u6bd4\u5982\uff0c\u5047\u8bbe\u671f\u7ea6\u8981\u5411\u670d\u52a1\u5668\u53d1\u9001\u4e00\u4e2a HTTP \u8bf7\u6c42\u3002\u3002\u8bf7\u6c42\u8fd4\u56de200~299 \u8303\u56f4\u5185\u7684\u72b6\u6001\u7801\u5c31\u8db3\u4ee5\u8ba9\u671f\u7ea6\u7684\u72b6\u6001\u53d8\u4e3a\u201c\u5151\u73b0\u201d\u3002\u7c7b\u4f3c\u5730\uff0c\u5982\u679c\u8bf7\u6c42\u8fd4\u56de\u7684\u72b6\u6001\u7801\u4e0d\u5728 200~299 \u8fd9\u4e2a\u8303\u56f4\u5185\uff0c\u90a3\u4e48\u5c31\u4f1a\u628a\u671f\u7ea6\u72b6\u6001\u5207\u6362\u4e3a\u201c\u62d2\u7edd\u201d\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3. \u901a\u8fc7\u6267\u884c\u51fd\u6570\u63a7\u5236\u671f\u7ea6\u72b6\u6001"),"  "),(0,o.kt)("p",null,"\u7531\u4e8e\u671f\u7ea6\u7684\u72b6\u6001\u662f\u79c1\u6709\u7684\uff0c\u6240\u4ee5\u53ea\u80fd\u5728\u5185\u90e8\u8fdb\u884c\u64cd\u4f5c\u3002\u5185\u90e8\u64cd\u4f5c\u5728\u671f\u7ea6\u7684\u6267\u884c\u5668\u51fd\u6570\u4e2d\u5b8c\u6210\u3002\u6267\u884c\u5668\u51fd\u6570\u4e3b\u8981\u6709\u4e24\u9879\u804c\u8d23\uff1a\u521d\u59cb\u5316\u671f\u7ea6\u7684\u5f02\u6b65\u884c\u4e3a\u548c\u63a7\u5236\u72b6\u6001\u7684\u6700\u7ec8\u8f6c\u6362\u3002\u5176\u4e2d\uff0c\u63a7\u5236\u671f\u7ea6\u72b6\u6001\u7684\u8f6c\u6362\u662f\u901a\u8fc7\u8c03\u7528\u5b83\u7684\u4e24\u4e2a\u51fd\u6570\u53c2\u6570\u5b9e\u73b0\u7684\u3002\u8fd9\u4e24\u4e2a\u51fd\u6570\u53c2\u6570\u901a\u5e38\u90fd\u547d\u540d\u4e3a resolve()\u548c reject()\u3002\u8c03\u7528resolve()\u4f1a\u628a\u72b6\u6001\u5207\u6362\u4e3a\u5151\u73b0\uff0c\u8c03\u7528 reject()\u4f1a\u628a\u72b6\u6001\u5207\u6362\u4e3a\u62d2\u7edd\u3002\u53e6\u5916\uff0c\u8c03\u7528 reject()\u4e5f\u4f1a\u629b\u51fa\u9519\u8bef\uff08\u540e\u9762\u4f1a\u8ba8\u8bba\u8fd9\u4e2a\u9519\u8bef\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p1 = new Promise((resolve, reject) => resolve());\nsetTimeout(console.log, 0, p1); // Promise <resolved>\nlet p2 = new Promise((resolve, reject) => reject());\nsetTimeout(console.log, 0, p2); // Promise <rejected>\n// Uncaught error (in promise) \n")),(0,o.kt)("p",null,"\u6b64\u4f8b\u4e2d\uff0c\u5e76\u6ca1\u6709\u4ec0\u4e48\u5f02\u6b65\u64cd\u4f5c\uff0c\u56e0\u4e3a\u5728\u521d\u59cb\u5316\u671f\u7ea6\u65f6\uff0c\u6267\u884c\u5668\u51fd\u6570\u5df2\u7ecf\u6539\u53d8\u4e86\u6bcf\u4e2a\u671f\u7ea6\u7684\u72b6\u6001\u3002\u8fd9\u91cc\u7684\u5173\u952e\u5728\u4e8e\uff0c\u6267\u884c\u5668\u51fd\u6570\u662f\u540c\u6b65\u6267\u884c\u7684\u3002\u8fd9\u662f\u56e0\u4e3a\u6267\u884c\u5668\u51fd\u6570\u662f\u671f\u7ea6\u7684\u521d\u59cb\u5316\u7a0b\u5e8f\u3002\u901a\u8fc7\u4e0b\u9762\u7684\u4f8b\u5b50\u53ef\u4ee5\u770b\u51fa\u4e0a\u9762\u4ee3\u7801\u7684\u6267\u884c\u987a\u5e8f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new Promise(() => setTimeout(console.log, 0, 'executor'));\nsetTimeout(console.log, 0, 'promise initialized');\n// executor\n// promise initialized\n")),(0,o.kt)("p",null,"\u6dfb\u52a0 setTimeout \u53ef\u4ee5\u63a8\u8fdf\u5207\u6362\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));\n// \u5728 console.log \u6253\u5370\u671f\u7ea6\u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u8fd8\u4e0d\u4f1a\u6267\u884c\u8d85\u65f6\u56de\u8c03\uff08\u5373 resolve()\uff09\nsetTimeout(console.log, 0, p); // Promise <pending> \n")),(0,o.kt)("p",null,"\u65e0\u8bba resolve()\u548c reject()\u4e2d\u7684\u54ea\u4e2a\u88ab\u8c03\u7528\uff0c\u72b6\u6001\u8f6c\u6362\u90fd\u4e0d\u53ef\u64a4\u9500\u4e86\u3002\u4e8e\u662f\u7ee7\u7eed\u4fee\u6539\u72b6\u6001\u4f1a\u9759\u9ed8\u5931\u8d25\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Promise((resolve, reject) => {\n resolve();\n reject(); // \u6ca1\u6709\u6548\u679c\n});\nsetTimeout(console.log, 0, p); // Promise <resolved>\n")),(0,o.kt)("p",null,"\u6dfb\u52a0 setTimeout \u53ef\u4ee5\u63a8\u8fdf\u5207\u6362\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Promise((resolve, reject) => setTimeout(resolve, 1000));\n// \u5728 console.log \u6253\u5370\u671f\u7ea6\u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u8fd8\u4e0d\u4f1a\u6267\u884c\u8d85\u65f6\u56de\u8c03\uff08\u5373 resolve()\uff09\nsetTimeout(console.log, 0, p); // Promise <pending> \n")),(0,o.kt)("p",null,"\u65e0\u8bba resolve()\u548c reject()\u4e2d\u7684\u54ea\u4e2a\u88ab\u8c03\u7528\uff0c\u72b6\u6001\u8f6c\u6362\u90fd\u4e0d\u53ef\u64a4\u9500\u4e86\u3002\u4e8e\u662f\u7ee7\u7eed\u4fee\u6539\u72b6\u6001\u4f1a\u9759\u9ed8\u5931\u8d25\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Promise((resolve, reject) => {\n resolve();\n reject(); // \u6ca1\u6709\u6548\u679c\n});\nsetTimeout(console.log, 0, p); // Promise <resolved>\n")),(0,o.kt)("p",null,"\u4e3a\u907f\u514d\u671f\u7ea6\u5361\u5728\u5f85\u5b9a\u72b6\u6001\uff0c\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u5b9a\u65f6\u9000\u51fa\u529f\u80fd\u3002\u6bd4\u5982\uff0c\u53ef\u4ee5\u901a\u8fc7 setTimeout \u8bbe\u7f6e\u4e00\u4e2a10 \u79d2\u949f\u540e\u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u62d2\u7edd\u671f\u7ea6\u7684\u56de\u8c03\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Promise((resolve, reject) => {\n setTimeout(reject, 10000); // 10 \u79d2\u540e\u8c03\u7528 reject()\n // \u6267\u884c\u51fd\u6570\u7684\u903b\u8f91\n});\nsetTimeout(console.log, 0, p); // Promise <pending>\nsetTimeout(console.log, 11000, p); // 11 \u79d2\u540e\u518d\u68c0\u67e5\u72b6\u6001\n// (After 10 seconds) Uncaught error\n// (After 11 seconds) Promise <rejected>\n")),(0,o.kt)("p",null,"\u56e0\u4e3a\u671f\u7ea6\u7684\u72b6\u6001\u53ea\u80fd\u6539\u53d8\u4e00\u6b21\uff0c\u6240\u4ee5\u8fd9\u91cc\u7684\u8d85\u65f6\u62d2\u7edd\u903b\u8f91\u4e2d\u53ef\u4ee5\u653e\u5fc3\u5730\u8bbe\u7f6e\u8ba9\u671f\u7ea6\u5904\u4e8e\u5f85\u5b9a\u72b6\u6001\u7684\u6700\u957f\u65f6\u95f4\u3002\u5982\u679c\u6267\u884c\u5668\u4e2d\u7684\u4ee3\u7801\u5728\u8d85\u65f6\u4e4b\u524d\u5df2\u7ecf\u89e3\u51b3\u6216\u62d2\u7edd\uff0c\u90a3\u4e48\u8d85\u65f6\u56de\u8c03\u518d\u5c1d\u8bd5\u62d2\u7edd\u4e5f\u4f1a\u9759\u9ed8\u5931\u8d25\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4. Promise.resolve()"),"  "),(0,o.kt)("p",null,"\u671f\u7ea6\u5e76\u975e\u4e00\u5f00\u59cb\u5c31\u5fc5\u987b\u5904\u4e8e\u5f85\u5b9a\u72b6\u6001\uff0c\u7136\u540e\u901a\u8fc7\u6267\u884c\u5668\u51fd\u6570\u624d\u80fd\u8f6c\u6362\u4e3a\u843d\u5b9a\u72b6\u6001\u3002\u8c03\u7528Promise.resolve()\u9759\u6001\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5b9e\u4f8b\u5316\u4e00\u4e2a\u89e3\u51b3\u7684\u671f\u7ea6\u3002\u4e0b\u9762\u4e24\u4e2a\u671f\u7ea6\u5b9e\u4f8b\u5b9e\u9645\u4e0a\u662f\u4e00\u6837\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p1 = new Promise((resolve, reject) => resolve());\nlet p2 = Promise.resolve();\n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u89e3\u51b3\u7684\u671f\u7ea6\u7684\u503c\u5bf9\u5e94\u7740\u4f20\u7ed9 Promise.resolve()\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u4f7f\u7528\u8fd9\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u628a\u4efb\u4f55\u503c\u90fd\u8f6c\u6362\u4e3a\u4e00\u4e2a\u671f\u7ea6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(console.log, 0, Promise.resolve());\n// Promise <resolved>: undefined\nsetTimeout(console.log, 0, Promise.resolve(3));\n// Promise <resolved>: 3 \n\n// \u591a\u4f59\u7684\u53c2\u6570\u4f1a\u5ffd\u7565\nsetTimeout(console.log, 0, Promise.resolve(4, 5, 6));\n// Promise <resolved>: 4 \n")),(0,o.kt)("p",null,"\u5bf9\u8fd9\u4e2a\u9759\u6001\u65b9\u6cd5\u800c\u8a00\uff0c\u5982\u679c\u4f20\u5165\u7684\u53c2\u6570\u672c\u8eab\u662f\u4e00\u4e2a\u671f\u7ea6\uff0c\u90a3\u5b83\u7684\u884c\u4e3a\u5c31\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u7a7a\u5305\u88c5\u3002\u56e0\u6b64\uff0cPromise.resolve()\u53ef\u4ee5\u8bf4\u662f\u4e00\u4e2a\u5e42\u7b49\u65b9\u6cd5\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = Promise.resolve(7);\nsetTimeout(console.log, 0, p === Promise.resolve(p));\n// true\nsetTimeout(console.log, 0, p === Promise.resolve(Promise.resolve(p)));\n// true \n")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u5e42\u7b49\u6027\u4f1a\u4fdd\u7559\u4f20\u5165\u671f\u7ea6\u7684\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Promise(() => {});\nsetTimeout(console.log, 0, p); // Promise <pending>\nsetTimeout(console.log, 0, Promise.resolve(p)); // Promise <pending>\nsetTimeout(console.log, 0, p === Promise.resolve(p)); // true\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u4e2a\u9759\u6001\u65b9\u6cd5\u80fd\u591f\u5305\u88c5\u4efb\u4f55\u975e\u671f\u7ea6\u503c\uff0c\u5305\u62ec\u9519\u8bef\u5bf9\u8c61\uff0c\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u89e3\u51b3\u7684\u671f\u7ea6\u3002\u56e0\u6b64\uff0c\u4e5f\u53ef\u80fd\u5bfc\u81f4\u4e0d\u7b26\u5408\u9884\u671f\u7684\u884c\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = Promise.resolve(new Error('foo'));\nsetTimeout(console.log, 0, p);\n// Promise <resolved>: Error: foo\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5. Promise.reject()"),"  "),(0,o.kt)("p",null,"\u4e0e Promise.resolve()\u7c7b\u4f3c\uff0cPromise.reject()\u4f1a\u5b9e\u4f8b\u5316\u4e00\u4e2a\u62d2\u7edd\u7684\u671f\u7ea6\u5e76\u629b\u51fa\u4e00\u4e2a\u5f02\u6b65\u9519\u8bef",(0,o.kt)("inlineCode",{parentName:"p"},"\uff08\u8fd9\u4e2a\u9519\u8bef\u4e0d\u80fd\u901a\u8fc7 try/catch \u6355\u83b7\uff0c\u800c\u53ea\u80fd\u901a\u8fc7\u62d2\u7edd\u5904\u7406\u7a0b\u5e8f\u6355\u83b7\uff09\u3002")," \u53ef\u4ee5\u5bf9\u6bd4\u4e0a\u9762resolve\u4ee3\u7801:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p1 = new Promise((resolve, reject) => reject());\nlet p2 = Promise.reject();\n\nlet p = Promise.reject(3);\nsetTimeout(console.log, 0, p); // Promise <rejected>: 3\n\np.then(null, (e) => setTimeout(console.log, 0, e)); // 3 \n")),(0,o.kt)("p",null,"\u5173\u952e\u5728\u4e8e\uff0cPromise.reject()\u5e76\u6ca1\u6709\u7167\u642c Promise.resolve()\u7684\u5e42\u7b49\u903b\u8f91\u3002\u5982\u679c\u7ed9\u5b83\u4f20\u4e00\u4e2a\u671f\u7ea6\u5bf9\u8c61\uff0c\u5219\u8fd9\u4e2a\u671f\u7ea6\u4f1a\u6210\u4e3a\u5b83\u8fd4\u56de\u7684\u62d2\u7edd\u671f\u7ea6\u7684\u7406\u7531\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"setTimeout(console.log, 0, Promise.reject(Promise.resolve()));\n// Promise <rejected>: Promise <resolved>\n")))}c.isMDXComponent=!0}}]);