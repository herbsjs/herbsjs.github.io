(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[675],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14074:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={id:"contributing",title:"How to contribute",slug:"/introduction/contributing",custom_edit_url:null},u=void 0,l={unversionedId:"introduction/contributing",id:"introduction/contributing",isDocsHomePage:!1,title:"How to contribute",description:"Glad you are here! Pull requests, or feature requests, though not always implemented, are a great way to help make Herbs even better than it is now. If you're looking for something specific to help out with, there's a number of unit tests that aren't implemented yet, the library could never have too many of those.",source:"@site/docs/introduction/contributing.md",sourceDirName:"introduction",slug:"/introduction/contributing",permalink:"/docs/introduction/contributing",editUrl:null,version:"current",frontMatter:{id:"contributing",title:"How to contribute",slug:"/introduction/contributing",custom_edit_url:null},sidebar:"sidebar",previous:{title:"Ecosystem",permalink:"/docs/introduction/ecosystem"},next:{title:"1. New Project",permalink:"/docs/tutotial/new-project"}},c=[{value:"Resources",id:"resources",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Glad you are here! Pull requests, or feature requests, though not always implemented, are a great way to help make Herbs even better than it is now. If you're looking for something specific to help out with, there's a number of unit tests that aren't implemented yet, the library could never have too many of those. "),(0,i.kt)("p",null,"Considering that the ecosystem of herbs has numerous libraries, each one has its own specificity that you will find in this documentation in a more detailed way.\nHowever, If you want to submit a fix or feature, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs/blob/main/.github/CONTRIBUTING.md"},"CONTRIBUTING")," readme in the Github and go ahead and open a ticket."),(0,i.kt)("p",null,"By default ",(0,i.kt)("strong",{parentName:"p"},"Herbs organization")," uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format"},"Angular Commit Message Conventions"),"."),(0,i.kt)("p",null,"Tools such as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"commitizen")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/conventional-changelog/commitlint"},"commitlint")," can be used to help contributors and enforce valid commit messages."),(0,i.kt)("p",null,"To help with this task we have implemented the commitizen to all libraries, just follow those steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fork and clone the specific repository of any glue or lib of Herbs"),(0,i.kt)("li",{parentName:"ul"},"Create a new branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"git checkout -b my-branch-name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm install -g commitizen")),(0,i.kt)("li",{parentName:"ul"},"Write a lot of good code to contribute to herbs \ud83c\udf3f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git add yourChanges")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git cz")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run commit")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"npx cz")," instead ",(0,i.kt)("inlineCode",{parentName:"li"},"git commit")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git push")),(0,i.kt)("li",{parentName:"ul"},"Push to your fork and submit a pull request"),(0,i.kt)("li",{parentName:"ul"},"Pat your self on the back and wait for your pull request to be reviewed and merged.")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.guide/how-to-contribute/"},"How to Contribute to Open Source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/articles/about-pull-requests/"},"Using Pull Requests")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.github.com"},"GitHub Help"))))}p.isMDXComponent=!0}}]);