"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[8252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||s;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={id:"herbs2gql",title:"GraphQL - Herbs2GQL",sidebar_label:"GraphQL",slug:"/glues/herbs2gql"},o=void 0,l={unversionedId:"glues/herbs2gql",id:"glues/herbs2gql",title:"GraphQL - Herbs2GQL",description:"Creates GraphQL types (queries, mutations, etc.) based on herbs entities and usecases, based on Apollo GraphQL.",source:"@site/docs/glues/herbs2gql.md",sourceDirName:"glues",slug:"/glues/herbs2gql",permalink:"/docs/glues/herbs2gql",draft:!1,editUrl:"https://github.com/herbsjs/herbsjs.github.io/blob/master/docs/glues/herbs2gql.md",tags:[],version:"current",frontMatter:{id:"herbs2gql",title:"GraphQL - Herbs2GQL",sidebar_label:"GraphQL",slug:"/glues/herbs2gql"},sidebar:"sidebar",previous:{title:"Herbs Shelf",permalink:"/docs/glues/herbsshelf"},next:{title:"REST",permalink:"/docs/glues/herbs2rest"}},i={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Installing",id:"installing",level:3},{value:"Using",id:"using",level:3},{value:"Advanced Features",id:"advanced-features",level:2},{value:"GraphQL Type",id:"graphql-type",level:3},{value:"GraphQL Input",id:"graphql-input",level:3},{value:"GraphQL Query",id:"graphql-query",level:3},{value:"GraphQL Mutation",id:"graphql-mutation",level:3},{value:"GraphQL Subscription",id:"graphql-subscription",level:3},{value:"Custom Names or Conventions",id:"custom-names-or-conventions",level:3},{value:"Custom Names",id:"custom-names",level:4},{value:"Conventions",id:"conventions",level:4},{value:"Apollo Errors and Err",id:"apollo-errors-and-err",level:3},{value:"Example",id:"example",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creates GraphQL types (queries, mutations, etc.) based on herbs ",(0,a.kt)("a",{parentName:"p",href:"/docs/entity/getting-started"},"entities")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/getting-started"},"usecases"),", based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/"},"Apollo")," GraphQL."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"installing"},"Installing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @herbsjs/herbs2gql\n")),(0,a.kt)("h3",{id:"using"},"Using"),(0,a.kt)("p",null,"If your project uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbarium"},"Herbarium")," as discovery service you can generate mutations, queries and types with less code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { herbarium } = require('@herbsjs/herbarium')\nconst { herbs2gql } = require('@herbsjs/herbs2gql')\n\nconst { mutations, queries, types } = herbs2gql(herbarium)\n")),(0,a.kt)("h2",{id:"advanced-features"},"Advanced Features"),(0,a.kt)("p",null,"All methods returns a string in GraphQL format representing the type based (",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/api/apollo-server/#gql"},"gql"),") and a ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/apollo-server/data/resolvers/"},"resolver")," (when expected)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { entity, field, id } = require('@herbsjs/herbs')\nconst { entity2type } = require('@herbsjs/herbs2gql')\n\nconst user = entity('User', {\n    id: id(String),\n    name: field(String),\n    document: field(String),\n    age: field(Number),\n    active: field(Boolean),\n})\n\nconst gql = entity2type(user)\nconsole.log(gql)\n/* Result\ntype User {\n    id: String\n    name: String\n    document: String\n    age: Float\n    active: Boolean\n}\n*/\n")),(0,a.kt)("h3",{id:"graphql-type"},"GraphQL Type"),(0,a.kt)("p",null,"To convert a Herbs Entity to GraphQL Type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const entity = entity('User', {\n    id: id(String),\n    name: field(String),\n    document: field(String),\n    age: field(Number),\n    active: field(Boolean),\n})\n\nconst gql = entity2type(entity)\n")),(0,a.kt)("h3",{id:"graphql-input"},"GraphQL Input"),(0,a.kt)("p",null,"To convert a Herbs Entity to GraphQL Input:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const entity = entity('UserFilter', {    \n    name: field(String),    \n    age: field(Number),    \n})\n\nconst gql = entity2input(entity)\n")),(0,a.kt)("h3",{id:"graphql-query"},"GraphQL Query"),(0,a.kt)("p",null,"To convert a Herbs Use Case to GraphQL Query:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecase = usecase('Get User', {\n    request: {\n        id: Number,\n        document: String\n    },\n\n    response: User\n})\n\nconst resolverFunc = (parent, args, context, info) => { }\n\nconst [gql, resolver] = usecase2query(usecase, resolverFunc)\n")),(0,a.kt)("h3",{id:"graphql-mutation"},"GraphQL Mutation"),(0,a.kt)("p",null,"To convert a Herbs Use Case to GraphQL Mutation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecase = usecase('Update User', {\n    request: {\n        id: Number,\n        name: String,\n        age: Number,\n        active: Boolean\n    },\n\n    response: User\n})\n\nconst resolverFunc = (parent, args, context, info) => { }\n\nconst [gql, resolver] = usecase2mutation(usecase, resolverFunc)\n")),(0,a.kt)("h3",{id:"graphql-subscription"},"GraphQL Subscription"),(0,a.kt)("p",null,"To convert a Herbs Use Case to GraphQL Subscription:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecase = usecase('New User Notification', {\n    request: {\n        id: Number,        \n    },\n\n    response: UserMessage\n})\n\nconst resolverFunc = () => { }\n\nconst [gql, resolver] = usecase2subscription(usecase, resolverFunc)\n")),(0,a.kt)("h3",{id:"custom-names-or-conventions"},"Custom Names or Conventions"),(0,a.kt)("p",null,"In Herbs it is possible to include personalized names for queries, mutations, inputs and types\ncustom names are always prioritized"),(0,a.kt)("h4",{id:"custom-names"},"Custom Names"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = { inputName: 'An-Entity' }\n\n// for entity2input\nconst gql = entity2input(givenAnInput, options)\n\n// for entity2type\nconst gql = entity2type(givenAnEntity, options)\n\n//for mutation, query or subscription example using mutation\nconst [gql, resolver] = usecase2mutation(givenAUseCase, resolverFunc, options)\n")),(0,a.kt)("h4",{id:"conventions"},"Conventions"),(0,a.kt)("p",null,"At the convention, a function must be sent, it must return a text formatted according to the sended convention"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const options = { convention: { inputNameRule: (str) => `snake_case_returned` }}\n\n// for entity2input\nconst gql = entity2input(givenAnInput, options)\n\n// for entity2type\nconst gql = entity2type(givenAnEntity, options)\n\n//for mutation, query or subscription example using mutation\nconst [gql, resolver] = usecase2mutation(givenAUseCase, resolverFunc, options)\n")),(0,a.kt)("h3",{id:"apollo-errors-and-err"},"Apollo Errors and Err"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"herbs2gql")," deals with errors in the default resolver. It translates the usecase's errors into graphql errors:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Usecase Error"),(0,a.kt)("th",{parentName:"tr",align:null},"Apollo Error"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Permission Denied"),(0,a.kt)("td",{parentName:"tr",align:null},"ForbiddenError")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Found"),(0,a.kt)("td",{parentName:"tr",align:null},"ApolloError")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Already Exists"),(0,a.kt)("td",{parentName:"tr",align:null},"ApolloError")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,a.kt)("td",{parentName:"tr",align:null},"ApolloError")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid Arguments"),(0,a.kt)("td",{parentName:"tr",align:null},"UserInputError")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid Entity"),(0,a.kt)("td",{parentName:"tr",align:null},"UserInputError")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Any other kind of errors"),(0,a.kt)("td",{parentName:"tr",align:null},"UserInputError")))),(0,a.kt)("p",null,"However, it's behavior can be overridden in the ",(0,a.kt)("inlineCode",{parentName:"p"},"errorHandler")," property of the options parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { defaultResolver } = require("@herbsjs/herbs2gql")\n\nconst myCustomErrorHandler = (usecaseResponse) => {\n  // handle the errors on your own way\n}\n\nconst options = {\n  errorHandler: myCustomErrorHandler,\n}\n\nconst updateUser = usecase("Update User", {\n  // usecase implementation\n})\n\nconst [gql, resolver] = usecase2mutation(\n  updateUser(),\n  defaultResolver(updateUser, options)\n)\n')),(0,a.kt)("p",null,"Your custom error handler can also utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultErrorHandler")," as a fallback:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { defaultResolver, defaultErrorHandler } = require("@herbsjs/herbs2gql")\n\nconst myCustomErrorHandler = (usecaseResponse) => {\n  // handle the errors on your own way\n\n  // use the default error handler when there is no need of a specific treatment\n  return defaultErrorHandler(usecaseResponse)\n}\n\nconst options = {\n  errorHandler: myCustomErrorHandler,\n}\n\nconst updateUser = usecase("Update User", {\n  // usecase implementation\n})\n\nconst [gql, resolver] = usecase2mutation(\n  updateUser(),\n  defaultResolver(updateUser, options)\n)\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/usecase/result#known-errors"},"Known Errors\u200b")," are described in the documentation."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"Additionally you can view a simple demo application of this library in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/todolist-on-herbs"},"todolist-on-herbs"),"."))}c.isMDXComponent=!0}}]);