"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),s=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},o=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),o=s(a),k=n,m=o["".concat(c,".").concat(k)]||o[k]||u[k]||i;return a?l.createElement(m,r(r({ref:t},d),{},{components:a})):l.createElement(m,r({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=o;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"},86886:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var l=a(87462),n=(a(67294),a(3905));const i={slug:"basic2",title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e2d)",sidebar_position:2},r=void 0,p={unversionedId:"Java/basic2",id:"Java/basic2",title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e2d)",description:"\u6570\u7ec4\u7684\u5185\u5b58\u56fe",source:"@site/docs/Java/basic2.md",sourceDirName:"Java",slug:"/Java/basic2",permalink:"/docs/Java/basic2",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Java/basic2.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"basic2",title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e2d)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e0a)",permalink:"/docs/Java/basic"},next:{title:"[Java] \u591a\u7ebf\u7a0b",permalink:"/docs/Java/thread"}},c=[{value:"\u6570\u7ec4\u7684\u5185\u5b58\u56fe",id:"\u6570\u7ec4\u7684\u5185\u5b58\u56fe",children:[],level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"\u65b9\u6cd5\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u65b9\u6cd5\u7684\u6ce8\u610f\u4e8b\u9879",children:[],level:3},{value:"\u65b9\u6cd5\u7684\u91cd\u8f7d",id:"\u65b9\u6cd5\u7684\u91cd\u8f7d",children:[],level:3},{value:"\u65b9\u6cd5\u7684\u5185\u5b58",id:"\u65b9\u6cd5\u7684\u5185\u5b58",children:[],level:3}],level:2},{value:"--------------------",id:"--------------------",children:[],level:2},{value:"\u9762\u5411\u5bf9\u8c61",id:"\u9762\u5411\u5bf9\u8c61",children:[{value:"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u601d\u60f3\u5bf9\u6bd4",id:"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u601d\u60f3\u5bf9\u6bd4",children:[],level:3},{value:"\u8bbe\u8ba1\u5bf9\u8c61\u5e76\u4f7f\u7528",id:"\u8bbe\u8ba1\u5bf9\u8c61\u5e76\u4f7f\u7528",children:[],level:3},{value:"\u7c7b\u548c\u5bf9\u8c61",id:"\u7c7b\u548c\u5bf9\u8c61",children:[{value:"\u5b9a\u4e49\u7c7b\u7684\u8865\u5145\u4e8b\u9879",id:"\u5b9a\u4e49\u7c7b\u7684\u8865\u5145\u4e8b\u9879",children:[],level:4},{value:"\u5bf9\u8c61\u7684\u6210\u5458\u53d8\u91cf\u7684\u9ed8\u8ba4\u503c\u89c4\u5219",id:"\u5bf9\u8c61\u7684\u6210\u5458\u53d8\u91cf\u7684\u9ed8\u8ba4\u503c\u89c4\u5219",children:[],level:4}],level:3}],level:2},{value:"\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u5f81",id:"\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u5f81",children:[{value:"\u5c01\u88c5",id:"\u5c01\u88c5",children:[],level:3},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",children:[],level:3},{value:"\u591a\u6001",id:"\u591a\u6001",children:[],level:3}],level:2},{value:"--------------------------------",id:"--------------------------------",children:[],level:2},{value:"\u5c01\u88c5\u8be6\u89e3",id:"\u5c01\u88c5\u8be6\u89e3",children:[{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:4},{value:"private",id:"private",children:[],level:3}],level:2}],s={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u6570\u7ec4\u7684\u5185\u5b58\u56fe"},"\u6570\u7ec4\u7684\u5185\u5b58\u56fe"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"neicun",src:a(81656).Z})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"duizhan",src:a(36004).Z})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"putong",src:a(87690).Z})),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"\u8fd9\u4e2a\u7a0b\u5e8f\u6ca1\u6709\u7528\u5230new\u5173\u952e\u5b57, \u6240\u4ee5\u73b0\u5728\u53ea\u770b\u6808"),(0,n.kt)("p",{parentName:"div"},"\u7a0b\u5e8f\u5728\u521a\u5f00\u59cb\u8fd0\u884c\u7684\u65f6\u5019, \u7a0b\u5e8f\u4e3b\u5165\u53e3main\u65b9\u6cd5\u8fdb\u5165\u6808\u91cc\u9762, \u7136\u540e\u4ece\u7b2c\u4e00\u884c\u5f00\u59cb\u9010\u884c\u6267\u884c, \u6bd4\u5982\u7b2c\u4e00\u884c\u5b9a\u4e49a\u7b49\u4e8e10, "))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"shuzuneicun",src:a(58913).Z})),(0,n.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,n.kt)("p",null,"\u65b9\u6cd5\u662f\u7a0b\u5e8f\u4e2d\u6700\u5c0f\u7684\u6267\u884c\u5355\u5143"),(0,n.kt)("h3",{id:"\u65b9\u6cd5\u7684\u6ce8\u610f\u4e8b\u9879"},"\u65b9\u6cd5\u7684\u6ce8\u610f\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e0d\u8c03\u7528\u5c31\u4e0d\u6267\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u4e0e\u65b9\u6cd5\u4e4b\u95f4\u662f\u5e73\u7ea7\u5173\u7cfb, \u4e0d\u80fd\u4e92\u76f8\u5d4c\u5957\u5b9a\u4e49"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u7684\u7f16\u5199\u987a\u5e8f\u548c\u6267\u884c\u987a\u5e8f\u65e0\u5173"),(0,n.kt)("li",{parentName:"ul"},"\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e3avoid, \u8868\u793a\u8be5\u65b9\u6cd5\u6ca1\u6709\u8fd4\u56de\u503c, \u6ca1\u6709\u8fd4\u56de\u503c\u7684\u65b9\u6cd5\u53ef\u4ee5\u7701\u7565return\u8bed\u53e5\u4e0d\u5199. \u5982\u679c\u8981\u7f16\u5199return, \u540e\u9762\u4e0d\u80fd\u8ddf\u5177\u4f53\u7684\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"return\u8bed\u53e5\u4e0b\u9762, \u4e0d\u80fd\u7f16\u5199\u4ee3\u7801, \u56e0\u4e3a\u6c38\u8fdc\u6267\u884c\u4e0d\u5230, \u5c5e\u4e8e\u65e0\u6548\u7684\u4ee3\u7801")),(0,n.kt)("h3",{id:"\u65b9\u6cd5\u7684\u91cd\u8f7d"},"\u65b9\u6cd5\u7684\u91cd\u8f7d"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"chongzai",src:a(1952).Z})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u540c\u4e00\u4e2a\u7c7b\u4e2d, \u5b9a\u4e49\u4e86\u591a\u4e2a\u540c\u540d\u7684\u65b9\u6cd5, \u8fd9\u4e9b\u540c\u540d\u7684\u65b9\u6cd5\u5177\u6709\u540c\u79cd\u7684\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u65b9\u6cd5\u5177\u6709\u4e0d\u540c\u7684\u53c2\u6570\u7c7b\u578b\u6216\u53c2\u6570\u4e2a\u6570, \u8fd9\u4e9b\u540c\u540d\u7684\u65b9\u6cd5, \u5c31\u6784\u6210\u4e86\u91cd\u8f7d\u5173\u7cfb")),(0,n.kt)("p",null,"\u7b80\u5355\u8bb0:"),(0,n.kt)("p",null,"\u5728\u540c\u4e00\u4e2a\u7c7b\u4e2d, \u65b9\u6cd5\u540d\u76f8\u540c, \u53c2\u6570\u4e0d\u540c\u7684\u65b9\u6cd5. \u4e0e\u8fd4\u56de\u503c\u65e0\u5173.\n\u53c2\u6570\u4e0d\u540c: \u4e2a\u6570\u4e0d\u540c, \u7c7b\u578b\u4e0d\u540c, \u987a\u5e8f\u4e0d\u540c"),(0,n.kt)("h3",{id:"\u65b9\u6cd5\u7684\u5185\u5b58"},"\u65b9\u6cd5\u7684\u5185\u5b58"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"fangfa",src:a(35065).Z})),(0,n.kt)("h2",{id:"--------------------"},"--------------------"),(0,n.kt)("h2",{id:"\u9762\u5411\u5bf9\u8c61"},"\u9762\u5411\u5bf9\u8c61"),(0,n.kt)("h3",{id:"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u601d\u60f3\u5bf9\u6bd4"},"\u9762\u5411\u5bf9\u8c61\u548c\u9762\u5411\u8fc7\u7a0b\u7684\u601d\u60f3\u5bf9\u6bd4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9762\u5411: \u62ff, \u627e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5bf9\u8c61: \u80fd\u5e72\u6d3b\u7684\u4e1c\u897f")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b: \u62ff\u4e1c\u897f\u8fc7\u6765\u505a\u5bf9\u5e94\u7684\u4e8b\u60c5"))),(0,n.kt)("p",null,"\u9762\u5411\u8fc7\u7a0b\u601d\u60f3(Procedure Oriented Programming) \u662f\u4e00\u79cd\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u8fc7\u7a0b"),"\u4e3a\u4e2d\u5fc3\u7684\u7f16\u7a0b\u601d\u60f3, \u5b9e\u73b0\u529f\u80fd\u7684\u6bcf\u4e00\u6b65, \u90fd\u662f\u81ea\u5df1\u5b9e\u73b0\u7684"),(0,n.kt)("p",null,"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b(Object Oriented Programming) \u662f\u4e00\u79cd\u4ee5",(0,n.kt)("strong",{parentName:"p"},"\u5bf9\u8c61"),"\u4e3a\u4e2d\u5fc3\u7684\u7f16\u7a0b\u601d\u60f3, \u901a\u8fc7\u6307\u6325\u5bf9\u8c61\u5b9e\u73b0\u5177\u4f53\u7684\u529f\u80fd"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5ba2\u89c2\u5b58\u5728\u7684\u4efb\u4f55\u4e00\u79cd\u4e8b\u7269, \u90fd\u53ef\u4ee5\u770b\u505a\u4e3a\u7a0b\u5e8f\u4e2d\u7684\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u9762\u5411\u5bf9\u8c61\u601d\u60f3\u53ef\u4ee5\u5c06\u590d\u6742\u7684\u95ee\u9898\u7b80\u5355\u5316"),(0,n.kt)("li",{parentName:"ol"},"\u5c06\u6211\u4eec\u4ece\u6267\u884c\u8005\u7684\u4f4d\u7f6e, \u53d8\u6210\u4e86\u6307\u6325\u8005")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"lizi",src:a(9208).Z})),(0,n.kt)("h3",{id:"\u8bbe\u8ba1\u5bf9\u8c61\u5e76\u4f7f\u7528"},"\u8bbe\u8ba1\u5bf9\u8c61\u5e76\u4f7f\u7528"),(0,n.kt)("h3",{id:"\u7c7b\u548c\u5bf9\u8c61"},"\u7c7b\u548c\u5bf9\u8c61"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b(\u8bbe\u8ba1\u56fe): \u662f\u5bf9\u8c61\u5171\u540c\u7279\u5f81\u7684\u63cf\u8ff0;"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u8c61: \u662f\u771f\u5b9e\u5b58\u5728\u7684\u5177\u4f53\u4e1c\u897f")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"\u5728java\u4e2d, \u5fc5\u987b\u5148\u8bbe\u8ba1\u7c7b, \u624d\u80fd\u83b7\u5f97\u5bf9\u8c61"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"dingyi",src:a(57858).Z})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"duijie",src:a(27771).Z})),(0,n.kt)("h4",{id:"\u5b9a\u4e49\u7c7b\u7684\u8865\u5145\u4e8b\u9879"},"\u5b9a\u4e49\u7c7b\u7684\u8865\u5145\u4e8b\u9879"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7528\u6765\u63cf\u8ff0\u4e00\u7c7b\u4e8b\u7269\u7684\u7c7b, \u53eb\u505ajavabean\u7c7b. \u5728javabean\u7c7b, \u662f\u4e0d\u5199main\u65b9\u6cd5\u7684"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u4ee5\u524d, \u7f16\u5199main\u65b9\u6cd5\u7684\u7c7b, \u53eb\u505a\u6d4b\u8bd5\u7c7b. \u6211\u4eec\u53ef\u4ee5\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u521b\u5efajavabean\u7c7b\u7684\u5bf9\u8c61\u5e76\u8fdb\u884c\u8d4b\u503c\u8c03\u7528")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"javabean",src:a(37061).Z})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2ajava\u6587\u4ef6\u4e2d\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2aclass\u7c7b, \u4e14\u53ea\u80fd\u4e00\u4e2a\u7c7b\u662fpublic\u4fee\u9970, \u800c\u4e14public\u4fee\u9970\u7684\u7c7b\u540d\u5fc5\u987b\u6210\u4e3a\u4ee3\u7801\u6587\u4ef6\u540d. ",(0,n.kt)("inlineCode",{parentName:"li"},"\u5b9e\u9645\u5f00\u53d1\u4e2d\u5efa\u8bae\u8fd8\u662f\u4e00\u4e2a\u6587\u4ef6\u5b9a\u4e49\u4e00\u4e2aclass\u7c7b")),(0,n.kt)("li",{parentName:"ul"},"\u6210\u5458\u53d8\u91cf\u7684\u5b8c\u6574\u5b9a\u4e49\u683c\u5f0f\u662f: ",(0,n.kt)("inlineCode",{parentName:"li"},"\u4fee\u9970\u7b26 \u6570\u636e\u7c7b\u578b \u53d8\u91cf\u540d = \u521d\u59cb\u5316\u503c;"),", \u4e00\u822c\u65e0\u9700\u6307\u5b9a\u521d\u59cb\u5316\u503c, \u5b58\u5728\u9ed8\u8ba4\u503c")),(0,n.kt)("h4",{id:"\u5bf9\u8c61\u7684\u6210\u5458\u53d8\u91cf\u7684\u9ed8\u8ba4\u503c\u89c4\u5219"},"\u5bf9\u8c61\u7684\u6210\u5458\u53d8\u91cf\u7684\u9ed8\u8ba4\u503c\u89c4\u5219"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"morenzhi",src:a(5716).Z})),(0,n.kt)("h2",{id:"\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u5f81"},"\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u5f81"),(0,n.kt)("h3",{id:"\u5c01\u88c5"},"\u5c01\u88c5"),(0,n.kt)("h3",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,n.kt)("h3",{id:"\u591a\u6001"},"\u591a\u6001"),(0,n.kt)("h2",{id:"--------------------------------"},"--------------------------------"),(0,n.kt)("h2",{id:"\u5c01\u88c5\u8be6\u89e3"},"\u5c01\u88c5\u8be6\u89e3"),(0,n.kt)("p",null,"\u5982\u679c\u5728\u9700\u6c42\u5f53\u4e2d\u5982\u679c\u5b58\u5728\u591a\u4e2a\u4e8b\u7269, \u6709\u7684\u884c\u4e3a\u4e0d\u77e5\u9053\u8be5\u5f52\u5c5e\u54ea\u4e00\u7c7b, \u600e\u4e48\u529e\u5462?"),(0,n.kt)("p",null,"\u5c01\u88c5: \u544a\u8bc9\u6211\u4eec, ",(0,n.kt)("inlineCode",{parentName:"p"},"\u5982\u4f55\u6b63\u786e\u8bbe\u8ba1\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5")),(0,n.kt)("p",null,"\u4e3e\u4f8b:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"juli",src:a(59666).Z})),(0,n.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u8bbe\u8ba1\u975e\u5e38\u7b80\u5355, \u53ef\u662f\u5de5\u4f5c\u4e2d\u7684\u9700\u6c42\u8fdc\u6bd4\u8fd9\u590d\u6742\u7684\u591a. \u7ecf\u5e38\u4f1a\u6d89\u53ca\u591a\u4e2a\u5bf9\u8c61, \u6bd4\u5982\u4e0b\u9762\u7684\u4eba\u753b\u5706"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"circle",src:a(7485).Z})),(0,n.kt)("p",null,"\u5f88\u591a\u4eba\u4f1a\u8ba4\u4e3a\u4eba\u753b\u5706\u5f53\u7136draw\u65b9\u6cd5\u662f\u4eba\u8eab\u4e0a\u7684, \u4f46\u662f\u66f4\u5e94\u8be5\u5c5e\u4e8e\u5706\u7684\u65b9\u6cd5."),(0,n.kt)("p",null,"\u56e0\u4e3a\u5c01\u88c5\u4e2d\u4e00\u4e2a\u91cd\u8981\u601d\u60f3: ",(0,n.kt)("inlineCode",{parentName:"p"},"\u5bf9\u8c61\u4ee3\u8868\u4ec0\u4e48, \u5c31\u5f97\u5c01\u88c5\u5bf9\u5e94\u7684\u6570\u636e, \u5e76\u63d0\u4f9b\u6570\u636e\u5bf9\u5e94\u7684\u884c\u4e3a")),(0,n.kt)("p",null,"\u5982\u4f55\u7406\u89e3\u8fd9\u53e5\u8bdd:"),(0,n.kt)("p",null,"\u65e2\u7136\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7c7b\u6765\u4ee3\u8868\u5706\u7684\u8bdd, \u80af\u5b9a\u6d89\u53ca\u4e00\u4e9b\u5706\u7684\u5c5e\u6027\u6765\u5c01\u88c5\u4e00\u4e9b\u4fe1\u606f, \u6bd4\u5982\u5706\u7684\u534a\u5f84, \u76f4\u5f84\u7b49\u7b49. "),(0,n.kt)("p",null,"\u90a3\u4e48\u753b\u5706\u8981\u6839\u636e\u4ec0\u4e48\u753b? \u80af\u5b9a\u9700\u8981\u534a\u5f84\u6765\u753b, \u90a3\u4e0a\u9762\u5c01\u88c5\u4e86\u534a\u5f84\u7684\u4fe1\u606f, \u5c31\u8981\u63d0\u4f9b\u548c\u534a\u5f84\u76f8\u5173\u7684\u753b\u5706\u7684\u65b9\u6cd5, \u6240\u4ee5\u753b\u5706\u7684\u65b9\u6cd5\u662f\u5c5e\u4e8e\u5706\u7684."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"banjing",src:a(95815).Z})),(0,n.kt)("p",null,"\u800c\u4eba\u53ea\u662f\u8c03\u7528\u5706\u91cc\u7684\u65b9\u6cd5\u753b\u7684\u5706."),(0,n.kt)("p",null,"\u518d\u4e3e\u4e00\u4e2a\u4f8b\u5b50: \u4eba\u5173\u95e8"),(0,n.kt)("p",null,"\u5173\u95e8\u65b9\u6cd5\u662f\u95e8\u7684\u65b9\u6cd5, \u800c\u4e0d\u662f\u4eba\u7684\u65b9\u6cd5(\u8054\u60f3\u5f39\u7a97\u5f00\u542f\u5173\u95ed\u4e8b\u4ef6)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kaimen",src:a(28776).Z})),(0,n.kt)("h4",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u5c01\u88c5?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u544a\u8bc9\u6211\u4eec, \u5982\u4f55\u6b63\u786e\u8bbe\u8ba1\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u539f\u5219: \u5bf9\u8c61\u4ee3\u8868\u4ec0\u4e48, \u5c31\u5f97\u5c01\u88c5\u5bf9\u5e94\u7684\u6570\u636e, \u5e76\u63d0\u4f9b\u6570\u636e\u5bf9\u5e94\u7684\u884c\u4e3a"))),(0,n.kt)("h3",{id:"private"},"private"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"private",src:a(12312).Z})),(0,n.kt)("p",null,"\u5982\u679c\u6b64\u65f6age\u8d4b\u503c\u8d1f18, \u4ee3\u7801\u4e0d\u62a5\u9519\u4f46\u662f\u4e0d\u7b26\u5408\u6b63\u5e38\u903b\u8f91, \u5982\u4f55\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898?"),(0,n.kt)("p",null,"\u4f7f\u7528private\u4fee\u9970\u7b26"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u662f\u4e00\u4e2a\u6743\u9650\u4fee\u9970\u7b26, \u53ef\u4ee5\u4fee\u9970\u6210\u5458(\u6210\u5458\u53d8\u91cf\u548c\u6210\u5458\u65b9\u6cd5)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u88ab",(0,n.kt)("inlineCode",{parentName:"p"},"private"),"\u4fee\u9970\u7684\u6210\u5458\u53ea\u80fd\u5728\u672c\u7c7b\u4e2d\u624d\u80fd\u8bbf\u95ee"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pri",src:a(39709).Z})),(0,n.kt)("p",null,"\u6b64\u65f6\u89e3\u51b3\u4e86\u6570\u636e\u5b89\u5168\u95ee\u9898, \u4f46\u662f\u53c8\u4e00\u4e2a\u65b0\u95ee\u9898\u51fa\u73b0, \u6211\u73b0\u5728\u5373\u4f7f\u8d4b\u503c\u6b63\u786e\u7684\u503c\u4e5f\u4f1a\u62a5\u9519. "),(0,n.kt)("p",null,"\u90a3\u4e48\u5982\u4f55\u89e3\u51b3? \u5982\u679c\u7528if\u5224\u65ad\u53ef\u4e0d\u53ef\u4ee5, \u50cf\u4e0b\u56fe"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"if",src:a(97188).Z})),(0,n.kt)("p",null,"\u4f46\u662f\u5982\u679c\u6709\u5f88\u591a\u53d8\u91cf, \u6bcf\u4e00\u6b21\u8d4b\u503c\u90fd\u8981\u5224\u65ad\u8fd9\u6837\u592a\u7e41\u7410. \u8fd8\u6709\u4e00\u4e2a\u539f\u56e0, GirlFriend\u91cc\u9762\u5c01\u88c5\u4e86\u5973\u670b\u53cb\u7684\u5c5e\u6027, \u90a3\u4e48\u6821\u9a8c\u5c5e\u6027\u7684\u65b9\u6cd5\u6309\u7167\u5c01\u88c5\u7684\u601d\u60f3\u4e5f\u5e94\u8be5\u653e\u5728GirlFriend\u7c7b\u91cc\u9762, \u6240\u4ee5\u4f7f\u7528if\u65b9\u6848\u662f\u4e0d\u53ef\u884c\u7684."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"pub",src:a(47240).Z})),(0,n.kt)("p",null,"\u6240\u6709\u5c5e\u6027\u8fd8\u662f\u52a0\u4e0aprivate\u79c1\u6709\u5173\u952e\u5b57, \u4e0d\u8ba9\u5916\u754c\u76f4\u63a5\u8bbf\u95ee, \u4e0e\u6b64\u540c\u65f6, \u6bcf\u4e2a\u5c5e\u6027\u63d0\u4f9b\u4e00\u4e2a\u7531public\u4fee\u9970\u7684get\u548cset\u65b9\u6cd5"),(0,n.kt)("p",null,"\u8fd9\u4e2apublic\u4fee\u9970\u8868\u793a\u5916\u754c\u53ef\u4ee5\u4f7f\u7528\u548c\u8bbf\u95ee"))}d.isMDXComponent=!0},95815:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/banjing-bfe70d28159c870045707e669550f99f.jpg"},1952:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/chongzai-1b20b6c67185e917b9fcbdc188a91c3c.jpg"},7485:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/circle-05af55d426f9df99b23055863f7e4722.jpg"},57858:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/dingyi-70a128d490f718cd48ec5ae85ac11f49.jpg"},27771:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/duijie-1889bae1eab46f9d02310ccb5c502510.jpg"},36004:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/duizhan-2bc1884c119ed6c19a365d88de3e4d6a.jpg"},35065:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/fangfa-a81a8d1464a5e478ad985101e1cfdc66.jpg"},97188:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/if-88cb60aebcc66f1000dfa1e5ed7269e7.jpg"},37061:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/javabean-d9208f809e0082a13138b16ff94f827f.jpg"},59666:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/juli-6a4181dcaf983f36df1a4ff2f736a161.jpg"},28776:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/kaimen-b212ba02bde78a528104da5f20cea437.jpg"},9208:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/lizi-d81a649a9df8d2c54be974f4de620e8a.jpg"},5716:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/morenzhi-efb5db6fa3537d85b7fdcc2b07e4251a.jpg"},81656:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/neicun-915b17f47b2dfd88c5e78f53d855cc91.jpg"},39709:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/pri-6543660b768f681ddfa06d6f35aa36d9.jpg"},12312:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/private-efa69975c715ced0890cbb4c6524a4c0.jpg"},47240:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/pub-d63458ee005ccd6243588a001f273152.jpg"},87690:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/putong-be6c46a68dd7a1246c68da0a0b82b847.jpg"},58913:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/shuzuneicun-b840dbfbeb18f8db22e9d81fe9fca73d.jpg"}}]);