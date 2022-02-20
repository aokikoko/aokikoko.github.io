"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1634],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=i,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||l;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return k}});var r=n(7462),i=n(3366),l=(n(7294),n(3905)),a=["components"],o={title:"[Cli] \u7f16\u7a0b\u89c4\u8303\u4e0eESlint",sidebar_position:1},p=void 0,s={unversionedId:"Cli/ESLint",id:"Cli/ESLint",title:"[Cli] \u7f16\u7a0b\u89c4\u8303\u4e0eESlint",description:"\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(1)",source:"@site/docs/Cli/ESLint.md",sourceDirName:"Cli",slug:"/Cli/ESLint",permalink:"/docs/Cli/ESLint",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Cli/ESLint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[Cli] \u7f16\u7a0b\u89c4\u8303\u4e0eESlint",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(25) - \u7f16\u8bd1\u53d1\u5e03",permalink:"/docs/TypeScript/ts-axios-25"},next:{title:"[Cli] Prettier\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u6f02\u4eae",permalink:"/docs/Cli/prettier"}},u=[{value:"\u524d\u8a00-\u4e3a\u4f55\u9700\u8981\u7f16\u7a0b\u89c4\u8303",id:"\u524d\u8a00-\u4e3a\u4f55\u9700\u8981\u7f16\u7a0b\u89c4\u8303",children:[],level:2},{value:"ESlint \u7b80\u4ecb",id:"eslint-\u7b80\u4ecb",children:[],level:2},{value:"\u6807\u51c6 ESLint \u89c4\u5219\u4e0b\u7684\u914d\u7f6e",id:"\u6807\u51c6-eslint-\u89c4\u5219\u4e0b\u7684\u914d\u7f6e",children:[{value:".eslintrc.js",id:"eslintrcjs",children:[],level:3},{value:"\u5f15\u51fa Prettier",id:"\u5f15\u51fa-prettier",children:[],level:3}],level:2}],c={toc:u};function k(e){var t=e.components,o=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(1)")),(0,l.kt)("h2",{id:"\u524d\u8a00-\u4e3a\u4f55\u9700\u8981\u7f16\u7a0b\u89c4\u8303"},"\u524d\u8a00-\u4e3a\u4f55\u9700\u8981\u7f16\u7a0b\u89c4\u8303"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5de5\u6b32\u5584\u5176\u4e8b\uff0c\u5fc5\u5148\u5229\u5176\u5668")),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u5927\u578b\u7684\u4f01\u4e1a\u7ea7\u9879\u76ee\u800c\u8a00\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u90fd\u662f\u9700\u8981\u4e00\u4e2a\u56e2\u961f\u6765\u8fdb\u884c\u5f00\u53d1\u7684\u3002\u800c\u53c8\u56e0\u4e3a\u56e2\u961f\u4eba\u5458\u5bf9\u6280\u672f\u7406\u89e3\u4e0a\u7684\u53c2\u5dee\u4e0d\u9f50\uff0c\u6240\u4ee5\u5c31\u4f1a\u5bfc\u81f4\u51fa\u73b0\u4e00\u79cd\u60c5\u51b5\uff0c\u90a3\u5c31\u662f\u300a",(0,l.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u9879\u76ee\u65e0\u6cd5\u5177\u5907\u7edf\u4e00\u7684\u7f16\u7a0b\u89c4\u8303\uff0c\u5bfc\u81f4\u9879\u76ee\u7684\u4ee3\u7801\u50cf\u591a\u4e2a\u4e0d\u540c\u6750\u8d28\u7684\u8865\u4e01\u62fc\u63a5\u8d77\u6765\u4e00\u6837"),"\u300b"),(0,l.kt)("p",null,"\u8bbe\u60f3\u4e00\u4e0b\uff0c\u6709\u4e00\u4e2a\u56e2\u961f\u8fdb\u884c\u5f00\u53d1\uff0c\u6ca1\u6709\u5177\u5907\u7edf\u4e00\u7684\u4ee3\u7801\u6807\u51c6\uff0c\u751f\u6210\u4e86\u4e0b\u9762\u7684\u4ee3\u7801\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3018).Z})),(0,l.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u6ca1\u6709\u95ee\u9898\uff0c\u4f46\u662f\u6574\u4f53\u7684\u4ee3\u7801\u7ed3\u6784\u5374\u975e\u5e38\u7684\u96be\u770b\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6709\u7684\u5730\u65b9\u6709\u7a7a\u683c\u8fdb\u884c\u5206\u5272\uff0c\u6709\u7684\u5730\u65b9\u5374\u6ca1\u6709"),(0,l.kt)("p",{parentName:"blockquote"},"\u6709\u7684\u5730\u65b9\u662f\u5355\u5f15\u53f7\uff0c\u6709\u7684\u5730\u65b9\u5374\u662f\u53cc\u5f15\u53f7"),(0,l.kt)("p",{parentName:"blockquote"},"\u6709\u7684\u5730\u65b9\u6709\u5206\u53f7\uff0c\u6709\u7684\u5730\u65b9\u6ca1\u6709\u5206\u53f7"),(0,l.kt)("p",{parentName:"blockquote"},"....")),(0,l.kt)("p",null,"\u8fd9\u6837\u7684\u9879\u76ee\u867d\u7136\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\uff0c\u4f46\u662f\u5982\u679c\u628a\u5b83\u653e\u5230\u5546\u4e1a\u9879\u76ee\u4e2d\uff0c\u786e\u5b9e ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53ca\u683c")," \u7684\uff0c\u5b83\u4f1a\u88ab\u8ba4\u4e3a\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u7ef4\u62a4\u3001\u4e0d\u53ef\u6269\u5c55\u7684\u4ee3\u7801\u5185\u5bb9")),(0,l.kt)("p",null,"\u90a3\u4e48\u6240\u8c13\u7684\u6807\u51c6\u7684\u4ee3\u7801\u7ed3\u6784\u5e94\u8be5\u662f\u4ec0\u4e48\u6837\u5b50\u7684\u5462\uff1f"),(0,l.kt)("p",null,"\u6211\u4eec\u628a\u4e0a\u9762\u7684\u4ee3\u7801\u8fdb\u884c\u4e00\u4e0b\u4fee\u6b63\uff0c\u505a\u4e00\u4e2a\u5bf9\u6bd4\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4810).Z})),(0,l.kt)("p",null,"\u4fee\u6539\u4e4b\u540e\u7684\u4ee3\u7801\u5177\u5907\u4e86\u7edf\u4e00\u7684\u89c4\u8303\u4e4b\u540e\uff0c\u770b\u8d77\u6765\u5c31\u8212\u670d\u591a\u4e86\uff01"),(0,l.kt)("p",null,"\u5e76\u4e14\u4ee5\u4e0a\u6240\u5217\u4e3e\u51fa\u6765\u7684\u53ea\u662f\u300a\u7f16\u7a0b\u89c4\u8303\u300b\u4e2d\u7684\u4e00\u5c0f\u90e8\u5206\u5185\u5bb9\uff01"),(0,l.kt)("p",null,"\u4f46\u662f\u6307\u671b\u4eba\u4e3b\u52a8\u7684\u9075\u5b88\u8fd9\u4e9b\u89c4\u8303\u4e0d\u592a\u73b0\u5b9e"),(0,l.kt)("p",null,"\u90a3\u600e\u4e48\u529e\u5462\uff1f"),(0,l.kt)("p",null,"\u90a3\u4e48\u53ef\u4e0d\u53ef\u4ee5\u8ba9\u7a0b\u5e8f\u81ea\u52a8\u5904\u7406\u89c4\u8303\u5316\u7684\u5185\u5bb9\u5462\uff1f"),(0,l.kt)("p",null,"\u7b54\u6848\u662f\uff1a\u53ef\u4ee5\u7684\uff01"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u4e5f\u662f\u6240\u9700\u8981\u8bb2\u89e3\u7684\u91cd\u70b9\u5185\u5bb9\uff01"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u4f1a\u8bb2\u89e3\uff0c\u5982\u4f55\u81ea\u52a8\u5316\u7684\u5bf9\u4ee3\u7801\u8fdb\u884c\u89c4\u8303\uff0c\u5176\u4e2d\u4e3b\u8981\u5305\u62ec\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7f16\u7801\u89c4\u8303"),(0,l.kt)("li",{parentName:"ol"},"git \u89c4\u8303")),(0,l.kt)("h2",{id:"eslint-\u7b80\u4ecb"},"ESlint \u7b80\u4ecb"),(0,l.kt)("p",null,"\u4e00\u822c\u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\uff0c\u811a\u624b\u67b6\u5de5\u5177\u5df2\u7ecf\u5e2e\u52a9\u6211\u4eec\u5b89\u88c5\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u4ee3\u7801\u68c0\u6d4b\u5de5\u5177\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u8457\u540d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"2013\u5e746\u6708")," \u521b\u5efa\u7684\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u5b83\u7684\u76ee\u6807\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u6709\u4e00\u4e2a\uff0c\u90a3\u5c31\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u4e00\u4e2a\u63d2\u4ef6\u5316\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"javascript")," \u4ee3\u7801\u68c0\u6d4b\u5de5\u5177")," \uff0c\u8bf4\u767d\u4e86\u5c31\u662f\u505a ",(0,l.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u683c\u5f0f\u68c0\u6d4b\u4f7f\u7528\u7684")),(0,l.kt)("p",null,"\u5728\u5f53\u524d\u7684\u9879\u76ee\u4e2d\uff0c\u5305\u542b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," \u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u968f\u7740\u5927\u5bb6\u5bf9\u4ee3\u7801\u683c\u5f0f\u7684\u89c4\u8303\u6027\u8d8a\u6765\u8d8a\u91cd\u89c6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \u4e5f\u9010\u6e10\u88ab\u66f4\u591a\u7684\u4eba\u6240\u63a5\u6536\uff0c\u540c\u65f6\u4e5f\u6709\u5f88\u591a\u5927\u5382\u5728\u539f\u6709\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," \u89c4\u5219\u57fa\u7840\u4e4b\u4e0a\u8fdb\u884c\u4e86\u4e00\u4e9b\u5ef6\u4f38\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u6709\u7684\u811a\u624b\u67b6\u5728\u624b\u52a8\u914d\u7f6e\u521b\u5efa\u9879\u76ee\u4f1a\u6709\u8fd9\u6837\u7684\u9009\u62e9:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"?  Pick a linter / formatter config:\n   ESLint with error prevention only // \u4ec5\u5305\u542b\u9519\u8bef\u7684 ESLint\n   ESLint + Airbnb config // Airbnb \u7684 ESLint \u5ef6\u4f38\u89c4\u5219\n>  ESLint + Standard config // \u6807\u51c6\u7684 ESLint \u89c4\u5219\n")),(0,l.kt)("p",null,"\u5047\u8bbe\u9009\u62e9\u4e86 ",(0,l.kt)("strong",{parentName:"p"},"\u6807\u51c6\u7684 ESLint \u89c4\u5219")," \uff0c\u90a3\u4e48\u63a5\u4e0b\u6765\u5c31\u5728\u8be5\u89c4\u5219\u4e4b\u4e0b\uff0c\u770b\u4e00\u770b ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u5b83\u7684\u4e00\u4e9b\u914d\u7f6e\u90fd\u6709\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u6253\u5f00\u9879\u76ee\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," \u6587\u4ef6"),(0,l.kt)("h2",{id:"\u6807\u51c6-eslint-\u89c4\u5219\u4e0b\u7684\u914d\u7f6e"},"\u6807\u51c6 ESLint \u89c4\u5219\u4e0b\u7684\u914d\u7f6e"),(0,l.kt)("h3",{id:"eslintrcjs"},".eslintrc.js"),(0,l.kt)("p",null,"\u4e2d\u6587\u914d\u7f6e\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://eslint.bootcss.com/docs/user-guide/configuring"},"https://eslint.bootcss.com/docs/user-guide/configuring")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="eslintrc.js\u6587\u4ef6"',title:'"eslintrc.js\u6587\u4ef6"'},'// ESLint \u914d\u7f6e\u6587\u4ef6\u9075\u5faa commonJS \u7684\u5bfc\u51fa\u89c4\u5219\uff0c\u6240\u5bfc\u51fa\u7684\u5bf9\u8c61\u5c31\u662f ESLint \u7684\u914d\u7f6e\u5bf9\u8c61\n// \u4e2d\u6587\u914d\u7f6e\u6587\u6863\uff1ahttps://eslint.bootcss.com/docs/user-guide/configuring\nmodule.exports = {\n  // \u8868\u793aeslintrc.js\u6587\u4ef6\u5f53\u524d\u6240\u5728\u6587\u4ef6\u5939\u5373\u4e3a\u6839\u76ee\u5f55\uff0cESLint \u89c4\u5219\u5c06\u88ab\u9650\u5236\u5230\u8be5\u76ee\u5f55\u4e0b\n  root: true,\n  // env \u8868\u793a\u542f\u7528 ESLint \u68c0\u6d4b\u7684\u73af\u5883\n  env: {\n    // \u5728 node \u73af\u5883\u4e0b\u542f\u52a8 ESLint \u68c0\u6d4b\n    node: true,\n  },\n  // ESLint \u4e2d\u57fa\u7840\u914d\u7f6e\u9700\u8981\u7ee7\u627f\u7684\u914d\u7f6e\n  extends: ["plugin:vue/vue3-essential", "@vue/standard"],\n  // \u89e3\u6790\u5668\n  parserOptions: {\n    parser: "babel-eslint",\n  },\n  // \u9700\u8981\u4fee\u6539\u7684\u542f\u7528\u89c4\u5219\u53ca\u5176\u5404\u81ea\u7684\u9519\u8bef\u7ea7\u522b\n  /**\n   * \u9519\u8bef\u7ea7\u522b\u5206\u4e3a\u4e09\u79cd\uff1a\n   * "off" \u6216 0 - \u5173\u95ed\u89c4\u5219\n   * "warn" \u6216 1 - \u5f00\u542f\u89c4\u5219\uff0c\u4f7f\u7528\u8b66\u544a\u7ea7\u522b\u7684\u9519\u8bef\uff1awarn (\u4e0d\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u9000\u51fa)\n   * "error" \u6216 2 - \u5f00\u542f\u89c4\u5219\uff0c\u4f7f\u7528\u9519\u8bef\u7ea7\u522b\u7684\u9519\u8bef\uff1aerror (\u5f53\u88ab\u89e6\u53d1\u7684\u65f6\u5019\uff0c\u7a0b\u5e8f\u4f1a\u9000\u51fa)\n   */\n  rules: {\n    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",\n    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",\n  },\n};\n')),(0,l.kt)("p",null,"\u90a3\u4e48\u5230\u8fd9\u91cc\u5df2\u7ecf\u5927\u81f4\u7684\u4e86\u89e3\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," \u6587\u4ef6\uff0c\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u5982\u679c\u6211\u4eec\u51fa\u73b0\u4e0d\u7b26\u5408\u89c4\u8303\u7684\u4ee3\u7801\u683c\u5f0f\u65f6\uff0c\u90a3\u4e48\u5c31\u4f1a\u5f97\u5230\u4e00\u4e2a\u5bf9\u5e94\u7684\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u628a ",(0,l.kt)("inlineCode",{parentName:"p"},"Home.vue")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," \u5c5e\u6027\u503c\uff0c\u7531\u5355\u5f15\u53f7\u6539\u4e3a\u53cc\u5f15\u53f7")),(0,l.kt)("p",null,"\u6b64\u65f6\uff0c\u53ea\u8981\u6211\u4eec\u4e00\u4fdd\u5b58\u4ee3\u7801\uff0c\u90a3\u4e48\u5c31\u4f1a\u5f97\u5230\u4e00\u4e2a\u5bf9\u5e94\u7684\u9519\u8bef"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4453).Z})),(0,l.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u8868\u793a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6b64\u65f6\u6211\u4eec\u89e6\u53d1\u4e86\u4e00\u4e2a \u300a\u9519\u8bef\u7ea7\u522b\u7684\u9519\u8bef\u300b"),(0,l.kt)("li",{parentName:"ol"},"\u89e6\u53d1\u8be5\u9519\u8bef\u7684\u4f4d\u7f6e\u662f \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"Home.vue")," \u7684\u7b2c 13 \u884c \u7b2c\u4e5d\u5217 \u4e2d"),(0,l.kt)("li",{parentName:"ol"},"\u9519\u8bef\u63cf\u8ff0\u4e3a\uff1a\u5b57\u7b26\u4e32\u5fc5\u987b\u4f7f\u7528\u5355\u5f15\u53f7"),(0,l.kt)("li",{parentName:"ol"},"\u9519\u8bef\u89c4\u5219\u4e3a\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"quotes"))),(0,l.kt)("p",null,"\u90a3\u4e48\u60f3\u8981\u89e3\u51b3\u8fd9\u4e2a\u9519\u8bef\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6309\u7167 ",(0,l.kt)("inlineCode",{parentName:"li"},"ESLint")," \u7684\u8981\u6c42\u4fee\u6539\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"ESLint")," \u7684\u9a8c\u8bc1\u89c4\u5219")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6309\u7167 ",(0,l.kt)("inlineCode",{parentName:"strong"},"ESLint")," \u7684\u8981\u6c42\u4fee\u6539\u4ee3\u7801\uff1a")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Home.vue")," \u7684\u7b2c 13 \u884c\u4e2d\u628a\u53cc\u5f15\u53f7\u6539\u4e3a\u5355\u5f15\u53f7")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"strong"},"ESLint")," \u7684\u9a8c\u8bc1\u89c4\u5219\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," \u6587\u4ef6\u4e2d\uff0c\u65b0\u589e\u4e00\u6761\u9a8c\u8bc1\u89c4\u5219"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"quotes": "error" // \u9ed8\u8ba4\n"quotes": "warn" // \u4fee\u6539\u4e3a\u8b66\u544a\n"quotes": "off" // \u4fee\u6539\u4e0d\u6821\u9a8c\n')))),(0,l.kt)("h3",{id:"\u5f15\u51fa-prettier"},"\u5f15\u51fa Prettier"),(0,l.kt)("p",null,"\u90a3\u4e48\u901a\u8fc7\u8fd9\u4e00\u90e8\u5206\uff0c\u6211\u4eec\u4e86\u89e3\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"vue-cli")," \u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"vue3")," \u9879\u76ee\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Standard config")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u914d\u7f6e\uff0c\u5e76\u4e14\u77e5\u9053\u4e86\u5982\u4f55\u89e3\u51b3 ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u62a5\u9519\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u4e00\u4e2a\u56e2\u961f\u4e2d\uff0c\u4eba\u5458\u7684\u6c34\u5e73\u9ad8\u4f4e\u4e0d\u9f50\uff0c\u5927\u91cf\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u89c4\u5219\u6821\u9a8c\uff0c\u4f1a\u8ba9\u5f88\u591a\u7684\u5f00\u53d1\u8005\u5934\u75bc\u4e0d\u5df2\uff0c\u4ece\u800c\u5927\u5927\u5f71\u54cd\u4e86\u9879\u76ee\u7684\u5f00\u53d1\u8fdb\u5ea6\u3002"),(0,l.kt)("p",null,"\u8bd5\u60f3\u4e00\u4e0b\uff0c\u5728\u4f60\u53bb\u5b8c\u6210\u9879\u76ee\u4ee3\u7801\u7684\u540c\u65f6\uff0c\u8fd8\u9700\u8981\u65f6\u65f6\u523b\u523b\u6ce8\u610f\u4ee3\u7801\u7684\u683c\u5f0f\u95ee\u9898\uff0c\u8fd9\u5c06\u662f\u4e00\u4ef6\u591a\u4e48\u75db\u82e6\u7684\u4e8b\u60c5\uff01"),(0,l.kt)("p",null,"\u90a3\u4e48\u6709\u6ca1\u6709\u4ec0\u4e48\u529e\u6cd5\uff0c\u65e2\u53ef\u4ee5\u4fdd\u8bc1 ",(0,l.kt)("inlineCode",{parentName:"p"},"ESLint")," \u89c4\u5219\u6821\u9a8c\uff0c\u53c8\u53ef\u4ee5\u89e3\u51b3\u4e25\u82db\u7684\u683c\u5f0f\u89c4\u5219\u5bfc\u81f4\u7684\u5f71\u54cd\u9879\u76ee\u8fdb\u5ea6\u7684\u95ee\u9898\u5462\uff1f"),(0,l.kt)("p",null,"\u90a3\u4e48\u5c31\u9700\u8981",(0,l.kt)("a",{parentName:"p",href:"/docs/Cli/prettier"},(0,l.kt)("inlineCode",{parentName:"a"},"Prettier"))," \uff0c\u8ba9\u4f60\u7684\u4ee3\u7801\u53d8\u5f97\u66f4\u6f02\u4eae\uff01"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u914d\u7f6e eslintrc \u6587\u4ef6\u5c06\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u4ee3\u7801\u683c\u5f0f\u7684\u89c4\u5219\u914d\u7f6e",(0,l.kt)("br",{parentName:"p"}),"\n","\u4f46\u540c\u65f6\u4e5f\u5e26\u6765\u7f16\u7801\u590d\u6742\u5ea6\u4e0a\u5347\u7684\u95ee\u9898, \u6bd4\u5982\u8981\u65f6\u523b\u6ce8\u610f\u5355\u53cc\u5f15\u53f7\u7b49\u95ee\u9898",(0,l.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65e2\u53ef\u4ee5\u4fdd\u8bc1 ESLint \u89c4\u5219\u6821\u9a8c, \u53c8\u80fd\u8ba9\u5f00\u53d1\u8005\u5728\u5f00\u53d1\u65f6\u65e0\u9700\u5173\u6ce8\u8fd9\u4e9b\u683c\u5f0f\u95ee\u9898\n\u4ece\u800c\u987a\u7545\u5f00\u53d1",(0,l.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\u9700\u8981 Prettier"))))}k.isMDXComponent=!0},3018:function(e,t,n){t.Z=n.p+"assets/images/image-20210903190021029-d597b4e27b2fe922c744de21d41be8ce.png"},4810:function(e,t,n){t.Z=n.p+"assets/images/image-20210903193913261-b420deb4b1930a2edc62e3f9497cbbb5.png"},4453:function(e,t,n){t.Z=n.p+"assets/images/image-20210904185336318-aefc69a44daf88d960ced986d7730913.png"}}]);