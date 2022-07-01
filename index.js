// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t=function(n){return n!=n},r=Math.floor,e=Math.ceil,o=r,u=e,i=function(n){return n<0?u(n):o(n)},f=Number.NEGATIVE_INFINITY,c=Number.POSITIVE_INFINITY,a=c,y=f,l=function(n){return n===a||n===y},p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),A=Object.prototype.toString,b=A,w=function(n){return b.call(n)},v=Object.prototype.hasOwnProperty,U=function(n,t){return null!=n&&v.call(n,t)},d="function"==typeof Symbol?Symbol.toStringTag:"",m=U,h=d,s=A,I=w,N=function(n){var t,r,e;if(null==n)return s.call(n);r=n[h],t=m(n,h);try{n[h]=void 0}catch(t){return s.call(n)}return e=s.call(n),t?n[h]=r:delete n[h],e},g=p&&"symbol"==typeof Symbol.toStringTag?N:I,F=g,S="function"==typeof Uint32Array,H="function"==typeof Uint32Array?Uint32Array:null,O=function(n){return S&&n instanceof Uint32Array||"[object Uint32Array]"===F(n)},T=H,j=function(){var n,t;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,4294967296,4294967297]),n=O(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},E="function"==typeof Uint32Array?Uint32Array:void 0,G=function(){throw new Error("not implemented")},x=j()?E:G,L=g,W="function"==typeof Float64Array,M="function"==typeof Float64Array?Float64Array:null,P=function(n){return W&&n instanceof Float64Array||"[object Float64Array]"===L(n)},V=M,Y=function(){var n,t;if("function"!=typeof V)return!1;try{t=new V([1,3.14,-3.14,NaN]),n=P(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},_="function"==typeof Float64Array?Float64Array:void 0,k=function(){throw new Error("not implemented")},q=Y()?_:k,z=g,B="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,D=function(n){return B&&n instanceof Uint8Array||"[object Uint8Array]"===z(n)},J=C,K=function(){var n,t;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,256,257]),n=D(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Q="function"==typeof Uint8Array?Uint8Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=g,$="function"==typeof Uint16Array,nn="function"==typeof Uint16Array?Uint16Array:null,tn=function(n){return $&&n instanceof Uint16Array||"[object Uint16Array]"===Z(n)},rn=nn,en=function(){var n,t;if("function"!=typeof rn)return!1;try{t=new rn(t=[1,3.14,-3.14,65536,65537]),n=tn(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},on="function"==typeof Uint16Array?Uint16Array:void 0,un=function(){throw new Error("not implemented")},fn={uint16:en()?on:un,uint8:X};(n=new fn.uint16(1))[0]=4660;var cn,an,yn=52===new fn.uint8(n.buffer)[0];!0===yn?(cn=1,an=0):(cn=0,an=1);var ln,pn,An=x,bn={HIGH:cn,LOW:an},wn=new q(1),vn=new An(wn.buffer),Un=bn.HIGH,dn=bn.LOW,mn=function(n,t){return wn[0]=t,n[0]=vn[Un],n[1]=vn[dn],n},hn=function(n,t){return 1===arguments.length?mn([0,0],n):mn(n,t)},sn=hn,In=x,Nn=!0===yn?1:0,gn=new q(1),Fn=new In(gn.buffer),Sn=function(n){return gn[0]=n,Fn[Nn]};!0===yn?(ln=1,pn=0):(ln=0,pn=1);var Hn=x,On={HIGH:ln,LOW:pn},Tn=new q(1),jn=new Hn(Tn.buffer),En=On.HIGH,Gn=On.LOW,xn=function(n,t){return jn[En]=n,jn[Gn]=t,Tn[0]},Ln=sn,Wn=Sn,Mn=xn,Pn=[0,0],Vn=l,Yn=t,_n=function(n){return Math.abs(n)},kn=function(n,t){return Yn(t)||Vn(t)?(n[0]=t,n[1]=0,n):0!==t&&_n(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)},qn=function(n,t){return 1===arguments.length?kn([0,0],n):kn(n,t)},zn=Sn,Bn=function(n){var t=zn(n);return(t=(2146435072&t)>>>20)-1023|0},Cn=c,Dn=f,Jn=t,Kn=l,Qn=function(n,t){var r,e;return Ln(Pn,n),r=Pn[0],r&=2147483647,e=Wn(t),Mn(r|=e&=2147483648,Pn[1])},Rn=qn,Xn=Bn,Zn=sn,$n=xn,nt=[0,0],tt=[0,0],rt=function(n,t){var r,e;return 0===t||0===n||Jn(n)||Kn(n)?n:(Rn(nt,n),t+=nt[1],(t+=Xn(n=nt[0]))<-1074?Qn(0,n):t>1023?n<0?Dn:Cn:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Zn(tt,n),r=tt[0],r&=2148532223,e*$n(r|=t+1023<<20,tt[1])))},et=rt,ot=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},ut=t,it=i,ft=f,ct=c,at=function(n,t,r){var e,o,u;return u=(e=n-t)-(o=e*e)*ot(o),et(1-(t-e*u/(2-u)-n),r)},yt=1.4426950408889634,lt=1/(1<<28),pt=function(n){var t;return ut(n)||n===ct?n:n===ft?0:n>709.782712893384?ct:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<lt?1+n:(t=it(n<0?yt*n-.5:yt*n+.5),at(n-.6931471803691238*t,1.9082149292705877e-10*t,t))},At=x,bt=!0===yn?1:0,wt=new q(1),vt=new At(wt.buffer),Ut=function(n,t){return wt[0]=n,vt[bt]=t>>>0,wt[0]},dt=t,mt=Sn,ht=Ut,st=c,It=f,Nt=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.3999999999940942+n*(.2857142874366239+n*(.22222198432149784+n*(.1818357216161805+n*(.15313837699209373+.14798198605116586*n)))))},gt=.6931471803691238,Ft=1.9082149292705877e-10,St=function(n){var t,r,e,o,u,i,f,c,a,y;if(n<-1||dt(n))return NaN;if(-1===n)return It;if(n===st)return n;if(0===n)return n;if(y=1,(e=n<0?-n:n)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(y=0,o=n,r=1)}return 0!==y&&(e<9007199254740992?(u=(y=((r=mt(a=1+n))>>20)-1023)>0?1-(a-n):n-(a-1),u/=a):(y=((r=mt(a=n))>>20)-1023,u=0),(r&=1048575)<434334?a=ht(a,1072693248|r):(y+=1,a=ht(a,1071644672|r),r=1048576-r>>2),o=a-1),t=.5*o*o,0===r?0===o?y*gt+(u+=y*Ft):y*gt-((c=t*(1-.6666666666666666*o))-(y*Ft+u)-o):(c=(f=(i=o/(2+o))*i)*Nt(f),0===y?o-(t-i*(t+c)):y*gt-(t-(i*(t+c)+(y*Ft+u))-o))};return function(n,r){return t(n)||t(r)?NaN:pt(0===r?n:St(r*n)/r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).boxcoxinv=t();
//# sourceMappingURL=index.js.map