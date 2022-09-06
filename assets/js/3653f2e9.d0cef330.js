"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9619],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(a),v=l,k=p["".concat(d,".").concat(v)]||p[v]||s[v]||i;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function v(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:l,r[1]=c;for(var o=2;o<i;o++)r[o]=a[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},94658:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={slug:"basic3",title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e0b)",sidebar_position:3},r=void 0,c={unversionedId:"Java/basic3",id:"Java/basic3",title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e0b)",description:"static",source:"@site/docs/Java/basic3.md",sourceDirName:"Java",slug:"/Java/basic3",permalink:"/docs/Java/basic3",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Java/basic3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"basic3",title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e0b)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[Java] java\u57fa\u7840\u6982\u5ff5(\u4e2d)",permalink:"/docs/Java/basic2"},next:{title:"[Linux] Linux\u5e38\u7528\u547d\u4ee4\u4e0e\u6587\u4ef6\u7ba1\u7406",permalink:"/docs/Linux/basic"}},d=[{value:"static",id:"static",children:[{value:"static\u5185\u5b58\u56fe",id:"static\u5185\u5b58\u56fe",children:[],level:3},{value:"javabean\u7c7b",id:"javabean\u7c7b",children:[],level:3},{value:"\u6d4b\u8bd5\u7c7b",id:"\u6d4b\u8bd5\u7c7b",children:[],level:3},{value:"\u5de5\u5177\u7c7b",id:"\u5de5\u5177\u7c7b",children:[{value:"\u7f16\u5199\u4e00\u4e2a\u5de5\u5177\u7c7b",id:"\u7f16\u5199\u4e00\u4e2a\u5de5\u5177\u7c7b",children:[],level:4}],level:3},{value:"static\u7684\u6ce8\u610f\u4e8b\u9879",id:"static\u7684\u6ce8\u610f\u4e8b\u9879",children:[],level:3}],level:2},{value:"\u7ee7\u627f",id:"\u7ee7\u627f",children:[{value:"\u4f55\u65f6\u7528\u7ee7\u627f?",id:"\u4f55\u65f6\u7528\u7ee7\u627f",children:[],level:3},{value:"\u5355\u7ee7\u627f",id:"\u5355\u7ee7\u627f",children:[],level:3},{value:"\u5b50\u7c7b\u5230\u5e95\u80fd\u7ee7\u627f\u7236\u7c7b\u4e2d\u7684\u54ea\u4e9b\u5185\u5bb9",id:"\u5b50\u7c7b\u5230\u5e95\u80fd\u7ee7\u627f\u7236\u7c7b\u4e2d\u7684\u54ea\u4e9b\u5185\u5bb9",children:[],level:3},{value:"...todo",id:"todo",children:[],level:3}],level:2},{value:"\u591a\u6001",id:"\u591a\u6001",children:[{value:"\u591a\u6001\u7684\u5e94\u7528\u573a\u666f",id:"\u591a\u6001\u7684\u5e94\u7528\u573a\u666f",children:[],level:3},{value:"\u591a\u6001\u7684\u8868\u73b0\u5f62\u5f0f",id:"\u591a\u6001\u7684\u8868\u73b0\u5f62\u5f0f",children:[],level:3},{value:"\u591a\u6001\u7684\u524d\u63d0",id:"\u591a\u6001\u7684\u524d\u63d0",children:[],level:3},{value:"...todo",id:"todo-1",children:[],level:3}],level:2},{value:"\u5305 package",id:"\u5305-package",children:[],level:2},{value:"final",id:"final",children:[],level:2},{value:"\u6743\u9650\u4fee\u9970\u7b26",id:"\u6743\u9650\u4fee\u9970\u7b26",children:[],level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[{value:"\u7ec3\u4e60: \u7f16\u5199\u5e26\u6709\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u6807\u51c6javabean\u7c7b",id:"\u7ec3\u4e60-\u7f16\u5199\u5e26\u6709\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u6807\u51c6javabean\u7c7b",children:[],level:3},{value:"...todo",id:"todo-2",children:[],level:3}],level:2},{value:"\u6253\u5305\u7684\u6b65\u9aa4",id:"\u6253\u5305\u7684\u6b65\u9aa4",children:[],level:2}],o={toc:d};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"static"},"static"),(0,l.kt)("h3",{id:"static\u5185\u5b58\u56fe"},"static\u5185\u5b58\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"static",src:a(92524).Z})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ic",src:a(27401).Z})),(0,l.kt)("h3",{id:"javabean\u7c7b"},"javabean\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6765\u63cf\u8ff0\u4e00\u7c7b\u4e8b\u7269\u7684\u7c7b. \u6bd4\u5982, Student, Teacher, Dog, Cat\u7b49")),(0,l.kt)("h3",{id:"\u6d4b\u8bd5\u7c7b"},"\u6d4b\u8bd5\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6765\u68c0\u67e5\u5176\u4ed6\u7c7b\u662f\u5426\u4e66\u5199\u6b63\u786e, \u5e26\u6709main\u65b9\u6cd5\u7684\u7c7b, \u662f\u7a0b\u5e8f\u7684\u5165\u53e3")),(0,l.kt)("h3",{id:"\u5de5\u5177\u7c7b"},"\u5de5\u5177\u7c7b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e2e\u6211\u4eec\u505a\u4e00\u4e9b\u4e8b\u60c5\u7684\u7c7b")),(0,l.kt)("h4",{id:"\u7f16\u5199\u4e00\u4e2a\u5de5\u5177\u7c7b"},"\u7f16\u5199\u4e00\u4e2a\u5de5\u5177\u7c7b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.itheima.a02;\n\npublic class ArrayUtil {\n\n//    \u79c1\u6709\u5316\u6784\u9020\u65b9\u6cd5\n//    \u76ee\u7684: \u4e0d\u8ba9\u5916\u754c\u521b\u5efa\u4ed6\u7684\u5bf9\u8c61\n    private ArrayUtil() {}\n\n//    \u9700\u8981\u5b9a\u4e49\u4e3a\u9759\u6001\u7684, \u65b9\u4fbf\u8c03\u7528\n    public static String printArr(int[] arr) {\n        StringBuilder sb = new StringBuilder();\n        sb.append("[");\n        for (int i = 0; i < arr.length; i++) {\n            if(i == arr.length - 1){\n                sb.append(arr[i]);\n\n            } else {\n                sb.append(arr[i]).append(",");\n            }\n        }\n        sb.append("]");\n        return sb.toString();\n    }\n\n    public static double getAerage(double[] arr) {\n        double sum = 0;\n        for (int i = 0; i < arr.length; i++) {\n            sum = sum + arr[i];\n        }\n        return sum / arr.length;\n    }\n}\n\npackage com.itheima.a02;\n\npublic class TestDemo {\n    public static void main(String[] args) {\n//        \u6d4b\u8bd5\u5de5\u5177\u7c7b\u4e2d\u7684\u4e24\u4e2a\u65b9\u6cd5\u662f\u5426\u6b63\u786e\n\n        int[] arr1 = {1,2,3,4,5};\n        String str = ArrayUtil.printArr(arr1);\n        System.out.println(str);\n\n        double[] arr2 = {1.5, 3.7, 4.9, 5.9};\n        double avg = ArrayUtil.getAerage(arr2);\n        System.out.println(avg);\n    }\n}\n\n')),(0,l.kt)("h3",{id:"static\u7684\u6ce8\u610f\u4e8b\u9879"},"static\u7684\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9759\u6001\u65b9\u6cd5\u53ea\u80fd\u8bbf\u95ee\u9759\u6001")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9759\u6001\u65b9\u6cd5\u4e2d\u6ca1\u6709this\u5173\u952e\u5b57")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9759\u6001\u968f\u7740\u7c7b\u7684\u52a0\u8f7d\u800c\u52a0\u8f7d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u975e\u9759\u6001\u8ddf\u5bf9\u8c61\u6709\u5173"))),(0,l.kt)("h2",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,l.kt)("p",null,"\u9762\u5411\u5bf9\u8c61\u4e09\u5927\u7279\u5f81\u4e4b\u4e00"),(0,l.kt)("h3",{id:"\u4f55\u65f6\u7528\u7ee7\u627f"},"\u4f55\u65f6\u7528\u7ee7\u627f?"),(0,l.kt)("p",null,"\u5f53\u7c7b\u4e0e\u7c7b\u4e4b\u95f4, \u5b58\u5728\u76f8\u540c(\u5171\u6027)\u7684\u5185\u5bb9, \u5e76\u6ee1\u8db3\u5b50\u7c7b\u662f\u7236\u7c7b\u4e2d\u7684\u4e00\u79cd, \u5c31\u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u7ee7\u627f, \u6765\u4f18\u5316\u4ee3\u7801"),(0,l.kt)("h3",{id:"\u5355\u7ee7\u627f"},"\u5355\u7ee7\u627f"),(0,l.kt)("p",null,"java\u53ea\u652f\u6301\u5355\u7ee7\u627f, \u4e0d\u652f\u6301\u591a\u7ee7\u627f, \u4f46\u652f\u6301\u591a\u5c42\u7ee7\u627f"),(0,l.kt)("p",null,"\u5355\u7ee7\u627f: \u4e00\u4e2a\u5b50\u7c7b\u53ea\u80fd\u7ee7\u627f\u4e00\u4e2a\u7236\u7c7b"),(0,l.kt)("p",null,"java\u4e2d\u6240\u6709\u7684\u7c7b\u90fd\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u7ee7\u627f\u4e8eObject\u7c7b"),(0,l.kt)("h3",{id:"\u5b50\u7c7b\u5230\u5e95\u80fd\u7ee7\u627f\u7236\u7c7b\u4e2d\u7684\u54ea\u4e9b\u5185\u5bb9"},"\u5b50\u7c7b\u5230\u5e95\u80fd\u7ee7\u627f\u7236\u7c7b\u4e2d\u7684\u54ea\u4e9b\u5185\u5bb9"),(0,l.kt)("p",null,"\u8bef\u533a1: \u7236\u7c7b\u79c1\u6709\u7684\u4e1c\u897f, \u5b50\u7c7b\u5c31\u65e0\u6cd5\u7ee7\u627f"),(0,l.kt)("p",null,"\u8bef\u533a2: \u7236\u7c7b\u4e2d\u975e\u79c1\u6709\u7684\u6210\u5458, \u5c31\u88ab\u5b50\u7c7b\u7ee7\u627f\u4e0b\u6765\u4e86"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"jicheng",src:a(56759).Z})),(0,l.kt)("h3",{id:"todo"},"...todo"),(0,l.kt)("h2",{id:"\u591a\u6001"},"\u591a\u6001"),(0,l.kt)("p",null,"\u540c\u7c7b\u578b\u7684\u5bf9\u8c61, \u8868\u73b0\u51fa\u7684\u4e0d\u540c\u5f62\u6001"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"duotai",src:a(46932).Z})),(0,l.kt)("h3",{id:"\u591a\u6001\u7684\u5e94\u7528\u573a\u666f"},"\u591a\u6001\u7684\u5e94\u7528\u573a\u666f"),(0,l.kt)("h3",{id:"\u591a\u6001\u7684\u8868\u73b0\u5f62\u5f0f"},"\u591a\u6001\u7684\u8868\u73b0\u5f62\u5f0f"),(0,l.kt)("p",null,"\u7236\u7c7b\u7c7b\u578b \u5bf9\u8c61\u540d\u79f0 = \u5b50\u7c7b\u5bf9\u8c61;"),(0,l.kt)("h3",{id:"\u591a\u6001\u7684\u524d\u63d0"},"\u591a\u6001\u7684\u524d\u63d0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6709\u7ee7\u627f/\u5b9e\u73b0\u5173\u7cfb"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u7236\u7c7b\u5f15\u7528\u6307\u5411\u5b50\u7c7b\u5bf9\u8c61 Fu f = new Zi()"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u65b9\u6cd5\u91cd\u5199")),(0,l.kt)("h3",{id:"todo-1"},"...todo"),(0,l.kt)("h2",{id:"\u5305-package"},"\u5305 package"),(0,l.kt)("p",null,"\u5305\u5c31\u662f\u6587\u4ef6\u5939, \u7528\u6765\u7ba1\u7406\u5404\u79cd\u4e0d\u540c\u529f\u80fd\u7684java\u7c7b, \u65b9\u4fbf\u540e\u671f\u4ee3\u7801\u7ef4\u62a4"),(0,l.kt)("h2",{id:"final"},"final"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4fee\u9970\u65b9\u6cd5, \u7c7b, \u53d8\u91cf"),(0,l.kt)("p",null,"\u5206\u522b\u8868\u540d\u8be5\u65b9\u6cd5\u662f\u6700\u7ec8\u65b9\u6cd5, \u4e0d\u80fd\u88ab\u91cd\u5199. \u8868\u660e\u8be5\u7c7b\u662f\u6700\u7ec8\u7c7b, \u4e0d\u80fd\u88ab\u7ee7\u627f. \u8868\u540d\u5e38\u91cf\u53ea\u80fd\u88ab\u8d4b\u503c\u4e00\u6b21"),(0,l.kt)("h2",{id:"\u6743\u9650\u4fee\u9970\u7b26"},"\u6743\u9650\u4fee\u9970\u7b26"),(0,l.kt)("p",null,"\u662f\u7528\u6765\u63a7\u5236\u4e00\u4e2a\u6210\u5458\u80fd\u591f\u88ab\u8bbf\u95ee\u7684\u8303\u56f4\u7684"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4fee\u9970\u6210\u5458\u53d8\u91cf, \u65b9\u6cd5, \u6784\u9020\u65b9\u6cd5, \u5185\u90e8\u7c7b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"quanxian",src:a(85014).Z})),(0,l.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,l.kt)("p",null,"\u5c31\u662f\u4e00\u79cd\u89c4\u5219, \u662f\u5bf9\u884c\u4e3a\u7684\u62bd\u8c61"),(0,l.kt)("h3",{id:"\u7ec3\u4e60-\u7f16\u5199\u5e26\u6709\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u6807\u51c6javabean\u7c7b"},"\u7ec3\u4e60: \u7f16\u5199\u5e26\u6709\u63a5\u53e3\u548c\u62bd\u8c61\u7c7b\u7684\u6807\u51c6javabean\u7c7b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"jiekou",src:a(95217).Z})),(0,l.kt)("h3",{id:"todo-2"},"...todo"),(0,l.kt)("h2",{id:"\u6253\u5305\u7684\u6b65\u9aa4"},"\u6253\u5305\u7684\u6b65\u9aa4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u628a\u6240\u6709\u4ee3\u7801\u6253\u5305\u6210\u4e00\u4e2a\u538b\u7f29\u5305\uff0c jar\u540e\u7f00\u7684\u538b\u7f29\u5305"),(0,l.kt)("li",{parentName:"ol"},"\u628ajar\u5305\u8f6c\u6362\u6210exe\u5b89\u88c5\u5305\uff08\u6b64\u65f6\u5b89\u88c5\u5305\u53ea\u6709\u4ee3\u7801\uff0c\u6ca1\u6709\u56fe\u7247\uff0c\u6ca1\u6709java\u8fd0\u884c\u73af\u5883\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u628a\u7b2c\u4e8c\u6b65\u7684exe\uff0c \u56fe\u7247\uff0c jdk\u6574\u5408\u5728\u4e00\u8d77\uff0c\u53d8\u6210\u6700\u7ec8\u7684exe\u5b89\u88c5\u5305")))}u.isMDXComponent=!0},46932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/duotai-78f643112a839c0db562d34c3b7181d0.jpg"},27401:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ic-d01967d40a6f1f825637892b16848c6c.jpg"},56759:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jicheng-56b5dd55b8fc256019759aac9bd385c5.jpg"},95217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/jiekou-615665e10e8782ce3c88390de019ec93.jpg"},85014:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/quanxian-bf66b12bdbcf11d86281679dad166cc0.jpg"},92524:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/static-d35d229ee1df14f37cf4b0d90c5b92cc.jpg"}}]);