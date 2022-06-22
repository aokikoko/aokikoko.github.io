"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4446],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),c=a,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return t?i.createElement(k,r(r({ref:n},d),{},{components:t})):i.createElement(k,r({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45326:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const o={title:"[TS] ts-axios(9) - \u63a5\u53e3\u6269\u5c55",sidebar_position:17},r=void 0,s={unversionedId:"TypeScript/ts-axios-9",id:"TypeScript/ts-axios-9",title:"[TS] ts-axios(9) - \u63a5\u53e3\u6269\u5c55",description:"-----",source:"@site/docs/TypeScript/ts-axios-9.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts-axios-9",permalink:"/docs/TypeScript/ts-axios-9",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/ts-axios-9.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{title:"[TS] ts-axios(9) - \u63a5\u53e3\u6269\u5c55",sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(8) - \u5f02\u5e38\u5904\u7406",permalink:"/docs/TypeScript/ts-axios-8"},next:{title:"[TS] ts-axios(10) - \u62e6\u622a\u5668\u5b9e\u73b0",permalink:"/docs/TypeScript/ts-axios-10"}},p=[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",children:[],level:2},{value:"\u63a5\u53e3\u7c7b\u578b\u5b9a\u4e49",id:"\u63a5\u53e3\u7c7b\u578b\u5b9a\u4e49",children:[],level:2},{value:"\u521b\u5efa Axios \u7c7b",id:"\u521b\u5efa-axios-\u7c7b",children:[],level:2},{value:"\u6df7\u5408\u5bf9\u8c61\u5b9e\u73b0",id:"\u6df7\u5408\u5bf9\u8c61\u5b9e\u73b0",children:[],level:2},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199",children:[],level:2},{value:"\u54cd\u5e94\u6570\u636e\u652f\u6301\u6cdb\u578b",id:"\u54cd\u5e94\u6570\u636e\u652f\u6301\u6cdb\u578b",children:[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790-1",children:[],level:3},{value:"\u63a5\u53e3\u6dfb\u52a0\u6cdb\u578b\u53c2\u6570",id:"\u63a5\u53e3\u6dfb\u52a0\u6cdb\u578b\u53c2\u6570",children:[],level:3},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199-1",children:[],level:3}],level:2},{value:"axios \u51fd\u6570\u91cd\u8f7d",id:"axios-\u51fd\u6570\u91cd\u8f7d",children:[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790-2",children:[],level:3},{value:"\u91cd\u8f7d\u5b9e\u73b0",id:"\u91cd\u8f7d\u5b9e\u73b0",children:[],level:3},{value:"\u7f16\u5199 demo",id:"\u7f16\u5199-demo",children:[],level:3}],level:2}],l={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,a.kt)("p",null,"\u4e3a\u4e86\u7528\u6237\u66f4\u52a0\u65b9\u4fbf\u5730\u4f7f\u7528 axios \u53d1\u9001\u8bf7\u6c42\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u6240\u6709\u652f\u6301\u8bf7\u6c42\u65b9\u6cd5\u6269\u5c55\u4e00\u4e9b\u63a5\u53e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.request(config)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.get(url[, config])"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.delete(url[, config])"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.head(url[, config])"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.options(url[, config])"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.post(url[, data[, config]])"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.put(url[, data[, config]])"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"axios.patch(url[, data[, config]])")))),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86\u8fd9\u4e9b\u65b9\u6cd5\uff0c\u6211\u4eec\u5c31\u4e0d\u5fc5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u4e2d\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"method"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"data")," \u8fd9\u4e9b\u5c5e\u6027\u4e86\u3002"),(0,a.kt)("p",null,"\u4ece\u9700\u6c42\u4e0a\u6765\u770b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u4e0d\u518d\u5355\u5355\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u66f4\u50cf\u662f\u4e00\u4e2a\u6df7\u5408\u5bf9\u8c61\uff0c\u672c\u8eab\u662f\u4e00\u4e2a\u65b9\u6cd5\uff0c\u53c8\u6709\u5f88\u591a\u65b9\u6cd5\u5c5e\u6027\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u5b9e\u73b0\u8fd9\u4e2a\u6df7\u5408\u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"\u63a5\u53e3\u7c7b\u578b\u5b9a\u4e49"},"\u63a5\u53e3\u7c7b\u578b\u5b9a\u4e49"),(0,a.kt)("p",null,"\u6839\u636e\u9700\u6c42\u5206\u6790\uff0c\u6df7\u5408\u5bf9\u8c61 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u672c\u8eab\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u518d\u5b9e\u73b0\u4e00\u4e2a\u5305\u62ec\u5b83\u5c5e\u6027\u65b9\u6cd5\u7684\u7c7b\uff0c\u7136\u540e\u628a\u8fd9\u4e2a\u7c7b\u7684\u539f\u578b\u5c5e\u6027\u548c\u81ea\u8eab\u5c5e\u6027\u518d\u62f7\u8d1d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u4e0a\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5148\u6765\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u6df7\u5408\u5bf9\u8c61\u5b9a\u4e49\u63a5\u53e3\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface Axios {\n  request(config: AxiosRequestConfig): AxiosPromise\n\n  get(url: string, config?: AxiosRequestConfig): AxiosPromise\n\n  delete(url: string, config?: AxiosRequestConfig): AxiosPromise\n\n  head(url: string, config?: AxiosRequestConfig): AxiosPromise\n\n  options(url: string, config?: AxiosRequestConfig): AxiosPromise\n\n  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise\n\n  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise\n\n  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise\n}\n\nexport interface AxiosInstance extends Axios {\n  (config: AxiosRequestConfig): AxiosPromise\n}\n\nexport interface AxiosRequestConfig {\n  url?: string\n  // ...\n}\n\n")),(0,a.kt)("p",null,"\u9996\u5148\u5b9a\u4e49\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b\u578b\u63a5\u53e3\uff0c\u5b83\u63cf\u8ff0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b\u4e2d\u7684\u516c\u5171\u65b9\u6cd5\uff0c\u63a5\u7740\u5b9a\u4e49\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosInstance")," \u63a5\u53e3\u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios"),"\uff0c\u5b83\u5c31\u662f\u4e00\u4e2a\u6df7\u5408\u7c7b\u578b\u7684\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\u53e6\u5916 ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosRequestConfig")," \u7c7b\u578b\u63a5\u53e3\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u5c5e\u6027\u53d8\u6210\u4e86\u53ef\u9009\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa-axios-\u7c7b"},"\u521b\u5efa Axios \u7c7b"),(0,a.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b\uff0c\u6765\u5b9e\u73b0\u63a5\u53e3\u5b9a\u4e49\u7684\u516c\u5171\u65b9\u6cd5\u3002\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u76ee\u5f55\uff0c\u7528\u6765\u5b58\u653e\u53d1\u9001\u8bf7\u6c42\u6838\u5fc3\u6d41\u7a0b\u7684\u4ee3\u7801\u3002\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios.ts")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"core/Axios.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AxiosRequestConfig, AxiosPromise, Method } from '../types'\nimport dispatchRequest from './dispatchRequest'\n\nexport default class Axios {\n  request(config: AxiosRequestConfig): AxiosPromise {\n    return dispatchRequest(config)\n  }\n\n  get(url: string, config?: AxiosRequestConfig): AxiosPromise {\n    return this._requestMethodWithoutData('get', url, config)\n  }\n\n  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {\n    return this._requestMethodWithoutData('delete', url, config)\n  }\n\n  head(url: string, config?: AxiosRequestConfig): AxiosPromise {\n    return this._requestMethodWithoutData('head', url, config)\n  }\n\n  options(url: string, config?: AxiosRequestConfig): AxiosPromise {\n    return this._requestMethodWithoutData('options', url, config)\n  }\n\n  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {\n    return this._requestMethodWithData('post', url, data, config)\n  }\n\n  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {\n    return this._requestMethodWithData('put', url, data, config)\n  }\n\n  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {\n    return this._requestMethodWithData('patch', url, data, config)\n  }\n\n  _requestMethodWithoutData(method: Method, url: string, config?: AxiosRequestConfig) {\n    return this.request(\n      Object.assign(config || {}, {\n        method,\n        url\n      })\n    )\n  }\n\n  _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {\n    return this.request(\n      Object.assign(config || {}, {\n        method,\n        url,\n        data\n      })\n    )\n  }\n}\n")),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u65b9\u6cd5\u7684\u529f\u80fd\u548c\u6211\u4eec\u4e4b\u524d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u51fd\u6570\u529f\u80fd\u662f\u4e00\u81f4\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u51fd\u6570\u7684\u529f\u80fd\u5c31\u662f\u53d1\u9001\u8bf7\u6c42\uff0c\u57fa\u4e8e\u6a21\u5757\u5316\u7f16\u7a0b\u7684\u601d\u60f3\uff0c\u6211\u4eec\u628a\u8fd9\u90e8\u5206\u529f\u80fd\u62bd\u51fa\u4e00\u4e2a\u5355\u72ec\u7684\u6a21\u5757\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatchRequest")," \u65b9\u6cd5\uff0c\u628a\u4e4b\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"axios.ts")," \u7684\u76f8\u5173\u4ee3\u7801\u62f7\u8d1d\u8fc7\u53bb\u3002\u53e6\u5916\u6211\u4eec\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"xhr.ts")," \u6587\u4ef6\u4e5f\u8fc1\u79fb\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"core/dispatchRequest.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../types'\nimport xhr from './xhr'\nimport { buildURL } from '../helpers/url'\nimport { transformRequest, transformResponse } from '../helpers/data'\nimport { processHeaders } from '../helpers/headers'\n\nexport default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {\n  processConfig(config)\n  return xhr(config).then(res => {\n    return transformResponseData(res)\n  })\n}\n\nfunction processConfig(config: AxiosRequestConfig): void {\n  config.url = transformURL(config)\n  config.headers = transformHeaders(config)\n  config.data = transformRequestData(config)\n}\n\nfunction transformURL(config: AxiosRequestConfig): string {\n  const { url, params } = config\n  return buildURL(url, params)\n}\n\nfunction transformRequestData(config: AxiosRequestConfig): any {\n  return transformRequest(config.data)\n}\n\nfunction transformHeaders(config: AxiosRequestConfig) {\n  const { headers = {}, data } = config\n  return processHeaders(headers, data)\n}\n\nfunction transformResponseData(res: AxiosResponse): AxiosResponse {\n  res.data = transformResponse(res.data)\n  return res\n}\n")),(0,a.kt)("p",null,"\u56de\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios.ts")," \u6587\u4ef6\uff0c\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"head"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"post"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"patch"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"put")," \u8fd9\u4e9b\u65b9\u6cd5\uff0c\u90fd\u662f\u5bf9\u5916\u63d0\u4f9b\u7684\u8bed\u6cd5\u7cd6\uff0c\u5185\u90e8\u90fd\u662f\u901a\u8fc7\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u65b9\u6cd5\u5b9e\u73b0\u53d1\u9001\u8bf7\u6c42\uff0c\u53ea\u4e0d\u8fc7\u5728\u8c03\u7528\u4e4b\u524d\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u505a\u4e86\u4e00\u5c42\u5408\u5e76\u5904\u7406\u3002"),(0,a.kt)("h2",{id:"\u6df7\u5408\u5bf9\u8c61\u5b9e\u73b0"},"\u6df7\u5408\u5bf9\u8c61\u5b9e\u73b0"),(0,a.kt)("p",null,"\u6df7\u5408\u5bf9\u8c61\u5b9e\u73b0\u601d\u8def\u5f88\u7b80\u5355\uff0c\u9996\u5148\u8fd9\u4e2a\u5bf9\u8c61\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5176\u6b21\u8fd9\u4e2a\u5bf9\u8c61\u8981\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b\u7684\u6240\u6709\u539f\u578b\u5c5e\u6027\u548c\u5b9e\u4f8b\u5c5e\u6027\uff0c\u6211\u4eec\u9996\u5148\u6765\u5b9e\u73b0\u4e00\u4e2a\u8f85\u52a9\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"extend"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"helpers/util.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export function extend<T, U>(to: T, from: U): T & U {\n  for (const key in from) {\n    ;(to as T & U)[key] = from[key] as any\n  }\n  return to as T & U\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"extend")," \u65b9\u6cd5\u7684\u5b9e\u73b0\u7528\u5230\u4e86\u4ea4\u53c9\u7c7b\u578b\uff0c\u5e76\u4e14\u7528\u5230\u4e86\u7c7b\u578b\u65ad\u8a00\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," \u7684\u6700\u7ec8\u76ee\u7684\u662f\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," \u91cc\u7684\u5c5e\u6027\u90fd\u6269\u5c55\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," \u4e2d\uff0c\u5305\u62ec\u539f\u578b\u4e0a\u7684\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u63a5\u4e0b\u6765\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios.ts")," \u6587\u4ef6\u505a\u4fee\u6539\uff0c\u6211\u4eec\u7528\u5de5\u5382\u6a21\u5f0f\u53bb\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u6df7\u5408\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"axios.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AxiosInstance } from './types'\nimport Axios from './core/Axios'\nimport { extend } from './helpers/util'\n\nfunction createInstance(): AxiosInstance {\n  const context = new Axios()\n  const instance = Axios.prototype.request.bind(context)\n\n  extend(instance, context)\n\n  return instance as AxiosInstance\n}\n\nconst axios = createInstance()\n\nexport default axios\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"createInstance")," \u5de5\u5382\u51fd\u6570\u7684\u5185\u90e8\uff0c\u6211\u4eec\u9996\u5148\u5b9e\u4f8b\u5316\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u5b9e\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\uff0c\u63a5\u7740\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"instance")," \u6307\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios.prototype.request")," \u65b9\u6cd5\uff0c\u5e76\u7ed1\u5b9a\u4e86\u4e0a\u4e0b\u6587 ",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\uff1b\u63a5\u7740\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," \u65b9\u6cd5\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u4e2d\u7684\u539f\u578b\u65b9\u6cd5\u548c\u5b9e\u4f8b\u65b9\u6cd5\u5168\u90e8\u62f7\u8d1d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"instance")," \u4e0a\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u4e00\u4e2a\u6df7\u5408\u5bf9\u8c61\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"instance")," \u672c\u8eab\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u53c8\u62e5\u6709\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b\u7684\u6240\u6709\u539f\u578b\u548c\u5b9e\u4f8b\u5c5e\u6027\uff0c\u6700\u7ec8\u628a\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"instance")," \u8fd4\u56de\u3002\u7531\u4e8e\u8fd9\u91cc ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," \u4e0d\u80fd\u6b63\u786e\u63a8\u65ad ",(0,a.kt)("inlineCode",{parentName:"p"},"instance")," \u7684\u7c7b\u578b\uff0c\u6211\u4eec\u628a\u5b83\u65ad\u8a00\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosInstance")," \u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createInstance")," \u5de5\u5382\u51fd\u6570\u521b\u5efa\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios"),"\uff0c\u5f53\u76f4\u63a5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u65b9\u6cd5\u5c31\u76f8\u5f53\u4e8e\u6267\u884c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u65b9\u6cd5\u53d1\u9001\u8bf7\u6c42\uff0c\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios.get"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"axios.post")," \u7b49\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"demo-\u7f16\u5199"},"demo \u7f16\u5199"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"examples")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," \u76ee\u5f55\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"extend")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Extend example</title>\n  </head>\n  <body>\n    <script src="/__build__/extend.js"><\/script>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"\u63a5\u7740\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"app.ts")," \u4f5c\u4e3a\u5165\u53e3\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from '../../src/index'\n\naxios({\n  url: '/extend/post',\n  method: 'post',\n  data: {\n    msg: 'hi'\n  }\n})\n\naxios.request({\n  url: '/extend/post',\n  method: 'post',\n  data: {\n    msg: 'hello'\n  }\n})\n\naxios.get('/extend/get')\n\naxios.options('/extend/options')\n\naxios.delete('/extend/delete')\n\naxios.head('/extend/head')\n\naxios.post('/extend/post', { msg: 'post' })\n\naxios.put('/extend/put', { msg: 'put' })\n\naxios.patch('/extend/patch', { msg: 'patch' })\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u547d\u4ee4\u884c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),"\uff0c\u63a5\u7740\u6253\u5f00 chrome \u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/")," \u5373\u53ef\u8bbf\u95ee\u6211\u4eec\u7684 demo \u4e86\uff0c\u6211\u4eec\u70b9\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Extend")," \u76ee\u5f55\u4e0b\uff0c\u901a\u8fc7\u5f00\u53d1\u8005\u5de5\u5177\u7684 network \u90e8\u5206\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6bcf\u4e2a\u8bf7\u6c42\u7684\u53d1\u9001\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u81f3\u6b64\u6211\u4eec\u652f\u6301\u4e86\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," API \u7684\u6269\u5c55\uff0c\u628a\u5b83\u53d8\u6210\u4e86\u4e00\u4e2a\u6df7\u5408\u5bf9\u8c61\u3002\u5b98\u65b9\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u5b9e\u4f8b\u9664\u4e86\u652f\u6301\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios(config)"),"\uff0c\u8fd8\u652f\u6301\u4e86\u4f20\u5165 2 \u4e2a\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios(url, config)"),"\uff0c\u8fd9\u91cc\u5c31\u6d89\u53ca\u5230\u51fd\u6570\u91cd\u8f7d\u7684\u6982\u5ff5\u4e86\uff0c\u4e0b\u4e00\u8282\u6211\u4eec\u6765\u5b9e\u73b0\u8fd9\u4e2a feature\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u54cd\u5e94\u6570\u636e\u652f\u6301\u6cdb\u578b"},"\u54cd\u5e94\u6570\u636e\u652f\u6301\u6cdb\u578b"),(0,a.kt)("h3",{id:"\u9700\u6c42\u5206\u6790-1"},"\u9700\u6c42\u5206\u6790"),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f1a\u628a\u540e\u7aef\u8fd4\u56de\u6570\u636e\u683c\u5f0f\u5355\u72ec\u653e\u5165\u4e00\u4e2a\u63a5\u53e3\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u8bf7\u6c42\u63a5\u53e3\u6570\u636e\nexport interface ResponseData<T = any> {\n  /**\n   * \u72b6\u6001\u7801\n   * @type { number }\n   */\n  code: number\n\n  /**\n   * \u6570\u636e\n   * @type { T }\n   */\n  result: T\n\n  /**\n   * \u6d88\u606f\n   * @type { string }\n   */\n  message: string\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u628a API \u62bd\u79bb\u6210\u5355\u72ec\u7684\u6a21\u5757\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ResponseData } from './interface.ts';\n\nexport function getUser<T>() {\n  return axios.get<ResponseData<T>>('/somepath')\n    .then(res => res.data)\n    .catch(err => console.error(err))\n}\n")),(0,a.kt)("p",null,"\u63a5\u7740\u6211\u4eec\u5199\u5165\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"User"),"\uff0c\u8fd9\u53ef\u4ee5\u8ba9 TypeScript \u987a\u5229\u63a8\u65ad\u51fa\u6211\u4eec\u60f3\u8981\u7684\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface User {\n  name: string\n  age: number\n}\n\nasync function test() {\n  // user \u88ab\u63a8\u65ad\u51fa\u4e3a\n  // {\n  //  code: number,\n  //  result: { name: string, age: number },\n  //  message: string\n  // }\n  const user = await getUser<User>()\n}\n")),(0,a.kt)("h3",{id:"\u63a5\u53e3\u6dfb\u52a0\u6cdb\u578b\u53c2\u6570"},"\u63a5\u53e3\u6dfb\u52a0\u6cdb\u578b\u53c2\u6570"),(0,a.kt)("p",null,"\u6839\u636e\u9700\u6c42\u5206\u6790\uff0c\u6211\u4eec\u9700\u8981\u7ed9\u76f8\u5173\u7684\u63a5\u53e3\u5b9a\u4e49\u6dfb\u52a0\u6cdb\u578b\u53c2\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosResponse<T = any> {\n  data: T\n  status: number\n  statusText: string\n  headers: any\n  config: AxiosRequestConfig\n  request: any\n}\n\nexport interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {\n}\n\nexport interface Axios {\n  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>\n\n  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>\n\n  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>\n\n  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>\n\n  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>\n\n  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>\n\n  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>\n\n  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>\n}\n\nexport interface AxiosInstance extends Axios {\n  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>\n\n  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5148\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosResponse")," \u63a5\u53e3\u6dfb\u52a0\u4e86\u6cdb\u578b\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"T=any")," \u8868\u793a\u6cdb\u578b\u7684\u7c7b\u578b\u53c2\u6570\u9ed8\u8ba4\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\u3002"),(0,a.kt)("p",null,"\u63a5\u7740\u6211\u4eec\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosPromise"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"Axios")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosInstance")," \u63a5\u53e3\u90fd\u52a0\u4e0a\u4e86\u6cdb\u578b\u53c2\u6570\u3002\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd9\u4e9b\u8bf7\u6c42\u7684\u8fd4\u56de\u7c7b\u578b\u90fd\u53d8\u6210\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosPromise<T>"),"\uff0c\u4e5f\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise<AxiosResponse<T>>"),"\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u4ece\u54cd\u5e94\u4e2d\u62ff\u5230\u4e86\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u4e86\u3002"),(0,a.kt)("h3",{id:"demo-\u7f16\u5199-1"},"demo \u7f16\u5199"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"examples/extend/app.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ResponseData<T = any> {\n  code: number\n  result: T\n  message: string\n}\n\ninterface User {\n  name: string\n  age: number\n}\n\nfunction getUser<T>() {\n  return axios<ResponseData<T>>('/extend/user')\n    .then(res => res.data)\n    .catch(err => console.error(err))\n}\n\n\nasync function test() {\n  const user = await getUser<User>()\n  if (user) {\n    console.log(user.result.name)\n  }\n}\n\ntest()\n")),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser<User>")," \u7684\u65f6\u5019\uff0c\u76f8\u5f53\u4e8e\u8c03\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios<ResponseData<User>>"),"\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u4f20\u5165\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u51fd\u6570\u7684\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseData<User>"),"\uff1b\u76f8\u5f53\u4e8e\u8fd4\u56de\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosPromise<T>")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\uff0c\u5b9e\u9645\u4e0a\u4e5f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise<AxiosResponse<T>>")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u7c7b\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseData<User>"),"\uff0c\u6240\u4ee5\u54cd\u5e94\u6570\u636e\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," \u7c7b\u578b\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"ResponseData<User>"),"\uff0c\u4e5f\u5c31\u662f\u5982\u4e0b\u6570\u636e\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  code: number\n  result: User\n  message: string\n}\n")),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4e5f\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"const user = await getUser<User>()")," \u8fd4\u56de\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u6570\u636e\u7c7b\u578b\uff0c\u6240\u4ee5 TypeScript \u80fd\u6b63\u786e\u63a8\u65ad\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," \u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u63a5\u53e3\u6269\u5c55\u7ae0\u8282\u5c31\u544a\u4e00\u6bb5\u843d\u4e86\uff0c\u4e0b\u4e00\u7ae0\u6211\u4eec\u6765\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u7684\u4e00\u4e2a\u975e\u5e38\u597d\u7528\u7684\u529f\u80fd \u2014\u2014 \u62e6\u622a\u5668\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"axios-\u51fd\u6570\u91cd\u8f7d"},"axios \u51fd\u6570\u91cd\u8f7d"),(0,a.kt)("h3",{id:"\u9700\u6c42\u5206\u6790-2"},"\u9700\u6c42\u5206\u6790"),(0,a.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u7684 axios \u51fd\u6570\u53ea\u652f\u6301\u4f20\u5165 1 \u4e2a\u53c2\u6570\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"axios({\n  url: '/extend/post',\n  method: 'post',\n  data: {\n    msg: 'hi'\n  }\n})\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u8be5\u51fd\u6570\u4e5f\u80fd\u652f\u6301\u4f20\u5165 2 \u4e2a\u53c2\u6570\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"axios('/extend/post', {\n  method: 'post',\n  data: {\n    msg: 'hello'\n  }\n})\n")),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"url"),"\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\uff0c\u8fd9\u4e2a\u51fd\u6570\u6709\u70b9\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"axios.get")," \u65b9\u6cd5\u652f\u6301\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u4e0d\u540c\u7684\u662f\u5982\u679c\u6211\u4eec\u60f3\u8981\u6307\u5b9a HTTP \u65b9\u6cd5\u7c7b\u578b\uff0c\u4ecd\u7136\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"method"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u5c31\u7528\u5230\u6211\u4eec\u4e4b\u524d\u6240\u5b66\u7684\u51fd\u6570\u91cd\u8f7d\u77e5\u8bc6\u70b9\u4e86\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u5b9e\u73b0\u5b83\u3002"),(0,a.kt)("h3",{id:"\u91cd\u8f7d\u5b9e\u73b0"},"\u91cd\u8f7d\u5b9e\u73b0"),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u8981\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"AxiosInstance")," \u7684\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosInstance extends Axios {\n  (config: AxiosRequestConfig): AxiosPromise\n\n  (url: string, config?: AxiosRequestConfig): AxiosPromise\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u589e\u52a0\u4e00\u79cd\u51fd\u6570\u7684\u5b9a\u4e49\uff0c\u5b83\u652f\u6301 2 \u4e2a\u53c2\u6570\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u662f\u5fc5\u9009\u53c2\u6570\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u662f\u53ef\u9009\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u51fd\u6570\u5b9e\u9645\u4e0a\u6307\u5411\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u51fd\u6570\uff0c\u6240\u4ee5\u6211\u4eec\u6765\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u51fd\u6570\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"core/Axios.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"  request(url: any, config?: any): AxiosPromise {\n    if (typeof url === 'string') {\n      if (!config) {\n        config = {}\n      }\n      config.url = url\n    } else {\n      config = url\n    }\n    return dispatchRequest(config)\n  }\n")),(0,a.kt)("p",null,"\u6211\u4eec\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u51fd\u6570\u7684\u53c2\u6570\u6539\u6210 2 \u4e2a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u8fd8\u662f\u53ef\u9009\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u63a5\u7740\u5728\u51fd\u6570\u4f53\u6211\u4eec\u5224\u65ad ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u662f\u5426\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4e00\u65e6\u5b83\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5219\u7ee7\u7eed\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," \u5224\u65ad\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u4e0d\u4f20\uff0c\u5982\u679c\u4e3a\u7a7a\u5219\u6784\u9020\u4e00\u4e2a\u7a7a\u5bf9\u8c61\uff0c\u7136\u540e\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.url")," \u4e2d\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u4e0d\u662f\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5219\u8bf4\u660e\u6211\u4eec\u4f20\u5165\u7684\u5c31\u662f\u5355\u4e2a\u53c2\u6570\uff0c\u4e14 ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\uff0c\u56e0\u6b64\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," \u8d4b\u503c\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u867d\u7136\u4fee\u6539\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u7684\u5b9e\u73b0\uff0c\u652f\u6301\u4e86 2 \u79cd\u53c2\u6570\uff0c\u4f46\u662f\u6211\u4eec\u5bf9\u5916\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," \u63a5\u53e3\u4ecd\u7136\u4e0d\u53d8\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u8fd9\u4ec5\u4ec5\u662f\u5185\u90e8\u7684\u5b9e\u73b0\u7684\u4fee\u6539\uff0c\u4e0e\u5bf9\u5916\u63a5\u53e3\u4e0d\u5fc5\u4e00\u81f4\uff0c\u53ea\u8981\u4fdd\u7559\u5b9e\u73b0\u517c\u5bb9\u63a5\u53e3\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"\u7f16\u5199-demo"},"\u7f16\u5199 demo"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"examples/extend/app.ts"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"axios({\n  url: '/extend/post',\n  method: 'post',\n  data: {\n    msg: 'hi'\n  }\n})\n\naxios('/extend/post', {\n  method: 'post',\n  data: {\n    msg: 'hello'\n  }\n})\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," 2 \u79cd\u8bf7\u6c42\u65b9\u5f0f\uff0c\u6253\u5f00\u9875\u9762\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"demo"),"\uff0c\u901a\u8fc7 network \u6211\u4eec\u53ef\u4ee5\u770b\u5230 2 \u79cd\u8bf7\u6c42\u90fd\u662f\u8fd0\u884c\u6b63\u5e38\u7684\u3002"),(0,a.kt)("p",null,"\u81f3\u6b64\u6211\u4eec\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"axios")," \u51fd\u6570\u7684\u91cd\u8f7d\u3002\u5b98\u65b9 axios \u652f\u6301\u4e86\u4e00\u79cd\u80fd\u529b\uff0c\u6211\u4eec\u53ef\u4ee5\u53bb\u5b9a\u4e49\u8fd4\u56de\u6570\u636e\u7684\u7c7b\u578b\uff0c\u5e76\u5728\u8bf7\u6c42\u7684\u65f6\u5019\u6307\u5b9a\u8be5\u7c7b\u578b\uff0c\u7136\u540e\u5728\u54cd\u5e94\u6570\u636e\u4e2d\u6211\u4eec\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u8be5\u6570\u636e\u7c7b\u578b\u3002\u4e0b\u4e00\u8282\u8bfe\u6211\u4eec\u5c31\u6765\u5b9e\u73b0\u8fd9\u4e2a feature\u3002"))}d.isMDXComponent=!0}}]);