"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9704],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>k});var r=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),p=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=p(n.components);return r.createElement(u.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,u=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),d=p(t),k=i,s=d["".concat(u,".").concat(k)]||d[k]||m[k]||l;return t?r.createElement(s,a(a({ref:e},c),{},{components:t})):r.createElement(s,a({ref:e},c))}));function k(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,a=new Array(l);a[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o.mdxType="string"==typeof n?n:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26374:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const l={slug:"algo",title:"[\u7b97\u6cd5] \u5e38\u89c1\u7b97\u6cd5-\u67e5\u627e\u7b97\u6cd5",sidebar_position:1},a=void 0,o={unversionedId:"Algorithm/al",id:"Algorithm/al",title:"[\u7b97\u6cd5] \u5e38\u89c1\u7b97\u6cd5-\u67e5\u627e\u7b97\u6cd5",description:"1. \u57fa\u672c\u67e5\u627e",source:"@site/docs/Algorithm/al.md",sourceDirName:"Algorithm",slug:"/Algorithm/algo",permalink:"/docs/Algorithm/algo",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Algorithm/al.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"algo",title:"[\u7b97\u6cd5] \u5e38\u89c1\u7b97\u6cd5-\u67e5\u627e\u7b97\u6cd5",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[\u524d\u7aef\u6d4b\u8bd5] TDD\u548cBDD",permalink:"/docs/architecture/tddandbdd"},next:{title:"[\u7b97\u6cd5] \u5e38\u89c1\u7b97\u6cd5-\u6392\u5e8f\u7b97\u6cd5",permalink:"/docs/Algorithm/algo2"}},u=[{value:"1. \u57fa\u672c\u67e5\u627e",id:"1-\u57fa\u672c\u67e5\u627e",children:[],level:2},{value:"2. \u4e8c\u5206\u67e5\u627e",id:"2-\u4e8c\u5206\u67e5\u627e",children:[],level:2},{value:"3. \u63d2\u503c\u67e5\u627e",id:"3-\u63d2\u503c\u67e5\u627e",children:[],level:2},{value:"4. \u6590\u6ce2\u90a3\u5951\u67e5\u627e",id:"4-\u6590\u6ce2\u90a3\u5951\u67e5\u627e",children:[],level:2},{value:"5. \u5206\u5757\u67e5\u627e",id:"5-\u5206\u5757\u67e5\u627e",children:[],level:2},{value:"6. \u54c8\u5e0c\u67e5\u627e",id:"6-\u54c8\u5e0c\u67e5\u627e",children:[],level:2},{value:"7. \u6811\u8868\u67e5\u627e",id:"7-\u6811\u8868\u67e5\u627e",children:[],level:2}],p={toc:u};function c(n){let{components:e,...l}=n;return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u57fa\u672c\u67e5\u627e"},"1. \u57fa\u672c\u67e5\u627e"),(0,i.kt)("p",null,"\u200b\t\u4e5f\u53eb\u505a",(0,i.kt)("inlineCode",{parentName:"p"},"\u987a\u5e8f\u67e5\u627e")),(0,i.kt)("p",null,"\u200b        \u8bf4\u660e\uff1a\u987a\u5e8f\u67e5\u627e\u9002\u5408\u4e8e\u5b58\u50a8\u7ed3\u6784\u4e3a\u6570\u7ec4\u6216\u8005\u94fe\u8868\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u57fa\u672c\u601d\u60f3"),"\uff1a\u987a\u5e8f\u67e5\u627e\u4e5f\u79f0\u4e3a\u7ebf\u5f62\u67e5\u627e\uff0c\u5c5e\u4e8e\u65e0\u5e8f\u67e5\u627e\u7b97\u6cd5\u3002\u4ece\u6570\u636e\u7ed3\u6784\u7ebf\u7684\u4e00\u7aef\u5f00\u59cb\uff0c\u987a\u5e8f\u626b\u63cf\uff0c\u4f9d\u6b21\u5c06\u904d\u5386\u5230\u7684\u7ed3\u70b9\u4e0e\u8981\u67e5\u627e\u7684\u503c\u76f8\u6bd4\u8f83\uff0c\u82e5\u76f8\u7b49\u5219\u8868\u793a\u67e5\u627e\u6210\u529f\uff1b\u82e5\u904d\u5386\u7ed3\u675f\u4ecd\u6ca1\u6709\u627e\u5230\u76f8\u540c\u7684\uff0c\u8868\u793a\u67e5\u627e\u5931\u8d25\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class A01_BasicSearchDemo1 {\n    public static void main(String[] args) {\n        //\u57fa\u672c\u67e5\u627e/\u987a\u5e8f\u67e5\u627e\n        //\u6838\u5fc3\uff1a\n        //\u4ece0\u7d22\u5f15\u5f00\u59cb\u6328\u4e2a\u5f80\u540e\u67e5\u627e\n\n        //\u9700\u6c42\uff1a\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u5229\u7528\u57fa\u672c\u67e5\u627e\uff0c\u67e5\u8be2\u67d0\u4e2a\u5143\u7d20\u662f\u5426\u5b58\u5728\n        //\u6570\u636e\u5982\u4e0b\uff1a{131, 127, 147, 81, 103, 23, 7, 79}\n\n\n        int[] arr = {131, 127, 147, 81, 103, 23, 7, 79};\n        int number = 82;\n        System.out.println(basicSearch(arr, number));\n\n    }\n\n    //\u53c2\u6570\uff1a\n    //\u4e00\uff1a\u6570\u7ec4\n    //\u4e8c\uff1a\u8981\u67e5\u627e\u7684\u5143\u7d20\n\n    //\u8fd4\u56de\u503c\uff1a\n    //\u5143\u7d20\u662f\u5426\u5b58\u5728\n    public static boolean basicSearch(int[] arr, int number){\n        //\u5229\u7528\u57fa\u672c\u67e5\u627e\u6765\u67e5\u627enumber\u5728\u6570\u7ec4\u4e2d\u662f\u5426\u5b58\u5728\n        for (int i = 0; i < arr.length; i++) {\n            if(arr[i] == number){\n                return true;\n            }\n        }\n        return false;\n    }\n}\n")),(0,i.kt)("h2",{id:"2-\u4e8c\u5206\u67e5\u627e"},"2. \u4e8c\u5206\u67e5\u627e"),(0,i.kt)("p",null,"\u200b\t\u4e5f\u53eb\u505a\u6298\u534a\u67e5\u627e"),(0,i.kt)("p",null,"\u8bf4\u660e\uff1a\u5143\u7d20\u5fc5\u987b\u662f\u6709\u5e8f\u7684\uff0c\u4ece\u5c0f\u5230\u5927\uff0c\u6216\u8005\u4ece\u5927\u5230\u5c0f\u90fd\u662f\u53ef\u4ee5\u7684\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u662f\u65e0\u5e8f\u7684\uff0c\u4e5f\u53ef\u4ee5\u5148\u8fdb\u884c\u6392\u5e8f\u3002\u4f46\u662f\u6392\u5e8f\u4e4b\u540e\uff0c\u4f1a\u6539\u53d8\u539f\u6709\u6570\u636e\u7684\u987a\u5e8f\uff0c\u67e5\u627e\u51fa\u6765\u5143\u7d20\u4f4d\u7f6e\u8ddf\u539f\u6765\u7684\u5143\u7d20\u53ef\u80fd\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u6240\u4ee5\u6392\u5e8f\u4e4b\u540e\u518d\u67e5\u627e\u53ea\u80fd\u5224\u65ad\u5f53\u524d\u6570\u636e\u662f\u5426\u5728\u5bb9\u5668\u5f53\u4e2d\uff0c\u8fd4\u56de\u7684\u7d22\u5f15\u65e0\u5b9e\u9645\u7684\u610f\u4e49\u3002"),(0,i.kt)("p",null,"\u3000\u3000",(0,i.kt)("strong",{parentName:"p"},"\u57fa\u672c\u601d\u60f3"),"\uff1a\u4e5f\u79f0\u4e3a\u662f\u6298\u534a\u67e5\u627e\uff0c\u5c5e\u4e8e\u6709\u5e8f\u67e5\u627e\u7b97\u6cd5\u3002\u7528\u7ed9\u5b9a\u503c\u5148\u4e0e\u4e2d\u95f4\u7ed3\u70b9\u6bd4\u8f83\u3002\u6bd4\u8f83\u5b8c\u4e4b\u540e\u6709\u4e09\u79cd\u60c5\u51b5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u76f8\u7b49"),(0,i.kt)("p",{parentName:"li"},"\u8bf4\u660e\u627e\u5230\u4e86")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8981\u67e5\u627e\u7684\u6570\u636e\u6bd4\u4e2d\u95f4\u8282\u70b9\u5c0f"),(0,i.kt)("p",{parentName:"li"},"\u8bf4\u660e\u8981\u67e5\u627e\u7684\u6570\u5b57\u5728\u4e2d\u95f4\u8282\u70b9\u5de6\u8fb9")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8981\u67e5\u627e\u7684\u6570\u636e\u6bd4\u4e2d\u95f4\u8282\u70b9\u5927"),(0,i.kt)("p",{parentName:"li"},"\u8bf4\u660e\u8981\u67e5\u627e\u7684\u6570\u5b57\u5728\u4e2d\u95f4\u8282\u70b9\u53f3\u8fb9"))),(0,i.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package com.itheima.search;\n\npublic class A02_BinarySearchDemo1 {\n    public static void main(String[] args) {\n        //\u4e8c\u5206\u67e5\u627e/\u6298\u534a\u67e5\u627e\n        //\u6838\u5fc3\uff1a\n        //\u6bcf\u6b21\u6392\u9664\u4e00\u534a\u7684\u67e5\u627e\u8303\u56f4\n\n        //\u9700\u6c42\uff1a\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u5229\u7528\u4e8c\u5206\u67e5\u627e\uff0c\u67e5\u8be2\u67d0\u4e2a\u5143\u7d20\u5728\u6570\u7ec4\u4e2d\u7684\u7d22\u5f15\n        //\u6570\u636e\u5982\u4e0b\uff1a{7, 23, 79, 81, 103, 127, 131, 147}\n\n        int[] arr = {7, 23, 79, 81, 103, 127, 131, 147};\n        System.out.println(binarySearch(arr, 150));\n    }\n\n    public static int binarySearch(int[] arr, int number){\n        //1.\u5b9a\u4e49\u4e24\u4e2a\u53d8\u91cf\u8bb0\u5f55\u8981\u67e5\u627e\u7684\u8303\u56f4\n        int min = 0;\n        int max = arr.length - 1;\n\n        //2.\u5229\u7528\u5faa\u73af\u4e0d\u65ad\u7684\u53bb\u627e\u8981\u67e5\u627e\u7684\u6570\u636e\n        while(true){\n            if(min > max){\n                return -1;\n            }\n            //3.\u627e\u5230min\u548cmax\u7684\u4e2d\u95f4\u4f4d\u7f6e\n            int mid = (min + max) / 2;\n            //4.\u62ff\u7740mid\u6307\u5411\u7684\u5143\u7d20\u8ddf\u8981\u67e5\u627e\u7684\u5143\u7d20\u8fdb\u884c\u6bd4\u8f83\n            if(arr[mid] > number){\n                //4.1 number\u5728mid\u7684\u5de6\u8fb9\n                //min\u4e0d\u53d8\uff0cmax = mid - 1\uff1b\n                max = mid - 1;\n            }else if(arr[mid] < number){\n                //4.2 number\u5728mid\u7684\u53f3\u8fb9\n                //max\u4e0d\u53d8\uff0cmin = mid + 1;\n                min = mid + 1;\n            }else{\n                //4.3 number\u8ddfmid\u6307\u5411\u7684\u5143\u7d20\u4e00\u6837\n                //\u627e\u5230\u4e86\n                return mid;\n            }\n\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"3-\u63d2\u503c\u67e5\u627e"},"3. \u63d2\u503c\u67e5\u627e"),(0,i.kt)("p",null,"\u5728\u4ecb\u7ecd\u63d2\u503c\u67e5\u627e\u4e4b\u524d\uff0c\u5148\u8003\u8651\u4e00\u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("p",null,"\u200b\t\u4e3a\u4ec0\u4e48\u4e8c\u5206\u67e5\u627e\u7b97\u6cd5\u4e00\u5b9a\u8981\u662f\u6298\u534a\uff0c\u800c\u4e0d\u662f\u6298\u56db\u5206\u4e4b\u4e00\u6216\u8005\u6298\u66f4\u591a\u5462\uff1f"),(0,i.kt)("p",null,"\u5176\u5b9e\u5c31\u662f\u56e0\u4e3a\u65b9\u4fbf\uff0c\u7b80\u5355\uff0c\u4f46\u662f\u5982\u679c\u6211\u80fd\u5728\u4e8c\u5206\u67e5\u627e\u7684\u57fa\u7840\u4e0a\uff0c\u8ba9\u4e2d\u95f4\u7684mid\u70b9\uff0c\u5c3d\u53ef\u80fd\u9760\u8fd1\u60f3\u8981\u67e5\u627e\u7684\u5143\u7d20\uff0c\u90a3\u4e0d\u5c31\u80fd\u63d0\u9ad8\u67e5\u627e\u7684\u6548\u7387\u4e86\u5417\uff1f"),(0,i.kt)("p",null,"\u4e8c\u5206\u67e5\u627e\u4e2d\u67e5\u627e\u70b9\u8ba1\u7b97\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"\u3000\u3000mid=(low+high)/2, \u5373mid=low+1/2*(high-low);"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u67e5\u627e\u7684\u70b9\u6539\u8fdb\u4e3a\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,"\u3000\u3000mid=low+(key-a","[low]",")/(a","[high]","-a","[low]",")*(high-low)\uff0c"),(0,i.kt)("p",null,"\u8fd9\u6837\uff0c\u8ba9mid\u503c\u7684\u53d8\u5316\u66f4\u9760\u8fd1\u5173\u952e\u5b57key\uff0c\u8fd9\u6837\u4e5f\u5c31\u95f4\u63a5\u5730\u51cf\u5c11\u4e86\u6bd4\u8f83\u6b21\u6570\u3002"),(0,i.kt)("p",null,"\u3000\u3000\u57fa\u672c\u601d\u60f3\uff1a\u57fa\u4e8e\u4e8c\u5206\u67e5\u627e\u7b97\u6cd5\uff0c\u5c06\u67e5\u627e\u70b9\u7684\u9009\u62e9\u6539\u8fdb\u4e3a\u81ea\u9002\u5e94\u9009\u62e9\uff0c\u53ef\u4ee5\u63d0\u9ad8\u67e5\u627e\u6548\u7387\u3002\u5f53\u7136\uff0c\u5dee\u503c\u67e5\u627e\u4e5f\u5c5e\u4e8e\u6709\u5e8f\u67e5\u627e\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ec6\u8282\uff1a"),"\u5bf9\u4e8e\u8868\u957f\u8f83\u5927\uff0c\u800c\u5173\u952e\u5b57\u5206\u5e03\u53c8\u6bd4\u8f83\u5747\u5300\u7684\u67e5\u627e\u8868\u6765\u8bf4\uff0c\u63d2\u503c\u67e5\u627e\u7b97\u6cd5\u7684\u5e73\u5747\u6027\u80fd\u6bd4\u6298\u534a\u67e5\u627e\u8981\u597d\u7684\u591a\u3002\u53cd\u4e4b\uff0c\u6570\u7ec4\u4e2d\u5982\u679c\u5206\u5e03\u975e\u5e38\u4e0d\u5747\u5300\uff0c\u90a3\u4e48\u63d2\u503c\u67e5\u627e\u672a\u5fc5\u662f\u5f88\u5408\u9002\u7684\u9009\u62e9\u3002"),(0,i.kt)("p",null,"\u4ee3\u7801\u8ddf\u4e8c\u5206\u67e5\u627e\u7c7b\u4f3c\uff0c\u53ea\u8981\u4fee\u6539\u4e00\u4e0bmid\u7684\u8ba1\u7b97\u65b9\u5f0f\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"4-\u6590\u6ce2\u90a3\u5951\u67e5\u627e"},"4. \u6590\u6ce2\u90a3\u5951\u67e5\u627e"),(0,i.kt)("p",null,"\u5728\u4ecb\u7ecd\u6590\u6ce2\u90a3\u5951\u67e5\u627e\u7b97\u6cd5\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u4ecb\u7ecd\u4e00\u4e0b\u5f88\u5b83\u7d27\u5bc6\u76f8\u8fde\u5e76\u4e14\u5927\u5bb6\u90fd\u719f\u77e5\u7684\u4e00\u4e2a\u6982\u5ff5\u2014\u2014\u9ec4\u91d1\u5206\u5272\u3002"),(0,i.kt)("p",null,"\u3000\u3000\u9ec4\u91d1\u6bd4\u4f8b\u53c8\u79f0\u9ec4\u91d1\u5206\u5272\uff0c\u662f\u6307\u4e8b\u7269\u5404\u90e8\u5206\u95f4\u4e00\u5b9a\u7684\u6570\u5b66\u6bd4\u4f8b\u5173\u7cfb\uff0c\u5373\u5c06\u6574\u4f53\u4e00\u5206\u4e3a\u4e8c\uff0c\u8f83\u5927\u90e8\u5206\u4e0e\u8f83\u5c0f\u90e8\u5206\u4e4b\u6bd4\u7b49\u4e8e\u6574\u4f53\u4e0e\u8f83\u5927\u90e8\u5206\u4e4b\u6bd4\uff0c\u5176\u6bd4\u503c\u7ea6\u4e3a1:0.618\u62161.618:1\u3002"),(0,i.kt)("p",null,"\u3000\u30000.618\u88ab\u516c\u8ba4\u4e3a\u6700\u5177\u6709\u5ba1\u7f8e\u610f\u4e49\u7684\u6bd4\u4f8b\u6570\u5b57\uff0c\u8fd9\u4e2a\u6570\u503c\u7684\u4f5c\u7528\u4e0d\u4ec5\u4ec5\u4f53\u73b0\u5728\u8bf8\u5982\u7ed8\u753b\u3001\u96d5\u5851\u3001\u97f3\u4e50\u3001\u5efa\u7b51\u7b49\u827a\u672f\u9886\u57df\uff0c\u800c\u4e14\u5728\u7ba1\u7406\u3001\u5de5\u7a0b\u8bbe\u8ba1\u7b49\u65b9\u9762\u4e5f\u6709\u7740\u4e0d\u53ef\u5ffd\u89c6\u7684\u4f5c\u7528\u3002\u56e0\u6b64\u88ab\u79f0\u4e3a\u9ec4\u91d1\u5206\u5272\u3002"),(0,i.kt)("p",null,"\u3000\u3000\u5728\u6570\u5b66\u4e2d\u6709\u4e00\u4e2a\u975e\u5e38\u6709\u540d\u7684\u6570\u5b66\u89c4\u5f8b\uff1a\u6590\u6ce2\u90a3\u5951\u6570\u5217\uff1a1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89\u2026\u2026."),(0,i.kt)("p",null,"\uff08\u4ece\u7b2c\u4e09\u4e2a\u6570\u5f00\u59cb\uff0c\u540e\u8fb9\u6bcf\u4e00\u4e2a\u6570\u90fd\u662f\u524d\u4e24\u4e2a\u6570\u7684\u548c\uff09\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u6211\u4eec\u4f1a\u53d1\u73b0\uff0c\u968f\u7740\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u9012\u589e\uff0c\u524d\u540e\u4e24\u4e2a\u6570\u7684\u6bd4\u503c\u4f1a\u8d8a\u6765\u8d8a\u63a5\u8fd10.618\uff0c\u5229\u7528\u8fd9\u4e2a\u7279\u6027\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u9ec4\u91d1\u6bd4\u4f8b\u8fd0\u7528\u5230\u67e5\u627e\u6280\u672f\u4e2d\u3002"),(0,i.kt)("p",null,"\u57fa\u672c\u601d\u60f3\uff1a\u4e5f\u662f\u4e8c\u5206\u67e5\u627e\u7684\u4e00\u79cd\u63d0\u5347\u7b97\u6cd5\uff0c\u901a\u8fc7\u8fd0\u7528\u9ec4\u91d1\u6bd4\u4f8b\u7684\u6982\u5ff5\u5728\u6570\u5217\u4e2d\u9009\u62e9\u67e5\u627e\u70b9\u8fdb\u884c\u67e5\u627e\uff0c\u63d0\u9ad8\u67e5\u627e\u6548\u7387\u3002\u540c\u6837\u5730\uff0c\u6590\u6ce2\u90a3\u5951\u67e5\u627e\u4e5f\u5c5e\u4e8e\u4e00\u79cd\u6709\u5e8f\u67e5\u627e\u7b97\u6cd5\u3002"),(0,i.kt)("p",null,"\u6590\u6ce2\u90a3\u5951\u67e5\u627e\u4e5f\u662f\u5728\u4e8c\u5206\u67e5\u627e\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4f18\u5316\u4e2d\u95f4\u70b9mid\u7684\u8ba1\u7b97\u65b9\u5f0f\u5373\u53ef"),(0,i.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class FeiBoSearchDemo {\n    public static int maxSize = 20;\n\n    public static void main(String[] args) {\n        int[] arr = {1, 8, 10, 89, 1000, 1234};\n        System.out.println(search(arr, 1234));\n    }\n\n    public static int[] getFeiBo() {\n        int[] arr = new int[maxSize];\n        arr[0] = 1;\n        arr[1] = 1;\n        for (int i = 2; i < maxSize; i++) {\n            arr[i] = arr[i - 1] + arr[i - 2];\n        }\n        return arr;\n    }\n\n    public static int search(int[] arr, int key) {\n        int low = 0;\n        int high = arr.length - 1;\n        //\u8868\u793a\u6590\u6ce2\u90a3\u5951\u6570\u5206\u5272\u6570\u7684\u4e0b\u6807\u503c\n        int index = 0;\n        int mid = 0;\n        //\u8c03\u7528\u6590\u6ce2\u90a3\u5951\u6570\u5217\n        int[] f = getFeiBo();\n        //\u83b7\u53d6\u6590\u6ce2\u90a3\u5951\u5206\u5272\u6570\u503c\u7684\u4e0b\u6807\n        while (high > (f[index] - 1)) {\n            index++;\n        }\n        //\u56e0\u4e3af[k]\u503c\u53ef\u80fd\u5927\u4e8ea\u7684\u957f\u5ea6\uff0c\u56e0\u6b64\u9700\u8981\u4f7f\u7528Arrays\u5de5\u5177\u7c7b\uff0c\u6784\u9020\u4e00\u4e2a\u65b0\u6cd5\u6570\u7ec4\uff0c\u5e76\u6307\u5411temp[],\u4e0d\u8db3\u7684\u90e8\u5206\u4f1a\u4f7f\u75280\u8865\u9f50\n        int[] temp = Arrays.copyOf(arr, f[index]);\n        //\u5b9e\u9645\u9700\u8981\u4f7f\u7528arr\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u6570\u6765\u586b\u5145\u4e0d\u8db3\u7684\u90e8\u5206\n        for (int i = high + 1; i < temp.length; i++) {\n            temp[i] = arr[high];\n        }\n        //\u4f7f\u7528while\u5faa\u73af\u5904\u7406\uff0c\u627e\u5230key\u503c\n        while (low <= high) {\n            mid = low + f[index - 1] - 1;\n            if (key < temp[mid]) {//\u5411\u6570\u7ec4\u7684\u524d\u9762\u90e8\u5206\u8fdb\u884c\u67e5\u627e\n                high = mid - 1;\n                /*\n                  \u5bf9k--\u8fdb\u884c\u7406\u89e3\n                  1.\u5168\u90e8\u5143\u7d20=\u524d\u9762\u7684\u5143\u7d20+\u540e\u9762\u7684\u5143\u7d20\n                  2.f[k]=k[k-1]+f[k-2]\n                  \u56e0\u4e3a\u524d\u9762\u6709k-1\u4e2a\u5143\u7d20\u6ca1\u6240\u4ee5\u53ef\u4ee5\u7ee7\u7eed\u5206\u4e3af[k-1]=f[k-2]+f[k-3]\n                  \u5373\u5728f[k-1]\u7684\u524d\u9762\u7ee7\u7eed\u67e5\u627ek--\n                  \u5373\u4e0b\u6b21\u5faa\u73af,mid=f[k-1-1]-1\n                 */\n                index--;\n            } else if (key > temp[mid]) {//\u5411\u6570\u7ec4\u7684\u540e\u9762\u7684\u90e8\u5206\u8fdb\u884c\u67e5\u627e\n                low = mid + 1;\n                index -= 2;\n            } else {//\u627e\u5230\u4e86\n                //\u9700\u8981\u786e\u5b9a\u8fd4\u56de\u7684\u662f\u54ea\u4e2a\u4e0b\u6807\n                if (mid <= high) {\n                    return mid;\n                } else {\n                    return high;\n                }\n            }\n        }\n        return -1;\n    }\n}\n\n")),(0,i.kt)("h2",{id:"5-\u5206\u5757\u67e5\u627e"},"5. \u5206\u5757\u67e5\u627e"),(0,i.kt)("p",null,"\u5f53\u6570\u636e\u8868\u4e2d\u7684\u6570\u636e\u5143\u7d20\u5f88\u591a\u65f6\uff0c\u53ef\u4ee5\u91c7\u7528\u5206\u5757\u67e5\u627e\u3002"),(0,i.kt)("p",null,"\u6c72\u53d6\u4e86\u987a\u5e8f\u67e5\u627e\u548c\u6298\u534a\u67e5\u627e\u5404\u81ea\u7684\u4f18\u70b9\uff0c\u65e2\u6709\u52a8\u6001\u7ed3\u6784\uff0c\u53c8\u9002\u4e8e\u5feb\u901f\u67e5\u627e"),(0,i.kt)("p",null,"\u5206\u5757\u67e5\u627e\u9002\u7528\u4e8e\u6570\u636e\u8f83\u591a\uff0c\u4f46\u662f\u6570\u636e\u4e0d\u4f1a\u53d1\u751f\u53d8\u5316\u7684\u60c5\u51b5\uff0c\u5982\u679c\u9700\u8981\u4e00\u8fb9\u6dfb\u52a0\u4e00\u8fb9\u67e5\u627e\uff0c\u5efa\u8bae\u4f7f\u7528\u54c8\u5e0c\u67e5\u627e"),(0,i.kt)("p",null,"\u5206\u5757\u67e5\u627e\u7684\u8fc7\u7a0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u9700\u8981\u628a\u6570\u636e\u5206\u6210N\u591a\u5c0f\u5757\uff0c\u5757\u4e0e\u5757\u4e4b\u95f4\u4e0d\u80fd\u6709\u6570\u636e\u91cd\u590d\u7684\u4ea4\u96c6\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7ed9\u6bcf\u4e00\u5757\u521b\u5efa\u5bf9\u8c61\u5355\u72ec\u5b58\u50a8\u5230\u6570\u7ec4\u5f53\u4e2d"),(0,i.kt)("li",{parentName:"ol"},"\u67e5\u627e\u6570\u636e\u7684\u65f6\u5019\uff0c\u5148\u5728\u6570\u7ec4\u67e5\uff0c\u5f53\u524d\u6570\u636e\u5c5e\u4e8e\u54ea\u4e00\u5757"),(0,i.kt)("li",{parentName:"ol"},"\u518d\u5230\u8fd9\u4e00\u5757\u4e2d\u987a\u5e8f\u67e5\u627e")),(0,i.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.itheima.search;\n\npublic class A03_BlockSearchDemo {\n    public static void main(String[] args) {\n        /*\n            \u5206\u5757\u67e5\u627e\n            \u6838\u5fc3\u601d\u60f3\uff1a\n                \u5757\u5185\u65e0\u5e8f\uff0c\u5757\u95f4\u6709\u5e8f\n            \u5b9e\u73b0\u6b65\u9aa4\uff1a\n                1.\u521b\u5efa\u6570\u7ec4blockArr\u5b58\u653e\u6bcf\u4e00\u4e2a\u5757\u5bf9\u8c61\u7684\u4fe1\u606f\n                2.\u5148\u67e5\u627eblockArr\u786e\u5b9a\u8981\u67e5\u627e\u7684\u6570\u636e\u5c5e\u4e8e\u54ea\u4e00\u5757\n                3.\u518d\u5355\u72ec\u904d\u5386\u8fd9\u4e00\u5757\u6570\u636e\u5373\u53ef\n        */\n        int[] arr = {16, 5, 9, 12,21, 18,\n                     32, 23, 37, 26, 45, 34,\n                     50, 48, 61, 52, 73, 66};\n\n        //\u521b\u5efa\u4e09\u4e2a\u5757\u7684\u5bf9\u8c61\n        Block b1 = new Block(21,0,5);\n        Block b2 = new Block(45,6,11);\n        Block b3 = new Block(73,12,17);\n\n        //\u5b9a\u4e49\u6570\u7ec4\u7528\u6765\u7ba1\u7406\u4e09\u4e2a\u5757\u7684\u5bf9\u8c61\uff08\u7d22\u5f15\u8868\uff09\n        Block[] blockArr = {b1,b2,b3};\n\n        //\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\u7528\u6765\u8bb0\u5f55\u8981\u67e5\u627e\u7684\u5143\u7d20\n        int number = 37;\n\n        //\u8c03\u7528\u65b9\u6cd5\uff0c\u4f20\u9012\u7d22\u5f15\u8868\uff0c\u6570\u7ec4\uff0c\u8981\u67e5\u627e\u7684\u5143\u7d20\n        int index = getIndex(blockArr,arr,number);\n\n        //\u6253\u5370\u4e00\u4e0b\n        System.out.println(index);\n\n\n\n    }\n\n    //\u5229\u7528\u5206\u5757\u67e5\u627e\u7684\u539f\u7406\uff0c\u67e5\u8be2number\u7684\u7d22\u5f15\n    private static int getIndex(Block[] blockArr, int[] arr, int number) {\n        //1.\u786e\u5b9anumber\u662f\u5728\u90a3\u4e00\u5757\u5f53\u4e2d\n        int indexBlock = findIndexBlock(blockArr, number);\n\n        if(indexBlock == -1){\n            //\u8868\u793anumber\u4e0d\u5728\u6570\u7ec4\u5f53\u4e2d\n            return -1;\n        }\n\n        //2.\u83b7\u53d6\u8fd9\u4e00\u5757\u7684\u8d77\u59cb\u7d22\u5f15\u548c\u7ed3\u675f\u7d22\u5f15   --- 30\n        // Block b1 = new Block(21,0,5);   ----  0\n        // Block b2 = new Block(45,6,11);  ----  1\n        // Block b3 = new Block(73,12,17); ----  2\n        int startIndex = blockArr[indexBlock].getStartIndex();\n        int endIndex = blockArr[indexBlock].getEndIndex();\n\n        //3.\u904d\u5386\n        for (int i = startIndex; i <= endIndex; i++) {\n            if(arr[i] == number){\n                return i;\n            }\n        }\n        return -1;\n    }\n\n\n    //\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\uff0c\u7528\u6765\u786e\u5b9anumber\u5728\u54ea\u4e00\u5757\u5f53\u4e2d\n    public static int findIndexBlock(Block[] blockArr,int number){ //100\n\n\n        //\u4ece0\u7d22\u5f15\u5f00\u59cb\u904d\u5386blockArr\uff0c\u5982\u679cnumber\u5c0f\u4e8emax\uff0c\u90a3\u4e48\u5c31\u8868\u793anumber\u662f\u5728\u8fd9\u4e00\u5757\u5f53\u4e2d\u7684\n        for (int i = 0; i < blockArr.length; i++) {\n            if(number <= blockArr[i].getMax()){\n                return i;\n            }\n        }\n        return -1;\n    }\n\n\n\n}\n\nclass Block{\n    private int max;//\u6700\u5927\u503c\n    private int startIndex;//\u8d77\u59cb\u7d22\u5f15\n    private int endIndex;//\u7ed3\u675f\u7d22\u5f15\n\n\n    public Block() {\n    }\n\n    public Block(int max, int startIndex, int endIndex) {\n        this.max = max;\n        this.startIndex = startIndex;\n        this.endIndex = endIndex;\n    }\n\n    /**\n     * \u83b7\u53d6\n     * @return max\n     */\n    public int getMax() {\n        return max;\n    }\n\n    /**\n     * \u8bbe\u7f6e\n     * @param max\n     */\n    public void setMax(int max) {\n        this.max = max;\n    }\n\n    /**\n     * \u83b7\u53d6\n     * @return startIndex\n     */\n    public int getStartIndex() {\n        return startIndex;\n    }\n\n    /**\n     * \u8bbe\u7f6e\n     * @param startIndex\n     */\n    public void setStartIndex(int startIndex) {\n        this.startIndex = startIndex;\n    }\n\n    /**\n     * \u83b7\u53d6\n     * @return endIndex\n     */\n    public int getEndIndex() {\n        return endIndex;\n    }\n\n    /**\n     * \u8bbe\u7f6e\n     * @param endIndex\n     */\n    public void setEndIndex(int endIndex) {\n        this.endIndex = endIndex;\n    }\n\n    public String toString() {\n        return "Block{max = " + max + ", startIndex = " + startIndex + ", endIndex = " + endIndex + "}";\n    }\n}\n')),(0,i.kt)("h2",{id:"6-\u54c8\u5e0c\u67e5\u627e"},"6. \u54c8\u5e0c\u67e5\u627e"),(0,i.kt)("p",null,"\u54c8\u5e0c\u67e5\u627e\u662f\u5206\u5757\u67e5\u627e\u7684\u8fdb\u9636\u7248\uff0c\u9002\u7528\u4e8e\u6570\u636e\u4e00\u8fb9\u6dfb\u52a0\u4e00\u8fb9\u67e5\u627e\u7684\u60c5\u51b5\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u662f\u6570\u7ec4 + \u94fe\u8868\u7684\u7ed3\u5408\u4f53\u6216\u8005\u662f\u6570\u7ec4+\u94fe\u8868 + \u7ea2\u9ed1\u6811\u7684\u7ed3\u5408\u4f53"),(0,i.kt)("p",null,"\u5728\u8bfe\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u8ba9\u5927\u5bb6\u65b9\u4fbf\u7406\u89e3\uff0c\u6240\u4ee5\u89c4\u5b9a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u76840\u7d22\u5f15\u5904\u5b58\u50a81~100"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u76841\u7d22\u5f15\u5904\u5b58\u50a8101~200"),(0,i.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u76842\u7d22\u5f15\u5904\u5b58\u50a8201~300"),(0,i.kt)("li",{parentName:"ul"},"\u4ee5\u6b64\u7c7b\u63a8")),(0,i.kt)("p",null,"\u4f46\u662f\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u4e00\u822c\u4e0d\u4f1a\u91c7\u53d6\u8fd9\u79cd\u65b9\u5f0f\uff0c\u56e0\u4e3a\u8fd9\u79cd\u65b9\u5f0f\u5bb9\u6613\u5bfc\u81f4\u4e00\u5757\u533a\u57df\u6dfb\u52a0\u7684\u5143\u7d20\u8fc7\u591a\uff0c\u5bfc\u81f4\u6548\u7387\u504f\u4f4e\u3002"),(0,i.kt)("p",null,"\u66f4\u591a\u7684\u662f\u5148\u8ba1\u7b97\u51fa\u5f53\u524d\u6570\u636e\u7684\u54c8\u5e0c\u503c\uff0c\u7528\u54c8\u5e0c\u503c\u8ddf\u6570\u7ec4\u7684\u957f\u5ea6\u8fdb\u884c\u8ba1\u7b97\uff0c\u8ba1\u7b97\u51fa\u5e94\u5b58\u5165\u7684\u4f4d\u7f6e\uff0c\u518d\u6302\u5728\u6570\u7ec4\u7684\u540e\u9762\u5f62\u6210\u94fe\u8868\uff0c\u5982\u679c\u6302\u7684\u5143\u7d20\u592a\u591a\u800c\u4e14\u6570\u7ec4\u957f\u5ea6\u8fc7\u957f\uff0c\u6211\u4eec\u4e5f\u4f1a\u628a\u94fe\u8868\u8f6c\u5316\u4e3a\u7ea2\u9ed1\u6811\uff0c\u8fdb\u4e00\u6b65\u63d0\u9ad8\u6548\u7387\u3002"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"Snipaste",src:t(21652).Z})),(0,i.kt)("h2",{id:"7-\u6811\u8868\u67e5\u627e"},"7. \u6811\u8868\u67e5\u627e"),(0,i.kt)("p",null,"\u672c\u77e5\u8bc6\u70b9\u6d89\u53ca\u5230\u6570\u636e\u7ed3\u6784\uff1a\u6811\u3002"),(0,i.kt)("p",null,"\u5efa\u8bae\u5148\u770b\u4e00\u4e0b\u540e\u9762\u963f\u73ae\u8bb2\u89e3\u7684\u6570\u636e\u7ed3\u6784\uff0c\u518d\u56de\u5934\u7406\u89e3\u3002"),(0,i.kt)("p",null,"\u57fa\u672c\u601d\u60f3\uff1a\u4e8c\u53c9\u67e5\u627e\u6811\u662f\u5148\u5bf9\u5f85\u67e5\u627e\u7684\u6570\u636e\u8fdb\u884c\u751f\u6210\u6811\uff0c\u786e\u4fdd\u6811\u7684\u5de6\u5206\u652f\u7684\u503c\u5c0f\u4e8e\u53f3\u5206\u652f\u7684\u503c\uff0c\u7136\u540e\u5728\u5c31\u884c\u548c\u6bcf\u4e2a\u8282\u70b9\u7684\u7236\u8282\u70b9\u6bd4\u8f83\u5927\u5c0f\uff0c\u67e5\u627e\u6700\u9002\u5408\u7684\u8303\u56f4\u3002 \u8fd9\u4e2a\u7b97\u6cd5\u7684\u67e5\u627e\u6548\u7387\u5f88\u9ad8\uff0c\u4f46\u662f\u5982\u679c\u4f7f\u7528\u8fd9\u79cd\u67e5\u627e\u65b9\u6cd5\u8981\u9996\u5148\u521b\u5efa\u6811\u3002 "),(0,i.kt)("p",null,"\u3000\u3000\u4e8c\u53c9\u67e5\u627e\u6811\uff08BinarySearch Tree\uff0c\u4e5f\u53eb\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u6216\u79f0\u4e8c\u53c9\u6392\u5e8f\u6811Binary Sort Tree\uff09\uff0c\u5177\u6709\u4e0b\u5217\u6027\u8d28\u7684\u4e8c\u53c9\u6811\uff1a"),(0,i.kt)("p",null,"\u3000\u30001\uff09\u82e5\u4efb\u610f\u8282\u70b9\u5de6\u5b50\u6811\u4e0a\u6240\u6709\u7684\u6570\u636e\uff0c\u5747\u5c0f\u4e8e\u672c\u8eab\uff1b"),(0,i.kt)("p",null,"\u3000\u30002\uff09\u82e5\u4efb\u610f\u8282\u70b9\u53f3\u5b50\u6811\u4e0a\u6240\u6709\u7684\u6570\u636e\uff0c\u5747\u5927\u4e8e\u672c\u8eab\uff1b"),(0,i.kt)("p",null,"\u3000\u3000\u4e8c\u53c9\u67e5\u627e\u6811\u6027\u8d28\uff1a\u5bf9\u4e8c\u53c9\u67e5\u627e\u6811\u8fdb\u884c\u4e2d\u5e8f\u904d\u5386\uff0c\u5373\u53ef\u5f97\u5230\u6709\u5e8f\u7684\u6570\u5217\u3002"),(0,i.kt)("p",null,"\u200b        \u4e0d\u540c\u5f62\u6001\u7684\u4e8c\u53c9\u67e5\u627e\u6811\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null," ",(0,i.kt)("img",{alt:"shubiao",src:t(24634).Z})," "),(0,i.kt)("p",null,"\u3000\u3000\u57fa\u4e8e\u4e8c\u53c9\u67e5\u627e\u6811\u8fdb\u884c\u4f18\u5316\uff0c\u8fdb\u800c\u53ef\u4ee5\u5f97\u5230\u5176\u4ed6\u7684\u6811\u8868\u67e5\u627e\u7b97\u6cd5\uff0c\u5982\u5e73\u8861\u6811\u3001\u7ea2\u9ed1\u6811\u7b49\u9ad8\u6548\u7b97\u6cd5\u3002"),(0,i.kt)("p",null,"\u200b\t\u4e0d\u7ba1\u662f\u4e8c\u53c9\u67e5\u627e\u6811\uff0c\u8fd8\u662f\u5e73\u8861\u4e8c\u53c9\u6811\uff0c\u8fd8\u662f\u7ea2\u9ed1\u6811\uff0c\u67e5\u627e\u7684\u6027\u80fd\u90fd\u6bd4\u8f83\u9ad8"))}c.isMDXComponent=!0},21652:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/Snipaste-26841521d3375b334d0f154e83911e52.jpg"},24634:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/shubiao-c28378ab56da3a46cfc387d57a0f8a0b.jpg"}}]);