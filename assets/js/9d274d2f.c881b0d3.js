"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4799],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},A={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(t),m=o,k=c["".concat(s,".").concat(m)]||c[m]||A[m]||a;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},34864:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],p={slug:"js2",title:"[\u9762\u8bd5\u9898] JS-\u5f15\u7528\u7c7b\u578b",sidebar_position:8},s=void 0,i={unversionedId:"interview/js2",id:"interview/js2",title:"[\u9762\u8bd5\u9898] JS-\u5f15\u7528\u7c7b\u578b",description:"\u56de\u987e\u503c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u533a\u522b",source:"@site/docs/interview/js2.md",sourceDirName:"interview",slug:"/interview/js2",permalink:"/docs/interview/js2",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/interview/js2.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"js2",title:"[\u9762\u8bd5\u9898] JS-\u5f15\u7528\u7c7b\u578b",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"[\u9762\u8bd5\u9898] JS-\u57fa\u672c\u6570\u636e\u7c7b\u578b",permalink:"/docs/interview/js1"},next:{title:"[JS] \u5173\u4e8e\u4ec0\u4e48\u662fJavascript",permalink:"/docs/javascript/ecma"}},u=[{value:"\u56de\u987e\u503c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u533a\u522b",id:"\u56de\u987e\u503c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u533a\u522b",children:[{value:"1.1 new \u64cd\u4f5c\u7b26\u7684\u4f5c\u7528",id:"11-new-\u64cd\u4f5c\u7b26\u7684\u4f5c\u7528",children:[],level:3},{value:"1.2 \u539f\u578b\u5bf9\u8c61\u7406\u89e3",id:"12-\u539f\u578b\u5bf9\u8c61\u7406\u89e3",children:[{value:"\u51fd\u6570\u5bf9\u8c61\u7684 prototype \u5c5e\u6027",id:"\u51fd\u6570\u5bf9\u8c61\u7684-prototype-\u5c5e\u6027",children:[],level:4},{value:"constructor \u5c5e\u6027",id:"constructor-\u5c5e\u6027",children:[],level:4},{value:"\u5bf9\u8c61\u7684 <code>__proto__ </code>\u5c5e\u6027",id:"\u5bf9\u8c61\u7684-__proto__-\u5c5e\u6027",children:[],level:4}],level:3},{value:"1.3 \u539f\u578b\u5c5e\u6027",id:"13-\u539f\u578b\u5c5e\u6027",children:[{value:"\u5c5e\u6027\u8bbf\u95ee",id:"\u5c5e\u6027\u8bbf\u95ee",children:[],level:4},{value:"\u5c5e\u6027\u5224\u65ad",id:"\u5c5e\u6027\u5224\u65ad",children:[],level:4},{value:"\u6240\u6709\u5c5e\u6027\u83b7\u53d6",id:"\u6240\u6709\u5c5e\u6027\u83b7\u53d6",children:[],level:4}],level:3},{value:"1.4 <code>Object.create( )</code>\u65b9\u6cd5",id:"14-objectcreate-\u65b9\u6cd5",children:[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",children:[],level:4},{value:"\u5b9e\u73b0\u539f\u7406",id:"\u5b9e\u73b0\u539f\u7406",children:[],level:4},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",children:[],level:4}],level:3}],level:2}],A={toc:u};function c(e){var n=e.components,p=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},A,p,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u56de\u987e\u503c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u533a\u522b"},"\u56de\u987e\u503c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u533a\u522b"),(0,a.kt)("p",null,"\u5f15\u7528\u7c7b\u578b\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),",",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),",",(0,a.kt)("inlineCode",{parentName:"p"},"Array"),",",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Math"),"\u7b49\u3002"),(0,a.kt)("p",null,"\u5f15\u7528\u7c7b\u578b\u4e0e\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u533a\u522b:"),(0,a.kt)("p",null,"(1)\u5f15\u7528\u6570\u636e\u7c7b\u578b\u7684\u5b9e\u4f8b\u9700\u8981\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\u5173\u952e\u5b57\u521b\u5efa\u3002"),(0,a.kt)("p",null,"(2)\u5c06\u5f15\u7528\u6570\u636e\u7c7b\u578b\u8d4b\u503c\u7ed9\u53d8\u91cf\uff0c\u5b9e\u9645\u4e0a\u8d4b\u503c\u7684\u662f\u5185\u5b58\u5730\u5740"),(0,a.kt)("p",null,"(3)\u5f15\u7528\u6570\u636e\u7c7b\u578b\u7684\u6bd4\u8f83\u662f\u5bf9\u5185\u5b58\u5730\u5740\u7684\u6bd4\u8f83\uff0c\u800c\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u6bd4\u8f83\u662f\u5bf9\u503c\u7684\u6bd4\u8f83\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u5f15\u7528\u6570\u636e\u7c7b\u578b\u7684\u5b9e\u4f8b\u90fd\u662f\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\u5173\u952e\u5b57\u6765\u521b\u5efa\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u5148\u6765\u63a2\u8ba8\u6709\u5173",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\u64cd\u4f5c\u76f8\u5173\u7684\u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"11-new-\u64cd\u4f5c\u7b26\u7684\u4f5c\u7528"},"1.1 new \u64cd\u4f5c\u7b26\u7684\u4f5c\u7528"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\u64cd\u4f5c\u7b26\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u4f1a\u6539\u53d8",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u7684\u6307\u5411\uff0c\u6240\u4ee5\u4e0b\u9762\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u7684\u7528\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'   <script>\n      function Person(userName, age) {\n        this.userName = userName;\n        this.age = age;\n      }\n      console.log(new Person("zhangsan", 20));\n    <\/script>\n')),(0,a.kt)("p",null,"\u6267\u884c\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u53d1\u73b0\u8f93\u51fa\u7684\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Person"),"\u5bf9\u8c61\uff0c\u5305\u542b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"userName"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"age"),"\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u95ee\u9898\u662f\uff0c\u5728\u6784\u9020\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"Person"),"\u4e2d\uff0c\u6211\u4eec\u6ca1\u6709\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"return"),",\u4e3a\u4ec0\u4e48\u4f1a\u6709\u8fd4\u56de\u503c\u5462\uff1f"),(0,a.kt)("p",null,"\u5176\u5b9e\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u8fd9\u4e2a\u5173\u952e\u5b57\u8d77\u4f5c\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  <script>\n      function Person(userName, age) {\n        console.log(this);//\u8f93\u51fa\u7684\u662fPerson{ }\u5bf9\u8c61\n        this.userName = userName;\n        this.age = age;\n      }\n      new Person("zhangsan", 20);\n    <\/script>\n')),(0,a.kt)("p",null,"\u6267\u884c\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"this")," \u8fd9\u91cc\u5c31\u662f\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Person"),"\u7684\u7a7a\u5bf9\u8c61\uff0c\u540e\u9762\u7684\u4e24\u884c\u4ee3\u7801\u5c31\u76f8\u5f53\u4e8e\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"Person"),"\u5bf9\u8c61\u6dfb\u52a0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"userName"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"age"),"\u8fd9\u4e24\u4e2a\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u628a\u4ee3\u7801\u4fee\u6539\u6210\u5982\u4e0b\u7684\u5f62\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},' <script>\n      function Person(userName, age) {\n        var Person = {};\n        Person.userName = userName;\n        Person.age = age;\n      }\n      console.log(new Person("zhangsan", 20));\n    <\/script>\n')),(0,a.kt)("p",null,"\u4ee5\u4e0a\u6253\u5370\u7684\u7ed3\u679c\u4e2d\uff0c\u8f93\u51fa\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Person{}"),"\uff0c\u5e76\u6ca1\u6709\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"userName"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"age"),",\u539f\u56e0\u662f\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("p",null,"\u56e0\u4e3a\u5728 \u6784\u9020\u51fd\u6570\u4e2d\u5982\u679c\u6ca1\u6709\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"return"),",\u5219\u9ed8\u8ba4\u8fd4\u56de\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"return this"),"."),(0,a.kt)("p",null,"\u4fee\u6539\u540e\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  <script>\n      function Person(userName, age) {\n        var Person = {};\n        Person.userName = userName;\n        Person.age = age;\n        return Person;\n      }\n      console.log(new Person("zhangsan", 20));\n    <\/script>\n')),(0,a.kt)("p",null,"\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"this"),"\u6709\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u4e86\u89e3\u4ee5\u540e\uff0c\u4e0b\u9762\u91cd\u70b9\u770b\u5982\u4e0b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var person = new Person("zhangsan", 20);\n')),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u4e3b\u8981\u7684\u4f5c\u7528\u5c31\u662f\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"Person"),"\u5bf9\u8c61\uff0c\u7136\u540e\u8d4b\u503c\u7ed9\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"person"),"\u8fd9\u4e2a\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u4e2d\u5305\u542b\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Person"),"\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u548c\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5176\u5b9e\uff0c\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"\u64cd\u4f5c\u7b26\u505a\u4e86\u5982\u4e0b 3 \u4ef6\u4e8b\u60c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var person = {};\nperson.__proto__ = Person.prototype;\nPerson.call(person);\n")),(0,a.kt)("h3",{id:"12-\u539f\u578b\u5bf9\u8c61\u7406\u89e3"},"1.2 \u539f\u578b\u5bf9\u8c61\u7406\u89e3"),(0,a.kt)("h4",{id:"\u51fd\u6570\u5bf9\u8c61\u7684-prototype-\u5c5e\u6027"},"\u51fd\u6570\u5bf9\u8c61\u7684 prototype \u5c5e\u6027"),(0,a.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u7684\u6bcf\u4e00\u4e2a\u51fd\u6570\u90fd\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"prototype")," \u5c5e\u6027\uff0c\u8fd9\u4e2a\u5c5e\u6027\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61\u3002\u8fd9\u4e2a\u5bf9\u8c61\u7684\u7528\u9014\u662f\u5305\u542b\u53ef\u4ee5\u7531\u7279\u5b9a\u7c7b\u578b\u7684\u6240\u6709\u5b9e\u4f8b\u5171\u4eab\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u8be5\u51fd\u6570\u5b9e\u4f8b\u5316\u7684\u6240\u6709\u5bf9\u8c61\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u7684\u5c5e\u6027\u6307\u5411\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u5b83\u662f\u8be5\u51fd\u6570\u6240\u6709\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u539f\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function Person() {}\n\n// \u4e3a\u539f\u578b\u5bf9\u8c61\u6dfb\u52a0\u65b9\u6cd5\nPerson.prototype.sayName = function () {\n  alert(this.name);\n};\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"prototype",src:t(39022).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u6613\u56fe")),(0,a.kt)("h4",{id:"constructor-\u5c5e\u6027"},"constructor \u5c5e\u6027"),(0,a.kt)("p",null,"\u5f53\u51fd\u6570\u521b\u5efa\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"prototype "),"\u5c5e\u6027\u6307\u5411\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\u65f6\uff0c\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u539f\u578b\u5bf9\u8c61\u5c06\u4f1a\u83b7\u5f97\u4e00\u4e2a constructor \u5c5e\u6027\uff0c\u8fd9\u4e2a\u5c5e\u6027\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"prototype")," \u6240\u5728\u7684\u51fd\u6570\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u62ff\u524d\u9762\u7684\u4e00\u4e2a\u4f8b\u5b50\u6765\u8bf4 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person.prototype.constructor")," \u5c31\u6307\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person "),"\u51fd\u6570\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Person.prototype.constructor == Person);\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u66f4\u65b0\u4e00\u4e0b\u5b83\u4eec\u4e4b\u95f4\u7684\u5173\u7cfb\u56fe\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u6613\u56fe")),(0,a.kt)("h4",{id:"\u5bf9\u8c61\u7684-__proto__-\u5c5e\u6027"},"\u5bf9\u8c61\u7684 ",(0,a.kt)("inlineCode",{parentName:"h4"},"__proto__ "),"\u5c5e\u6027"),(0,a.kt)("p",null,"\u5f53\u6211\u4eec\u8c03\u7528\u6784\u9020\u51fd\u6570\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u540e\uff0c\u5728\u8fd9\u4e2a\u5b9e\u4f8b\u7684\u5185\u90e8\u5c06\u5305\u542b\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61."),(0,a.kt)("p",null,"\u6839\u636e\u524d\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u6784\u9020\u51fd\u6570\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u5b9e\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var student = new Person();\n\nconsole.log(student.__proto__ === Person.prototype); // true\n")),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u6211\u4eec\u53ef\u4ee5\u770b\u51fa\uff0c\u8fd9\u4e2a\u8fde\u63a5\u662f\u5b58\u5728\u4e0e\u5b9e\u4f8b\u4e0e\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u5bf9\u8c61\u4e4b\u95f4\u7684\uff0c\u800c\u4e0d\u662f\u5b58\u5728\u4e8e\u5b9e\u4f8b\u548c\u6784\u9020\u51fd\u6570\u4e4b\u95f4\u7684\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u73b0\u5728\u8fd9\u51e0\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"isPrototypeOf()")," \u65b9\u6cd5\u7528\u4e8e\u6d4b\u8bd5\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u4e8e\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Person.prototype.isPrototypeOf(student)); // true\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u6613\u56fe")),(0,a.kt)("h3",{id:"13-\u539f\u578b\u5c5e\u6027"},"1.3 \u539f\u578b\u5c5e\u6027"),(0,a.kt)("h4",{id:"\u5c5e\u6027\u8bbf\u95ee"},"\u5c5e\u6027\u8bbf\u95ee"),(0,a.kt)("p",null,"\u6bcf\u5f53\u4ee3\u7801\u8bfb\u53d6\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u65f6\uff0c\u9996\u5148\u4f1a\u5728\u5bf9\u8c61\u672c\u8eab\u641c\u7d22\u8fd9\u4e2a\u5c5e\u6027\uff0c\u5982\u679c\u627e\u5230\u8be5\u5c5e\u6027\u5c31\u8fd4\u56de\u8be5\u5c5e\u6027\u7684\u503c\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\uff0c\u5219\u7ee7\u7eed\u641c\u7d22\u8be5\u5bf9\u8c61\u5bf9\u5e94\u7684\u539f\u578b\u5bf9\u8c61\uff0c\u4ee5\u6b64\u7c7b\u63a8\u4e0b\u53bb\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u8fd9\u6837\u7684\u641c\u7d22\u8fc7\u7a0b\uff0c\u56e0\u6b64\u6211\u4eec\u5982\u679c\u5728\u5b9e\u4f8b\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\u65f6\uff0c\u8fd9\u4e2a\u5c5e\u6027\u5c31\u4f1a\u5c4f\u853d\u539f\u578b\u5bf9\u8c61\u4e2d\u4fdd\u5b58\u7684\u540c\u540d\u5c5e\u6027\uff0c\u56e0\u4e3a\u5728\u5b9e\u4f8b\u4e2d\u641c\u7d22\u5230\u8be5\u5c5e\u6027\u540e\u5c31\u4e0d\u4f1a\u518d\u5411\u540e\u641c\u7d22\u4e86\u3002"),(0,a.kt)("h4",{id:"\u5c5e\u6027\u5224\u65ad"},"\u5c5e\u6027\u5224\u65ad"),(0,a.kt)("p",null,"\u65e2\u7136\u4e00\u4e2a\u5c5e\u6027\u65e2\u53ef\u80fd\u662f\u5b9e\u4f8b\u672c\u8eab\u7684\uff0c\u4e5f\u6709\u53ef\u80fd\u662f\u5176\u539f\u578b\u5bf9\u8c61\u7684\uff0c\u90a3\u4e48\u6211\u4eec\u8be5\u5982\u4f55\u6765\u5224\u65ad\u5462\uff1f"),(0,a.kt)("p",null,"\u5728\u5c5e\u6027\u786e\u8ba4\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"hasOwnProperty() "),"\u65b9\u6cd5\u6765\u5224\u65ad\u4e00\u4e2a\u5c5e\u6027\u662f\u5b58\u5728\u4e0e\u5b9e\u4f8b\u4e2d\uff0c\u8fd8\u662f\u5b58\u5728\u4e8e\u539f\u578b\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Person() {}\n\nPerson.prototype.name = "laker";\n\nvar student = new Person();\n\nconsole.log(student.name); // laker\nconsole.log(student.hasOwnProperty("name")); // false\n\nstudent.name = "xiaoming";\nconsole.log(student.name); //xiaoming \u5c4f\u853d\u4e86\u539f\u578b\u5bf9\u8c61\u4e2d\u7684 name \u5c5e\u6027\nconsole.log(student.hasOwnProperty("name")); // true\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function hasPrototypeProperty(object, name) {\n  return !object.hasOwnProperty(name) && name in object;\n}\n")),(0,a.kt)("h4",{id:"\u6240\u6709\u5c5e\u6027\u83b7\u53d6"},"\u6240\u6709\u5c5e\u6027\u83b7\u53d6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Person() {\n  this.name = "KXY";\n}\nPerson.prototype = {\n  job: "student",\n};\n\nvar kxy = new Person();\nObject.defineProperty(kxy, "sex", {\n  value: "female",\n  enumerable: false,\n});\n\nconsole.log(Object.keys(kxy)); //["name"] //\u65e0\u6cd5\u83b7\u53d6\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u4e0e\u539f\u578b\u94fe\u4e0a\u7ee7\u627f\u7684\u5c5e\u6027\nconsole.log(Object.getOwnPropertyNames(kxy)); //["name", "sex"]\n//for...in\u80fd\u83b7\u53d6\u539f\u578b\u94fe\u4e0a\u7ee7\u627f\u7684\u5c5e\u6027\uff0c\u65e0\u6cd5\u83b7\u53d6\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\nfor (var pro in kxy) {\n  console.log("kxy." + pro + " = " + kxy[pro]); // kxy.name = KXY\n  //kxy.job = student\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u600e\u6837\u5224\u65ad\u5c5e\u6027\u662f\u5426\u4e3a\u5b9e\u4f8b\u5c5e\u6027\u5e76\u4e14\u662f\u5426\u53ef\u679a\u4e3e")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u5224\u65ad\u6307\u5b9a\u540d\u79f0\u7684\u5c5e\u6027\u662f\u5426\u4e3a\u5b9e\u4f8b\u5c5e\u6027\u5e76\u4e14\u662f\u5426\u53ef\u679a\u4e3e\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"propertyIsEnumerable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Student(userName) {\n  this.userName = userName;\n}\nStudent.prototype.sayHello = function () {\n  console.log("hello" + this.userName);\n};\nvar stu = new Student();\nconsole.log(stu.propertyIsEnumerable("userName")); //true:userName\u4e3a\u81ea\u8eab\u5b9a\u4e49\u7684\u5b9e\u4f8b\u5c5e\u6027\nconsole.log(stu.propertyIsEnumerable("age")); // false:age\u5c5e\u6027\u4e0d\u5b58\u5728\uff0c\u8fd4\u56defalse\nconsole.log(stu.propertyIsEnumerable("sayHello")); // false :sayHello\u5c5e\u4e8e\u539f\u578b\u4e0a\u7684\u51fd\u6570\n//\u5c06userName\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u4e0d\u53ef\u679a\u4e3e\nObject.defineProperty(stu, "userName", {\n  enumerable: false,\n});\nconsole.log(stu.propertyIsEnumerable("userName")); // false: userName\u8bbe\u7f6e\u4e86\u4e0d\u53ef\u679a\u4e3e\n')),(0,a.kt)("h3",{id:"14-objectcreate-\u65b9\u6cd5"},"1.4 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Object.create( )"),"\u65b9\u6cd5"),(0,a.kt)("h4",{id:"\u57fa\u672c\u4f7f\u7528"},"\u57fa\u672c\u4f7f\u7528"),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a\u6307\u5b9a\u539f\u578b\u548c\u6307\u5b9a\u5c5e\u6027\u7684\u65b0\u5bf9\u8c61\uff0c\u8bed\u6cd5\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Object.create(prototype, propertyDescriptor);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prototype"),"\u5c5e\u6027\u4e3a\u5bf9\u8c61\u7684\u539f\u578b\uff08\u5fc5\u987b\uff09\uff0c\u53ef\u4ee5\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"null"),",\u5982\u679c\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u5219\u5bf9\u8c61\u7684\u539f\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"propertyDescriptor"),"\u8868\u793a\u7684\u662f\u5c5e\u6027\u63cf\u8ff0\u7b26\uff08\u53ef\u9009\uff09\uff0c\u5177\u4f53\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"propertyName:{\n    value:'',  // \u7528\u6765\u8bbe\u7f6e\u5c5e\u6027\u7684\u503c\n    writable:true, // \u7528\u6765\u8bbe\u7f6e\u5c5e\u6027\u662f\u5426\u53ef\u5199\u5165, \u9ed8\u8ba4\u4e3afalse, \u8868\u793a\u53ea\u8bfb\n    enumerable:true, // \u7528\u6765\u8bbe\u7f6e\u5c5e\u6027\u662f\u5426\u53ef\u679a\u4e3e, \u9ed8\u8ba4\u4e3afalse, \u4e0d\u53ef\u679a\u4e3e\n    configurable:true // \u8bbe\u7f6e\u5c5e\u6027\u662f\u5426\u53ef\u914d\u7f6e, \u4f8b\u5982\u662f\u5426\u53ef\u4ee5\u4fee\u6539\u5c5e\u6027\u7684\u7279\u6027\u4ee5\u53ca\u662f\u5426\u53ef\u4ee5\u5220\u9664\u5c5e\u6027, \u9ed8\u8ba4\u503c\u4e3afalse\n}\n")),(0,a.kt)("p",null,"\u57fa\u672c\u5b9e\u73b0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},' <script type="text/javascript">\n      const person = {\n        userName: "zhangsan",\n        sayHello: function () {\n          console.log("hello " + this.userName);\n        },\n      };\n      const stu = Object.create(person);  // \u8fd9\u6837\u64cd\u4f5c\u540estudent\u539f\u578b\u5c31\u662fperson  student.__proto__ === person\n      stu.userName = "lisi";\n      stu.sayHello(); //hello lisi  \u8986\u76d6\u4e86person\u4e2d\u7684userName\u5c5e\u6027\u539f\u6709\u7684\u503c\n    <\/script>\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u4ee3\u7801\uff0c\u53ef\u4ee5\u770b\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"stu"),"\u5bf9\u8c61\u7684\u539f\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"person"),".\u4e5f\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"stu.__proto__===person")),(0,a.kt)("p",null,"\u4e0b\u9762\u518d\u6765\u770b\u4e00\u4e2a\u6848\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var obj = Object.create(null, {\n  userName: {\n    value: "wangwu",\n    writable: true,\n    enumerable: true,\n    configurable: true,\n  },\n  age: {\n    value: 23,\n  },\n});\nconsole.log(obj.userName);\nconsole.log(obj.age);\nobj.age = 26;\nconsole.log(obj.age);\nfor (var o in obj) {\n  console.log(o);\n}\ndelete obj.userName;\nconsole.log(obj.userName);\ndelete obj.age;\nconsole.log(obj.age);\n')),(0,a.kt)("h4",{id:"\u5b9e\u73b0\u539f\u7406"},"\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u7684\u4f2a\u4ee3\u7801\u6765\u67e5\u770b\u5bf9\u5e94\u7684\u5b9e\u73b0\u539f\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Object.create = function (proto, propertiesObject) {\n  //\u7701\u7565\u4e86\u5176\u5b83\u5224\u65ad\u64cd\u4f5c\n  function F() {}\n  F.prototype = proto;\n  if (propertiesObject) {\n    Object.defineProperties(F, propertiesObject);\n  }\n  return new F();\n};\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u5f97\u51fa\u5982\u4e0b\u7684\u7ed3\u8bba\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var f = new F();\nf.__proto__ === F.prototype;\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u9a8c\u8bc1\u4e00\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var obj = { x: 12, y: 13 };\nvar test = Object.create(obj);\nconsole.log(test);\nconsole.log(test.x);\nconsole.log(test.__proto__.x);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6700\u540e\uff0c\u8fd9\u91cc\u6f14\u793a\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"strong"},"Object.defineProperties"),"\u65b9\u6cd5\u7684\u57fa\u672c\u4f7f\u7528")),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u7684\u4e3b\u8981\u4f5c\u7528\u5c31\u662f\u6dfb\u52a0\u6216\u4fee\u6539\u5bf9\u8c61\u7684\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'var person = {};\n\nObject.defineProperties(person, {\n  userName: {\n    value: "\u5f20\u4e09",\n    enumerable: true,\n  },\n  age: {\n    value: 12,\n    enumerable: true,\n  },\n});\nfor (var p in person) {\n  console.log(p);\n}\nperson.age = 20;\nconsole.log(person.age);\n')),(0,a.kt)("h4",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u5bf9\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"Object.create"),"\u65b9\u6cd5\u5f88\u91cd\u8981\u7684\u4e00\u4e2a\u5e94\u7528\u573a\u666f\u662f\u7528\u6765\u5b9e\u73b0\u7ee7\u627f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Person(name, sex) {\n  this.name = name;\n  this.sex = sex;\n}\nPerson.prototype.getInfo = function () {\n  console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");\n};\nvar a = new Person("jojo", "femal");\nvar b = Object.create(Person.prototype);\nconsole.log(a.name);\nconsole.log(b.name);\nconsole.log(b.getInfo);\n')),(0,a.kt)("p",null,"\u4e0b\u9762\u770b\u4e00\u4e0b\u600e\u6837\u5b9e\u73b0\u5b8c\u6574\u7684\u7ee7\u627f\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Person(name, sex) {\n  this.name = name;\n  this.sex = sex;\n}\nPerson.prototype.getInfo = function () {\n  console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");\n};\nfunction Student(name, sex, age) {\n  Person.call(this, name, sex);\n  this.age = age;\n}\nStudent.prototype = Object.create(Person.prototype);\nvar s = new Student("coco", "femal", 25);\ns.getInfo();\n')),(0,a.kt)("p",null,"\u4e0b\u9762\uff0c\u6211\u4eec\u7b80\u5355\u7684\u5206\u6790\u4e00\u4e0b\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u6307\u5411\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\u7684\u6784\u9020\u51fd\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"Student"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"prototype")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"s.__proto__ === Student.prototype;\n")),(0,a.kt)("p",null,"\u90a3\u4e48",(0,a.kt)("inlineCode",{parentName:"p"},"Student.prototype"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u6307\u5411\u4ec0\u4e48\u5462\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Student.prototype.__proto__ === Person.prototype;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"s.__proto__.__proto__ === Person.prototype;\n")),(0,a.kt)("p",null,"\u800c\u6211\u4eec\u77e5\u9053\u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"p"},"s"),"\u662f\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"Student")," \u521b\u5efa\u7684\uff0c\u6240\u4ee5\u5176\u6784\u9020\u51fd\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"Student"),",\u6240\u4ee5\u6211\u4eec\u5728\u4fee\u6539\u4e86\u539f\u578b\u4ee5\u540e\uff0c\u8fd9\u91cc\u5e94\u8be5\u91cd\u65b0\u4fee\u6b63\u6784\u9020\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'function Person(name, sex) {\n  this.name = name;\n  this.sex = sex;\n}\nPerson.prototype.getInfo = function () {\n  console.log("getInfo: [name:" + this.name + ", sex:" + this.sex + "]");\n};\nfunction Student(name, sex, age) {\n  Person.call(this, name, sex);\n  this.age = age;\n}\nStudent.prototype = Object.create(Person.prototype);\nStudent.prototype.constructor = Student;\nvar s = new Student("coco", "femal", 25);\ns.getInfo();\n')))}c.isMDXComponent=!0},39022:function(e,n){n.Z="data:image/png;base64,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"}}]);