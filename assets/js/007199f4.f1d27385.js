"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[3231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(r),f=s,b=h["".concat(i,".").concat(f)]||h[f]||p[f]||o;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},60611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const o={id:"herbsshelf",title:"8. Herbs Shelf \ud83d\udea7",sidebar_label:"8. Herbs Shelf \ud83d\udea7",slug:"/tutorial/herbsshelf"},a=void 0,l={unversionedId:"tutorial/herbsshelf",id:"tutorial/herbsshelf",title:"8. Herbs Shelf \ud83d\udea7",description:"Introduction to Herbs Shelf",source:"@site/docs/tutorial/herbsself.md",sourceDirName:"tutorial",slug:"/tutorial/herbsshelf",permalink:"/docs/tutorial/herbsshelf",draft:!1,editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/tutorial/herbsself.md",tags:[],version:"current",frontMatter:{id:"herbsshelf",title:"8. Herbs Shelf \ud83d\udea7",sidebar_label:"8. Herbs Shelf \ud83d\udea7",slug:"/tutorial/herbsshelf"}},i={},u=[{value:"Introduction to Herbs Shelf",id:"introduction-to-herbs-shelf",level:2},{value:"Herbs Shelf Setup",id:"herbs-shelf-setup",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"introduction-to-herbs-shelf"},"Introduction to Herbs Shelf"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Herbs Shelf is a self-generated documentation based on your use cases and entities from your domain."),(0,s.kt)("p",{parentName:"blockquote"},"\u2014 ",(0,s.kt)("a",{parentName:"p",href:"/docs/glues/herbsshelf"},"Herbs Shelf | HerbsJS"))),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(57935).Z,width:"1884",height:"912"})),(0,s.kt)("h2",{id:"herbs-shelf-setup"},"Herbs Shelf Setup"),(0,s.kt)("p",null,"To setup the automatic documentation, we need a list with all use cases to be included in the documentation. With CLI, it is in ",(0,s.kt)("inlineCode",{parentName:"p"},"src/domain/usecases/index.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// src/domain/usecases/index.js\nmodule.exports = [\n    // the tags are to store metadata, such as the group and type of the use case\n    { usecase: require('./user/createUser'), tags: { group: 'Users', type: 'mutation'} },\n    { usecase: require('./user/updateUser'), tags: { group: 'Users', type: 'mutation'} },\n    { usecase: require('./user/deleteUser'), tags: { group: 'Users', type: 'mutation'} },\n    { usecase: require('./user/findOneUser'), tags: { group: 'Users', type: 'query'} }\n]\n")),(0,s.kt)("p",null,"Once you have this file, you can use it with ",(0,s.kt)("inlineCode",{parentName:"p"},"@herbsjs/herbsshelf")," to get the HTML content and do what you want with it."),(0,s.kt)("p",null,"In this case, a route called ",(0,s.kt)("inlineCode",{parentName:"p"},"/herbsshelf")," is set in the server to provide this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// src/infra/api/rest/index.js\nconst renderShelfHTML = require('@herbsjs/herbsshelf')\n\n// Get that use cases list.\nconst usecases = require('../../../domain/usecases')\n\n// Set up the route to serve the rendered HTML\napp.get('/herbsshelf', (req, res) => {\n    res.setHeader('Content-Type', 'text/html')\n\n    const content = renderShelfHTML(usecases)\n    res.write(content)\n    res.end()\n})\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/glues/herbsshelf"},"Herbs Shelf"),".")))}p.isMDXComponent=!0},57935:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/herbsshelf_screenshot-90335a4cc0edecbe93eccb187e346f2c.gif"}}]);