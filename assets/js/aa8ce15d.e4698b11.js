"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},P={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=l,k=s["".concat(o,".").concat(d)]||s[d]||P[d]||i;return n?r.createElement(k,a(a({ref:t},c),{},{components:n})):r.createElement(k,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22058:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),l=(n(67294),n(3905));const i={title:"[Linux] TCP/IP\u534f\u8bae\u6a21\u578b",sidebar_position:8},a=void 0,p={unversionedId:"Linux/tcpip",id:"Linux/tcpip",title:"[Linux] TCP/IP\u534f\u8bae\u6a21\u578b",description:"1. \u4ec0\u4e48\u662fTCP/IP\u6a21\u578b",source:"@site/docs/Linux/tcpip.md",sourceDirName:"Linux",slug:"/Linux/tcpip",permalink:"/docs/Linux/tcpip",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Linux/tcpip.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"[Linux] TCP/IP\u534f\u8bae\u6a21\u578b",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"[Linux] osi7\u5c42\u6a21\u578b",permalink:"/docs/Linux/osi"},next:{title:"[Linux] TCP/IP\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u65ad\u5f00",permalink:"/docs/Linux/shakehands"}},o=[{value:"1. \u4ec0\u4e48\u662fTCP/IP\u6a21\u578b",id:"1-\u4ec0\u4e48\u662ftcpip\u6a21\u578b",children:[],level:2},{value:"2. TCP/IP\u7684\u5206\u5c42\u7ed3\u6784",id:"2-tcpip\u7684\u5206\u5c42\u7ed3\u6784",children:[{value:"2.1 \u94fe\u8def\u5c42",id:"21-\u94fe\u8def\u5c42",children:[],level:3},{value:"2.2 \u7f51\u7edc\u5c42",id:"22-\u7f51\u7edc\u5c42",children:[],level:3},{value:"2.3 \u8fd0\u8f93\u5c42",id:"23-\u8fd0\u8f93\u5c42",children:[],level:3},{value:"2.4 \u5e94\u7528\u5c42",id:"24-\u5e94\u7528\u5c42",children:[],level:3}],level:2},{value:"3. \u6570\u636e\u5c01\u88c5\u8fc7\u7a0b",id:"3-\u6570\u636e\u5c01\u88c5\u8fc7\u7a0b",children:[{value:"\u6570\u636e\u683c\u5f0f",id:"\u6570\u636e\u683c\u5f0f",children:[],level:3},{value:"\u6570\u636e\u7684\u5c01\u88c5\u4e0e\u89e3\u5c01\u88c5",id:"\u6570\u636e\u7684\u5c01\u88c5\u4e0e\u89e3\u5c01\u88c5",children:[],level:3}],level:2}],u={toc:o};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u4ec0\u4e48\u662ftcpip\u6a21\u578b"},"1. \u4ec0\u4e48\u662fTCP/IP\u6a21\u578b"),(0,l.kt)("p",null,"TCP/IP\u534f\u8bae\u6a21\u578b\uff08Transmission Control Protocol/Internet Protocol\uff09\uff0c\u5305\u542b\u4e86\u4e00\u7cfb\u5217\u6784\u6210\u4e92\u8054\u7f51\u57fa\u7840\u7684\u7f51\u7edc\u534f\u8bae\uff0c\u662fInternet\u7684\u6838\u5fc3\u534f\u8bae\uff0c\u901a\u8fc720\u591a\u5e74\u7684\u53d1\u5c55\u5df2\u65e5\u6e10\u6210\u719f\uff0c\u5e76\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5c40\u57df\u7f51\u548c\u5e7f\u57df\u7f51\u4e2d\uff0c\u76ee\u524d\u5df2\u6210\u4e3a\u4e00\u79cd\u56fd\u9645\u6807\u51c6\u3002"),(0,l.kt)("p",null,"TCP/IP\u534f\u8bae\u7c07\u662f\u4e00\u7ec4\u4e0d\u540c\u5c42\u6b21\u4e0a\u7684\u591a\u4e2a\u534f\u8bae\u7684\u7ec4\u5408\uff0c\u8be5\u534f\u8bae\u91c7\u7528\u4e864\u5c42\u7684\u5c42\u7ea7\u7ed3\u6784\uff0c\u6bcf\u4e00\u5c42\u90fd\u547c\u53eb\u5b83\u7684\u4e0b\u4e00\u5c42\u6240\u63d0\u4f9b\u7684\u534f\u8bae\u6765\u5b8c\u6210\u81ea\u5df1\u7684\u9700\u6c42\uff0c\u4e0eOSI\u7684\u4e03\u5c42\u6a21\u578b\u76f8\u5bf9\u5e94\u3002"),(0,l.kt)("p",null,"\u5c3d\u7ba1\u901a\u5e38\u79f0\u8be5\u534f\u8bae\u65cf\u4e3aTCP/IP\uff0c\u4f46TCP\u548cIP\u53ea\u662f\u5176\u4e2d\u7684\u4e24\u79cd\u534f\u8bae\u800c\u5df2\uff08\u8be5\u534f\u8bae\u65cf\u7684\u53e6\u4e00\u4e2a\u540d\u5b57\u662fInternet\u534f\u8bae\u65cf(Internet Protocol Suite)\uff09"),(0,l.kt)("h2",{id:"2-tcpip\u7684\u5206\u5c42\u7ed3\u6784"},"2. TCP/IP\u7684\u5206\u5c42\u7ed3\u6784"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tcpip",src:n(19637).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"77",src:n(67839).Z})),(0,l.kt)("h3",{id:"21-\u94fe\u8def\u5c42"},"2.1 \u94fe\u8def\u5c42"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"OSI\u7684\u7269\u7406\u5c42\u548c\u6570\u636e\u94fe\u8def\u5c42")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u94fe\u8def\u5c42\u4e2dARP\uff08\u5730\u5740\u89e3\u6790\u534f\u8baeIP-MAC\uff09\u548cRARP\uff08\u9006\u5730\u5740\u89e3\u6790\u534f\u8baeMAC-IP\uff09\u662f\u67d0\u4e9b\u7f51\u7edc\u63a5\u53e3\uff08\u5982\u4ee5\u592a\u7f51\uff09\u4f7f\u7528\u7684\u7279\u6b8a\u534f\u8bae\uff0c\u7528\u6765\u8f6c\u6362IP\u5c42\u548c\u7f51\u7edc\u63a5\u53e3\u5c42\u4f7f\u7528\u7684\u5730\u5740\u3002")),(0,l.kt)("h3",{id:"22-\u7f51\u7edc\u5c42"},"2.2 \u7f51\u7edc\u5c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e5f\u79f0\u4f5c\u4e92\u8054\u7f51\u5c42\u6216\u7f51\u9645\u5c42\uff0c\u5904\u7406\u5206\u7ec4\u5728\u7f51\u7edc\u4e2d\u7684\u6d3b\u52a8\uff0c\u4f8b\u5982\u5206\u7ec4\u7684\u9009\u8def\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728TCP/IP\u534f\u8bae\u65cf\u4e2d\uff0c\u7f51\u7edc\u5c42\u534f\u8bae\u5305\u62ecIP\u534f\u8bae\uff08\u7f51\u9645\u534f\u8bae\uff09\uff0cICMP\u534f\u8bae\uff08Internet\u4e92\u8054\u7f51\u63a7\u5236\u62a5\u6587\u534f\u8bae\uff09\uff0c\u4ee5\u53caIGMP\u534f\u8bae\uff08Internet\u7ec4\u7ba1\u7406\u534f\u8bae\uff09\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"IP\u662f\u4e00\u79cd\u7f51\u7edc\u5c42\u534f\u8bae\uff0c\u63d0\u4f9b\u7684\u662f\u4e00\u79cd\u4e0d\u53ef\u9760\u7684\u670d\u52a1\uff0c\u5b83\u53ea\u662f\u5c3d\u53ef\u80fd\u5feb\u5730\u628a\u5206\u7ec4\u4ece\u6e90\u7ed3\u70b9\u9001\u5230\u76ee\u7684\u7ed3\u70b9\uff0c\u4f46\u662f\u5e76\u4e0d\u63d0\u4f9b\u4efb\u4f55\u53ef\u9760\u6027\u4fdd\u8bc1\u3002\u540c\u65f6\u88abTCP\u548cUDP\u4f7f\u7528\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"TCP\u548cUDP\u7684\u6bcf\u7ec4\u6570\u636e\u90fd\u901a\u8fc7\u7aef\u7cfb\u7edf\u548c\u6bcf\u4e2a\u4e2d\u95f4\u8def\u7531\u5668\u4e2d\u7684IP\u5c42\u5728\u4e92\u8054\u7f51\u4e2d\u8fdb\u884c\u4f20\u8f93\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ICMP\u662fIP\u534f\u8bae\u7684\u9644\u5c5e\u534f\u8bae\u3002IP\u5c42\u7528\u5b83\u6765\u4e0e\u5176\u4ed6\u4e3b\u673a\u6216\u8def\u7531\u5668\u4ea4\u6362\u9519\u8bef\u62a5\u6587\u548c\u5176\u4ed6\u91cd\u8981\u4fe1\u606f\u3002\u5b83\u4e3b\u8981\u662f\u7528\u6765\u63d0\u4f9b\u6709\u5173\u901a\u5411\u76ee\u7684\u5730\u5740\u7684\u8def\u5f84\u4fe1\u606f\u3002Ping\u548cTraceroute\u5de5\u5177\uff0c\u5b83\u4eec\u90fd\u4f7f\u7528\u4e86ICMP\u534f\u8bae\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"IGMP\u662fInternet\u7ec4\u7ba1\u7406\u534f\u8bae\u3002\u5b83\u7528\u6765\u628a\u4e00\u4e2aUDP\u6570\u636e\u62a5\u591a\u64ad\u5230\u591a\u4e2a\u4e3b\u673a\u3002\u8be5\u534f\u8bae\u8fd0\u884c\u5728\u4e3b\u673a\u548c\u7ec4\u64ad\u8def\u7531\u5668\u4e4b\u95f4\u3002"))))),(0,l.kt)("h3",{id:"23-\u8fd0\u8f93\u5c42"},"2.3 \u8fd0\u8f93\u5c42"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u8981\u4e3a\u4e24\u53f0\u4e3b\u673a\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u7aef\u5230\u7aef\u7684\u901a\u4fe1\u3002\u5728TCP/IP\u534f\u8bae\u65cf\u4e2d\uff0c\u6709\u4e24\u4e2a\u4e92\u4e0d\u76f8\u540c\u7684\u4f20\u8f93\u534f\u8bae\uff1aTCP\uff08\u4f20\u8f93\u63a7\u5236\u534f\u8bae\uff09\u548cUDP\uff08\u7528\u6237\u6570\u636e\u62a5\u534f\u8bae\uff09")),(0,l.kt)("p",null,"TCP\u534f\u8bae\uff1a"),(0,l.kt)("p",null,"\u4e3a\u4e24\u53f0\u4e3b\u673a\u63d0\u4f9b\u9ad8\u53ef\u9760\u6027\u7684\u6570\u636e\u901a\u4fe1\u3002TCP\u662f\u9762\u5411\u8fde\u63a5\u7684\u901a\u4fe1\u534f\u8bae\uff0c\u901a\u8fc7\u4e09\u6b21\u63e1\u624b\u5efa\u7acb\u8fde\u63a5\uff0c\u901a\u8baf\u5b8c\u6210\u65f6\u8981\u65ad\u5f00\u8fde\u63a5\uff0c\u7531\u4e8eTCP\u662f\u9762\u5411\u8fde\u63a5\u7684\u6240\u4ee5\u53ea\u80fd\u7528\u4e8e\u7aef\u5230\u7aef\u7684\u901a\u8baf\u3002TCP\u63d0\u4f9b\u7684\u662f\u4e00\u79cd\u53ef\u9760\u7684\u6570\u636e\u6d41\u670d\u52a1\uff0c\u91c7\u7528\u201c\u5e26\u91cd\u4f20\u7684\u80af\u5b9a\u786e\u8ba4\u201d\u6280\u672f\u6765\u5b9e\u73b0\u4f20\u8f93\u7684\u53ef\u9760\u6027\u3002\u4e5f\u5c31\u662fTCP\u6570\u636e\u5305\u4e2d\u5305\u62ec\u5e8f\u53f7\uff08seq\uff09\u548c\u786e\u8ba4\uff08ack\uff09\uff0c\u6240\u4ee5\u672a\u6309\u7167\u987a\u5e8f\u6536\u5230\u7684\u5305\u53ef\u4ee5\u88ab\u6392\u5e8f\uff0c\u800c\u635f\u574f\u7684\u5305\u53ef\u4ee5\u88ab\u91cd\u4f20\u3002 "),(0,l.kt)("p",null,"UDP\u534f\u8bae\uff1a"),(0,l.kt)("p",null,"\u5219\u4e3a\u5e94\u7528\u5c42\u63d0\u4f9b\u4e00\u79cd\u975e\u5e38\u7b80\u5355\u7684\u670d\u52a1\u3002\u5b83\u662f\u9762\u5411\u65e0\u8fde\u63a5\u7684\u901a\u8baf\u534f\u8bae\uff0cUDP\u6570\u636e\u5305\u62ec\u76ee\u7684\u7aef\u53e3\u53f7\u548c\u6e90\u7aef\u53e3\u53f7\u4fe1\u606f\uff0c\u7531\u4e8e\u901a\u8baf\u4e0d\u9700\u8981\u8fde\u63a5\uff0c\u6240\u4ee5\u53ef\u4ee5\u5b9e\u73b0\u5e7f\u64ad\u53d1\u9001\u3002 UDP\u901a\u8baf\u65f6\u4e0d\u9700\u8981\u63a5\u6536\u65b9\u786e\u8ba4\uff0c\u4e0d\u4fdd\u8bc1\u8be5\u6570\u636e\u62a5\u80fd\u5230\u8fbe\u53e6\u4e00\u7aef\uff0c\u5c5e\u4e8e\u4e0d\u53ef\u9760\u7684\u4f20\u8f93\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e22\u5305\u73b0\u8c61\u3002UDP\u4e0eTCP\u4f4d\u4e8e\u540c\u4e00\u5c42\uff0c\u4f46\u5b83\u4e0d\u7ba1\u6570\u636e\u5305\u7684\u987a\u5e8f\u3001\u9519\u8bef\u6216\u91cd\u53d1\u3002"),(0,l.kt)("h3",{id:"24-\u5e94\u7528\u5c42"},"2.4 \u5e94\u7528\u5c42"),(0,l.kt)("p",null,"OSI\u4f1a\u8bdd\u5c42\u3001\u8868\u793a\u5c42\u3001\u5e94\u7528\u5c42"),(0,l.kt)("p",null,"\u5e94\u7528\u5c42\u8d1f\u8d23\u5904\u7406\u7279\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u7ec6\u8282\u3002"),(0,l.kt)("p",null,"HTTP\u3001FTP\u3001SSH\u3001DHCP\u3001DNS....."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"3-\u6570\u636e\u5c01\u88c5\u8fc7\u7a0b"},"3. \u6570\u636e\u5c01\u88c5\u8fc7\u7a0b"),(0,l.kt)("h3",{id:"\u6570\u636e\u683c\u5f0f"},"\u6570\u636e\u683c\u5f0f"),(0,l.kt)("p",null,"TCP\u6570\u636e\u4fe1\u606f\uff1aTCP\u5934\u90e8+\u5b9e\u9645\u6570\u636e (TCP\u5934\u5305\u62ec\u6e90\u548c\u76ee\u6807\u4e3b\u673a\u7aef\u53e3\u53f7\u3001\u987a\u5e8f\u53f7\u3001\u786e\u8ba4\u53f7\u3001\u6821\u9a8c\u5b57\u7b49\uff09"),(0,l.kt)("p",null,"IP\u6570\u636e\u5305\uff1aIP\u5934\u90e8+TCP\u6570\u636e\u4fe1\u606f\uff08IP\u5934\u5305\u62ec\u6e90\u548c\u76ee\u6807\u4e3b\u673aIP\u5730\u5740\u3001\u7c7b\u578b\u3001\u751f\u5b58\u671f\u7b49\uff09"),(0,l.kt)("p",null,"\u6570\u636e\u5e27\uff1a\u5e27\u5934+IP\u6570\u636e\u5305+\u5e27\u5c3e \uff08\u5e27\u5934\u5305\u62ec\u6e90\u548c\u76ee\u6807\u4e3b\u673aMAC\u521d\u6b65\u5730\u5740\u53ca\u7c7b\u578b\uff0c\u5e27\u5c3e\u662f\u6821\u9a8c\u5b57\uff09"),(0,l.kt)("h3",{id:"\u6570\u636e\u7684\u5c01\u88c5\u4e0e\u89e3\u5c01\u88c5"},"\u6570\u636e\u7684\u5c01\u88c5\u4e0e\u89e3\u5c01\u88c5"),(0,l.kt)("p",null,"\u5c01\u88c5\uff1a\u6570\u636e\u8981\u901a\u8fc7\u7f51\u7edc\u8fdb\u884c\u4f20\u8f93\uff0c\u8981\u4ece\u9ad8\u5c42\u4e00\u5c42\u4e00\u5c42\u7684\u5411\u4e0b\u4f20\u9001\uff0c\u5982\u679c\u4e00\u4e2a\u4e3b\u673a\u8981\u4f20\u9001\u6570\u636e\u5230\u522b\u7684\u4e3b\u673a\uff0c\u5148\u628a\u6570\u636e\u88c5\u5230\u4e00\u4e2a\u7279\u6b8a\u534f\u8bae\u62a5\u5934\u4e2d\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u53eb-----",(0,l.kt)("inlineCode",{parentName:"p"},"\u5c01\u88c5"),"\u3002 \u89e3\u5c01\u88c5\uff1a\u4e0a\u8ff0\u7684\u9006\u5411\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u5f53\u6570\u636e\u4ee5TCP/IP\u534f\u8bae\u4f20\u8f93\u65f6\u7684\u5c01\u88c5\u4e0e\u8857\u5c01\u88c5\u8fc7\u7a0b\u5982\u4e0b\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"trans",src:n(79741).Z})))}c.isMDXComponent=!0},67839:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/77-37747e4f2f0867a9a96b8a4bb7d2af1f.JPG"},19637:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/tcpip-a727ed6692b2fcab3b9a520e8eca1ed0.JPG"},79741:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/trans-67b2ce3d3167931b1381a929f6c73c32.JPG"}}]);