"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1829],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4823:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=t(7462),l=t(3366),a=(t(7294),t(3905)),i=["components"],o={title:"[TS] \u57fa\u7840\u7c7b\u578b",sidebar_position:1},p=void 0,u={unversionedId:"TypeScript/basic-types",id:"TypeScript/basic-types",title:"[TS] \u57fa\u7840\u7c7b\u578b",description:"-----",source:"@site/docs/TypeScript/basic-types.md",sourceDirName:"TypeScript",slug:"/TypeScript/basic-types",permalink:"/docs/TypeScript/basic-types",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/TypeScript/basic-types.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"[TS] \u57fa\u7840\u7c7b\u578b",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"[Doc] \u9690\u85cf\u201cEdit this page\u201d\u94fe\u63a5",permalink:"/docs/DocusaurusTips/controll-edit-link"},next:{title:"[TS] \u53d8\u91cf\u58f0\u660e",permalink:"/docs/TypeScript/variable-declarations"}},c=[{value:"\u5e03\u5c14\u503c boolean",id:"\u5e03\u5c14\u503c-boolean",children:[],level:2},{value:"\u6570\u5b57 number",id:"\u6570\u5b57-number",children:[],level:2},{value:"\u5b57\u7b26\u4e32 string",id:"\u5b57\u7b26\u4e32-string",children:[],level:2},{value:"\u6570\u7ec4 Array",id:"\u6570\u7ec4-array",children:[],level:2},{value:"\u5143\u7956 Tuple",id:"\u5143\u7956-tuple",children:[],level:2},{value:"\u679a\u4e3e enum",id:"\u679a\u4e3e-enum",children:[],level:2},{value:"\u4efb\u610f\u503c any",id:"\u4efb\u610f\u503c-any",children:[],level:2},{value:"void \u7a7a\u503c",id:"void-\u7a7a\u503c",children:[],level:2},{value:"Null \u548c Undefined",id:"null-\u548c-undefined",children:[],level:2},{value:"Never",id:"never",children:[],level:2},{value:"object",id:"object",children:[],level:2},{value:"\u7c7b\u578b\u65ad\u8a00",id:"\u7c7b\u578b\u65ad\u8a00",children:[],level:2}],s={toc:c};function d(e){var n=e.components,t=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5e03\u5c14\u503c-boolean"},"\u5e03\u5c14\u503c boolean"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let isDone: boolean = false;\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6570\u5b57-number"},"\u6570\u5b57 number"),(0,a.kt)("p",null,"\u548cJavaScript\u4e00\u6837\uff0cTypeScript\u91cc\u7684\u6240\u6709\u6570\u5b57\u90fd\u662f\u6d6e\u70b9\u6570\u3002 \u8fd9\u4e9b\u6d6e\u70b9\u6570\u7684\u7c7b\u578b\u662fnumber\u3002 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\nlet binaryLiteral: number = 0b1010;\nlet octalLiteral: number = 0o744;\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5b57\u7b26\u4e32-string"},"\u5b57\u7b26\u4e32 string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let name: string = \"bob\";\nname = 'smith';\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u6570\u7ec4-array"},"\u6570\u7ec4 Array"),(0,a.kt)("p",null,"\u4e24\u79cd\u5b9a\u4e49\u6570\u7ec4\u65b9\u5f0f  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5143\u7d20\u7c7b\u578b\u540e\u63a5","[ ]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let list: number[] = [1, 2, 3];\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6570\u7ec4\u6cdb\u578b\uff0cArray<\u5143\u7d20\u7c7b\u578b>\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let list: Array<number> = [1, 2, 3];\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u5143\u7956-tuple"},"\u5143\u7956 Tuple"),(0,a.kt)("p",null,"\u4e00\u4e2a\u5df2\u77e5\u5143\u7d20\u6570\u91cf\u548c\u7c7b\u578b\u7684\u6570\u7ec4\uff0c\u5404\u5143\u7d20\u7684\u7c7b\u578b\u4e0d\u5fc5\u76f8\u540c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6bd4\u5982\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u5bf9\u503c\u5206\u522b\u4e3astring\u548cnumber\u7c7b\u578b\u7684\u5143\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Declare a tuple type\nlet x: [string, number];\n// Initialize it\nx = ['hello', 10]; // OK\n// Initialize it incorrectly\nx = [10, 'hello']; // Error\n")),(0,a.kt)("p",null,"\u5f53\u8bbf\u95ee\u4e00\u4e2a\u5df2\u77e5\u7d22\u5f15\u7684\u5143\u7d20\uff0c\u4f1a\u5f97\u5230\u6b63\u786e\u7684\u7c7b\u578b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(x[0].substr(1)); // OK\nconsole.log(x[1].substr(1)); // Error, 'number' does not have 'substr'\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u679a\u4e3e-enum"},"\u679a\u4e3e enum"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"enum"),"\u7c7b\u578b\u662f\u5bf9JavaScript\u6807\u51c6\u6570\u636e\u7c7b\u578b\u7684\u4e00\u4e2a\u8865\u5145\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u50cfC#\u7b49\u5176\u5b83\u8bed\u8a00\u4e00\u6837\uff0c\u4f7f\u7528\u679a\u4e3e\u7c7b\u578b\u53ef\u4ee5\u4e3a\u4e00\u7ec4\u6570\u503c\u8d4b\u4e88\u53cb\u597d\u7684\u540d\u5b57\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {Red = 1, Green, Blue}\nlet colorName: string = Color[2];\n\nalert(colorName);  // \u663e\u793a'Green'\u56e0\u4e3a\u4e0a\u9762\u4ee3\u7801\u91cc\u5b83\u7684\u503c\u662f2\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4efb\u610f\u503c-any"},"\u4efb\u610f\u503c any"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u4f1a\u60f3\u8981\u4e3a\u90a3\u4e9b\u5728\u7f16\u7a0b\u9636\u6bb5\u8fd8\u4e0d\u6e05\u695a\u7c7b\u578b\u7684\u53d8\u91cf\u6307\u5b9a\u4e00\u4e2a\u7c7b\u578b\u3002 \u8fd9\u4e9b\u503c\u53ef\u80fd\u6765\u81ea\u4e8e\u52a8\u6001\u7684\u5185\u5bb9\uff0c\u6bd4\u5982\u6765\u81ea\u7528\u6237\u8f93\u5165\u6216\u7b2c\u4e09\u65b9\u4ee3\u7801\u5e93\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u7c7b\u578b\u68c0\u67e5\u5668\u5bf9\u8fd9\u4e9b\u503c\u8fdb\u884c\u68c0\u67e5\u800c\u662f\u76f4\u63a5\u8ba9\u5b83\u4eec\u901a\u8fc7\u7f16\u8bd1\u9636\u6bb5\u7684\u68c0\u67e5\u3002 \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528any\u7c7b\u578b\u6765\u6807\u8bb0\u8fd9\u4e9b\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let notSure: any = 4;\nnotSure = "maybe a string instead";\nnotSure = true; // okay, definitely a boolean\n')),(0,a.kt)("p",null,"\u5f53\u4f60\u53ea\u77e5\u9053\u4e00\u90e8\u5206\u6570\u636e\u7684\u7c7b\u578b\u65f6\uff0cany\u7c7b\u578b\u4e5f\u662f\u6709\u7528\u7684\u3002 \u6bd4\u5982\uff0c\u4f60\u6709\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b83\u5305\u542b\u4e86\u4e0d\u540c\u7684\u7c7b\u578b\u7684\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let list: any[] = [1, true, "free"];\n\nlist[1] = 100;\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"void-\u7a7a\u503c"},"void \u7a7a\u503c"),(0,a.kt)("p",null,"\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u6765\u8bf4\uff0cvoid\u7c7b\u578b\u50cf\u662f\u4e0eany\u7c7b\u578b\u76f8\u53cd\uff0c\u5b83\u8868\u793a\u6ca1\u6709\u4efb\u4f55\u7c7b\u578b\u3002 \u5f53\u4e00\u4e2a\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\u65f6\uff0c\u4f60\u901a\u5e38\u4f1a\u89c1\u5230\u5176\u8fd4\u56de\u503c\u7c7b\u578b\u662fvoid\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function warnUser(): void {\n    alert("This is my warning message");\n}\n')),(0,a.kt)("p",null,"\u58f0\u660e\u4e00\u4e2avoid\u7c7b\u578b\u7684\u53d8\u91cf\u6ca1\u6709\u4ec0\u4e48\u5927\u7528\uff0c\u56e0\u4e3a\u4f60\u53ea\u80fd\u4e3a\u5b83\u8d4b\u4e88undefined\u548cnull\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let unusable: void = undefined;\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"null-\u548c-undefined"},"Null \u548c Undefined"),(0,a.kt)("p",null,"TypeScript\u91cc\uff0cundefined\u548cnull\u4e24\u8005\u5404\u81ea\u6709\u81ea\u5df1\u7684\u7c7b\u578b\u5206\u522b\u53eb\u505aundefined\u548cnull\u3002 \u548cvoid\u76f8\u4f3c\uff0c\u5b83\u4eec\u7684\u672c\u8eab\u7684\u7c7b\u578b\u7528\u5904\u4e0d\u662f\u5f88\u5927\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Not much else we can assign to these variables!\nlet u: undefined = undefined;\nlet n: null = null;\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0bnull\u548cundefined\u662f\u6240\u6709\u7c7b\u578b\u7684\u5b50\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u7f16\u8bd1\u65f6, \u4f7f\u7528 tsc \u6587\u4ef6\u540d --strictNullChecks \u8fdb\u884c\u7f16\u8bd1\u7684\u8bdd, null\u548cundefined\u53ea\u80fd\u8d4b\u503c\u7ed9void\u548c\u5b83\u4eec\u5404\u81ea\u3002 \u8fd9\u80fd\u907f\u514d\u5f88\u591a\u5e38\u89c1\u7684\u95ee\u9898\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u4e5f\u8bb8\u5728\u67d0\u5904\u4f60\u60f3\u4f20\u5165\u4e00\u4e2astring\u6216null\u6216undefined\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8054\u5408\u7c7b\u578bstring | null | undefined\u3002 "),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"never"},"Never"),(0,a.kt)("p",null,"never\u7c7b\u578b\u8868\u793a\u7684\u662f\u90a3\u4e9b\u6c38\u4e0d\u5b58\u5728\u7684\u503c\u7684\u7c7b\u578b\u3002 \u4f8b\u5982\uff0cnever\u7c7b\u578b\u662f\u90a3\u4e9b\u603b\u662f\u4f1a\u629b\u51fa\u5f02\u5e38\u6216\u6839\u672c\u5c31\u4e0d\u4f1a\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u6216\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u8fd4\u56de\u503c\u7c7b\u578b\uff1b \u53d8\u91cf\u4e5f\u53ef\u80fd\u662fnever\u7c7b\u578b\uff0c\u5f53\u5b83\u4eec\u88ab\u6c38\u4e0d\u4e3a\u771f\u7684\u7c7b\u578b\u4fdd\u62a4\u6240\u7ea6\u675f\u65f6\u3002"),(0,a.kt)("p",null,"never\u7c7b\u578b\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5b50\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u8d4b\u503c\u7ed9\u4efb\u4f55\u7c7b\u578b\uff1b\u7136\u800c\uff0c\u6ca1\u6709\u7c7b\u578b\u662fnever\u7684\u5b50\u7c7b\u578b\u6216\u53ef\u4ee5\u8d4b\u503c\u7ed9never\u7c7b\u578b\uff08\u9664\u4e86never\u672c\u8eab\u4e4b\u5916\uff09\u3002 \u5373\u4f7fany\u4e5f\u4e0d\u53ef\u4ee5\u8d4b\u503c\u7ed9never\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u8fd4\u56denever\u7c7b\u578b\u7684\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// \u8fd4\u56denever\u7684\u51fd\u6570\u5fc5\u987b\u5b58\u5728\u65e0\u6cd5\u8fbe\u5230\u7684\u7ec8\u70b9\nfunction error(message: string): never {\n    throw new Error(message);\n}\n\n// \u63a8\u65ad\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e3anever\nfunction fail() {\n    return error("Something failed");\n}\n\n// \u8fd4\u56denever\u7684\u51fd\u6570\u5fc5\u987b\u5b58\u5728\u65e0\u6cd5\u8fbe\u5230\u7684\u7ec8\u70b9\nfunction infiniteLoop(): never {\n    while (true) {\n    }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"object"},"object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," \u8868\u793a\u975e\u539f\u59cb\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"symbol"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," \u4e4b\u5916\u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," \u7c7b\u578b\uff0c\u5c31\u53ef\u4ee5\u66f4\u597d\u7684\u8868\u793a\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"Object.create")," \u8fd9\u6837\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"API"),"\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function create(o: object | null): void\n\ncreate({ prop: 0 }) // OK\ncreate(null) // OK\n\ncreate(42) // Error\ncreate('string') // Error\ncreate(false) // Error\ncreate(undefined) // Error\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u7c7b\u578b\u65ad\u8a00"},"\u7c7b\u578b\u65ad\u8a00"),(0,a.kt)("p",null,"\u901a\u8fc7\u7c7b\u578b\u65ad\u8a00\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u201c\u76f8\u4fe1\u6211\uff0c\u6211\u77e5\u9053\u81ea\u5df1\u5728\u5e72\u4ec0\u4e48\u201d\u3002 \u7c7b\u578b\u65ad\u8a00\u597d\u6bd4\u5176\u5b83\u8bed\u8a00\u91cc\u7684\u7c7b\u578b\u8f6c\u6362\uff0c\u4f46\u662f\u4e0d\u8fdb\u884c\u7279\u6b8a\u7684\u6570\u636e\u68c0\u67e5\u548c\u89e3\u6784\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5b83\u6ca1\u6709\u8fd0\u884c\u65f6\u7684\u5f71\u54cd\uff0c\u53ea\u662f\u5728\u7f16\u8bd1\u9636\u6bb5\u8d77\u4f5c\u7528\u3002"),(0,a.kt)("p",null,"\u7c7b\u578b\u65ad\u8a00\u6709\u4e24\u79cd\u5f62\u5f0f\u3002  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c16\u62ec\u53f7\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let someValue: any = "this is a string";\n\nlet strLength: number = (<string>someValue).length;\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"as\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let someValue: any = "this is a string";\n\nlet strLength: number = (someValue as string).length;\n')))}d.isMDXComponent=!0}}]);