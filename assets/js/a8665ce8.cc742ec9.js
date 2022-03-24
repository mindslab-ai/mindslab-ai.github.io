"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[23],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6316:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return y},default:function(){return T},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return g}});var r=n(7462),a=n(3366),l=n(7294),i=n(3905),u=n(9960),o=n(1207),s=n(2389),c=n(3725),p=n(6010),m="tabItem_LplD";function b(e){var t,n,a,i=e.lazy,u=e.block,o=e.defaultValue,s=e.values,b=e.groupId,d=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=s?s:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===o?o:null!=(t=null!=o?o:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,c.UB)(),g=h.tabGroupChoices,N=h.setTabGroupChoices,T=(0,l.useState)(y),I=T[0],L=T[1],D=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var O=g[b];null!=O&&O!==I&&v.some((function(e){return e.value===O}))&&L(O)}var E=function(e){var t=e.currentTarget,n=D.indexOf(t),r=v[n].value;r!==I&&(w(t),L(r),null!=b&&N(b,r))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=D.indexOf(e.currentTarget)+1;n=D[r]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;n=D[a]||D[D.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},d)},v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return D.push(e)},onKeyDown:x,onFocus:E,onClick:E},a,{className:(0,p.Z)("tabs__item",m,null==a?void 0:a.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(f.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,s.Z)();return l.createElement(b,(0,r.Z)({key:String(t)},e))}function f(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}var v=["components"],k={title:"MINDsLab Brain\ud300 \ucc44\uc6a9",description:"MINDsLab Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",image:"img/mindslab_default.png"},y="MINDsLab Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",h={type:"mdx",permalink:"/careers",source:"@site/src/pages/careers.mdx",title:"MINDsLab Brain\ud300 \ucc44\uc6a9",description:"MINDsLab Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",frontMatter:{title:"MINDsLab Brain\ud300 \ucc44\uc6a9",description:"MINDsLab Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!",image:"img/mindslab_default.png"}},g=[{value:"We&#39;re hiring!",id:"were-hiring",level:2},{value:"Job Description",id:"job-description",level:2},{value:"\ud575\uc2ec \uc5c5\ubb34",id:"\ud575\uc2ec-\uc5c5\ubb34",level:3},{value:"\uc790\uaca9 \uc694\uac74",id:"\uc790\uaca9-\uc694\uac74",level:3},{value:"\uc6b0\ub300 \uc694\uac74",id:"\uc6b0\ub300-\uc694\uac74",level:3}],N={toc:g};function T(e){var t=e.components,n=(0,a.Z)(e,v);return(0,i.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mindslab-brain\ud300\uc5d0-\uc9c0\uc6d0\ud558\uc138\uc694"},"MINDsLab Brain\ud300\uc5d0 \uc9c0\uc6d0\ud558\uc138\uc694!"),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"were-hiring"},"We're hiring!"),(0,i.kt)("p",null,"\uc548\ub155\ud558\uc138\uc694? \ub9c8\uc778\uc988\ub7a9 Brain\ud300\uc5d0\uc11c \ud568\uaed8 \ud560 \ubd84\ub4e4\uc744 \uae30\ub2e4\ub9bd\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc9c0\uc6d0 \uac00\ub2a5\ud55c \uc9c1\uad70\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AI Scientist (Brain\ud300)"),(0,i.kt)("li",{parentName:"ul"},"ML Engineer (Brain\ud300)")),(0,i.kt)("p",null,"\ubb38\uc758 \uc0ac\ud56d\uc774 \uc788\uc744 \uacbd\uc6b0, ",(0,i.kt)("a",{parentName:"p",href:"mailto:brain-hr@mindslab.ai"},"brain-hr@mindslab.ai")," \ub85c \ubb38\uc758\uc8fc\uc2dc\uba74 \ucd5c\ub300\ud55c \ube60\ub974\uac8c \ub2f5\ubcc0\ub4dc\ub9b4 \uc218 \uc788\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,i.kt)("div",{className:o.Z.buttons},(0,i.kt)(u.Z,{className:"button button--secondary button--lg",to:"https://forms.gle/szytvUCyd9eKuL4F8",mdxType:"Link"},"Brain\ud300 \uc9c0\uc6d0\ud558\uae30\u270d")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"job-description"},"Job Description"),(0,i.kt)("h3",{id:"\ud575\uc2ec-\uc5c5\ubb34"},"\ud575\uc2ec \uc5c5\ubb34"),(0,i.kt)(d,{groupId:"job-position",mdxType:"Tabs"},(0,i.kt)(f,{value:"requirements",label:"AI Scientist",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc815\uc81c\ub418\uc9c0 \uc54a\uc740 \ub370\uc774\ud130\ub85c \ud2b9\uc815 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c \ucd5c\uc801\uc758 ML/DL \uc54c\uace0\ub9ac\uc998\uc744 \ucc3e\uac70\ub098 \uc124\uacc4"),(0,i.kt)("li",{parentName:"ul"},"\uae30\uc874 \uc54c\uace0\ub9ac\uc998\uc758 \uc0c1\uc5c5\uc801 \uac00\uce58\uc640 \uc0c8\ub85c\uc6b4 \ub3c4\uba54\uc778 \ud559\uc2b5 \ubaa8\ub378\uc758 \uc124\uacc4 \ubc0f \uc131\ub2a5\uc744 \ub192\uc774\uae30 \uc704\ud55c \uac1c\uc120 \ubc29\uc548 \uc5f0\uad6c"),(0,i.kt)("li",{parentName:"ul"},"AI \ubd84\uc57c\uc5d0\uc11c \ud604\uc2e4 \uc138\uacc4 \ud639\uc740 \uace0\uac1d\uc758 \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ud601\uc2e0\uc801\uc778 \uc54c\uace0\ub9ac\uc998\uc744 \uac1c\ubc1c"))),(0,i.kt)(f,{value:"ml-engineer",label:"ML Engineer",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub9c8\uc778\uc988\ub7a9 \uc790\uccb4 ML/DL \uc54c\uace0\ub9ac\uc998\uc744 \uc11c\ube44\uc2a4\ud558\uae30 \uc704\ud55c API \uac1c\ubc1c \ubc0f \uc124\uacc4"),(0,i.kt)("li",{parentName:"ul"},"ML/DL \uc54c\uace0\ub9ac\uc998 \uae30\ubc18 \uc11c\ube44\uc2a4\uc5d0 \ub300\ud55c \ucd5c\uc801\ud654")),(0,i.kt)("br",null))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\uc790\uaca9-\uc694\uac74"},"\uc790\uaca9 \uc694\uac74"),(0,i.kt)(d,{groupId:"job-position",mdxType:"Tabs"},(0,i.kt)(f,{value:"requirements",label:"AI Scientist",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ML/DL \uc54c\uace0\ub9ac\uc998\uc744 \uae4a\uc774 \uc774\ud574\ud560 \uc218 \uc788\ub294 \uc218\uc900\uc758 \uc218\ud559\uc801 \ub2a5\ub825 \ubc0f \ubaa8\ub378\ub9c1 \ub2a5\ub825"),(0,i.kt)("li",{parentName:"ul"},"TensorFlow, PyTorch \ub4f1 \ud504\ub808\uc784\uc6cc\ud06c \ud65c\uc6a9 \ubc0f \ubaa8\ub378 \uad6c\ud604\uc5d0 \uc790\uc720\ub85c\uc6b8 \uc218 \uc788\ub294 \uc218\uc900\uc758 \uac1c\ubc1c \ub2a5\ub825"),(0,i.kt)("li",{parentName:"ul"},"ML/DL \uc5f0\uad6c \ub17c\ubb38 Implementation \ub610\ub294 \uad00\ub828 Repository\uc758 Contribution \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"AI \uad00\ub828 \uae30\uc220 \ub17c\ubb38\uc744 \uc77d\uace0 \ub0b4\uc6a9\uc744 \ucda9\ubd84\ud788 \uc774\ud574\ud558\ub294\ub370 \ubb34\ub9ac\uac00 \uc5c6\ub294 \uc218\uc900\uc758 \uc601\uc5b4 \ub2a5\ub825"))),(0,i.kt)(f,{value:"ml-engineer",label:"ML Engineer",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"High-Level Programming Language\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ud558\ub294 \uac83\uc744 \uad6c\ud604\ud560 \uc218 \uc788\ub294 \ubd84"),(0,i.kt)("li",{parentName:"ul"},"Python, Java, Kotlin \uc911 1\uac1c \uc774\uc0c1\uc758 \uc5b8\uc5b4\uc5d0 \ub2a5\uc219\ud558\uc2e0 \ubd84"),(0,i.kt)("li",{parentName:"ul"},"PyTorch, Tensorflow \ub4f1 DL framework\ub85c \uad6c\ud604\ub41c \ucf54\ub4dc\ub97c \uc774\ud574\ud560 \uc218 \uc788\ub294 \ubd84")),(0,i.kt)("br",null))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"\uc6b0\ub300-\uc694\uac74"},"\uc6b0\ub300 \uc694\uac74"),(0,i.kt)(d,{groupId:"job-position",mdxType:"Tabs"},(0,i.kt)(f,{value:"requirements",label:"AI Scientist",default:!0,mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc720\uad00 \uc804\uacf5 \uc11d\uc0ac \uc774\uc0c1\uc758 \uacbd\ub825 \ub610\ub294 \uad00\ub828 \ud559\ud68c \ub17c\ubb38 \uc81c\ucd9c \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"\uae08\uc735, \uc758\ub8cc, \uad50\uc721, \ud328\uc158 \ub4f1 \uc0b0\uc5c5\ubcc4 \uc2e4\uc81c \ub370\uc774\ud130 \uae30\ubc18 AI \ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"\uc81c\ud488, \uc11c\ube44\uc2a4\uc758 \uc694\uad6c \uc0ac\ud56d \ubd84\uc11d \ubc0f \uac1c\ubc1c \uc124\uacc4 \uc5c5\ubb34 \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"CUDA \uac1c\ubc1c\uc744 \uc704\ud55c C \uac1c\ubc1c\uacfc \uad00\ub828\ub41c \uc774\ud574 \ub610\ub294 \uacbd\ud5d8")),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)(f,{value:"ml-engineer",label:"ML Engineer",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gRPC \ub4f1 HTTP \ud1b5\uc2e0\uc5d0 \ub300\ud55c \uc774\ud574 \ub610\ub294 \ub124\ud2b8\uc6cc\ud06c \uad00\ub828 \uc9c0\uc2dd"),(0,i.kt)("li",{parentName:"ul"},"CI/CD(Jenkins CI \ub4f1)\uc744 \ud1b5\ud55c \uc790\ub3d9\ud654 \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"Docker\ub97c \ud65c\uc6a9\ud558\uc5ec GPU \uc790\uc6d0\uc744 \uc0ac\uc6a9\ud558\ub294 \uc11c\ube44\uc2a4 \uad6c\uc131 \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"\ub514\uc790\uc778 \ud328\ud134\uc5d0 \ub300\ud55c \uc774\ud574\ub97c \ubc14\ud0d5\uc73c\ub85c \ud55c \uac1c\ubc1c \uacbd\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \uae30\ud68d \ub4f1 \ube44\uac1c\ubc1c \uc9c1\uad70\uacfc\uc758 \ubb34\ub9ac\uc5c6\ub294 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ub2a5\ub825"),(0,i.kt)("li",{parentName:"ul"},"ML/DL \uc5f0\uad6c \uc9c1\uad70\uacfc\uc758 \ubb34\ub9ac\uc5c6\ub294 \ucee4\ubba4\ub2c8\ucf00\uc774\uc158 \ub2a5\ub825"),(0,i.kt)("li",{parentName:"ul"},"C++ ML Library\uc778 flashlight\ub97c \ub2e4\ub904\ubcf8 \uacbd\ud5d8\uc774 \uc788\uc73c\uc2e0 \ubd84")))),(0,i.kt)("br",null))}T.isMDXComponent=!0},1207:function(e,t){t.Z={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}}}]);