"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[471],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(b,s(s({ref:t},l),{},{components:r})):o.createElement(b,s({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<n;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3234:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const n={id:"repositories",title:"6. Repositories",sidebar_label:"6. Repositories",slug:"/tutorial/repositories"},s=void 0,a={unversionedId:"tutorial/repositories",id:"tutorial/repositories",title:"6. Repositories",description:"Introduction to the repository concept",source:"@site/docs/tutorial/repositories.md",sourceDirName:"tutorial",slug:"/tutorial/repositories",permalink:"/docs/tutorial/repositories",draft:!1,editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/tutorial/repositories.md",tags:[],version:"current",frontMatter:{id:"repositories",title:"6. Repositories",sidebar_label:"6. Repositories",slug:"/tutorial/repositories"},sidebar:"sidebar",previous:{title:"5. Specs",permalink:"/docs/tutorial/specs"},next:{title:"7. Migrations",permalink:"/docs/tutorial/migrations"}},p={},c=[{value:"Introduction to the repository concept",id:"introduction-to-the-repository-concept",level:2},{value:"itemRepository.js",id:"itemrepositoryjs",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction-to-the-repository-concept"},"Introduction to the repository concept"),(0,i.kt)("p",null,"A repository is a design pattern intended to decouple database code from your business logic."),(0,i.kt)("p",null,"This pattern bring some important benefits. First, makes your code easier to read and maintain, because database code is not spread throughout application. Second, the code becomes significantly easier to unit test. Its be easily mock repositories while testing your business logic instead of having to set up databases, tables and seeding them with data. And third, the business logic does not depend strongly on a specific database platform."),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"herbs update")," run, its automatic create inside ",(0,i.kt)("inlineCode",{parentName:"p"},"src/infra/data/database/repositories")," a repository file for each entity we previous created."),(0,i.kt)("p",null,"These repositories files abstract ",(0,i.kt)("inlineCode",{parentName:"p"},"knex.js")," to make queries in database and any class created in these files will be exported for ",(0,i.kt)("inlineCode",{parentName:"p"},"herbarium.repositories"),", so we will can access theses repositories inside any place in our application importing ",(0,i.kt)("inlineCode",{parentName:"p"},"herbarium"),"."),(0,i.kt)("h2",{id:"itemrepositoryjs"},"itemRepository.js"),(0,i.kt)("p",null,"A repository file it should be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// src/infra/data/database/repositories/itemRepository.js\n\nconst { Repository } = require(\"@herbsjs/herbs2knex\")\nconst { herbarium } = require('@herbsjs/herbarium')\nconst Item = require('../../../domain/entities/item')\nconst connection = require('../database/connection')\n\nclass ItemRepository extends Repository {\n    constructor(injection) {\n        super({\n            entity: Item,\n            table: \"items\",\n            knex: connection\n        })\n    }\n}\n\nmodule.exports =\n    herbarium.repositories\n        .add(ItemRepository, 'ItemRepository')\n        .metadata({ entity: Item })\n        .repository\n")))}u.isMDXComponent=!0}}]);