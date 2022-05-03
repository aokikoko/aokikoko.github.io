"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8940],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=l,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81075:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(87462),l=t(63366),i=(t(67294),t(3905)),r=["components"],o={title:"[React] \u8868\u5355\u5904\u7406",sidebar_position:4},s=void 0,c={unversionedId:"React/form",id:"React/form",title:"[React] \u8868\u5355\u5904\u7406",description:"\u8868\u5355\u5904\u7406",source:"@site/docs/React/form.md",sourceDirName:"React",slug:"/React/form",permalink:"/docs/React/form",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/React/form.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"[React] \u8868\u5355\u5904\u7406",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"[React] \u4e8b\u4ef6\u5904\u7406",permalink:"/docs/React/event"},next:{title:"[React] \u7ec4\u4ef6\u901a\u8baf",permalink:"/docs/React/props"}},u=[{value:"\u8868\u5355\u5904\u7406",id:"\u8868\u5355\u5904\u7406",children:[{value:"\u53d7\u63a7\u7ec4\u4ef6\u57fa\u672c\u6982\u5ff5",id:"\u53d7\u63a7\u7ec4\u4ef6\u57fa\u672c\u6982\u5ff5",children:[],level:3},{value:"\u53d7\u63a7\u7ec4\u4ef6\u4f7f\u7528\u6b65\u9aa4",id:"\u53d7\u63a7\u7ec4\u4ef6\u4f7f\u7528\u6b65\u9aa4",children:[],level:3},{value:"\u5e38\u89c1\u7684\u53d7\u63a7\u7ec4\u4ef6",id:"\u5e38\u89c1\u7684\u53d7\u63a7\u7ec4\u4ef6",children:[],level:3},{value:"\u591a\u8868\u5355\u5143\u7d20\u7684\u4f18\u5316",id:"\u591a\u8868\u5355\u5143\u7d20\u7684\u4f18\u5316",children:[],level:3},{value:"\u5c5e\u6027\u540d\u8868\u8fbe\u5f0f",id:"\u5c5e\u6027\u540d\u8868\u8fbe\u5f0f",children:[],level:3}],level:2},{value:"\u975e\u53d7\u63a7\u7ec4\u4ef6",id:"\u975e\u53d7\u63a7\u7ec4\u4ef6",children:[{value:"react\u4e2dref\u4f7f\u7528\u6b65\u9aa4",id:"react\u4e2dref\u4f7f\u7528\u6b65\u9aa4",children:[],level:3}],level:2},{value:"\u5217\u8868\u5c55\u793a\u529f\u80fd",id:"\u5217\u8868\u5c55\u793a\u529f\u80fd",children:[],level:2},{value:"\u53d1\u8868\u8bc4\u8bba\u529f\u80fd",id:"\u53d1\u8868\u8bc4\u8bba\u529f\u80fd",children:[],level:2},{value:"\u6e05\u7a7a\u8bc4\u8bba\u529f\u80fd",id:"\u6e05\u7a7a\u8bc4\u8bba\u529f\u80fd",children:[],level:2},{value:"\u4ee3\u7801\u5c55\u793a",id:"\u4ee3\u7801\u5c55\u793a",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8868\u5355\u5904\u7406"},"\u8868\u5355\u5904\u7406"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u64cd\u4f5c\u8868\u5355\u5143\u7d20\uff0c\u6bd4\u5982\u83b7\u53d6\u8868\u5355\u7684\u503c\u6216\u8005\u662f\u8bbe\u7f6e\u8868\u5355\u7684\u503c\u3002")),(0,i.kt)("p",null,"react\u4e2d\u5904\u7406\u8868\u5355\u5143\u7d20\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53d7\u63a7\u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u975e\u53d7\u63a7\u7ec4\u4ef6\uff08DOM\u64cd\u4f5c\uff09")),(0,i.kt)("h3",{id:"\u53d7\u63a7\u7ec4\u4ef6\u57fa\u672c\u6982\u5ff5"},"\u53d7\u63a7\u7ec4\u4ef6\u57fa\u672c\u6982\u5ff5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"HTML\u4e2d\u8868\u5355\u5143\u7d20\u662f\u53ef\u8f93\u5165\u7684\uff0c\u5373\u8868\u5355\u7528\u6237\u5e76\u7ef4\u62a4\u7740\u81ea\u5df1\u7684\u53ef\u53d8\u72b6\u6001\uff08value\uff09\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f46\u662f\u5728react\u4e2d\uff0c\u53ef\u53d8\u72b6\u6001\u901a\u5e38\u662f\u4fdd\u5b58\u5728state\u4e2d\u7684\uff0c\u5e76\u4e14\u8981\u6c42\u72b6\u6001\u53ea\u80fd\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"setState"),"\u8fdb\u884c\u4fee\u6539\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React\u4e2d\u5c06state\u4e2d\u7684\u6570\u636e\u4e0e\u8868\u5355\u5143\u7d20\u7684value\u503c\u7ed1\u5b9a\u5230\u4e86\u4e00\u8d77\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u7531state\u7684\u503c\u6765\u63a7\u5236\u8868\u5355\u5143\u7d20\u7684\u503c"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53d7\u63a7\u7ec4\u4ef6\uff1a",(0,i.kt)("strong",{parentName:"p"},"value\u503c\u53d7\u5230\u4e86react\u63a7\u5236\u7684\u8868\u5355\u5143\u7d20")," "))),(0,i.kt)("h3",{id:"\u53d7\u63a7\u7ec4\u4ef6\u4f7f\u7528\u6b65\u9aa4"},"\u53d7\u63a7\u7ec4\u4ef6\u4f7f\u7528\u6b65\u9aa4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728state\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u72b6\u6001\uff0c\u4f5c\u4e3a\u8868\u5355\u5143\u7d20\u7684value\u503c\uff08\u63a7\u5236\u8868\u5355\u5143\u7d20\u7684\u503c\uff09"),(0,i.kt)("li",{parentName:"ol"},"\u7ed9\u8868\u5355\u5143\u7d20\u6dfb\u52a0change\u4e8b\u4ef6\uff0c\u8bbe\u7f6estate\u7684\u503c\u4e3a\u8868\u5355\u5143\u7d20\u7684\u503c\uff08\u63a7\u5236\u503c\u7684\u53d8\u5316\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"class App extends React.Component {\n  state = {\n    msg: 'hello react'\n  }\n\n  handleChange = (e) => {\n    this.setState({\n      msg: e.target.value\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        <input type=\"text\" value={this.state.msg} onChange={this.handleChange}/>\n      </div>\n    )\n  }\n}\n")),(0,i.kt)("h3",{id:"\u5e38\u89c1\u7684\u53d7\u63a7\u7ec4\u4ef6"},"\u5e38\u89c1\u7684\u53d7\u63a7\u7ec4\u4ef6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6587\u672c\u6846\u3001\u6587\u672c\u57df\u3001\u4e0b\u62c9\u6846\uff08\u64cd\u4f5cvalue\u5c5e\u6027\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u590d\u9009\u6846\uff08\u64cd\u4f5cchecked\u5c5e\u6027\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'class App extends React.Component {\n  state = {\n    usernmae: \'\',\n    desc: \'\',\n    city: "2",\n    isSingle: true\n  }\n \n  handleName = e => {\n    this.setState({\n      name: e.target.value\n    })\n  }\n  handleDesc = e => {\n    this.setState({\n      desc: e.target.value\n    })\n  }\n  handleCity = e => {\n    this.setState({\n      city: e.target.value\n    })\n  }\n  handleSingle = e => {\n    this.setState({\n      isSingle: e.target.checked\n    })\n  }\n\n  render() {\n    return (\n      <div>\n        \u59d3\u540d\uff1a<input type="text" value={this.state.username} onChange={this.handleName}/>\n        <br/>\n        \u63cf\u8ff0\uff1a<textarea value={this.state.desc} onChange={this.handleDesc}></textarea>\n        <br/>\n        \u57ce\u5e02\uff1a<select value={this.state.city} onChange={this.handleCity}>\n          <option value="1">\u5317\u4eac</option>\n          <option value="2">\u4e0a\u6d77</option>\n          <option value="3">\u5e7f\u5dde</option>\n          <option value="4">\u6df1\u5733</option>\n        </select>\n        <br/>\n        \u662f\u5426\u5355\u8eab\uff1a<input type="checkbox" checked={this.state.isSingle} onChange={this.handleSingle}/>\n      </div>\n    )\n  }\n}\n')),(0,i.kt)("h3",{id:"\u591a\u8868\u5355\u5143\u7d20\u7684\u4f18\u5316"},"\u591a\u8868\u5355\u5143\u7d20\u7684\u4f18\u5316"),(0,i.kt)("p",null,"\u95ee\u9898\uff1a\u6bcf\u4e2a\u8868\u5355\u5143\u7d20\u90fd\u9700\u8981\u4e00\u4e2a\u5355\u72ec\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5904\u7406\u592a\u7e41\u7410"),(0,i.kt)("p",null,"\u4f18\u5316\uff1a\u4f7f\u7528\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5904\u7406\u591a\u4e2a\u8868\u5355\u5143\u7d20"),(0,i.kt)("p",null,"\u6b65\u9aa4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed9\u8868\u5355\u5143\u7d20\u6dfb\u52a0name\u5c5e\u6027\uff0c\u540d\u79f0\u4e0estate\u5c5e\u6027\u540d\u76f8\u540c"),(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e\u8868\u5355\u5143\u7d20\u7c7b\u578b\u83b7\u53d6\u5bf9\u5e94\u7684\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"[name]"),"\u4fee\u6539\u5bf9\u5e94\u7684state")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'class App extends React.Component {\n  state = {\n    username: \'\',\n    desc: \'\',\n    city: "2",\n    isSingle: true\n  }\n \n  handleChange = e => {\n    let {name, type, value, checked} = e.target\n    console.log(name, type, value, checked)\n    value = type === \'checkbox\' ? checked : value\n    console.log(name, value)\n    this.setState({\n      [name]: value\n    })\n  }\n  render() {\n    return (\n      <div>\n        \u59d3\u540d\uff1a<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>\n        <br/>\n        \u63cf\u8ff0\uff1a<textarea name="desc" value={this.state.desc} onChange={this.handleChange}></textarea>\n        <br/>\n        \u57ce\u5e02\uff1a<select name="city" value={this.state.city} onChange={this.handleChange}>\n          <option value="1">\u5317\u4eac</option>\n          <option value="2">\u4e0a\u6d77</option>\n          <option value="3">\u5e7f\u5dde</option>\n          <option value="4">\u6df1\u5733</option>\n        </select>\n        <br/>\n        \u662f\u5426\u5355\u8eab\uff1a<input type="checkbox" name="isSingle" checked={this.state.isSingle} onChange={this.handleChange}/>\n      </div>\n    )\n  }\n}\n')),(0,i.kt)("h3",{id:"\u5c5e\u6027\u540d\u8868\u8fbe\u5f0f"},"\u5c5e\u6027\u540d\u8868\u8fbe\u5f0f"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u56de\u987eES6\u5c5e\u6027\u540d\u8868\u8fbe\u5f0f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5728es6\u4ee5\u524d, \u5c5e\u6027\u7684\u540d\u5b57\u5fc5\u987b\u662f\u6307\u5b9a\u597d\u7684, \u5c5e\u6027\u7684\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u8868\u8fbe\u5f0f\nconst obj = {\n  name: 'zs' + 'ls',\n  age: 18 + 100,\n}\n// \u5728es6\u4ee5\u540e, \u5c5e\u6027\u7684\u540d\u5b57\u4e5f\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u8868\u8fbe\u5f0f, \u524d\u63d0: \u653e\u5728 [] \u4e2d\nconst key = 'age'\nconst obj = {\n  ['na' + 'me'] : 'zs',\n  [key]: 200,\n}\n")))),(0,i.kt)("h2",{id:"\u975e\u53d7\u63a7\u7ec4\u4ef6"},"\u975e\u53d7\u63a7\u7ec4\u4ef6"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u975e\u53d7\u63a7\u7ec4\u4ef6\u501f\u52a9\u4e8eref\uff0c\u4f7f\u7528\u539f\u751fDOM\u7684\u65b9\u5f0f\u6765\u83b7\u53d6\u8868\u5355\u5143\u7d20\u7684\u503c",(0,i.kt)("br",{parentName:"p"}),"\n","ref\u4f5c\u7528: \u7ed9\u67d0\u4e2adom\u6216\u8005\u7ec4\u4ef6\u52a0\u5f15\u7528 vue\u4e2d\u7528this.$refs")),(0,i.kt)("h3",{id:"react\u4e2dref\u4f7f\u7528\u6b65\u9aa4"},"react\u4e2dref\u4f7f\u7528\u6b65\u9aa4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"React.createRef()"),"\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2aref")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"constructor() {\n  super()\n  this.txtRef = React.createRef()\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7ref={this.xxx} \u5173\u8054\u7ed9\u67d0\u4e2aDOM\u5bf9\u8c61\u6216\u8005\u7ec4\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<input type="text" ref={this.txtRef}/>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7this.xxx.current\u5c5e\u6027\u83b7\u53d6\u5230\u5bf9\u5e94\u7684DOM")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"handleClick = () => {\n  console.log(this.txtRef.current.value)\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u975e\u53d7\u63a7\u7ec4\u4ef6\u7528\u7684\u4e0d\u591a\uff0c\u63a8\u8350\u4f7f\u7528\u53d7\u63a7\u7ec4\u4ef6",(0,i.kt)("br",{parentName:"p"}),"\n","\u9664\u975e\u771f\u7684\u8981\u64cd\u4f5c\u67d0\u4e2adom\u5bf9\u8c61,",(0,i.kt)("br",{parentName:"p"}),"\n","\u6216\u8005\u4f7f\u7528\u7ec4\u4ef6\u91cc\u67d0\u4e2a\u65b9\u6cd5\u7b49\u573a\u666f "))),(0,i.kt)("h1",{id:"\u7efc\u5408\u6848\u4f8b"},"\u7efc\u5408\u6848\u4f8b"),(0,i.kt)("p",null,"\u8bc4\u8bba\u5217\u8868\u6848\u4f8b"),(0,i.kt)("h2",{id:"\u5217\u8868\u5c55\u793a\u529f\u80fd"},"\u5217\u8868\u5c55\u793a\u529f\u80fd"),(0,i.kt)("p",null,"\u6e32\u67d3\u8bc4\u8bba\u5217\u8868\uff08\u5217\u8868\u6e32\u67d3\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728state\u4e2d\u521d\u59cb\u5316\u8bc4\u8bba\u5217\u8868\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6570\u7ec4\u7684map\u65b9\u6cd5\u904d\u5386\u5217\u8868\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u7ed9\u6bcf\u4e2ali\u6dfb\u52a0key\u5c5e\u6027")),(0,i.kt)("h2",{id:"\u53d1\u8868\u8bc4\u8bba\u529f\u80fd"},"\u53d1\u8868\u8bc4\u8bba\u529f\u80fd"),(0,i.kt)("p",null,"\u83b7\u53d6\u8bc4\u8bba\u4fe1\u606f\uff0c\u8bc4\u8bba\u4eba\u548c\u8bc4\u8bba\u5185\u5bb9\uff08\u53d7\u63a7\u7ec4\u4ef6\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u53d7\u63a7\u7ec4\u4ef6\u7684\u65b9\u5f0f\u83b7\u53d6\u8bc4\u8bba\u6570\u636e")),(0,i.kt)("p",null,"\u53d1\u8868\u8bc4\u8bba\uff0c\u66f4\u65b0\u8bc4\u8bba\u5217\u8868\uff08\u66f4\u65b0\u72b6\u6001\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7ed9comments\u589e\u52a0\u4e00\u6761\u6570\u636e")),(0,i.kt)("p",null,"\u8fb9\u754c\u5904\u7406"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6e05\u7a7a\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u5224\u65ad\u975e\u7a7a")),(0,i.kt)("h2",{id:"\u6e05\u7a7a\u8bc4\u8bba\u529f\u80fd"},"\u6e05\u7a7a\u8bc4\u8bba\u529f\u80fd"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7ed9\u6e05\u7a7a\u8bc4\u8bba\u6309\u94ae\u6ce8\u518c\u4e8b\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6e05\u7a7a\u8bc4\u8bba\u5217\u8868")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6ca1\u6709\u66f4\u591a\u8bc4\u8bba\u7684\u5904\u7406"))),(0,i.kt)("h2",{id:"\u4ee3\u7801\u5c55\u793a"},"\u4ee3\u7801\u5c55\u793a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport "./index.css";\n\nclass App extends React.Component {\n  state = {\n    list: [\n      {\n        id: 1,\n        name: "\u738b\u601d\u806a",\n        content: "\u60f3\u4f60\u7684\u591c",\n      },\n      {\n        id: 2,\n        name: "\u738b\u5065\u6797",\n        content: "\u9876\u4e00\u4e2a\u5c0f\u76ee\u6807",\n      },\n      {\n        id: 3,\n        name: "\u9a6c\u4e91",\n        content: "\u6211\u5bf9\u94b1\u4e0d\u611f\u5174\u8da3",\n      },\n    ],\n    name: "",\n    content: "",\n  };\n  render() {\n    return (\n      <div className="app">\n        <div>\n          <input\n            name="name"\n            onChange={this.handleChange}\n            className="user"\n            type="text"\n            placeholder="\u8bf7\u8f93\u5165\u8bc4\u8bba\u4eba"\n            value={this.state.name}\n          />\n          <br />\n          <textarea\n            className="content"\n            cols="30"\n            rows="10"\n            placeholder="\u8bf7\u8f93\u5165\u8bc4\u8bba\u5185\u5bb9"\n            value={this.state.content}\n            onChange={this.handleChange}\n            name="content"\n          />\n          <br />\n          <button onClick={this.add}>\u53d1\u8868\u8bc4\u8bba</button>\n          <button onClick={this.clear}>\u6e05\u7a7a\u8bc4\u8bba</button>\n        </div>\n        {this.renderList()}\n      </div>\n    );\n  }\n\n  renderList() {\n    if (this.state.list.length === 0) {\n      return <div className="no-comment">\u6682\u65e0\u8bc4\u8bba</div>;\n    }\n    return (\n      <ul>\n        {this.state.list.map((item) => {\n          return (\n            <li key={item.id}>\n              <h3>\u8bc4\u8bba\u4eba\uff1a{item.name}</h3>\n              <p>\u8bc4\u8bba\u5185\u5bb9\uff1a{item.content}</p>\n              {/* \u7b2c\u4e00\u79cd\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u89e3\u51b3\u4f20\u53c2\u95ee\u9898 */}\n              {/* <button onClick={() => this.del(item.id)}>\u5220\u9664</button> */}\n              {/* \u7b2c\u4e8c\u79cd\u4f7f\u7528bind\u89e3\u51b3\u4f20\u53c2\u95ee\u9898 */}\n              <button onClick={this.del.bind(this, item.id)}>\u5220\u9664</button>\n            </li>\n          );\n        })}\n      </ul>\n    );\n  }\n\n  clear = () => {\n    this.setState({\n      list: [],\n    });\n  };\n\n  del = (id) => {\n    this.setState({\n      list: this.state.list.filter((item) => {\n        return item.id !== id;\n      }),\n    });\n  };\n\n  handleChange = (e) => {\n    const {name, value} = e.target;\n    this.setState({\n      [name]: value\n    })\n  }\n\n  add = () => {\n    const {name, content, list} = this.state\n    if (!name || !content) {\n      return alert(\'\u8bf7\u8f93\u5165\u8bc4\u8bba\u4eba\u6216\u8bc4\u8bba\u5185\u5bb9\')\n    }\n    this.setState({\n      list: [{id: Date.now(), name, content},...list],\n      name: \'\',\n      content: \'\'\n    })\n  }\n}\n\n// \u6e32\u67d3\u7ec4\u4ef6\nReactDOM.render(<App />, document.getElementById("root"));\n\n')))}m.isMDXComponent=!0}}]);