"use strict";(self.webpackChunkrecurring_app=self.webpackChunkrecurring_app||[]).push([[1],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2490:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],p={sidebar_position:3},c="Start response example",i={unversionedId:"start/start-ex-response",id:"start/start-ex-response",title:"Start response example",description:"Example of start payment response",source:"@site/docs/start/start-ex-response.md",sourceDirName:"start",slug:"/start/start-ex-response",permalink:"/ntp-payment-api-doc/docs/start/start-ex-response",editUrl:"https://github.com/navid59/ntp-payment-api-doc/docs/start/start-ex-response.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Start payment request example",permalink:"/ntp-payment-api-doc/docs/start/start-payment-ex"},next:{title:"Errors & Statuses",permalink:"/ntp-payment-api-doc/docs/start/start-Error"}},u=[{value:"Example of start payment response",id:"example-of-start-payment-response",children:[{value:"Success ex.",id:"success-ex",children:[],level:3},{value:"Error ex.",id:"error-ex",children:[],level:3}],level:2}],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"start-response-example"},"Start response example"),(0,a.kt)("h2",{id:"example-of-start-payment-response"},"Example of start payment response"),(0,a.kt)("h3",{id:"success-ex"},"Success ex."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "customerAction": {},\n  "error": {\n    "code": "00",\n    "message": "Approved"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "data": {\n      "AuthCode": "24od",\n      "BIN": "990000",\n      "ISSUER": "Netopia GB",\n      "ISSUER_COUNTRY": "642",\n      "RRN": "hYnY8zpdcNo-"\n    },\n    "ntpID": "1309088",\n    "status": 3,\n    "token": "MjMyMjqqdx3XTbYC78OoidTk6DTtEvHcrqcz91Pr4PQqXf/u33xoDkdgIlkq226avk1ik8fvLElkbLopnvNbIs8+Ve6L"\n  }\n}\n')),(0,a.kt)("p",null,"or for ",(0,a.kt)("strong",{parentName:"p"},"3DS Card")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "customerAction": {\n    "authenticationToken": "iNPqJWDRoRXsd77StNELrvBiGr_ihsLdvikrsTiYqprMh9ViBO-lq_i38YsmxT-JTZPqf04uS4dBhCAQjNSxcAyZcVAcGhCH3r7knN-KePOzno16psy5O_OvzfRlbuvkrBtrpjcXyzcTi--M6uM-X1C7aBzVgPa1",\n    "formData": {\n      "backUrl": "http://yourdomain.com/example/backUrl.php",\n      "paReq": "AT5ewtLVDsEgB5lcRjeEoSMF6RZ4A3sPWhsU3IiSy8X0XdrQ49D7b-oUMYnwslzZ436FCQv6aB4m7Sn1QNqYzZU="\n    },\n    "type": "Authentication3D",\n    "url": "https://secure.sandbox.netopia-payments.com/sandbox/authorize"\n  },\n  "error": {\n    "code": "100",\n    "message": "Approved"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "ntpID": "1310396",\n    "status": 15\n  }\n}\n')),(0,a.kt)("h3",{id:"error-ex"},"Error ex."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "customerAction": {},\n  "error": {\n    "code": "56",\n    "message": "Order closed"\n  },\n  "payment": {\n    "amount": 200,\n    "currency": "RON",\n    "ntpID": "1309088",\n    "status": 5\n  }\n}\n')))}m.isMDXComponent=!0}}]);