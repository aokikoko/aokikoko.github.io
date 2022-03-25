"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[945],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),k=a,u=d["".concat(l,".").concat(k)]||d[k]||m[k]||i;return t?r.createElement(u,o(o({ref:n},c),{},{components:t})):r.createElement(u,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81893:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],p={title:"[TS] ts-axios(14) - XSRF \u9632\u5fa1",sidebar_position:22},l=void 0,s={unversionedId:"TypeScript/ts-axios-14",id:"TypeScript/ts-axios-14",title:"[TS] ts-axios(14) - XSRF \u9632\u5fa1",description:"----------------------------------------------------------------",source:"@site/docs/TypeScript/ts-axios-14.md",sourceDirName:"TypeScript",slug:"/TypeScript/ts-axios-14",permalink:"/docs/TypeScript/ts-axios-14",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/ts-axios-14.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"[TS] ts-axios(14) - XSRF \u9632\u5fa1",sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(13) - withCredentials",permalink:"/docs/TypeScript/ts-axios-13"},next:{title:"[TS] ts-axios(15) - \u8fdb\u5ea6\u76d1\u63a7",permalink:"/docs/TypeScript/ts-axios-15"}},c=[{value:"\u4ee3\u7801\u5b9e\u73b0",id:"\u4ee3\u7801\u5b9e\u73b0",children:[],level:2},{value:"demo \u7f16\u5199",id:"demo-\u7f16\u5199",children:[],level:2}],m={toc:c};function d(e){var n=e.components,p=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,p,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"XSRF \u53c8\u540d ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security#Cross-Site_Request_Forgery_(CSRF)"},"CSRF"),"\uff0c\u8de8\u7ad9\u8bf7\u6c42\u4f2a\u9020\uff0c\u5b83\u662f\u524d\u7aef\u5e38\u89c1\u7684\u4e00\u79cd\u653b\u51fb\u65b9\u5f0f\uff0c\u6211\u4eec\u5148\u901a\u8fc7\u4e00\u5f20\u56fe\u6765\u8ba4\u8bc6\u5b83\u7684\u653b\u51fb\u624b\u6bb5\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"XSRF",src:t(99429).Z})),(0,i.kt)("p",null,"CSRF \u7684\u9632\u5fa1\u624b\u6bb5\u6709\u5f88\u591a\uff0c\u6bd4\u5982\u9a8c\u8bc1\u8bf7\u6c42\u7684 referer\uff0c\u4f46\u662f referer \u4e5f\u662f\u53ef\u4ee5\u4f2a\u9020\u7684\uff0c\u6240\u4ee5\u675c\u7edd\u6b64\u7c7b\u653b\u51fb\u7684\u4e00\u79cd\u65b9\u5f0f\u662f\u670d\u52a1\u5668\u7aef\u8981\u6c42\u6bcf\u6b21\u8bf7\u6c42\u90fd\u5305\u542b\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),"\uff0c\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u4e0d\u5728\u524d\u7aef\u751f\u6210\uff0c\u800c\u662f\u5728\u6211\u4eec\u6bcf\u6b21\u8bbf\u95ee\u7ad9\u70b9\u7684\u65f6\u5019\u751f\u6210\uff0c\u5e76\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"set-cookie")," \u7684\u65b9\u5f0f\u79cd\u5230\u5ba2\u6237\u7aef\uff0c\u7136\u540e\u5ba2\u6237\u7aef\u53d1\u9001\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie")," \u4e2d\u5bf9\u5e94\u7684\u5b57\u6bb5\u8bfb\u53d6\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"token"),"\uff0c\u7136\u540e\u6dfb\u52a0\u5230\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," \u4e2d\u3002\u8fd9\u6837\u670d\u52a1\u7aef\u5c31\u53ef\u4ee5\u4ece\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," \u4e2d\u8bfb\u53d6\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u5e76\u9a8c\u8bc1\uff0c\u7531\u4e8e\u8fd9\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u662f\u5f88\u96be\u4f2a\u9020\u7684\uff0c\u6240\u4ee5\u5c31\u80fd\u533a\u5206\u8fd9\u4e2a\u8bf7\u6c42\u662f\u5426\u662f\u7528\u6237\u6b63\u5e38\u53d1\u8d77\u7684\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6211\u4eec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-axios")," \u5e93\uff0c\u6211\u4eec\u8981\u81ea\u52a8\u628a\u8fd9\u51e0\u4ef6\u4e8b\u505a\u4e86\uff0c\u6bcf\u6b21\u53d1\u9001\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie")," \u4e2d\u8bfb\u53d6\u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u503c\uff0c\u7136\u540e\u6dfb\u52a0\u5230\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers"),"\u4e2d\u3002\u6211\u4eec\u5141\u8bb8\u7528\u6237\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfCookieName")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfHeaderName"),"\uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfCookieName")," \u8868\u793a\u5b58\u50a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie")," \u540d\u79f0\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfHeaderName")," \u8868\u793a\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," \u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u5bf9\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," \u540d\u79f0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"axios.get('/more/get',{\n  xsrfCookieName: 'XSRF-TOKEN', // default\n  xsrfHeaderName: 'X-XSRF-TOKEN' // default\n}).then(res => {\n  console.log(res)\n})\n")),(0,i.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfCookieName")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfHeaderName")," \u7684\u9ed8\u8ba4\u503c\uff0c\u5f53\u7136\u7528\u6237\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u5728\u8bf7\u6c42\u4e2d\u53bb\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfCookieName")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrfHeaderName"),"\u3002"),(0,i.kt)("h2",{id:"\u4ee3\u7801\u5b9e\u73b0"},"\u4ee3\u7801\u5b9e\u73b0"),(0,i.kt)("p",null,"\u5148\u4fee\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"AxiosRequestConfig")," \u7684\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"types/index.ts"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AxiosRequestConfig {\n  // ...\n  xsrfCookieName?: string\n  xsrfHeaderName?: string\n}\n")),(0,i.kt)("p",null,"\u7136\u540e\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"defaults.ts"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const defaults: AxiosRequestConfig = {\n  // ...\n  xsrfCookieName: 'XSRF-TOKEN',\n\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n}\n")),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u8981\u505a\u4e09\u4ef6\u4e8b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9996\u5148\u5224\u65ad\u5982\u679c\u662f\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"withCredentials")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," \u6216\u8005\u662f\u540c\u57df\u8bf7\u6c42\uff0c\u6211\u4eec\u624d\u4f1a\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," \u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrf")," \u76f8\u5173\u7684\u5b57\u6bb5\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u5224\u65ad\u6210\u529f\uff0c\u5c1d\u8bd5\u4ece cookie \u4e2d\u8bfb\u53d6 ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrf")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u503c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u80fd\u8bfb\u5230\uff0c\u5219\u628a\u5b83\u6dfb\u52a0\u5230\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrf")," \u76f8\u5173\u5b57\u6bb5\u4e2d\u3002"))),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u6765\u5b9e\u73b0\u540c\u57df\u8bf7\u6c42\u7684\u5224\u65ad\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"helpers/url.ts"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface URLOrigin {\n  protocol: string\n  host: string\n}\n\n\nexport function isURLSameOrigin(requestURL: string): boolean {\n  const parsedOrigin = resolveURL(requestURL)\n  return (\n    parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host\n  )\n}\n\nconst urlParsingNode = document.createElement('a')\nconst currentOrigin = resolveURL(window.location.href)\n\nfunction resolveURL(url: string): URLOrigin {\n  urlParsingNode.setAttribute('href', url)\n  const { protocol, host } = urlParsingNode\n\n  return {\n    protocol,\n    host\n  }\n}\n")),(0,i.kt)("p",null,"\u540c\u57df\u540d\u7684\u5224\u65ad\u4e3b\u8981\u5229\u7528\u4e86\u4e00\u4e2a\u6280\u5de7\uff0c\u521b\u5efa\u4e00\u4e2a a \u6807\u7b7e\u7684 DOM\uff0c\u7136\u540e\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"href")," \u5c5e\u6027\u4e3a\u6211\u4eec\u4f20\u5165\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"\uff0c\u7136\u540e\u53ef\u4ee5\u83b7\u53d6\u8be5 DOM \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"host"),"\u3002\u5f53\u524d\u9875\u9762\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," \u548c\u8bf7\u6c42\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," \u90fd\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u83b7\u53d6\uff0c\u7136\u540e\u5bf9\u6bd4\u5b83\u4eec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," \u662f\u5426\u76f8\u540c\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u63a5\u7740\u5b9e\u73b0 cookie \u7684\u8bfb\u53d6\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"helpers/cookie.ts"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const cookie = {\n  read(name: string): string | null {\n    const match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'))\n    return match ? decodeURIComponent(match[3]) : null\n  }\n}\n\nexport default cookie\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cookie")," \u7684\u8bfb\u53d6\u903b\u8f91\u5f88\u7b80\u5355\uff0c\u5229\u7528\u4e86\u6b63\u5219\u8868\u8fbe\u5f0f\u53ef\u4ee5\u89e3\u6790\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u5bf9\u5e94\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u6700\u540e\u5b9e\u73b0\u5b8c\u6574\u7684\u903b\u8f91\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"core/xhr.ts"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const {\n  /*...*/\n  xsrfCookieName,\n  xsrfHeaderName\n} = config\n\nif ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName){\n  const xsrfValue = cookie.read(xsrfCookieName)\n  if (xsrfValue) {\n    headers[xsrfHeaderName!] = xsrfValue\n  }\n}\n")),(0,i.kt)("h2",{id:"demo-\u7f16\u5199"},"demo \u7f16\u5199"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const instance = axios.create({\n  xsrfCookieName: 'XSRF-TOKEN-D',\n  xsrfHeaderName: 'X-XSRF-TOKEN-D'\n})\n\ninstance.get('/more/get').then(res => {\n  console.log(res)\n})\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"examples/server.js"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use(express.static(__dirname, {\n  setHeaders (res) {\n    res.cookie('XSRF-TOKEN-D', '1234abc')\n  }\n}))\n")),(0,i.kt)("p",null,"\u5728\u8bbf\u95ee\u9875\u9762\u7684\u65f6\u5019\uff0c\u670d\u52a1\u7aef\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"set-cookie")," \u5f80\u5ba2\u6237\u7aef\u79cd\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN"),"\uff0c\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"1234abc")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"cookie"),"\uff0c\u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"xsrf")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," \u503c\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u5728\u524d\u7aef\u53d1\u9001\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u5c31\u80fd\u4ece cookie \u4e2d\u8bfb\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"XSRF-TOKEN")," \u7684\u503c\uff0c\u7136\u540e\u628a\u5b83\u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"X-XSRF-TOKEN")," \u7684\u8bf7\u6c42 ",(0,i.kt)("inlineCode",{parentName:"p"},"headers")," \u4e2d\u3002"),(0,i.kt)("p",null,"\u81f3\u6b64\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86 XSRF \u7684\u81ea\u52a8\u9632\u5fa1\u7684\u80fd\u529b\uff0c\u4e0b\u8282\u8bfe\u6211\u4eec\u6765\u5b9e\u73b0 ts-axios \u5bf9\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8bf7\u6c42\u7684\u652f\u6301\u3002"))}d.isMDXComponent=!0},99429:function(e,n,t){n.Z=t.p+"assets/images/CSRF-911cd3dbf5120e0a7df21b70fb8887dc.png"}}]);