"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9504],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),g=i,k=m["".concat(o,".").concat(g)]||m[g]||d[g]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60852:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],p={title:"[TS] \u6cdb\u578b",sidebar_position:6},o=void 0,u={unversionedId:"TypeScript/generic",id:"TypeScript/generic",title:"[TS] \u6cdb\u578b",description:"\u8f6f\u4ef6\u5de5\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e0d\u4ec5\u8981\u521b\u5efa\u5b9a\u4e49\u826f\u597d\u4e14\u4e00\u81f4\u7684 API\uff0c\u540c\u65f6\u4e5f\u8981\u8003\u8651\u53ef\u91cd\u7528\u6027\u3002 \u7ec4\u4ef6\u4e0d\u4ec5\u80fd\u591f\u652f\u6301\u5f53\u524d\u7684\u6570\u636e\u7c7b\u578b\uff0c\u540c\u65f6\u4e5f\u80fd\u652f\u6301\u672a\u6765\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u5728\u521b\u5efa\u5927\u578b\u7cfb\u7edf\u65f6\u4e3a\u4f60\u63d0\u4f9b\u4e86\u5341\u5206\u7075\u6d3b\u7684\u529f\u80fd\u3002",source:"@site/docs/TypeScript/generic.md",sourceDirName:"TypeScript",slug:"/TypeScript/generic",permalink:"/docs/TypeScript/generic",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/generic.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"[TS] \u6cdb\u578b",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"[TS] \u51fd\u6570",permalink:"/docs/TypeScript/function"},next:{title:"[TS] \u7c7b\u578b\u63a8\u65ad",permalink:"/docs/TypeScript/inference"}},c=[{value:"\u57fa\u7840\u793a\u4f8b",id:"\u57fa\u7840\u793a\u4f8b",children:[],level:2},{value:"\u4f7f\u7528\u6cdb\u578b\u53d8\u91cf",id:"\u4f7f\u7528\u6cdb\u578b\u53d8\u91cf",children:[],level:2},{value:"\u6cdb\u578b\u7c7b\u578b",id:"\u6cdb\u578b\u7c7b\u578b",children:[],level:2},{value:"\u6cdb\u578b\u7c7b",id:"\u6cdb\u578b\u7c7b",children:[],level:2},{value:"\u6cdb\u578b\u7ea6\u675f",id:"\u6cdb\u578b\u7ea6\u675f",children:[{value:"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570",id:"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570",children:[],level:3}],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8f6f\u4ef6\u5de5\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e0d\u4ec5\u8981\u521b\u5efa\u5b9a\u4e49\u826f\u597d\u4e14\u4e00\u81f4\u7684 API\uff0c\u540c\u65f6\u4e5f\u8981\u8003\u8651\u53ef\u91cd\u7528\u6027\u3002 \u7ec4\u4ef6\u4e0d\u4ec5\u80fd\u591f\u652f\u6301\u5f53\u524d\u7684\u6570\u636e\u7c7b\u578b\uff0c\u540c\u65f6\u4e5f\u80fd\u652f\u6301\u672a\u6765\u7684\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u5728\u521b\u5efa\u5927\u578b\u7cfb\u7edf\u65f6\u4e3a\u4f60\u63d0\u4f9b\u4e86\u5341\u5206\u7075\u6d3b\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u5728\u50cf C# \u548c Java \u8fd9\u6837\u7684\u8bed\u8a00\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u521b\u5efa\u53ef\u91cd\u7528\u7684\u7ec4\u4ef6\uff0c\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u3002 \u8fd9\u6837\u7528\u6237\u5c31\u53ef\u4ee5\u4ee5\u81ea\u5df1\u7684\u6570\u636e\u7c7b\u578b\u6765\u4f7f\u7528\u7ec4\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u57fa\u7840\u793a\u4f8b"},"\u57fa\u7840\u793a\u4f8b"),(0,a.kt)("p",null,"\u4e0b\u9762\u6765\u521b\u5efa\u7b2c\u4e00\u4e2a\u4f7f\u7528\u6cdb\u578b\u7684\u4f8b\u5b50\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," \u51fd\u6570\u3002 \u8fd9\u4e2a\u51fd\u6570\u4f1a\u8fd4\u56de\u4efb\u4f55\u4f20\u5165\u5b83\u7684\u503c\u3002 \u4f60\u53ef\u4ee5\u628a\u8fd9\u4e2a\u51fd\u6570\u5f53\u6210\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"echo")," \u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u4e0d\u7528\u6cdb\u578b\u7684\u8bdd\uff0c\u8fd9\u4e2a\u51fd\u6570\u53ef\u80fd\u662f\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity(arg: number): number {\n  return arg\n}\n")),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u6765\u5b9a\u4e49\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity(arg: any): any {\n  return arg\n}\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u7c7b\u578b\u4f1a\u5bfc\u81f4\u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u63a5\u6536\u4efb\u4f55\u7c7b\u578b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," \u53c2\u6570\uff0c\u4f46\u662f\u8fd9\u6837\u5c31\u4e22\u5931\u4e86\u4e00\u4e9b\u4fe1\u606f\uff1a\u4f20\u5165\u7684\u7c7b\u578b\u4e0e\u8fd4\u56de\u7684\u7c7b\u578b\u5e94\u8be5\u662f\u76f8\u540c\u7684\u3002\u5982\u679c\u6211\u4eec\u4f20\u5165\u4e00\u4e2a\u6570\u5b57\uff0c\u6211\u4eec\u53ea\u77e5\u9053\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u90fd\u6709\u53ef\u80fd\u88ab\u8fd4\u56de\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u4f7f\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e0e\u4f20\u5165\u53c2\u6570\u7684\u7c7b\u578b\u662f\u76f8\u540c\u7684\u3002\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528\u4e86",(0,a.kt)("em",{parentName:"p"},"\u7c7b\u578b\u53d8\u91cf"),"\uff0c\u5b83\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u53d8\u91cf\uff0c\u53ea\u7528\u4e8e\u8868\u793a\u7c7b\u578b\u800c\u4e0d\u662f\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity<T>(arg: T): T {\n  return arg\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," \u6dfb\u52a0\u4e86\u7c7b\u578b\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u5e2e\u52a9\u6211\u4eec\u6355\u83b7\u7528\u6237\u4f20\u5165\u7684\u7c7b\u578b\uff08\u6bd4\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff09\uff0c\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u7c7b\u578b\u3002 \u4e4b\u540e\u6211\u4eec\u518d\u6b21\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u5f53\u505a\u8fd4\u56de\u503c\u7c7b\u578b\u3002\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\u53c2\u6570\u7c7b\u578b\u4e0e\u8fd4\u56de\u503c\u7c7b\u578b\u662f\u76f8\u540c\u7684\u4e86\u3002\u8fd9\u5141\u8bb8\u6211\u4eec\u8ddf\u8e2a\u51fd\u6570\u91cc\u4f7f\u7528\u7684\u7c7b\u578b\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u628a\u8fd9\u4e2a\u7248\u672c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," \u51fd\u6570\u53eb\u505a\u6cdb\u578b\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u9002\u7528\u4e8e\u591a\u4e2a\u7c7b\u578b\u3002 \u4e0d\u540c\u4e8e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0c\u5b83\u4e0d\u4f1a\u4e22\u5931\u4fe1\u606f\uff0c\u50cf\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u90a3\u50cf\u4fdd\u6301\u51c6\u786e\u6027\uff0c\u4f20\u5165\u6570\u503c\u7c7b\u578b\u5e76\u8fd4\u56de\u6570\u503c\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5b9a\u4e49\u4e86\u6cdb\u578b\u51fd\u6570\u540e\uff0c\u53ef\u4ee5\u7528\u4e24\u79cd\u65b9\u6cd5\u4f7f\u7528\u3002 \u7b2c\u4e00\u79cd\u662f\uff0c\u4f20\u5165\u6240\u6709\u7684\u53c2\u6570\uff0c\u5305\u542b\u7c7b\u578b\u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let output = identity<string>('myString')\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u660e\u786e\u7684\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," \u7c7b\u578b\uff0c\u5e76\u505a\u4e3a\u4e00\u4e2a\u53c2\u6570\u4f20\u7ed9\u51fd\u6570\uff0c\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," \u62ec\u8d77\u6765\u800c\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"()"),"\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u66f4\u666e\u904d\u3002\u5229\u7528\u4e86",(0,a.kt)("em",{parentName:"p"},"\u7c7b\u578b\u63a8\u8bba")," -- \u5373\u7f16\u8bd1\u5668\u4f1a\u6839\u636e\u4f20\u5165\u7684\u53c2\u6570\u81ea\u52a8\u5730\u5e2e\u52a9\u6211\u4eec\u786e\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let output = identity('myString')\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u6211\u4eec\u6ca1\u5fc5\u8981\u4f7f\u7528\u5c16\u62ec\u53f7\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"<>"),"\uff09\u6765\u660e\u786e\u5730\u4f20\u5165\u7c7b\u578b\uff1b\u7f16\u8bd1\u5668\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"myString")," \u7684\u503c\uff0c\u7136\u540e\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u8bbe\u7f6e\u4e3a\u5b83\u7684\u7c7b\u578b\u3002 \u7c7b\u578b\u63a8\u8bba\u5e2e\u52a9\u6211\u4eec\u4fdd\u6301\u4ee3\u7801\u7cbe\u7b80\u548c\u9ad8\u53ef\u8bfb\u6027\u3002\u5982\u679c\u7f16\u8bd1\u5668\u4e0d\u80fd\u591f\u81ea\u52a8\u5730\u63a8\u65ad\u51fa\u7c7b\u578b\u7684\u8bdd\uff0c\u53ea\u80fd\u50cf\u4e0a\u9762\u90a3\u6837\u660e\u786e\u7684\u4f20\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u7c7b\u578b\uff0c\u5728\u4e00\u4e9b\u590d\u6742\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u53ef\u80fd\u51fa\u73b0\u7684\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u6cdb\u578b\u53d8\u91cf"},"\u4f7f\u7528\u6cdb\u578b\u53d8\u91cf"),(0,a.kt)("p",null,"\u4f7f\u7528\u6cdb\u578b\u521b\u5efa\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," \u8fd9\u6837\u7684\u6cdb\u578b\u51fd\u6570\u65f6\uff0c\u7f16\u8bd1\u5668\u8981\u6c42\u4f60\u5728\u51fd\u6570\u4f53\u5fc5\u987b\u6b63\u786e\u7684\u4f7f\u7528\u8fd9\u4e2a\u901a\u7528\u7684\u7c7b\u578b\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u4f60\u5fc5\u987b\u628a\u8fd9\u4e9b\u53c2\u6570\u5f53\u505a\u662f\u4efb\u610f\u6216\u6240\u6709\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u770b\u4e0b\u4e4b\u524d ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," \u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity<T>(arg: T): T {\n  return arg\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u60f3\u6253\u5370\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," \u7684\u957f\u5ea6\u3002 \u6211\u4eec\u5f88\u53ef\u80fd\u4f1a\u8fd9\u6837\u505a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function loggingIdentity<T>(arg: T): T {\n  console.log(arg.length)\n  return arg\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u4e48\u505a\uff0c\u7f16\u8bd1\u5668\u4f1a\u62a5\u9519\u8bf4\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".length")," \u5c5e\u6027\uff0c\u4f46\u662f\u6ca1\u6709\u5730\u65b9\u6307\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," \u5177\u6709\u8fd9\u4e2a\u5c5e\u6027\u3002\u8bb0\u4f4f\uff0c\u8fd9\u4e9b\u7c7b\u578b\u53d8\u91cf\u4ee3\u8868\u7684\u662f\u4efb\u610f\u7c7b\u578b\uff0c\u6240\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u51fd\u6570\u7684\u4eba\u53ef\u80fd\u4f20\u5165\u7684\u662f\u4e2a\u6570\u5b57\uff0c\u800c\u6570\u5b57\u662f\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},".length")," \u5c5e\u6027\u7684\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u5047\u8bbe\u6211\u4eec\u60f3\u64cd\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u7684\u6570\u7ec4\u800c\u4e0d\u76f4\u63a5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\u3002\u7531\u4e8e\u6211\u4eec\u64cd\u4f5c\u7684\u662f\u6570\u7ec4\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},".length")," \u5c5e\u6027\u662f\u5e94\u8be5\u5b58\u5728\u7684\u3002\u6211\u4eec\u53ef\u4ee5\u50cf\u521b\u5efa\u5176\u5b83\u6570\u7ec4\u4e00\u6837\u521b\u5efa\u8fd9\u4e2a\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function loggingIdentity<T>(arg: T[]): T[] {\n  console.log(arg.length)\n  return arg\n}\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u8fd9\u6837\u7406\u89e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"loggingIdentity")," \u7684\u7c7b\u578b\uff1a\u6cdb\u578b\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"loggingIdentity"),"\uff0c\u63a5\u6536\u7c7b\u578b\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u548c\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"arg"),"\uff0c\u5b83\u662f\u4e2a\u5143\u7d20\u7c7b\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u6570\u7ec4\uff0c\u5e76\u8fd4\u56de\u5143\u7d20\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u6570\u7ec4\u3002 \u5982\u679c\u6211\u4eec\u4f20\u5165\u6570\u5b57\u6570\u7ec4\uff0c\u5c06\u8fd4\u56de\u4e00\u4e2a\u6570\u5b57\u6570\u7ec4\uff0c\u56e0\u4e3a\u6b64\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u7684\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u3002 \u8fd9\u53ef\u4ee5\u8ba9\u6211\u4eec\u628a\u6cdb\u578b\u53d8\u91cf ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u5f53\u505a\u7c7b\u578b\u7684\u4e00\u90e8\u5206\u4f7f\u7528\uff0c\u800c\u4e0d\u662f\u6574\u4e2a\u7c7b\u578b\uff0c\u589e\u52a0\u4e86\u7075\u6d3b\u6027\u3002"),(0,a.kt)("h2",{id:"\u6cdb\u578b\u7c7b\u578b"},"\u6cdb\u578b\u7c7b\u578b"),(0,a.kt)("p",null,"\u4e0a\u4e00\u8282\uff0c\u6211\u4eec\u521b\u5efa\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"identity")," \u901a\u7528\u51fd\u6570\uff0c\u53ef\u4ee5\u9002\u7528\u4e8e\u4e0d\u540c\u7684\u7c7b\u578b\u3002 \u5728\u8fd9\u8282\uff0c\u6211\u4eec\u7814\u7a76\u4e00\u4e0b\u51fd\u6570\u672c\u8eab\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca\u5982\u4f55\u521b\u5efa\u6cdb\u578b\u63a5\u53e3\u3002"),(0,a.kt)("p",null,"\u6cdb\u578b\u51fd\u6570\u7684\u7c7b\u578b\u4e0e\u975e\u6cdb\u578b\u51fd\u6570\u7684\u7c7b\u578b\u6ca1\u4ec0\u4e48\u4e0d\u540c\uff0c\u53ea\u662f\u6709\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\u5728\u6700\u524d\u9762\uff0c\u50cf\u51fd\u6570\u58f0\u660e\u4e00\u6837\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity<T>(arg: T): T {\n  return arg\n}\n\nlet myIdentity: <T>(arg: T) => T = identity\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u6cdb\u578b\u53c2\u6570\u540d\uff0c\u53ea\u8981\u5728\u6570\u91cf\u4e0a\u548c\u4f7f\u7528\u65b9\u5f0f\u4e0a\u80fd\u5bf9\u5e94\u4e0a\u5c31\u53ef\u4ee5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity<T>(arg: T): T {\n  return arg\n}\n\nlet myIdentity: <U>(arg: U) => U = identity\n")),(0,a.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5e26\u6709\u8c03\u7528\u7b7e\u540d\u7684\u5bf9\u8c61\u5b57\u9762\u91cf\u6765\u5b9a\u4e49\u6cdb\u578b\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity<T>(arg: T): T {\n  return arg\n}\n\nlet myIdentity: {<T>(arg: T): T} = identity\n")),(0,a.kt)("p",null,"\u8fd9\u5f15\u5bfc\u6211\u4eec\u53bb\u5199\u7b2c\u4e00\u4e2a\u6cdb\u578b\u63a5\u53e3\u4e86\u3002\u6211\u4eec\u628a\u4e0a\u9762\u4f8b\u5b50\u91cc\u7684\u5bf9\u8c61\u5b57\u9762\u91cf\u62ff\u51fa\u6765\u505a\u4e3a\u4e00\u4e2a\u63a5\u53e3\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GenericIdentityFn {\n  <T>(arg: T): T\n}\n\nfunction identity<T>(arg: T): T {\n  return arg\n}\n\nlet myIdentity: GenericIdentityFn = identity\n")),(0,a.kt)("p",null,"\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u628a\u6cdb\u578b\u53c2\u6570\u5f53\u4f5c\u6574\u4e2a\u63a5\u53e3\u7684\u4e00\u4e2a\u53c2\u6570\u3002 \u8fd9\u6837\u6211\u4eec\u5c31\u80fd\u6e05\u695a\u7684\u77e5\u9053\u4f7f\u7528\u7684\u5177\u4f53\u662f\u54ea\u4e2a\u6cdb\u578b\u7c7b\u578b\uff08\u6bd4\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary<string>")," \u800c\u4e0d\u53ea\u662f",(0,a.kt)("inlineCode",{parentName:"p"}," Dictionary"),"\uff09\u3002\u8fd9\u6837\u63a5\u53e3\u91cc\u7684\u5176\u5b83\u6210\u5458\u4e5f\u80fd\u77e5\u9053\u8fd9\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GenericIdentityFn<T> {\n  (arg: T): T\n}\n\nfunction identity<T>(arg: T): T {\n  return arg\n}\n\nlet myIdentity: GenericIdentityFn<number> = identity\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u6211\u4eec\u7684\u793a\u4f8b\u505a\u4e86\u5c11\u8bb8\u6539\u52a8\u3002 \u4e0d\u518d\u63cf\u8ff0\u6cdb\u578b\u51fd\u6570\uff0c\u800c\u662f\u628a\u975e\u6cdb\u578b\u51fd\u6570\u7b7e\u540d\u4f5c\u4e3a\u6cdb\u578b\u7c7b\u578b\u4e00\u90e8\u5206\u3002 \u5f53\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericIdentityFn")," \u7684\u65f6\u5019\uff0c\u8fd8\u5f97\u4f20\u5165\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\u6765\u6307\u5b9a\u6cdb\u578b\u7c7b\u578b\uff08\u8fd9\u91cc\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff09\uff0c\u9501\u5b9a\u4e86\u4e4b\u540e\u4ee3\u7801\u91cc\u4f7f\u7528\u7684\u7c7b\u578b\u3002\u5bf9\u4e8e\u63cf\u8ff0\u54ea\u90e8\u5206\u7c7b\u578b\u5c5e\u4e8e\u6cdb\u578b\u90e8\u5206\u6765\u8bf4\uff0c\u7406\u89e3\u4f55\u65f6\u628a\u53c2\u6570\u653e\u5728\u8c03\u7528\u7b7e\u540d\u91cc\u548c\u4f55\u65f6\u653e\u5728\u63a5\u53e3\u4e0a\u662f\u5f88\u6709\u5e2e\u52a9\u7684\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u6cdb\u578b\u63a5\u53e3\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u521b\u5efa\u6cdb\u578b\u7c7b\u3002 \u6ce8\u610f\uff0c\u65e0\u6cd5\u521b\u5efa\u6cdb\u578b\u679a\u4e3e\u548c\u6cdb\u578b\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("h2",{id:"\u6cdb\u578b\u7c7b"},"\u6cdb\u578b\u7c7b"),(0,a.kt)("p",null,"\u6cdb\u578b\u7c7b\u770b\u4e0a\u53bb\u4e0e\u6cdb\u578b\u63a5\u53e3\u5dee\u4e0d\u591a\u3002 \u6cdb\u578b\u7c7b\u4f7f\u7528\uff08 ",(0,a.kt)("inlineCode",{parentName:"p"},"<>"),"\uff09\u62ec\u8d77\u6cdb\u578b\u7c7b\u578b\uff0c\u8ddf\u5728\u7c7b\u540d\u540e\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class GenericNumber<T> {\n  zeroValue: T\n  add: (x: T, y: T) => T\n}\n\nlet myGenericNumber = new GenericNumber<number>()\nmyGenericNumber.zeroValue = 0\nmyGenericNumber.add = function(x, y) {\n  return x + y \n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GenericNumber")," \u7c7b\u7684\u4f7f\u7528\u662f\u5341\u5206\u76f4\u89c2\u7684\uff0c\u5e76\u4e14\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u6ca1\u6709\u4ec0\u4e48\u53bb\u9650\u5236\u5b83\u53ea\u80fd\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," \u7c7b\u578b\u3002 \u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u6216\u5176\u5b83\u66f4\u590d\u6742\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let stringNumeric = new GenericNumber<string>()\nstringNumeric.zeroValue = ''\nstringNumeric.add = function(x, y) { \n  return x + y\n}\n\nconsole.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))\n")),(0,a.kt)("p",null,"\u4e0e\u63a5\u53e3\u4e00\u6837\uff0c\u76f4\u63a5\u628a\u6cdb\u578b\u7c7b\u578b\u653e\u5728\u7c7b\u540e\u9762\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u786e\u8ba4\u7c7b\u7684\u6240\u6709\u5c5e\u6027\u90fd\u5728\u4f7f\u7528\u76f8\u540c\u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u7c7b\u90a3\u8bf4\u8fc7\uff0c\u7c7b\u6709\u4e24\u90e8\u5206\uff1a\u9759\u6001\u90e8\u5206\u548c\u5b9e\u4f8b\u90e8\u5206\u3002 \u6cdb\u578b\u7c7b\u6307\u7684\u662f\u5b9e\u4f8b\u90e8\u5206\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u4e0d\u80fd\u4f7f\u7528\u8fd9\u4e2a\u6cdb\u578b\u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"\u6cdb\u578b\u7ea6\u675f"},"\u6cdb\u578b\u7ea6\u675f"),(0,a.kt)("p",null,"\u6211\u4eec\u6709\u65f6\u5019\u60f3\u64cd\u4f5c\u67d0\u7c7b\u578b\u7684\u4e00\u7ec4\u503c\uff0c\u5e76\u4e14\u6211\u4eec\u77e5\u9053\u8fd9\u7ec4\u503c\u5177\u6709\u4ec0\u4e48\u6837\u7684\u5c5e\u6027\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"loggingIdentity")," \u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u60f3\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"arg")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," \u5c5e\u6027\uff0c\u4f46\u662f\u7f16\u8bd1\u5668\u5e76\u4e0d\u80fd\u8bc1\u660e\u6bcf\u79cd\u7c7b\u578b\u90fd\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," \u5c5e\u6027\uff0c\u6240\u4ee5\u5c31\u62a5\u9519\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function loggingIdentity<T>(arg: T): T {\n  console.log(arg.length)\n  return arg\n}\n")),(0,a.kt)("p",null,"\u76f8\u6bd4\u4e8e\u64cd\u4f5c ",(0,a.kt)("inlineCode",{parentName:"p"},"any")," \u6240\u6709\u7c7b\u578b\uff0c\u6211\u4eec\u60f3\u8981\u9650\u5236\u51fd\u6570\u53bb\u5904\u7406\u4efb\u610f\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},".length")," \u5c5e\u6027\u7684\u6240\u6709\u7c7b\u578b\u3002 \u53ea\u8981\u4f20\u5165\u7684\u7c7b\u578b\u6709\u8fd9\u4e2a\u5c5e\u6027\uff0c\u6211\u4eec\u5c31\u5141\u8bb8\uff0c\u5c31\u662f\u8bf4\u81f3\u5c11\u5305\u542b\u8fd9\u4e00\u5c5e\u6027\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u9700\u8981\u5217\u51fa\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7684\u7ea6\u675f\u8981\u6c42\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u63a5\u53e3\u6765\u63cf\u8ff0\u7ea6\u675f\u6761\u4ef6\uff0c\u521b\u5efa\u4e00\u4e2a\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},".length")," \u5c5e\u6027\u7684\u63a5\u53e3\uff0c\u4f7f\u7528\u8fd9\u4e2a\u63a5\u53e3\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"extends")," \u5173\u952e\u5b57\u6765\u5b9e\u73b0\u7ea6\u675f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Lengthwise {\n  length: number\n}\n\nfunction loggingIdentity<T extends Lengthwise>(arg: T): T {\n  console.log(arg.length) // OK\n  return arg\n}\n")),(0,a.kt)("p",null,"\u73b0\u5728\u8fd9\u4e2a\u6cdb\u578b\u51fd\u6570\u88ab\u5b9a\u4e49\u4e86\u7ea6\u675f\uff0c\u56e0\u6b64\u5b83\u4e0d\u518d\u662f\u9002\u7528\u4e8e\u4efb\u610f\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"loggingIdentity(3);  // Error\n")),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4f20\u5165\u7b26\u5408\u7ea6\u675f\u7c7b\u578b\u7684\u503c\uff0c\u5fc5\u987b\u5305\u542b\u5fc5\u987b\u7684\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"loggingIdentity({length: 10, value: 3}) // OK\n")),(0,a.kt)("h3",{id:"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570"},"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u58f0\u660e\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\uff0c\u4e14\u5b83\u88ab\u53e6\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\u6240\u7ea6\u675f\u3002 \u6bd4\u5982\uff0c\u73b0\u5728\u6211\u4eec\u60f3\u8981\u7528\u5c5e\u6027\u540d\u4ece\u5bf9\u8c61\u91cc\u83b7\u53d6\u8fd9\u4e2a\u5c5e\u6027\u3002 \u5e76\u4e14\u6211\u4eec\u60f3\u8981\u786e\u4fdd\u8fd9\u4e2a\u5c5e\u6027\u5b58\u5728\u4e8e\u5bf9\u8c61 ",(0,a.kt)("inlineCode",{parentName:"p"},"obj")," \u4e0a\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728\u8fd9\u4e24\u4e2a\u7c7b\u578b\u4e4b\u95f4\u4f7f\u7528\u7ea6\u675f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function getProperty<T, K extends keyof T> (obj: T, key: K ) {\n  return obj[key]\n}\n\nlet x = {a: 1, b: 2, c: 3, d: 4}\n\ngetProperty(x, 'a') // okay\ngetProperty(x, 'm') // error\n")))}m.isMDXComponent=!0}}]);