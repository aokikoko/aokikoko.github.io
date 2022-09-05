"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,d=m["".concat(o,".").concat(c)]||m[c]||k[c]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71364:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={slug:"webpack",title:"[\u9762\u8bd5\u9898] \u5de5\u7a0b\u5316",sidebar_position:5},i=void 0,p={unversionedId:"interview/webpack",id:"interview/webpack",title:"[\u9762\u8bd5\u9898] \u5de5\u7a0b\u5316",description:"1. Babel \u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/interview/webpack.md",sourceDirName:"interview",slug:"/interview/webpack",permalink:"/docs/interview/webpack",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/interview/webpack.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"webpack",title:"[\u9762\u8bd5\u9898] \u5de5\u7a0b\u5316",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"[\u9762\u8bd5\u9898] DOM",permalink:"/docs/interview/dom"},next:{title:"[\u9762\u8bd5\u9898] Vue",permalink:"/docs/interview/vue"}},o=[{value:"1. Babel \u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f",id:"1-babel-\u7684\u539f\u7406\u662f\u4ec0\u4e48",children:[],level:2},{value:"2. \u5982\u4f55\u7f16\u5199\u4e00\u4e2a Babel \u63d2\u4ef6\uff1f(\u4e86\u89e3)",id:"2-\u5982\u4f55\u7f16\u5199\u4e00\u4e2a-babel-\u63d2\u4ef6\u4e86\u89e3",children:[],level:2},{value:"3. \u4f60\u4eec\u516c\u53f8\u7684 Git \u5de5\u4f5c\u6d41\u662f\u4ec0\u4e48\u6837\u7684\uff1f",id:"3-\u4f60\u4eec\u516c\u53f8\u7684-git-\u5de5\u4f5c\u6d41\u662f\u4ec0\u4e48\u6837\u7684",children:[],level:2},{value:"4. Git \u7684 rebase \u548c merge \u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f",id:"4-git-\u7684-rebase-\u548c-merge-\u7684\u533a\u522b\u662f\u4ec0\u4e48",children:[],level:2},{value:"5. Git \u7684 reset \u56de\u9000 \u548c revert \u64a4\u9500",id:"5-git-\u7684-reset-\u56de\u9000-\u548c-revert-\u64a4\u9500",children:[],level:2}],s={toc:o};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-babel-\u7684\u539f\u7406\u662f\u4ec0\u4e48"},"1. Babel \u7684\u539f\u7406\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"Babel \u7684\u4e3b\u8981\u5de5\u4f5c\u662f\u5bf9\u4ee3\u7801\u8fdb\u884c\u8f6c\u8bd1\u3002(\u89e3\u51b3\u517c\u5bb9, \u89e3\u6790\u6267\u884c\u4e00\u90e8\u5206\u4ee3\u7801)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"let a = 1 + 1    =>  var a = 2\n")),(0,r.kt)("p",null,"\u8f6c\u8bd1\u5206\u4e3a\u4e09\u9636\u6bb5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u6790\uff08Parse\uff09\uff0c\u5c06\u4ee3\u7801\u89e3\u6790\u2f63\u6210\u62bd\u8c61\u8bed\u6cd5\u6811 AST\uff0c\u4e5f\u5c31\u662f\u8bcd\u6cd5\u5206\u6790\u4e0e\u8bed\u6cd5\u5206\u6790\u7684\u8fc7\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8f6c\u6362\uff08Transform\uff09\uff0c\u5bf9\u8bed\u6cd5\u6811\u8fdb\u2f8f\u53d8\u6362\u65b9\u9762\u7684\u2f00\u7cfb\u5217\u64cd\u4f5c\u3002\u901a\u8fc7 babel-traverse\uff0c\u8fdb\u2f8f\u904d\u5386\u5e76\u4f5c\u6dfb\u52a0\u3001\u66f4\u65b0\u3001\u5220\u9664\u7b49\u64cd\u4f5c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2f63\u6210\uff08Generate\uff09\uff0c\u901a\u8fc7 babel-generator \u5c06\u53d8\u6362\u540e\u7684 AST \u8f6c\u6362\u4e3a JS \u4ee3\u7801"))),(0,r.kt)("p",null,"\u8f6c\u8bd1\u6d41\u7a0b\u793a\u610f\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210221114506275",src:n(20569).Z})),(0,r.kt)("h2",{id:"2-\u5982\u4f55\u7f16\u5199\u4e00\u4e2a-babel-\u63d2\u4ef6\u4e86\u89e3"},"2. \u5982\u4f55\u7f16\u5199\u4e00\u4e2a Babel \u63d2\u4ef6\uff1f(\u4e86\u89e3)"),(0,r.kt)("p",null,"Babel \u63d2\u4ef6\u7684\u4e3b\u8981\u5de5\u4f5c\u9636\u6bb5\u662f\u5728 Babel \u5c06\u4ee3\u7801\u89e3\u6790\u6210\u62bd\u8c61\u8bed\u6cd5\u6811 AST \u4e4b\u540e\uff0c"),(0,r.kt)("p",null,"\u63d2\u4ef6\u4eec\u5bf9\u62bd\u8c61\u8bed\u6cd5\u6811 AST \u8fdb\u884c\u5404\u79cd\u64cd\u4f5c\u540e\uff0c\u518d\u7531 Babel \u8f93\u51fa\u6700\u7ec8\u7684\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u8981\u7f16\u5199\u4e00\u4e2a Babel \u63d2\u4ef6\u6a21\u5757\uff0c\u5219\u9700\u8981\u4e3a\u6a21\u5757\u4ee3\u7801\u5bfc\u51fa\u4e00\u4e2a\u51fd\u6570\uff0c\u4e14\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u5185\u5e94\u5305\u542b\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"visitor")," \u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = function (babel) {\n  return {\n    visitor: {},\n  };\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"visitor")," \u662f\u9488\u5bf9\u5404\u7c7b \u62bd\u8c61\u8bed\u6cd5\u6811\u8282\u70b9\u4f5c\u5904\u7406\u7684\u5730\u2f45\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://astexplorer.net/"},"AST Explorer \u5de5\u5177")," \u6765\u67e5\u770b Babel \u5177\u4f53\u751f\u6210\u7684 AST \u8282\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("p",null,"\u6211\u4eec\u6765\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6\uff0c\u5176\u529f\u80fd\u662f\u80fd\u81ea\u52a8\u5c06\u6e90\u7801\u4e2d\u7684\u6570\u5b57\u5b57\u9762\u91cf\u6570\u5b66\u8fd0\u7b97\u8fdb\u884c\u9884\u8ba1\u7b97\u5904\u7406\uff0c\u7b80\u5316\u4ee3\u7801\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u539f\u6765\u7684\u4ee3\u7801\nconst result = 1 + 2;\n\n// \u5904\u7406\u540e\u7684\u4ee3\u7801\nconst result = 3; // \u8fd9\u6837\u4f18\u5316\u4ee5\u540e\uff0c\u5728\u5b9e\u9645\u8fd0\u884c\u65f6\u53ef\u4ee5\u51cf\u5c11\u4e00\u6b21\u52a0\u6cd5\u64cd\u4f5c\n")),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5148\u901a\u8fc7 AST Explorer \u6765\u83b7\u53d6 JSON \u683c\u5f0f\u7684 AST \u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Program",\n  "start": 0,\n  "end": 20,\n  "body": [\n    {\n      "type": "VariableDeclaration",\n      "start": 0,\n      "end": 20,\n      "declarations": [\n        {\n          "type": "VariableDeclarator",\n          "start": 6,\n          "end": 20,\n          "id": {\n            "type": "Identifier",\n            "start": 6,\n            "end": 12,\n            "name": "result"\n          },\n          "init": {\n            "type": "BinaryExpression",\n            "start": 15,\n            "end": 20,\n            "left": {\n              "type": "Literal",\n              "start": 15,\n              "end": 16,\n              "value": 1,\n              "raw": "1"\n            },\n            "operator": "+",\n            "right": {\n              "type": "Literal",\n              "start": 19,\n              "end": 20,\n              "value": 2,\n              "raw": "2"\n            }\n          }\n        }\n      ],\n      "kind": "const"\n    }\n  ],\n  "sourceType": "module"\n}\n')),(0,r.kt)("p",null,"\u4ece\u4ee5\u4e0a AST \u7ed3\u6784\u53ef\u4ee5\u77e5\u9053\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"1 + 2")," \u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"BinaryExpression")," (\u4e8c\u8fdb\u5236\u8868\u8fbe\u5f0f)\u7c7b\u578b\u7684\u8282\u70b9\uff0c"),(0,r.kt)("p",null,"\u90a3\u4e48\u5728\u6211\u4eec\u7f16\u5199\u7684\u63d2\u4ef6\u4ee3\u7801\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"visitor")," \u91cc\u5c31\u53ef\u4ee5\u8fd9\u6837\u8fdb\u884c\u5904\u7406\uff1a"),(0,r.kt)("p",null,"1 \u88c5\u5305"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"yarn add babel-types babel-core\n")),(0,r.kt)("p",null,"2 \u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),", \u8d34\u5165\u4e0b\u9762\u5230\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const t = require("babel-types");\n\nconst visitor = {\n  BinaryExpression(path) {\n    const node = path.node;\n\n    let result;\n\n    // \u5224\u65ad\u8868\u8fbe\u5f0f\u4e24\u8fb9\uff0c\u662f\u5426\u90fd\u662f\u6570\u5b57\n    if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {\n      // \u6839\u636e\u4e0d\u540c\u7684\u64cd\u4f5c\u7b26\u4f5c\u8fd0\u7b97\n      switch (node.operator) {\n        case "+":\n          result = node.left.value + node.right.value;\n          break;\n        case "-":\n          result = node.left.value - node.right.value;\n          break;\n        case "*":\n          result = node.left.value * node.right.value;\n          break;\n        case "/":\n          result = node.left.value / node.right.value;\n          break;\n        default:\n          break;\n      }\n    }\n\n    // \u5982\u679c\u4e0a\u2faf\u7684\u8fd0\u7b97\u6709\u7ed3\u679c\u7684\u8bdd\n    if (result !== undefined) {\n      // \u628a\u8868\u8fbe\u5f0f\u8282\u70b9\u66ff\u6362\u6210number\u5b57\u2faf\u91cf\n      path.replaceWith(t.numericLiteral(result));\n    }\n  },\n};\n\nmodule.exports = function (babel) {\n  return {\n    visitor,\n  };\n};\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u7684\u57fa\u672c\u529f\u80fd\u5c31\u5b8c\u6210\u4e86\uff0c\u65b0\u5efa test.js \u6765\u8fd0\u884c\u8bd5\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const babel = require("babel-core");\n\nconst result = babel.transform("const result = 1 + 2", {\n  plugins: [require("./index")],\n});\n\nconsole.log(result.code); // \u7ed3\u679c\uff1aconst result = 3\n')),(0,r.kt)("p",null,"\u8f6c\u6362\u7ed3\u679c\u7b26\u5408\u9884\u671f\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u4e2a\u63d2\u4ef6\u8fd8\u4e0d\u80fd\u5b8c\u5168\u6b63\u786e\u7684\u5de5\u4f5c\uff0c\u5728\u8f6c\u6362\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"const result = 1 + 2 + 3 + 4 + 5;")," \u8fd9\u6837\u7684\u4ee3\u7801\u65f6\uff0c"),(0,r.kt)("p",null,"\u7ed3\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"const result = 3 + 3 + 4 + 5;"),"\uff0c\u4e5f\u5c31\u662f\u53ea\u8f6c\u6362\u4e86\u4ee3\u7801\u4e2d\u7684\u7b2c\u4e00\u6bb5\u8868\u8fbe\u5f0f\u8ba1\u7b97\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7528 AST Explorer \u67e5\u770b AST \u7ed3\u6784\u7684\u8bdd\uff0c\u4f1a\u53d1\u73b0\u539f\u6765\u8fd9\u4e2a\u8fd0\u7b97\u7531\u5c42\u5c42\u5d4c\u5957\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"BinaryExpression")," \u7ec4\u6210\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"BinaryExpression( BinaryExpression( BinaryExpression( BinaryExpression(1 + 2) + 3 ) + 4 ) + 5 )")),(0,r.kt)("p",null,"\u56e0\u6b64\u6211\u4eec\u5f97\u6539\u9020\u4e00\u4e0b\u4e4b\u524d\u7684\u4ee3\u7801\u903b\u8f91\uff0c\u8fdb\u884c\u904d\u5386\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u5982\u679c\u4e0a\u2faf\u7684\u8fd0\u7b97\u6709\u7ed3\u679c\u7684\u8bdd\nif (result !== undefined) {\n  // \u628a\u8868\u8fbe\u5f0f\u8282\u70b9\u66ff\u6362\u6210number\u5b57\u2faf\u91cf\n  path.replaceWith(t.numericLiteral(result));\n\n  // \u5411\u4e0a\u904d\u5386\u2f57\u7ea7\u8282\u70b9\n  let parentPath = path.parentPath;\n  parentPath && visitor.BinaryExpression.call(this, parentPath);\n}\n")),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u80fd\u6b63\u786e\u5de5\u4f5c\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#builders"},"\u53c2\u8003\u6587\u6863\uff1aBabel \u63d2\u4ef6\u624b\u518c")),(0,r.kt)("h2",{id:"3-\u4f60\u4eec\u516c\u53f8\u7684-git-\u5de5\u4f5c\u6d41\u662f\u4ec0\u4e48\u6837\u7684"},"3. \u4f60\u4eec\u516c\u53f8\u7684 Git \u5de5\u4f5c\u6d41\u662f\u4ec0\u4e48\u6837\u7684\uff1f"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u516c\u53f8\u91c7\u7528\u7684 Git \u5de5\u4f5c\u6d41\u90fd\u53ef\u80fd\u4f1a\u6709\u5dee\u522b\uff0c\u6709\u7684\u6bd4\u8f83\u89c4\u8303\uff0c\u6709\u7684\u6bd4\u8f83\u968f\u610f\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\u4ecb\u7ecd\u4e00\u4e2a\u540d\u4e3a GitFlow \u7684 git \u6807\u51c6\u5316\u64cd\u4f5c\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,"\u5728 GitFlow \u6807\u51c6\u4e0b\uff0c\u6211\u4eec\u7684 git \u4ed3\u5e93\u9700\u8981\u5305\u542b\u4ee5\u4e0b\u51e0\u4e2a\u5173\u952e\u5206\u652f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"master\uff1a\u4e3b\u5206\u652f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"develop\uff1a\u4e3b\u5f00\u53d1\u5206\u2f40\u3002\u5305\u542b\u786e\u5b9a\u5373\u5c06\u53d1\u5e03\u7684\u4ee3\u7801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"feature\uff1a\u65b0\u529f\u80fd\u5206\u2f40\u3002\u2f00\u4e2a\u65b0\u529f\u80fd\u5bf9\u5e94\u2f00\u4e2a\u5206\u2f40")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"release\uff1a\u53d1\u5e03\u5206\u2f40\u3002\u53d1\u5e03\u65f6\u2f64\u7684\u5206\u2f40\uff0c\u2f00\u822c\u6d4b\u8bd5\u9636\u6bb5\u53d1\u73b0\u7684 bug \u5728\u8fd9\u4e2a\u5206\u2f40\u8fdb\u2f8f\u4fee\u590d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"hotfix\uff1a\u70ed\u8865\u4e01\u5206\u652f\u3002\u7528\u4e8e\u4fee\u6539\u5728\u7ebf\u4e0a\u7248\u672c\u4e2d\u53d1\u73b0\u7684\u4e25\u91cd\u7d27\u6025 bug"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GitFlow \u7684\u4e3b\u8981\u4f18\u70b9")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5e76\u2f8f\u5f00\u53d1")),(0,r.kt)("p",null,"\u56e0\u4e3a\u6bcf\u4e2a\u65b0\u529f\u80fd\u90fd\u4f1a\u5efa\u2f74\u2f00\u4e2a\u65b0\u7684 feature \u5206\u2f40\uff0c\u4ece\u2f7d\u548c\u5176\u4ed6\u5df2\u7ecf\u5b8c\u6210\u7684\u529f\u80fd\u9694\u79bb\u5f00\uff0c"),(0,r.kt)("p",null,"\u4e14\u5f53\u53ea\u6709\u5728\u65b0\u529f\u80fd\u5b8c\u6210\u5f00\u53d1\u7684\u60c5\u51b5\u4e0b\uff0c\u5176\u5bf9\u5e94\u7684 feature \u5206\u2f40\u624d\u4f1a\u88ab\u5408\u5e76\u5230\u4e3b\u5f00\u53d1\u5206\u2f40\uff08develop \u5206\u652f\uff09\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u4f60\u6b63\u5728\u5f00\u53d1\u67d0\u4e2a\u529f\u80fd\u7684\u540c\u65f6\u2f1c\u6709\u2f00\u4e2a\u65b0\u529f\u80fd\u9700\u8981\u5f00\u59cb\u5f00\u53d1\uff0c\u90a3\u4e48\u4f60\u53ea\u9700\u628a\u5f53\u524d feature \u7684\u4ee3\u7801\u63d0\u4ea4\u540e\uff0c"),(0,r.kt)("p",null,"\u5207\u56de develop \u5206\u652f, \u65b0\u5efa\u53e6\u5916\u2f00\u4e2a feature \u5206\u2f40\u5373\u53ef\u5f00\u53d1\u65b0\u529f\u80fd\u4e86\u3002"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u968f\u65f6\u5207\u56de\u4e4b\u524d\u7684\u5176\u4ed6 feature \u5206\u2f40\u7ee7\u7eed\u5b8c\u6210\u8be5\u529f\u80fd\u7684\u5f00\u53d1\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u534f\u4f5c\u5f00\u53d1")),(0,r.kt)("p",null,"\u56e0\u4e3a\u6bcf\u4e2a feature \u5206\u2f40\u4e0a\u6539\u52a8\u7684\u4ee3\u7801\u90fd\u53ea\u5bf9\u8be5 feature \u5bf9\u5e94\u7684\u529f\u80fd\u751f\u6548\uff0c"),(0,r.kt)("p",null,"\u6240\u4ee5\u4e0d\u540c feature \u5206\u652f\u4e0a\u7684\u4ee3\u7801\u5728\u5f00\u53d1\u65f6\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd\uff0c\u5927\u5bb6\u53ef\u4ee5\u76f8\u5b89\u65e0\u4e8b\u7684\u5f00\u53d1\u81ea\u5df1\u8d1f\u8d23\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u5206\u652f\u7684\u540d\u79f0\uff0c\u5f88\u5bb9\u6613\u77e5\u9053\u6bcf\u4e2a\u2f08\u90fd\u5728\u505a\u4ec0\u4e48\u529f\u80fd\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2f40\u6301\u7d27\u6025\u4fee\u590d")),(0,r.kt)("p",null,"hotfix \u5206\u2f40\u662f\u4ece\u67d0\u4e2a\u5df2\u7ecf\u53d1\u5e03\u7684\u4ed3\u5e93\u7248\u672c\u57fa\u7840\u4e0a\u521b\u5efa\u51fa\u6765\uff0c\u7528\u4e8e\u7d27\u6025\u4fee\u590d Bug\u3002"),(0,r.kt)("p",null,"\u8be5\u7d27\u6025\u4fee\u590d\u53ea\u5f71\u54cd\u8fd9\u4e2a\u5df2\u7ecf\u53d1\u5e03\u7684\u4ed3\u5e93\u7248\u672c\uff0c\u2f7d\u4e0d\u4f1a\u5f71\u54cd\u4f60\u6b63\u5728\u5f00\u53d1\u7684\u5176\u4ed6\u65b0 feature \u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u70b9")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"feature \u5206\u2f40\u90fd\u662f\u4ece develop \u5206\u2f40\u4e0a\u521b\u5efa\u7684\uff0c\u5f00\u53d1\u5b8c\u6210\u540e\u518d\u5408\u5e76\u5230 develop \u5206\u2f40\u4e0a\uff0c\u7b49\u5f85\u53d1\u5e03")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u9700\u8981\u53d1\u5e03\u65f6\uff0c\u6211\u4eec\u8981\u4ece develop \u5206\u2f40\u4e0a\u521b\u5efa\u2f00\u4e2a release \u5206\u2f40\uff0c\u7136\u540e\u8be5 release \u5206\u2f40\u4f1a\u53d1\u5e03\u5230\u6d4b\u8bd5\u73af\u5883\u8fdb\u2f8f\u6d4b\u8bd5\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u53d1\u73b0\u95ee\u9898\u7684\u8bdd\uff0c\u5c31\u4f1a\u76f4\u63a5\u5728\u8be5\u5206\u2f40\u4e0a\u8fdb\u2f8f\u4fee\u590d\u3002"),(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u95ee\u9898\u4fee\u590d\u4e4b\u524d\uff0c\u4f1a\u4e0d\u505c\u91cd\u590d ",(0,r.kt)("inlineCode",{parentName:"p"},"\u53d1\u5e03")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6d4b\u8bd5")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fee\u590d")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"\u91cd\u65b0\u53d1\u5e03")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"\u91cd\u65b0\u6d4b\u8bd5")," \u6d41\u7a0b\u3002"),(0,r.kt)("p",{parentName:"li"},"\u53d1\u5e03\u7ed3\u675f\uff0c\u8be5 release \u5206\u2f40\u4f1a\u88ab\u5408\u5e76\u5230 develop \u4ee5\u53ca master \u5206\u2f40\uff0c\u4ece\u2f7d\u4fdd\u8bc1\u4e0d\u4f1a\u6709\u4ee3\u7801\u4e22\u5931")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"master \u5206\u2f40\u53ea\u8ddf\u8e2a\u5df2\u7ecf\u53d1\u5e03\u7684\u4ee3\u7801\uff0c\u5408\u5e76\u5230 master \u4e0a\u7684 commit \u53ea\u80fd\u6765\u2f83 release \u5206\u2f40\u548c hotfix \u5206\u2f40")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"hotfix \u5206\u2f40\u7684\u4f5c\u2f64\u662f\u7d27\u6025\u4fee\u590d\u2f00\u4e9b Bug\uff0c\u5b83\u4eec\u90fd\u662f\u4ece master \u5206\u2f40\u4e0a\u7684\u67d0\u4e2a\u7248\u672c\u5efa\u2f74\uff0c"),(0,r.kt)("p",{parentName:"li"},"\u4fee\u590d\u7ed3\u675f\u540e\u518d\u88ab\u5408\u5e76\u5230 develop \u548c master \u5206\u2f40\u4e0a"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210309110119416",src:n(57712).Z}),"\n",(0,r.kt)("img",{alt:"image-20210309112949579",src:n(62475).Z})),(0,r.kt)("h2",{id:"4-git-\u7684-rebase-\u548c-merge-\u7684\u533a\u522b\u662f\u4ec0\u4e48"},"4. Git \u7684 rebase \u548c merge \u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git rebase")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"git merge")," \u4e24\u4e2a\u547d\u4ee4\u90fd\u2f64\u4e8e\u4ece\u2f00\u4e2a\u5206\u2f40\u83b7\u53d6\u5185\u5bb9\u5e76\u5408\u5e76\u5230\u5f53\u524d\u5206\u2f40\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"feature/todo")," \u5206\u2f40\u5408\u5e76\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),"\u4e3b\u5206\u2f40\u4e3a\u4f8b\uff0c\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5206\u522b\u2f64 ",(0,r.kt)("inlineCode",{parentName:"p"},"rebase")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")," \u4f1a\u6709\u4ec0\u4e48\u4e0d\u540c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Merge")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210309112949579",src:n(62475).Z})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"merge")," \u4f1a\u2f83\u52a8\u521b\u5efa\u2f00\u4e2a\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),"\uff0c \u5982\u679c\u5408\u5e76\u65f6\u9047\u5230\u51b2\u7a81\u7684\u8bdd\uff0c\u53ea\u9700\u8981\u4fee\u6539\u540e\u91cd\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u80fd\u8bb0\u5f55\u771f\u5b9e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," \u60c5\u51b5\uff0c\u5305\u62ec\u6bcf\u4e2a\u5206\u2f40\u7684\u8be6\u60c5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u7531\u4e8e\u6bcf\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"merge")," \u4f1a\u2f83\u52a8\u4ea7\u2f63\u2f00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"merge commit"),"\uff0c"),(0,r.kt)("p",{parentName:"li"},"\u56e0\u6b64\u5728\u4f7f\u2f64\u2f00\u4e9b\u53ef\u89c6\u5316\u7684 git \u5de5\u5177\u65f6\u4f1a\u770b\u5230\u8fd9\u4e9b\u81ea\u52a8\u4ea7\u751f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),"\uff0c"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e9b ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," \u5bf9\u4e8e\u7a0b\u5e8f\u5458\u6765\u8bf4\u6ca1\u6709\u4ec0\u4e48\u7279\u522b\u7684\u610f\u4e49\uff0c\u591a\u4e86\u53cd\u800c\u4f1a\u5f71\u54cd\u9605\u8bfb"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528 Rebase")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210309112949579",src:n(80589).Z})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rebase")," \u4f1a\u5408\u5e76\u4e4b\u524d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," \u5386\u53f2\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u53ef\u4ee5\u5f97\u5230\u66f4\u7b80\u6d01\u7684\u63d0\u4ea4\u5386\u53f2\uff0c\u53bb\u6389\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"merge commit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u56e0\u4e3a\u5408\u5e76\u800c\u4ea7\u751f\u7684\u4ee3\u7801\u95ee\u9898\uff0c\u5c31\u4e0d\u5bb9\u6613\u5b9a\u4f4d\uff0c\u56e0\u4e3a\u4f1a\u91cd\u5199\u63d0\u4ea4\u5386\u53f2\u4fe1\u606f"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5efa\u8bae")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u9700\u8981\u4fdd\u7559\u8be6\u7ec6\u7684\u5408\u5e76\u4fe1\u606f\uff0c\u5efa\u8bae\u4f7f\u2f64 ",(0,r.kt)("inlineCode",{parentName:"p"},"git merge"),", \u5c24\u5176\u662f\u8981\u5408\u5e76\u5230 master \u4e0a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u53d1\u73b0\u2f83\u2f30\u4fee\u6539\u67d0\u4e2a\u529f\u80fd\u65f6\u63d0\u4ea4\u6bd4\u8f83\u9891\u7e41\uff0c\u5e76\u89c9\u5f97\u8fc7\u591a\u7684\u5408\u5e76\u8bb0\u5f55\u4fe1\u606f\u5bf9\u81ea\u5df1\u6765\u8bf4\u6ca1\u6709\u5fc5\u8981\uff0c\u90a3\u4e48\u53ef\u5c1d\u8bd5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"git rebase")))),(0,r.kt)("h2",{id:"5-git-\u7684-reset-\u56de\u9000-\u548c-revert-\u64a4\u9500"},"5. Git \u7684 reset \u56de\u9000 \u548c revert \u64a4\u9500"),(0,r.kt)("p",null,"\u5728\u5229\u7528 git \u5b9e\u73b0\u591a\u4eba\u5408\u4f5c\u7a0b\u5e8f\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u6709\u65f6\u4f1a\u51fa\u73b0 ",(0,r.kt)("strong",{parentName:"p"},"\u9519\u8bef\u63d0\u4ea4")," \u7684\u60c5\u51b5\uff0c"),(0,r.kt)("p",null,"\u6b64\u65f6\u6211\u4eec\u5e0c\u671b\u80fd\u64a4\u9500\u63d0\u4ea4\u64cd\u4f5c, \u6216\u8005\u60f3\u8981\u56de\u9000\u5230\u67d0\u4e2a\u7248\u672c"),(0,r.kt)("p",null,"reset => \u56de\u9000\u5230\u67d0\u4e2a\u7248\u672c ",(0,r.kt)("inlineCode",{parentName:"p"},"git reset --hard \u7248\u672c\u53f7")),(0,r.kt)("p",null,"revert => \u64a4\u9500\u67d0\u4e2a\u7248\u672c\u5185\u5bb9\u7684\u5185\u5bb9\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"git revert -n \u7248\u672c\u53f7")),(0,r.kt)("p",null,"\u535a\u5ba2\u53c2\u8003: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/yxlshk/article/details/79944535"},"https://blog.csdn.net/yxlshk/article/details/79944535")),(0,r.kt)("p",null,"\u5982\u679c git reset \u540e, \u7248\u672c\u56de\u9000\u4e86, \u65e0\u6cd5\u76f4\u63a5 push \u5230\u8fdc\u7a0b\u4ed3\u5e93(\u56e0\u4e3a\u8fdc\u7a0b\u4ed3\u5e93\u7248\u672c\u66f4\u52a0\u65b0) => git push -f \u8986\u76d6\u63a8\u9001\u5373\u53ef"),(0,r.kt)("p",null,"\u6548\u679c: \u5c06\u8fdc\u7a0b\u4ed3\u5e93\u7684\u7248\u672c, \u4e5f\u8fdb\u884c\u4e86\u56de\u9000"))}u.isMDXComponent=!0},20569:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210221114506275-14f0a359a7e5f0a2d4d49743ab4ed271.png"},80589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210222133524146-25e56a2cae5f5bd2635e965137221cf2.png"},57712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210309110119416-ae3c38c45d887a93ca50ff9838287f0c.png"},62475:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210309112949579-94a466a07ae7c27991f148875d39f004.png"}}]);