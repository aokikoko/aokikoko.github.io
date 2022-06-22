"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6665],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),c=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return l.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return t?l.createElement(k,i(i({ref:n},d),{},{components:t})):l.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45250:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=t(87462),a=(t(67294),t(3905));const r={title:"[Linux] \u7cfb\u7edf\u670d\u52a1\u4e4bDNS\u670d\u52a1 - \u642d\u5efa\u5185\u7f51\u670d\u52a1",sidebar_position:10},i=void 0,s={unversionedId:"Linux/dns",id:"Linux/dns",title:"[Linux] \u7cfb\u7edf\u670d\u52a1\u4e4bDNS\u670d\u52a1 - \u642d\u5efa\u5185\u7f51\u670d\u52a1",description:"\u4efb\u52a1\u80cc\u666f",source:"@site/docs/Linux/dns.md",sourceDirName:"Linux",slug:"/Linux/dns",permalink:"/docs/Linux/dns",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Linux/dns.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"[Linux] \u7cfb\u7edf\u670d\u52a1\u4e4bDNS\u670d\u52a1 - \u642d\u5efa\u5185\u7f51\u670d\u52a1",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"[Linux] TCP/IP\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u65ad\u5f00",permalink:"/docs/Linux/shakehands"},next:{title:"[Linux] \u7cfb\u7edf\u670d\u52a1\u4e4bDNS\u670d\u52a1 - DNS\u57df\u540d\u7ba1\u7406\u7cfb\u7edf\u4e0eLAMP\u7f16\u8bd1\u5b89\u88c5",permalink:"/docs/Linux/dns2"}},o=[{value:"\u4efb\u52a1\u80cc\u666f",id:"\u4efb\u52a1\u80cc\u666f",children:[],level:2},{value:"\u4efb\u52a1\u62c6\u89e3",id:"\u4efb\u52a1\u62c6\u89e3",children:[],level:2},{value:"\u7406\u8bba\u50a8\u5907",id:"\u7406\u8bba\u50a8\u5907",children:[{value:"1. DNS\u6982\u8ff0",id:"1-dns\u6982\u8ff0",children:[],level:3},{value:"\u2606 DNS\u7684\u6b63\u5411\u89e3\u6790",id:"-dns\u7684\u6b63\u5411\u89e3\u6790",children:[],level:3},{value:"\u2606 DNS\u7684\u53cd\u5411\u89e3\u6790",id:"-dns\u7684\u53cd\u5411\u89e3\u6790",children:[],level:3},{value:"2. DNS\u7684\u7ed3\u6784",id:"2-dns\u7684\u7ed3\u6784",children:[],level:3},{value:"\u2606 \u6839\u57df\uff08.\uff09",id:"-\u6839\u57df",children:[],level:3},{value:"<strong>\u2606 \u4e00\u7ea7\u57df\u540d&lt;\u9876\u7ea7\u57df|\u56fd\u5bb6\u57df&gt;</strong>",id:"-\u4e00\u7ea7\u57df\u540d\u9876\u7ea7\u57df\u56fd\u5bb6\u57df",children:[],level:3},{value:"\u2606 <strong>\u4e8c\u7ea7\u57df\u540d</strong>(\u81ea\u5df1\u8d2d\u4e70\u7ba1\u7406)",id:"-\u4e8c\u7ea7\u57df\u540d\u81ea\u5df1\u8d2d\u4e70\u7ba1\u7406",children:[],level:3},{value:"<strong>\u2606 \u57df\u540d\u673a\u6784</strong>",id:"-\u57df\u540d\u673a\u6784",children:[],level:3},{value:"3\u3001DNS\u5de5\u4f5c\u539f\u7406",id:"3dns\u5de5\u4f5c\u539f\u7406",children:[],level:3},{value:"4\u3001dig\u5de5\u5177\u4f7f\u7528",id:"4dig\u5de5\u5177\u4f7f\u7528",children:[],level:3}],level:2},{value:"DNS\u670d\u52a1\u5668\u7684\u642d\u5efa",id:"dns\u670d\u52a1\u5668\u7684\u642d\u5efa",children:[{value:"1\u3001DNS\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6",id:"1dns\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6",children:[],level:3},{value:"2\u3001DNS\u670d\u52a1\u5668\u642d\u5efa",id:"2dns\u670d\u52a1\u5668\u642d\u5efa",children:[],level:3},{value:"\u2606 \u7b2c\u4e00\u6b65\uff1a\u73af\u5883\u51c6\u5907",id:"-\u7b2c\u4e00\u6b65\u73af\u5883\u51c6\u5907",children:[],level:3},{value:"\u2606 \u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5DNS\u8f6f\u4ef6",id:"-\u7b2c\u4e8c\u6b65\u5b89\u88c5dns\u8f6f\u4ef6",children:[],level:3},{value:"\u2606 \u7b2c\u4e09\u6b65\uff1aDNS\u6b63\u5411\u89e3\u6790\u914d\u7f6e(\u57df\u540d=&gt;IP)",id:"-\u7b2c\u4e09\u6b65dns\u6b63\u5411\u89e3\u6790\u914d\u7f6e\u57df\u540dip",children:[],level:3},{value:"\u2606 \u7b2c\u56db\u6b65\uff1a\u68c0\u67e5named.conf\u4e0ezones\u6587\u4ef6",id:"-\u7b2c\u56db\u6b65\u68c0\u67e5namedconf\u4e0ezones\u6587\u4ef6",children:[],level:3},{value:"\u2606 \u7b2c\u4e94\u6b65\uff1a\u542f\u52a8DNS\u670d\u52a1\uff08named\uff09",id:"-\u7b2c\u4e94\u6b65\u542f\u52a8dns\u670d\u52a1named",children:[],level:3},{value:"3\u3001Web\u670d\u52a1\u642d\u5efa",id:"3web\u670d\u52a1\u642d\u5efa",children:[],level:3},{value:"4\u3001\u6d4b\u8bd5DNS\u670d\u52a1\u5668\u7684\u6b63\u5411\u89e3\u6790",id:"4\u6d4b\u8bd5dns\u670d\u52a1\u5668\u7684\u6b63\u5411\u89e3\u6790",children:[],level:3},{value:"\u2606 \u6dfb\u52a0DNS\u670d\u52a1\u5668",id:"-\u6dfb\u52a0dns\u670d\u52a1\u5668",children:[],level:3},{value:"\u2606 \u4f7f\u7528nslookup\u68c0\u6d4b\u6b63\u5411\u89e3\u6790\u662f\u5426\u751f\u6548",id:"-\u4f7f\u7528nslookup\u68c0\u6d4b\u6b63\u5411\u89e3\u6790\u662f\u5426\u751f\u6548",children:[],level:3},{value:"\u2606 \u4f7f\u7528elinks\u547d\u4ee4\u884c\u6d4f\u89c8\u5668\u6216curl\u6765\u5b9e\u73b0\u8bbf\u95ee",id:"-\u4f7f\u7528elinks\u547d\u4ee4\u884c\u6d4f\u89c8\u5668\u6216curl\u6765\u5b9e\u73b0\u8bbf\u95ee",children:[],level:3}],level:2}],c={toc:o};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4efb\u52a1\u80cc\u666f"},"\u4efb\u52a1\u80cc\u666f"),(0,a.kt)("p",null,"\u516c\u53f8\u5185\u7f51\u4e2d\u9700\u8981\u901a\u8fc7\u57df\u540d\u8bbf\u95ee\u5230\u5f00\u53d1\u7684web\u5e94\u7528. \u6240\u4ee5\u9700\u8981\u5728\u5185\u7f51\u4e2d\u642d\u5efaDNS\u670d\u52a1\u5668\u89e3\u6790\u57df\u540d, \u5f00\u53d1, \u6d4b\u8bd5, \u8fd0\u7ef4\u4eba\u5458, \u53ef\u4ee5\u901a\u8fc7\u5185\u7f51DNS\u670d\u52a1, \u8bbf\u95ee\u5230\u516c\u53f8\u5185\u90e8\u5e94\u7528. "),(0,a.kt)("p",null,"\u4e5f\u5c31\u662f\u89e3\u6790\u5185\u7f51\u57df\u540d, \u80fd\u591f\u8bbf\u95ee\u5230\u5185\u7f51\u5e94\u7528, \u6bd4\u5982\u628awww.\u516c\u53f8\u81ea\u5b9a\u4e49.com \u89e3\u6790\u5230\u670d\u52a1\u5668ip"),(0,a.kt)("h2",{id:"\u4efb\u52a1\u62c6\u89e3"},"\u4efb\u52a1\u62c6\u89e3"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u642d\u5efadns\u670d\u52a1")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5ba2\u6237\u7aef\u914d\u7f6edns\u670d\u52a1\u5730\u5740"))),(0,a.kt)("h2",{id:"\u7406\u8bba\u50a8\u5907"},"\u7406\u8bba\u50a8\u5907"),(0,a.kt)("h3",{id:"1-dns\u6982\u8ff0"},"1. DNS\u6982\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"DNS\uff08domain name system \uff09 \u57df\u540d\u7ba1\u7406\u7cfb\u7edf")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57df\u540d\uff1a")),(0,a.kt)("p",null,"\u7531\u7279\u5b9a\u7684\u683c\u5f0f\u7ec4\u6210\uff0c\u7528\u6765\u8868\u793a\u4e92\u8054\u7f51\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"\u67d0\u4e00\u53f0\u8ba1\u7b97\u673a\u6216\u8005\u8ba1\u7b97\u673a\u7ec4\u7684\u79f0"),"\uff0c\u80fd\u591f\u4f7f\u4eba\u66f4\u65b9\u4fbf\u7684\u8bbf\u95ee\u4e92\u8054\u7f51\uff0c\u800c\u4e0d\u7528\u8bb0\u4f4f\u80fd\u591f\u88ab\u673a\u5668\u76f4\u63a5\u8bfb\u53d6\u7684IP\u5730\u5740\u3002"),(0,a.kt)("p",null,"\u8ba1\u7b97\u673a => IP\u5730\u5740\uff0c\u4e92\u8054\u7f51\u4e2d\u7684\u8ba1\u7b97\u673a\u90fd\u662f\u901a\u8fc7IP\u5730\u5740\u8fdb\u884c\u4e92\u76f8\u8bbf\u95ee\u7684\u3002(IP\u5730\u5740\u8fc7\u4e8e\u590d\u6742)"),(0,a.kt)("p",null,"\u57df\u540d\uff1a\u4ee3\u66ffIP\u5b9e\u73b0\u8ba1\u7b97\u673a\u7684\u8bbf\u95ee\uff08\u9ad8\u7ea7 => \u4e0a\u5c42\u5e94\u7528\uff0c\u5e95\u5c42\u8fd8\u662fIP\u5730\u5740\uff09"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u57df\u540d =>  DNS\u670d\u52a1\u5668  => \u5bf9\u5e94\u7684IP\u5730\u5740"),(0,a.kt)("h3",{id:"-dns\u7684\u6b63\u5411\u89e3\u6790"},"\u2606 DNS\u7684\u6b63\u5411\u89e3\u6790"),(0,a.kt)("p",null,"\u57df\u540d\u7684==\u6b63\u5411\u89e3\u6790=="),(0,a.kt)("p",null,"\u5c06\u4e3b\u673a\u57df\u540d\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684IP \u5730\u5740\uff0c\u4ee5\u4fbf\u7f51\u7edc\u7a0b\u5e8f\u80fd\u591f\u901a\u8fc7\u4e3b\u673a\u57df\u540d\u8bbf\u95ee\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5668\u4e3b\u673a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u57df\u540d\u2014\u2014>IP"),"\t\tA\u8bb0\u5f55"),(0,a.kt)("h3",{id:"-dns\u7684\u53cd\u5411\u89e3\u6790"},"\u2606 DNS\u7684\u53cd\u5411\u89e3\u6790"),(0,a.kt)("p",null,"\u57df\u540d\u7684==\u53cd\u5411\u89e3\u6790=="),(0,a.kt)("p",null,"\u5c06\u4e3b\u673a\u7684IP\u5730\u5740\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684\u57df\u540d\uff0c\u4ee5\u4fbf\u7f51\u7edc\uff08\u670d\u52a1\uff09\u7a0b\u5e8f\u80fd\u591f\u901a\u8fc7IP\u5730\u5740\u67e5\u8be2\u5230\u4e3b\u673a\u7684\u57df\u540d"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IP\u2014\u2014>\u57df\u540d"),"\t\tPTR\u8bb0\u5f55"),(0,a.kt)("h3",{id:"2-dns\u7684\u7ed3\u6784"},"2. DNS\u7684\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"\u57df\u540d\uff1awww.itheima.com\nDNS\u7ed3\u6784\uff1awww.itheima.com.  =>  \u4ece\u53f3\u5411\u5de6\u89e3\u6790\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dns",src:t(59522).Z})),(0,a.kt)("h3",{id:"-\u6839\u57df"},"\u2606 \u6839\u57df\uff08.\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u6574\u4e2a DNS \u7cfb\u7edf\u7684\u6700\u4e0a\u65b9\u4e00\u5b9a\u662f . (\u5c0f\u6570\u70b9) \u8fd9\u4e2a DNS \u670d\u52a1\u5668 (\u79f0\u4e3a root)\uff0c\u4e5f\u53eb\u201d\u6839\u57df\u201c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u57df \uff0813\u53f0 \u5168\u4e16\u754c\u53ea\u670913\u53f0\u30021\u4e2a\u4e3a\u4e3b\u6839\u670d\u52a1\u5668\uff0c\u653e\u7f6e\u5728\u7f8e\u56fd\u3002\u5176\u4f5912\u4e2a\u5747\u4e3a\u8f85\u6839\u670d\u52a1\u5668\uff0c\u5176\u4e2d9\u4e2a\u653e\u7f6e\u5728\u7f8e\u56fd\uff0c\u6b27\u6d322\u4e2a\uff0c\u4f4d\u4e8e\u82f1\u56fd\u548c\u745e\u5178\uff0c\u4e9a\u6d321\u4e2a\uff0c\u4f4d\u4e8e\u65e5\u672c\u3002\uff09")),(0,a.kt)("h3",{id:"-\u4e00\u7ea7\u57df\u540d\u9876\u7ea7\u57df\u56fd\u5bb6\u57df"},(0,a.kt)("strong",{parentName:"h3"},"\u2606 \u4e00\u7ea7\u57df\u540d<\u9876\u7ea7\u57df|\u56fd\u5bb6\u57df>")),(0,a.kt)("p",null,"com net edu gov org cc  io| cn uk us ru ja ko "),(0,a.kt)("p",null,".com \uff1a \u5546\u4e1a\u516c\u53f8"),(0,a.kt)("p",null,".net  \uff1a\u4e92\u8054\u7f51\u516c\u53f8"),(0,a.kt)("p",null,".edu \uff1a\u6559\u80b2\uff08\u4e2d\u5c0f\u5b66\u3001\u9ad8\u4e2d\u3001\u5927\u5b66...\uff09"),(0,a.kt)("p",null,".gov \uff1a\u653f\u5e9c"),(0,a.kt)("p",null,".io\t\uff1a\u5b58\u50a8\u8bbe\u5907\uff0credis"),(0,a.kt)("p",null,".cn   \uff1a\u4e2d\u56fd\u57df\u540d\uff08\u56fd\u5bb6\u57df\uff09"),(0,a.kt)("h3",{id:"-\u4e8c\u7ea7\u57df\u540d\u81ea\u5df1\u8d2d\u4e70\u7ba1\u7406"},"\u2606 ",(0,a.kt)("strong",{parentName:"h3"},"\u4e8c\u7ea7\u57df\u540d"),"(\u81ea\u5df1\u8d2d\u4e70\u7ba1\u7406)"),(0,a.kt)("p",null,"qq.com",(0,a.kt)("strong",{parentName:"p"},"."),"   baidu.com.    google.com. "),(0,a.kt)("h3",{id:"-\u57df\u540d\u673a\u6784"},(0,a.kt)("strong",{parentName:"h3"},"\u2606 \u57df\u540d\u673a\u6784")),(0,a.kt)("p",null,"\u6536\u8d39\uff08\u65b0\u7f51|\u4e07\u7f51\uff09\n\u8001\u724c\u514d\u8d39\u57df\u540d\uff1aTK\u9876\u7ea7\u57df\u540d\u3001TK\u57df\u540dDNS\u3001TK\u57df\u540d\u5546"),(0,a.kt)("h3",{id:"3dns\u5de5\u4f5c\u539f\u7406"},"3\u3001DNS\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u8bbf\u95eedns\u670d\u52a1\u5668\u540e, dns\u670d\u52a1\u5668\u4ececache\u4e2d\u67e5\u627e. \u5206\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u9012\u5f52\u67e5\u8be2")," \u8fd9\u79cd\u67e5\u8be2\u6bd4\u8f83\u8017\u65f6, \u6240\u4ee5\u73b0\u5728\u4e00\u822c\u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8fed\u4ee3\u67e5\u8be2")," "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u6b21\u9012\u5f52 \u591a\u6b21\u8fed\u4ee3")),(0,a.kt)("h3",{id:"4dig\u5de5\u5177\u4f7f\u7528"},"4\u3001dig\u5de5\u5177\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# dig +trace www.itcast.cn    \u8ffd\u8e2aDNS\u7684\u89e3\u6790\u8fc7\u7a0b\n# dig www.itcast.cn           \u6b63\u5411\u89e3\u6790\n# dig -x IP\u5730\u5740               \u53cd\u5411\u89e3\u6790\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"dns\u670d\u52a1\u5668\u7684\u642d\u5efa"},"DNS\u670d\u52a1\u5668\u7684\u642d\u5efa"),(0,a.kt)("h3",{id:"1dns\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6"},"1\u3001DNS\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6"),(0,a.kt)("p",null,"DNS \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u57df\u540d\u89e3\u6790"),"\u90fd\u662f ",(0,a.kt)("strong",{parentName:"p"},"==udp/53==")," . \u4e3b\u4ece\u4e4b\u95f4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u4f20\u8f93"),"\u9ed8\u8ba4\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"==tcp/53==")),(0,a.kt)("p",null,"DNS\u670d\u52a1\u5668\u7aef\u8f6f\u4ef6\uff1a"),(0,a.kt)("p",null,"==Bind==\u662f\u4e00\u6b3e\u5f00\u653e\u6e90\u7801\u7684DNS\u670d\u52a1\u5668\u8f6f\u4ef6\uff0cBind\u7531\u7f8e\u56fd\u52a0\u5dde\u5927\u5b66Berkeley\uff08\u4f2f\u514b\u5229\uff09\u5206\u6821\u5f00\u53d1\u548c\u7ef4\u62a4\u7684\uff0c\u5168\u540d\u4e3aBerkeley Internet Name Domain\u5b83\u662f\u76ee\u524d\u4e16\u754c\u4e0a\u4f7f\u7528\u6700\u4e3a\u5e7f\u6cdb\u7684DNS\u670d\u52a1\u5668\u8f6f\u4ef6\uff0c\u652f\u6301\u5404\u79cdunix\u5e73\u53f0\u548cwindows\u5e73\u53f0\u3002BIND\u73b0\u5728\u7531\u4e92\u8054\u7f51\u7cfb\u7edf\u534f\u4f1a\uff08Internet Systems Consortium\uff09\u8d1f\u8d23\u5f00\u53d1\u4e0e\u7ef4\u62a4\u3002"),(0,a.kt)("h3",{id:"2dns\u670d\u52a1\u5668\u642d\u5efa"},"2\u3001DNS\u670d\u52a1\u5668\u642d\u5efa"),(0,a.kt)("h3",{id:"-\u7b2c\u4e00\u6b65\u73af\u5883\u51c6\u5907"},"\u2606 \u7b2c\u4e00\u6b65\uff1a\u73af\u5883\u51c6\u5907"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7f16\u53f7"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4e3b\u673a\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"IP\u5730\u5740"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8\u4fe1\u606f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"client.lenovo.cn"),(0,a.kt)("td",{parentName:"tr",align:null},"10.1.1.11"),(0,a.kt)("td",{parentName:"tr",align:null},"client\u5ba2\u6237\u7aef\uff0c\u7528\u4e8e\u6d4b\u8bd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"dns.lenovo.cn"),(0,a.kt)("td",{parentName:"tr",align:null},"10.1.1.12"),(0,a.kt)("td",{parentName:"tr",align:null},"dns\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u5b9e\u73b0\u57df\u540d\u89e3\u6790")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"web.lenovo.cn"),(0,a.kt)("td",{parentName:"tr",align:null},"10.1.1.13"),(0,a.kt)("td",{parentName:"tr",align:null},"web\u670d\u52a1\u5668\uff0c\u7528\u4e8e\u642d\u5efa\u5185\u90e8web\u670d\u52a1")))),(0,a.kt)("p",null,"\u2460 \u66f4\u6539\u4e3b\u673a\u540d\u79f0\u4e0eIP\u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# hostnamectl set-hostname client.lenovo.cn\n# hostnamectl set-hostname dns.lenovo.cn\n# hostnamectl set-hostname web.lenovo.cn\n\n# su\n\n# vim /etc/sysconfig/network-scripts/ifcfg-ens33\nBOOTPROTO=none\nIPADDR=10.1.1.11/10.1.1.12/10.1.1.13\n\u66f4\u6539UUID\u7f16\u53f7\u7684\u540e3\u4f4d\uff0c\u5fc5\u987b\u662f\u552f\u4e00\u7684\n")),(0,a.kt)("p",null,"\u2461 \u4f7f\u7528MX\u8fdb\u884c\u8fde\u63a5"),(0,a.kt)("p",null,"\u2462 \u5173\u95ed\u9632\u706b\u5899\u4e0eSELinux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl stop firewalld\n# systemctl disable firewalld\n\n# setenforce 0\n# vim /etc/selinux/config\nSELINUX=disabled\n")),(0,a.kt)("p",null,"\u2463 \u914d\u7f6eYUM\u6e90\uff08\u6709\u7f51\u914d\u7f6e\u516c\u7f51YUM\u6e90\u3001\u65e0\u7f51\u5c31\u914d\u7f6e\u5149\u76d8\u6216\u81ea\u5efaYUM\u6e90\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# yum clean all\n# yum makecache\n")),(0,a.kt)("h3",{id:"-\u7b2c\u4e8c\u6b65\u5b89\u88c5dns\u8f6f\u4ef6"},"\u2606 \u7b2c\u4e8c\u6b65\uff1a\u5b89\u88c5DNS\u8f6f\u4ef6"),(0,a.kt)("p",null,"DNS\u670d\u52a1\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# yum install bind -y\n")),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6bd5\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528rpm  -q\u67e5\u8be2\u662f\u5426\u5b89\u88c5\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# rpm -q bind\n\n# rpm -ql bind\n# \u65e5\u5fd7\u8f6e\u8f6c\u6587\u4ef6\n/etc/logrotate.d/named\n# \u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\n/etc/named\n# \u4e3b\u914d\u7f6e\u6587\u4ef6\n/etc/named.conf\n# zone\u6587\u4ef6,\u5b9a\u4e49\u57df\n/etc/named.rfc1912.zones\n# \u670d\u52a1\u7ba1\u7406\u811a\u672c\n/usr/lib/systemd/system/named.service\n# \u4e8c\u8fdb\u5236\u7a0b\u5e8f\u6587\u4ef6\n/usr/sbin/named\n# \u68c0\u6d4b\u914d\u7f6e\u6587\u4ef6\n/usr/sbin/named-checkconf\n# \u68c0\u6d4b\u57df\u6587\u4ef6\n/usr/sbin/named-checkzone\n# \u6839\u57df\u670d\u52a1\u5668\n/var/named/named.ca\n# \u6b63\u5411\u89e3\u6790\u533a\u57df\u6587\u4ef6\u6a21\u677f\n/var/named/named.localhost\n# \u53cd\u5411\u89e3\u6790\u533a\u57df\u6587\u4ef6\u6a21\u677f\n/var/named/named.loopback\n# dns\u670d\u52a1\u5668\u4e0b\u8f7d\u6587\u4ef6\u7684\u9ed8\u8ba4\u8def\u5f84\n/var/named/slaves\n# \u8fdb\u7a0bpid\n/var/rum/named\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"find\u4e3b\u8981\u7528\u6765\u641c\u7d22\u8ba1\u7b97\u673a\u4e2d\u7684\u6587\u4ef6\uff0crpm\u4e3b\u8981\u7528\u6765\u68c0\u67e5\u8ba1\u7b97\u673a\u4e2d\u662f\u5426\u5b89\u88c5\u8fc7\u67d0\u4e2a\u8f6f\u4ef6")),(0,a.kt)("h3",{id:"-\u7b2c\u4e09\u6b65dns\u6b63\u5411\u89e3\u6790\u914d\u7f6e\u57df\u540dip"},"\u2606 \u7b2c\u4e09\u6b65\uff1aDNS\u6b63\u5411\u89e3\u6790\u914d\u7f6e(\u57df\u540d=>IP)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20200415162454902",src:t(81174).Z})),(0,a.kt)("p",null,"/etc/named.conf\u4e3b\u8981\u914d\u7f6e\u8bbf\u95ee\u6743\u9650\u63a7\u5236\uff08\u54ea\u4e9bIP\u6216\u54ea\u4e9b\u4e3b\u673a\u53ef\u4ee5\u8bbf\u95eeDNS\u670d\u52a1\u5668\uff09"),(0,a.kt)("p",null,"/etc/named.rfc1912.zones\u4e3b\u8981\u5b9a\u4e49\u57df\u540d\u5982\u4f55\u89e3\u6790\uff08\u6b63\u5411\u89e3\u6790\uff09\uff0c\u89e3\u6790\u5230\u5177\u4f53\u54ea\u4e2aIP\u5730\u5740"),(0,a.kt)("p",null,"\u2460 \u5bf9named.conf\u4ee5\u53canamed.rfc1912.zones\u8fdb\u884c\u5907\u4efd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"cp /etc/named.conf /etc/named.conf.bak\ncp /etc/named.rfc1912.zones /etc/named.rfc1912.zones.bak\n")),(0,a.kt)("p",null,"\u2461 named.conf\u4e3b\u914d\u7f6e\u6587\u4ef6\u8be6\u89e3\uff08\u8bbf\u95ee\u6743\u9650\u63a7\u5236\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# vim /etc/named.conf\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4efb\u4f55\u4e3b\u673a\u90fd\u53ef\u4ee5\u8bbf\u95ee\u7684\u6743\u9650\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20200415163918871",src:t(36577).Z})),(0,a.kt)("p",null,"\u2462 zones\u5b50\u914d\u7f6e\u6587\u4ef6\u8be6\u89e3\uff08\u57df\u540d\u5e94\u8be5\u6307\u5411\u54ea\u4e2aIP\u5730\u5740\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'# vim /etc/named.rfc1912.zones\n...\nzone "itcast.cluster" IN {\n        type master;\n        file "itcast.cluster.zone";\n        allow-update { none; };\n};\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6269\u5c55 => vim => \uff1a19\uff0c23  co  42\uff0c\u628a19-23\u884c\uff0ccopy\u523042\u884c\u7684\u540e\u9762")),(0,a.kt)("p",null,"\u2463 \u5728/var/named\u76ee\u5f55\u521b\u5efaitcast.cluster.zone\u6587\u4ef6\u5b9a\u4e49\u6b63\u5411\u89e3\u6790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# cd /var/named\n# cp -p named.localhost itcast.cluster.zone\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6269\u5c55\uff1a-p\u4ee3\u8868\u590d\u5236\u6587\u4ef6\u65f6\u4fdd\u7559\u6587\u4ef6\u7684\u539f\u6709\u5c5e\u6027")),(0,a.kt)("p",null,"\u2464 \u7f16\u8f91itcast.cluster.zone\u6587\u4ef6\uff0c\u5b9a\u4e49\u57df\u540d\u7684\u6307\u5411"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# vim itcast.cluster.zone\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20200415170447838",src:t(41565).Z})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6269\u5c55\uff1azone\u6587\u4ef6\u7684\u683c\u5f0f\u8bf4\u660e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"zone\u6587\u4ef6\u8be6\u89e3\n# $TTL  \u7f13\u5b58\u7684\u751f\u5b58\u5468\u671f\n# @ = zonename = itcast.com  \u5f53\u524d\u57df\n# IN  \u4e92\u8054\u7f51\n# SOA \u5f00\u59cb\u6388\u6743\n# NS  dns\u670d\u52a1\u7aef    nameserver\n# A   ipv4 \u6b63\u5411\n# AAAA IPV6\n# CNAME \u522b\u540d\n# MX  \u90ae\u4ef6\u4ea4\u4e92\u8bb0\u5f55  5 \u6570\u5b57\u4ee3\u8868\u4f18\u5148\u7ea7 \u6570\u5b57\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8\n\n# 0       ; serial    \u66f4\u65b0\u5e8f\u5217\u53f7 \n# 1D      ; refresh   \u66f4\u65b0\u95f4\u9694\uff08\u4ece\u670d\u52a1\u5668\u4e0b\u8f7d\u6570\u636e\uff09\n# 1H      ; retry     \u5931\u8d25\u91cd\u8bd5\n# 1W      ; expire    \u533a\u57df\u6587\u4ef6\u7684\u8fc7\u671f\u65f6\u95f4\n# 3H )    ; minimum   \u7f13\u5b58\u7684\u6700\u5c0f\u751f\u5b58\u5468\u671f\n\n# D Day\u3001H Hour\u3001W Week\n")),(0,a.kt)("h3",{id:"-\u7b2c\u56db\u6b65\u68c0\u67e5namedconf\u4e0ezones\u6587\u4ef6"},"\u2606 \u7b2c\u56db\u6b65\uff1a\u68c0\u67e5named.conf\u4e0ezones\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# named-checkconf /etc/named.conf\n# named-checkconf /etc/named.rfc1912.zones\n\n\u68c0\u67e5itcast.cluster.zone\u6587\u4ef6\n# cd /var/named\n# named-checkzone itcast.cluster.zone itcast.cluster.zone\n")),(0,a.kt)("h3",{id:"-\u7b2c\u4e94\u6b65\u542f\u52a8dns\u670d\u52a1named"},"\u2606 \u7b2c\u4e94\u6b65\uff1a\u542f\u52a8DNS\u670d\u52a1\uff08named\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl restart named\n# netstat -tnlp |grep named\n")),(0,a.kt)("h3",{id:"3web\u670d\u52a1\u642d\u5efa"},"3\u3001Web\u670d\u52a1\u642d\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# yum install httpd -y\n# systemctl start httpd\n\n# echo 'DNS Test ...' > /var/www/html/index.html\n")),(0,a.kt)("h3",{id:"4\u6d4b\u8bd5dns\u670d\u52a1\u5668\u7684\u6b63\u5411\u89e3\u6790"},"4\u3001\u6d4b\u8bd5DNS\u670d\u52a1\u5668\u7684\u6b63\u5411\u89e3\u6790"),(0,a.kt)("p",null,"Client\uff1a\u5ba2\u6237\u7aef\u670d\u52a1\u5668\u64cd\u4f5c"),(0,a.kt)("h3",{id:"-\u6dfb\u52a0dns\u670d\u52a1\u5668"},"\u2606 \u6dfb\u52a0DNS\u670d\u52a1\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# \u4e34\u65f6\u6dfb\u52a0\necho 'nameserver 10.1.1.12' > /etc/resolv.conf\n\u6ce8\uff1a\u7535\u8111\u91cd\u542f\uff0c\u7f51\u7edc\u5237\u65b0restart network\uff0cVMware\u6302\u8d77\uff0c\u4e34\u65f6DNS\u90fd\u4f1a\u5931\u6548\n\n# \u6c38\u4e45\u6dfb\u52a0\nvim /etc/sysconfig/network-scripts/ifcfg-ens33\nDNS=10.1.1.12\n")),(0,a.kt)("h3",{id:"-\u4f7f\u7528nslookup\u68c0\u6d4b\u6b63\u5411\u89e3\u6790\u662f\u5426\u751f\u6548"},"\u2606 \u4f7f\u7528nslookup\u68c0\u6d4b\u6b63\u5411\u89e3\u6790\u662f\u5426\u751f\u6548"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# nslookup www.itcast.cluster\n")),(0,a.kt)("h3",{id:"-\u4f7f\u7528elinks\u547d\u4ee4\u884c\u6d4f\u89c8\u5668\u6216curl\u6765\u5b9e\u73b0\u8bbf\u95ee"},"\u2606 \u4f7f\u7528elinks\u547d\u4ee4\u884c\u6d4f\u89c8\u5668\u6216curl\u6765\u5b9e\u73b0\u8bbf\u95ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# yum install elinks -y\n# elinks\n\u8f93\u5165www.itcast.cluster\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# curl http://www.itcast.cluster\n")))}d.isMDXComponent=!0},59522:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/image-20200415143616891-53c89cf29d013ec037bef73a4a3a52ff.png"},81174:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/image-20200415162454902-74476b6909295093f469c8102b0aae0c.png"},36577:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/image-20200415163918871-8a204b66ffaafd71d38efc7ce822fd05.png"},41565:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/image-20200415170447838-f6b5654bd6edfd6f7ae86c49b84e1251.png"}}]);