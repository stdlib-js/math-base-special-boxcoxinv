// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Math.floor,t=Math.ceil;function n(r){return r<0?t(r):e(r)}var i=Number.NEGATIVE_INFINITY,a=Number.POSITIVE_INFINITY,o=1023,c=1023,u=-1023,f=-1074;function s(r){return r===a||r===i}var l=2147483648,p=2147483647,y="function"==typeof Object.defineProperty?Object.defineProperty:null,g=Object.defineProperty;function d(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function v(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(i):h(i)+r,n&&(r="-"+r)),r}var w=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=v(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=v(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===b.call(r.specifier)?b.call(t):w.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var A=Math.abs,_=String.prototype.toLowerCase,E=String.prototype.toUpperCase,U=String.prototype.replace,S=/e\+(\d)$/,x=/e-(\d)$/,I=/^(\d+)$/,k=/^(\d+)e/,F=/\.0$/,j=/\.0*e/,T=/(\..*[^0])0*e/;function N(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":A(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=U.call(t,T,"$1e"),t=U.call(t,j,"e"),t=U.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=U.call(t,S,"e+0$1"),t=U.call(t,x,"e-0$1"),r.alternate&&(t=U.call(t,I,"$1."),t=U.call(t,k,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):_.call(t)}function O(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var V=String.fromCharCode,$=Array.isArray;function G(r){return r!=r}function H(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function W(r){var e,t,n,i,a,o,c,u,f,s,l,p,y;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=H(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,G(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!G(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(a)?String(n.arg):V(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+O(y):O(y)+s)),o+=n.arg||"",c+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=C.exec(r);n;)(e=r.slice(i,C.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=C.lastIndex,n=C.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function R(r){var e,t;if("string"!=typeof r)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return W.apply(null,e)}var Z=Object.prototype,M=Z.toString,X=Z.__defineGetter__,Y=Z.__defineSetter__,z=Z.__lookupGetter__,q=Z.__lookupSetter__,B=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(r,e)||q.call(r,e)?(n=r.__proto__,r.__proto__=Z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&X&&X.call(r,e,t.get),o&&Y&&Y.call(r,e,t.set),r};function D(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var J,K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"",nr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return Q.call(r);t=r[tr],a=tr,e=null!=(i=r)&&rr.call(i,a);try{r[tr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[tr]=t:delete r[tr],n}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===nr(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var cr,ur=J,fr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===nr(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,yr=cr,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,256,257]),t=e,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===nr(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var vr,wr=pr,br="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,e,t;if("function"!=typeof mr)return!1;try{e=new mr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(br&&t instanceof Uint16Array||"[object Uint16Array]"===nr(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var _r,Er={uint16:vr,uint8:wr};(_r=new Er.uint16(1))[0]=4660;var Ur,Sr,xr=52===new Er.uint8(_r.buffer)[0];!0===xr?(Ur=1,Sr=0):(Ur=0,Sr=1);var Ir={HIGH:Ur,LOW:Sr},kr=new yr(1),Fr=new ur(kr.buffer),jr=Ir.HIGH,Tr=Ir.LOW;function Nr(r,e,t,n){return kr[0]=r,e[n]=Fr[jr],e[n+t]=Fr[Tr],e}function Or(r){return Nr(r,[0,0],1,0)}D(Or,"assign",Nr);var Vr,$r,Gr=!0===xr?1:0,Hr=new yr(1),Wr=new ur(Hr.buffer);function Cr(r){return Hr[0]=r,Wr[Gr]}!0===xr?(Vr=1,$r=0):(Vr=0,$r=1);var Lr={HIGH:Vr,LOW:$r},Pr=new yr(1),Rr=new ur(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e){return Rr[Zr]=r,Rr[Mr]=e,Pr[0]}var Yr=[0,0],zr=22250738585072014e-324,qr=4503599627370496;function Br(e,t,n,i){return r(e)||s(e)?(t[i]=e,t[i+n]=0,t):0!==e&&function(r){return Math.abs(r)}(e)<zr?(t[i]=e*qr,t[i+n]=-52,t):(t[i]=e,t[i+n]=0,t)}D((function(r){return Br(r,[0,0],1,0)}),"assign",Br);var Dr=2146435072,Jr=2220446049250313e-31,Kr=2148532223,Qr=[0,0],re=[0,0];function ee(e,t){var n,y,g,d,h,v;return 0===t||0===e||r(e)||s(e)?e:(Br(e,Qr,1,0),e=Qr[0],t+=Qr[1],t+=function(r){var e=Cr(r);return(e=(e&Dr)>>>20)-o|0}(e),t<f?(g=0,d=e,Or.assign(g,Yr,1,0),h=Yr[0],h&=p,v=Cr(d),Xr(h|=v&=l,Yr[1])):t>c?e<0?i:a:(t<=u?(t+=52,y=Jr):y=1,Or.assign(e,re,1,0),n=re[0],n&=Kr,y*Xr(n|=t+o<<20,re[1])))}var te=.6931471803691238,ne=1.9082149292705877e-10,ie=1.4426950408889634,ae=709.782712893384,oe=-745.1332191019411,ce=1/(1<<28),ue=-ce;function fe(e){var t;return r(e)||e===a?e:e===i?0:e>ae?a:e<oe?0:e>ue&&e<ce?1+e:function(r,e,t){var n,i,a,o;return ee(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(e-(t=n(e<0?ie*e-.5:ie*e+.5))*te,t*ne,t)}var se=!0===xr?1:0,le=new yr(1),pe=new ur(le.buffer);function ye(r,e){return le[0]=r,pe[se]=e>>>0,le[0]}var ge=.6931471803691238,de=1.9082149292705877e-10,he=.41421356237309503,ve=-.2928932188134525,we=1.862645149230957e-9,be=5551115123125783e-32,me=9007199254740992,Ae=.6666666666666666;return function(e,t){return r(e)||r(t)?NaN:fe(0===t?e:function(e){var t,n,c,u,f,s,l,p,y,g;if(e<-1||r(e))return NaN;if(-1===e)return i;if(e===a)return e;if(0===e)return e;if(g=1,(c=e<0?-e:e)<he){if(c<we)return c<be?e:e-e*e*.5;e>ve&&(g=0,u=e,n=1)}return 0!==g&&(c<me?(f=(g=((n=Cr(y=1+e))>>20)-o)>0?1-(y-e):e-(y-1),f/=y):(g=((n=Cr(y=e))>>20)-o,f=0),(n&=1048575)<434334?y=ye(y,1072693248|n):(g+=1,y=ye(y,1071644672|n),n=1048576-n>>2),u=y-1),t=.5*u*u,0===n?0===u?g*ge+(f+=g*de):g*ge-((p=t*(1-Ae*u))-(g*de+f)-u):(p=(l=(s=u/(2+u))*s)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(l),0===g?u-(t-s*(t+p)):g*ge-(t-(s*(t+p)+(g*de+f))-u))}(t*e)/t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).boxcoxinv=e();
//# sourceMappingURL=index.js.map
