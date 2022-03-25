"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1559],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=c(n),s=a,k=g["".concat(i,".").concat(s)]||g[s]||u[s]||r;return n?o.createElement(k,l(l({ref:t},m),{},{components:n})):o.createElement(k,l({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73041:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],p={title:"[Nginx] URL\u5339\u914d\u4e4blocation",sidebar_position:7},i=void 0,c={unversionedId:"Nginx/location",id:"Nginx/location",title:"[Nginx] URL\u5339\u914d\u4e4blocation",description:"URL\u5339\u914d\u4e4blocation",source:"@site/docs/Nginx/location.md",sourceDirName:"Nginx",slug:"/Nginx/location",permalink:"/docs/Nginx/location",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Nginx/location.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"[Nginx] URL\u5339\u914d\u4e4blocation",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"[Nginx] \u5b9e\u73b0gzip\u538b\u7f29\u4e0e\u65e5\u5fd7\u67e5\u770b",permalink:"/docs/Nginx/gzip"},next:{title:"[Nginx] URL\u91cd\u5199",permalink:"/docs/Nginx/return"}},m=[{value:"URL\u5339\u914d\u4e4blocation",id:"url\u5339\u914d\u4e4blocation",children:[{value:"1\u3001location\u5339\u914d\u89c4\u5219",id:"1location\u5339\u914d\u89c4\u5219",children:[],level:3},{value:"2\u3001location\u5339\u914d\u8df3\u8f6c",id:"2location\u5339\u914d\u8df3\u8f6c",children:[],level:3},{value:"3\u3001Nginx\u652f\u6301pathinfo\u8def\u5f84",id:"3nginx\u652f\u6301pathinfo\u8def\u5f84",children:[],level:3}],level:2}],u={toc:m};function g(e){var t=e.components,p=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"url\u5339\u914d\u4e4blocation"},"URL\u5339\u914d\u4e4blocation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Location \u914d\u7f6e\u8bed\u6cd5"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#location"},"http://nginx.org/en/docs/http/ngx_http_core_module.html#location"))),(0,r.kt)("h3",{id:"1location\u5339\u914d\u89c4\u5219"},"1\u3001location\u5339\u914d\u89c4\u5219"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"uria",src:n(28904).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2460   =  \u7cbe\u786e\u5339\u914d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location = / {\n    #\u89c4\u5219\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5219\u5339\u914d\u5230 ",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/"},"http://www.example.com/")," \u8fd9\u79cd\u8bf7\u6c42")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2461 ~  \u5927\u5c0f\u5199\u654f\u611f   \u533a\u5206\u5927\u5c0f\u5199")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ /Example/ {\n    #\u89c4\u5219\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6c42\u793a\u4f8b\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/Example/"},"http://www.example.com/Example/"),"  ","[\u6210\u529f]","\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/example/"},"http://www.example.com/example/"),"  ","[\u5931\u8d25]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2462  ~* \u5927\u5c0f\u5199\u5ffd\u7565")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~* /Example/ {\n    #\u89c4\u5219\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6c42\u793a\u4f8b\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/Example/"},"http://www.example.com/Example/"),"  ","[\u6210\u529f]","\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/example/"},"http://www.example.com/example/"),"  ","[\u6210\u529f]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2463  ^~ \u53ea\u5339\u914d\u4ee5 uri \u5f00\u5934")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location ^~ /img/ {\n    #\u89c4\u5219\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6c42\u5b9e\u4f8b\n\u4ee5 /img/ \u5f00\u5934\u7684\u8bf7\u6c42\uff0c\u90fd\u4f1a\u5339\u914d\u4e0a\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/img/a.jpg"},"http://www.example.com/img/a.jpg"),"   ","[\u6210\u529f]","\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/img/b.mp4"},"http://www.example.com/img/b.mp4")," ","[\u6210\u529f]","\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/bimg/b.mp4"},"http://www.example.com/bimg/b.mp4")," ","[\u5931\u8d25]","\n",(0,r.kt)("a",{parentName:"p",href:"http://www.example.com/Img/b.mp4"},"http://www.example.com/Img/b.mp4")," ","[\u5931\u8d25]")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2464 /     \u5176\u4ed6\u5339\u914d\u90fd\u4e0d\u6210\u529f  \u5c31\u5339\u914d\u6b64\u9879")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n   #\u89c4\u5219\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u8def\u5f84\u662f\u8d44\u6e90\u6587\u4ef6\u662f\u5b58\u5728\u7684\uff0c\u4f1a\u4f18\u5148\u83b7\u53d6\u8d44\u6e90\u6587\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"location\u5339\u914d\u4f18\u5148\u7ea7")),(0,r.kt)("p",{parentName:"blockquote"},"(location =) > (location \u5b8c\u6574\u8def\u5f84) > (location ^~ \u8def\u5f84) > (location ~,~* \u6b63\u5219\u987a\u5e8f) > (location \u90e8\u5206\u8d77\u59cb\u8def\u5f84) > (/)")),(0,r.kt)("h3",{id:"2location\u5339\u914d\u8df3\u8f6c"},"2\u3001location\u5339\u914d\u8df3\u8f6c"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"@+name"),"\n@\uff0cnginx\u5185\u90e8\u8df3\u8f6c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location /img/ {\n    #\u5982\u679c\u72b6\u6001\u7801\u662f404  \u5c31\u6307\u5b9a404\u7684\u9875\u9762\u4e3a\u4ec0\u4e48\n    error_page 404 = @img_err;\n}    \n\nlocation @img_err {    \n    # \u89c4\u5219\n    return  503\uff1b\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5 /img/ \u5f00\u5934\u7684\u8bf7\u6c42\uff0c\u5982\u679c\u94fe\u63a5\u7684\u72b6\u6001\u4e3a 404\u3002\u5219\u4f1a\u5339\u914d\u5230 @img_err \u8fd9\u6761\u89c4\u5219\u4e0a")),(0,r.kt)("h3",{id:"3nginx\u652f\u6301pathinfo\u8def\u5f84"},"3\u3001Nginx\u652f\u6301pathinfo\u8def\u5f84"),(0,r.kt)("p",null,"\u9700\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"http://www.shop.com/home/goods/index/cate_id/187.html  \u9ed8\u8ba4\u4e0d\u652f\u6301\u8bbf\u95ee\n\u91cd\u5199\u6210\u4e3a\nhttp://www.shop.com/index.php?s=home/goods/index/cate_id/187.html\n")),(0,r.kt)("p",null,"\u8bed\u6cd5\u89c4\u5219\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n   rewrite /index.html /index.php last;\n   #\u5224\u65ad\u8bf7\u6c42\u7684\u8def\u5f84 \u4e0d\u5b58\u5728\n   if (!-e $request_filename) {\n      # \u6355\u83b7\u5230\u6240\u6709\u8def\u5f84\u4fe1\u606f   \u91cd\u5199\u4e3aindex.php\u7684s\u53c2\u6570   last\u9700\u8981\u5339\u914d\u4e4b\u540e\u7684location\u89c4\u5219\n      rewrite ^(.*)$   /index.php?s=$1 last;\n   }\n}\n")))}g.isMDXComponent=!0},28904:function(e,t,n){t.Z=n.p+"assets/images/uri-7fb39b2539a8f122aaad7967714050e9.jpg"}}]);