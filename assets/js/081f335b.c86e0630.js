"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6582],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(l),k=n,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||a;return l?r.createElement(m,i(i({ref:t},u),{},{components:l})):r.createElement(m,i({ref:t},u))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=l[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},47489:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});var r=l(87462),n=(l(67294),l(3905));const a={title:"[Mysql] \u4f01\u4e1a\u67b6\u6784\u7f13\u5b58\u4e2d\u95f4\u4ef6\u5206\u5e03\u5f0fRedis",sidebar_position:6},i=void 0,s={unversionedId:"Mysql/redis",id:"Mysql/redis",title:"[Mysql] \u4f01\u4e1a\u67b6\u6784\u7f13\u5b58\u4e2d\u95f4\u4ef6\u5206\u5e03\u5f0fRedis",description:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848",source:"@site/docs/Mysql/redis.md",sourceDirName:"Mysql",slug:"/Mysql/redis",permalink:"/docs/Mysql/redis",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Mysql/redis.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"[Mysql] \u4f01\u4e1a\u67b6\u6784\u7f13\u5b58\u4e2d\u95f4\u4ef6\u5206\u5e03\u5f0fRedis",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"[Mysql] \u4f01\u4e1a\u67b6\u6784\u7f13\u5b58\u4e2d\u95f4\u4ef6\u5206\u5e03\u5f0fmemcached",permalink:"/docs/Mysql/memcached"},next:{title:"[Mysql] \u591a\u8868\u64cd\u4f5c",permalink:"/docs/Mysql/ddl"}},o=[{value:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848",id:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848",children:[],level:2},{value:"Redis \u4ecb\u7ecd",id:"redis-\u4ecb\u7ecd",children:[{value:"2\u3001\u4e1a\u52a1\u4f7f\u7528\u573a\u5408",id:"2\u4e1a\u52a1\u4f7f\u7528\u573a\u5408",children:[],level:3}],level:2},{value:"3\u3001\u5bf9\u6bd4 memcached",id:"3\u5bf9\u6bd4-memcached",children:[],level:2},{value:"\u6848\u4f8b\u4f7f\u7528",id:"\u6848\u4f8b\u4f7f\u7528",children:[],level:2},{value:"\u4e3b\u4ece\u6a21\u5f0f",id:"\u4e3b\u4ece\u6a21\u5f0f",children:[],level:2},{value:"NoSQL \u6982\u5ff5",id:"nosql-\u6982\u5ff5",children:[{value:"\u4e00\u4e9b\u95ee\u9898",id:"\u4e00\u4e9b\u95ee\u9898",children:[],level:3},{value:"NoSQL",id:"nosql",children:[],level:3},{value:"\u89e3\u51b3\u65b9\u6848(\u7535\u5546\u573a\u666f)",id:"\u89e3\u51b3\u65b9\u6848\u7535\u5546\u573a\u666f",children:[],level:3}],level:2},{value:"Redis \u6570\u636e\u5b58\u50a8\u7c7b\u578b\u4ecb\u7ecd",id:"redis-\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u4ecb\u7ecd",children:[{value:"\u4e1a\u52a1\u6570\u636e\u7684\u7279\u6b8a\u6027",id:"\u4e1a\u52a1\u6570\u636e\u7684\u7279\u6b8a\u6027",children:[],level:3},{value:"Redis\u6570\u636e\u7c7b\u578b(5\u79cd\u5e38\u7528)",id:"redis\u6570\u636e\u7c7b\u578b5\u79cd\u5e38\u7528",children:[],level:3}],level:2}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848"},"\u6a21\u62df\u8fd0\u7ef4\u8bbe\u8ba1\u65b9\u6848"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"re1",src:l(7730).Z})),(0,n.kt)("p",null,"\u6839\u636e\u4ee5\u4e0a\u4e1a\u52a1\u9700\u6c42\uff0c\u51c6\u5907\u52a0\u5165 Redis \u7f13\u5b58\u4e2d\u95f4\u4ef6\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528\u5230 redis \u66f4\u52a0\u4e30\u5bcc\u7684\u529f\u80fd"),(0,n.kt)("p",null,"\u5728\u5546\u57ce\u4e1a\u52a1\u4e2d\u5b9e\u73b0\uff1a"),(0,n.kt)("p",null,"\u2460session \u5171\u4eab\u5b58\u50a8\u5230 redis"),(0,n.kt)("p",null,"\u2461openresty\uff08nginx+lua\uff09\u52a8\u6001\u9650\u5236 IP \u8bbf\u95ee"),(0,n.kt)("h2",{id:"redis-\u4ecb\u7ecd"},"Redis \u4ecb\u7ecd"),(0,n.kt)("p",null,"Nosql \u975e\u5173\u7cfb\u6570\u636e\u5e93 key => value \u952e\u503c\u5bf9"),(0,n.kt)("p",null,"Redis \u662f",(0,n.kt)("strong",{parentName:"p"},"R"),"emote ",(0,n.kt)("strong",{parentName:"p"},"D"),"ictionary ",(0,n.kt)("strong",{parentName:"p"},"S"),"erver(\u8fdc\u7a0b\u6570\u636e\u670d\u52a1)\u7684\u7f29\u5199"),(0,n.kt)("p",null,"\u7531\u610f\u5927\u5229\u4eba antirez(Salvatore Sanfilippo) \u5f00\u53d1\u7684\u4e00\u6b3e \u5185\u5b58\u9ad8\u901f\u7f13\u5b58\u6570\u636e\u5e93"),(0,n.kt)("p",null,"\u8be5\u8f6f\u4ef6\u4f7f\u7528 C \u8bed\u8a00\u7f16\u5199,\u5b83\u7684\u6570\u636e\u6a21\u578b\u4e3a key-value"),(0,n.kt)("p",null,"\u5b83\u652f\u6301\u4e30\u5bcc\u7684\u6570\u636e\u7ed3\u6784\uff0c\u6bd4\u5982 ",(0,n.kt)("strong",{parentName:"p"},"String list\uff08\u53cc\u5411\u94fe\u8868\uff09 hash\uff08\u54c8\u5e0c\uff09 set\uff08\u96c6\u5408\uff09 sorted set\uff08zset \u6709\u5e8f\u96c6\u5408\uff09")),(0,n.kt)("p",null,"\u53ef\u6301\u4e45\u5316\uff08\u4fdd\u5b58\u6570\u636e\u5230\u78c1\u76d8\u4e2d\uff09\uff0c\u4fdd\u8bc1\u4e86\u6570\u636e\u5b89\u5168"),(0,n.kt)("h3",{id:"2\u4e1a\u52a1\u4f7f\u7528\u573a\u5408"},"2\u3001\u4e1a\u52a1\u4f7f\u7528\u573a\u5408"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2460","[Sort Set]"),"\u6392\u884c\u699c\u5e94\u7528\uff0c\u53d6 top n \u64cd\u4f5c\uff0c\u4f8b\u5982 sina \u5fae\u535a\u70ed\u95e8\u8bdd\u9898"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2461","[List]"),"\u83b7\u5f97\u6700\u65b0 N \u4e2a\u6570\u636e \u6216 \u67d0\u4e2a\u5206\u7c7b\u7684\u6700\u65b0\u6570\u636e"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2462","[String]"),"\u8ba1\u6570\u5668\u5e94\u7528"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2463","[Set]"),"sns(social network site)\u83b7\u5f97\u5171\u540c\u597d\u53cb"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2464","[Set]"),"\u9632\u653b\u51fb\u7cfb\u7edf(ip \u5224\u65ad)\u9ed1\u767d\u540d\u5355\u7b49\u7b49")),(0,n.kt)("h2",{id:"3\u5bf9\u6bd4-memcached"},"3\u3001\u5bf9\u6bd4 memcached"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u2460Redis \u4e0d\u4ec5\u4ec5\u652f\u6301\u7b80\u5355\u7684 k/v \u7c7b\u578b\u7684\u6570\u636e\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b list\uff0cset\uff0czset\uff0chash \u7b49\u6570\u636e\u7ed3\u6784\u7684\u5b58\u50a8\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"\u2461Redis \u652f\u6301 master-slave(\u4e3b\u2014\u4ece)\u6a21\u5f0f\u5e94\u7528\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"\u2462Redis \u652f\u6301\u6570\u636e\u7684\u6301\u4e45\u5316\uff0c\u53ef\u4ee5\u5c06\u5185\u5b58\u4e2d\u7684\u6570\u636e\u4fdd\u6301\u5728\u78c1\u76d8\u4e2d\uff0c\u91cd\u542f\u7684\u65f6\u5019\u53ef\u4ee5\u518d\u6b21\u52a0\u8f7d\u8fdb\u884c\u4f7f\u7528\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"\u2463Redis \u5355\u4e2a value \u5b58\u50a8 string \u7684\u6700\u5927\u9650\u5236\u662f 512MB\uff0c memcached \u53ea\u80fd\u4fdd\u5b58 1MB \u7684\u6570\u636e"),(0,n.kt)("p",{parentName:"blockquote"},"\u2464redis \u662f\u5355\u6838\uff0cmemcached \u662f\u591a\u6838")),(0,n.kt)("p",null,"\u200b \u7531\u4e8e redis \u53ea\u80fd\u4f7f\u7528\u5355\u6838\uff0c\u800c memcached \u53ef\u4ee5\u4f7f\u7528\u591a\u6838\uff0c\u6240\u4ee5\u5728\u6bd4\u8f83\u4e0a\uff0c\u5e73\u5747\u6bcf\u4e00\u4e2a\u6838\u4e0a redis \u5728\u50a8\u5b58\u5c0f\u6570\u636e\u65f6\u6bd4 memcached \u6027\u80fd\u66f4\u9ad8\u3002\u800c\u5374 100K \u4ee5\u4e0a\u6570\u636e\u4e2d\uff0cmemcached \u6027\u80fd\u8981\u9ad8\u4e8e redis\uff0c\u867d\u7136 redis \u6700\u8fd1\u4e5f\u5728\u50a8\u5b58\u5927\u6570\u636e\u7684\u6027\u80fd\u4e0a\u8fdb\u884c\u4f18\u5316\uff0c\u4f46\u662f\u6bd4\u8d77 memcached \u8fd8\u662f\u6709\u70b9\u900a\u8272\u3002\u7ed3\u8bba\u662f\u65e0\u8bba\u4f60\u4f7f\u7528\u90a3\u4e2a\uff0c\u6bcf\u79d2\u5904\u7406\u8bf7\u6c42\u7684\u6b21\u6570\u90fd\u4e0d\u4f1a\u6210\u4e3a\u74f6\u9888\u3002"),(0,n.kt)("p",null,"\u4f60\u9700\u8981\u5173\u6ce8\u5185\u5b58\u4f7f\u7528\u7387\u3002\u5bf9\u4e8e key-vlaue \u8fd9\u6837\u7b80\u5355\u7684\u6570\u636e\u50a8\u5b58\uff0cmemcached \u7684\u5185\u5b58\u4f7f\u7528\u7387\u66f4\u9ad8\uff0c\u5982\u679c\u91c7\u7528 hash \u7ed3\u6784\uff0credis \u7684\u5185\u5b58\u4f7f\u7528\u7387\u4f1a\u66f4\u9ad8\uff0c\u5f53\u7136\u8fd9\u90fd\u4f9d\u8d56\u4e8e\u5177\u4f53\u7684\u5e94\u7528\u573a\u666f\u3002"),(0,n.kt)("h2",{id:"\u6848\u4f8b\u4f7f\u7528"},"\u6848\u4f8b\u4f7f\u7528"),(0,n.kt)("h2",{id:"\u4e3b\u4ece\u6a21\u5f0f"},"\u4e3b\u4ece\u6a21\u5f0f"),(0,n.kt)("p",null,"\u7f13\u5b58\u96c6\u7fa4\u67b6\u6784\u793a\u610f\u56fe"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wps125",src:l(98396).Z})),(0,n.kt)("h2",{id:"nosql-\u6982\u5ff5"},"NoSQL \u6982\u5ff5"),(0,n.kt)("h3",{id:"\u4e00\u4e9b\u95ee\u9898"},"\u4e00\u4e9b\u95ee\u9898"),(0,n.kt)("p",null,"\u73b0\u8c61:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"12306 \u5d29\u6e83"),(0,n.kt)("li",{parentName:"ul"},"618, \u53cc\u5341\u4e00\u5d29\u6e83")),(0,n.kt)("p",null,"\u6d77\u91cf\u7528\u6237, \u9ad8\u5e76\u53d1"),(0,n.kt)("p",null,"\u539f\u56e0:"),(0,n.kt)("p",null,"\u5173\u7cfb\u578b\u6570\u636e\u5e93"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd\u74f6\u9888: \u78c1\u76d8 IO \u6027\u80fd\u4f4e\u4e0b"),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55\u74f6\u9888: \u6570\u636e\u5173\u7cfb\u590d\u6742, \u6269\u5c55\u6027\u5dee, \u4e0d\u4fbf\u4e8e\u5927\u89c4\u6a21\u96c6\u7fa4")),(0,n.kt)("p",null,"\u89e3\u51b3\u601d\u8def:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u964d\u4f4e\u78c1\u76d8 IO \u6b21\u6570, \u8d8a\u4f4e\u8d8a\u597d ------ \u5185\u5b58\u5b58\u50a8"),(0,n.kt)("li",{parentName:"ul"},"\u53bb\u9664\u6570\u636e\u95f4\u5173\u7cfb, \u8d8a\u7b80\u5355\u8d8a\u597d ------ \u4e0d\u5b58\u50a8\u5173\u7cfb, \u4ec5\u5b58\u50a8\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u4ee5\u4e0a\u5c31\u662f NoSQL")),(0,n.kt)("h3",{id:"nosql"},"NoSQL"),(0,n.kt)("p",null,"\u5373 Not-Only SQL (\u6cdb\u6307\u975e\u5173\u7cfb\u578b\u7684\u6570\u636e\u5e93), \u4f5c\u4e3a\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u8865\u5145\n\u4f5c\u7528: \u5e94\u5bf9\u57fa\u4e8e\u6d77\u91cf\u7528\u6237\u548c\u6d77\u91cf\u6570\u636e\u524d\u63d0\u4e0b\u7684\u6570\u636e\u5904\u7406\u95ee\u9898"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7279\u5f81:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5bb9, \u53ef\u4f38\u7f29"),(0,n.kt)("li",{parentName:"ul"},"\u5927\u6570\u636e\u91cf\u4e0b\u9ad8\u6027\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u6570\u636e\u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u53ef\u7528"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5e38\u89c1 Nosql \u6570\u636e\u5e93"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Redis"),(0,n.kt)("li",{parentName:"ul"},"MongoDB"),(0,n.kt)("li",{parentName:"ul"},"HBase"),(0,n.kt)("li",{parentName:"ul"},"memcache")))),(0,n.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848\u7535\u5546\u573a\u666f"},"\u89e3\u51b3\u65b9\u6848(\u7535\u5546\u573a\u666f)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"jiejue",src:l(35359).Z})),(0,n.kt)("h2",{id:"redis-\u6570\u636e\u5b58\u50a8\u7c7b\u578b\u4ecb\u7ecd"},"Redis \u6570\u636e\u5b58\u50a8\u7c7b\u578b\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"\u4e1a\u52a1\u6570\u636e\u7684\u7279\u6b8a\u6027"},"\u4e1a\u52a1\u6570\u636e\u7684\u7279\u6b8a\u6027"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u539f\u59cb\u4e1a\u52a1\u529f\u80fd\u8bbe\u8ba1")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u79d2\u6740, 618, \u53cc\u5341\u4e00, 12306")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u8fd0\u8425\u5e73\u53f0\u76d1\u63a7\u5230\u7684\u7a81\u53d1\u9ad8\u9891\u8bbf\u95ee\u6570\u636e")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7a81\u53d1\u8981\u95fb")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u9ad8\u9891, \u590d\u6742\u7684\u7edf\u8ba1\u6570\u636e")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u4eba\u6570"),(0,n.kt)("li",{parentName:"ul"},"\u6295\u7968")),(0,n.kt)("h3",{id:"redis\u6570\u636e\u7c7b\u578b5\u79cd\u5e38\u7528"},"Redis\u6570\u636e\u7c7b\u578b(5\u79cd\u5e38\u7528)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"geshi",src:l(71020).Z})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"string\u7c7b\u578b")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7684\u6570\u636e: \u5355\u4e2a\u6570\u636e, \u6700\u7b80\u5355\u7684\u6570\u636e\u5b58\u50a8\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6570\u636e\u7684\u683c\u5f0f: \u4e00\u4e2a\u5b58\u50a8\u7a7a\u95f4\u4fdd\u5b58\u4e00\u4e2a\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u5185\u5bb9: \u901a\u5e38\u4f7f\u7528\u5b57\u7b26\u4e32, \u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u6574\u6570\u7684\u5f62\u5f0f\u5c55\u793a, \u53ef\u4ee5\u4f5c\u4e3a\u6570\u5b57\u64cd\u4f5c\u4f7f\u7528")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"hash\u7c7b\u578b")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hash",src:l(50928).Z})))}u.isMDXComponent=!0},71020:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/geshi-3d127ad461e70f2687d0a8468b5b6fbc.jpg"},50928:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/hash-122cb2fec7295521b0effc2a147a69ef.jpg"},35359:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/jiejue-7e6da955db41970c2e1397a9ccc6a3fe.jpg"},7730:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/re1-dd4da3734d8ae0689cd6a5dfdadeb059.jpg"},98396:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/wps125-e696ce6baa52bf0460cd0e928e58c91b.jpg"}}]);