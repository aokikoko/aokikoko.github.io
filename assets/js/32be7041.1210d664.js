"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4432],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),A=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=A(e.components);return r.createElement(s.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=A(t),d=a,m=c["".concat(s,".").concat(d)]||c[d]||i[d]||l;return t?r.createElement(m,p(p({ref:n},u),{},{components:t})):r.createElement(m,p({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var A=2;A<l;A++)p[A]=t[A];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7275:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return A},toc:function(){return u},default:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),p=["components"],o={title:"[React] \u7ec4\u4ef6\u901a\u8baf",sidebar_position:5},s=void 0,A={unversionedId:"React/props",id:"React/props",title:"[React] \u7ec4\u4ef6\u901a\u8baf",description:"\u7ec4\u4ef6\u901a\u8baf",source:"@site/docs/React/props.md",sourceDirName:"React",slug:"/React/props",permalink:"/docs/React/props",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/React/props.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"[React] \u7ec4\u4ef6\u901a\u8baf",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"[React] \u8868\u5355\u5904\u7406",permalink:"/docs/React/form"},next:{title:"[React] \u751f\u547d\u5468\u671f",permalink:"/docs/React/lifecycle"}},u=[{value:"\u7ec4\u4ef6\u901a\u8baf",id:"\u7ec4\u4ef6\u901a\u8baf",children:[],level:2},{value:"props",id:"props",children:[{value:"\u51fd\u6570\u7ec4\u4ef6\u901a\u8baf",id:"\u51fd\u6570\u7ec4\u4ef6\u901a\u8baf",children:[],level:3},{value:"\u7c7b\u7ec4\u4ef6\u901a\u8baf",id:"\u7c7b\u7ec4\u4ef6\u901a\u8baf",children:[],level:3},{value:"props\u7684\u7279\u70b9",id:"props\u7684\u7279\u70b9",children:[],level:3}],level:2},{value:"\u7ec4\u4ef6\u901a\u8baf\u4e09\u79cd\u65b9\u5f0f",id:"\u7ec4\u4ef6\u901a\u8baf\u4e09\u79cd\u65b9\u5f0f",children:[{value:"\u7236\u4f20\u5b50",id:"\u7236\u4f20\u5b50",children:[],level:3},{value:"\u8bc4\u8bba\u5217\u8868\u6848\u4f8b",id:"\u8bc4\u8bba\u5217\u8868\u6848\u4f8b",children:[],level:3},{value:"\u5b50\u4f20\u7236",id:"\u5b50\u4f20\u7236",children:[],level:3},{value:"\u5144\u5f1f",id:"\u5144\u5f1f",children:[],level:3}],level:2},{value:"\u7ec4\u4ef6\u901a\u8baf-context",id:"\u7ec4\u4ef6\u901a\u8baf-context",children:[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[],level:3},{value:"\u5b9e\u73b0\u601d\u8def",id:"\u5b9e\u73b0\u601d\u8def",children:[],level:3}],level:2},{value:"props\u6df1\u5165",id:"props\u6df1\u5165",children:[{value:"children\u5c5e\u6027",id:"children\u5c5e\u6027",children:[],level:3},{value:"props\u6821\u9a8c",id:"props\u6821\u9a8c",children:[],level:3},{value:"\u4f7f\u7528\u6b65\u9aa4",id:"\u4f7f\u7528\u6b65\u9aa4",children:[],level:3},{value:"\u7ea6\u675f\u89c4\u5219",id:"\u7ea6\u675f\u89c4\u5219",children:[],level:3},{value:"props\u9ed8\u8ba4\u503c",id:"props\u9ed8\u8ba4\u503c",children:[],level:3}],level:2},{value:"\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u548c\u5b9e\u4f8b\u5c5e\u6027",id:"\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u548c\u5b9e\u4f8b\u5c5e\u6027",children:[{value:"\u5b9e\u4f8b\u6210\u5458",id:"\u5b9e\u4f8b\u6210\u5458",children:[],level:3},{value:"\u9759\u6001\u6210\u5458",id:"\u9759\u6001\u6210\u5458",children:[],level:3}],level:2}],i={toc:u};function c(e){var n=e.components,o=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u901a\u8baf"},"\u7ec4\u4ef6\u901a\u8baf"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u662f\u72ec\u7acb\u4e14\u5c01\u95ed\u7684\u5355\u5143\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ea\u80fd\u4f7f\u7528\u7ec4\u4ef6\u81ea\u5df1\u7684\u6570\u636e\u3002\u5728\u7ec4\u4ef6\u5316\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4e00\u4e2a\u5b8c\u6574\u7684\u529f\u80fd\n\u62c6\u5206\u6210\u591a\u4e2a\u7ec4\u4ef6\uff0c\u4ee5\u66f4\u597d\u7684\u5b8c\u6210\u6574\u4e2a\u5e94\u7528\u7684\u529f\u80fd\u3002\u800c\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u591a\u4e2a\u7ec4\u4ef6\u4e4b\u95f4\u4e0d\u53ef\u907f\u514d\u7684\u8981\u5171\u4eab\u67d0\u4e9b\u6570\u636e\n\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\uff0c\u5c31\u9700\u8981\u6253\u7834\u7ec4\u4ef6\u7684\u72ec\u7acb\u5c01\u95ed\u6027\uff0c\u8ba9\u5176\u4e0e\u5916\u754c\u6c9f\u901a\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u662f",(0,l.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u901a\u8baf"),"\u3002"),(0,l.kt)("p",null,"\u5927\u767d\u8bdd\uff1a\u4e00\u4e2a\u7ec4\u4ef6\u4f7f\u7528\u53e6\u4e00\u4e2a\u7ec4\u4ef6\u7684\u72b6\u6001"),(0,l.kt)("h2",{id:"props"},"props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u662f\u5c01\u95ed\u7684\uff0c\u8981\u63a5\u6536\u5916\u90e8\u6570\u636e\u5e94\u8be5\u901a\u8fc7props\u6765\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"props\u7684\u4f5c\u7528\uff1a\u63a5\u6536\u4f20\u9012\u7ed9\u7ec4\u4ef6\u7684\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},"\u4f20\u9012\u6570\u636e\uff1a\u7ed9\u7ec4\u4ef6\u6807\u7b7e\u6dfb\u52a0\u5c5e\u6027"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u6536\u6570\u636e\uff1a\u51fd\u6570\u7ec4\u4ef6\u901a\u8fc7\u53c2\u6570props\u63a5\u6536\u6570\u636e\uff0c\u7c7b\u7ec4\u4ef6\u901a\u8fc7this.props\u63a5\u6536\u6570\u636e")),(0,l.kt)("h3",{id:"\u51fd\u6570\u7ec4\u4ef6\u901a\u8baf"},"\u51fd\u6570\u7ec4\u4ef6\u901a\u8baf"),(0,l.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<Hello name="jack" age={19} />\n')),(0,l.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Hello({name, age}) {\n    // console.log(props)\n    return (\n        <div>\u63a5\u6536\u5230\u6570\u636e\uff1a{name}</div>\n    )\n}\n")),(0,l.kt)("h3",{id:"\u7c7b\u7ec4\u4ef6\u901a\u8baf"},"\u7c7b\u7ec4\u4ef6\u901a\u8baf"),(0,l.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<Hello name="jack" age={19} />\n')),(0,l.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Hello extends React.Component {\n    render() {\n        return (\n            <div>\u63a5\u6536\u5230\u7684\u6570\u636e\uff1a{this.props.age}</div>\n        )\n    }\n}\n")),(0,l.kt)("h3",{id:"props\u7684\u7279\u70b9"},"props\u7684\u7279\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u7ed9\u7ec4\u4ef6\u4f20\u9012\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"props\u662f\u53ea\u8bfb\u7684\uff0c\u4e0d\u5141\u8bb8\u4fee\u6539props\u7684\u6570\u636e\uff0c\u5355\u5411\u6570\u636e\u6d41: \u6570\u636e\u6d41\u52a8\u4ece\u7236\u7ec4\u4ef6\u6d41\u52a8\u5230\u5b50\u7ec4\u4ef6\n\u7236\u7ec4\u4ef6\u6570\u636e\u53d8\u4e86\u5b50\u7ec4\u4ef6\u8ddf\u7740\u66f4\u65b0, \u5b50\u7ec4\u4ef6\u6570\u636e\u53d8\u4e86\u7236\u7ec4\u4ef6\u4e0d\u53d8. \u9664\u975e\u5b50\u4f20\u7236")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a\u5728\u7c7b\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u7684\u65f6\u5019\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u9700\u8981\u628aprops\u4f20\u9012\u7ed9super()"),"\uff0c\u5426\u5219\u6784\u9020\u51fd\u6570\u65e0\u6cd5\u83b7\u53d6\u5230props"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export default class Demo extends Component {\n  constructor(props) {\n    super(props);\n    console.log(this.props)\n    this.state = {\n      money: this.props.money + 100\n    }\n  }\n  render() {\n    console.log(this.props)\n    return (\n      <div>\n        <h3>\u7c7b\u7ec4\u4ef6</h3>\n        <div>{this.state.money}</div>\n      </div>\n    );\n  }\n}\n")),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u901a\u8baf\u4e09\u79cd\u65b9\u5f0f"},"\u7ec4\u4ef6\u901a\u8baf\u4e09\u79cd\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7236\u4f20\u5b50"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u4f20\u7236"),(0,l.kt)("li",{parentName:"ul"},"\u975e\u7236\u5b50")),(0,l.kt)("h3",{id:"\u7236\u4f20\u5b50"},"\u7236\u4f20\u5b50"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7236\u7ec4\u4ef6\u63d0\u4f9b\u8981\u4f20\u9012\u7684state\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"\u7ed9\u5b50\u7ec4\u4ef6\u6807\u7b7e\u6dfb\u52a0\u5c5e\u6027\uff0c\u503c\u4e3a state \u4e2d\u7684\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"\u5b50\u7ec4\u4ef6\u4e2d\u901a\u8fc7 props \u63a5\u6536\u7236\u7ec4\u4ef6\u4e2d\u4f20\u9012\u7684\u6570\u636e")),(0,l.kt)("p",null,"\u7236\u7ec4\u4ef6\u63d0\u4f9b\u6570\u636e\u5e76\u4e14\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Parent extends React.Component {\n    state = { lastName: '\u738b' }\n    render() {\n        return (\n            <div>\n                \u4f20\u9012\u6570\u636e\u7ed9\u5b50\u7ec4\u4ef6\uff1a<Child name={this.state.lastName} />\n            </div>\n        )\n    }\n}\n")),(0,l.kt)("p",null,"\u5b50\u7ec4\u4ef6\u63a5\u6536\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function Child(props) {\n    return <div>\u5b50\u7ec4\u4ef6\u63a5\u6536\u5230\u6570\u636e\uff1a{props.name}</div>\n}\n")),(0,l.kt)("h3",{id:"\u8bc4\u8bba\u5217\u8868\u6848\u4f8b"},"\u8bc4\u8bba\u5217\u8868\u6848\u4f8b"),(0,l.kt)("h3",{id:"\u5b50\u4f20\u7236"},"\u5b50\u4f20\u7236"),(0,l.kt)("p",null,"\u5bf9\u6bd4Vue:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'// \u7236\u7ec4\u4ef6\u7ed9\u5b50\u7ec4\u4ef6\u7528@\u6ce8\u518c\u81ea\u5b9a\u4e49\u4e8b\u4ef6, \u6bd4\u5982@fn="fn"\n// $emit(fn)\u89e6\u53d1fn\u4e8b\u4ef6\n// \u800creact\u8fd8\u662f\u7528props \n')),(0,l.kt)("p",null,"\u601d\u8def\uff1a\u5229\u7528\u56de\u8c03\u51fd\u6570\uff0c\u7236\u7ec4\u4ef6\u63d0\u4f9b\u56de\u8c03\uff0c\u5b50\u7ec4\u4ef6\u8c03\u7528\uff0c\u5c06\u8981\u4f20\u9012\u7684\u6570\u636e\u4f5c\u4e3a\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7236\u7ec4\u4ef6\u63d0\u4f9b\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff08\u7528\u4e8e\u63a5\u6536\u6570\u636e\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u8be5\u51fd\u6570\u4f5c\u4e3a\u5c5e\u6027\u7684\u503c\uff0c\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"\u5b50\u7ec4\u4ef6\u901a\u8fc7 props \u8c03\u7528\u56de\u8c03\u51fd\u6570"),(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5b50\u7ec4\u4ef6\u7684\u6570\u636e\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u56de\u8c03\u51fd\u6570")),(0,l.kt)("p",null,"\u7236\u7ec4\u4ef6\u63d0\u4f9b\u51fd\u6570\u5e76\u4e14\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Parent extends React.Component {\n    getChildMsg = (msg) => {\n        console.log('\u63a5\u6536\u5230\u5b50\u7ec4\u4ef6\u6570\u636e', msg)\n    }\n    render() {\n        return (\n            <div>\n                \u5b50\u7ec4\u4ef6\uff1a<Child getMsg={this.getChildMsg} />\n            </div>\n        )\n    }\n}\n")),(0,l.kt)("p",null,"\u5b50\u7ec4\u4ef6\u63a5\u6536\u51fd\u6570\u5e76\u4e14\u8c03\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class Child extends React.Component {\n    state = { childMsg: 'React' }\n    handleClick = () => {\n        this.props.getMsg(this.state.childMsg)\n    }\n    return (\n        <button onClick={this.handleClick}>\u70b9\u6211\uff0c\u7ed9\u7236\u7ec4\u4ef6\u4f20\u9012\u6570\u636e</button>\n    )\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u56de\u8c03\u51fd\u6570\u4e2d this \u6307\u5411\u95ee\u9898\uff01")),(0,l.kt)("h3",{id:"\u5144\u5f1f"},"\u5144\u5f1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5c06\u5171\u4eab\u72b6\u6001\u63d0\u5347\u5230\u6700\u8fd1\u7684\u516c\u5171\u7236\u7ec4\u4ef6\u4e2d\uff0c\u7531\u516c\u5171\u7236\u7ec4\u4ef6\u7ba1\u7406\u8fd9\u4e2a\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u601d\u60f3\uff1a",(0,l.kt)("strong",{parentName:"li"},"\u72b6\u6001\u63d0\u5347")),(0,l.kt)("li",{parentName:"ul"},"\u516c\u5171\u7236\u7ec4\u4ef6\u804c\u8d23\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5171\u4eab\u72b6\u6001 "),(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u64cd\u4f5c\u5171\u4eab\u72b6\u6001\u7684\u65b9\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},"\u8981\u901a\u8baf\u7684\u5b50\u7ec4\u4ef6\u53ea\u9700\u901a\u8fc7 props \u63a5\u6536\u72b6\u6001\u6216\u64cd\u4f5c\u72b6\u6001\u7684\u65b9\u6cd5")),(0,l.kt)("p",null,"\u72b6\u6001\u63d0\u5347\u524d"),(0,l.kt)("p",null,"\u72b6\u6001\u63d0\u5347\u4e4b\u540e"),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u901a\u8baf-context"},"\u7ec4\u4ef6\u901a\u8baf-context"),(0,l.kt)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"\u601d\u8003\uff1aApp \u7ec4\u4ef6\u8981\u4f20\u9012\u6570\u636e\u7ed9 Child \u7ec4\u4ef6\uff0c\u8be5\u5982\u4f55\u5904\u7406\uff1f"),(0,l.kt)("p",null,"\u5904\u7406\u65b9\u5f0f\uff1a\u4f7f\u7528 props \u4e00\u5c42\u5c42\u7ec4\u4ef6\u5f80\u4e0b\u4f20\u9012\uff08\u7e41\u7410\uff09"),(0,l.kt)("p",null,"\u66f4\u597d\u7684\u59ff\u52bf\uff1a\u4f7f\u7528 Context"),(0,l.kt)("p",null," \u4f5c\u7528\uff1a\u8de8\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\uff08\u6bd4\u5982\uff1a\u4e3b\u9898\u3001\u8bed\u8a00\u7b49\uff09"),(0,l.kt)("h3",{id:"\u5b9e\u73b0\u601d\u8def"},"\u5b9e\u73b0\u601d\u8def"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 React. createContext() \u521b\u5efa Provider\uff08\u63d0\u4f9b\u6570\u636e\uff09 \u548c Consumer\uff08\u6d88\u8d39\u6570\u636e\uff09 \u4e24\u4e2a\u7ec4\u4ef6\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { Provider, Consumer } = React.createContext()\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Provider \u7ec4\u4ef6\u4f5c\u4e3a\u7236\u8282\u70b9\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<Provider>\n    <div className="App">\n        <Child1 />\n    </div>\n</Provider>\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e value \u5c5e\u6027\uff0c\u8868\u793a\u8981\u4f20\u9012\u7684\u6570\u636e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'<Provider value="pink">\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8c03\u7528 Consumer \u7ec4\u4ef6\u63a5\u6536\u6570\u636e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<Consumer>\n    {data => <span>data\u53c2\u6570\u8868\u793a\u63a5\u6536\u5230\u7684\u6570\u636e -- {data}</span>}\n</Consumer>\n")),(0,l.kt)("p",null,"\u603b\u7ed3\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e24\u4e2a\u7ec4\u4ef6\u662f\u8fdc\u65b9\u4eb2\u621a\uff08\u6bd4\u5982\uff0c\u5d4c\u5957\u591a\u5c42\uff09\u53ef\u4ee5\u4f7f\u7528Context\u5b9e\u73b0\u7ec4\u4ef6\u901a\u8baf"),(0,l.kt)("li",{parentName:"ol"},"Context\u63d0\u4f9b\u4e86\u4e24\u4e2a\u7ec4\u4ef6\uff1aProvider \u548c Consumer"),(0,l.kt)("li",{parentName:"ol"},"Provider\u7ec4\u4ef6\uff1a\u7528\u6765\u63d0\u4f9b\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"Consumer\u7ec4\u4ef6\uff1a\u7528\u6765\u6d88\u8d39\u6570\u636e")),(0,l.kt)("h2",{id:"props\u6df1\u5165"},"props\u6df1\u5165"),(0,l.kt)("h3",{id:"children\u5c5e\u6027"},"children\u5c5e\u6027"),(0,l.kt)("p",null,"children\u5c5e\u6027\uff1a\u8868\u793a\u8be5\u7ec4\u4ef6\u7684\u5b50\u8282\u70b9\uff0c\u53ea\u8981\u7ec4\u4ef6\u6709\u5b50\u8282\u70b9\uff0cprops\u5c31\u6709\u8be5\u5c5e\u6027"),(0,l.kt)("p",null,"children \u5c5e\u6027\u4e0e\u666e\u901a\u7684props\u4e00\u6837\uff0c\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u503c\uff08\u6587\u672c\u3001React\u5143\u7d20\u3001\u7ec4\u4ef6\uff0c\u751a\u81f3\u662f\u51fd\u6570\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function Hello(props) {\n  return (\n    <div>\n      \u8be5\u7ec4\u4ef6\u7684\u5b50\u8282\u70b9\uff1a{props.children}\n    </div>\n  )\n}\n\n<Hello>\u6211\u662f\u5b50\u8282\u70b9</Hello> // \u7b49\u4e8e\u5982\u4e0b\n<Hello chiledren="\u6211\u662f\u5b50\u8282\u70b9"></Hello>\n\n')),(0,l.kt)("h3",{id:"props\u6821\u9a8c"},"props\u6821\u9a8c"),(0,l.kt)("p",null,"\u76ee\u7684\uff1a\u6821\u9a8c\u63a5\u6536\u7684props\u7684\u6570\u636e\u7c7b\u578b\uff0c\u589e\u52a0\u7ec4\u4ef6\u7684\u5065\u58ee\u6027"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u7ec4\u4ef6\u6765\u8bf4\uff0cprops\u662f\u5916\u6765\u7684\uff0c\u65e0\u6cd5\u4fdd\u8bc1\u7ec4\u4ef6\u4f7f\u7528\u8005\u4f20\u5165\u4ec0\u4e48\u683c\u5f0f\u7684\u6570\u636e"),(0,l.kt)("p",null,"\u5982\u679c\u4f20\u5165\u7684\u6570\u636e\u683c\u5f0f\u4e0d\u5bf9\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u5185\u90e8\u62a5\u9519\u3002",(0,l.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u7684\u4f7f\u7528\u8005\u4e0d\u80fd\u5f88\u660e\u786e\u7684\u77e5\u9053\u9519\u8bef\u7684\u539f\u56e0\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(7).Z})),(0,l.kt)("p",null,"props\u6821\u9a8c\u5141\u8bb8\u5728\u521b\u5efa\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u5c31\u7ea6\u5b9aprops\u7684\u683c\u5f0f\u3001\u7c7b\u578b\u7b49"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(4584).Z})),(0,l.kt)("p",null,"\u4f5c\u7528\uff1a\u89c4\u5b9a\u63a5\u6536\u7684props\u7684\u7c7b\u578b\u5fc5\u987b\u4e3a\u6570\u7ec4\uff0c\u5982\u679c\u4e0d\u662f\u6570\u7ec4\u5c31\u4f1a\u62a5\u9519\uff0c\u589e\u52a0\u7ec4\u4ef6\u7684\u5065\u58ee\u6027\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(4503).Z})),(0,l.kt)("h3",{id:"\u4f7f\u7528\u6b65\u9aa4"},"\u4f7f\u7528\u6b65\u9aa4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5305 prop-types \uff08yarn add prop-types / npm i props-types\uff09  "),(0,l.kt)("li",{parentName:"ol"},"\u5bfc\u5165 prop-types \u5305"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7ec4\u4ef6\u540d.propTypes = {} \u6765\u7ed9\u7ec4\u4ef6\u7684props\u6dfb\u52a0\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("li",{parentName:"ol"},"\u6821\u9a8c\u89c4\u5219\u901a\u8fc7 PropTypes \u5bf9\u8c61\u6765\u6307\u5b9a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import PropTypes from 'prop-types'\nfunction App(props) {\n    return (\n        <h1>Hi, {props.colors}</h1>\n    )\n}\nApp.propTypes = {\n    // \u7ea6\u5b9acolors\u5c5e\u6027\u4e3aarray\u7c7b\u578b\n    // \u5982\u679c\u7c7b\u578b\u4e0d\u5bf9\uff0c\u5219\u62a5\u51fa\u660e\u786e\u9519\u8bef\uff0c\u4fbf\u4e8e\u5206\u6790\u9519\u8bef\u539f\u56e0\n    colors: PropTypes.array\n}\n")),(0,l.kt)("h3",{id:"\u7ea6\u675f\u89c4\u5219"},"\u7ea6\u675f\u89c4\u5219"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5e38\u89c1\u7c7b\u578b\uff1aarray\u3001bool\u3001func\u3001number\u3001object\u3001string"),(0,l.kt)("li",{parentName:"ol"},"React\u5143\u7d20\u7c7b\u578b\uff1aelement"),(0,l.kt)("li",{parentName:"ol"},"\u5fc5\u586b\u9879\uff1aisRequired"),(0,l.kt)("li",{parentName:"ol"},"\u7279\u5b9a\u7ed3\u6784\u7684\u5bf9\u8c61\uff1ashape({ })")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u5e38\u89c1\u7c7b\u578b\noptionalFunc: PropTypes.func,\n// \u5fc5\u9009\nrequiredFunc: PropTypes.func.isRequired,\n// \u7279\u5b9a\u7ed3\u6784\u7684\u5bf9\u8c61\noptionalObjectWithShape: PropTypes.shape({\n    color: PropTypes.string,\n    fontSize: PropTypes.number\n})\n")),(0,l.kt)("h3",{id:"props\u9ed8\u8ba4\u503c"},"props\u9ed8\u8ba4\u503c"),(0,l.kt)("p",null,"\u573a\u666f\uff1a\u5206\u9875\u7ec4\u4ef6 \u6bcf\u9875\u663e\u793a\u6761\u6570\n\u4f5c\u7528\uff1a\u7ed9 props \u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u5728\u672a\u4f20\u5165 props \u65f6\u751f\u6548"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function App(props) {\n    return (\n        <div>\n            \u6b64\u5904\u5c55\u793aprops\u7684\u9ed8\u8ba4\u503c\uff1a{props.pageSize}\n        </div>\n    )\n}\n// \u8bbe\u7f6e\u9ed8\u8ba4\u503c\nApp.defaultProps = {\n    pageSize: 10\n}\n// \u4e0d\u4f20\u5165pageSize\u5c5e\u6027\n<App />\n")),(0,l.kt)("h2",{id:"\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u548c\u5b9e\u4f8b\u5c5e\u6027"},"\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u548c\u5b9e\u4f8b\u5c5e\u6027"),(0,l.kt)("h3",{id:"\u5b9e\u4f8b\u6210\u5458"},"\u5b9e\u4f8b\u6210\u5458"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u5b9e\u4f8b\u6210\u5458"',title:'"\u5b9e\u4f8b\u6210\u5458"'},"class Person {\n    constructor(name, age) {\n        this.name = name\n        this.age = age\n    }\n\n    sayHi() {\n      console.log('\u55e8')\n    }\n}\n\nconst p = new Person('zs', 17)\n\nconsole.log(p)\n// p\u5c31\u662f\u6240\u8c13\u7684\u5b9e\u4f8b, \u901a\u8fc7\u5b9e\u4f8b\u8c03\u7528\u7684\u5c5e\u6027\u6216\u65b9\u6cd5\n// \u79f0\u4e4b\u4e3a\u5b9e\u4f8b\u6210\u5458\uff08\u5c5e\u6027\u6216\u8005\u65b9\u6cd5\uff09\n// name\u548cage\u5c31\u662f\u5b9e\u4f8b\u7684\uff0c \u6240\u4ee5\u5982\u4f55\u8c03\u7528\u5462\n// p.name  p.age\u8fd9\u6837\u8c03\u7528\n// \u8fd9\u79cd\u901a\u8fc7\u5b9e\u4f8b\u8bbf\u95ee\u7684, \u53eb\u505a\u5b9e\u4f8b\u6210\u5458, \u6216\u8005\u53eb\u505a\u5b9e\u4f8b\u5c5e\u6027\u5b9e\u4f8b\u65b9\u6cd5\u90fd\u53ef\u4ee5\n\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u5b9e\u4f8b\u6210\u5458"',title:'"\u5b9e\u4f8b\u6210\u5458"'},"class Person {\n    constructor(name, age) {\n        this.name = name\n        this.age = age\n    }\n\n    sayHi() {\n      console.log('\u55e8')\n    }\n}\n\nPerson.aa = 'bb'\n\nconst p = new Person('zs', 17)\n\n// Person.aa \n// Person\u662f\u4e2a\u7c7b\uff0c \u4ed6\u8eab\u4e0a\u6709\u4e2aaa\n// Person\u8eab\u4e0a\u7684aa\u4e0d\u80fd\u7528p\u53bb\u8c03\u7528\n// \u56e0\u4e3aclass\u76f8\u5f53\u4e8e  function Person() {}\n// \u4f46\u662f\u539f\u578b\u94fe\u63d0\u5230\u8fc7\n// \u6784\u9020\u51fd\u6570 \u539f\u578b \u5b9e\u4f8b\n// \u5b9e\u4f8b\u53ea\u80fd\u7ee7\u627f\u539f\u578b\u7684, \u4e0d\u80fd\u8bbf\u95ee\u6784\u9020\u51fd\u6570\u4e0a\u9762\u7684aa\n// \u6bd4\u5982p.aa \u6ca1\u6cd5\u8bbf\u95ee \u8f93\u51faundefined\n// \u90a3\u8981\u600e\u4e48\u8bbf\u95ee?\n// \u53ea\u80fd\u901a\u8fc7\u7c7b\u672c\u8eab\u8bbf\u95ee, \u6bd4\u5982Person.aa\n// \u6240\u4ee5\u5f15\u51fa\u9759\u6001\u6210\u5458\n")),(0,l.kt)("h3",{id:"\u9759\u6001\u6210\u5458"},"\u9759\u6001\u6210\u5458"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u901a\u8fc7\u7c7b\u6216\u8005\u6784\u9020\u51fd\u6570\u672c\u8eab\u624d\u80fd\u8bbf\u95ee\u5230\u5c5e\u6027\u6216\u8005\u65b9\u6cd5\u53eb\u505a\u9759\u6001\u6210\u5458\n// \u9759\u6001\u6210\u5458\u53ef\u4ee5\u5199\u5230\u7c7b\u91cc\u9762\u53bb\nclass Person {\n    constructor(name, age) {\n        this.name = name\n        this.age = age\n    }\n\n    sayHi() {\n      console.log('\u55e8')\n    }\n\n    aa = 'bb'  // \u8fd9\u4e48\u5199\u4e0d\u662f\u9759\u6001\u6210\u5458, \u662f\u7c7b\u5b9e\u4f8b\u7684\n    // aa = 'bb' \u662f\u76f4\u63a5\u589e\u52a0\u5230p\u8eab\u4e0a\u7684\n\n\n    // \u5982\u679c\u52a0static\u5173\u952e\u5b57\u4ee3\u8868\u9759\u6001\n    static aa = 'bb' // \u8fd9\u4e48\u5199\u5c31\u4e0d\u662f\u7ed9\u5b9e\u4f8b\u589e\u52a0\u7684, \u662f\u7ed9\u6574\u4e2aPerson\u589e\u52a0\u7684\n    // \u901a\u8fc7console.log(p.aa) \u8bbf\u95ee\u4e0d\u5230\n    // \u800c\u662f\u901a\u8fc7Person.aa, \u4e5f\u5c31\u662f\u7c7b\u672c\u8eab\u8bbf\u95ee\n\n}\n")))}c.isMDXComponent=!0},7:function(e,n,t){n.Z=t.p+"assets/images/props\u6821\u9a8c-2f1f554d0f4747a14516cff012c5f72f.png"},4584:function(e,n){n.Z="data:image/png;base64,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"},4503:function(e,n,t){n.Z=t.p+"assets/images/props\u6821\u9a8c03-8375e3cb9afbf2a16e8e768aa324b3bb.png"}}]);