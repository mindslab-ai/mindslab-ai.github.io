"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[715],{3905:function(r,e,n){n.d(e,{Zo:function(){return s},kt:function(){return v}});var t=n(7294);function o(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function a(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function u(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function i(r,e){if(null==r)return{};var n,t,o=function(r,e){if(null==r)return{};var n,t,o={},a=Object.keys(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||(o[n]=r[n]);return o}(r,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(t=0;t<a.length;t++)n=a[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(o[n]=r[n])}return o}var c=t.createContext({}),f=function(r){var e=t.useContext(c),n=e;return r&&(n="function"==typeof r?r(e):u(u({},e),r)),n},s=function(r){var e=f(r.components);return t.createElement(c.Provider,{value:e},r.children)},l={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(r,e){var n=r.components,o=r.mdxType,a=r.originalType,c=r.parentName,s=i(r,["components","mdxType","originalType","parentName"]),p=f(n),v=o,y=p["".concat(c,".").concat(v)]||p[v]||l[v]||a;return n?t.createElement(y,u(u({ref:e},s),{},{components:n})):t.createElement(y,u({ref:e},s))}));function v(r,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof r||o){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=r,i.mdxType="string"==typeof r?r:o,u[1]=i;for(var f=2;f<a;f++)u[f]=n[f];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7466:function(r,e,n){var t;n.r(e),n.d(e,{NIL:function(){return R},parse:function(){return h},stringify:function(){return p},v1:function(){return d},v3:function(){return U},v4:function(){return E},v5:function(){return D},validate:function(){return i},version:function(){return x}});var o=new Uint8Array(16);function a(){if(!t&&!(t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(r){return"string"==typeof r&&u.test(r)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var s,l,p=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[r[e+0]]+c[r[e+1]]+c[r[e+2]]+c[r[e+3]]+"-"+c[r[e+4]]+c[r[e+5]]+"-"+c[r[e+6]]+c[r[e+7]]+"-"+c[r[e+8]]+c[r[e+9]]+"-"+c[r[e+10]]+c[r[e+11]]+c[r[e+12]]+c[r[e+13]]+c[r[e+14]]+c[r[e+15]]).toLowerCase();if(!i(n))throw TypeError("Stringified UUID is invalid");return n},v=0,y=0;var d=function(r,e,n){var t=e&&n||0,o=e||new Array(16),u=(r=r||{}).node||s,i=void 0!==r.clockseq?r.clockseq:l;if(null==u||null==i){var c=r.random||(r.rng||a)();null==u&&(u=s=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==i&&(i=l=16383&(c[6]<<8|c[7]))}var f=void 0!==r.msecs?r.msecs:Date.now(),d=void 0!==r.nsecs?r.nsecs:y+1,h=f-v+(d-y)/1e4;if(h<0&&void 0===r.clockseq&&(i=i+1&16383),(h<0||f>v)&&void 0===r.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");v=f,y=d,l=i;var g=(1e4*(268435455&(f+=122192928e5))+d)%4294967296;o[t++]=g>>>24&255,o[t++]=g>>>16&255,o[t++]=g>>>8&255,o[t++]=255&g;var m=f/4294967296*1e4&268435455;o[t++]=m>>>8&255,o[t++]=255&m,o[t++]=m>>>24&15|16,o[t++]=m>>>16&255,o[t++]=i>>>8|128,o[t++]=255&i;for(var b=0;b<6;++b)o[t+b]=u[b];return e||p(o)};var h=function(r){if(!i(r))throw TypeError("Invalid UUID");var e,n=new Uint8Array(16);return n[0]=(e=parseInt(r.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(r.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(r.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(r.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(r.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n};function g(r,e,n){function t(r,t,o,a){if("string"==typeof r&&(r=function(r){r=unescape(encodeURIComponent(r));for(var e=[],n=0;n<r.length;++n)e.push(r.charCodeAt(n));return e}(r)),"string"==typeof t&&(t=h(t)),16!==t.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+r.length);if(u.set(t),u.set(r,t.length),(u=n(u))[6]=15&u[6]|e,u[8]=63&u[8]|128,o){a=a||0;for(var i=0;i<16;++i)o[a+i]=u[i];return o}return p(u)}try{t.name=r}catch(o){}return t.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",t.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",t}function m(r){return 14+(r+64>>>9<<4)+1}function b(r,e){var n=(65535&r)+(65535&e);return(r>>16)+(e>>16)+(n>>16)<<16|65535&n}function w(r,e,n,t,o,a){return b((u=b(b(e,r),b(t,a)))<<(i=o)|u>>>32-i,n);var u,i}function O(r,e,n,t,o,a,u){return w(e&n|~e&t,r,e,o,a,u)}function A(r,e,n,t,o,a,u){return w(e&t|n&~t,r,e,o,a,u)}function C(r,e,n,t,o,a,u){return w(e^n^t,r,e,o,a,u)}function j(r,e,n,t,o,a,u){return w(n^(e|~t),r,e,o,a,u)}var I=function(r){if("string"==typeof r){var e=unescape(encodeURIComponent(r));r=new Uint8Array(e.length);for(var n=0;n<e.length;++n)r[n]=e.charCodeAt(n)}return function(r){for(var e=[],n=32*r.length,t="0123456789abcdef",o=0;o<n;o+=8){var a=r[o>>5]>>>o%32&255,u=parseInt(t.charAt(a>>>4&15)+t.charAt(15&a),16);e.push(u)}return e}(function(r,e){r[e>>5]|=128<<e%32,r[m(e)-1]=e;for(var n=1732584193,t=-271733879,o=-1732584194,a=271733878,u=0;u<r.length;u+=16){var i=n,c=t,f=o,s=a;n=O(n,t,o,a,r[u],7,-680876936),a=O(a,n,t,o,r[u+1],12,-389564586),o=O(o,a,n,t,r[u+2],17,606105819),t=O(t,o,a,n,r[u+3],22,-1044525330),n=O(n,t,o,a,r[u+4],7,-176418897),a=O(a,n,t,o,r[u+5],12,1200080426),o=O(o,a,n,t,r[u+6],17,-1473231341),t=O(t,o,a,n,r[u+7],22,-45705983),n=O(n,t,o,a,r[u+8],7,1770035416),a=O(a,n,t,o,r[u+9],12,-1958414417),o=O(o,a,n,t,r[u+10],17,-42063),t=O(t,o,a,n,r[u+11],22,-1990404162),n=O(n,t,o,a,r[u+12],7,1804603682),a=O(a,n,t,o,r[u+13],12,-40341101),o=O(o,a,n,t,r[u+14],17,-1502002290),n=A(n,t=O(t,o,a,n,r[u+15],22,1236535329),o,a,r[u+1],5,-165796510),a=A(a,n,t,o,r[u+6],9,-1069501632),o=A(o,a,n,t,r[u+11],14,643717713),t=A(t,o,a,n,r[u],20,-373897302),n=A(n,t,o,a,r[u+5],5,-701558691),a=A(a,n,t,o,r[u+10],9,38016083),o=A(o,a,n,t,r[u+15],14,-660478335),t=A(t,o,a,n,r[u+4],20,-405537848),n=A(n,t,o,a,r[u+9],5,568446438),a=A(a,n,t,o,r[u+14],9,-1019803690),o=A(o,a,n,t,r[u+3],14,-187363961),t=A(t,o,a,n,r[u+8],20,1163531501),n=A(n,t,o,a,r[u+13],5,-1444681467),a=A(a,n,t,o,r[u+2],9,-51403784),o=A(o,a,n,t,r[u+7],14,1735328473),n=C(n,t=A(t,o,a,n,r[u+12],20,-1926607734),o,a,r[u+5],4,-378558),a=C(a,n,t,o,r[u+8],11,-2022574463),o=C(o,a,n,t,r[u+11],16,1839030562),t=C(t,o,a,n,r[u+14],23,-35309556),n=C(n,t,o,a,r[u+1],4,-1530992060),a=C(a,n,t,o,r[u+4],11,1272893353),o=C(o,a,n,t,r[u+7],16,-155497632),t=C(t,o,a,n,r[u+10],23,-1094730640),n=C(n,t,o,a,r[u+13],4,681279174),a=C(a,n,t,o,r[u],11,-358537222),o=C(o,a,n,t,r[u+3],16,-722521979),t=C(t,o,a,n,r[u+6],23,76029189),n=C(n,t,o,a,r[u+9],4,-640364487),a=C(a,n,t,o,r[u+12],11,-421815835),o=C(o,a,n,t,r[u+15],16,530742520),n=j(n,t=C(t,o,a,n,r[u+2],23,-995338651),o,a,r[u],6,-198630844),a=j(a,n,t,o,r[u+7],10,1126891415),o=j(o,a,n,t,r[u+14],15,-1416354905),t=j(t,o,a,n,r[u+5],21,-57434055),n=j(n,t,o,a,r[u+12],6,1700485571),a=j(a,n,t,o,r[u+3],10,-1894986606),o=j(o,a,n,t,r[u+10],15,-1051523),t=j(t,o,a,n,r[u+1],21,-2054922799),n=j(n,t,o,a,r[u+8],6,1873313359),a=j(a,n,t,o,r[u+15],10,-30611744),o=j(o,a,n,t,r[u+6],15,-1560198380),t=j(t,o,a,n,r[u+13],21,1309151649),n=j(n,t,o,a,r[u+4],6,-145523070),a=j(a,n,t,o,r[u+11],10,-1120210379),o=j(o,a,n,t,r[u+2],15,718787259),t=j(t,o,a,n,r[u+9],21,-343485551),n=b(n,i),t=b(t,c),o=b(o,f),a=b(a,s)}return[n,t,o,a]}(function(r){if(0===r.length)return[];for(var e=8*r.length,n=new Uint32Array(m(e)),t=0;t<e;t+=8)n[t>>5]|=(255&r[t/8])<<t%32;return n}(r),8*r.length))},U=g("v3",48,I);var E=function(r,e,n){var t=(r=r||{}).random||(r.rng||a)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=t[o];return e}return p(t)};function P(r,e,n,t){switch(r){case 0:return e&n^~e&t;case 1:case 3:return e^n^t;case 2:return e&n^e&t^n&t}}function k(r,e){return r<<e|r>>>32-e}var T=function(r){var e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof r){var t=unescape(encodeURIComponent(r));r=[];for(var o=0;o<t.length;++o)r.push(t.charCodeAt(o))}else Array.isArray(r)||(r=Array.prototype.slice.call(r));r.push(128);for(var a=r.length/4+2,u=Math.ceil(a/16),i=new Array(u),c=0;c<u;++c){for(var f=new Uint32Array(16),s=0;s<16;++s)f[s]=r[64*c+4*s]<<24|r[64*c+4*s+1]<<16|r[64*c+4*s+2]<<8|r[64*c+4*s+3];i[c]=f}i[u-1][14]=8*(r.length-1)/Math.pow(2,32),i[u-1][14]=Math.floor(i[u-1][14]),i[u-1][15]=8*(r.length-1)&4294967295;for(var l=0;l<u;++l){for(var p=new Uint32Array(80),v=0;v<16;++v)p[v]=i[l][v];for(var y=16;y<80;++y)p[y]=k(p[y-3]^p[y-8]^p[y-14]^p[y-16],1);for(var d=n[0],h=n[1],g=n[2],m=n[3],b=n[4],w=0;w<80;++w){var O=Math.floor(w/20),A=k(d,5)+P(O,h,g,m)+b+e[O]+p[w]>>>0;b=m,m=g,g=k(h,30)>>>0,h=d,d=A}n[0]=n[0]+d>>>0,n[1]=n[1]+h>>>0,n[2]=n[2]+g>>>0,n[3]=n[3]+m>>>0,n[4]=n[4]+b>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]},D=g("v5",80,T),R="00000000-0000-0000-0000-000000000000";var x=function(r){if(!i(r))throw TypeError("Invalid UUID");return parseInt(r.substr(14,1),16)}}}]);