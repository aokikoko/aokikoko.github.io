"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5682],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13331:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),s=["components"],o={title:"[React] setState",sidebar_position:7},i=void 0,p={unversionedId:"React/setState",id:"React/setState",title:"[React] setState",description:"setState",source:"@site/docs/React/setState.md",sourceDirName:"React",slug:"/React/setState",permalink:"/docs/React/setState",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/React/setState.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"[React] setState",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"[React] \u751f\u547d\u5468\u671f",permalink:"/docs/React/lifecycle"},next:{title:"[React] react\u8def\u7531",permalink:"/docs/React/route"}},u=[{value:"setState",id:"setstate",children:[{value:"\u66f4\u65b0\u6570\u636e",id:"\u66f4\u65b0\u6570\u636e",children:[],level:3},{value:"\u63a8\u8350\u8bed\u6cd5",id:"\u63a8\u8350\u8bed\u6cd5",children:[],level:3},{value:"\u7b2c\u4e8c\u4e2a\u53c2\u6570",id:"\u7b2c\u4e8c\u4e2a\u53c2\u6570",children:[],level:3}],level:2},{value:"\u7ec4\u4ef6\u66f4\u65b0\u673a\u5236",id:"\u7ec4\u4ef6\u66f4\u65b0\u673a\u5236",children:[{value:"\u7ec4\u4ef6\u6027\u80fd\u4f18\u5316",id:"\u7ec4\u4ef6\u6027\u80fd\u4f18\u5316",children:[],level:3},{value:"\u51cf\u8f7bstate",id:"\u51cf\u8f7bstate",children:[],level:3},{value:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3",id:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3",children:[],level:3}],level:2},{value:"\u7eaf\u7ec4\u4ef6",id:"\u7eaf\u7ec4\u4ef6",children:[{value:"\u6d45\u5c42\u5bf9\u6bd4(shallow compare)",id:"\u6d45\u5c42\u5bf9\u6bd4shallow-compare",children:[],level:3},{value:"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u503c\u7c7b\u578b",id:"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u503c\u7c7b\u578b",children:[],level:3},{value:"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u5f15\u7528\u7c7b\u578b",id:"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u5f15\u7528\u7c7b\u578b",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,o=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"setstate"},"setState"),(0,r.kt)("h3",{id:"\u66f4\u65b0\u6570\u636e"},"\u66f4\u65b0\u6570\u636e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setState() \u662f\u5f02\u6b65\u66f4\u65b0\u6570\u636e\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u4f7f\u7528\u8be5\u8bed\u6cd5\u65f6\uff0c\u540e\u9762\u7684 setState() \u4e0d\u8981\u4f9d\u8d56\u4e8e\u524d\u9762\u7684 setState()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"1. \u5f53\u4f60\u8c03\u7528 setState \u7684\u65f6\u5019\uff0cReact.js \u5e76\u4e0d\u4f1a\u9a6c\u4e0a\u4fee\u6539 state \uff08\u4e3a\u4ec0\u4e48\uff09\n2. \u800c\u662f\u628a\u8fd9\u4e2a\u5bf9\u8c61\u653e\u5230\u4e00\u4e2a\u66f4\u65b0\u961f\u5217\u91cc\u9762\n3. \u7a0d\u540e\u624d\u4f1a\u4ece\u961f\u5217\u5f53\u4e2d\u628a\u65b0\u7684\u72b6\u6001\u63d0\u53d6\u51fa\u6765\u5408\u5e76\u5230 state \u5f53\u4e2d\uff0c\u7136\u540e\u518d\u89e6\u53d1\u7ec4\u4ef6\u66f4\u65b0\u3002\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u591a\u6b21\u8c03\u7528 setState() \uff0c\u53ea\u4f1a\u89e6\u53d1\u4e00\u6b21\u91cd\u65b0\u6e32\u67d3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.state = { count: 0 }\nthis.setState({\n    count: this.state.count + 1\n})\nconsole.log(this.state.count) // 0\n\n// setState\u5f02\u6b65\u7684\u610f\u5473\u7740\n// \u5f53\u8c03\u7528setState\u65f6, \u5f02\u6b65\u5728\u6d4f\u89c8\u5668\u6267\u884c,\n// \u53ef\u4ee5\u7406\u89e3\u4e3acount + 1\u4e0d\u662f\u7acb\u9a6c\u6267\u884c, \u800c\u662f\u7ee7\u7eed\u6267\u884c\u4e0b\u9762console.log\u4ee3\u7801\n// \u6240\u4ee5\u5148\u6253\u5370console, \u6253\u5370\u5b8c\u518d\u6267\u884csetState\n// \u56e0\u4e3asetState\u5e72\u4e24\u4ef6\u4e8b, \u66f4\u65b0dom\u5e76\u4e14\u4fee\u6539\u6570\u636e\u66f4\u65b0dom \n")),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 React.js \u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u9700\u8981\u62c5\u5fc3\u591a\u6b21\u8fdb\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," \u4f1a\u5e26\u6765\u6027\u80fd\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u63a8\u8350\u8bed\u6cd5"},"\u63a8\u8350\u8bed\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a8\u8350\uff1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"setState((preState) => {})")," \u8bed\u6cd5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd9\u6837\u5199\u53ef\u4ee5\u4f9d\u8d56\u5230\u4e0a\u4e00\u6b21\u7684state")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53c2\u6570preState: React.js \u4f1a\u628a\u4e0a\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"setState")," \u7684\u7ed3\u679c\u4f20\u5165\u8fd9\u4e2a\u51fd\u6570"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"this.setState((preState) => {\n    return {\n        count: preState.count + 1\n    }\n})\nconsole.log(this.state.count) // 1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u79cd\u8bed\u6cd5\u4f9d\u65e7\u662f\u5f02\u6b65\u7684\uff0c\u4f46\u662fstate\u53ef\u4ee5\u83b7\u53d6\u5230\u6700\u65b0\u7684\u72b6\u6001\uff0c\u9002\u7528\u4e8e\u9700\u8981\u8c03\u7528\u591a\u6b21setState")),(0,r.kt)("h3",{id:"\u7b2c\u4e8c\u4e2a\u53c2\u6570"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u573a\u666f\uff1a\u5728\u72b6\u6001\u66f4\u65b0\uff08\u9875\u9762\u5b8c\u6210\u91cd\u65b0\u6e32\u67d3\uff09\u540e\u7acb\u5373\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"setState(updater[, callback])")),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u4f1a\u7b49\u72b6\u6001\u66f4\u65b0\u5b8c , \u5305\u62ecdom\u91cd\u65b0\u6e32\u67d3\u4e4b\u540e\u624d\u4f1a\u6267\u884c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u56de\u8c03 ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"this.setState(\n    (state) => ({}),\n    () => {console.log('\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u4f1a\u5728\u72b6\u6001\u66f4\u65b0\u540e\u7acb\u5373\u6267\u884c')}\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.setState(\n    (state, props) => {},\n    () => {\n        document.title = '\u66f4\u65b0state\u540e\u7684\u6807\u9898\uff1a' + this.state.count\n    }\n)\n")),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u66f4\u65b0\u673a\u5236"},"\u7ec4\u4ef6\u66f4\u65b0\u673a\u5236"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"setState() \u7684\u4e24\u4e2a\u4f5c\u7528\uff1a 1. \u4fee\u6539 state 2. \u66f4\u65b0\u7ec4\u4ef6\uff08UI\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u8fc7\u7a0b\uff1a\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3\u5b50\u7ec4\u4ef6\u3002\u4f46\u53ea\u4f1a\u6e32\u67d3\u5f53\u524d\u7ec4\u4ef6\u5b50\u6811\uff08\u5f53\u524d\u7ec4\u4ef6\u53ca\u5176\u6240\u6709\u5b50\u7ec4\u4ef6\uff09")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(78995).Z})," "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"s")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"props2\u66f4\u65b0\u4e86,",(0,r.kt)("br",{parentName:"p"}),"\n","\u4e0b\u9762\u7684child1\u548cchild2\u4ee5\u53ca\u5b59\u7ec4\u4ef6\u90fd\u8ddf\u7740\u66f4\u65b0",(0,r.kt)("br",{parentName:"p"}),"\n","\u867d\u7136\u6027\u80fd\u6ca1\u6709\u592a\u5927\u5f71\u54cd, \u4f46\u662f\u8003\u8651\u5982\u4f55\u8fdb\u884c\u4e00\u4e9b\u4f18\u5316.",(0,r.kt)("br",{parentName:"p"}),"\n","\u89c1\u4e0b"))),(0,r.kt)("h3",{id:"\u7ec4\u4ef6\u6027\u80fd\u4f18\u5316"},"\u7ec4\u4ef6\u6027\u80fd\u4f18\u5316"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u529f\u80fd\u7b2c\u4e00"),(0,r.kt)("li",{parentName:"ol"},"\u6027\u80fd\u4f18\u5316")),(0,r.kt)("h3",{id:"\u51cf\u8f7bstate"},"\u51cf\u8f7bstate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u51cf\u8f7b state\uff1a\u53ea\u5b58\u50a8\u8ddf\u7ec4\u4ef6\u6e32\u67d3\u76f8\u5173\u7684\u6570\u636e\uff08\u6bd4\u5982\uff1acount / \u5217\u8868\u6570\u636e / loading \u7b49\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u4e0d\u7528\u505a\u6e32\u67d3\u7684\u6570\u636e\u4e0d\u8981\u653e\u5728 state \u4e2d\uff0c\u6bd4\u5982\u5b9a\u65f6\u5668 id\u7b49  "),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u79cd\u4e1c\u897f\u4f1a\u53d8, \u4f46\u662f\u53d8\u4e86\u4e0d\u9700\u8981\u91cd\u65b0\u66f4\u65b0dom, \u5c31\u4e0d\u8981\u653e\u5230state\u4e2d  "),(0,r.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u5982\u679c\u8981\u6539\u9700\u8981setState\u53bb\u6539, \u7528setState\u6539\u5c31\u4f1a\u5bfc\u81f4\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0, \u4e0b\u9762\u4ee3\u7801    "),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u8fd9\u79cd\u9700\u8981\u5728\u591a\u4e2a\u65b9\u6cd5\u4e2d\u7528\u5230\u7684\u6570\u636e\uff0c\u5e94\u8be5\u76f4\u63a5\u653e\u5728 this \u4e2d ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"this.xxx = 'bbb'"),(0,r.kt)("li",{parentName:"ul"},"this.xxx")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class Hello extends Component {\n    componentDidMount() {\n        // timerId\u5b58\u50a8\u5230this\u4e2d\uff0c\u800c\u4e0d\u662fstate\u4e2d\n        this.timerId = setInterval(() => {}, 2000)\n    }\n    componentWillUnmount() {\n        clearInterval(this.timerId)\n    }\n    render() { \u2026 }\n}\n")),(0,r.kt)("p",null,"vue\u4e2d\u4e0d\u8981\u628a\u548c\u6e32\u67d3\u65e0\u5173\u7684\u6570\u636e\u653e\u5230data\u4e2d"),(0,r.kt)("h3",{id:"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3"},"\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u66f4\u65b0\u673a\u5236\uff1a\u7236\u7ec4\u4ef6\u66f4\u65b0\u4f1a\u5f15\u8d77\u5b50\u7ec4\u4ef6\u4e5f\u88ab\u66f4\u65b0\uff0c\u8fd9\u79cd\u601d\u8def\u5f88\u6e05\u6670")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u95ee\u9898\uff1a\u5b50\u7ec4\u4ef6\u6ca1\u6709\u4efb\u4f55\u53d8\u5316\u65f6\u4e5f\u4f1a\u91cd\u65b0\u6e32\u67d3 \uff08\u63a5\u6536\u5230\u7684props\u6ca1\u6709\u53d1\u751f\u4efb\u4f55\u7684\u6539\u53d8\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u4f55\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u91cd\u65b0\u6e32\u67d3\u5462\uff1f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u51b3\u65b9\u5f0f\uff1a\u4f7f\u7528\u94a9\u5b50\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"shouldComponentUpdate(nextProps, nextState)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u901a\u8fc7\u8fd4\u56de\u503c\u51b3\u5b9a\u8be5\u7ec4\u4ef6\u662f\u5426\u91cd\u65b0\u6e32\u67d3\uff0c\u8fd4\u56de true \u8868\u793a\u91cd\u65b0\u6e32\u67d3\uff0cfalse \u8868\u793a\u4e0d\u91cd\u65b0\u6e32\u67d3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e6\u53d1\u65f6\u673a\uff1a\u66f4\u65b0\u9636\u6bb5\u7684\u94a9\u5b50\u51fd\u6570\uff0c\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u524d\u6267\u884c \uff08shouldComponentUpdate => render\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class Hello extends Component {\n    shouldComponentUpdate() {\n        // \u6839\u636e\u6761\u4ef6\uff0c\u51b3\u5b9a\u662f\u5426\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\n        return false\n    }\n    render() {\u2026}\n}\n\n shouldComponentUpdate(nextProps, nextState) {\n        console.log(this.props)  // \u8fd9\u91cc\u6253\u5370\u7684props\u662f\u66f4\u65b0\u524d\u7684\n        console.log(nextProps)  // \u662f\u5373\u5c06\u8981\u66f4\u65b0\u65f6\u7684props, \u4e5f\u5c31\u662f\u63a5\u6536\u5230\u7684props\n        return false\n    }\n    render() {\u2026}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(83110).Z})," "),(0,r.kt)("h2",{id:"\u7eaf\u7ec4\u4ef6"},"\u7eaf\u7ec4\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7eaf\u7ec4\u4ef6\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"React.PureComponent")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"li"},"React.Component "),"\u529f\u80fd\u76f8\u4f3c"),(0,r.kt)("li",{parentName:"ul"},"\u533a\u522b\uff1aPureComponent \u5185\u90e8\u81ea\u52a8\u5b9e\u73b0\u4e86 shouldComponentUpdate \u94a9\u5b50\uff0c\u4e0d\u9700\u8981\u624b\u52a8\u6bd4\u8f83"),(0,r.kt)("li",{parentName:"ul"},"\u539f\u7406\uff1a\u7eaf\u7ec4\u4ef6\u5185\u90e8\u901a\u8fc7\u5206\u522b \u5bf9\u6bd4 \u524d\u540e\u4e24\u6b21 props \u548c state \u7684\u503c\uff0c\u6765\u51b3\u5b9a\u662f\u5426\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6ce8\u610f\u7eaf\u7ec4\u4ef6\u5185\u90e8\u7528\u5230\u7684\u662f\u6d45\u5c42\u5bf9\u6bd4(shallow compare)  "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class Hello extends React.PureComponent {\n    render() {\n        return (\n            <div>\u7eaf\u7ec4\u4ef6</div>\n        )\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ea\u6709\u5728\u6027\u80fd\u4f18\u5316\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u7528\u5230\u7eaf\u7ec4\u4ef6\uff0c\u4e0d\u8981\u6240\u6709\u7684\u7ec4\u4ef6\u90fd\u4f7f\u7528\u7eaf\u7ec4\u4ef6\uff0c\u56e0\u4e3a\u7eaf\u7ec4\u4ef6\u9700\u8981\u6d88\u8017\u6027\u80fd\u8fdb\u884c\u5bf9\u6bd4")),(0,r.kt)("h3",{id:"\u6d45\u5c42\u5bf9\u6bd4shallow-compare"},"\u6d45\u5c42\u5bf9\u6bd4(shallow compare)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'-----------\u503c\u6bd4\u8f83-------------\nclass App extends React.PureComponent {\n  state = {\n    msg: "hello"\n  }\n  render() {\n    console.log(\'render\')\n    return (\n      <div>\n        <h1>app\u7ec4\u4ef6-- {this.state.msg}</h1>\n        <button onClick={this.handleClick}>\u4fee\u6539</button>\n       </div>\n    );\n  }\n\n  handleClick = () => {\n    this.setState({ msg: "world" });\n  }\n}\n\n// msg\u53d8\u4e3aworld\u4e4b\u540e, render\u4e0d\u4f1a\u518d\u6b21\u6253\u5370\n\n\n-----------\u5f15\u7528\u7c7b\u578b\u6bd4\u8f83-------------\nclass App extends React.PureComponent {\n  state = {\n    msg: "hello",\n    user: {\n      name: "zs",\n      age: 18,\n    },\n  };\n  render() {\n    console.log("render");\n    return (\n      <div>\n        <h1>app\u7ec4\u4ef6-- {this.state.msg}</h1>\n        <div>{this.state.user.name} - {this.state.user.age}</div>\n        <button onClick={this.handleClick}>\u4fee\u6539</button>\n      </div>\n    );\n  }\n\n  handleClick = () => {\n    // this.setState({ msg: "wrold" });\n    this.setState({\n      user: {\n        ...this.state.user,\n        age: 20\n      }\n    })\n  };\n}\n// \u8fd9\u6837user\u7ed9\u7684\u662f\u65b0\u5bf9\u8c61, \u6240\u4ee5\u5bf9\u6bd4\u65f6\u53d1\u73b0, user\u53d8\u5316\u4e86\n// \u56e0\u4e3a\u65b0\u8001\u5bf9\u8c61\u4e0d\u4e00\u6837, \u8fd9\u6837\u662f\u6b63\u786e\u7684\u7528\u6cd5.\n// \u5982\u679c\u9519\u8bef\u7684\u7528\u6cd5\u5982\u4e0b\n  handleClick = () => {\n    this.state.user.age = 20 \n    this.setState({\n      user: this.state.user\n    })\n  };\n\n// \u8fd9\u6837\u4f9d\u7136\u4e0d\u4f1a\u66f4\u65b0, \u56e0\u4e3a\u5224\u65ad\u51fauser\u8fd8\u662f\u539f\u6765\u7684user\n// \u6d45\u5c42\u5bf9\u6bd4\u53ea\u5224\u65ad\u5f53\u524d\u5bf9\u8c61\u662f\u5426\u662f\u65b0\u5bf9\u8c61, \u4e0d\u662f\u65b0\u5bf9\u8c61\u5c31\u4e0d\u4f1a\u66f4\u65b0 \n// \u6240\u4ee5\u4e0d\u8981\u6539\u539f\u6765\u7684\u6570\u636e, \u8981\u7ed9\u65b0\u6570\u636e\n')),(0,r.kt)("h3",{id:"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u503c\u7c7b\u578b"},"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u503c\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a\u7eaf\u7ec4\u4ef6\u5185\u90e8\u7684\u5bf9\u6bd4\u662f shallow compare\uff08\u6d45\u5c42\u5bf9\u6bd4\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u503c\u7c7b\u578b\u6765\u8bf4\uff1a\u6bd4\u8f83\u4e24\u4e2a\u503c\u662f\u5426\u76f8\u540c\uff08\u76f4\u63a5\u8d4b\u503c\u5373\u53ef\uff0c\u6ca1\u6709\u5751\uff09"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"let number = 0\nlet newNumber = number\nnewNumber = 2\nconsole.log(number === newNumber) // false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"state = { number: 0 }\nsetState({\n  number: Math.floor(Math.random() * 3)\n})\n// PureComponent\u5185\u90e8\u5bf9\u6bd4\uff1a\n\u6700\u65b0\u7684state.number === \u4e0a\u4e00\u6b21\u7684state.number // false\uff0c\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\n")),(0,r.kt)("h3",{id:"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u5f15\u7528\u7c7b\u578b"},"\u7eaf\u7ec4\u4ef6\u6bd4\u8f83-\u5f15\u7528\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u7eaf\u7ec4\u4ef6\u5185\u90e8\u7684\u5bf9\u6bd4\u662f shallow compare\uff08\u6d45\u5c42\u5bf9\u6bd4\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5f15\u7528\u7c7b\u578b\u6765\u8bf4\uff1a\u53ea\u6bd4\u8f83\u5bf9\u8c61\u7684\u5f15\u7528\uff08\u5730\u5740\uff09\u662f\u5426\u76f8\u540c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const obj = { number: 0 }\nconst newObj = obj\nnewObj.number = 2\nconsole.log(newObj === obj) // true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"state = { obj: { number: 0 } }\n// \u9519\u8bef\u505a\u6cd5\nstate.obj.number = 2\nsetState({ obj: state.obj })\n// PureComponent\u5185\u90e8\u6bd4\u8f83\uff1a\n\u6700\u65b0\u7684state.obj === \u4e0a\u4e00\u6b21\u7684state.obj // true\uff0c\u4e0d\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\n")),(0,r.kt)("p",null,"\u7eaf\u7ec4\u4ef6\u7684\u6700\u4f73\u5b9e\u8df5\uff1a"),(0,r.kt)("p",null," \u6ce8\u610f\uff1astate \u6216 props \u4e2d\u5c5e\u6027\u503c\u4e3a\u5f15\u7528\u7c7b\u578b\u65f6\uff0c\u5e94\u8be5\u521b\u5efa\u65b0\u6570\u636e\uff0c\u4e0d\u8981\u76f4\u63a5\u4fee\u6539\u539f\u6570\u636e\uff01"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u6b63\u786e\uff01\u521b\u5efa\u65b0\u6570\u636e\nconst newObj = {...state.obj, number: 2}\nsetState({ obj: newObj })\n// \u6b63\u786e\uff01\u521b\u5efa\u65b0\u6570\u636e\n// \u4e0d\u8981\u7528\u6570\u7ec4\u7684push / unshift \u7b49\u76f4\u63a5\u4fee\u6539\u5f53\u524d\u6570\u7ec4\u7684\u7684\u65b9\u6cd5\n// \u800c\u5e94\u8be5\u7528 concat \u6216 slice \u7b49\u8fd9\u4e9b\u8fd4\u56de\u65b0\u6570\u7ec4\u7684\u65b9\u6cd5\nthis.setState({\n    list: [...this.state.list, {\u65b0\u6570\u636e}]\n})\n\n")))}m.isMDXComponent=!0},83110:function(e,t,n){t.Z=n.p+"assets/images/scu-3318d4ef8fcce54863f531e516cc4b1d.jpg"},78995:function(e,t,n){t.Z=n.p+"assets/images/\u7ec4\u4ef6\u66f4\u65b0-e8ef92efc7c58bf9ea02d5fa0732d3dc.png"}}]);