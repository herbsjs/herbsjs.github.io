"use strict";(self.webpackChunkherbjs_website=self.webpackChunkherbjs_website||[]).push([[1602],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26622:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],s={id:"result",title:"Result",sidebar_label:"Result",slug:"/usecase/result"},i=void 0,u={unversionedId:"usecase/result",id:"usecase/result",title:"Result",description:"The result instances indicate whether the execution of a function was successful or not. Ok(value) representing success and containing a value, and Err(error), representing error and containing an error value.",source:"@site/docs/usecase/result.md",sourceDirName:"usecase",slug:"/usecase/result",permalink:"/docs/usecase/result",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/usecase/result.md",tags:[],version:"current",frontMatter:{id:"result",title:"Result",sidebar_label:"Result",slug:"/usecase/result"},sidebar:"sidebar",previous:{title:"Steps",permalink:"/docs/usecase/steps"},next:{title:"Getting Started",permalink:"/docs/entity/getting-started"}},p=[{value:"Ok",id:"ok",children:[],level:2},{value:"Err",id:"err",children:[{value:"Generic Errors",id:"generic-errors",children:[],level:3},{value:"Known Errors",id:"known-errors",children:[],level:3}],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The result instances indicate whether the execution of a function was successful or not. ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)")," representing success and containing a ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Err(error)"),", representing error and containing an ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," value."),(0,l.kt)("p",null,"For exemple:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createList = usecase('Create List', {\n\n    'Check if the List is valid': step(ctx => {\n        ...\n        if (!list.isValid()) return Err(list.errors)\n        return Ok()\n    }),\n")),(0,l.kt)("p",null,"To consume the information:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"/* Execution */\nconst request = { ... }\nconst response = await createList.run(request)\n\n/* Response */\nif (response.isErr)\n    throw new ResponseError(null, { invalidArgs: response.err }) \n    // Or any other behavior for error response\n    \nreturn response.ok // response.ok has the returned value\n")),(0,l.kt)("p",null,"Results are an important run-time metadata to inform glues about the execution of a use case."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Common Result Methods")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result.isOk"),": returns if the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result.isErr"),": returns if the result is ",(0,l.kt)("inlineCode",{parentName:"p"},"Err"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result.toString()"),": returns the string representation of the result."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result.toJSON()"),": returns the JSON representation of the result."),(0,l.kt)("h2",{id:"ok"},"Ok"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Ok(value)"),", where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"value"),": success value.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"return: ",(0,l.kt)("inlineCode",{parentName:"p"},"Ok")," instance."))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result.ok"),": returns the success value."),(0,l.kt)("h2",{id:"err"},"Err"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Err(error)"),", where:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"error"),": error value.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"return: ",(0,l.kt)("inlineCode",{parentName:"p"},"Err")," instance."))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"result.err"),": returns the error value."),(0,l.kt)("h3",{id:"generic-errors"},"Generic Errors"),(0,l.kt)("p",null,"A generic error is a simple object that signals that an error or alternative path has occurred. Because it doesn't carry extra metadata with it, the consuming layers can check the result as an error but not what it means."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"usecase.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createProduct = injection =>\n    usecase('Create Product', {\n        'Check if the Product is valid': step(ctx => {\n            ...\n            if (!isValid) return Err('My message or my object')\n        }),\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"consumer.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const result = usecase.run()\nconsole.log(result.isErr) // true\nconsole.log(result.err) // 'My message or my object'\n")),(0,l.kt)("h3",{id:"known-errors"},"Known Errors"),(0,l.kt)("p",null,"For the result of a use case to be even richer in metadata, there are ",(0,l.kt)("strong",{parentName:"p"},"known errors"),". These errors carry extra metadata that helps the consumer layers make better decisions."),(0,l.kt)("p",null,"Ex:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"usecase.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const createProduct = injection =>\n    usecase('Create Product', {\n        'Check if the Product is valid': step(ctx => {\n            ...\n            if (!isValid) {\n                const options = { message: `Product ID ${id} not found`, payload: { entity: 'product' } }\n                return Err.notFound(options) // return an Err with \"not found\" code\n            }\n        }),\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"consumer.js")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const result = usecase.run()\nconsole.log(result.isErr) // true\nconsole.log(result.isNotFoundError) // true\nconsole.log(result.err) // {\n                //     payload: { entity: 'product' },\n                //     code: 'NOT_FOUND',\n                //     message: `Product ID ${id} not found`\n                //   }\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Known Error List")),(0,l.kt)("p",null,"This is the list with all ",(0,l.kt)("strong",{parentName:"p"},"known errors")," and the expected behavior for the consumer layer:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Result"),(0,l.kt)("th",{parentName:"tr",align:null},"Check"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP / REST"),(0,l.kt)("th",{parentName:"tr",align:null},"GraphQL (Apollo)"),(0,l.kt)("th",{parentName:"tr",align:null},"gRPC"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ok()"),(0,l.kt)("td",{parentName:"tr",align:null},"ret.isOk"),(0,l.kt)("td",{parentName:"tr",align:null},"200 - Ok"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Err.invalidArguments(options, args)"),(0,l.kt)("td",{parentName:"tr",align:null},"ret.isInvalidArgumentsError"),(0,l.kt)("td",{parentName:"tr",align:null},"400 - Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},"BAD_USER_INPUT"),(0,l.kt)("td",{parentName:"tr",align:null},"INVALID_ARGUMENT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Err.permissionDenied(options)"),(0,l.kt)("td",{parentName:"tr",align:null},"ret.isPermissionDeniedError"),(0,l.kt)("td",{parentName:"tr",align:null},"403 - Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},"FORBIDDEN"),(0,l.kt)("td",{parentName:"tr",align:null},"PERMISSION_DENIED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Err.notFound(options)"),(0,l.kt)("td",{parentName:"tr",align:null},"ret.isNotFoundError"),(0,l.kt)("td",{parentName:"tr",align:null},"404 - Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},"NOT_FOUND (Custom)"),(0,l.kt)("td",{parentName:"tr",align:null},"NOT_FOUND")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Err.alreadyExists(options)"),(0,l.kt)("td",{parentName:"tr",align:null},"ret.isAlreadyExistsError"),(0,l.kt)("td",{parentName:"tr",align:null},"409 - Conflict"),(0,l.kt)("td",{parentName:"tr",align:null},"ALREADY_EXISTS (Custom)"),(0,l.kt)("td",{parentName:"tr",align:null},"ALREADY_EXISTS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Err.invalidEntity(options)"),(0,l.kt)("td",{parentName:"tr",align:null},"ret.isInvalidEntityError"),(0,l.kt)("td",{parentName:"tr",align:null},"422 - Unprocessable Entity"),(0,l.kt)("td",{parentName:"tr",align:null},"BAD_USER_INPUT"),(0,l.kt)("td",{parentName:"tr",align:null},"INVALID_ARGUMENT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Err.unknown(options)"),(0,l.kt)("td",{parentName:"tr",align:null},"ret.isUnknownError"),(0,l.kt)("td",{parentName:"tr",align:null},"500 - Internal Server Error"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN (Custom)"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN / INTERNAL")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"options")," paramethers are:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"message"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," - Optional. Free message text, preferably explaining the error in a short way."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"payload"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," - Optional. Any object that helps give more context to the error for the consuming layers."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cause"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Object")," - Optional. An Err or Exception that gives context about the cause of the error."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Custom error")),(0,l.kt)("p",null,"If the current list of known error doesn't cover your scenarios, you can build your own custom error. "),(0,l.kt)("p",null,"Ex:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"//Err.buildCustomErr(code, message, payload, cause, caller)\nconst err = Err.buildCustomErr('PRODUCT_ERR', 'message', { entity: 'product' }, Err(), 'Product')\nerr.isProductError // true\nerr.err //{\n        //     payload: { entity: 'product' },\n        //     cause: Err(),\n        //     code: 'PRODUCT_ERR',\n        //     message: 'message'\n        // })\n")))}d.isMDXComponent=!0}}]);