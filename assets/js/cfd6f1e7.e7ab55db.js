"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7174],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(k,p(p({ref:n},c),{},{components:t})):r.createElement(k,p({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44624:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),p=["components"],a={title:"[TS] ts-axios(10) - \u62e6\u622a\u5668\u5b9e\u73b0",sidebar_position:18},s=void 0,l={unversionedId:"TypeScript/ts-axios-10",id:"TypeScript/ts-axios-10",title:"[TS] ts-axios(10) - \u62e6\u622a\u5668\u5b9e\u73b0",description:"----------------------------------------------------------------",source:"@site/docs/TypeScript/ts-axios-10.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts-axios-10",permalink:"/docs/TypeScript/ts-axios-10",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/ts-axios-10.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"[TS] ts-axios(10) - \u62e6\u622a\u5668\u5b9e\u73b0",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(9) - \u63a5\u53e3\u6269\u5c55",permalink:"/docs/TypeScript/ts-axios-9"},next:{title:"[TS] ts-axios(11) - \u914d\u7f6e\u5316\u5b9e\u73b0",permalink:"/docs/TypeScript/ts-axios-11"}},c=[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",children:[],level:2},{value:"\u6574\u4f53\u8bbe\u8ba1",id:"\u6574\u4f53\u8bbe\u8ba1",children:[],level:2},{value:"\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\u5b9e\u73b0",id:"\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\u5b9e\u73b0",children:[{value:"\u63a5\u53e3\u5b9a\u4e49",id:"\u63a5\u53e3\u5b9a\u4e49",children:[],level:3},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[],level:3}],level:2},{value:"\u94fe\u5f0f\u8c03\u7528\u5b9e\u73b0",id:"\u94fe\u5f0f\u8c03\u7528\u5b9e\u73b0",children:[],level:2},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199",children:[],level:2}],d={toc:c};function u(e){var n=e.components,a=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,o.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u80fd\u5bf9\u8bf7\u6c42\u7684\u53d1\u9001\u548c\u54cd\u5e94\u505a\u62e6\u622a\uff0c\u4e5f\u5c31\u662f\u5728\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\u548c\u63a5\u6536\u5230\u54cd\u5e94\u4e4b\u540e\u505a\u4e00\u4e9b\u989d\u5916\u903b\u8f91\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u8bbe\u8ba1\u7684\u62e6\u622a\u5668\u7684\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u6dfb\u52a0\u4e00\u4e2a\u8bf7\u6c42\u62e6\u622a\u5668\naxios.interceptors.request.use(function (config) {\n  // \u5728\u53d1\u9001\u8bf7\u6c42\u4e4b\u524d\u53ef\u4ee5\u505a\u4e00\u4e9b\u4e8b\u60c5\n  return config;\n}, function (error) {\n  // \u5904\u7406\u8bf7\u6c42\u9519\u8bef\n  return Promise.reject(error);\n});\n// \u6dfb\u52a0\u4e00\u4e2a\u54cd\u5e94\u62e6\u622a\u5668\naxios.interceptors.response.use(function (response) {\n  // \u5904\u7406\u54cd\u5e94\u6570\u636e\n  return response;\n}, function (error) {\n  // \u5904\u7406\u54cd\u5e94\u9519\u8bef\n  return Promise.reject(error);\n});\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u5bf9\u8c61\u4e0a\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors")," \u5bf9\u8c61\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u53c8\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," 2 \u4e2a\u5c5e\u6027\uff0c\u5b83\u4eec\u90fd\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," \u65b9\u6cd5\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"use")," \u65b9\u6cd5\u652f\u6301 2 \u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u7c7b\u4f3c Promise \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7c7b\u4f3c Promise \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"reject")," \u51fd\u6570\u3002\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"reject")," \u51fd\u6570\u4e2d\u6267\u884c\u540c\u6b65\u4ee3\u7801\u6216\u8005\u662f\u5f02\u6b65\u4ee3\u7801\u903b\u8f91\u3002"),(0,o.kt)("p",null,"\u5e76\u4e14\u6211\u4eec\u662f\u53ef\u4ee5\u6dfb\u52a0\u591a\u4e2a\u62e6\u622a\u5668\u7684\uff0c\u62e6\u622a\u5668\u7684\u6267\u884c\u987a\u5e8f\u662f\u94fe\u5f0f\u4f9d\u6b21\u6267\u884c\u7684\u65b9\u5f0f\u3002\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," \u62e6\u622a\u5668\uff0c\u540e\u6dfb\u52a0\u7684\u62e6\u622a\u5668\u4f1a\u5728\u8bf7\u6c42\u524d\u7684\u8fc7\u7a0b\u4e2d\u5148\u6267\u884c\uff1b\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," \u62e6\u622a\u5668\uff0c\u5148\u6dfb\u52a0\u7684\u62e6\u622a\u5668\u4f1a\u5728\u54cd\u5e94\u540e\u5148\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.interceptors.request.use(config => {\n  config.headers.test += '1'\n  return config\n})\naxios.interceptors.request.use(config => {\n  config.headers.test += '2'\n  return config\n})\n")),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u652f\u6301\u5220\u9664\u67d0\u4e2a\u62e6\u622a\u5668\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const myInterceptor = axios.interceptors.request.use(function () {/*...*/})\naxios.interceptors.request.eject(myInterceptor)\n")),(0,o.kt)("h2",{id:"\u6574\u4f53\u8bbe\u8ba1"},"\u6574\u4f53\u8bbe\u8ba1"),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u7528\u4e00\u5f20\u56fe\u6765\u5c55\u793a\u4e00\u4e0b\u62e6\u622a\u5668\u5de5\u4f5c\u6d41\u7a0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"interceptor",src:t(2312).Z})),(0,o.kt)("p",null,"\u6574\u4e2a\u8fc7\u7a0b\u662f\u4e00\u4e2a\u94fe\u5f0f\u8c03\u7528\u7684\u65b9\u5f0f\uff0c\u5e76\u4e14\u6bcf\u4e2a\u62e6\u622a\u5668\u90fd\u53ef\u4ee5\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65\u5904\u7406\uff0c\u6211\u4eec\u81ea\u7136\u800c\u7136\u5730\u5c31\u8054\u60f3\u5230\u4f7f\u7528 Promise \u94fe\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u6574\u4e2a\u8c03\u7528\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u5728\u8fd9\u4e2a Promise \u94fe\u7684\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u8bf7\u6c42\u62e6\u622a\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\u5904\u7406\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," \u5bf9\u8c61\uff0c\u800c\u76f8\u5e94\u62e6\u622a\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\u5904\u7406\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u5728\u4e86\u89e3\u4e86\u62e6\u622a\u5668\u5de5\u4f5c\u6d41\u7a0b\u540e\uff0c\u6211\u4eec\u5148\u8981\u521b\u5efa\u4e00\u4e2a\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\uff0c\u5141\u8bb8\u6211\u4eec\u53bb\u6dfb\u52a0\n\u5220\u9664\u548c\u904d\u5386\u62e6\u622a\u5668\u3002"),(0,o.kt)("h2",{id:"\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\u5b9e\u73b0"},"\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\u5b9e\u73b0"),(0,o.kt)("p",null,"\u6839\u636e\u9700\u6c42\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u62e5\u6709\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors")," \u5bf9\u8c61\u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u53c8\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"response")," 2 \u4e2a\u5c5e\u6027\uff0c\u5b83\u4eec\u5bf9\u5916\u63d0\u4f9b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," \u65b9\u6cd5\u6765\u6dfb\u52a0\u62e6\u622a\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u8fd9\u4fe9\u5c5e\u6027\u770b\u505a\u662f\u4e00\u4e2a\u62e6\u622a\u5668\u7ba1\u7406\u5bf9\u8c61\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"use")," \u65b9\u6cd5\u652f\u6301 2 \u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"reject")," \u51fd\u6570\uff0c\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\u7684\u53c2\u6570\uff0c\u8bf7\u6c42\u62e6\u622a\u5668\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"AxiosRequestConfig")," \u7c7b\u578b\u7684\uff0c\u800c\u54cd\u5e94\u62e6\u622a\u5668\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"AxiosResponse")," \u7c7b\u578b\u7684\uff1b\u800c\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"reject")," \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u5219\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u7684\u3002"),(0,o.kt)("p",null,"\u6839\u636e\u4e0a\u8ff0\u5206\u6790\uff0c\u6211\u4eec\u5148\u6765\u5b9a\u4e49\u4e00\u4e0b\u62e6\u622a\u5668\u7ba1\u7406\u5bf9\u8c61\u5bf9\u5916\u7684\u63a5\u53e3\u3002"),(0,o.kt)("h3",{id:"\u63a5\u53e3\u5b9a\u4e49"},"\u63a5\u53e3\u5b9a\u4e49"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosInterceptorManager<T> {\n  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number\n\n  eject(id: number): void\n}\n\nexport interface ResolvedFn<T=any> {\n  (val: T): T | Promise<T>\n}\n\nexport interface RejectedFn {\n  (error: any): any\n}\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5b9a\u4e49\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"AxiosInterceptorManager")," \u6cdb\u578b\u63a5\u53e3\uff0c\u56e0\u4e3a\u5bf9\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u51fd\u6570\u7684\u53c2\u6570\uff0c\u8bf7\u6c42\u62e6\u622a\u5668\u548c\u54cd\u5e94\u62e6\u622a\u5668\u662f\u4e0d\u540c\u7684\u3002"),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ResolvedFn, RejectedFn } from '../types'\n\ninterface Interceptor<T> {\n  resolved: ResolvedFn<T>\n  rejected?: RejectedFn\n}\n\nexport default class InterceptorManager<T> {\n  private interceptors: Array<Interceptor<T> | null>\n\n  constructor() {\n    this.interceptors = []\n  }\n\n  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {\n    this.interceptors.push({\n      resolved,\n      rejected\n    })\n    return this.interceptors.length - 1\n  }\n\n  forEach(fn: (interceptor: Interceptor<T>) => void): void {\n    this.interceptors.forEach(interceptor => {\n      if (interceptor !== null) {\n        fn(interceptor)\n      }\n    })\n  }\n\n  eject(id: number): void {\n    if (this.interceptors[id]) {\n      this.interceptors[id] = null\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"InterceptorManager")," \u6cdb\u578b\u7c7b\uff0c\u5185\u90e8\u7ef4\u62a4\u4e86\u4e00\u4e2a\u79c1\u6709\u5c5e\u6027 ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors"),"\uff0c\u5b83\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u7528\u6765\u5b58\u50a8\u62e6\u622a\u5668\u3002\u8be5\u7c7b\u8fd8\u5bf9\u5916\u63d0\u4f9b\u4e86 3 \u4e2a\u65b9\u6cd5\uff0c\u5176\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," \u63a5\u53e3\u5c31\u662f\u6dfb\u52a0\u62e6\u622a\u5668\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors")," \u4e2d\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," \u7528\u4e8e\u5220\u9664\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"forEach")," \u63a5\u53e3\u5c31\u662f\u904d\u5386 ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors")," \u7528\u7684\uff0c\u5b83\u652f\u6301\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\uff0c\u904d\u5386\u8fc7\u7a0b\u4e2d\u4f1a\u8c03\u7528\u8be5\u51fd\u6570\uff0c\u5e76\u628a\u6bcf\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptor")," \u4f5c\u4e3a\u8be5\u51fd\u6570\u7684\u53c2\u6570\u4f20\u5165\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"eject")," \u5c31\u662f\u5220\u9664\u4e00\u4e2a\u62e6\u622a\u5668\uff0c\u901a\u8fc7\u4f20\u5165\u62e6\u622a\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," \u5220\u9664\u3002"),(0,o.kt)("h2",{id:"\u94fe\u5f0f\u8c03\u7528\u5b9e\u73b0"},"\u94fe\u5f0f\u8c03\u7528\u5b9e\u73b0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u9700\u8981\u4f60\u5bf9 Promise \u638c\u63e1\u548c\u7406\u89e3\uff0c\u53ef\u4ee5\u524d\u5f80 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"mdn")," \u5b66\u4e60\u3002")),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u5b9e\u73b0\u597d\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\uff0c\u63a5\u4e0b\u6765\u5c31\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Axios")," \u4e2d\u5b9a\u4e49\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors")," \u5c5e\u6027\uff0c\u5b83\u7684\u7c7b\u578b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Interceptors {\n  request: InterceptorManager<AxiosRequestConfig>\n  response: InterceptorManager<AxiosResponse>\n}\n\nexport default class Axios {\n  interceptors: Interceptors\n\n  constructor() {\n    this.interceptors = {\n      request: new InterceptorManager<AxiosRequestConfig>(),\n      response: new InterceptorManager<AxiosResponse>()\n    }\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Interceptors")," \u7c7b\u578b\u62e5\u6709 2 \u4e2a\u5c5e\u6027\uff0c\u4e00\u4e2a\u8bf7\u6c42\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\u5b9e\u4f8b\uff0c\u4e00\u4e2a\u662f\u54cd\u5e94\u62e6\u622a\u5668\u7ba1\u7406\u7c7b\u5b9e\u4f8b\u3002\u6211\u4eec\u5728\u5b9e\u4f8b\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"Axios")," \u7c7b\u7684\u65f6\u5019\uff0c\u5728\u5b83\u7684\u6784\u9020\u5668\u53bb\u521d\u59cb\u5316\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptors")," \u5b9e\u4f8b\u5c5e\u6027\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," \u65b9\u6cd5\u7684\u903b\u8f91\uff0c\u6dfb\u52a0\u62e6\u622a\u5668\u94fe\u5f0f\u8c03\u7528\u7684\u903b\u8f91\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/Axios.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"interface PromiseChain {\n  resolved: ResolvedFn | ((config: AxiosRequestConfig) => AxiosPromise)\n  rejected?: RejectedFn\n}\n\nrequest(url: any, config?: any): AxiosPromise {\n  if (typeof url === 'string') {\n    if (!config) {\n      config = {}\n    }\n    config.url = url\n  } else {\n    config = url\n  }\n\n  const chain: PromiseChain[] = [{\n    resolved: dispatchRequest,\n    rejected: undefined\n  }]\n\n  this.interceptors.request.forEach(interceptor => {\n    chain.unshift(interceptor)\n  })\n\n  this.interceptors.response.forEach(interceptor => {\n    chain.push(interceptor)\n  })\n\n  let promise = Promise.resolve(config)\n\n  while (chain.length) {\n    const { resolved, rejected } = chain.shift()!\n    promise = promise.then(resolved, rejected)\n  }\n\n  return promise\n}\n")),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6784\u9020\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"PromiseChain")," \u7c7b\u578b\u7684\u6570\u7ec4 ",(0,o.kt)("inlineCode",{parentName:"p"},"chain"),"\uff0c\u5e76\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatchRequest")," \u51fd\u6570\u8d4b\u503c\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolved")," \u5c5e\u6027\uff1b\u63a5\u7740\u5148\u904d\u5386\u8bf7\u6c42\u62e6\u622a\u5668\u63d2\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"chain")," \u7684\u524d\u9762\uff1b\u7136\u540e\u518d\u904d\u5386\u54cd\u5e94\u62e6\u622a\u5668\u63d2\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"chain")," \u540e\u9762\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u5b9a\u4e49\u4e00\u4e2a\u5df2\u7ecf resolve \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"promise"),"\uff0c\u5faa\u73af\u8fd9\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"chain"),"\uff0c\u62ff\u5230\u6bcf\u4e2a\u62e6\u622a\u5668\u5bf9\u8c61\uff0c\u628a\u5b83\u4eec\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolved")," \u51fd\u6570\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"rejected")," \u51fd\u6570\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"promise.then")," \u7684\u53c2\u6570\u4e2d\uff0c\u8fd9\u6837\u5c31\u76f8\u5f53\u4e8e\u901a\u8fc7 Promise \u7684\u94fe\u5f0f\u8c03\u7528\u65b9\u5f0f\uff0c\u5b9e\u73b0\u4e86\u62e6\u622a\u5668\u4e00\u5c42\u5c42\u7684\u94fe\u5f0f\u8c03\u7528\u7684\u6548\u679c\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\u6211\u4eec\u62e6\u622a\u5668\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5bf9\u4e8e\u8bf7\u6c42\u62e6\u622a\u5668\uff0c\u5148\u6267\u884c\u540e\u6dfb\u52a0\u7684\uff0c\u518d\u6267\u884c\u5148\u6dfb\u52a0\u7684\uff1b\u800c\u5bf9\u4e8e\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u5148\u6267\u884c\u5148\u6dfb\u52a0\u7684\uff0c\u540e\u6267\u884c\u540e\u6dfb\u52a0\u7684\u3002"),(0,o.kt)("h2",{id:"demo-\u7f16\u5199"},"demo \u7f16\u5199"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptor")," \u76ee\u5f55\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"interceptor")," \u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>Interceptor example</title>\n  </head>\n  <body>\n    <script src="/__build__/interceptor.js"><\/script>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"\u63a5\u7740\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"app.ts")," \u4f5c\u4e3a\u5165\u53e3\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from '../../src/index'\n\naxios.interceptors.request.use(config => {\n  config.headers.test += '1'\n  return config\n})\naxios.interceptors.request.use(config => {\n  config.headers.test += '2'\n  return config\n})\naxios.interceptors.request.use(config => {\n  config.headers.test += '3'\n  return config\n})\n\naxios.interceptors.response.use(res => {\n  res.data += '1'\n  return res\n})\nlet interceptor = axios.interceptors.response.use(res => {\n  res.data += '2'\n  return res\n})\naxios.interceptors.response.use(res => {\n  res.data += '3'\n  return res\n})\n\naxios.interceptors.response.eject(interceptor)\n\naxios({\n  url: '/interceptor/get',\n  method: 'get',\n  headers: {\n    test: ''\n  }\n}).then((res) => {\n  console.log(res.data)\n})\n")),(0,o.kt)("p",null,"\u8be5 demo \u6211\u4eec\u6dfb\u52a0\u4e86 3 \u4e2a\u8bf7\u6c42\u62e6\u622a\u5668\uff0c\u6dfb\u52a0\u4e86 3 \u4e2a\u54cd\u5e94\u62e6\u622a\u5668\u5e76\u5220\u9664\u4e86\u7b2c\u4e8c\u4e2a\u3002\u8fd0\u884c\u8be5 demo \u6211\u4eec\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee\uff0c\u6211\u4eec\u53d1\u9001\u7684\u8bf7\u6c42\u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"test")," \u7684\u8bf7\u6c42 header\uff0c\u5b83\u7684\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"321"),"\uff1b\u6211\u4eec\u7684\u54cd\u5e94\u6570\u636e\u8fd4\u56de\u7684\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"hello"),"\uff0c\u7ecf\u8fc7\u54cd\u5e94\u62e6\u622a\u5668\u7684\u5904\u7406\uff0c\u6700\u7ec8\u6211\u4eec\u8f93\u51fa\u7684\u6570\u636e\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"hello13"),"\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5b9e\u73b0\u4e86\u62e6\u622a\u5668\u529f\u80fd\uff0c\u5b83\u662f\u4e00\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u529f\u80fd\uff0c\u5728\u5b9e\u9645\u5de5\u4f5c\u4e2d\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u5b83\u505a\u4e00\u4e9b\u9700\u6c42\u5982\u767b\u5f55\u6743\u9650\u8ba4\u8bc1\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u76ee\u524d\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"axios")," \u53d1\u9001\u8bf7\u6c42\uff0c\u5f80\u5f80\u4f1a\u4f20\u5165\u4e00\u5806\u914d\u7f6e\uff0c\u4f46\u662f\u6211\u4eec\u4e5f\u5e0c\u671b ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u672c\u8eab\u4e5f\u4f1a\u6709\u4e00\u4e9b\u9ed8\u8ba4\u914d\u7f6e\uff0c\u6211\u4eec\u628a\u7528\u6237\u4f20\u5165\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\u548c\u9ed8\u8ba4\u914d\u7f6e\u505a\u4e00\u5c42\u5408\u5e76\u3002\u5176\u5b9e\uff0c\u5927\u90e8\u5206\u7684 JS \u5e93\u90fd\u662f\u7c7b\u4f3c\u7684\u73a9\u6cd5\u3002\u4e0b\u9762\u4e00\u7ae0\u6211\u4eec\u5c31\u6765\u5b9e\u73b0\u8fd9\u4e2a feature\u3002"))}u.isMDXComponent=!0},2312:function(e,n,t){n.Z=t.p+"assets/images/interceptor-dc45003b10ac080160e109ce66c50d04.png"}}]);