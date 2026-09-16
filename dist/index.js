"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=o(function(q,u){
var i=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/math-base-special-log1p/dist'),t=require('@stdlib/math-base-assert-is-nan/dist');function x(e,r){return t(e)||t(r)?NaN:i(r===0?e:v(r*e)/r)}u.exports=x
});var c=n();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
