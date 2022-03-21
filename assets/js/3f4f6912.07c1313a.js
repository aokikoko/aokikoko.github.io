"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[728],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||a;return n?l.createElement(k,s(s({ref:t},u),{},{components:n})):l.createElement(k,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3257:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"[Linux] Linux\u81ea\u6709\u670d\u52a1-systemctl",sidebar_position:3},o="Linux \u81ea\u6709\u670d\u52a1\u4e0e\u8f6f\u4ef6\u5305\u7ba1\u7406",p={unversionedId:"Linux/system",id:"Linux/system",title:"[Linux] Linux\u81ea\u6709\u670d\u52a1-systemctl",description:'\u670d\u52a1\u662f\u4e00\u4e9b\u7279\u5b9a\u7684\u8fdb\u7a0b\uff0c\u81ea\u6709\u670d\u52a1\u5c31\u662f\u7cfb\u7edf\u5f00\u673a\u540e\u5c31\u81ea\u52a8\u8fd0\u884c\u7684\u4e00\u4e9b\u8fdb\u7a0b\uff0c\u4e00\u65e6\u5ba2\u6237\u53d1\u51fa\u8bf7\u6c42\uff0c\u8fd9\u4e9b\u8fdb\u7a0b\u5c31\u81ea\u52a8\u4e3a\u4ed6\u4eec\u63d0\u4f9b\u670d\u52a1\uff0cwindows \u7cfb\u7edf\u4e2d\uff0c\u628a\u8fd9\u4e9b\u81ea\u52a8\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u79f0\u4e3a"\u670d\u52a1"',source:"@site/docs/Linux/system.md",sourceDirName:"Linux",slug:"/Linux/system",permalink:"/docs/Linux/system",editUrl:"https://github.com/aokikoko/aokikoko.github.io/blob/main/website/docs/Linux/system.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"[Linux] Linux\u81ea\u6709\u670d\u52a1-systemctl",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"[Linux] Linux\u6587\u4ef6\u7ba1\u7406",permalink:"/docs/Linux/filemanage"},next:{title:"[Linux] Linux\u81ea\u6709\u670d\u52a1-ntp,firewalld,crond",permalink:"/docs/Linux/other"}},u=[{value:"systemctl \u7ba1\u7406\u7cfb\u7edf\u670d\u52a1",id:"systemctl-\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1",children:[{value:"1\u3001systemctl \u6982\u8ff0",id:"1systemctl-\u6982\u8ff0",children:[],level:3},{value:"2\u3001\u663e\u793a\u7cfb\u7edf\u670d\u52a1",id:"2\u663e\u793a\u7cfb\u7edf\u670d\u52a1",children:[],level:3},{value:"3\u3001Linux \u7cfb\u7edf\u670d\u52a1\u7ba1\u7406",id:"3linux-\u7cfb\u7edf\u670d\u52a1\u7ba1\u7406",children:[],level:3},{value:"\u2606 status \u67e5\u770b\u72b6\u6001",id:"-status-\u67e5\u770b\u72b6\u6001",children:[],level:3},{value:"\u2606 stop \u505c\u6b62\u670d\u52a1",id:"-stop-\u505c\u6b62\u670d\u52a1",children:[],level:3},{value:"\u2606 start \u542f\u52a8\u670d\u52a1",id:"-start-\u542f\u52a8\u670d\u52a1",children:[],level:3},{value:"\u2606 restart \u91cd\u542f\u670d\u52a1",id:"-restart-\u91cd\u542f\u670d\u52a1",children:[],level:3},{value:"\u2606 reload \u70ed\u91cd\u8f7d\u6280\u672f",id:"-reload-\u70ed\u91cd\u8f7d\u6280\u672f",children:[],level:3},{value:"4\u3001\u670d\u52a1\u6301\u4e45\u5316\uff08\u5f00\u673a\u81ea\u542f\u4e0e\u5f00\u673a\u4e0d\u81ea\u542f\uff09",id:"4\u670d\u52a1\u6301\u4e45\u5316\u5f00\u673a\u81ea\u542f\u4e0e\u5f00\u673a\u4e0d\u81ea\u542f",children:[],level:3},{value:"\u2606 \u5f00\u673a\u81ea\u542f",id:"-\u5f00\u673a\u81ea\u542f",children:[],level:3},{value:"\u2606 \u5f00\u673a\u4e0d\u81ea\u542f",id:"-\u5f00\u673a\u4e0d\u81ea\u542f",children:[],level:3}],level:2},{value:"systemctl \u53c2\u6570\u603b\u7ed3",id:"systemctl-\u53c2\u6570\u603b\u7ed3",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux-\u81ea\u6709\u670d\u52a1\u4e0e\u8f6f\u4ef6\u5305\u7ba1\u7406"},"Linux \u81ea\u6709\u670d\u52a1\u4e0e\u8f6f\u4ef6\u5305\u7ba1\u7406"),(0,a.kt)("p",null,'\u670d\u52a1\u662f\u4e00\u4e9b\u7279\u5b9a\u7684\u8fdb\u7a0b\uff0c\u81ea\u6709\u670d\u52a1\u5c31\u662f\u7cfb\u7edf\u5f00\u673a\u540e\u5c31\u81ea\u52a8\u8fd0\u884c\u7684\u4e00\u4e9b\u8fdb\u7a0b\uff0c\u4e00\u65e6\u5ba2\u6237\u53d1\u51fa\u8bf7\u6c42\uff0c\u8fd9\u4e9b\u8fdb\u7a0b\u5c31\u81ea\u52a8\u4e3a\u4ed6\u4eec\u63d0\u4f9b\u670d\u52a1\uff0cwindows \u7cfb\u7edf\u4e2d\uff0c\u628a\u8fd9\u4e9b\u81ea\u52a8\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u79f0\u4e3a"\u670d\u52a1"'),(0,a.kt)("p",null,"\u4e3e\u4f8b\uff1a\u5f53\u6211\u4eec\u4f7f\u7528 SSH \u5ba2\u6237\u7aef\u8f6f\u4ef6\u8fde\u63a5 linux \u7684\u65f6\u5019\uff0c\u6211\u4eec\u7684\u670d\u52a1\u5668\u4e3a\u4ec0\u4e48\u4f1a\u5bf9\u8fde\u63a5\u505a\u51fa\u54cd\u5e94\uff1f\u662f\u56e0\u4e3a SSH \u670d\u52a1\u5f00\u673a\u5c31\u81ea\u52a8\u8fd0\u884c\u4e86\u3002"),(0,a.kt)("p",null,"\u6240\u8c13\u81ea\u6709\u670d\u52a1\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a Linux \u7cfb\u7edf\u5f00\u673a\u81ea\u52a8\u8fd0\u884c\u7684\u670d\u52a1\uff08\u7a0b\u5e8f\uff09\u3002"),(0,a.kt)("h2",{id:"systemctl-\u7ba1\u7406\u7cfb\u7edf\u670d\u52a1"},"systemctl \u7ba1\u7406\u7cfb\u7edf\u670d\u52a1"),(0,a.kt)("h3",{id:"1systemctl-\u6982\u8ff0"},"1\u3001systemctl \u6982\u8ff0"),(0,a.kt)("p",null,"CentOS7 \u7248\u672c\uff1a"),(0,a.kt)("p",null,"systemctl \u547d\u4ee4 = system \u7cfb\u7edf + control \u63a7\u5236\uff08\u670d\u52a1\u7ba1\u7406+\u5f00\u542f\u542f\u52a8\u9879\u7ba1\u7406\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl start|stop|restart network\n")),(0,a.kt)("h3",{id:"2\u663e\u793a\u7cfb\u7edf\u670d\u52a1"},"2\u3001\u663e\u793a\u7cfb\u7edf\u670d\u52a1"),(0,a.kt)("p",null,"\u57fa\u672c\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl [\u9009\u9879]\n\u9009\u9879\u8bf4\u660e\uff1a\nlist-units --type service --all\uff1a\u5217\u51fa\u6240\u6709\u670d\u52a1\uff08\u5305\u542b\u542f\u52a8\u7684\u548c\u6ca1\u542f\u52a8\u7684\uff09\nlist-units --type service\uff1a\u5217\u51fa\u6240\u6709\u542f\u52a8\u7684\u670d\u52a1\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u5217\u51fa Linux \u7cfb\u7edf\u4e2d\u6240\u6709\u7684\u670d\u52a1\uff08\u5305\u542b\u542f\u52a8\u7684\u548c\u6ca1\u542f\u52a8\u7684\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl list-units --type service --all\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u53ea\u5217\u51fa\u5df2\u7ecf\u542f\u52a8\u7684 Linux \u7cfb\u7edf\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl list-units --type service\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u628a systemctl \u663e\u793a\u7cfb\u7edf\u670d\u52a1\u4e0e\u7ba1\u9053\u547d\u4ee4\u76f8\u7ed3\u5408\uff0c\u7b5b\u9009\u6211\u4eec\u60f3\u8981\u7684\u670d\u52a1\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl list-units --type service | grep sshd\n")),(0,a.kt)("h3",{id:"3linux-\u7cfb\u7edf\u670d\u52a1\u7ba1\u7406"},"3\u3001Linux \u7cfb\u7edf\u670d\u52a1\u7ba1\u7406"),(0,a.kt)("h3",{id:"-status-\u67e5\u770b\u72b6\u6001"},"\u2606 status \u67e5\u770b\u72b6\u6001"),(0,a.kt)("p",null,"\u67e5\u770b\u7cfb\u7edf\u670d\u52a1\u7684\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl status \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u67e5\u8be2\u7cfb\u7edf\u4e2d\u7f51\u7edc\u670d\u52a1\u7684\u72b6\u6001\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl status network\n")),(0,a.kt)("h3",{id:"-stop-\u505c\u6b62\u670d\u52a1"},"\u2606 stop \u505c\u6b62\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl stop \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u4f7f\u7528 systemctl \u547d\u4ee4\u505c\u6b62 network \u7f51\u7edc\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl stop network\n")),(0,a.kt)("h3",{id:"-start-\u542f\u52a8\u670d\u52a1"},"\u2606 start \u542f\u52a8\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl start \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u4f7f\u7528 systemctl \u547d\u4ee4\u542f\u52a8 network \u7f51\u7edc\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl start network\n")),(0,a.kt)("h3",{id:"-restart-\u91cd\u542f\u670d\u52a1"},"\u2606 restart \u91cd\u542f\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl restart \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n\u7b49\u4ef7\u4e8e\n# systemctl stop \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n# systemctl start \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u4f7f\u7528 systemctl \u547d\u4ee4\u91cd\u542f crond \u8ba1\u5212\u4efb\u52a1\u7684\u670d\u52a1\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl restart crond\n")),(0,a.kt)("h3",{id:"-reload-\u70ed\u91cd\u8f7d\u6280\u672f"},"\u2606 reload \u70ed\u91cd\u8f7d\u6280\u672f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl reload \u7cfb\u7edf\u670d\u52a1\u540d\u79f0\n")),(0,a.kt)("p",null,"reload\uff1a\u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\uff08\u5e76\u975e\u6240\u6709\u670d\u52a1\u90fd\u652f\u6301 reload\uff0c\u901a\u5e38\u4f7f\u7528 restart)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u4e9b\u670d\u52a1\uff0c\u5982 Nginx\uff0c\u66f4\u6539\u4e86\u914d\u7f6e\u6587\u4ef6\uff0c\u4f46\u662f\u4e0d\u80fd\u91cd\u542f Nginx \u670d\u52a1\uff0c\u53ea\u662f\u60f3\u7acb\u5373\u8ba9\u6211\u4eec\u914d\u7f6e\u6587\u4ef6\u7684\u66f4\u6539\u751f\u6548\uff0c\u5219\u5c31\u53ef\u4ee5\u4f7f\u7528\u70ed\u91cd\u8f7d\u4e86\u3002")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u4f7f\u7528\u70ed\u91cd\u8f7d\u6280\u672f\u91cd\u65b0\u52a0\u8f7d crond \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl reload crond\n")),(0,a.kt)("h3",{id:"4\u670d\u52a1\u6301\u4e45\u5316\u5f00\u673a\u81ea\u542f\u4e0e\u5f00\u673a\u4e0d\u81ea\u542f"},"4\u3001\u670d\u52a1\u6301\u4e45\u5316\uff08\u5f00\u673a\u81ea\u542f\u4e0e\u5f00\u673a\u4e0d\u81ea\u542f\uff09"),(0,a.kt)("p",null,"\u6240\u8c13\u670d\u52a1\u6301\u4e45\u5316\uff0c\u5c31\u662f\u670d\u52a1\u5728\u5f00\u673a\u7684\u65f6\u5019\uff0c\u662f\u5426\u81ea\u52a8\u542f\u52a8\u3002"),(0,a.kt)("h3",{id:"-\u5f00\u673a\u81ea\u542f"},"\u2606 \u5f00\u673a\u81ea\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl enable \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u628a network \u7f51\u7edc\u670d\u52a1\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl enable network\nnetwork.service is not a native service, redirecting to /sbin/chkconfig.\nExecuting /sbin/chkconfig network on\n\n\u4ee5\u4e0a\u63d0\u793a\u4ee3\u8868network.service\u4e0d\u662f\u4e00\u4e2a\u672c\u5730\u7684\u7cfb\u7edf\u670d\u52a1\uff0c\u6240\u4ee5\u60f3\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u9700\u8981\u4f7f\u7528/sbin/chkconfig\u8fdb\u884c\u64cd\u4f5c\n# /sbin/chkconfig network on\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u628a crond \u8ba1\u5212\u4efb\u52a1\u7684\u670d\u52a1\u4fe1\u606f\u6dfb\u52a0\u5230\u5f00\u673a\u81ea\u542f\u52a8\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl enable crond\n")),(0,a.kt)("h3",{id:"-\u5f00\u673a\u4e0d\u81ea\u542f"},"\u2606 \u5f00\u673a\u4e0d\u81ea\u542f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl disable \u7cfb\u7edf\u670d\u52a1\u7684\u540d\u79f0\n")),(0,a.kt)("p",null,"\u6848\u4f8b\uff1a\u628a crond \u8ba1\u5212\u4efb\u52a1\u7684\u670d\u52a1\u4fe1\u606f\u4ece\u5f00\u673a\u81ea\u542f\u52a8\u4e2d\u79fb\u9664"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},"# systemctl disable crond\n")),(0,a.kt)("h2",{id:"systemctl-\u53c2\u6570\u603b\u7ed3"},"systemctl \u53c2\u6570\u603b\u7ed3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"list-units --type service --all"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u6240\u6709\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"list-units --type service"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u6240\u6709\u542f\u52a8\u7684\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"start"),(0,a.kt)("td",{parentName:"tr",align:null},"\u542f\u52a8\u6307\u5b9a\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stop"),(0,a.kt)("td",{parentName:"tr",align:null},"\u505c\u6b62\u6307\u5b9a\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u6307\u5b9a\u670d\u52a1\u7684\u8fd0\u884c\u72b6\u51b5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"restart"),(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u542f\u6307\u5b9a\u670d\u52a1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"reload"),(0,a.kt)("td",{parentName:"tr",align:null},"\u91cd\u65b0\u52a0\u8f7d\u6307\u5b9a\u670d\u52a1\u7684\u914d\u7f6e\u6587\u4ef6\uff08\u5e76\u975e\u6240\u6709\u670d\u52a1\u90fd\u652f\u6301 reload\uff0c\u901a\u5e38\u4f7f\u7528 restart)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enable"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u670d\u52a1\u5f00\u673a\u81ea\u52a8\u542f\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disable"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d6\u6d88\u670d\u52a1\u5f00\u673a\u81ea\u52a8\u542f\u52a8")))))}m.isMDXComponent=!0}}]);