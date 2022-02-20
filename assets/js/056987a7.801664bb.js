"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1634],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8417:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={title:"[Cli] ESlint\u914d\u7f6e",sidebar_position:1},p=void 0,s={unversionedId:"Cli/ESLint",id:"Cli/ESLint",title:"[Cli] ESlint\u914d\u7f6e",description:"ESLint \u6700\u521d\u662f\u7531 Nicholas C. Zakas \u4e8e 2013 \u5e74 6 \u6708\u521b\u5efa\u7684\u5f00\u6e90\u9879\u76ee\u3002\u5b83\u7684\u76ee\u6807\u662f\u63d0\u4f9b\u4e00\u4e2a\u63d2\u4ef6\u5316\u7684 javascript \u4ee3\u7801\u68c0\u6d4b\u5de5\u5177\u3002",source:"@site/docs/Cli/ESLint.md",sourceDirName:"Cli",slug:"/Cli/ESLint",permalink:"/docs/Cli/ESLint",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Cli/ESLint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[Cli] ESlint\u914d\u7f6e",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[TS] ts-axios(25) - \u7f16\u8bd1\u53d1\u5e03",permalink:"/docs/TypeScript/ts-axios-25"},next:{title:"[Cli] Git\u6d88\u606f\u63d0\u4ea4\u89c4\u8303",permalink:"/docs/Cli/gitcommit"}},c=[{value:"\u6807\u51c6 ESLint \u89c4\u5219\u4e0b\u7684\u914d\u7f6e",id:"\u6807\u51c6-eslint-\u89c4\u5219\u4e0b\u7684\u914d\u7f6e",children:[{value:".eslintrc.js",id:"eslintrcjs",children:[],level:3}],level:2},{value:"Prettier",id:"prettier",children:[{value:"<strong><code>prettier</code> \u662f\u4ec0\u4e48\uff1f</strong>",id:"prettier-\u662f\u4ec0\u4e48",children:[],level:3},{value:"ESLint \u4e0e Prettier \u914d\u5408\u89e3\u51b3\u4ee3\u7801\u683c\u5f0f\u95ee\u9898",id:"eslint-\u4e0e-prettier-\u914d\u5408\u89e3\u51b3\u4ee3\u7801\u683c\u5f0f\u95ee\u9898",children:[],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ESLint \u6700\u521d\u662f\u7531 Nicholas C. Zakas \u4e8e 2013 \u5e74 6 \u6708\u521b\u5efa\u7684\u5f00\u6e90\u9879\u76ee\u3002\u5b83\u7684\u76ee\u6807\u662f\u63d0\u4f9b\u4e00\u4e2a\u63d2\u4ef6\u5316\u7684 javascript \u4ee3\u7801\u68c0\u6d4b\u5de5\u5177\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"?  Pick a linter / formatter config:\n   ESLint with error prevention only // \u4ec5\u5305\u542b\u9519\u8bef\u7684 ESLint\n   ESLint + Airbnb config // Airbnb \u7684 ESLint \u5ef6\u4f38\u89c4\u5219\n>  ESLint + Standard config // \u6807\u51c6\u7684 ESLint \u89c4\u5219\n")),(0,a.kt)("h2",{id:"\u6807\u51c6-eslint-\u89c4\u5219\u4e0b\u7684\u914d\u7f6e"},"\u6807\u51c6 ESLint \u89c4\u5219\u4e0b\u7684\u914d\u7f6e"),(0,a.kt)("h3",{id:"eslintrcjs"},".eslintrc.js"),(0,a.kt)("p",null,"\u4e2d\u6587\u914d\u7f6e\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://eslint.bootcss.com/docs/user-guide/configuring"},"https://eslint.bootcss.com/docs/user-guide/configuring")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="eslintrc.js\u6587\u4ef6"',title:'"eslintrc.js\u6587\u4ef6"'},'// ESLint \u914d\u7f6e\u6587\u4ef6\u9075\u5faa commonJS \u7684\u5bfc\u51fa\u89c4\u5219\uff0c\u6240\u5bfc\u51fa\u7684\u5bf9\u8c61\u5c31\u662f ESLint \u7684\u914d\u7f6e\u5bf9\u8c61\n// \u4e2d\u6587\u914d\u7f6e\u6587\u6863\uff1ahttps://eslint.bootcss.com/docs/user-guide/configuring\nmodule.exports = {\n  // \u8868\u793aeslintrc.js\u6587\u4ef6\u5f53\u524d\u6240\u5728\u6587\u4ef6\u5939\u5373\u4e3a\u6839\u76ee\u5f55\uff0cESLint \u89c4\u5219\u5c06\u88ab\u9650\u5236\u5230\u8be5\u76ee\u5f55\u4e0b\n  root: true,\n  // env \u8868\u793a\u542f\u7528 ESLint \u68c0\u6d4b\u7684\u73af\u5883\n  env: {\n    // \u5728 node \u73af\u5883\u4e0b\u542f\u52a8 ESLint \u68c0\u6d4b\n    node: true,\n  },\n  // ESLint \u4e2d\u57fa\u7840\u914d\u7f6e\u9700\u8981\u7ee7\u627f\u7684\u914d\u7f6e\n  extends: ["plugin:vue/vue3-essential", "@vue/standard"],\n  // \u89e3\u6790\u5668\n  parserOptions: {\n    parser: "babel-eslint",\n  },\n  // \u9700\u8981\u4fee\u6539\u7684\u542f\u7528\u89c4\u5219\u53ca\u5176\u5404\u81ea\u7684\u9519\u8bef\u7ea7\u522b\n  /**\n   * \u9519\u8bef\u7ea7\u522b\u5206\u4e3a\u4e09\u79cd\uff1a\n   * "off" \u6216 0 - \u5173\u95ed\u89c4\u5219\n   * "warn" \u6216 1 - \u5f00\u542f\u89c4\u5219\uff0c\u4f7f\u7528\u8b66\u544a\u7ea7\u522b\u7684\u9519\u8bef\uff1awarn (\u4e0d\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u9000\u51fa)\n   * "error" \u6216 2 - \u5f00\u542f\u89c4\u5219\uff0c\u4f7f\u7528\u9519\u8bef\u7ea7\u522b\u7684\u9519\u8bef\uff1aerror (\u5f53\u88ab\u89e6\u53d1\u7684\u65f6\u5019\uff0c\u7a0b\u5e8f\u4f1a\u9000\u51fa)\n   */\n  rules: {\n    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",\n    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",\n  },\n};\n')),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u914d\u7f6e eslintrc \u6587\u4ef6\u5c06\u5e2e\u52a9\u6211\u4eec\u8fdb\u884c\u4e00\u4e9b\u4ee3\u7801\u683c\u5f0f\u7684\u89c4\u5219\u914d\u7f6e",(0,a.kt)("br",{parentName:"p"}),"\n","\u4f46\u540c\u65f6\u4e5f\u5e26\u6765\u7f16\u7801\u590d\u6742\u5ea6\u4e0a\u5347\u7684\u95ee\u9898, \u6bd4\u5982\u8981\u65f6\u523b\u6ce8\u610f\u5355\u53cc\u5f15\u53f7\u7b49\u95ee\u9898",(0,a.kt)("br",{parentName:"p"}),"\n","\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4e00\u79cd\u65e2\u53ef\u4ee5\u4fdd\u8bc1 ESLint \u89c4\u5219\u6821\u9a8c, \u53c8\u80fd\u8ba9\u5f00\u53d1\u8005\u5728\u5f00\u53d1\u65f6\u65e0\u9700\u5173\u6ce8\u8fd9\u4e9b\u683c\u5f0f\u95ee\u9898\n\u4ece\u800c\u987a\u7545\u5f00\u53d1",(0,a.kt)("br",{parentName:"p"}),"\n","\u56e0\u6b64\u9700\u8981 Prettier"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"prettier"},"Prettier"),(0,a.kt)("h3",{id:"prettier-\u662f\u4ec0\u4e48"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"prettier")," \u662f\u4ec0\u4e48\uff1f")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177"),(0,a.kt)("li",{parentName:"ol"},"\u5f00\u7bb1\u5373\u7528"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u76f4\u63a5\u96c6\u6210\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"VSCode")," \u4e4b\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4fdd\u5b58\u65f6\uff0c\u8ba9\u4ee3\u7801\u76f4\u63a5\u7b26\u5408 ",(0,a.kt)("inlineCode",{parentName:"li"},"ESLint")," \u6807\u51c6\uff08\u9700\u8981\u901a\u8fc7\u4e00\u4e9b\u7b80\u5355\u914d\u7f6e\uff09")),(0,a.kt)("p",null,"\u90a3\u4e48\u8fd9\u4e9b\u7b80\u5355\u914d\u7f6e\u5177\u4f53\u6307\u7684\u662f\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("h3",{id:"eslint-\u4e0e-prettier-\u914d\u5408\u89e3\u51b3\u4ee3\u7801\u683c\u5f0f\u95ee\u9898"},"ESLint \u4e0e Prettier \u914d\u5408\u89e3\u51b3\u4ee3\u7801\u683c\u5f0f\u95ee\u9898"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"VSCode")," \u4e2d\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier")," \u63d2\u4ef6\uff08\u641c\u7d22 ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier"),"\uff09\uff0c\u8fd9\u4e2a\u63d2\u4ef6\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u5728\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier")," \u7684\u65f6\u5019\u83b7\u5f97\u63d0\u793a\n",(0,a.kt)("img",{alt:"prettier",src:n(4459).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u9879\u76ee\u4e2d\u65b0\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},".prettierrc")," \u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"perttier")," \u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u8be5\u6587\u4ef6\u4e2d\u5199\u5165\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // \u5728\u6bcf\u6bb5\u4ee3\u7801\u540e\u9762\u662f\u5426\u5c3e\u968f\u5206\u53f7\n  "semi": false,\n  // \u662f\u5426\u4f7f\u7528\u5355\u5f15\u53f7\u4ee3\u66ff\u53cc\u5f15\u53f7\n  "singleQuote": true,\n  // \u591a\u884c\u9017\u53f7\u5206\u5272\u7684\u8bed\u6cd5\u4e2d\uff0c\u6700\u540e\u4e00\u884c\u4e0d\u52a0\u9017\u53f7\n  // none \u8868\u793a\u4e0d\u6dfb\u52a0\n  "trailingComma": "none"\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"VSCode")," \u300a\u8bbe\u7f6e\u9762\u677f\u300b")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u8bbe\u7f6e\u4e2d\uff0c\u641c\u7d22 ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," \uff0c\u52fe\u9009 ",(0,a.kt)("inlineCode",{parentName:"p"},"Format On Save"),"\n",(0,a.kt)("img",{alt:"FormatOnSave",src:n(7166).Z})))),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c\u5373\u53ef\u5728 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"VSCode")," \u4fdd\u5b58\u65f6\uff0c\u81ea\u52a8\u683c\u5f0f\u5316\u4ee3\u7801\uff01")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f46\u662f\uff01")," \u53ea\u505a\u5230\u8fd9\u6837\u8fd8\u4e0d\u591f\uff01"),(0,a.kt)("blockquote",null,(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"VSCode \u800c\u8a00\uff0c\u9ed8\u8ba4\u4e00\u4e2a tab \u7b49\u4e8e 4 \u4e2a\u7a7a\u683c\uff0c\u800c ESLint \u5e0c\u671b\u4e00\u4e2a tab \u4e3a\u4e24\u4e2a\u7a7a\u683c\n",(0,a.kt)("img",{alt:"FormatOnSave",src:n(2447).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c VSCode \u5b89\u88c5\u4e86\u591a\u4e2a\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177\u7684\u8bdd \u9700\u8981\u624b\u52a8\u9009\u62e9\u9ed8\u8ba4\u683c\u5f0f\u5316\u7a0b\u5e8f")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ESLint \u548c prettier \u4e4b\u95f4\u7684\u51b2\u7a81\u95ee\u9898, \u6bd4\u5982\u5982\u4e0b\u7a7a\u683c\u95ee\u9898")))),(0,a.kt)("p",null,"\u6211\u4eec\u5c1d\u8bd5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Home.vue")," \u4e2d\u5199\u5165\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"created")," \u65b9\u6cd5\uff0c\u5199\u5165\u5b8c\u6210\u4e4b\u540e\uff0c\u6253\u5f00\u6211\u4eec\u7684\u63a7\u5236\u53f0\u6211\u4eec\u4f1a\u53d1\u73b0\uff0c\u6b64\u65f6\u4ee3\u7801\u629b\u51fa\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," \u7684\u9519\u8bef"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"blank",src:n(7758).Z})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u7684\u610f\u601d\u662f\u8bf4\uff1a",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"created")," \u8fd9\u4e2a\u65b9\u6cd5\u540d\u548c\u540e\u9762\u7684\u5c0f\u62ec\u53f7\u4e4b\u95f4\uff0c\u5e94\u8be5\u6709\u4e00\u4e2a\u7a7a\u683c\uff01")),(0,a.kt)("p",null,"\u4f46\u662f\u5f53\u6211\u4eec\u52a0\u5165\u4e86\u8fd9\u4e2a\u7a7a\u683c\u4e4b\u540e\uff0c\u53ea\u8981\u4e00\u4fdd\u5b58\u4ee3\u7801\uff0c\u5c31\u4f1a\u53d1\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier")," \u4f1a\u81ea\u52a8\u5e2e\u52a9\u6211\u4eec\u53bb\u9664\u6389\u8fd9\u4e2a\u7a7a\u683c\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u6b64\u65f6\u7684\u8fd9\u4e2a\u95ee\u9898\u5c31\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"prettier")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," \u7684\u51b2\u7a81\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u9488\u5bf9\u4e8e\u8fd9\u4e2a\u95ee\u9898\u6211\u4eec\u60f3\u8981\u89e3\u51b3\u4e5f\u975e\u5e38\u7b80\u5355\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," \u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"rules")," \u89c4\u5219\u4e0b\uff0c\u65b0\u589e\u4e00\u6761\u89c4\u5219"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},"// \u5173\u95ed\u300a\u65b9\u6cd5\u540d\u540e\u589e\u52a0\u7a7a\u683c\u300b\u7684\u89c4\u5219\n'space-before-function-paren': 'off'\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8be5\u89c4\u5219\u8868\u793a\u5173\u95ed\u300a\u65b9\u6cd5\u540d\u540e\u589e\u52a0\u7a7a\u683c\u300b\u7684\u89c4\u5219")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u542f\u9879\u76ee"))),(0,a.kt)("p",null,"\u81f3\u6b64\u6211\u4eec\u6574\u4e2a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"perttier")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," \u7684\u914d\u5408\u4f7f\u7528\u5c31\u7b97\u662f\u5168\u90e8\u5b8c\u6210\u4e86\u3002"),(0,a.kt)("p",null,"\u5728\u4e4b\u540e\u6211\u4eec\u5199\u4ee3\u7801\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ea\u9700\u8981\u4fdd\u5b58\u4ee3\u7801\uff0c\u90a3\u4e48 ",(0,a.kt)("inlineCode",{parentName:"p"},"perttier")," \u5c31\u4f1a\u5e2e\u52a9\u6211\u4eec\u81ea\u52a8\u683c\u5f0f\u5316\u4ee3\u7801\uff0c\u4f7f\u5176\u7b26\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," \u7684\u6821\u9a8c\u89c4\u5219\u3002\u800c\u65e0\u9700\u6211\u4eec\u624b\u52a8\u8fdb\u884c\u66f4\u6539\u4e86\u3002"))}d.isMDXComponent=!0},4459:function(e,t,n){t.Z=n.p+"assets/images/image-20210904195026475-9c19e549e2bda404b17737b691d1e68a.png"},7166:function(e,t,n){t.Z=n.p+"assets/images/image-20210904200738067-130e6777d650c1db319739a4bd67b1cf.png"},7758:function(e,t,n){t.Z=n.p+"assets/images/image-20210904201057594-2ec88aa9173f59e838de39f8f70d5cfe.png"},2447:function(e,t,n){t.Z=n.p+"assets/images/tabsize-0e7fd9fc39572cb563fa0687a70eb170.JPG"}}]);