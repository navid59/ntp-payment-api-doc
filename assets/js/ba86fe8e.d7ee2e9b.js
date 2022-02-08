"use strict";(self.webpackChunkrecurring_app=self.webpackChunkrecurring_app||[]).push([[432],{3905:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),u=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=u(n.components);return r.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),m=u(t),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(f,o(o({ref:e},c),{},{components:t})):r.createElement(f,o({ref:e},c))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(n,e,t){var r=t(7294);e.Z=function(n){var e=n.children,t=n.hidden,a=n.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},6396:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(7462),a=t(7294),i=t(2389),o=t(9443);var s=function(){var n=(0,a.useContext)(o.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n},l=t(3616),u=t(6010),c="tabItem_vU9c";function p(n){var e,t,i,o=n.lazy,p=n.block,m=n.defaultValue,d=n.values,f=n.groupId,E=n.className,g=a.Children.map(n.children,(function(n){if((0,a.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),R=null!=d?d:g.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),O=(0,l.lx)(R,(function(n,e){return n.value===e.value}));if(O.length>0)throw new Error('Docusaurus error: Duplicate values "'+O.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(e=null!=m?m:null==(t=g.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(i=g[0])?void 0:i.props.value;if(null!==y&&!R.some((function(n){return n.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+R.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=s(),h=v.tabGroupChoices,S=v.setTabGroupChoices,b=(0,a.useState)(y),N=b[0],T=b[1],_=[],D=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=h[f];null!=C&&C!==N&&R.some((function(n){return n.value===C}))&&T(C)}var P=function(n){var e=n.currentTarget,t=_.indexOf(e),r=R[t].value;r!==N&&(D(e),T(r),null!=f&&S(f,r))},x=function(n){var e,t=null;switch(n.key){case"ArrowRight":var r=_.indexOf(n.currentTarget)+1;t=_[r]||_[0];break;case"ArrowLeft":var a=_.indexOf(n.currentTarget)-1;t=_[a]||_[_.length-1]}null==(e=t)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},E)},R.map((function(n){var e=n.value,t=n.label,i=n.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:function(n){return _.push(n)},onKeyDown:x,onFocus:P,onClick:P},i,{className:(0,u.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===e})}),null!=t?t:e)}))),o?(0,a.cloneElement)(g.filter((function(n){return n.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(n,e){return(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==N})}))))}function m(n){var e=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(e)},n))}},2640:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(6396),s=t(8215),l=["components"],u={sidebar_position:2},c="Start payment request example",p={unversionedId:"start/start-payment-ex",id:"start/start-payment-ex",title:"Start payment request example",description:"Sample code",source:"@site/docs/start/start-payment-ex.md",sourceDirName:"start",slug:"/start/start-payment-ex",permalink:"/ntp-payment-api-doc/docs/start/start-payment-ex",editUrl:"https://github.com/navid59/ntp-payment-api-doc/docs/start/start-payment-ex.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Starting a payment",permalink:"/ntp-payment-api-doc/docs/start/start-strc"},next:{title:"Start response example",permalink:"/ntp-payment-api-doc/docs/start/start-ex-response"}},m=[{value:"Sample code",id:"sample-code",children:[],level:2}],d={toc:m};function f(n){var e=n.components,t=(0,a.Z)(n,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"start-payment-request-example"},"Start payment request example"),(0,i.kt)("h2",{id:"sample-code"},"Sample code"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Start action")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"json",label:"Json structure",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'{\n "config": {\n   "emailTemplate": "confirm",\n   "notifyUrl": "http://yourdomain.com/example/ipn.php",\n   "redirectUrl": "http://yourdomain.com/example/backUrl.php",\n   "language": "ro"\n },\n "payment": {\n   "options": {\n     "installments": 1,\n     "bonus": 0\n   },\n   "instrument": {\n     "type": "card",\n     "account": "9900004810225098",\n     "expMonth": 1,\n     "expYear": 2023,\n     "secretCode": "111",\n     "token": ""\n   },\n   "data": {\n     "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",\n     "OS": "Linux",\n     "OS_VERSION": "x86_64",\n     "MOBILE": "false",\n     "SCREEN_POINT": "false",\n     "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",\n     "BROWSER_COLOR_DEPTH": "24",\n     "BROWSER_SCREEN_HEIGHT": "1080",\n     "BROWSER_SCREEN_WIDTH": "1920",\n     "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",\n     "BROWSER_JAVA_ENABLED": "false",\n     "BROWSER_LANGUAGE": "en-US",\n     "BROWSER_TZ": "Europe/Bucharest",\n     "BROWSER_TZ_OFFSET": "-120",\n     "IP_ADDRESS": "37.221.166.134"\n   }\n },\n "order": {\n   "ntpID": "",\n   "posSignature": "RAND-OM01-SIGN-TURE-3POS",\n   "dateTime": "2019-08-24T14:15:22Z",\n   "description": "Order Desc",\n   "orderID": "stringOrderIDdddfgdfg3323",\n   "amount": 200,\n   "currency": "RON",\n   "billing": {\n     "email": "user@example.com",\n     "phone": "string",\n     "firstName": "string",\n     "lastName": "string",\n     "city": "string",\n     "country": 0,\n     "state": "string",\n     "postalCode": "string",\n     "details": "string"\n   },\n   "shipping": {\n     "email": "user@example.com",\n     "phone": "string",\n     "firstName": "string",\n     "lastName": "string",\n     "city": "string",\n     "country": 0,\n     "state": "string",\n     "postalCode": "string",\n     "details": "string"\n   },\n   "products": [\n     {\n       "name": "string",\n       "code": "string",\n       "category": "string",\n       "price": 0,\n       "vat": 0\n     }\n   ],\n   "installments": {\n     "selected": 1,\n     "available": [\n       0\n     ]\n   },\n   "data": {\n     "property1": "string",\n     "property2": "string"\n   }\n }\n}\n')),"  "),(0,i.kt)(s.Z,{value:"curl",label:"Curl Request",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'https://secure.sandbox.netopia-payments.com/payment/card/start\' \\\n--header \'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN\' \\\n--data-raw \'{\n"config": {\n  "emailTemplate": "confirm",\n  "notifyUrl": "http://yourdomain.com/example/ipn.php",\n  "redirectUrl": "http://yourdomain.com/example/backUrl.php",\n  "language": "ro"\n},\n"payment": {\n  "options": {\n    "installments": 1,\n    "bonus": 0\n  },\n  "instrument": {\n    "type": "card",\n    "account": "9876543210987654",\n    "expMonth": 1,\n    "expYear": 2023,\n    "secretCode": "111",\n    "token": ""\n  },\n  "data": {\n    "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",\n    "OS": "Linux",\n    "OS_VERSION": "x86_64",\n    "MOBILE": "false",\n    "SCREEN_POINT": "false",\n    "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",\n    "BROWSER_COLOR_DEPTH": "24",\n    "BROWSER_SCREEN_HEIGHT": "1080",\n    "BROWSER_SCREEN_WIDTH": "1920",\n    "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",\n    "BROWSER_JAVA_ENABLED": "false",\n    "BROWSER_LANGUAGE": "en-US",\n    "BROWSER_TZ": "Europe/Bucharest",\n    "BROWSER_TZ_OFFSET": "-120",\n    "IP_ADDRESS": "73.122.66.134"\n  }\n},\n"order": {\n  "ntpID": "",\n  "posSignature": "ABCD-ABCD-ABCD-ABCD-ABCD",\n  "dateTime": "2021-08-24T14:15:22Z",\n  "description": "Order Desc",\n  "orderID": "stringOrderID4694",\n  "amount": 200,\n  "currency": "RON",\n  "billing": {\n    "email": "user@example.com",\n    "phone": "string",\n    "firstName": "string",\n    "lastName": "string",\n    "city": "string",\n    "country": 0,\n    "state": "string",\n    "postalCode": "string",\n    "details": "string"\n  },\n  "shipping": {\n    "email": "user@example.com",\n    "phone": "string",\n    "firstName": "string",\n    "lastName": "string",\n    "city": "string",\n    "country": 0,\n    "state": "string",\n    "postalCode": "string",\n    "details": "string"\n  },\n  "products": [\n    {\n      "name": "string",\n      "code": "string",\n      "category": "string",\n      "price": 0,\n      "vat": 0\n    }\n  ],\n  "installments": {\n    "selected": 1,\n    "available": [\n      0\n    ]\n  },\n  "data": {\n    "property1": "string",\n    "property2": "string"\n  }\n}\n}\'\n')),"  "),(0,i.kt)(s.Z,{value:"php",label:"Php Request",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-php"},'<?php\n\n$curl = curl_init();\n\ncurl_setopt_array($curl, array(\nCURLOPT_URL => \'https://secure.sandbox.netopia-payments.com/payment/card/start\',\nCURLOPT_RETURNTRANSFER => true,\nCURLOPT_ENCODING => \'\',\nCURLOPT_MAXREDIRS => 10,\nCURLOPT_TIMEOUT => 0,\nCURLOPT_FOLLOWLOCATION => true,\nCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\nCURLOPT_CUSTOMREQUEST => \'POST\',\nCURLOPT_POSTFIELDS =>\'{\n"config": {\n  "emailTemplate": "confirm",\n  "notifyUrl": "http://35.204.43.65/demoV2/example/ipn.php",\n  "redirectUrl": "http://35.204.43.65/demoV2/example/backUrl.php",\n  "language": "ro"\n},\n"payment": {\n  "options": {\n    "installments": 1,\n    "bonus": 0\n  },\n  "instrument": {\n    "type": "card",\n    "account": "9900004810225098",\n    "expMonth": 1,\n    "expYear": 2023,\n    "secretCode": "111",\n    "token": ""\n  },\n  "data": {\n    "BROWSER_USER_AGENT": "AMozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",\n    "OS": "Linux",\n    "OS_VERSION": "x86_64",\n    "MOBILE": "false",\n    "SCREEN_POINT": "false",\n    "SCREEN_PRINT": "Current Resolution: 1920x1080, Available Resolution: 1853x1053, Color Depth: 24, Device XDPI: undefined, Device YDPI: undefined",\n    "BROWSER_COLOR_DEPTH": "24",\n    "BROWSER_SCREEN_HEIGHT": "1080",\n    "BROWSER_SCREEN_WIDTH": "1920",\n    "BROWSER_PLUGINS": "PDF Viewer, Chrome PDF Viewer, Chromium PDF Viewer, Microsoft Edge PDF Viewer, WebKit built-in PDF",\n    "BROWSER_JAVA_ENABLED": "false",\n    "BROWSER_LANGUAGE": "en-US",\n    "BROWSER_TZ": "Europe/Bucharest",\n    "BROWSER_TZ_OFFSET": "-120",\n    "IP_ADDRESS": "37.221.166.134"\n  }\n},\n"order": {\n  "ntpID": "",\n  "posSignature": "RAND-OM01-SIGN-TURE-3POS",\n  "dateTime": "2019-08-24T14:15:22Z",\n  "description": "Order Desc",\n  "orderID": "stringOrderID4694",\n  "amount": 200,\n  "currency": "RON",\n  "billing": {\n    "email": "user@example.com",\n    "phone": "string",\n    "firstName": "string",\n    "lastName": "string",\n    "city": "string",\n    "country": 0,\n    "state": "string",\n    "postalCode": "string",\n    "details": "string"\n  },\n  "shipping": {\n    "email": "user@example.com",\n    "phone": "string",\n    "firstName": "string",\n    "lastName": "string",\n    "city": "string",\n    "country": 0,\n    "state": "string",\n    "postalCode": "string",\n    "details": "string"\n  },\n  "products": [\n    {\n      "name": "string",\n      "code": "string",\n      "category": "string",\n      "price": 0,\n      "vat": 0\n    }\n  ],\n  "installments": {\n    "selected": 1,\n    "available": [\n      0\n    ]\n  },\n  "data": {\n    "property1": "string",\n    "property2": "string"\n  }\n}\n}\',\nCURLOPT_HTTPHEADER => array(\n  \'Authorization: YourApiKeyFromNETOPIA-PaymentsAdminPANEL--YourUNICHETOKEN\'\n),\n));\n\n$response = curl_exec($curl);\n\ncurl_close($curl);\necho $response;\n')),"  ")))))}f.isMDXComponent=!0}}]);