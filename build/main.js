(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),i=r(6330),u=n.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),i=n.String,u=n.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),u=function(t){return function(e,r,u){var a,c=n(e),s=i(c),l=o(u,s);if(t&&r!=r){for(;s>l;)if((a=c[l++])!=a)return!0}else for(;s>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){return 1},1)}))}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),i=r(614),u=r(4326),a=r(5112)("toStringTag"),c=n.Object,s="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=c(t),a))?r:s?u(e):"Object"==(n=u(e))&&i(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),u=r(3070);t.exports=function(t,e,r){for(var a=o(e),c=u.f,s=i.f,l=0;l<a.length;l++){var f=a[l];n(t,f)||r&&n(r,f)||c(t,f,s(e,f))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),u=r(8113),a=i.process,c=i.Deno,s=a&&a.versions||c&&c.version,l=s&&s.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),u=r(1320),a=r(3505),c=r(9920),s=r(4705);t.exports=function(t,e){var r,l,f,p,v,b=t.target,y=t.global,h=t.stat;if(r=y?n:h?n[b]||a(b,{}):(n[b]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(v=o(r,l))&&v.value:r[l],!s(y?l:b+(h?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&i(p,"sham",!0),u(r,l,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},4374:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:(t,e,r)=>{var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,u=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,s=a&&(!n||n&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:s}},1702:(t,e,r)=>{var n=r(4374),o=Function.prototype,i=o.bind,u=o.call,a=n&&i.bind(u,u);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),i=r(7293),u=r(4326),a=n.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?c(t,""):a(t)}:a},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),u=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,u=r(8536),a=r(7854),c=r(1702),s=r(111),l=r(8880),f=r(2597),p=r(5465),v=r(6200),b=r(3501),y="Object already initialized",h=a.TypeError,d=a.WeakMap;if(u||p.state){var g=p.state||(p.state=new d),m=c(g.get),x=c(g.has),O=c(g.set);n=function(t,e){if(x(g,t))throw new h(y);return e.facade=t,O(g,t,e),e},o=function(t){return m(g,t)||{}},i=function(t){return x(g,t)}}else{var w=v("state");b[w]=!0,n=function(t,e){if(f(t,w))throw new h(y);return e.facade=t,l(t,w,e),e},o=function(t){return f(t,w)?t[w]:{}},i=function(t){return f(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw h("Incompatible receiver, "+t+" required");return r}}}},614:t=>{t.exports=function(t){return"function"==typeof t}},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,u=function(t,e){var r=c[a(t)];return r==l||r!=s&&(o(e)?n(e):!!e)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},s=u.NATIVE="N",l=u.POLYFILL="P";t.exports=u},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),i=r(614),u=r(7976),a=r(3307),c=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&u(e.prototype,c(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),u=n.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},2814:(t,e,r)=>{var n=r(7854),o=r(7293),i=r(1702),u=r(1340),a=r(3111).trim,c=r(1361),s=i("".charAt),l=n.parseFloat,f=n.Symbol,p=f&&f.iterator,v=1/l(c+"-0")!=-1/0||p&&!o((function(){l(Object(p))}));t.exports=v?function(t){var e=a(u(t)),r=l(e);return 0===r&&"-"==s(e,0)?-0:r}:l},3070:(t,e,r)=>{var n=r(7854),o=r(9781),i=r(4664),u=r(3353),a=r(9670),c=r(4948),s=n.TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor;e.f=o?u?function(t,e,r){if(a(t),e=c(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=f(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return l(t,e,r)}:l:function(t,e,r){if(a(t),e=c(e),a(r),i)try{return l(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),u=r(9114),a=r(5656),c=r(4948),s=r(2597),l=r(4664),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=a(t),e=c(e),l)try{return f(t,e)}catch(t){}if(s(t,e))return u(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),u=r(1318).indexOf,a=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,l=[];for(r in n)!o(a,r)&&o(n,r)&&c(l,r);for(;e.length>s;)o(n,r=e[s++])&&(~u(l,r)||c(l,r));return l}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},2140:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(614),u=r(111),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!u(n=o(r,t)))return n;if(i(r=t.valueOf)&&!u(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!u(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),u=r(5181),a=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=u.f;return r?c(e,r(t)):e}},1320:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2597),u=r(8880),a=r(3505),c=r(2788),s=r(9909),l=r(6530).CONFIGURABLE,f=s.get,p=s.enforce,v=String(String).split("String");(t.exports=function(t,e,r,c){var s,f=!!c&&!!c.unsafe,b=!!c&&!!c.enumerable,y=!!c&&!!c.noTargetGet,h=c&&void 0!==c.name?c.name:e;o(r)&&("Symbol("===String(h).slice(0,7)&&(h="["+String(h).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||l&&r.name!==h)&&u(r,"name",h),(s=p(r)).source||(s.source=v.join("string"==typeof h?h:""))),t!==n?(f?!y&&t[e]&&(b=!0):delete t[e],b?t[e]=r:u(t,e,r)):b?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||c(this)}))},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},3111:(t,e,r)=>{var n=r(1702),o=r(4488),i=r(1340),u=r(1361),a=n("".replace),c="["+u+"]",s=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t){return function(e){var r=i(o(e));return 1&t&&(r=a(r,s,"")),2&t&&(r=a(r,l,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(111),u=r(2190),a=r(8173),c=r(2140),s=r(5112),l=n.TypeError,f=s("toPrimitive");t.exports=function(t,e){if(!i(t)||u(t))return t;var r,n=a(t,f);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||u(r))return r;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),u=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(t,e,r)=>{var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),u=r(9711),a=r(133),c=r(3307),s=o("wks"),l=n.Symbol,f=l&&l.for,p=c?l:l&&l.withoutSetter||u;t.exports=function(t){if(!i(s,t)||!a&&"string"!=typeof s[t]){var e="Symbol."+t;a&&i(l,t)?s[t]=l[t]:s[t]=c&&f?f(e):p(e)}return s[t]}},1361:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},2772:(t,e,r)=>{"use strict";var n=r(2109),o=r(1702),i=r(1318).indexOf,u=r(9341),a=o([].indexOf),c=!!a&&1/a([1],1,-0)<0,s=u("indexOf");n({target:"Array",proto:!0,forced:c||!s},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return c?a(this,t,e)||0:i(this,t,e)}})},9070:(t,e,r)=>{var n=r(2109),o=r(9781),i=r(3070).f;n({target:"Object",stat:!0,forced:Object.defineProperty!==i,sham:!o},{defineProperty:i})},4678:(t,e,r)=>{var n=r(2109),o=r(2814);n({global:!0,forced:parseFloat!=o},{parseFloat:o})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r(2772),r(4678),r(9070),(new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentValue=document.getElementById("calculatorScreenCurrentValue"),this.previousValue=document.getElementById("calculatorScreenPreviousValue"),this.buttonsNumber=document.getElementsByClassName("button-number"),this.btnDeleteAll=document.getElementById("btnDeleteAll"),this.btnEquals=document.getElementById("btnEquals"),this.btnPlus=document.getElementById("btnPlus"),this.btnMinus=document.getElementById("btnMinus"),this.btnTimes=document.getElementById("btnTimes"),this.btnDivide=document.getElementById("btnDivide"),this.btnPercentage=document.getElementById("btnPercentage"),this.btnDecimal=document.getElementById("btnDecimal")}var r,n;return r=e,(n=[{key:"init",value:function(){var t=this;console.log("CalculatorController init");for(var e=function(e){t.buttonsNumber[e].addEventListener("click",(function(){return t.setCurrentValue(t.buttonsNumber[e].innerHTML)}))},r=0;r<this.buttonsNumber.length;r++)e(r);this.btnDeleteAll.addEventListener("click",(function(){return t.deleteAll()})),this.btnEquals.addEventListener("click",(function(){return t.operation()})),this.btnPlus.addEventListener("click",(function(){return t.updateDisplay("+")})),this.btnMinus.addEventListener("click",(function(){return t.updateDisplay("-")})),this.btnTimes.addEventListener("click",(function(){return t.updateDisplay("x")})),this.btnDivide.addEventListener("click",(function(){return t.updateDisplay("÷")})),this.btnPercentage.addEventListener("click",(function(){return t.updateDisplay("%")})),this.btnDecimal.addEventListener("click",(function(){return t.setDecimalValue()}))}},{key:"setCurrentValue",value:function(t){this.currentValue.append(t)}},{key:"updateDisplay",value:function(t){this.previousValue.innerHTML=this.currentValue.innerHTML+t,this.currentValue.innerHTML=""}},{key:"deleteAll",value:function(){this.currentValue.innerHTML="",this.previousValue.innerHTML=""}},{key:"setDecimalValue",value:function(){-1===this.currentValue.innerHTML.indexOf(".")&&this.setCurrentValue(".")}},{key:"operation",value:function(){var t,e=parseFloat(this.previousValue.innerHTML.substring(0,this.previousValue.innerHTML.length-1)),r=parseFloat(this.currentValue.innerHTML);switch(this.previousValue.innerHTML.substr(this.previousValue.innerHTML.length-1)){case"+":t=e+r;break;case"-":t=e-r;break;case"x":t=e*r;break;case"÷":t=e/r;break;case"%":t=e%r;break;default:return}this.previousValue.innerHTML="",this.currentValue.innerHTML=t}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}())).init(),console.log("Calculator is starting...")})()})();