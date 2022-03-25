"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7452],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34710:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),i=["components"],a={title:"[DevOps] \u4ee3\u7801\u66f4\u65b0\u65b9\u6cd5",sidebar_position:2},p=void 0,u={unversionedId:"DevOps/daima",id:"DevOps/daima",title:"[DevOps] \u4ee3\u7801\u66f4\u65b0\u65b9\u6cd5",description:"\u84dd\u7eff\u90e8\u7f72",source:"@site/docs/DevOps/daima.md",sourceDirName:"DevOps",slug:"/DevOps/daima",permalink:"/docs/DevOps/daima",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/DevOps/daima.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"[DevOps] \u4ee3\u7801\u66f4\u65b0\u65b9\u6cd5",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"[DevOps] \u666e\u7f57\u7c73\u4fee\u65af",permalink:"/docs/DevOps/prometheus"},next:{title:"[DevOps] jenkins",permalink:"/docs/DevOps/jenkins"}},c=[{value:"\u84dd\u7eff\u90e8\u7f72",id:"\u84dd\u7eff\u90e8\u7f72",children:[],level:2},{value:"\u6eda\u52a8\u66f4\u65b0",id:"\u6eda\u52a8\u66f4\u65b0",children:[],level:2},{value:"\u7070\u5ea6\u53d1\u5e03\uff08A/B \u6d4b\u8bd5\u3001\u91d1\u4e1d\u96c0\u90e8\u7f72\uff09",id:"\u7070\u5ea6\u53d1\u5e03ab-\u6d4b\u8bd5\u91d1\u4e1d\u96c0\u90e8\u7f72",children:[],level:2}],s={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u84dd\u7eff\u90e8\u7f72"},"\u84dd\u7eff\u90e8\u7f72"),(0,l.kt)("p",null,"\u84dd\u7eff\u90e8\u7f72\uff0c\u82f1\u6587\u540d Blue Green Deployment\uff0c\u662f\u4e00\u79cd\u53ef\u4ee5\u4fdd\u8bc1\u7cfb\u7edf\u5728\u4e0d\u95f4\u65ad\u63d0\u4f9b\u670d\u52a1\u7684\u60c5\u51b5\u4e0b\u4e0a\u7ebf\u4ee3\u7801\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u5982\u4f55\u4fdd\u8bc1\u7cfb\u7edf\u4e0d\u95f4\u65ad\u63d0\u4f9b\u670d\u52a1\u5462\uff1f"),(0,l.kt)("p",null,"\u84dd\u7eff\u90e8\u7f72\u7684\u6a21\u578b\u4e2d\u5305\u542b\u4e24\u4e2a\u96c6\u7fa4\uff0c\u5c31\u597d\u6bd4\u6d77\u8c5a\u7684\u5de6\u8111\u548c\u53f3\u8111\u3002"),(0,l.kt)("p",null,"\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\uff08\u6ca1\u6709\u4e0a\u7ebf\u64cd\u4f5c\uff09\uff0c\u96c6\u7fa4 A \u548c\u96c6\u7fa4 B \u7684\u4ee3\u7801\u7248\u672c\u662f\u4e00\u81f4\u7684\uff0c\u5e76\u4e14\u540c\u65f6\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u5728\u6709\u9879\u76ee\u4ee3\u7801\u4e0a\u7ebf\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9996\u5148\u628a\u4e00\u4e2a\u96c6\u7fa4\uff08\u6bd4\u5982\u96c6\u7fa4 A\uff09\u4ece\u8d1f\u8f7d\u5217\u8868\u4e2d\u6458\u9664\uff0c\u8fdb\u884c\u65b0\u7248\u672c\u7684\u90e8\u7f72\u3002\u96c6\u7fa4 B \u4ecd\u7136\u7ee7\u7eed\u63d0\u4f9b\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u5f53\u96c6\u7fa4 A \u5347\u7ea7\u5b8c\u6bd5\uff0c\u6211\u4eec\u628a\u8d1f\u8f7d\u5747\u8861\u91cd\u65b0\u6307\u5411\u96c6\u7fa4 A\uff0c\u518d\u628a\u96c6\u7fa4 B \u4ece\u8d1f\u8f7d\u5217\u8868\u4e2d\u6458\u9664\uff0c\u8fdb\u884c\u65b0\u7248\u672c\u7684\u90e8\u7f72\u3002\u96c6\u7fa4 A \u91cd\u65b0\u63d0\u4f9b\u670d\u52a1\u3002"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u5f53\u96c6\u7fa4 B \u4e5f\u5347\u7ea7\u5b8c\u6210\uff0c\u6211\u4eec\u628a\u96c6\u7fa4 B \u4e5f\u6062\u590d\u5230\u8d1f\u8f7d\u5217\u8868\u5f53\u4e2d\u3002\u8fd9\u4e2a\u65f6\u5019\uff0c\u4e24\u4e2a\u96c6\u7fa4\u7684\u7248\u672c\u90fd\u5df2\u7ecf\u5347\u7ea7\uff0c\u5e76\u4e14\u5bf9\u5916\u7684\u670d\u52a1\u51e0\u4e4e\u6ca1\u6709\u95f4\u65ad\u8fc7\u3002"),(0,l.kt)("h2",{id:"\u6eda\u52a8\u66f4\u65b0"},"\u6eda\u52a8\u66f4\u65b0"),(0,l.kt)("p",null,"\u6eda\u52a8\u66f4\u65b0\uff0c\u82f1\u6587 Rolling update\uff0c\u540c\u6837\u662f\u4e00\u79cd\u53ef\u4ee5\u4fdd\u8bc1\u7cfb\u7edf\u5728\u4e0d\u95f4\u65ad\u63d0\u4f9b\u670d\u52a1\u7684\u60c5\u51b5\u4e0b\u4e0a\u7ebf\u4ee3\u7801\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"\u548c\u84dd\u7eff\u90e8\u7f72\u4e0d\u540c\u7684\u662f\uff0c\u6eda\u52a8\u90e8\u7f72\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u7684\u7248\u672c\u5e76\u4e0d\u662f\u975e\u6b64\u5373\u5f7c\uff0c\u800c\u662f\u5728\u66f4\u7ec6\u7684\u7c92\u5ea6\u4e0b\u5e73\u6ed1\u5b8c\u6210\u7248\u672c\u7684\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u5982\u4f55\u505a\u5230\u7ec6\u7c92\u5ea6\u5e73\u6ed1\u5347\u7ea7\u7248\u672c\u5462\uff1f"),(0,l.kt)("p",null,"\u6eda\u52a8\u90e8\u7f72\u53ea\u9700\u8981\u4e00\u4e2a\u96c6\u7fa4\uff0c\u96c6\u7fa4\u4e0b\u7684\u4e0d\u540c\u8282\u70b9\u53ef\u4ee5\u72ec\u7acb\u8fdb\u884c\u7248\u672c\u5347\u7ea7\u3002\u6bd4\u5982\u5728\u4e00\u4e2a 16 \u8282\u70b9\u7684\u96c6\u7fa4\u4e2d\uff0c\u6211\u4eec\u9009\u62e9\u6bcf\u6b21\u5347\u7ea7 4 \u4e2a\u8282\u70b9\uff1a"),(0,l.kt)("p",null,"\u4ee5\u6b64\u7c7b\u63a8\uff0c\u6700\u7ec8\u6240\u6709\u7684\u8282\u70b9\u90fd\u5347\u7ea7\u4e86\u7248\u672c\u3002"),(0,l.kt)("h2",{id:"\u7070\u5ea6\u53d1\u5e03ab-\u6d4b\u8bd5\u91d1\u4e1d\u96c0\u90e8\u7f72"},"\u7070\u5ea6\u53d1\u5e03\uff08A/B \u6d4b\u8bd5\u3001\u91d1\u4e1d\u96c0\u90e8\u7f72\uff09"),(0,l.kt)("p",null,"\u7070\u5ea6\u53d1\u5e03/\u91d1\u4e1d\u96c0\u90e8\u7f72\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u51c6\u5907\u597d\u90e8\u7f72\u5404\u4e2a\u9636\u6bb5\u7684\u5de5\u4ef6\uff0c\u5305\u62ec\uff1a\u6784\u5efa\u5de5\u4ef6\uff0c\u6d4b\u8bd5\u811a\u672c\uff0c\u914d\u7f6e\u6587\u4ef6\u548c\u90e8\u7f72\u6e05\u5355\u6587\u4ef6\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4ece\u8d1f\u8f7d\u5747\u8861\u5217\u8868\u4e2d\u79fb\u9664\u6389\u201c\u91d1\u4e1d\u96c0\u201d\u670d\u52a1\u5668\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5347\u7ea7\u201c\u91d1\u4e1d\u96c0\u201d\u5e94\u7528\uff08\u6392\u6389\u539f\u6709\u6d41\u91cf\u5e76\u8fdb\u884c\u90e8\u7f72\uff09\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u5e94\u7528\u8fdb\u884c\u81ea\u52a8\u5316\u6d4b\u8bd5\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u201c\u91d1\u4e1d\u96c0\u201d\u670d\u52a1\u5668\u91cd\u65b0\u6dfb\u52a0\u5230\u8d1f\u8f7d\u5747\u8861\u5217\u8868\u4e2d\uff08\u8fde\u901a\u6027\u548c\u5065\u5eb7\u68c0\u67e5\uff09\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u201c\u91d1\u4e1d\u96c0\u201d\u5728\u7ebf\u4f7f\u7528\u6d4b\u8bd5\u6210\u529f\uff0c\u5347\u7ea7\u5269\u4f59\u7684\u5176\u4ed6\u670d\u52a1\u5668\u3002\uff08\u5426\u5219\u5c31\u56de\u6eda\uff09"))),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\u7070\u5ea6\u53d1\u5e03\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u8def\u7531\u6743\u91cd\uff0c\u52a8\u6001\u8c03\u6574\u4e0d\u540c\u7684\u6743\u91cd\u6765\u8fdb\u884c\u65b0\u8001\u7248\u672c\u7684\u9a8c\u8bc1\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"17 \u4e16\u7eaa\uff0c\u82f1\u56fd\u77ff\u4e95\u5de5\u4eba\u53d1\u73b0\uff0c\u91d1\u4e1d\u96c0\u5bf9\u74e6\u65af\u8fd9\u79cd\u6c14\u4f53\u5341\u5206\u654f\u611f\u3002\u7a7a\u6c14\u4e2d\u54ea\u6015\u6709\u6781\u5176\u5fae\u91cf\u7684\u74e6\u65af\uff0c\u91d1\u4e1d\u96c0\u4e5f\u4f1a\u505c\u6b62\u6b4c\u5531\uff1b\u800c\u5f53\u74e6\u65af\u542b\u91cf\u8d85\u8fc7\u4e00\u5b9a\u9650\u5ea6\u65f6\uff0c\u867d\u7136\u9c81\u949d\u7684\u4eba\u7c7b\u6beb\u65e0\u5bdf\u89c9\uff0c\u91d1\u4e1d\u96c0\u5374\u65e9\u5df2\u6bd2\u53d1\u8eab\u4ea1\u3002\u5f53\u65f6\u5728\u91c7\u77ff\u8bbe\u5907\u76f8\u5bf9\u7b80\u964b\u7684\u6761\u4ef6\u4e0b\uff0c\u5de5\u4eba\u4eec\u6bcf\u6b21\u4e0b\u4e95\u90fd\u4f1a\u5e26\u4e0a\u4e00\u53ea\u91d1\u4e1d\u96c0\u4f5c\u4e3a\u201c\u74e6\u65af\u68c0\u6d4b\u6307\u6807\u201d\uff0c\u4ee5\u4fbf\u5728\u5371\u9669\u72b6\u51b5\u4e0b\u7d27\u6025\u64a4\u79bb\u3002")))}m.isMDXComponent=!0}}]);