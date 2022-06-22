"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),m=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(n),k=a,h=d["".concat(o,".").concat(k)]||d[k]||c[k]||r;return n?i.createElement(h,l(l({ref:t},s),{},{components:n})):i.createElement(h,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86267:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var i=n(87462),a=(n(67294),n(3905));const r={title:"[Cli] Git\u63d0\u4ea4\u89c4\u8303\u4e4b\u4ee3\u7801\u63d0\u4ea4",sidebar_position:4},l=void 0,p={unversionedId:"Cli/precommit",id:"Cli/precommit",title:"[Cli] Git\u63d0\u4ea4\u89c4\u8303\u4e4b\u4ee3\u7801\u63d0\u4ea4",description:"\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(4)",source:"@site/docs/Cli/precommit.md",sourceDirName:"Cli",slug:"/Cli/precommit",permalink:"/docs/Cli/precommit",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Cli/precommit.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"[Cli] Git\u63d0\u4ea4\u89c4\u8303\u4e4b\u4ee3\u7801\u63d0\u4ea4",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"[Cli] Git\u63d0\u4ea4\u89c4\u8303\u4e4b\u6d88\u606f\u63d0\u4ea4",permalink:"/docs/Cli/gitcommit"},next:{title:"[Cli] npm\u5347\u7ea7\u7248\u672c\u540e\u4ecd\u7136\u663e\u793a\u4e3a\u539f\u7248\u672c",permalink:"/docs/Cli/npm"}},o=[{value:"\u901a\u8fc7 pre-commit \u68c0\u6d4b\u63d0\u4ea4\u65f6\u4ee3\u7801\u89c4\u8303",id:"precommit",children:[],level:2},{value:"\u901a\u8fc7 lint-staged \u81ea\u52a8\u4fee\u590d\u683c\u5f0f\u9519\u8bef",id:"\u901a\u8fc7-lint-staged-\u81ea\u52a8\u4fee\u590d\u683c\u5f0f\u9519\u8bef",children:[{value:"lint-staged \u4f5c\u7528",id:"lint-staged-\u4f5c\u7528",children:[],level:3},{value:"\u4f7f\u7528 lint-staged",id:"\u4f7f\u7528-lint-staged",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[{value:"<strong>\u4ee3\u7801\u683c\u5f0f\u89c4\u8303\uff1a</strong>",id:"\u4ee3\u7801\u683c\u5f0f\u89c4\u8303",children:[],level:3},{value:"<strong><code>git</code> \u63d0\u4ea4\u89c4\u8303\uff1a</strong>",id:"git-\u63d0\u4ea4\u89c4\u8303",children:[],level:3}],level:2}],m={toc:o};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(4)")),(0,a.kt)("h2",{id:"precommit"},"\u901a\u8fc7 pre-commit \u68c0\u6d4b\u63d0\u4ea4\u65f6\u4ee3\u7801\u89c4\u8303"),(0,a.kt)("p",null,"\u4e4b\u524d\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://phero.live/docs/Cli/gitcommit#%E4%BD%BF%E7%94%A8-husky--commitlint-%E6%A3%80%E6%9F%A5%E6%8F%90%E4%BA%A4%E6%8F%8F%E8%BF%B0%E6%98%AF%E5%90%A6%E7%AC%A6%E5%90%88%E8%A7%84%E8%8C%83%E8%A6%81%E6%B1%82"},"ESLint \u4e0e Prettier \u914d\u5408\u89e3\u51b3\u4ee3\u7801\u683c\u5f0f\u95ee\u9898"),", \u4e86\u89e3\u4e86\u5982\u4f55\u5904\u7406 ",(0,a.kt)("strong",{parentName:"p"},"\u672c\u5730\uff01\u4ee3\u7801\u683c\u5f0f\u95ee\u9898\u3002")),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u7684\u4e00\u4e2a\u683c\u5f0f\u5904\u7406\u95ee\u9898\uff0c\u4ed6\u53ea\u80fd\u591f\u5728\u672c\u5730\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u4e14\u6211\u4eec\u8fd8\u9700\u8981 ",(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"strong"},"VSCode")," \u4e2d\u914d\u7f6e\u81ea\u52a8\u4fdd\u5b58")," \u624d\u53ef\u4ee5\u3002\u90a3\u4e48\u8fd9\u6837\u5c31\u4f1a\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u8981\u662f\u6709\u4eba\u5fd8\u8bb0\u914d\u7f6e\u8fd9\u4e2a\u4e1c\u897f\u4e86\u600e\u4e48\u529e\u5462\uff1f\u4ed6\u628a\u4ee3\u7801\u5199\u7684\u4e71\u4e03\u516b\u7cdf\u7684\u76f4\u63a5\u5c31\u63d0\u4ea4\u4e86\u600e\u4e48\u529e\u5462\uff1f"),(0,a.kt)("p",null,"\u6240\u4ee5\u5c31\u9700\u8981\u6709\u4e00\u79cd\u65b9\u5f0f\u6765\u89c4\u907f\u8fd9\u79cd\u98ce\u9669\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u60f3\u8981\u5b8c\u6210\u8fd9\u4e48\u4e00\u4e2a\u64cd\u4f5c\u5c31\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"husky")," \u914d\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint")," \u624d\u53ef\u4ee5\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u671f\u671b\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"husky")," \u76d1\u6d4b ",(0,a.kt)("inlineCode",{parentName:"strong"},"pre-commit")," \u94a9\u5b50\uff0c\u5728\u8be5\u94a9\u5b50\u4e0b\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"strong"},"npx eslint --ext .js,.vue src"))," \u6307\u4ee4\u6765\u68c0\u6d4b",(0,a.kt)("inlineCode",{parentName:"p"},"js\u6587\u4ef6\u548cvue\u6587\u4ef6"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},'npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"')," \u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"commit")," \u65f6\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"hook")," \uff08",(0,a.kt)("inlineCode",{parentName:"li"},"npx eslint --ext .js,.vue src")," \u4f1a\u5728\u6267\u884c\u5230\u8be5 hook \u65f6\u8fd0\u884c\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'npx husky add .husky/pre-commit \u8868\u793a\u5229\u7528husky\u6dfb\u52a0(add)\u4e0a\u5bf9\u5e94\u7684\u94a9\u5b50(.husky/pre-commit)\n "npx eslint --ext .js,.vue src" \u8868\u793a\u5728\u8fd9\u4e2a\u94a9\u5b50\u5185\u90e8\u53bb\u6dfb\u52a0\u8fd9\u53e5\u6307\u4ee4\n\n// \u8fde\u8d77\u6765\u7684\u610f\u601d\u662f\u5229\u7528npx \u6267\u884c husky\u91cc\u7684add\u6307\u4ee4,\n// \u901a\u8fc7add\u6307\u4ee4\u5728.husky\u6587\u4ef6\u5939\u91cc\u6dfb\u52a0\u4e0apre-commit\u8fd9\u4e2a\u6587\u4ef6\n// \u5728pre-commit\u6587\u4ef6\u4e2d\u6307\u5b9a\u4e0a\u5bf9\u5e94\u5185\u5bb9\u7684\u6307\u4ee4"npx eslint --ext .js,.vue src"\n// \u5728src\u76ee\u5f55\u4e0b\u68c0\u6d4b.js\u548c.vue\u6587\u4ef6\n\n// \u5728\u6211\u4eec\u6267\u884c\u63d0\u4ea4\u64cd\u4f5c\u7684\u65f6\u5019\u5728pre-commit\u8fd9\u4e2ahooks\u4e2d, \u5c31\u4f1a\u901a\u8fc7\u8fd9\u4e2a\u6307\u4ee4\u8fdb\u884c\u4ee3\u7801\u6821\u9a8c\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8be5\u64cd\u4f5c\u4f1a\u751f\u6210\u5bf9\u5e94\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-commit"),"\uff1a\n",(0,a.kt)("img",{alt:"pre-commit",src:n(91717).Z}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u8bbe\u7f6e-Editor:Format on Save \u4e2d\u53d6\u6d88\u52fe\u9009\u6765\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"p"},"VSCode")," \u7684\u81ea\u52a8\u4fdd\u5b58\u64cd\u4f5c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539\u4e00\u5904\u4ee3\u7801\uff0c\u4f7f\u5176\u4e0d\u7b26\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," \u6821\u9a8c\u89c4\u5219")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,a.kt)("strong",{parentName:"p"},"\u63d0\u4ea4\u64cd\u4f5c")," \u4f1a\u53d1\u73b0\uff0c\u629b\u51fa\u4e00\u7cfb\u5217\u7684\u9519\u8bef\uff0c\u4ee3\u7801\u65e0\u6cd5\u63d0\u4ea4"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"PS F:\\xxxxxxxxxxxxxxxxxxx\\\u76ee\u5f55> git commit -m 'test'\n\nF:\\xxxxxxxxxxxxxxxx\\\u76ee\u5f55\\src\\views\\Home.vue\n  13:9  error  Strings must use singlequote  quotes\n\n\u2716 1 problem (1 error, 0 warnings)\n  1 error and 0 warnings potentially fixable with the `--fix` option.\n\nhusky - pre-commit hook exited with code 1 (error)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u60f3\u8981\u63d0\u4ea4\u4ee3\u7801\uff0c\u5fc5\u987b\u5904\u7406\u5b8c\u6210\u6240\u6709\u7684\u9519\u8bef\u4fe1\u606f"))),(0,a.kt)("p",null,"\u90a3\u4e48\u5230\u8fd9\u91cc\u4f4d\u7f6e\uff0c\u6211\u4eec\u5df2\u7ecf\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-commit")," \u68c0\u6d4b\u5230\u4e86\u4ee3\u7801\u7684\u63d0\u4ea4\u89c4\u8303\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u5230\u8fd9\u91cc\u5c31\u4e07\u4e8b\u5927\u5409\u4e86\u5417\uff1f"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4e16\u754c\u4e0a\u4ece\u6765\u4e0d\u7f3a\u7684\u5c31\u662f\u61d2\u4eba\uff0c\u9519\u8bef\u7684\u4ee3\u7801\u683c\u5f0f\u53ef\u80fd\u4f1a\u629b\u51fa\u5f88\u591a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," \u9519\u8bef\uff0c\u8ba9\u4eba\u770b\u5f97\u5934\u76ae\u53d1\u9ebb\u3002\u4e25\u91cd\u5f71\u54cd\u7a0b\u5e8f\u733f\u7684\u5e78\u798f\u6307\u6570\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\u6709\u6ca1\u6709\u529e\u6cd5\uff0c\u8ba9\u7a0b\u5e8f\u733f\u5728 0 \u914d\u7f6e\u7684\u524d\u63d0\u4e0b\uff0c\u54ea\u6015\u4ee3\u7801\u683c\u5f0f\u518d\u4e71\uff0c\u4e5f\u53ef\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"\u201d\u81ea\u52a8\u201c")," \u5e2e\u52a9\u4ed6\u4fee\u590d\u5bf9\u5e94\u7684\u95ee\u9898\uff0c\u5e76\u4e14\u5b8c\u6210\u63d0\u4ea4\u5462\uff1f"),(0,a.kt)("p",null,"\u4f60\u522b\u8bf4\uff0c\u8fd8\u771f\u6709\uff01\u4e5f\u5c31\u662f\u4e0b\u9762\u7684\u901a\u8fc7 lint-staged \u81ea\u52a8\u4fee\u590d\u683c\u5f0f\u9519\u8bef"),(0,a.kt)("h2",{id:"\u901a\u8fc7-lint-staged-\u81ea\u52a8\u4fee\u590d\u683c\u5f0f\u9519\u8bef"},"\u901a\u8fc7 lint-staged \u81ea\u52a8\u4fee\u590d\u683c\u5f0f\u9519\u8bef"),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u4e2d\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pre-commit")," \u5904\u7406\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"\u68c0\u6d4b\u4ee3\u7801\u7684\u63d0\u4ea4\u89c4\u8303\u95ee\u9898\uff0c\u5f53\u6211\u4eec\u8fdb\u884c\u4ee3\u7801\u63d0\u4ea4\u65f6\uff0c\u4f1a\u68c0\u6d4b\u6240\u6709\u7684\u4ee3\u7801\u683c\u5f0f\u89c4\u8303")," \u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u6837\u4f1a\u5b58\u5728\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6211\u4eec\u53ea\u4fee\u6539\u4e86\u4e2a\u522b\u7684\u6587\u4ef6\uff0c\u6ca1\u6709\u5fc5\u8981\u68c0\u6d4b\u6240\u6709\u7684\u6587\u4ef6\u4ee3\u7801\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"\u5b83\u53ea\u80fd\u7ed9\u6211\u4eec\u63d0\u793a\u51fa\u5bf9\u5e94\u7684\u9519\u8bef\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u624b\u52a8\u7684\u8fdb\u884c\u4ee3\u7801\u4fee\u6539")),(0,a.kt)("p",null,"\u90a3\u4e48\u8fd9\u91cc\u5c31\u9700\u8981\u5904\u7406\u8fd9\u4e24\u4e2a\u95ee\u9898"),(0,a.kt)("p",null,"\u90a3\u4e48\u60f3\u8981\u5904\u7406\u8fd9\u4e24\u4e2a\u95ee\u9898\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u53e6\u5916\u4e00\u4e2a\u63d2\u4ef6 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},"lint-staged")," \uff01"),(0,a.kt)("h3",{id:"lint-staged-\u4f5c\u7528"},"lint-staged \u4f5c\u7528"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},"lint-staged")," \u53ef\u4ee5\u8ba9\u4f60\u5f53\u524d\u7684\u4ee3\u7801\u68c0\u67e5 ",(0,a.kt)("strong",{parentName:"p"},"\u53ea\u68c0\u67e5\u672c\u6b21\u4fee\u6539\u66f4\u65b0\u7684\u4ee3\u7801\uff0c\u5e76\u5728\u51fa\u73b0\u9519\u8bef\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u4fee\u590d\u5e76\u4e14\u63a8\u9001")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/okonet/lint-staged"},"lint-staged")," \u65e0\u9700\u5355\u72ec\u5b89\u88c5\uff0c\u6211\u4eec\u751f\u6210\u9879\u76ee\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"vue-cli")," \u5df2\u7ecf\u5e2e\u52a9\u6211\u4eec\u5b89\u88c5\u8fc7\u4e86\uff0c\u6240\u4ee5\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u5c31\u53ef\u4ee5\u4e86"),(0,a.kt)("h3",{id:"\u4f7f\u7528-lint-staged"},"\u4f7f\u7528 lint-staged"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"lint-staged": {\n "src/**/*.{js,vue}": [\n   "eslint --fix",\n   "git add"\n ]\n},\n\x3c!-- src\u4e0b\u9762\u7684\u6240\u6709\u5185\u5bb9\u4ee5.js\u6216vue\u7ed3\u5c3e\u7684\u6587\u4ef6\u90fd\u9700\u8981\u901a\u8fc7lint-staged\u8fdb\u884c\u8fc7\u6ee4 --\x3e\n\x3c!-- \u8fc7\u6ee4\u4e4b\u540e\u6307\u4ee4\u6570\u7ec4\u4e2d\u7684\u4e24\u4e2a\u6307\u4ee4 --\x3e\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u4e0a\u914d\u7f6e\uff0c\u6bcf\u6b21\u5b83\u53ea\u4f1a\u5728\u4f60\u672c\u5730 ",(0,a.kt)("inlineCode",{parentName:"p"},"commit")," \u4e4b\u524d\uff0c\u6821\u9a8c\u4f60\u63d0\u4ea4\u7684\u5185\u5bb9\u662f\u5426\u7b26\u5408\u4f60\u672c\u5730\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"eslint"),"\u89c4\u5219(\u8fd9\u4e2a\u89c1\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/eslint.html"},"ESLint")," )\uff0c\u6821\u9a8c\u4f1a\u51fa\u73b0\u4e24\u79cd\u7ed3\u679c\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u7b26\u5408\u89c4\u5219\uff1a\u5219\u4f1a\u63d0\u4ea4\u6210\u529f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u7b26\u5408\u89c4\u5219\uff1a\u5b83\u4f1a\u81ea\u52a8\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"eslint --fix")," \u5c1d\u8bd5\u5e2e\u4f60\u81ea\u52a8\u4fee\u590d\uff0c\u5982\u679c\u4fee\u590d\u6210\u529f\u5219\u4f1a\u5e2e\u4f60\u628a\u4fee\u590d\u597d\u7684\u4ee3\u7801\u63d0\u4ea4\uff0c\u5982\u679c\u5931\u8d25\uff0c\u5219\u4f1a\u63d0\u793a\u4f60\u9519\u8bef\uff0c\u8ba9\u4f60\u4fee\u597d\u8fd9\u4e2a\u9519\u8bef\u4e4b\u540e\u624d\u80fd\u5141\u8bb8\u4f60\u63d0\u4ea4\u4ee3\u7801\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},".husky/pre-commit")," \u6587\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx lint-staged\n\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u518d\u6b21\u6267\u884c\u63d0\u4ea4\u4ee3\u7801")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u53d1\u73b0 ",(0,a.kt)("strong",{parentName:"p"},"\u6682\u5b58\u533a\u4e2d")," \u4e0d\u7b26\u5408 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESlint")," \u7684\u5185\u5bb9\uff0c\u88ab\u81ea\u52a8\u4fee\u590d"))),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u7ecf\u8fc74\u8282\u4e4b\u540e\u6211\u4eec\u5904\u7406\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u7a0b\u683c\u5f0f\u89c4\u8303\u7684\u95ee\u9898"),"\uff0c\u6574\u4e2a\u89c4\u8303\u5927\u4f53\u53ef\u4ee5\u5206\u4e3a\u4e24\u5927\u7c7b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u683c\u5f0f\u89c4\u8303"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"git")," \u63d0\u4ea4\u89c4\u8303")),(0,a.kt)("h3",{id:"\u4ee3\u7801\u683c\u5f0f\u89c4\u8303"},(0,a.kt)("strong",{parentName:"h3"},"\u4ee3\u7801\u683c\u5f0f\u89c4\u8303\uff1a")),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u683c\u5f0f\u89c4\u8303")," \u800c\u8a00\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESLint")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"Prettier")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"VSCode \u914d\u7f6e")," \u914d\u5408\u8fdb\u884c\u4e86\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u6700\u7ec8\u5b9e\u73b0\u4e86\u8fbe\u5230\u4e86\u5728\u4fdd\u5b58\u4ee3\u7801\u65f6\uff0c\u81ea\u52a8\u89c4\u8303\u5316\u4ee3\u7801\u683c\u5f0f\u7684\u76ee\u7684\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5206\u522b\u662f",(0,a.kt)("br",{parentName:"p"}),"\n","\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(1)",(0,a.kt)("br",{parentName:"p"}),"\n","\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(2)"))),(0,a.kt)("h3",{id:"git-\u63d0\u4ea4\u89c4\u8303"},(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"git")," \u63d0\u4ea4\u89c4\u8303\uff1a")),(0,a.kt)("p",null,"\u5bf9\u4e8e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"git")," \u63d0\u4ea4\u89c4\u8303")," \u800c\u8a00\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"husky")," \u6765\u76d1\u6d4b ",(0,a.kt)("inlineCode",{parentName:"p"},"Git hooks")," \u94a9\u5b50\uff0c\u5e76\u4e14\u901a\u8fc7\u4ee5\u4e0b\u63d2\u4ef6\u5b8c\u6210\u4e86\u5bf9\u5e94\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/"},"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4\u89c4\u8303")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/commitizen/cz-cli"},"commitizen"),"\uff1agit \u63d0\u4ea4\u89c4\u8303\u5316\u5de5\u5177"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/conventional-changelog/commitlint"},"commitlint"),"\uff1a\u7528\u4e8e\u68c0\u67e5\u63d0\u4ea4\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pre-commit"),"\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"git hooks")," \u94a9\u5b50"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/okonet/lint-staged"},"lint-staged"),"\uff1a\u53ea\u68c0\u67e5\u672c\u6b21\u4fee\u6539\u66f4\u65b0\u7684\u4ee3\u7801\uff0c\u5e76\u5728\u51fa\u73b0\u9519\u8bef\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u4fee\u590d\u5e76\u4e14\u63a8\u9001")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5206\u522b\u662f",(0,a.kt)("br",{parentName:"p"}),"\n","\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(3)",(0,a.kt)("br",{parentName:"p"}),"\n","\u6807\u51c6\u5316\u5927\u5382\u7f16\u7a0b\u89c4\u8303\u89e3\u51b3\u65b9\u6848\u4e4b ESLint + Git Hooks(4)"))))}s.isMDXComponent=!0},91717:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);