"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8299],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||o;return t?a.createElement(d,r(r({ref:n},s),{},{components:t})):a.createElement(d,r({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7829:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=t(7462),l=t(3366),o=(t(7294),t(3905)),r=["components"],i={title:"[TS] ts-axios(12) - \u53d6\u6d88\u529f\u80fd",sidebar_position:20},c=void 0,p={unversionedId:"TypeScript/ts-axios-12",id:"TypeScript/ts-axios-12",title:"[TS] ts-axios(12) - \u53d6\u6d88\u529f\u80fd",description:"----------------------------------------------------------------",source:"@site/docs/TypeScript/ts-axios-12.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts-axios-12",permalink:"/docs/TypeScript/ts-axios-12",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/ts-axios-12.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"[TS] ts-axios(12) - \u53d6\u6d88\u529f\u80fd",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(11) - \u914d\u7f6e\u5316\u5b9e\u73b0",permalink:"/docs/TypeScript/ts-axios-11"},next:{title:"[TS] ts-axios(13) - withCredentials",permalink:"/docs/TypeScript/ts-axios-13"}},s=[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",children:[],level:2},{value:"\u5f02\u6b65\u5206\u79bb\u7684\u8bbe\u8ba1\u65b9\u6848",id:"\u5f02\u6b65\u5206\u79bb\u7684\u8bbe\u8ba1\u65b9\u6848",children:[],level:2},{value:"CancelToken \u7c7b\u5b9e\u73b0",id:"canceltoken-\u7c7b\u5b9e\u73b0",children:[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",children:[],level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[],level:3}],level:2},{value:"CancelToken \u6269\u5c55\u9759\u6001\u63a5\u53e3",id:"canceltoken-\u6269\u5c55\u9759\u6001\u63a5\u53e3",children:[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49-1",children:[],level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0-1",children:[],level:3}],level:2},{value:"Cancel \u7c7b\u5b9e\u73b0\u53ca axios \u7684\u6269\u5c55",id:"cancel-\u7c7b\u5b9e\u73b0\u53ca-axios-\u7684\u6269\u5c55",children:[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49-2",children:[],level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0-2",children:[],level:3}],level:2},{value:"\u989d\u5916\u903b\u8f91\u5b9e\u73b0",id:"\u989d\u5916\u903b\u8f91\u5b9e\u73b0",children:[],level:2},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199",children:[],level:2}],k={toc:s};function u(e){var n=e.components,t=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,o.kt)("p",null,"\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u4e3b\u52a8\u53d6\u6d88\u8bf7\u6c42\uff0c\u6bd4\u5982\u5e38\u89c1\u7684\u641c\u7d22\u6846\u6848\u4f8b\uff0c\u5728\u7528\u6237\u8f93\u5165\u8fc7\u7a0b\u4e2d\uff0c\u641c\u7d22\u6846\u7684\u5185\u5bb9\u4e5f\u5728\u4e0d\u65ad\u53d8\u5316\uff0c\u6b63\u5e38\u60c5\u51b5\u6bcf\u6b21\u53d8\u5316\u6211\u4eec\u90fd\u5e94\u8be5\u5411\u670d\u52a1\u7aef\u53d1\u9001\u4e00\u6b21\u8bf7\u6c42\u3002\u4f46\u662f\u5f53\u7528\u6237\u8f93\u5165\u8fc7\u5feb\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u6bcf\u6b21\u53d8\u5316\u8bf7\u6c42\u90fd\u53d1\u51fa\u53bb\uff0c\u901a\u5e38\u4e00\u4e2a\u89e3\u51b3\u65b9\u6848\u662f\u524d\u7aef\u7528 debounce \u7684\u65b9\u6848\uff0c\u6bd4\u5982\u5ef6\u65f6 200ms \u53d1\u9001\u8bf7\u6c42\u3002\u8fd9\u6837\u5f53\u7528\u6237\u8fde\u7eed\u8f93\u5165\u7684\u5b57\u7b26\uff0c\u53ea\u8981\u8f93\u5165\u95f4\u9694\u5c0f\u4e8e 200ms\uff0c\u524d\u9762\u8f93\u5165\u7684\u5b57\u7b26\u90fd\u4e0d\u4f1a\u53d1\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u8fd8\u6709\u4e00\u79cd\u6781\u7aef\u60c5\u51b5\u662f\u540e\u7aef\u63a5\u53e3\u5f88\u6162\uff0c\u6bd4\u5982\u8d85\u8fc7 1s \u624d\u80fd\u54cd\u5e94\uff0c\u8fd9\u4e2a\u65f6\u5019\u5373\u4f7f\u505a\u4e86 200ms \u7684 debounce\uff0c\u4f46\u662f\u5728\u6211\u6162\u6162\u8f93\u5165\uff08\u6bcf\u4e2a\u8f93\u5165\u95f4\u9694\u8d85\u8fc7 200ms\uff09\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u524d\u9762\u7684\u8bf7\u6c42\u6ca1\u6709\u54cd\u5e94\u524d\uff0c\u4e5f\u6709\u53ef\u80fd\u53d1\u51fa\u53bb\u591a\u4e2a\u8bf7\u6c42\u3002\u56e0\u4e3a\u63a5\u53e3\u7684\u54cd\u5e94\u65f6\u957f\u662f\u4e0d\u5b9a\u7684\uff0c\u5982\u679c\u5148\u53d1\u51fa\u53bb\u7684\u8bf7\u6c42\u54cd\u5e94\u65f6\u957f\u6bd4\u540e\u53d1\u51fa\u53bb\u7684\u8bf7\u6c42\u8981\u4e45\u4e00\u4e9b\uff0c\u540e\u8bf7\u6c42\u7684\u54cd\u5e94\u5148\u56de\u6765\uff0c\u5148\u8bf7\u6c42\u7684\u54cd\u5e94\u540e\u56de\u6765\uff0c\u5c31\u4f1a\u51fa\u73b0\u524d\u9762\u8bf7\u6c42\u54cd\u5e94\u7ed3\u679c\u8986\u76d6\u540e\u9762\u8bf7\u6c42\u54cd\u5e94\u7ed3\u679c\u7684\u60c5\u51b5\uff0c\u90a3\u4e48\u5c31\u4e71\u4e86\u3002\u56e0\u6b64\u5728\u8fd9\u4e2a\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u9664\u4e86\u505a debounce\uff0c\u8fd8\u5e0c\u671b\u540e\u9762\u7684\u8bf7\u6c42\u53d1\u51fa\u53bb\u7684\u65f6\u5019\uff0c\u5982\u679c\u524d\u9762\u7684\u8bf7\u6c42\u8fd8\u6ca1\u6709\u54cd\u5e94\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u524d\u9762\u7684\u8bf7\u6c42\u53d6\u6d88\u3002"),(0,o.kt)("p",null,"\u4ece axios \u7684\u53d6\u6d88\u63a5\u53e3\u8bbe\u8ba1\u5c42\u9762\uff0c\u6211\u4eec\u5e0c\u671b\u505a\u5982\u4e0b\u7684\u8bbe\u8ba1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const CancelToken = axios.CancelToken;\nconst source = CancelToken.source();\n\naxios.get('/user/12345', {\n  cancelToken: source.token\n}).catch(function (e) {\n  if (axios.isCancel(e)) {\n    console.log('Request canceled', e.message);\n  } else {\n    // \u5904\u7406\u9519\u8bef\n  }\n});\n\n// \u53d6\u6d88\u8bf7\u6c42 (\u8bf7\u6c42\u539f\u56e0\u662f\u53ef\u9009\u7684)\nsource.cancel('Operation canceled by the user.');\n")),(0,o.kt)("p",null,"\u6211\u4eec\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7684\u5bf9\u8c61\uff0c\u5b83\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," \u65b9\u6cd5\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," \u5bf9\u8c61\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"source.token")," \u662f\u5728\u6bcf\u6b21\u8bf7\u6c42\u7684\u65f6\u5019\u4f20\u7ed9\u914d\u7f6e\u5bf9\u8c61\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelToken")," \u5c5e\u6027\uff0c\u7136\u540e\u5728\u8bf7\u6c42\u53d1\u51fa\u53bb\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"source.cancel")," \u65b9\u6cd5\u53d6\u6d88\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u652f\u6301\u53e6\u4e00\u79cd\u65b9\u5f0f\u7684\u8c03\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const CancelToken = axios.CancelToken;\nlet cancel;\n\naxios.get('/user/12345', {\n  cancelToken: new CancelToken(function executor(c) {\n    cancel = c;\n  })\n});\n\n// \u53d6\u6d88\u8bf7\u6c42\ncancel();\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"axios.CancelToken")," \u662f\u4e00\u4e2a\u7c7b\uff0c\u6211\u4eec\u76f4\u63a5\u628a\u5b83\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u4f20\u7ed9\u8bf7\u6c42\u914d\u7f6e\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelToken")," \u5c5e\u6027\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7684\u6784\u9020\u51fd\u6570\u53c2\u6570\u652f\u6301\u4f20\u5165\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u53d6\u6d88\u51fd\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"c"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u65b9\u6cd5\u6267\u884c\u7684\u5185\u90e8\u62ff\u5230\u8fd9\u4e2a\u53d6\u6d88\u51fd\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"c"),"\uff0c\u8d4b\u503c\u7ed9\u6211\u4eec\u5916\u90e8\u5b9a\u4e49\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u53d8\u91cf\uff0c\u4e4b\u540e\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u65b9\u6cd5\u6765\u53d6\u6d88\u8bf7\u6c42\u3002"),(0,o.kt)("h2",{id:"\u5f02\u6b65\u5206\u79bb\u7684\u8bbe\u8ba1\u65b9\u6848"},"\u5f02\u6b65\u5206\u79bb\u7684\u8bbe\u8ba1\u65b9\u6848"),(0,o.kt)("p",null,"\u901a\u8fc7\u9700\u6c42\u5206\u6790\uff0c\u6211\u4eec\u77e5\u9053\u60f3\u8981\u5b9e\u73b0\u53d6\u6d88\u67d0\u6b21\u8bf7\u6c42\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u8be5\u8bf7\u6c42\u914d\u7f6e\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelToken"),"\uff0c\u7136\u540e\u5728\u5916\u90e8\u8c03\u7528\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u8bf7\u6c42\u7684\u53d1\u9001\u662f\u4e00\u4e2a\u5f02\u6b65\u8fc7\u7a0b\uff0c\u6700\u7ec8\u4f1a\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"xhr.send")," \u65b9\u6cd5\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"xhr")," \u5bf9\u8c61\u63d0\u4f9b\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/abort"},(0,o.kt)("inlineCode",{parentName:"a"},"abort"))," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u628a\u8bf7\u6c42\u53d6\u6d88\u3002\u56e0\u4e3a\u6211\u4eec\u5728\u5916\u90e8\u662f\u78b0\u4e0d\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"xhr")," \u5bf9\u8c61\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u60f3\u5728\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u7684\u65f6\u5019\uff0c\u53bb\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"xhr.abort")," \u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u5c31\u76f8\u5f53\u4e8e\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"xhr")," \u5f02\u6b65\u8bf7\u6c42\u8fc7\u7a0b\u4e2d\uff0c\u63d2\u5165\u4e00\u6bb5\u4ee3\u7801\uff0c\u5f53\u6211\u4eec\u5728\u5916\u90e8\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u51fd\u6570\u7684\u65f6\u5019\uff0c\u4f1a\u9a71\u52a8\u8fd9\u6bb5\u4ee3\u7801\u7684\u6267\u884c\uff0c\u7136\u540e\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"xhr.abort")," \u65b9\u6cd5\u53d6\u6d88\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5229\u7528 Promise \u5b9e\u73b0\u5f02\u6b65\u5206\u79bb\uff0c\u4e5f\u5c31\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelToken")," \u4e2d\u4fdd\u5b58\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," \u72b6\u6001\u7684 Promise \u5bf9\u8c61\uff0c\u7136\u540e\u5f53\u6211\u4eec\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u80fd\u591f\u8bbf\u95ee\u5230\u8fd9\u4e2a Promise \u5bf9\u8c61\uff0c\u628a\u5b83\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," \u72b6\u6001\u53d8\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolved")," \u72b6\u6001\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u51fd\u6570\u4e2d\u53bb\u5b9e\u73b0\u53d6\u6d88\u8bf7\u6c42\u7684\u903b\u8f91\uff0c\u7c7b\u4f3c\u5982\u4e0b\u7684\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nif (cancelToken) {\n  cancelToken.promise\n    .then(reason => {\n      request.abort()\n      reject(reason)\n    })\n}\n")),(0,o.kt)("h2",{id:"canceltoken-\u7c7b\u5b9e\u73b0"},"CancelToken \u7c7b\u5b9e\u73b0"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c31\u6765\u5b9e\u73b0\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7c7b\uff0c\u5148\u6765\u770b\u4e00\u4e0b\u63a5\u53e3\u5b9a\u4e49\uff1a"),(0,o.kt)("h3",{id:"\u63a5\u53e3\u5b9a\u4e49"},"\u63a5\u53e3\u5b9a\u4e49"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosRequestConfig {\n  // ...\n  cancelToken?: CancelToken\n}\n\nexport interface CancelToken {\n  promise: Promise<string>\n  reason?: string\n}\n\nexport interface Canceler {\n  (message?: string): void\n}\n\nexport interface CancelExecutor {\n  (cancel: Canceler): void\n}\n\n")),(0,o.kt)("p",null,"\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u662f\u5b9e\u4f8b\u7c7b\u578b\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Canceler")," \u662f\u53d6\u6d88\u65b9\u6cd5\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CancelExecutor")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7c7b\u6784\u9020\u51fd\u6570\u53c2\u6570\u7684\u63a5\u53e3\u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("p",null,"\u6211\u4eec\u5355\u72ec\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u76ee\u5f55\u6765\u7ba1\u7406\u53d6\u6d88\u76f8\u5173\u7684\u4ee3\u7801\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken.ts")," \u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CancelExecutor } from '../types'\n\ninterface ResolvePromise {\n  (reason?: string): void\n}\n\nexport default class CancelToken {\n  promise: Promise<string>\n  reason?: string\n\n  constructor(executor: CancelExecutor) {\n    let resolvePromise: ResolvePromise\n    this.promise = new Promise<string>(resolve => {\n      resolvePromise = resolve\n    })\n\n    executor(message => {\n      if (this.reason) {\n        return\n      }\n      this.reason = message\n      resolvePromise(this.reason)\n    })\n  }\n}\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u6784\u9020\u51fd\u6570\u5185\u90e8\uff0c\u5b9e\u4f8b\u5316\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," \u72b6\u6001\u7684 Promise \u5bf9\u8c61\uff0c\u7136\u540e\u7528\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvePromise")," \u53d8\u91cf\u6307\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\u3002\u63a5\u7740\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u51fd\u6570\uff0c\u4f20\u5165\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u51fd\u6570\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u51fd\u6570\u5185\u90e8\uff0c\u4f1a\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvePromise")," \u628a Promise \u5bf9\u8c61\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," \u72b6\u6001\u53d8\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"resolved")," \u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u63a5\u7740\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"xhr.ts")," \u4e2d\u63d2\u5165\u4e00\u6bb5\u53d6\u6d88\u8bf7\u6c42\u7684\u903b\u8f91\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/xhr.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const { /*....*/ cancelToken } = config\n\nif (cancelToken) {\n  cancelToken.promise.then(reason => {\n    request.abort()\n    reject(reason)\n  })\n}\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u5c31\u6ee1\u8db3\u4e86\u7b2c\u4e8c\u79cd\u4f7f\u7528\u65b9\u5f0f\uff0c\u63a5\u7740\u6211\u4eec\u8981\u5b9e\u73b0\u7b2c\u4e00\u79cd\u4f7f\u7528\u65b9\u5f0f\uff0c\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u6269\u5c55\u9759\u6001\u63a5\u53e3\u3002"),(0,o.kt)("h2",{id:"canceltoken-\u6269\u5c55\u9759\u6001\u63a5\u53e3"},"CancelToken \u6269\u5c55\u9759\u6001\u63a5\u53e3"),(0,o.kt)("h3",{id:"\u63a5\u53e3\u5b9a\u4e49-1"},"\u63a5\u53e3\u5b9a\u4e49"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CancelTokenSource {\n  token: CancelToken\n  cancel: Canceler\n}\n\nexport interface CancelTokenStatic {\n  new(executor: CancelExecutor): CancelToken\n\n  source(): CancelTokenSource\n}\n")),(0,o.kt)("p",null,"\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelTokenSource")," \u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7c7b\u9759\u6001\u65b9\u6cd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," \u51fd\u6570\u7684\u8fd4\u56de\u503c\u7c7b\u578b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CancelTokenStatic")," \u5219\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7c7b\u7684\u7c7b\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0-1"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cancel/CancelToken.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class CancelToken {\n  // ...\n\n  static source(): CancelTokenSource {\n    let cancel!: Canceler\n    const token = new CancelToken(c => {\n      cancel = c\n    })\n    return {\n      cancel,\n      token\n    }\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"source")," \u7684\u9759\u6001\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u5b9a\u4e49\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u53d8\u91cf\u5b9e\u4f8b\u5316\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u51fd\u6570\u4e2d\uff0c\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u6307\u5411\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"c")," \u8fd9\u4e2a\u53d6\u6d88\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837\u5c31\u6ee1\u8db3\u4e86\u6211\u4eec\u7b2c\u4e00\u79cd\u4f7f\u7528\u65b9\u5f0f\uff0c\u4f46\u662f\u5728\u7b2c\u4e00\u79cd\u4f7f\u7528\u65b9\u5f0f\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5728\u6355\u83b7\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.isCancel")," \u6765\u5224\u65ad\u8fd9\u4e2a\u9519\u8bef\u53c2\u6570 e \u662f\u4e0d\u662f\u4e00\u6b21\u53d6\u6d88\u8bf7\u6c42\u5bfc\u81f4\u7684\u9519\u8bef\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5bf9\u53d6\u6d88\u9519\u8bef\u7684\u539f\u56e0\u505a\u4e00\u5c42\u5305\u88c5\uff0c\u5e76\u4e14\u628a\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u6269\u5c55\u9759\u6001\u65b9\u6cd5"),(0,o.kt)("h2",{id:"cancel-\u7c7b\u5b9e\u73b0\u53ca-axios-\u7684\u6269\u5c55"},"Cancel \u7c7b\u5b9e\u73b0\u53ca axios \u7684\u6269\u5c55"),(0,o.kt)("h3",{id:"\u63a5\u53e3\u5b9a\u4e49-2"},"\u63a5\u53e3\u5b9a\u4e49"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Cancel {\n  message?: string\n}\n\nexport interface CancelStatic {\n  new(message?: string): Cancel\n}\n\nexport interface AxiosStatic extends AxiosInstance {\n  create(config?: AxiosRequestConfig): AxiosInstance\n\n  CancelToken: CancelTokenStatic\n  Cancel: CancelStatic\n  isCancel: (value: any) => boolean\n}\n")),(0,o.kt)("p",null,"\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel")," \u662f\u5b9e\u4f8b\u7c7b\u578b\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CancelStatic")," \u662f\u7c7b\u7c7b\u578b\u7684\u63a5\u53e3\u5b9a\u4e49\uff0c\u5e76\u4e14\u6211\u4eec\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u6269\u5c55\u4e86\u591a\u4e2a\u9759\u6001\u65b9\u6cd5\u3002"),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0-2"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("p",null,"\u6211\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel.ts")," \u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class Cancel {\n  message?: string\n\n  constructor(message?: string) {\n    this.message = message\n  }\n}\n\nexport function isCancel(value: any): boolean {\n  return value instanceof Cancel\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Cancel")," \u7c7b\u975e\u5e38\u7b80\u5355\uff0c\u62e5\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," \u7684\u516c\u5171\u5c5e\u6027\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"isCancel")," \u65b9\u6cd5\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"instanceof")," \u6765\u5224\u65ad\u4f20\u5165\u7684\u503c\u662f\u4e0d\u662f\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel")," \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u63a5\u7740\u6211\u4eec\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u7c7b\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"reason")," \u7c7b\u578b\u505a\u4fee\u6539\uff0c\u628a\u5b83\u53d8\u6210\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Cancel")," \u7c7b\u578b\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("p",null,"\u5148\u4fee\u6539\u5b9a\u4e49\u90e8\u5206\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CancelToken {\n  promise: Promise<Cancel>\n  reason?: Cancel\n}\n")),(0,o.kt)("p",null,"\u518d\u4fee\u6539\u5b9e\u73b0\u90e8\u5206\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import Cancel from './Cancel'\n\ninterface ResolvePromise {\n  (reason?: Cancel): void\n}\n\nexport default class CancelToken {\n  promise: Promise<Cancel>\n  reason?: Cancel\n\n  constructor(executor: CancelExecutor) {\n    let resolvePromise: ResolvePromise\n    this.promise = new Promise<Cancel>(resolve => {\n      resolvePromise = resolve\n    })\n\n    executor(message => {\n      if (this.reason) {\n        return\n      }\n      this.reason = new Cancel(message)\n      resolvePromise(this.reason)\n    })\n  }\n}\n")),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u6269\u5c55\u4e00\u4e9b\u9759\u6001\u65b9\u6cd5\uff0c\u4f9b\u7528\u6237\u4f7f\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"axios.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import CancelToken from './cancel/CancelToken'\nimport Cancel, { isCancel } from './cancel/Cancel'\n\naxios.CancelToken = CancelToken\naxios.Cancel = Cancel\naxios.isCancel = isCancel\n")),(0,o.kt)("h2",{id:"\u989d\u5916\u903b\u8f91\u5b9e\u73b0"},"\u989d\u5916\u903b\u8f91\u5b9e\u73b0"),(0,o.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5b9e\u73b0\u4e00\u4e9b\u989d\u5916\u903b\u8f91\uff0c\u6bd4\u5982\u5f53\u4e00\u4e2a\u8bf7\u6c42\u643a\u5e26\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancelToken")," \u5df2\u7ecf\u88ab\u4f7f\u7528\u8fc7\uff0c\u90a3\u4e48\u6211\u4eec\u751a\u81f3\u90fd\u53ef\u4ee5\u4e0d\u53d1\u9001\u8fd9\u4e2a\u8bf7\u6c42\uff0c\u53ea\u9700\u8981\u629b\u4e00\u4e2a\u5f02\u5e38\u5373\u53ef\uff0c\u5e76\u4e14\u629b\u5f02\u5e38\u7684\u4fe1\u606f\u5c31\u662f\u6211\u4eec\u53d6\u6d88\u7684\u539f\u56e0\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"CancelToken")," \u6269\u5c55\u4e00\u4e2a\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u5148\u4fee\u6539\u5b9a\u4e49\u90e8\u5206\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CancelToken {\n  promise: Promise<Cancel>\n  reason?: Cancel\n\n  throwIfRequested(): void\n}\n")),(0,o.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"throwIfRequested")," \u65b9\u6cd5\uff0c\u63a5\u4e0b\u6765\u5b9e\u73b0\u5b83\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cancel/CancelToken.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default class CancelToken {\n  // ...\n\n  throwIfRequested(): void {\n    if (this.reason) {\n      throw this.reason\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u5224\u65ad\u5982\u679c\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"this.reason"),"\uff0c\u8bf4\u660e\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," \u5df2\u7ecf\u88ab\u4f7f\u7528\u8fc7\u4e86\uff0c\u76f4\u63a5\u629b\u9519\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5728\u53d1\u9001\u8bf7\u6c42\u524d\u589e\u52a0\u4e00\u6bb5\u903b\u8f91\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/dispatchRequest.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {\n  throwIfCancellationRequested(config)\n  processConfig(config)\n\n  // ...\n}\n\nfunction throwIfCancellationRequested(config: AxiosRequestConfig): void {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested()\n  }\n}\n")),(0,o.kt)("p",null,"\u53d1\u9001\u8bf7\u6c42\u524d\u68c0\u67e5\u4e00\u4e0b\u914d\u7f6e\u7684 cancelToken \u662f\u5426\u5df2\u7ecf\u4f7f\u7528\u8fc7\u4e86\uff0c\u5982\u679c\u5df2\u7ecf\u88ab\u7528\u8fc7\u5219\u4e0d\u7528\u6cd5\u8bf7\u6c42\uff0c\u76f4\u63a5\u629b\u5f02\u5e38\u3002"),(0,o.kt)("h2",{id:"demo-\u7f16\u5199"},"demo \u7f16\u5199"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u76ee\u5f55\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Cancel example</title>\n  </head>\n  <body>\n    <script src="/__build__/cancel.js"><\/script>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"\u63a5\u7740\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"app.ts")," \u4f5c\u4e3a\u5165\u53e3\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios, { Canceler } from '../../src/index'\n\nconst CancelToken = axios.CancelToken\nconst source = CancelToken.source()\n\naxios.get('/cancel/get', {\n  cancelToken: source.token\n}).catch(function(e) {\n  if (axios.isCancel(e)) {\n    console.log('Request canceled', e.message)\n  }\n})\n\nsetTimeout(() => {\n  source.cancel('Operation canceled by the user.')\n\n  axios.post('/cancel/post', { a: 1 }, { cancelToken: source.token }).catch(function(e) {\n    if (axios.isCancel(e)) {\n      console.log(e.message)\n    }\n  })\n}, 100)\n\nlet cancel: Canceler\n\naxios.get('/cancel/get', {\n  cancelToken: new CancelToken(c => {\n    cancel = c\n  })\n}).catch(function(e) {\n  if (axios.isCancel(e)) {\n    console.log('Request canceled')\n  }\n})\n\nsetTimeout(() => {\n  cancel()\n}, 200)\n")),(0,o.kt)("p",null,"\u6211\u4eec\u7684 demo \u5c55\u793a\u4e86 2 \u79cd\u4f7f\u7528\u65b9\u5f0f\uff0c\u4e5f\u6f14\u793a\u4e86\u5982\u679c\u4e00\u4e2a token \u5df2\u7ecf\u88ab\u4f7f\u7528\u8fc7\uff0c\u5219\u518d\u6b21\u643a\u5e26\u8be5 token \u7684\u8bf7\u6c42\u5e76\u4e0d\u4f1a\u53d1\u9001\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u5b8c\u6210\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u7684\u8bf7\u6c42\u53d6\u6d88\u529f\u80fd\uff0c\u6211\u4eec\u5de7\u5999\u5730\u5229\u7528\u4e86 Promise \u5b9e\u73b0\u4e86\u5f02\u6b65\u5206\u79bb\u3002\u76ee\u524d\u5b98\u65b9 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u5e93\u7684\u4e00\u4e9b\u5927\u7684 feature \u6211\u4eec\u90fd\u5df2\u7ecf\u5b9e\u73b0\u4e86\uff0c\u4e0b\u9762\u7684\u7ae0\u8282\u6211\u4eec\u5c31\u5f00\u59cb\u8865\u5145\u5b8c\u5584 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u7684\u5176\u5b83\u529f\u80fd\u3002"))}u.isMDXComponent=!0}}]);