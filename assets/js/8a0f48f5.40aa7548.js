"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2952],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?t.createElement(k,l(l({ref:n},c),{},{components:a})):t.createElement(k,l({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28060:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const i={title:"[TS] ts-axios(17) - \u53c2\u6570\u5e8f\u5217\u5316\u4e0ebaseURL",sidebar_position:25},l=void 0,s={unversionedId:"TypeScript/ts-axios-17",id:"TypeScript/ts-axios-17",title:"[TS] ts-axios(17) - \u53c2\u6570\u5e8f\u5217\u5316\u4e0ebaseURL",description:"----------------------------------------------------------------",source:"@site/docs/TypeScript/ts-axios-17.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts-axios-17",permalink:"/docs/TypeScript/ts-axios-17",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/ts-axios-17.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"[TS] ts-axios(17) - \u53c2\u6570\u5e8f\u5217\u5316\u4e0ebaseURL",sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(16) - HTTP\u6388\u6743\u4e0e\u81ea\u5b9a\u4e49\u72b6\u6001\u7801",permalink:"/docs/TypeScript/ts-axios-16"},next:{title:"[TS] ts-axios(18) - \u9759\u6001\u65b9\u6cd5\u6269\u5c55",permalink:"/docs/TypeScript/ts-axios-18"}},p=[{value:"\u81ea\u5b9a\u4e49\u53c2\u6570\u5e8f\u5217\u5316\u9700\u6c42\u5206\u6790",id:"\u81ea\u5b9a\u4e49\u53c2\u6570\u5e8f\u5217\u5316\u9700\u6c42\u5206\u6790",children:[],level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[],level:2},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199",children:[],level:2},{value:"baseURL\u9700\u6c42\u5206\u6790",id:"baseurl\u9700\u6c42\u5206\u6790",children:[{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0-1",children:[],level:3},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199-1",children:[],level:3}],level:2}],o={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u53c2\u6570\u5e8f\u5217\u5316\u9700\u6c42\u5206\u6790"},"\u81ea\u5b9a\u4e49\u53c2\u6570\u5e8f\u5217\u5316\u9700\u6c42\u5206\u6790"),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u7ae0\u8282\uff0c\u6211\u4eec\u5bf9\u8bf7\u6c42\u7684 url \u53c2\u6570\u505a\u4e86\u5904\u7406\uff0c\u6211\u4eec\u4f1a\u89e3\u6790\u4f20\u5165\u7684 params \u5bf9\u8c61\uff0c\u6839\u636e\u4e00\u5b9a\u7684\u89c4\u5219\u628a\u5b83\u89e3\u6790\u6210\u5b57\u7b26\u4e32\uff0c\u7136\u540e\u6dfb\u52a0\u5728 url \u540e\u9762\u3002\u5728\u89e3\u6790\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u5bf9\u5b57\u7b26\u4e32 encode\uff0c\u4f46\u662f\u5bf9\u4e8e\u4e00\u4e9b\u7279\u6b8a\u5b57\u7b26\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"+")," \u7b49\u5374\u4e0d\u8f6c\u4e49\uff0c\u8fd9\u662f axios \u5e93\u7684\u9ed8\u8ba4\u89e3\u6790\u89c4\u5219\u3002\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u81ea\u5df1\u5b9a\u4e49\u89e3\u6790\u89c4\u5219\uff0c\u4e8e\u662f\u6211\u4eec\u5e0c\u671b ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u80fd\u5728\u8bf7\u6c42\u914d\u7f6e\u4e2d\u5141\u8bb8\u6211\u4eec\u914d\u7f6e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"paramsSerializer")," \u51fd\u6570\u6765\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u89e3\u6790\u89c4\u5219\uff0c\u8be5\u51fd\u6570\u63a5\u53d7 ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u53c2\u6570\uff0c\u8fd4\u56de\u503c\u4f5c\u4e3a\u89e3\u6790\u540e\u7684\u7ed3\u679c\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.get('/more/get', {\n  params: {\n    a: 1,\n    b: 2,\n    c: ['a', 'b', 'c']\n  },\n  paramsSerializer(params) {\n    return qs.stringify(params, { arrayFormat: 'brackets' })\n  }\n}).then(res => {\n  console.log(res)\n})\n")),(0,r.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,r.kt)("p",null,"\u9996\u5148\u4fee\u6539\u4e00\u4e0b\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosRequestConfig {\n  // ...\n  paramsSerializer?: (params: any) => string\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildURL")," \u51fd\u6570\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helpers/url.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function buildURL(\n  url: string,\n  params?: any,\n  paramsSerializer?: (params: any) => string\n): string {\n  if (!params) {\n    return url\n  }\n\n  let serializedParams\n\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params)\n  } else if (isURLSearchParams(params)) {\n    serializedParams = params.toString()\n  } else {\n    const parts: string[] = []\n\n    Object.keys(params).forEach(key => {\n      const val = params[key]\n      if (val === null || typeof val === 'undefined') {\n        return\n      }\n      let values = []\n      if (Array.isArray(val)) {\n        values = val\n        key += '[]'\n      } else {\n        values = [val]\n      }\n      values.forEach(val => {\n        if (isDate(val)) {\n          val = val.toISOString()\n        } else if (isPlainObject(val)) {\n          val = JSON.stringify(val)\n        }\n        parts.push(`${encode(key)}=${encode(val)}`)\n      })\n    })\n\n    serializedParams = parts.join('&')\n  }\n\n  if (serializedParams) {\n    const markIndex = url.indexOf('#')\n    if (markIndex !== -1) {\n      url = url.slice(0, markIndex)\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams\n  }\n\n  return url\n}\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildURL")," \u51fd\u6570\u65b0\u589e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"paramsSerializer")," \u53ef\u9009\u53c2\u6570\uff0c\u53e6\u5916\u6211\u4eec\u8fd8\u65b0\u589e\u4e86\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," \u7c7b\u578b\u5224\u65ad\uff0c\u5982\u679c\u5b83\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," \u5bf9\u8c61\u5b9e\u4f8b\u7684\u8bdd\uff0c\u6211\u4eec\u76f4\u63a5\u8fd4\u56de\u5b83 ",(0,r.kt)("inlineCode",{parentName:"p"},"toString")," \u540e\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helpers/util.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function isURLSearchParams(val: any): val is URLSearchParams {\n  return typeof val !== 'undefined' && val instanceof URLSearchParams\n}\n")),(0,r.kt)("p",null,"\u6700\u540e\u6211\u4eec\u8981\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"buildURL")," \u8c03\u7528\u7684\u903b\u8f91\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"core/dispatchRequest.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function transformURL(config: AxiosRequestConfig): string {\n  const { url, params, paramsSerializer } = config\n  return buildURL(url!, params, paramsSerializer)\n}\n")),(0,r.kt)("h2",{id:"demo-\u7f16\u5199"},"demo \u7f16\u5199"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.get('/more/get', {\n  params: new URLSearchParams('a=b&c=d')\n}).then(res => {\n  console.log(res)\n})\n\naxios.get('/more/get', {\n  params: {\n    a: 1,\n    b: 2,\n    c: ['a', 'b', 'c']\n  }\n}).then(res => {\n  console.log(res)\n})\n\nconst instance = axios.create({\n  paramsSerializer(params) {\n    return qs.stringify(params, { arrayFormat: 'brackets' })\n  }\n})\n\ninstance.get('/more/get', {\n  params: {\n    a: 1,\n    b: 2,\n    c: ['a', 'b', 'c']\n  }\n}).then(res => {\n  console.log(res)\n})\n")),(0,r.kt)("p",null,"\u6211\u4eec\u7f16\u5199\u4e86 3 \u79cd\u60c5\u51b5\u7684\u8bf7\u6c42\uff0c\u7b2c\u4e00\u79cd\u6ee1\u8db3\u8bf7\u6c42\u7684 params \u53c2\u6570\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," \u5bf9\u8c61\u7c7b\u578b\u7684\u3002\u540e\u4e24\u79cd\u8bf7\u6c42\u7684\u7ed3\u679c\u4e3b\u8981\u533a\u522b\u5728\u4e8e\u524d\u8005\u5e76\u6ca1\u6709\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," \u8f6c\u4e49\uff0c\u800c\u540e\u8005\u4f1a\u8f6c\u4e49\u3002"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5b9e\u73b0\u4e86\u81ea\u5b9a\u4e49\u53c2\u6570\u5e8f\u5217\u5316\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"paramsSerializer")," \u81ea\u5b9a\u4e49\u53c2\u6570\u5e8f\u5217\u5316\u89c4\u5219\u3002\u4e0b\u4e00\u8282\u8bfe\u6211\u4eec\u6765\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," \u7684\u652f\u6301\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"baseurl\u9700\u6c42\u5206\u6790"},"baseURL\u9700\u6c42\u5206\u6790"),(0,r.kt)("p",null,"\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u4f1a\u8bf7\u6c42\u67d0\u4e2a\u57df\u540d\u4e0b\u7684\u591a\u4e2a\u63a5\u53e3\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u6bcf\u6b21\u53d1\u9001\u8bf7\u6c42\u90fd\u586b\u5199\u5b8c\u6574\u7684 url\uff0c\u5e0c\u671b\u53ef\u4ee5\u914d\u7f6e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL"),"\uff0c\u4e4b\u540e\u90fd\u53ef\u4ee5\u4f20\u76f8\u5bf9\u8def\u5f84\u3002\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const instance = axios.create({\n  baseURL: 'https://some-domain.com/api'\n})\n\ninstance.get('/get')\n\ninstance.post('/post')\n")),(0,r.kt)("p",null,"\u6211\u4eec\u4e00\u65e6\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL"),"\uff0c\u4e4b\u540e\u8bf7\u6c42\u4f20\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u90fd\u4f1a\u548c\u6211\u4eec\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," \u62fc\u63a5\u6210\u5b8c\u6574\u7684\u7edd\u5bf9\u5730\u5740\uff0c\u9664\u975e\u8bf7\u6c42\u4f20\u5165\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u5df2\u7ecf\u662f\u7edd\u5bf9\u5730\u5740\u3002"),(0,r.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0-1"},"\u4ee3\u7801\u5b9e\u73b0"),(0,r.kt)("p",null,"\u9996\u5148\u4fee\u6539\u4e00\u4e0b\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosRequestConfig {\n  // ...\n  baseURL?: string\n}\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u5b9e\u73b0 2 \u4e2a\u8f85\u52a9\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helpers/url.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export function isAbsoluteURL(url: string): boolean {\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url)\n}\n\nexport function combineURL(baseURL: string, relativeURL?: string): string {\n  return relativeURL ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '') : baseURL\n}\n")),(0,r.kt)("p",null,"\u6700\u540e\u6211\u4eec\u6765\u8c03\u7528\u8fd9\u4fe9\u4e2a\u8f85\u52a9\u51fd\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"core/dispatchRequest.ts"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function transformURL(config: AxiosRequestConfig): string {\n  let { url, params, paramsSerializer, baseURL } = config\n  if (baseURL && !isAbsoluteURL(url!)) {\n    url = combineURL(baseURL, url)\n  }\n  return buildURL(url!, params, paramsSerializer)\n}\n")),(0,r.kt)("h3",{id:"demo-\u7f16\u5199-1"},"demo \u7f16\u5199"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const instance = axios.create({\n  baseURL: 'https://img.mukewang.com/'\n})\n\ninstance.get('5cc01a7b0001a33718720632.jpg')\n\ninstance.get('https://img.mukewang.com/szimg/5becd5ad0001b89306000338-360-202.jpg')\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a demo \u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u8bf7\u6c42\u4e86\u6155\u8bfe\u7f51\u7684 2 \u5f20\u56fe\u7247\uff0c\u6ce8\u610f\u5f53\u7b2c\u4e8c\u4e2a\u8bf7\u6c42 ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," \u5df2\u7ecf\u662f\u7edd\u5bf9\u5730\u5740\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e76\u4e0d\u4f1a\u518d\u53bb\u62fc\u63a5 ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL"),"\u3002"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5c31\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"baseURL")," \u7684\u914d\u7f6e\u529f\u80fd\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u7684\u9759\u6001\u65b9\u6cd5\u6269\u5c55\u3002"))}c.isMDXComponent=!0}}]);