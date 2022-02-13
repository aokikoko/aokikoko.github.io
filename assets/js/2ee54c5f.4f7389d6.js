"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8626],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,f=m["".concat(c,".").concat(k)]||m[k]||p[k]||i;return n?o.createElement(f,s(s({ref:t},l),{},{components:n})):o.createElement(f,s({ref:t},l))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],a={title:"[React] hooks-\u5176\u4ed6hook",sidebar_position:11},c=void 0,u={unversionedId:"React/hooks2",id:"React/hooks2",title:"[React] hooks-\u5176\u4ed6hook",description:"\u81ea\u5b9a\u4e49hook",source:"@site/docs/React/hooks2.md",sourceDirName:"React",slug:"/React/hooks2",permalink:"/docs/React/hooks2",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/React/hooks2.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"[React] hooks-\u5176\u4ed6hook",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"[React] hooks-useState/useEffect",permalink:"/docs/React/hooks"},next:{title:"[JS] Promise",permalink:"/docs/javascript/Promise"}},l=[{value:"\u81ea\u5b9a\u4e49hook",id:"\u81ea\u5b9a\u4e49hook",children:[{value:"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks",id:"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks",children:[],level:3}],level:2}],p={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u81ea\u5b9a\u4e49hook"},"\u81ea\u5b9a\u4e49hook"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u7ee7\u7eed\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e\u7684\u793a\u4f8b"',title:'"\u7ee7\u7eed\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e\u7684\u793a\u4f8b"'},'// \u4f7f\u7528hooks\u5b9e\u73b0\u732b\u8ddf\u7740\u9f20\u6807\u79fb\u52a8\nfunction Cat() {\n  const [position, setPosition] = useState({\n    x: 0,\n    y: 0,\n  });\n  const move = (e) => {\n    setPosition({\n      x: e.pageX,\n      y: e.pageY,\n    });\n  };\n  useEffect(() => {\n    document.addEventListener("mousemove", move);\n    console.log(111);\n    return () => {\n      document.removeEventListener("mousemove", move);\n    };\n  }, []);\n  return (\n    <>\n      <img\n        src={img}\n        alt=""\n        style={{ position: "absolute", left: position.x, top: position.y }}\n      ></img>\n    </>\n  );\n}\n')),(0,i.kt)("p",null,"\u9664\u4e86\u4f7f\u7528\u5185\u7f6e\u7684 Hooks\u4e4b\u5916, \u8fd8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684Hooks (\u81ea\u5b9a\u4e49Hooks)"),(0,i.kt)("p",null,"\u4f7f\u7528\u573a\u666f: ",(0,i.kt)("strong",{parentName:"p"},"\u5c06\u7ec4\u4ef6\u72b6\u6001\u903b\u8f91\u63d0\u53d6\u5230\u53ef\u91cd\u7528\u7684\u51fd\u6570(\u81ea\u5b9a\u4e49Hooks)\u4e2d, \u5b9e\u73b0\u72b6\u6001\u903b\u8f91\u590d\u7528")),(0,i.kt)("p",null,"\u5185\u7f6eHooks\u4e3a\u51fd\u6570\u7ec4\u4ef6\u8d4b\u4e88\u4e86class\u7ec4\u4ef6\u7684\u529f\u80fd; \u5728\u6b64\u4e4b\u4e0a, \u81ea\u5b9a\u4e49Hooks\u9488\u5bf9\u4e0d\u540c\u7ec4\u4ef6\u5b9e\u73b0\u4e0d\u540c\u72b6\u6001\u903b\u8f91\u590d\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49Hooks\u662f\u4e00\u4e2a\u51fd\u6570, ",(0,i.kt)("strong",{parentName:"li"},"\u7ea6\u5b9a\u51fd\u6570\u540d\u79f0\u5fc5\u987b\u4ee5use\u5f00\u5934, React\u5c31\u662f\u901a\u8fc7\u51fd\u6570\u540d\u79f0\u662f\u5426\u4ee5use\u5f00\u5934\u6765\u5224\u65ad\u662f\u4e0d\u662fHooks")),(0,i.kt)("li",{parentName:"ul"},"Hooks\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49Hooks\u4e2d\u4f7f\u7528, \u5426\u5219, \u4f1a\u62a5\u9519!"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49Hooks\u7528\u6765\u63d0\u53d6\u7ec4\u4ef6\u7684\u72b6\u6001\u903b\u8f91, \u6839\u636e\u4e0d\u540c\u529f\u80fd\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c(\u5c31\u50cf\u666e\u901a\u51fd\u6570\u4e00\u6837)")),(0,i.kt)("h3",{id:"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks"},"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u81ea\u5b9a\u4e49hook useMouse"',title:'"\u81ea\u5b9a\u4e49hook','useMouse"':!0},'function useMouse() {\n  const [position, setPosition] = useState({\n    x: 0,\n    y: 0,\n  });\n  const move = (e) => {\n    setPosition({\n      x: e.pageX,\n      y: e.pageY,\n    });\n  };\n  useEffect(() => {\n    document.addEventListener("mousemove", move);\n    console.log(111);\n    return () => {\n      document.removeEventListener("mousemove", move);\n    };\n  }, []);\n\n  return position;\n}\n\n// \u4f7f\u7528hooks\u5b9e\u73b0\u732b\u8ddf\u7740\u9f20\u6807\u79fb\u52a8\nfunction Cat() {\n  const { x, y } = useMouse();\n\n  return (\n    <>\n      <img\n        src={img}\n        alt=""\n        style={{ position: "absolute", left: x, top: y }}\n      ></img>\n    </>\n  );\n}\n')))}m.isMDXComponent=!0}}]);