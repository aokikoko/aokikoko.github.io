"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2059],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1317:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={title:"[TS] ts-axios(18) - \u9759\u6001\u65b9\u6cd5\u6269\u5c55",sidebar_position:26},l=void 0,p={unversionedId:"TypeScript/ts-axios-18",id:"TypeScript/ts-axios-18",title:"[TS] ts-axios(18) - \u9759\u6001\u65b9\u6cd5\u6269\u5c55",description:"----------------------------------------------------------------",source:"@site/docs/TypeScript/ts-axios-18.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts-axios-18",permalink:"/docs/TypeScript/ts-axios-18",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/ts-axios-18.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"[TS] ts-axios(18) - \u9759\u6001\u65b9\u6cd5\u6269\u5c55",sidebar_position:26},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(17) - \u53c2\u6570\u5e8f\u5217\u5316\u4e0ebaseURL",permalink:"/docs/TypeScript/ts-axios-17"},next:{title:"[TS] ts-axios(19) - \u5355\u5143\u6d4b\u8bd5(Jest\u5b89\u88c5\u914d\u7f6e)",permalink:"/docs/TypeScript/ts-axios-19"}},c=[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",children:[],level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[],level:2},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,o.kt)("p",null,"\u5b98\u65b9 axios \u5e93\u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.all"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"axios.spread")," \u7b49\u65b9\u6cd5\uff0c\u5b83\u4eec\u7684\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function getUserAccount() {\n  return axios.get('/user/12345');\n}\n\nfunction getUserPermissions() {\n  return axios.get('/user/12345/permissions');\n}\n\naxios.all([getUserAccount(), getUserPermissions()])\n  .then(axios.spread(function (acct, perms) {\n    // Both requests are now complete\n  }));\n")),(0,o.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"axios.all")," \u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," \u7684\u5c01\u88c5\uff0c\u5b83\u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u6570\u7ec4\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u51fd\u6570\u7684\u53c2\u6570\u672c\u5e94\u662f\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise resolves"),"\uff08\u6570\u7ec4\uff09\u7684\u51fd\u6570\uff0c\u5728\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.spread")," \u65b9\u6cd5\u3002\u6240\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.spread")," \u65b9\u6cd5\u662f\u63a5\u6536\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u65b0\u51fd\u6570\u7684\u7ed3\u6784\u6ee1\u8db3 ",(0,o.kt)("inlineCode",{parentName:"p"},"then")," \u51fd\u6570\u7684\u53c2\u6570\u7ed3\u6784\u3002"),(0,o.kt)("p",null,"\u4e2a\u4eba\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u8fd9\u4fe9\u9759\u6001\u65b9\u6cd5\u5728\u76ee\u524d\u770b\u6765\u5f88\u9e21\u808b\uff0c\u56e0\u4e3a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u4e00\u6837\u53ef\u4ee5\u5b8c\u6210\u8fd9\u4fe9\u9700\u6c42\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function getUserAccount() {\n  return axios.get('/user/12345');\n}\n\nfunction getUserPermissions() {\n  return axios.get('/user/12345/permissions');\n}\n\nPromise.all([getUserAccount(), getUserPermissions()])\n  .then(([acct,perms]) {\n    // Both requests are now complete\n  }));\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise.all")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u6570\u7ec4\u7684\u89e3\u6784\u62ff\u5230\u6bcf\u4e2a\u8bf7\u6c42\u5bf9\u5e94\u7684\u54cd\u5e94\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u4e3a\u4e86\u4fdd\u6301\u4e0e\u5b98\u7f51 axios API \u4e00\u81f4\uff0c\u6211\u4eec\u4e5f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5e93\u4e2d\u5b9e\u73b0\u8fd9\u4fe9\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u5b98\u65b9 axios \u5e93\u4e5f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.Axios")," \u5bf9\u5916\u66b4\u9732\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b(\u611f\u89c9\u4e5f\u6ca1\u6709\u5565\u4f7f\u7528\u573a\u666f\uff0c\u4f46\u4e3a\u4e86\u4fdd\u6301\u4e00\u81f4\uff0c\u6211\u4eec\u4e5f\u4f1a\u5b9e\u73b0)\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u5bf9\u4e8e axios \u5b9e\u4f8b\uff0c\u5b98\u7f51\u8fd8\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"getUri")," \u65b9\u6cd5\u5728\u4e0d\u53d1\u9001\u8bf7\u6c42\u7684\u524d\u63d0\u4e0b\u6839\u636e\u4f20\u5165\u7684\u914d\u7f6e\u8fd4\u56de\u4e00\u4e2a url\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const fakeConfig = {\n  baseURL: 'https://www.baidu.com/',\n  url: '/user/12345',\n  params: {\n    idClient: 1,\n    idTest: 2,\n    testString: 'thisIsATest'\n  }\n}\nconsole.log(axios.getUri(fakeConfig))\n// https://www.baidu.com/user/12345?idClient=1&idTest=2&testString=thisIsATest\n")),(0,o.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("p",null,"\u9996\u5148\u4fee\u6539\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosClassStatic {\n  new (config: AxiosRequestConfig): Axios\n}\n\nexport interface AxiosStatic extends AxiosInstance {\n  // ...\n\n  all<T>(promises: Array<T | Promise<T>>): Promise<T[]>\n\n  spread<T, R>(callback: (...args: T[]) => R): (arr: T[]) => R\n\n  Axios: AxiosClassStatic\n}\n\nexport interface Axios {\n  // ...\n\n  getUri(config?: AxiosRequestConfig): string\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u53bb\u5b9e\u73b0\u8fd9\u51e0\u4e2a\u9759\u6001\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"axios.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.all = function all(promises) {\n  return Promise.all(promises)\n}\n\naxios.spread = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr)\n  }\n}\n\naxios.Axios = Axios\n")),(0,o.kt)("p",null,"\u6700\u540e\u6211\u4eec\u53bb\u7ed9 Axios \u6dfb\u52a0\u5b9e\u4f8b\u65b9\u6cd5 ",(0,o.kt)("inlineCode",{parentName:"p"},"getUri"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/Axios.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getUri(config?: AxiosRequestConfig): string {\n  config = mergeConfig(this.defaults, config)\n  return transformURL(config)\n}\n")),(0,o.kt)("p",null,"\u5148\u548c\u9ed8\u8ba4\u914d\u7f6e\u5408\u5e76\uff0c\u7136\u540e\u518d\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatchRequest")," \u4e2d\u5b9e\u73b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"transformURL")," \u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),"\u3002"),(0,o.kt)("h2",{id:"demo-\u7f16\u5199"},"demo \u7f16\u5199"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function getA() {\n  return axios.get('/more/A')\n}\n\nfunction getB() {\n  return axios.get('/more/B')\n}\n\naxios.all([getA(), getB()])\n  .then(axios.spread(function(resA, resB) {\n    console.log(resA.data)\n    console.log(resB.data)\n  }))\n\n\naxios.all([getA(), getB()])\n  .then(([resA, resB]) => {\n    console.log(resA.data)\n    console.log(resB.data)\n  })\n\nconst fakeConfig = {\n  baseURL: 'https://www.baidu.com/',\n  url: '/user/12345',\n  params: {\n    idClient: 1,\n    idTest: 2,\n    testString: 'thisIsATest'\n  }\n}\nconsole.log(axios.getUri(fakeConfig))\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.all")," \u540c\u65f6\u53d1\u51fa\u4e86 2 \u4e2a\u8bf7\u6c42\uff0c\u8fd4\u56de\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," \u6570\u7ec4\uff0c\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.spread")," \u7684\u53c2\u6570\u51fd\u6570\u4e2d\u62ff\u5230\u7ed3\u679c\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 then \u51fd\u6570\u7684\u53c2\u6570\u51fd\u6570\u4e2d\u62ff\u5230\u7ed3\u679c\u3002\u53e6\u5916\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e ",(0,o.kt)("inlineCode",{parentName:"p"},"axios.getUri")," \u65b9\u6cd5\u5728\u4e0d\u53d1\u9001\u8bf7\u6c42\u7684\u60c5\u51b5\u4e0b\u6839\u636e\u914d\u7f6e\u5f97\u5230\u6700\u7ec8\u8bf7\u6c42\u7684 url \u7ed3\u679c\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5c31\u5b9e\u73b0\u4e86\u5b98\u7f51 axios \u5e93\u5728\u6d4f\u89c8\u5668\u7aef\u7684\u6240\u6709\u9700\u6c42\u3002\u5982\u679c\u4f60\u5b66\u5230\u4e86\u8fd9\u91cc\uff0c\u5148\u4e3a\u81ea\u5df1\u9f13\u4e2a\u638c\u5427\uff0c\u56e0\u4e3a\u6211\u4eec\u5df2\u7ecf\u83b7\u5f97\u4e86\u9636\u6bb5\u6027\u7684\u5b66\u4e60\u6210\u679c\u4e86\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u5bf9\u4e8e\u6240\u5199\u4ee3\u7801\u7684\u9a8c\u8bc1\u90fd\u662f\u901a\u8fc7 demo \u7684\u65b9\u5f0f\uff0c\u4f46\u662f demo \u6bd5\u7adf\u96be\u4ee5\u8986\u76d6\u6240\u6709\u573a\u666f\u548c\u4ee3\u7801\u5206\u652f\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u4ee3\u7801\u7684\u6b63\u786e\u6027\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u66f4\u79d1\u5b66\u7684\u65b9\u5f0f\u3002\u4ece\u4e0b\u4e00\u7ae0\u5f00\u59cb\uff0c\u6211\u4eec\u4f1a\u5b66\u4e60\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\uff0c\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5\u7684\u65b9\u5f0f\u6765\u4fdd\u8bc1\u6211\u4eec\u7684\u4ee3\u7801\u6b63\u786e\u6027\u3002"))}m.isMDXComponent=!0}}]);