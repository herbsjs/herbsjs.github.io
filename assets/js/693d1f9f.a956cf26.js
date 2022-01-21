"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[2322],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(r),h=s,d=f["".concat(o,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65359:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"herbsshelf",title:"Herbs Shelf",sidebar_label:"Herbs Shelf",slug:"/glues/herbsshelf"},o=void 0,u={unversionedId:"glues/herbsshelf",id:"glues/herbsshelf",title:"Herbs Shelf",description:"Herbs Shelf is a self-generated documentation based on use cases and entities from your domain.",source:"@site/docs/glues/herbsshelf.md",sourceDirName:"glues",slug:"/glues/herbsshelf",permalink:"/docs/glues/herbsshelf",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/herbsshelf.md",tags:[],version:"current",frontMatter:{id:"herbsshelf",title:"Herbs Shelf",sidebar_label:"Herbs Shelf",slug:"/glues/herbsshelf"},sidebar:"sidebar",previous:{title:"Herbs2knex",permalink:"/docs/glues/Herbs2knex"},next:{title:"Herbs2rpl",permalink:"/docs/glues/herbs2rpl"}},c=[{value:"Installing",id:"installing",children:[],level:3},{value:"Using",id:"using",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],p={toc:c};function f(e){var t=e.components,i=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Herbs Shelf is a self-generated documentation based on ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/getting-started"},"use cases")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/entity/getting-started"},"entities")," from your domain."),(0,a.kt)("p",null,"It is a great way to communicate and collaborate between domain experts and developers. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Glues",src:r(24382).Z})),(0,a.kt)("h3",{id:"installing"},"Installing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  npm install @herbsjs/herbsshelf\n")),(0,a.kt)("h3",{id:"using"},"Using"),(0,a.kt)("p",null,"To use Herbs Shelf, all you have to do is to inform a list of use cases and it will return a string containing the HTML with the generated documentation."),(0,a.kt)("p",null,"The quickest way to use Herbs Shelf is to create a rest route in your api and expose the documentation generated by the shelf."),(0,a.kt)("p",null,"Consider a file called _uclist.js with this inside"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = (injection) => {\n    return [\n        { usecase: require('./myUseCaseFile').myUseCaseName(injection), tags: { group: 'GroupOne' } },\n        { usecase: require('./myUseCase2File').myUseCase2Name(injection), tags: { group: 'GroupOne' } },\n        { usecase: require('./myUseCase3File').myUseCase3Name(injection), tags: { group: 'GroupTwo' } },\n    ]\n}\n")),(0,a.kt)("p",null,"In your app or server file, import the shelf dependecy and the list of use cases"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecases = require('../../domain/usecases/_uclist')\nconst renderShelfHTML = require('@herbsjs/herbsshelf')\n")),(0,a.kt)("p",null,"And call the shelf into you prefered rest route"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," this.app.get('/herbsshelf', (req, res, next) => {\n      res.setHeader('Content-Type', 'text/html')\n      const shelf = renderShelfHTML(usecases())\n      res.write(shelf)\n      res.end()\n }\n\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"You can see Herbs Shelf in action in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/todolist-on-herbs"},"To Do List On Herbs")," project."))}f.isMDXComponent=!0},24382:function(e,t,r){t.Z=r.p+"assets/images/herbsshelf_screenshot-90335a4cc0edecbe93eccb187e346f2c.gif"}}]);