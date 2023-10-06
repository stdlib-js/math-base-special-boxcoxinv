// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor,t=Math.ceil;function n(r){return r<0?t(r):e(r)}var i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY,o=1023;function c(r){return r===a||r===i}var u="function"==typeof Object.defineProperty?Object.defineProperty:null,f=Object.defineProperty;function s(r){return"number"==typeof r}function l(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function p(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+l(i):l(i)+r,n&&(r="-"+r)),r}var y=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function d(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=p(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=p(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===g.call(r.specifier)?g.call(t):y.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function h(r){return"string"==typeof r}var w=Math.abs,v=String.prototype.toLowerCase,b=String.prototype.toUpperCase,m=String.prototype.replace,A=/e\+(\d)$/,_=/e-(\d)$/,E=/^(\d+)$/,U=/^(\d+)e/,x=/\.0$/,I=/\.0*e/,S=/(\..*[^0])0*e/;function k(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!s(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=m.call(t,S,"$1e"),t=m.call(t,I,"e"),t=m.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=m.call(t,A,"e+0$1"),t=m.call(t,_,"e-0$1"),r.alternate&&(t=m.call(t,E,"$1."),t=m.call(t,U,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===b.call(r.specifier)?b.call(t):v.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function j(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var T=String.fromCharCode,N=isNaN,O=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $(r){var e,t,n,i,a,o,c,u,f;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(h(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,N(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=d(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function H(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function W(r){var e,t,n,i;for(t=[],i=0,n=G.exec(r);n;)(e=r.slice(i,G.lastIndex-n[0].length)).length&&t.push(e),t.push(H(n)),i=G.lastIndex,n=G.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function C(r){return"string"==typeof r}function L(r){var e,t,n;if(!C(r))throw new TypeError(L("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=W(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return $.apply(null,t)}var P=Object.prototype,R=P.toString,Z=P.__defineGetter__,M=P.__defineSetter__,X=P.__lookupGetter__,Y=P.__lookupSetter__,z=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?f:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(L("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(L("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(r,e)||Y.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&M&&M.call(r,e,t.set),r};function q(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B,D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),J=Object.prototype.toString,K=Object.prototype.hasOwnProperty,Q="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof Q?Q.toStringTag:"",er=D&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return J.call(r);t=r[rr],a=rr,e=null!=(i=r)&&K.call(i,a);try{r[rr]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[rr]=t:delete r[rr],n}:function(r){return J.call(r)},tr="function"==typeof Uint32Array,nr="function"==typeof Uint32Array?Uint32Array:null,ir="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=B,cr="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,fr="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),t=e,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr,lr=ar,pr="function"==typeof Uint8Array,yr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,256,257]),t=e,r=(pr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,hr=sr,wr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,br="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Ar={uint16:dr,uint8:hr};(mr=new Ar.uint16(1))[0]=4660;var _r,Er,Ur=52===new Ar.uint8(mr.buffer)[0];!0===Ur?(_r=1,Er=0):(_r=0,Er=1);var xr={HIGH:_r,LOW:Er},Ir=new lr(1),Sr=new or(Ir.buffer),kr=xr.HIGH,Fr=xr.LOW;function jr(r,e,t,n){return Ir[0]=r,e[n]=Sr[kr],e[n+t]=Sr[Fr],e}function Tr(r){return jr(r,[0,0],1,0)}q(Tr,"assign",jr);var Nr,Or,Vr=!0===Ur?1:0,$r=new lr(1),Gr=new or($r.buffer);function Hr(r){return $r[0]=r,Gr[Vr]}!0===Ur?(Nr=1,Or=0):(Nr=0,Or=1);var Wr={HIGH:Nr,LOW:Or},Cr=new lr(1),Lr=new or(Cr.buffer),Pr=Wr.HIGH,Rr=Wr.LOW;function Zr(r,e){return Lr[Pr]=r,Lr[Rr]=e,Cr[0]}var Mr=[0,0];function Xr(e,t,n,i){return r(e)||c(e)?(t[i]=e,t[i+n]=0,t):0!==e&&function(r){return Math.abs(r)}(e)<22250738585072014e-324?(t[i]=4503599627370496*e,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}q((function(r){return Xr(r,[0,0],1,0)}),"assign",Xr);var Yr=[0,0],zr=[0,0];function qr(e,t){var n,u,f,s,l,p;return 0===t||0===e||r(e)||c(e)?e:(Xr(e,Yr,1,0),t+=Yr[1],t+=function(r){var e=Hr(r);return(e=(2146435072&e)>>>20)-o|0}(e=Yr[0]),t<-1074?(f=0,s=e,Tr.assign(f,Mr,1,0),l=Mr[0],l&=2147483647,p=Hr(s),Zr(l|=p&=2147483648,Mr[1])):t>1023?e<0?i:a:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,Tr.assign(e,zr,1,0),n=zr[0],n&=2148532223,u*Zr(n|=t+o<<20,zr[1])))}var Br=1.4426950408889634,Dr=1/(1<<28);function Jr(e){var t;return r(e)||e===a?e:e===i?0:e>709.782712893384?a:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<Dr?1+e:function(r,e,t){var n,i,a,o;return qr(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(e-.6931471803691238*(t=n(e<0?Br*e-.5:Br*e+.5)),1.9082149292705877e-10*t,t)}var Kr=!0===Ur?1:0,Qr=new lr(1),re=new or(Qr.buffer);function ee(r,e){return Qr[0]=r,re[Kr]=e>>>0,Qr[0]}var te=.6931471803691238,ne=1.9082149292705877e-10;return function(e,t){return r(e)||r(t)?NaN:Jr(0===t?e:function(e){var t,n,c,u,f,s,l,p,y,g;if(e<-1||r(e))return NaN;if(-1===e)return i;if(e===a)return e;if(0===e)return e;if(g=1,(c=e<0?-e:e)<.41421356237309503){if(c<1.862645149230957e-9)return c<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(g=0,u=e,n=1)}return 0!==g&&(c<9007199254740992?(f=(g=((n=Hr(y=1+e))>>20)-o)>0?1-(y-e):e-(y-1),f/=y):(g=((n=Hr(y=e))>>20)-o,f=0),(n&=1048575)<434334?y=ee(y,1072693248|n):(g+=1,y=ee(y,1071644672|n),n=1048576-n>>2),u=y-1),t=.5*u*u,0===n?0===u?g*te+(f+=g*ne):g*te-((p=t*(1-.6666666666666666*u))-(g*ne+f)-u):(p=(l=(s=u/(2+u))*s)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(l),0===g?u-(t-s*(t+p)):g*te-(t-(s*(t+p)+(g*ne+f))-u))}(t*e)/t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).boxcoxinv=e();
//# sourceMappingURL=index.js.map
