"use strict";(self.webpackChunkrecurring_app=self.webpackChunkrecurring_app||[]).push([[243],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(a),c=n,h=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return a?r.createElement(h,o(o({ref:t},u),{},{components:a})):r.createElement(h,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4225:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return N}});var r=a(7462),n=a(3366),l=a(7294),o=a(3905),i=a(2389),s=a(9443);var m=function(){var e=(0,l.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(3616),d=a(6010),p="tabItem_vU9c";function c(e){var t,a,n,o=e.lazy,i=e.block,s=e.defaultValue,c=e.values,h=e.groupId,v=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===s?s:null!=(t=null!=s?s:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=m(),y=N.tabGroupChoices,T=N.setTabGroupChoices,w=(0,l.useState)(g),x=w[0],O=w[1],E=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=y[h];null!=P&&P!==x&&f.some((function(e){return e.value===P}))&&O(P)}var S=function(e){var t=e.currentTarget,a=E.indexOf(t),r=f[a].value;r!==x&&(C(t),O(r),null!=h&&T(h,r))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;a=E[r]||E[0];break;case"ArrowLeft":var n=E.indexOf(e.currentTarget)-1;a=E[n]||E[E.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},v)},f.map((function(e){var t=e.value,a=e.label,n=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:S,onClick:S},n,{className:(0,d.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),o?(0,l.cloneElement)(k.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,i.Z)();return l.createElement(c,(0,r.Z)({key:String(t)},e))}var v=function(e){var t=e.children,a=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:a,className:r},t)},k=["components"],f={sidebar_position:6},b="Code draft - TMP",g={unversionedId:"start/code-draft",id:"start/code-draft",title:"Code draft - TMP",description:"Some method test 1",source:"@site/docs/start/code-draft.md",sourceDirName:"start",slug:"/start/code-draft",permalink:"/ntp-payment-api-doc/docs/start/code-draft",editUrl:"https://github.com/navid59/ntp-payment-api-doc/docs/start/code-draft.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Errors & Statuses",permalink:"/ntp-payment-api-doc/docs/start/start-Error"},next:{title:"Authorize a payment",permalink:"/ntp-payment-api-doc/docs/authorize/authorize-strc"}},N=[{value:"Some method test 1",id:"some-method-test-1",children:[],level:2},{value:"Some method test 2",id:"some-method-test-2",children:[],level:2},{value:"Some method test 3",id:"some-method-test-3",children:[],level:2}],y={toc:N};function T(e){var t=e.components,a=(0,n.Z)(e,k);return(0,o.kt)("wrapper",(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-draft---tmp"},"Code draft - TMP"),(0,o.kt)("h2",{id:"some-method-test-1"},"Some method test 1"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Group 1")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(v,{value:"curl",label:"CurlRequest",mdxType:"TabItem"},"``` aaaaaaaa ```"),(0,o.kt)(v,{value:"php",label:"PhpRequest",mdxType:"TabItem"},"``` bbb ```")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"some-method-test-2"},"Some method test 2"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Group 2")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(v,{value:"curl",label:"CurlRequest",mdxType:"TabItem"},"Lorem 2 - Use Ctrl + V to paste."),(0,o.kt)(v,{value:"php",label:"PhpRequest",mdxType:"TabItem"},"``` bbb ```")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"some-method-test-3"},"Some method test 3"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Group 3")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(h,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(v,{value:"curl",label:"CurlRequest",mdxType:"TabItem"},"Lorem 3 - Use Ctrl + V to paste."),(0,o.kt)(v,{value:"php",label:"PhpRequest",mdxType:"TabItem"},"``` bbb ```")))),(0,o.kt)("hr",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"right"},"Test Text"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Header"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Title"),(0,o.kt)("td",{parentName:"tr",align:"right"},"Here's this")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Paragraph"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Text"),(0,o.kt)("td",{parentName:"tr",align:"right"},"And more")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Paragraph BB"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Text AAA"),(0,o.kt)("td",{parentName:"tr",align:"right"},"And more AA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Paragraph"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Text"),(0,o.kt)("td",{parentName:"tr",align:"right"},"And more")))),(0,o.kt)("hr",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Full Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Header"),(0,o.kt)("td",{parentName:"tr",align:null},"Title"),(0,o.kt)("td",{parentName:"tr",align:null},"Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Paragraph"),(0,o.kt)("td",{parentName:"tr",align:null},"Text"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("hr",null),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Write the press release"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the website"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Contact the media")),(0,o.kt)("hr",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Syntax"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"right"},"M"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Header 1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Title   1"),(0,o.kt)("td",{parentName:"tr",align:"right"},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Header 2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Title   2"),(0,o.kt)("td",{parentName:"tr",align:"right"},"\u2717")))))}T.isMDXComponent=!0}}]);