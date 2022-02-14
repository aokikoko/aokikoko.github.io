"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8626],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=i(n),m=r,d=k["".concat(s,".").concat(m)]||k[m]||p[m]||l;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=k;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var i=2;i<l;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8113:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return k}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],u={title:"[React] hooks\u8fdb\u9636",sidebar_position:11},s=void 0,i={unversionedId:"React/hooks2",id:"React/hooks2",title:"[React] hooks\u8fdb\u9636",description:"\u81ea\u5b9a\u4e49hook",source:"@site/docs/React/hooks2.md",sourceDirName:"React",slug:"/React/hooks2",permalink:"/docs/React/hooks2",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/React/hooks2.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"[React] hooks\u8fdb\u9636",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"[React] hooks-useState/useEffect",permalink:"/docs/React/hooks"},next:{title:"[JS] Promise",permalink:"/docs/javascript/Promise"}},c=[{value:"\u81ea\u5b9a\u4e49hook",id:"\u81ea\u5b9a\u4e49hook",children:[{value:"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks",id:"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks",children:[],level:3}],level:2},{value:"useRef hook",id:"useref-hook",children:[],level:2},{value:"useContext hook",id:"usecontext-hook",children:[{value:"context\u57fa\u7840",id:"context\u57fa\u7840",children:[],level:3},{value:"useContext\u4f7f\u7528",id:"usecontext\u4f7f\u7528",children:[],level:3}],level:2}],p={toc:c};function k(e){var t=e.components,u=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49hook"},"\u81ea\u5b9a\u4e49hook"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u7ee7\u7eed\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e\u7684\u793a\u4f8b"',title:'"\u7ee7\u7eed\u83b7\u53d6\u9f20\u6807\u4f4d\u7f6e\u7684\u793a\u4f8b"'},'// \u4f7f\u7528hooks\u5b9e\u73b0\u732b\u8ddf\u7740\u9f20\u6807\u79fb\u52a8\nfunction Cat() {\n  const [position, setPosition] = useState({\n    x: 0,\n    y: 0,\n  });\n  const move = (e) => {\n    setPosition({\n      x: e.pageX,\n      y: e.pageY,\n    });\n  };\n  useEffect(() => {\n    document.addEventListener("mousemove", move);\n    console.log(111);\n    return () => {\n      document.removeEventListener("mousemove", move);\n    };\n  }, []);\n  return (\n    <>\n      <img\n        src={img}\n        alt=""\n        style={{ position: "absolute", left: position.x, top: position.y }}\n      ></img>\n    </>\n  );\n}\n')),(0,l.kt)("p",null,"\u9664\u4e86\u4f7f\u7528\u5185\u7f6e\u7684 Hooks\u4e4b\u5916, \u8fd8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684Hooks (\u81ea\u5b9a\u4e49Hooks)"),(0,l.kt)("p",null,"\u4f7f\u7528\u573a\u666f: ",(0,l.kt)("strong",{parentName:"p"},"\u5c06\u7ec4\u4ef6\u72b6\u6001\u903b\u8f91\u63d0\u53d6\u5230\u53ef\u91cd\u7528\u7684\u51fd\u6570(\u81ea\u5b9a\u4e49Hooks)\u4e2d, \u5b9e\u73b0\u72b6\u6001\u903b\u8f91\u590d\u7528")),(0,l.kt)("p",null,"\u5185\u7f6eHooks\u4e3a\u51fd\u6570\u7ec4\u4ef6\u8d4b\u4e88\u4e86class\u7ec4\u4ef6\u7684\u529f\u80fd; \u5728\u6b64\u4e4b\u4e0a, \u81ea\u5b9a\u4e49Hooks\u9488\u5bf9\u4e0d\u540c\u7ec4\u4ef6\u5b9e\u73b0\u4e0d\u540c\u72b6\u6001\u903b\u8f91\u590d\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49Hooks\u662f\u4e00\u4e2a\u51fd\u6570, ",(0,l.kt)("strong",{parentName:"li"},"\u7ea6\u5b9a\u51fd\u6570\u540d\u79f0\u5fc5\u987b\u4ee5use\u5f00\u5934, React\u5c31\u662f\u901a\u8fc7\u51fd\u6570\u540d\u79f0\u662f\u5426\u4ee5use\u5f00\u5934\u6765\u5224\u65ad\u662f\u4e0d\u662fHooks")),(0,l.kt)("li",{parentName:"ul"},"Hooks\u53ea\u80fd\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u6216\u5176\u4ed6\u81ea\u5b9a\u4e49Hooks\u4e2d\u4f7f\u7528, \u5426\u5219, \u4f1a\u62a5\u9519!"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49Hooks\u7528\u6765\u63d0\u53d6\u7ec4\u4ef6\u7684\u72b6\u6001\u903b\u8f91, \u6839\u636e\u4e0d\u540c\u529f\u80fd\u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c(\u5c31\u50cf\u666e\u901a\u51fd\u6570\u4e00\u6837)")),(0,l.kt)("h3",{id:"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks"},"\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49hooks"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u81ea\u5b9a\u4e49hook useMouse"',title:'"\u81ea\u5b9a\u4e49hook','useMouse"':!0},'function useMouse() {\n  const [position, setPosition] = useState({\n    x: 0,\n    y: 0,\n  });\n  const move = (e) => {\n    setPosition({\n      x: e.pageX,\n      y: e.pageY,\n    });\n  };\n  useEffect(() => {\n    document.addEventListener("mousemove", move);\n    console.log(111);\n    return () => {\n      document.removeEventListener("mousemove", move);\n    };\n  }, []);\n\n  return position;\n}\n\n// \u4f7f\u7528hooks\u5b9e\u73b0\u732b\u8ddf\u7740\u9f20\u6807\u79fb\u52a8\nfunction Cat() {\n  const { x, y } = useMouse();\n\n  return (\n    <>\n      <img\n        src={img}\n        alt=""\n        style={{ position: "absolute", left: x, top: y }}\n      ></img>\n    </>\n  );\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"useref-hook"},"useRef hook"),(0,l.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a\u5728 React \u4e2d\u8fdb\u884c DOM \u64cd\u4f5c\u65f6\uff0c\u7528\u6765\u83b7\u53d6 DOM"),(0,l.kt)("p",null,"\u4f5c\u7528\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u4e00\u4e2a\u5e26\u6709 current \u5c5e\u6027\u7684\u53ef\u53d8\u5bf9\u8c61\uff0c\u901a\u8fc7\u8be5\u5bf9\u8c61\u5c31\u53ef\u4ee5\u8fdb\u884c DOM \u64cd\u4f5c\u4e86\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const inputRef = useRef(null)\n")),(0,l.kt)("p",null,"\u89e3\u91ca\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a\u5728\u83b7\u53d6 DOM \u65f6\uff0c\u4e00\u822c\u90fd\u8bbe\u7f6e\u4e3a null"),(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a\u5305\u542b current \u5c5e\u6027\u7684\u5bf9\u8c61\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<input ref={inputRef}/>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1a\u53ea\u8981\u5728 React \u4e2d\u8fdb\u884c DOM \u64cd\u4f5c\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7 useRef Hook \u6765\u83b7\u53d6 DOM\uff08\u6bd4\u5982\uff0c\u83b7\u53d6 DOM \u7684\u5bbd\u9ad8\u7b49\uff09\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u610f\uff1auseRef\u4e0d\u4ec5\u4ec5\u53ef\u4ee5\u7528\u4e8e\u64cd\u4f5cDOM\uff0c\u8fd8\u53ef\u4ee5\u64cd\u4f5c\u7ec4\u4ef6"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"usecontext-hook"},"useContext hook"),(0,l.kt)("h3",{id:"context\u57fa\u7840"},"context\u57fa\u7840"),(0,l.kt)("p",null,"\u4f7f\u7528\u573a\u666f\uff1a\u8de8\u7ec4\u4ef6\u5171\u4eab\u6570\u636e\u3002"),(0,l.kt)("p",null,"Context \u4f5c\u7528\uff1a\u5b9e\u73b0\u8de8\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\uff0c\u800c\u4e0d\u5fc5\u5728\u6bcf\u4e2a\u7ea7\u522b\u624b\u52a8\u4f20\u9012 props\uff0c\u7b80\u5316\u7ec4\u4ef6\u4e4b\u95f4\u7684\u6570\u636e\u4f20\u9012\u8fc7\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3771).Z})),(0,l.kt)("p",null,"Context \u5bf9\u8c61\u5305\u542b\u4e86\u4e24\u4e2a\u7ec4\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Context.Provider value\uff1a\u901a\u8fc7 value \u5c5e\u6027\u63d0\u4f9b\u6570\u636e\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Context.Consumer\uff1a\u901a\u8fc7 render-props \u6a21\u5f0f\uff0c\u5728 JSX \u4e2d\u83b7\u53d6 Context \u4e2d\u63d0\u4f9b\u7684\u6570\u636e\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const Context = createContext(defaultValue)\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u63d0\u4f9b\u4e86 Provider \u7ec4\u4ef6\uff0cConsumer \u83b7\u53d6\u5230\u7684\u662f Provider \u4e2d value \u5c5e\u6027\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6ca1\u6709\u63d0\u4f9b Provider \u7ec4\u4ef6\uff0cConsumer \u83b7\u53d6\u5230\u7684\u662f createContext(defaultValue) \u7684 defaultValue \u503c\u3002")),(0,l.kt)("h3",{id:"usecontext\u4f7f\u7528"},"useContext\u4f7f\u7528"),(0,l.kt)("p",null,"\u4f5c\u7528\uff1a\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\uff0c\u83b7\u53d6 Context \u4e2d\u7684\u503c\u3002\u8981\u914d\u5408 Context \u4e00\u8d77\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"useContext Hook \u4e0e Context.Consumer \u7684\u533a\u522b\uff1a\u83b7\u53d6\u6570\u636e\u7684\u4f4d\u7f6e\u4e0d\u540c\uff0c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Context.Consumer\uff1a\u5728 JSX \u4e2d\u83b7\u53d6 Context \u5171\u4eab\u7684\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"useContext\uff1a\u5728 JS \u4ee3\u7801\u4e2d\u83b7\u53d6 Context \u7684\u6570\u636e\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const ThemeContext = createContext('red')\nconst value = useContext(ThemeContext)\n")),(0,l.kt)("p",null,"\u89e3\u91ca\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"useContext \u7684\u53c2\u6570\uff1aContext \u5bf9\u8c61\uff0c\u5373\uff1a\u901a\u8fc7 createContext \u51fd\u6570\u521b\u5efa\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},"useContext \u7684\u8fd4\u56de\u503c\uff1aContext \u4e2d\u63d0\u4f9b\u7684 value \u6570\u636e\u3002")),(0,l.kt)("hr",null))}k.isMDXComponent=!0},3771:function(e,t,n){t.Z=n.p+"assets/images/image-20210901215518365-11b91fb06652e8f14c9d8ffd27dcd70c.png"}}]);