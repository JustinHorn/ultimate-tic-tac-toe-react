/*! For license information please see webworker.9a88780c.chunk.worker.js.LICENSE.txt */
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/ultimate-tic-tac-toe-react/",n(n.s=3)}([function(e,t,n){"use strict";e.exports=n(1)},function(e,t,n){"use strict";var r=n(2),o="function"===typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,v="function"===typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}function O(){}function S(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||b}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=w.prototype;var j=S.prototype=new O;j.constructor=S,r(j,w.prototype),j.isPureReactComponent=!0;var x={current:null},E=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,o={},i=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:x.current}}function k(e){return"object"===typeof e&&null!==e&&e.$$typeof===u}var P=/\/+/g,M=[];function R(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var c=!1;if(null===t)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case u:case i:c=!0}}if(c)return r(o,t,""===n?"."+T(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+T(a=t[l],l);c+=e(a,f,r,o)}else if(null===t||"object"!==typeof t?f=null:f="function"===typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"===typeof f)for(t=f.call(t),l=0;!(a=t.next()).done;)c+=e(a=a.value,f=n+T(a,l++),r,o);else if("object"===a)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,r,n,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function N(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(P,"$&/")+"/"),I(e,$,t=R(t,u,r,o)),A(t)}var F={current:null};function q(){var e=F.current;if(null===e)throw Error(m(321));return e}var L={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return N(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,D,t=R(null,null,t,n)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return N(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(m(143));return e}},t.Component=w,t.Fragment=a,t.Profiler=l,t.PureComponent=S,t.StrictMode=c,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error(m(267,e));var o=r({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=x.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)E.call(t,f)&&!C.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:a,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,a,c=i(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(c[f]=n[f]);if(r){a=r(n);for(var s=0;s<a.length;s++)u.call(n,a[s])&&(c[a[s]]=n[a[s]])}}return c}},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e,t,n){return(l=c()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function f(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,"exports",(function(){return $}));var s=Symbol("Comlink.proxy"),p=Symbol("Comlink.endpoint"),d=Symbol("Comlink.releaseProxy"),y=Symbol("Comlink.thrown"),h=function(e){return"object"===typeof e&&null!==e||"function"===typeof e},v=new Map([["proxy",{canHandle:function(e){return h(e)&&e[s]},serialize:function(e){var t=new MessageChannel,n=t.port1,r=t.port2;return m(e,n),[r,[r]]},deserialize:function(e){return e.start(),function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=!1,i=new Proxy(r,{get:function(r,u){if(g(o),u===d)return function(){return C(t,{type:5,path:n.map((function(e){return e.toString()}))}).then((function(){b(t),o=!0}))};if("then"===u){if(0===n.length)return{then:function(){return i}};var a=C(t,{type:0,path:n.map((function(e){return e.toString()}))}).then(E);return a.then.bind(a)}return e(t,[].concat(f(n),[u]))},set:function(e,r,i){g(o);var a=u(x(i),2),c=a[0],l=a[1];return C(t,{type:1,path:[].concat(f(n),[r]).map((function(e){return e.toString()})),value:c},l).then(E)},apply:function(r,i,a){g(o);var c=n[n.length-1];if(c===p)return C(t,{type:4}).then(E);if("bind"===c)return e(t,n.slice(0,-1));var l=u(w(a),2),f=l[0],s=l[1];return C(t,{type:2,path:n.map((function(e){return e.toString()})),argumentList:f},s).then(E)},construct:function(e,r){g(o);var i=u(w(r),2),a=i[0],c=i[1];return C(t,{type:3,path:n.map((function(e){return e.toString()})),argumentList:a},c).then(E)}});return i}(e,[],t);var t}}],["throw",{canHandle:function(e){return h(e)&&y in e},serialize:function(e){var t=e.value;return[t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[]]},deserialize:function(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:self;t.addEventListener("message",(function n(r){if(r&&r.data){var o,a=Object.assign({path:[]},r.data),c=a.id,s=a.type,p=a.path,d=(r.data.argumentList||[]).map(E);try{var h=p.slice(0,-1).reduce((function(e,t){return e[t]}),e),v=p.reduce((function(e,t){return e[t]}),e);switch(s){case 0:o=v;break;case 1:h[p.slice(-1)[0]]=E(r.data.value),o=!0;break;case 2:o=v.apply(h,d);break;case 3:var g;o=j(l(v,f(d)));break;case 4:var w=new MessageChannel,O=w.port1,C=w.port2;m(e,C),o=S(O,[O]);break;case 5:o=void 0}}catch(g){o=i({value:g},y,0)}Promise.resolve(o).catch((function(e){return i({value:e},y,0)})).then((function(e){var r=u(x(e),2),o=r[0],i=r[1];t.postMessage(Object.assign(Object.assign({},o),{id:c}),i),5===s&&(t.removeEventListener("message",n),b(t))}))}})),t.start&&t.start()}function b(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function g(e){if(e)throw new Error("Proxy has been released and is not useable")}function w(e){var t,n=e.map(x);return[n.map((function(e){return e[0]})),(t=n.map((function(e){return e[1]})),Array.prototype.concat.apply([],t))]}var O=new WeakMap;function S(e,t){return O.set(e,t),e}function j(e){return Object.assign(e,i({},s,!0))}function x(e){var t,n=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=o(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,u,i=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,u=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw u}}}}(v);try{for(n.s();!(t=n.n()).done;){var r=u(t.value,2),i=r[0],a=r[1];if(a.canHandle(e)){var c=u(a.serialize(e),2);return[{type:3,name:i,value:c[0]},c[1]]}}}catch(l){n.e(l)}finally{n.f()}return[{type:0,value:e},O.get(e)||[]]}function E(e){switch(e.type){case 3:return v.get(e.name).deserialize(e.value);case 0:return e.value}}function C(e,t,n){return new Promise((function(r){var o=new Array(4).fill(0).map((function(){return Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)})).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),e}n(0);var M=function(){function e(){_(this,e)}return P(e,null,[{key:"getMoves",value:function(t){var n=[];return t.localWinners.forEach((function(r,o){null===r&&t.activeFields[o]&&t.squares[o].forEach((function(t,r){null===t&&n.push(e.getMove(r,o))}))})),n}},{key:"getNextData",value:function(t,n){if(void 0===t.xIsNext)throw Error("Data xIsNext is undefined");var r=t.squares.map((function(e){return e.slice()}));if(!n||r[n.outer_idx][n.inner_idx])throw console.log("hello"),Error("field already taken");if(!t.activeFields[n.outer_idx])throw Error("field inactive");r[n.outer_idx][n.inner_idx]=t.xIsNext?"X":"O";var o=r.map((function(t){return e.calc3x3(t)})),u=e.calc3x3(o),i=t.activeFields.slice();return o[n.inner_idx]?o.forEach((function(e,t){return i[t]=!e})):i=i.map((function(e,t){return t===n.inner_idx})),u&&(i=Array(9).fill(!1)),{winner:u,squares:r,localWinners:o,activeFields:i,xIsNext:!t.xIsNext}}},{key:"dataIsOver",value:function(t){return 0===e.getMoves(t).length}},{key:"propagate",value:function(t){var n=t.data;if(t.hasChildren())throw Error("Tree shouldn't have children");for(var r=e.calc3x3(n.localWinners);!e.dataIsOver(n);)r=(n=e.getNextData(n,T(n))).winner;return r?r===(t.data.xIsNext?"O":"X")?R.VICTORY:R.DEFEAT:R.DRAW}}]),e}();M.getMove=function(e,t){return{inner_idx:e,outer_idx:t}},M.calc3x3=function(e){for(var t=["XXX","OOO"],n=[(e=e.map((function(e){return e||" "})))[0]+e[1]+e[2],e[3]+e[4]+e[5],e[6]+e[7]+e[8],e[0]+e[3]+e[6],e[1]+e[4]+e[7],e[2]+e[5]+e[8],e[0]+e[4]+e[8],e[2]+e[4]+e[6]],r=0;r<n.length;r++)if(n[r]===t[0]||n[r]===t[1])return n[r].charAt(0);return null},M.calcWinner=function(e){return M.calc3x3(e.map((function(e){return M.calc3x3(e)})))};var R={VICTORY:1,DEFEAT:-1,DRAW:0};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=function(){function e(t,n,r,o){var u=this;if(_(this,e),this.nodes=[],this.data={},this.parent=void 0,this.move=void 0,this.score=0,this.simulationCount=0,this.initTime=void 0,this.hasChildren=function(){return u.nodes.length>0},this.getBestNode=function(){return u.sortTime=Date.now(),u.nodes.sort(u.compareNodes)[u.nodes.length-1]},this.compareNodes=function(e,t){return e.getScore(u.sortTime)-t.getScore(u.sortTime)},this.getScore=function(e){return 0===u.simulationCount?.5*Math.log10(Math.sqrt(e+1-u.initTime)):u.score/u.simulationCount+.5*Math.log10(Math.sqrt(e+1-u.initTime)/u.simulationCount)},this.makeChildren=function(){if(u.hasChildren())throw Error("makeChildren even due has children");var t=M.getMoves(u.data),n=Date.now();t.forEach((function(t){var r=M.getNextData(u.data,t);u.nodes.push(new e(r,u,t,n))}))},this.getRandomChild=function(){return(e=u.nodes)[Math.floor(Math.random()*e.length)];var e},this.update=function(e){u.simulationCount++,e===R.VICTORY?(u.score++,u.parent&&u.parent.update(R.DEFEAT)):e===R.DEFEAT?(u.score>0&&u.score--,u.parent&&u.parent.update(R.VICTORY)):u.parent&&u.parent.update(R.DRAW)},this.isOver=function(){return 0===M.getMoves(u.data).length},this.getMostUsed=function(){return u.nodes.sort(u.highestSimulationCount)[u.nodes.length-1]},!("xIsNext"in t)||!("squares"in t)||!("localWinners"in t))throw Error("Tree data incomplete +"+t);this.data=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t),this.parent=n,this.move=r,this.initTime=o}return P(e,[{key:"highestSimulationCount",value:function(e,t){return e.simulationCount-t.simulationCount}}]),e}();function T(e){var t,n=M.getMoves(e);return(t=n)[Math.floor(Math.random()*t.length)]}function D(e){for(;e.hasChildren();)e=e.getBestNode();e.isOver()||(e.makeChildren(),e=e.getRandomChild());var t=M.propagate(e);e.update(t)}var $={getRandomMove:T,getMonteCarloMove:function(e,t){var n=new I(e,null,null,Date.now());return function(e,t){var n=Date.now(),r=0;for(;Date.now()-n<t;)D(e),r++;console.log("Simulations: "+r)}(n,t),n.getMostUsed().move}};m($)}]);
//# sourceMappingURL=webworker.9a88780c.chunk.worker.js.map