"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[476],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return N}});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=l.createContext({}),i=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=i(t.components);return l.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},o=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,d=k(t,["components","mdxType","originalType","parentName"]),o=i(n),N=a,c=o["".concat(u,".").concat(N)]||o[N]||m[N]||r;return n?l.createElement(c,p(p({ref:e},d),{},{components:n})):l.createElement(c,p({ref:e},d))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,p=new Array(r);p[0]=o;var k={};for(var u in e)hasOwnProperty.call(e,u)&&(k[u]=e[u]);k.originalType=t,k.mdxType="string"==typeof t?t:a,p[1]=k;for(var i=2;i<r;i++)p[i]=n[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}o.displayName="MDXCreateElement"},7813:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return o},frontMatter:function(){return k},metadata:function(){return i},toc:function(){return d}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),p=["components"],k={title:"[Linux] Linux\u8fdb\u7a0b\u68c0\u6d4b\u4e0e\u63a7\u5236",sidebar_position:5},u="\u8fdb\u7a0b\u7ba1\u7406\u547d\u4ee4",i={unversionedId:"Linux/process",id:"Linux/process",title:"[Linux] Linux\u8fdb\u7a0b\u68c0\u6d4b\u4e0e\u63a7\u5236",description:"\u5de5\u4f5c\u573a\u666f\uff1a",source:"@site/docs/Linux/process.md",sourceDirName:"Linux",slug:"/Linux/process",permalink:"/docs/Linux/process",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Linux/process.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"[Linux] Linux\u8fdb\u7a0b\u68c0\u6d4b\u4e0e\u63a7\u5236",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"[Linux] Linux\u81ea\u6709\u670d\u52a1-ntp,firewalld,crond",permalink:"/docs/Linux/other"},next:{title:"[Linux] YUM\u4e0eLAMP",permalink:"/docs/Linux/yum"}},d=[{value:"1\u3001top \u67e5\u770b CPU \u4f7f\u7528\u60c5\u51b5",id:"1top-\u67e5\u770b-cpu-\u4f7f\u7528\u60c5\u51b5",children:[{value:"1\uff09\u7cfb\u7edf\u6574\u4f53\u4fe1\u606f\uff1a",id:"1\u7cfb\u7edf\u6574\u4f53\u4fe1\u606f",children:[{value:"\u95ee\u9898\uff1a\u5982\u679c\u6211\u7684\u673a\u5668\u6709 4 \u6838 CPU\uff0c\u6211\u60f3\u67e5\u770b\u6bcf\u4e00\u6838\u5fc3\u5206\u522b\u7684\u8d1f\u8f7d\u60c5\u51b5\u600e\u80fd\u529e\uff1f",id:"\u95ee\u9898\u5982\u679c\u6211\u7684\u673a\u5668\u6709-4-\u6838-cpu\u6211\u60f3\u67e5\u770b\u6bcf\u4e00\u6838\u5fc3\u5206\u522b\u7684\u8d1f\u8f7d\u60c5\u51b5\u600e\u80fd\u529e",children:[],level:4}],level:3},{value:"2\uff09\u8fdb\u7a0b\u4fe1\u606f\uff1a",id:"2\u8fdb\u7a0b\u4fe1\u606f",children:[{value:"\u95ee\u9898\uff1a\u5982\u679c\u6211\u4eec\u53d1\u73b0 CPU \u8d1f\u8f7d\u8fc7\u5927\uff0c\u63a5\u4e0b\u6765\u600e\u4e48\u529e\uff1f",id:"\u95ee\u9898\u5982\u679c\u6211\u4eec\u53d1\u73b0-cpu-\u8d1f\u8f7d\u8fc7\u5927\u63a5\u4e0b\u6765\u600e\u4e48\u529e",children:[],level:4},{value:"\u95ee\u9898\uff1a\u5982\u4f55\u67e5\u770b\u5360\u7528 CPU \u6700\u591a\u7684\u8fdb\u7a0b\uff1f",id:"\u95ee\u9898\u5982\u4f55\u67e5\u770b\u5360\u7528-cpu-\u6700\u591a\u7684\u8fdb\u7a0b",children:[],level:4}],level:3}],level:2},{value:"2\u3001free \u67e5\u770b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5",id:"2free-\u67e5\u770b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5",children:[],level:2},{value:"3\u3001df \u67e5\u770b\u78c1\u76d8",id:"3df-\u67e5\u770b\u78c1\u76d8",children:[],level:2},{value:"4\u3001ps \u67e5\u770b\u8fdb\u7a0b\u547d\u4ee4",id:"4ps-\u67e5\u770b\u8fdb\u7a0b\u547d\u4ee4",children:[],level:2},{value:"5\u3001netstat \u67e5\u770b\u8fdb\u7a0b\u7f51\u7edc\u8bbf\u95ee",id:"5netstat-\u67e5\u770b\u8fdb\u7a0b\u7f51\u7edc\u8bbf\u95ee",children:[],level:2},{value:"6\u3001kill \u5173\u95ed\u8fdb\u7a0b",id:"6kill-\u5173\u95ed\u8fdb\u7a0b",children:[],level:2},{value:"7\u3001killall \u5173\u95ed\u8fdb\u7a0b",id:"7killall-\u5173\u95ed\u8fdb\u7a0b",children:[],level:2}],m={toc:d};function o(t){var e=t.components,n=(0,a.Z)(t,p);return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8fdb\u7a0b\u7ba1\u7406\u547d\u4ee4"},"\u8fdb\u7a0b\u7ba1\u7406\u547d\u4ee4"),(0,r.kt)("p",null,"\u5de5\u4f5c\u573a\u666f\uff1a"),(0,r.kt)("p",null,"\u200b \u5c0f\u9ed1\u5165\u804c\u5230\u4e00\u5bb6\u516c\u53f8\uff0c\u63a5\u5230\u7684\u7b2c\u4e00\u9879\u4efb\u52a1\uff0c\u5c31\u662f\u76d1\u63a7\u751f\u4ea7\u670d\u52a1\u5668\u7684\u6027\u80fd\uff0c\u63d0\u5230\u670d\u52a1\u5668\u6027\u80fd\uff0c\u6211\u4eec\u9996\u5148\u60f3\u5230\u7684\u5c31\u662f CPU\uff0c\u5185\u5b58\u548c\u78c1\u76d8\u3002"),(0,r.kt)("h2",{id:"1top-\u67e5\u770b-cpu-\u4f7f\u7528\u60c5\u51b5"},"1\u3001top \u67e5\u770b CPU \u4f7f\u7528\u60c5\u51b5"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1atop"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u67e5\u770b\u670d\u52a1\u5668\u7684\u8fdb\u7a0b\u5360\u7528\u7684\u8d44\u6e90\uff08100%\u4f7f\u7528\uff09"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a# top \uff08\u52a8\u6001\u663e\u793a\uff09"),(0,r.kt)("p",null,"\u4ea4\u6362\u64cd\u4f5c\u5feb\u6377\u952e\uff1a"),(0,r.kt)("p",null,"M\uff08\u5927\u5199\uff09\uff1a\u8868\u793a\u5c06\u7ed3\u679c\u6309\u7167\u5185\u5b58\uff08MEM\uff09\u4ece\u9ad8\u5230\u4f4e\u8fdb\u884c\u964d\u5e8f\u6392\u5217\uff1b"),(0,r.kt)("p",null,"P\uff08\u5927\u5199\uff09\uff1a\uff0c\u8868\u793a\u5c06\u7ed3\u679c\u6309\u7167 CPU \u4f7f\u7528\u7387\u4ece\u9ad8\u5230\u4f4e\u8fdb\u884c\u964d\u5e8f\u6392\u5217\uff1b"),(0,r.kt)("p",null,"1 \uff1a\u5f53\u670d\u52a1\u5668\u62e5\u6709\u591a\u4e2a cpu \u7684\u65f6\u5019\u53ef\u4ee5\u4f7f\u7528\u201c1\u201d\u5feb\u6377\u952e\u6765\u5207\u6362\u662f\u5426\u5c55\u793a\u663e\u793a\u5404\u4e2a cpu \u7684\u8be6\u7ec6\u4fe1\u606f\uff1b"),(0,r.kt)("p",null,"q\uff1a\u9000\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"\u7528\u6cd5\u4e00\uff1atop\n\u793a\u4f8b\u4ee3\u7801\uff1a\n#top\n\u542b\u4e49\uff1a\u67e5\u770bCPU\u4f7f\u7528\u60c5\u51b5\n")),(0,r.kt)("h3",{id:"1\u7cfb\u7edf\u6574\u4f53\u4fe1\u606f"},"1\uff09\u7cfb\u7edf\u6574\u4f53\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5185 \u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4 \u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10:12:28"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"up 13:05"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7684\u8fd0\u884c\u65f6\u95f4.\u672c\u673a\u5df1\u7ecf\u8fd0\u884c 13 \u5c0f\u65f6 05 \u5206\u949f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3 users"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u767b\u5f55\u4e86\u4e09\u4e2a\u7528\u6237")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"load average: 0.00,0.01\uff0c0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u5728\u4e4b\u524d 1 \u5206\u949f\u30015 \u5206\u949f\u300115 \u5206\u949f\u7684\u5e73\u5747\u8d1f\u8f7d\u3002\u5982\u679c CPU \u662f\u5355\u6838\u7684\uff0c\u5219\u8fd9\u4e2a\u6570\u503c\u8d85\u8fc7 1 \u5c31\u662f\u9ad8\u8d1f\u8f7d\uff1a\u5982\u679c CPU \u662f\u56db\u6838\u7684\uff0c\u5219\u8fd9\u4e2a\u6570\u503c\u8d85\u8fc7 4 \u5c31\u662f\u9ad8\u8d1f\u8f7d")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6269\u5c55\uff1a\u5982\u4f55\u83b7\u53d6 CPU \u7684\u603b\u6838\u5fc3\u6570\uff1f"),(0,r.kt)("p",{parentName:"blockquote"},"grep 'core id' /proc/cpuinfo |sort -u |wc -l")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Tasks: 230 total"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7cfb\u7edf\u4e2d\u7684\u8fdb\u7a0b\u603b\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1 running"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"229 sleeping"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7761\u7720\u7684\u8fdb\u7a0b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 stopped"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5728\u505c\u6b62\u7684\u8fdb\u7a0b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0 zombie"),(0,r.kt)("td",{parentName:"tr",align:null},"\u50f5\u5c38\u8fdb\u7a0b\u6570\u3002\u5982\u679c\u4e0d\u662f 0\uff0c\u5219\u9700\u8981\u624b\u5de5\u68c0\u67e5\u50f5\u5c38\u8fdb\u7a0b")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5185 \u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4 \u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cpu(s): 0.1 %us"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6a21\u5f0f\u5360\u7528\u7684 CPU \u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.1%sy"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u6a21\u5f0f\u5360\u7528\u7684 CPU \u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.0%ni"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6539\u53d8\u8fc7\u4f18\u5148\u7ea7\u7684\u7528\u6237\u8fdb\u7a0b\u5360\u7528\u7684 CPU \u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"99.7%id"),(0,r.kt)("td",{parentName:"tr",align:null},"idle \u7f29\u5199\uff0c\u7a7a\u95f2 CPU \u5360\u7528\u7684 CPU \u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.1%wa"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u8f93\u5165/\u8f93\u51fa\u7684\u8fdb\u7a0b\u5360\u7528\u7684 CPU \u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.0%hi"),(0,r.kt)("td",{parentName:"tr",align:null},"\u786c\u4e2d\u65ad\u8bf7\u6c42\u670d\u52a1\u5360\u7528\u7684 CPU \u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.1%si"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f6f\u4e2d\u65ad\u8bf7\u6c42\u670d\u52a1\u5360\u7528\u7684 CPU \u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.0%st"),(0,r.kt)("td",{parentName:"tr",align:null},"st\uff08steal time\uff09\u610f\u4e3a\u865a\u62df\u65f6\u95f4\u767e\u5206\u6bd4\uff0c\u5c31\u662f\u5f53\u6709\u865a\u62df\u673a\u65f6\uff0c\u865a\u62df CPU \u7b49\u5f85\u5b9e\u9645 CPU \u7684\u65f6\u95f4\u767e\u5206\u6bd4")))),(0,r.kt)("h4",{id:"\u95ee\u9898\u5982\u679c\u6211\u7684\u673a\u5668\u6709-4-\u6838-cpu\u6211\u60f3\u67e5\u770b\u6bcf\u4e00\u6838\u5fc3\u5206\u522b\u7684\u8d1f\u8f7d\u60c5\u51b5\u600e\u80fd\u529e"},"\u95ee\u9898\uff1a\u5982\u679c\u6211\u7684\u673a\u5668\u6709 4 \u6838 CPU\uff0c\u6211\u60f3\u67e5\u770b\u6bcf\u4e00\u6838\u5fc3\u5206\u522b\u7684\u8d1f\u8f7d\u60c5\u51b5\u600e\u80fd\u529e\uff1f"),(0,r.kt)("p",null,"\u7b54\uff1a\u4ea4\u6362\u5feb\u6377\u952e \u201c1\u201d"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5185 \u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4 \u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mem: 1863252 total"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7269\u7406\u5185\u5b58\u7684\u603b\u91cf\uff0c\u5355\u4f4d\u4e3a KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"829960 used"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df1\u7ecf\u4f7f\u7528\u7684\u7269\u7406\u5185\u5b58\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"68352 free"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u95f2\u7684\u7269\u7406\u5185\u5b58\u6570\u91cf\u3002\u6211\u4eec\u4f7f\u7528\u7684\u662f\u865a\u62df\u673a\uff0c\u5171\u5206\u914d\u4e86 628MB \u5185\u5b58\uff0c\u6240\u4ee5\u53ea\u6709 53MB \u7684\u7a7a\u95f2\u5185\u5b58")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"96490 buff/cache"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f5c\u4e3a\u7f13\u51b2\u7684\u5185\u5b58\u6570\u91cf")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5185 \u5bb9"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4 \u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Swap: 2097148 total"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ea4\u6362\u5206\u533a\uff08\u865a\u62df\u5185\u5b58\uff09\u7684\u603b\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3336 used"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u7ecf\u4f7f\u7528\u7684\u4ea4\u6362\u5206\u533a\u7684\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2093812 free"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a\u95f2\u4ea4\u6362\u5206\u533a\u7684\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"622420 avail Mem"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u5185\u5b58")))),(0,r.kt)("p",null,"\u200b \u6211\u4eec\u901a\u8fc7 top \u547d\u4ee4\u7684\u6574\u4f53\u4fe1\u606f\u90e8\u5206\uff0c\u5c31\u53ef\u4ee5\u5224\u65ad\u670d\u52a1\u5668\u7684\u5065\u5eb7\u72b6\u6001\u3002\u5982\u679c 1 \u5206\u949f\u30015 \u5206\u949f\u300115 \u5206\u949f\u7684\u5e73\u5747\u8d1f\u8f7d\u9ad8\u4e8e CPU \u6838\u6570\uff0c\u8bf4\u660e\u7cfb\u7edf\u538b\u529b\u8f83\u5927\u3002\u5982\u679c\u7269\u7406\u5185\u5b58\u7684\u7a7a\u95f2\u5185\u5b58\u8fc7\u5c0f\uff0c\u5219\u4e5f\u8bc1\u660e\u7cfb\u7edf\u538b\u529b\u8f83\u5927\u3002"),(0,r.kt)("p",null,"\u95ee\u9898\uff1a\u6839\u636e\u4ee5\u4e0a\u4fe1\u606f\uff0c\u76ee\u524d\u6211\u4eec\u7684\u7cfb\u7edf\u538b\u529b\u5982\u4f55\uff1f"),(0,r.kt)("p",null,"\u95ee\u9898\uff1a\u5982\u679c\u6211\u4eec\u53d1\u73b0 CPU \u8d1f\u8f7d\u8fc7\u5927\uff0c\u63a5\u4e0b\u6765\u600e\u4e48\u529e\uff1f"),(0,r.kt)("h3",{id:"2\u8fdb\u7a0b\u4fe1\u606f"},"2\uff09\u8fdb\u7a0b\u4fe1\u606f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PID"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fdb\u7a0b\u7684 ID\u3002"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USER"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u6240\u5c5e\u7684\u7528\u6237\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PR"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7\uff0c\u6570\u503c\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NI"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7\uff0c\u6570\u503c\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VIRT"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u4f7f\u7528\u7684\u865a\u62df\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a KB\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RES"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u4f7f\u7528\u7684\u7269\u7406\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a KB\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHR"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5171\u4eab\u5185\u5b58\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a KB\u3002\u8ba1\u7b97\u4e00\u4e2a\u8fdb\u7a0b\u5b9e\u9645\u4f7f\u7528\u7684\u5185\u5b58 = \u5e38\u9a7b\u5185\u5b58\uff08RES\uff09- \u5171\u4eab\u5185\u5b58\uff08SHR\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"S"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u72b6\u6001\u3002\u5176\u4e2d S \u8868\u793a\u7761\u7720\uff0cR \u8868\u793a\u8fd0\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u5360\u7528 CPU \u7684\u767e\u5206\u6bd4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%MEM"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u5360\u7528\u5185\u5b58\u7684\u767e\u5206\u6bd4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME+"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u5171\u5360\u7528\u7684 CPU \u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COMMAND"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u540d")))),(0,r.kt)("h4",{id:"\u95ee\u9898\u5982\u679c\u6211\u4eec\u53d1\u73b0-cpu-\u8d1f\u8f7d\u8fc7\u5927\u63a5\u4e0b\u6765\u600e\u4e48\u529e"},"\u95ee\u9898\uff1a\u5982\u679c\u6211\u4eec\u53d1\u73b0 CPU \u8d1f\u8f7d\u8fc7\u5927\uff0c\u63a5\u4e0b\u6765\u600e\u4e48\u529e\uff1f"),(0,r.kt)("p",null,"\u7b54\uff1a\u67e5\u770b\u5360\u7528 CPU \u6700\u591a\u7684\u8fdb\u7a0b"),(0,r.kt)("h4",{id:"\u95ee\u9898\u5982\u4f55\u67e5\u770b\u5360\u7528-cpu-\u6700\u591a\u7684\u8fdb\u7a0b"},"\u95ee\u9898\uff1a\u5982\u4f55\u67e5\u770b\u5360\u7528 CPU \u6700\u591a\u7684\u8fdb\u7a0b\uff1f"),(0,r.kt)("p",null,"\u7b54\uff1a\u4ea4\u4e92\u64cd\u4f5c\u5feb\u6377\u952e P\uff0cP\uff08\u5927\u5199\uff09\uff1a\uff0c\u8868\u793a\u5c06\u7ed3\u679c\u6309\u7167 CPU \u4f7f\u7528\u7387\u4ece\u9ad8\u5230\u4f4e\u8fdb\u884c\u964d\u5e8f\u6392\u5217"),(0,r.kt)("h2",{id:"2free-\u67e5\u770b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"},"2\u3001free \u67e5\u770b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1afree"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u67e5\u770b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a#free -m"),(0,r.kt)("p",null,"\u9009\u9879\uff1a-m \u8868\u793a\u4ee5 mb \u4e3a\u5355\u4f4d\u67e5\u770b\uff081g = 1024mb\uff0c1mb = 1024kb\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"\u7528\u6cd5\u4e00\uff1afree -m\n\u793a\u4f8b\u4ee3\u7801\uff1a\n#free -m\n\u542b\u4e49\uff1a\u67e5\u770b\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\n")),(0,r.kt)("p",null,"\u200b \u548c Centos6 \u76f8\u6bd4\uff0cbuffer \u548c cached \u88ab\u5408\u6210\u4e00\u7ec4\uff0c\u52a0\u5165\u4e86\u4e00\u4e2a available\u3002"),(0,r.kt)("p",null,"\u200b \u5173\u4e8e\u6b64 available\uff0c\u5373\u7cfb\u7edf\u53ef\u7528\u5185\u5b58\uff0c\u7528\u6237\u4e0d\u9700\u8981\u53bb\u8ba1\u7b97 buffer/cache\uff0c\u5373\u53ef\u4ee5\u770b\u5230\u8fd8\u6709\u591a\u5c11\u5185\u5b58\u53ef\u7528\uff0c\u66f4\u52a0\u7b80\u5355\u76f4\u89c2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"\u7b2c1\u884cMem\u6570\u636e\uff1a\ntotal \u5185\u5b58\u603b\u6570: 1819\nused \u5df2\u7ecf\u4f7f\u7528\u7684\u5185\u5b58\u6570: 774\nfree \u7a7a\u95f2\u7684\u5185\u5b58\u6570: 152\nshared \u5171\u4eab\u5185\u5b58\u6570: 77\nbuff/Cache\u5757\u8bbe\u5907\u7f13\u5b58\u533a\u5185\u5b58\u6570: 892\navailable\u53ef\u7528\u5185\u5b58: 746\n\n\u7b2c2\u884c\u6570\u636e\u662fSwap\u4ea4\u6362\u5206\u533a\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u901a\u5e38\u6240\u8bf4\u7684\u865a\u62df\u5185\u5b58\u3002\u53ef\u4ee5\u5728\u5185\u5b58\u4e0d\u591f\u4f7f\u7528\u7684\u60c5\u51b5\u4e0b\u5f53\u4e34\u65f6\u5185\u5b58\u6765\u4f7f\u7528\uff0c\u4ea4\u6362\u5206\u533a\u5e76\u4e0d\u662f\u8d8a\u5927\u8d8a\u597d\uff0c\u4e00\u822c\u8bdd\u5b83\u5c31\u7b49\u540c\u4e8e\u5b9e\u9645\u5185\u5b58\u7684\u5927\u5c0f\u3002\n")),(0,r.kt)("h2",{id:"3df-\u67e5\u770b\u78c1\u76d8"},"3\u3001df \u67e5\u770b\u78c1\u76d8"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1adf"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u67e5\u770b\u78c1\u76d8\u7684\u7a7a\u95f4(disk free)"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a# df ","[-h]"),(0,r.kt)("p",null,"\u9009\u9879\uff1a-h \u8868\u793a\u53ef\u8bfb\u6027\u8f83\u9ad8\u7684\u5f62\u5f0f\u5c55\u793a\u5927\u5c0f"),(0,r.kt)("p",null,"\u8fd9\u51e0\u5217\u4f9d\u6b21\u662f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Filesystem"),(0,r.kt)("th",{parentName:"tr",align:null},"\u78c1\u76d8\u540d\u79f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Used"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u4f7f\u7528\u7684\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Avail"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5269\u4f59\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use%"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u767e\u5206\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mounted on"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6302\u8f7d\u8def\u5f84\uff08\u76f8\u5f53\u4e8e Windows \u7684\u78c1\u76d8\u7b26\uff09")))),(0,r.kt)("h2",{id:"4ps-\u67e5\u770b\u8fdb\u7a0b\u547d\u4ee4"},"4\u3001ps \u67e5\u770b\u8fdb\u7a0b\u547d\u4ee4"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1aps\uff08process show \u8fdb\u7a0b\u663e\u793a\uff09"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1aps ","[\u53c2\u6570\u9009\u9879]"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u4e3b\u8981\u662f\u67e5\u770b\u670d\u52a1\u5668\u7684\u8fdb\u7a0b\u4fe1\u606f"),(0,r.kt)("p",null,"\u9009\u9879\u542b\u4e49\uff1a"),(0,r.kt)("p",null,"-e\uff1a\u7b49\u4ef7\u4e8e\u201c-A\u201d\uff0c\u8868\u793a\u5217\u51fa\u5168\u90e8\uff08all\uff09\u7684\u8fdb\u7a0b"),(0,r.kt)("p",null,"-f : \u8868\u793a full\uff0c\u663e\u793a\u5168\u90e8\u7684\u5217\uff08\u663e\u793a\u5168\u5b57\u6bb5\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"UID"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u6267\u884c\u7684\u7528\u6237 ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PPID"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u7684\u7236\u7ea7\u8fdb\u7a0b ID\uff0c\u5982\u679c\u627e\u4e0d\u5230\uff0c\u5219\u8be5\u8fdb\u7a0b\u5c31\u88ab\u79f0\u4e4b\u4e3a\u50f5\u5c38\u8fdb\u7a0b\uff08Parent Process ID\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"Cpu \u7684\u5360\u7528\u7387\uff0c\u5176\u5f62\u5f0f\u662f\u767e\u5206\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STIME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u7684\u542f\u52a8\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TTY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec8\u7aef\u8bbe\u5907\uff0c\u53d1\u8d77\u8be5\u8fdb\u7a0b\u7684\u8bbe\u5907\u8bc6\u522b\u7b26\u53f7\uff0c\u5982\u679c\u663e\u793a\u201c?\u201d\u5219\u8868\u793a\u8be5\u8fdb\u7a0b\u5e76\u4e0d\u662f\u7531\u7ec8\u7aef\u8bbe\u5907\u53d1\u8d77")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fdb\u7a0b\u5b9e\u9645\u4f7f\u7528 CPU \u7684\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CMD"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5\u8fdb\u7a0b\u7684\u540d\u79f0\u6216\u8005\u5bf9\u5e94\u7684\u8def\u5f84")))),(0,r.kt)("p",null,"\u5de5\u4f5c\u573a\u666f"),(0,r.kt)("p",null,"\u200b \u5c0f\u9ed1\u7528\u5b66\u5230\u7684\u547d\u4ee4\uff0c\u53d1\u73b0\u67d0\u4e2a\u8fdb\u7a0b\u5360\u7528 CPU \u5f88\u9ad8\uff0c\u5e0c\u671b\u8fdb\u4e00\u6b65\u67e5\u770b\u8fd9\u4e2a\u7b80\u79f0\u7684\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u200b ps -ef \u4f1a\u5217\u51fa\u5168\u90e8\u8fdb\u7a0b\uff0c\u4f46\u662f\u6211\u4eec\u53d1\u73b0\u8fdb\u7a0b\u975e\u5e38\u591a\uff0c\u6211\u4eec\u5f88\u96be\u627e\u5230\u81ea\u5df1\u60f3\u8981\u770b\u7684\u8fdb\u7a0b\u3002\u8fd9\u91cc\u9700\u8981\u4f7f\u7528\u8fc7\u6ee4\u547d\u4ee4 grep\uff0c\u6765\u8fc7\u6ee4\u6389\u6211\u4eec\u4e0d\u9700\u8981\u7684\u4fe1\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"\u7528\u6cd5\uff1aps -ef |grep \u60f3\u8981\u770b\u5230\u7684\u8fdb\u7a0b\u540d\n\u793a\u4f8b\u4ee3\u7801\uff1a\n#ps -ef |grep crond\n\u542b\u4e49\uff1a\u67e5\u770bcrond\u8fdb\u7a0b\u7684\u8be6\u7ec6\u60c5\u51b5\n\u6ce8\u610f\uff1a\u67e5\u8be2\u7ed3\u679c\u4e2d\uff0c\u5982\u679c\u53ea\u6709\u4e00\u6761\u5219\u8868\u793a\u6ca1\u67e5\u5230\u5bf9\u5e94\u7684\u8fdb\u7a0b\uff08\u8fd91 \u6761\u8868\u793a\u521a\u624dps \u6307\u4ee4\u7684\u81ea\u8eab\uff09\u3002\u53ea\u6709\u67e5\u5230\u7684\u7ed3\u679c\u591a\u4f591 \u6761\uff0c\u624d\u8868\u793a\u6709\u5bf9\u5e94\u7684\u8fdb\u7a0b\u3002\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8865\u5145\uff1a\u9488\u5bf9\u4e0a\u8ff0\u60c5\u51b5\u7684\u4f18\u5316\uff1a\u5982\u679c\u6ca1\u6709\u5bf9\u5e94\u7684\u8fdb\u7a0b\uff0c\u5219\u4ec0\u4e48\u90fd\u4e0d\u663e\u793a\u3002")),(0,r.kt)("p",null,"\u601d\u8def\uff1a\u5728\u73b0\u6709\u7684\u57fa\u7840\u4e4b\u4e0a\u518d\u6b21\u4f7f\u7528\u7ba1\u9053\u53bb\u5904\u7406\u4e0b\uff08-v \u9009\u9879\u8868\u793a\u201c\u6392\u9664\u201d\uff09\u3002"),(0,r.kt)("p",null,'\u6269\u5c55\uff1aps aux BSD \u683c\u5f0f\u547d\u4ee4\uff0c\u6ce8\u610f\u6ca1\u6709\u6a2a\u6760"-"'),(0,r.kt)("p",null,"Unix \u6709\u5f88\u591a\u5206\u652f\uff0c\u76ee\u524d\u4e3b\u6d41\u7684\u663e\u793a\u98ce\u683c\u5206\u4e3a System V \u548c BSD\uff0c\u6211\u4eec\u4e4b\u524d\u4f7f\u7528\u7684 ps -ef \u5c5e\u4e8e system V \u98ce\u683c\uff0cps aux \u662f BSD \u98ce\u683c\uff0c\u5927\u5bb6\u53ef\u4ee5\u7406\u89e3\u4e3a\u4e24\u79cd\u98ce\u683c\u53ea\u662f\u663e\u793a\u4e0d\u540c\u3002"),(0,r.kt)("p",null,"USER\uff1a\u8be5 process \u5c5e\u4e8e\u54ea\u4e2a\u4f7f\u7528\u8005\u8d26\u53f7\nPID \uff1a\u8be5 process \u7684 ID\n%CPU\uff1a\u8be5 process \u4f7f\u7528\u6389\u7684 CPU \u8d44\u6e90\u767e\u5206\u6bd4\n%MEM\uff1a\u8be5 process \u6240\u5360\u7528\u7684\u7269\u7406\u5185\u5b58\u767e\u5206\u6bd4\nVSZ \uff1a\u8be5 process \u4f7f\u7528\u6389\u7684\u865a\u62df\u5185\u5b58\u91cf (Kbytes)\nRSS \uff1a\u8be5 process \u5360\u7528\u7684\u56fa\u5b9a\u7684\u5185\u5b58\u91cf (Kbytes)\nTTY \uff1a\u8be5 process \u662f\u5728\u90a3\u4e2a\u7ec8\u7aef\u673a\u4e0a\u9762\u8fd0\u4f5c\uff0c\u82e5\u4e0e\u7ec8\u7aef\u673a\u65e0\u5173\uff0c\u5219\u663e\u793a ?\uff0c\u53e6\u5916\uff0c tty1-tty6 \u662f\u672c\u673a\u4e0a\u9762\u7684\u767b\u5165\u8005\u7a0b\u5e8f\uff0c\u82e5\u4e3a pts/0 \u7b49\u7b49\u7684\uff0c\u5219\u8868\u793a\u4e3a\u7531\u7f51\u7edc\u8fde\u63a5\u8fdb\u4e3b\u673a\u7684\u7a0b\u5e8f\u3002\nSTAT\uff1a\u8be5\u7a0b\u5e8f\u76ee\u524d\u7684\u72b6\u6001\uff0c\u4e3b\u8981\u7684\u72b6\u6001\u6709\n\u200b R \uff1a\u8be5\u7a0b\u5e8f\u76ee\u524d\u6b63\u5728\u8fd0\u4f5c\uff0c\u6216\u8005\u662f\u53ef\u88ab\u8fd0\u4f5c\n\u200b S \uff1a\u8be5\u7a0b\u5e8f\u76ee\u524d\u6b63\u5728\u7761\u7720\u5f53\u4e2d (\u53ef\u8bf4\u662f idle \u72b6\u6001)\uff0c\u4f46\u53ef\u88ab\u67d0\u4e9b\u8baf\u53f7 (signal) \u5524\u9192\u3002\n\u200b T \uff1a\u8be5\u7a0b\u5e8f\u76ee\u524d\u6b63\u5728\u4fa6\u6d4b\u6216\u8005\u662f\u505c\u6b62\u4e86\n\u200b Z \uff1a\u8be5\u7a0b\u5e8f\u5e94\u8be5\u5df2\u7ecf\u7ec8\u6b62\uff0c\u4f46\u662f\u5176\u7236\u7a0b\u5e8f\u5374\u65e0\u6cd5\u6b63\u5e38\u7684\u7ec8\u6b62\u4ed6\uff0c\u9020\u6210 zombie (\u7586\u5c38) \u7a0b\u5e8f\u7684\u72b6\u6001\nSTART\uff1a\u8be5 process \u88ab\u89e6\u53d1\u542f\u52a8\u7684\u65f6\u95f4\nTIME \uff1a\u8be5 process \u5b9e\u9645\u4f7f\u7528 CPU \u8fd0\u4f5c\u7684\u65f6\u95f4\nCOMMAND\uff1a\u8be5\u7a0b\u5e8f\u7684\u5b9e\u9645\u6307\u4ee4"),(0,r.kt)("h2",{id:"5netstat-\u67e5\u770b\u8fdb\u7a0b\u7f51\u7edc\u8bbf\u95ee"},"5\u3001netstat \u67e5\u770b\u8fdb\u7a0b\u7f51\u7edc\u8bbf\u95ee"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1anetstat"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u72b6\u6001"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1anetstat -tnlp"),(0,r.kt)("p",null,"\u9009\u9879\uff1a-t\uff1a\u8868\u793a\u53ea\u5217\u51fa tcp \u534f\u8bae\u7684\u8fde\u63a5\uff1b"),(0,r.kt)("p",null,"\u200b -n\uff1a\u8868\u793a\u5c06\u5730\u5740\u4ece\u5b57\u6bcd\u7ec4\u5408\u8f6c\u5316\u6210 ip \u5730\u5740\uff0c\u5c06\u534f\u8bae\u8f6c\u5316\u6210\u7aef\u53e3\u53f7\u6765\u663e\u793a\uff1b"),(0,r.kt)("p",null,'\u200b -l \uff1a\u8868\u793a\u8fc7\u6ee4\u51fa"state\uff08\u72b6\u6001\uff09"\u5217\u4e2d\u5176\u503c\u4e3a LISTEN\uff08\u76d1\u542c\uff09\u7684\u8fde\u63a5\uff1b'),(0,r.kt)("p",null,"\u200b -p\uff1a\u8868\u793a\u663e\u793a\u53d1\u8d77\u8fde\u63a5\u7684\u8fdb\u7a0b pid \u548c\u8fdb\u7a0b\u540d\u79f0\uff1b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"Protocol\uff1a\u534f\u8bae\uff08tcp\u3001upd\u3001http\u3001https\u3001icmp\u3001ssh\u2026\uff09\nReceive\uff1a\u63a5\u6536\nSend\uff1a\u53d1\u9001\nLocal Address:\u672c\u5730\u5730\u5740\nForeign\uff1a\u8fdc\u7a0b\u5730\u5740\nState\uff1a\u72b6\u6001\uff0cLISTEN\u8868\u793a\u4fa6\u542c\u6765\u81ea\u8fdc\u65b9\u7684TCP\u7aef\u53e3\u7684\u8fde\u63a5\u8bf7\u6c42\nPID/Program name\uff1a\u8fdb\u7a0bID\u548c\u7a0b\u5e8f\u540d\n")),(0,r.kt)("h2",{id:"6kill-\u5173\u95ed\u8fdb\u7a0b"},"6\u3001kill \u5173\u95ed\u8fdb\u7a0b"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1akill"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1akill ","[\u4fe1\u53f7]"," PID"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1akill \u547d\u4ee4\u4f1a\u5411\u64cd\u4f5c\u7cfb\u7edf\u5185\u6838\u53d1\u9001\u4e00\u4e2a\u4fe1\u53f7\uff08\u591a\u662f\u7ec8\u6b62\u4fe1\u53f7\uff09\u548c\u76ee\u6807\u8fdb\u7a0b\u7684 PID\uff0c\u7136\u540e\u7cfb\u7edf\u5185\u6838\u6839\u636e\u6536\u5230\u7684\u4fe1\u53f7\u7c7b\u578b\uff0c\u5bf9\u6307\u5b9a\u8fdb\u7a0b\u8fdb\u884c\u76f8\u5e94\u7684\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4fe1\u53f7\u79cd\u7c7b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u4fe1\u53f7\u7f16\u53f7"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6740\u6b7b\u8fdb\u7a0b\uff0c\u5373\u5f3a\u5236\u7ed3\u675f\u8fdb\u7a0b\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5e38\u7ed3\u675f\u8fdb\u7a0b\uff0c\u662f kill \u547d\u4ee4\u7684\u9ed8\u8ba4\u4fe1\u53f7\u3002")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"\u7528\u6cd5\u4e00\uff1akill [\u4fe1\u53f7\u7f16\u53f7] PID\n\u793a\u4f8b\u4ee3\u7801\uff1a\n#ps -ef |grep crond\n\u67e5\u8be2crond\u8fdb\u7a0b\u4fe1\u606f\uff0c\u60f3\u77e5\u9053\u5b83\u7684PID\uff0c\u4ee5\u4fbf\u4f7f\u7528kill\u7ec8\u6b62\u8fdb\u7a0b\n\n#kill 6925\n\u7ed3\u675f6925\u7684\u8fdb\u7a0b\uff0c\u8fd9\u91cc\u4f7f\u7528\u9ed8\u8ba4\u4fe1\u53f7\uff0c\u6b63\u5e38\u7ed3\u675f\uff0c\u5982\u679c\u5f3a\u5236\u7ed3\u675f\uff0c\u5c31\u662fkill -9 6925\n\n#ps -ef |grep crond\n\u67e5\u8be2crond\u8fdb\u7a0b\u4fe1\u606f,\u8fd9\u6b21\u67e5\u8be2\u662f\u4e3a\u4e86\u786e\u8ba4crond\u8fdb\u7a0b\u662f\u5426\u88ab\u7ec8\u6b62\u4e86\uff0c\u6211\u4eec\u53d1\u73b06925\u8fdb\u7a0b\u5df2\u7ecf\u6ca1\u6709\u4e86\n\n#systemctl start crond\n\u4f7f\u7528\u524d\u9762\u5b66\u8fc7\u7684systemctl\u547d\u4ee4\uff0c\u91cd\u542fcrond\u670d\u52a1\n\n#ps -ef |grep crond\n\u67e5\u8be2crond\u8fdb\u7a0b\u4fe1\u606f,\u8fd9\u6b21\u67e5\u8be2\u662f\u4e3a\u4e86\u786e\u8ba4crond\u8fdb\u7a0b\u5df2\u7ecf\u91cd\u65b0\u542f\u52a8\u4e86\uff0c\u6211\u4eec\u770b\u5230\u591a\u4e86\u4e00\u4e2a32934\u7684\u8fdb\u7a0b\uff0c\u8868\u660ecrond\u5df2\u7ecf\u542f\u52a8\uff0c\u5e76\u4e14\u8fdb\u7a0bID\u53d8\u5316\u4e86\uff0c\u8fd9\u662f\u4e00\u4e2a\u65b0\u7684\u8fdb\u7a0b\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5907\u6ce8\uff1a\u5728\u4e92\u8054\u7f51\u4e2d\uff0c\u7ecf\u5e38\u770b\u5230 kill -9 \u8fdb\u7a0b PID\uff0c\u5f3a\u5236\u6740\u6b7b\u67d0\u4e2a\u8fdb\u7a0b\uff0ckill -l")),(0,r.kt)("h2",{id:"7killall-\u5173\u95ed\u8fdb\u7a0b"},"7\u3001killall \u5173\u95ed\u8fdb\u7a0b"),(0,r.kt)("p",null,"\u547d\u4ee4\uff1akillall"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u901a\u8fc7\u7a0b\u5e8f\u7684==\u8fdb\u7a0b\u540d==\u6765\u6740\u6b7b==\u4e00\u7c7b==\u8fdb\u7a0b"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a# killall ","[\u4fe1\u53f7]"," \u8fdb\u7a0b\u540d\u79f0"),(0,r.kt)("p",null,"\u4fe1\u53f7\u79cd\u7c7b\uff1a\u548c kill \u76f8\u540c\uff0c\u8fd9\u91cc\u4e0d\u518d\u91cd\u590d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"\u7528\u6cd5\u4e00\uff1akillall [\u4fe1\u53f7\u7f16\u53f7] \u8fdb\u7a0b\u540d\n\u793a\u4f8b\u4ee3\u7801\uff1a\n#ps -ef |grep crond\n\u67e5\u8be2crond\u8fdb\u7a0b\u4fe1\u606f\uff0c\u60f3\u77e5\u9053\u5b83\u7684\u8fdb\u7a0b\u540d\uff0c\u4ee5\u4fbf\u4f7f\u7528killall\u7ec8\u6b62\u8fdb\u7a0b\n\n#kill 6925\n\u7ed3\u675f6925\u7684\u8fdb\u7a0b\uff0c\u8fd9\u91cc\u4f7f\u7528\u9ed8\u8ba4\u4fe1\u53f7\uff0c\u6b63\u5e38\u7ed3\u675f\uff0c\u5982\u679c\u5f3a\u5236\u7ed3\u675f\uff0c\u5c31\u662fkill -9 6925\n")))}o.isMDXComponent=!0}}]);