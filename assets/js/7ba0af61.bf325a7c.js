"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7021],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4134:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"[TS] ts-axios(16) - HTTP\u6388\u6743\u4e0e\u81ea\u5b9a\u4e49\u72b6\u6001\u7801",sidebar_position:24},l=void 0,p={unversionedId:"TypeScript/ts-axios-16",id:"TypeScript/ts-axios-16",title:"[TS] ts-axios(16) - HTTP\u6388\u6743\u4e0e\u81ea\u5b9a\u4e49\u72b6\u6001\u7801",description:"----------------------------------------------------------------",source:"@site/docs/TypeScript/ts-axios-16.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts-axios-16",permalink:"/docs/TypeScript/ts-axios-16",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/ts-axios-16.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"[TS] ts-axios(16) - HTTP\u6388\u6743\u4e0e\u81ea\u5b9a\u4e49\u72b6\u6001\u7801",sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(15) - \u8fdb\u5ea6\u76d1\u63a7",permalink:"/docs/TypeScript/ts-axios-15"},next:{title:"[TS] ts-axios(17) - \u53c2\u6570\u5e8f\u5217\u5316\u4e0ebaseURL",permalink:"/docs/TypeScript/ts-axios-17"}},u=[{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790",children:[],level:2},{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[],level:2},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199",children:[],level:2},{value:"\u9700\u6c42\u5206\u6790",id:"\u9700\u6c42\u5206\u6790-1",children:[{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0-1",children:[],level:3},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199-1",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u9700\u6c42\u5206\u6790"},"\u9700\u6c42\u5206\u6790"),(0,o.kt)("p",null,"HTTP \u534f\u8bae\u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"},"Authorization")," \u8bf7\u6c42 header \u4f1a\u5305\u542b\u670d\u52a1\u5668\u7528\u4e8e\u9a8c\u8bc1\u7528\u6237\u4ee3\u7406\u8eab\u4efd\u7684\u51ed\u8bc1\uff0c\u901a\u5e38\u4f1a\u5728\u670d\u52a1\u5668\u8fd4\u56de 401 Unauthorized \u72b6\u6001\u7801\u4ee5\u53ca WWW-Authenticate \u6d88\u606f\u5934\u4e4b\u540e\u5728\u540e\u7eed\u8bf7\u6c42\u4e2d\u53d1\u9001\u6b64\u6d88\u606f\u5934\u3002"),(0,o.kt)("p",null,"axios \u5e93\u4e5f\u5141\u8bb8\u4f60\u5728\u8bf7\u6c42\u914d\u7f6e\u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," \u5c5e\u6027\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," \u662f\u4e00\u4e2a\u5bf9\u8c61\u7ed3\u6784\uff0c\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," 2 \u4e2a\u5c5e\u6027\u3002\u4e00\u65e6\u7528\u6237\u5728\u8bf7\u6c42\u7684\u65f6\u5019\u914d\u7f6e\u8fd9\u4fe9\u5c5e\u6027\uff0c\u6211\u4eec\u5c31\u4f1a\u81ea\u52a8\u5f80 HTTP \u7684 \u8bf7\u6c42 header \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," \u5c5e\u6027\uff0c\u5b83\u7684\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Basic \u52a0\u5bc6\u4e32"),"\u3002\n\u8fd9\u91cc\u7684\u52a0\u5bc6\u4e32\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"username:password")," base64 \u52a0\u5bc6\u540e\u7684\u7ed3\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.post('/more/post', {\n  a: 1\n}, {\n  auth: {\n    username: 'Yee',\n    password: '123456'\n  }\n}).then(res => {\n  console.log(res)\n})\n")),(0,o.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("p",null,"\u9996\u5148\u4fee\u6539\u4e00\u4e0b\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosRequestConfig {\n  // ...\n  auth?: AxiosBasicCredentials\n}\n\nexport interface AxiosBasicCredentials {\n  username: string\n  password: string\n}\n")),(0,o.kt)("p",null,"\u63a5\u7740\u4fee\u6539\u5408\u5e76\u89c4\u5219\uff0c\u56e0\u4e3a auth \u4e5f\u662f\u4e00\u4e2a\u5bf9\u8c61\u683c\u5f0f\uff0c\u6240\u4ee5\u5b83\u7684\u5408\u5e76\u89c4\u5219\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"deepMergeStrat"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/mergeConfig.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const stratKeysDeepMerge = ['headers', 'auth']\n")),(0,o.kt)("p",null,"\u7136\u540e\u4fee\u6539\u53d1\u9001\u8bf7\u6c42\u524d\u7684\u903b\u8f91\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/xhr.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n  /*...*/\n  auth\n} = config\n\nif (auth) {\n  headers['Authorization'] = 'Basic ' + btoa(auth.username + ':' + auth.password)\n}\n")),(0,o.kt)("h2",{id:"demo-\u7f16\u5199"},"demo \u7f16\u5199"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.post('/more/post', {\n  a: 1\n}, {\n  auth: {\n    username: 'Yee',\n    password: '123456'\n  }\n}).then(res => {\n  console.log(res)\n})\n")),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," \u4e2d\u5bf9\u4e8e\u8fd9\u4e2a\u8def\u7531\u63a5\u53e3\u5199\u4e86\u4e00\u6bb5\u5c0f\u903b\u8f91\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"router.post('/more/post', function(req, res) {\n  const auth = req.headers.authorization\n  const [type, credentials] = auth.split(' ')\n  console.log(atob(credentials))\n  const [username, password] = atob(credentials).split(':')\n  if (type === 'Basic' && username === 'Yee' && password === '123456') {\n    res.json(req.body)\n  } else {\n    res.end('UnAuthorization')\n  }\n})\n")),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u91cc\u6211\u4eec\u9700\u8981\u5b89\u88c5\u7b2c\u4e09\u65b9\u5e93 ",(0,o.kt)("inlineCode",{parentName:"p"},"atob")," \u5b9e\u73b0 base64 \u4e32\u7684\u89e3\u7801\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u652f\u6301\u4e86 HTTP \u6388\u6743\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e auth \u5bf9\u8c61\u5b9e\u73b0\u81ea\u52a8\u5728\u8bf7\u6c42 header \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," \u5c5e\u6027\u3002\u4e0b\u4e00\u8282\u8bfe\u6211\u4eec\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5408\u6cd5\u72b6\u6001\u7801\u529f\u80fd\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u9700\u6c42\u5206\u6790-1"},"\u9700\u6c42\u5206\u6790"),(0,o.kt)("p",null,"\u4e4b\u524d ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5728\u5904\u7406\u54cd\u5e94\u7ed3\u679c\u7684\u65f6\u5019\uff0c\u8ba4\u4e3a HTTP ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status"},"status")," \u5728 200 \u548c 300 \u4e4b\u95f4\u662f\u4e00\u4e2a\u5408\u6cd5\u503c\uff0c\u5728\u8fd9\u4e2a\u533a\u95f4\u4e4b\u5916\u5219\u521b\u5efa\u4e00\u4e2a\u9519\u8bef\u3002\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u60f3\u81ea\u5b9a\u4e49\u8fd9\u4e2a\u89c4\u5219\uff0c\u6bd4\u5982\u8ba4\u4e3a 304 \u4e5f\u662f\u4e00\u4e2a\u5408\u6cd5\u7684\u72b6\u6001\u7801\uff0c\u6240\u4ee5\u6211\u4eec\u5e0c\u671b ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u80fd\u63d0\u4f9b\u4e00\u4e2a\u914d\u7f6e\uff0c\u5141\u8bb8\u6211\u4eec\u81ea\u5b9a\u4e49\u5408\u6cd5\u72b6\u6001\u7801\u89c4\u5219\u3002\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.get('/more/304', {\n  validateStatus(status) {\n    return status >= 200 && status < 400\n  }\n}).then(res => {\n  console.log(res)\n}).catch((e: AxiosError) => {\n  console.log(e.message)\n})\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u5728\u8bf7\u6c42\u914d\u7f6e\u4e2d\u914d\u7f6e\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"validateStatus")," \u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u6839\u636e\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," \u6765\u81ea\u5b9a\u4e49\u5408\u6cd5\u72b6\u6001\u7801\u7684\u89c4\u5219\u3002"),(0,o.kt)("h3",{id:"\u4ee3\u7801\u5b9e\u73b0-1"},"\u4ee3\u7801\u5b9e\u73b0"),(0,o.kt)("p",null,"\u9996\u5148\u4fee\u6539\u4e00\u4e0b\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosRequestConfig {\n  // ...\n  validateStatus?: (status: number) => boolean\n}\n")),(0,o.kt)("p",null,"\u7136\u540e\u6211\u4eec\u6765\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u89c4\u5219\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"defaults.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"validateStatus(status: number): boolean {\n  return status >= 200 && status < 300\n}\n")),(0,o.kt)("p",null,"\u6dfb\u52a0\u9ed8\u8ba4\u5408\u6cd5\u72b6\u6001\u7801\u7684\u6821\u9a8c\u89c4\u5219\u3002\u7136\u540e\u518d\u8bf7\u6c42\u540e\u5bf9\u54cd\u5e94\u6570\u636e\u7684\u5904\u7406\u903b\u8f91\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/xhr.ts"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n  /*...*/\n  validateStatus\n} = config\n\nfunction handleResponse(response: AxiosResponse): void {\n  if (!validateStatus || validateStatus(response.status)) {\n    resolve(response)\n  } else {\n    reject(\n      createError(\n        `Request failed with status code ${response.status}`,\n        config,\n        null,\n        request,\n        response\n      )\n    )\n  }\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"validateStatus")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"validateStatus")," \u51fd\u6570\u8fd4\u56de\u7684\u503c\u4e3a true \u7684\u65f6\u5019\uff0c\u90fd\u8ba4\u4e3a\u662f\u5408\u6cd5\u7684\uff0c\u6b63\u5e38 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve(response)"),"\uff0c\u5426\u5219\u90fd\u521b\u5efa\u4e00\u4e2a\u9519\u8bef\u3002"),(0,o.kt)("h3",{id:"demo-\u7f16\u5199-1"},"demo \u7f16\u5199"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.get('/more/304').then(res => {\n  console.log(res)\n}).catch((e: AxiosError) => {\n  console.log(e.message)\n})\n\naxios.get('/more/304', {\n  validateStatus(status) {\n    return status >= 200 && status < 400\n  }\n}).then(res => {\n  console.log(res)\n}).catch((e: AxiosError) => {\n  console.log(e.message)\n})\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"server.js")," \u4e2d\u6211\u4eec\u7f16\u5199\u4e86\u8fd9\u4e2a\u8def\u7531\u63a5\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\nrouter.get('/more/304', function(req, res) {\n  res.status(304)\n  res.end()\n})\n")),(0,o.kt)("p",null,"\u63a5\u53e3\u8fd4\u56de 304 \u72b6\u6001\u7801\uff0c\u5bf9\u4e8e\u9ed8\u8ba4\u7684\u8bf7\u6c42\u6211\u4eec\u4f1a\u8f93\u51fa\u4e00\u6761\u9519\u8bef\u4fe1\u606f\u3002\u7b2c\u4e8c\u4e2a\u8bf7\u6c42\u4e2d\u6211\u4eec\u914d\u7f6e\u4e86\u81ea\u5b9a\u4e49\u5408\u6cd5\u72b6\u6001\u7801\u89c4\u5219\uff0c\u533a\u95f4\u5728 200 \u548c 400 \u4e4b\u95f4\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u62a5\u9519\uff0c\u800c\u662f\u53ef\u4ee5\u6b63\u5e38\u8f93\u51fa\u54cd\u5e94\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5b9e\u73b0\u4e86\u81ea\u5b9a\u4e49\u5408\u6cd5\u72b6\u6001\u7801\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"validateStatus")," \u81ea\u5b9a\u4e49\u5408\u6cd5\u72b6\u6001\u7801\u89c4\u5219\u3002\u4e4b\u524d\u6709\u540c\u5b66\u4f1a\u8d28\u7591 ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5bf9\u4e8e\u8bf7\u6c42 ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," \u53c2\u6570\u7684\u5e8f\u5217\u5316\u5904\u7406\u89c4\u5219\uff0c\u4e0b\u4e00\u8282\u8bfe\u6211\u4eec\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u53c2\u6570\u5e8f\u5217\u5316\u89c4\u5219\u529f\u80fd\u3002"))}d.isMDXComponent=!0}}]);