import{af as e,a2 as t,ag as r,I as n,A as i,ah as a,E as s,ai as o,aj as u}from"./index-DeXclsUq.js";var c=Object.prototype.toString;function f(e){return"[object Array]"===c.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),f(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function d(){let e={};function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=d(e[r],t):e[r]="object"==typeof t?d({},t):t}for(let r=0,n=arguments.length;r<n;r++)l(arguments[r],t);return e}function h(e){return void 0===e}function p(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function m(e,t,r){if(!t)return e;var n,i;if(r)n=r(t);else if(i=t,"undefined"!=typeof URLSearchParams&&i instanceof URLSearchParams)n=t.toString();else{var a=[];l(t,(function(e,t){null!=e&&(f(e)?t+="[]":e=[e],l(e,(function(e){!function(e){return"[object Date]"===c.call(e)}(e)?function(e){return null!==e&&"object"==typeof e}(e)&&(e=JSON.stringify(e)):e=e.toISOString(),a.push(p(t)+"="+p(e))})))})),n=a.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}const g=(e,t)=>{let r={};return e.forEach((e=>{h(t[e])||(r[e]=t[e])})),r},y=n=>(n=>new Promise(((i,a)=>{let s=m((o=n.baseURL,u=n.url,o&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(o,u):u),n.params,n.paramsSerializer);var o,u;const c={url:s,header:n.header,complete:e=>{n.fullPath=s,e.config=n,e.rawData=e.data;try{let t=!1;const r=typeof n.forcedJSONParsing;"boolean"===r?t=n.forcedJSONParsing:"object"===r&&(t=(n.forcedJSONParsing.include||[]).includes(n.method)),t&&"string"==typeof e.data&&(e.data=JSON.parse(e.data))}catch(t){}!function(e,t,r){const n=r.config.validateStatus,i=r.statusCode;!i||n&&!n(i)?t(r):e(r)}(i,a,e)}};let f;if("UPLOAD"===n.method){delete c.header["content-type"],delete c.header["Content-Type"];let t={filePath:n.filePath,name:n.name};const r=["files","file","timeout","formData"];f=e({...c,...t,...g(r,n)})}else if("DOWNLOAD"===n.method){const e=["timeout"];f=t({...c,...g(e,n)})}else{const e=["data","method","timeout","dataType","responseType","withCredentials"];f=r({...c,...g(e,n)})}n.getTask&&n.getTask(f,n)})))(n);function $(){this.handlers=[]}$.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},$.prototype.forEach=function(e){this.handlers.forEach((t=>{null!==t&&e(t)}))};const b=(e,t,r)=>{let n={};return e.forEach((e=>{h(r[e])?h(t[e])||(n[e]=t[e]):n[e]=r[e]})),n},O={baseURL:"",header:{},method:"GET",dataType:"json",paramsSerializer:null,responseType:"text",custom:{},timeout:6e4,withCredentials:!1,validateStatus:function(e){return e>=200&&e<300},forcedJSONParsing:!0};var v=function(){function e(e,t){return null!=t&&e instanceof t}var t,r,n;try{t=Map}catch(o){t=function(){}}try{r=Set}catch(o){r=function(){}}try{n=Promise}catch(o){n=function(){}}function i(a,o,u,c,f){"object"==typeof o&&(u=o.depth,c=o.prototype,f=o.includeNonEnumerable,o=o.circular);var l=[],d=[],h="undefined"!=typeof Buffer;return void 0===o&&(o=!0),void 0===u&&(u=1/0),function a(u,p){if(null===u)return null;if(0===p)return u;var m,g;if("object"!=typeof u)return u;if(e(u,t))m=new t;else if(e(u,r))m=new r;else if(e(u,n))m=new n((function(e,t){u.then((function(t){e(a(t,p-1))}),(function(e){t(a(e,p-1))}))}));else if(i.__isArray(u))m=[];else if(i.__isRegExp(u))m=new RegExp(u.source,s(u)),u.lastIndex&&(m.lastIndex=u.lastIndex);else if(i.__isDate(u))m=new Date(u.getTime());else{if(h&&Buffer.isBuffer(u))return Buffer.from?m=Buffer.from(u):(m=new Buffer(u.length),u.copy(m)),m;e(u,Error)?m=Object.create(u):void 0===c?(g=Object.getPrototypeOf(u),m=Object.create(g)):(m=Object.create(c),g=c)}if(o){var y=l.indexOf(u);if(-1!=y)return d[y];l.push(u),d.push(m)}for(var $ in e(u,t)&&u.forEach((function(e,t){var r=a(t,p-1),n=a(e,p-1);m.set(r,n)})),e(u,r)&&u.forEach((function(e){var t=a(e,p-1);m.add(t)})),u){Object.getOwnPropertyDescriptor(u,$)&&(m[$]=a(u[$],p-1));try{if("undefined"===Object.getOwnPropertyDescriptor(u,$).set)continue;m[$]=a(u[$],p-1)}catch(w){if(w instanceof TypeError)continue;if(w instanceof ReferenceError)continue}}if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(u);for($=0;$<b.length;$++){var O=b[$];(!(D=Object.getOwnPropertyDescriptor(u,O))||D.enumerable||f)&&(m[O]=a(u[O],p-1),Object.defineProperty(m,O,D))}}if(f){var v=Object.getOwnPropertyNames(u);for($=0;$<v.length;$++){var D,M=v[$];(D=Object.getOwnPropertyDescriptor(u,M))&&D.enumerable||(m[M]=a(u[M],p-1),Object.defineProperty(m,M,D))}}return m}(a,u)}function a(e){return Object.prototype.toString.call(e)}function s(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),t}return i.clonePrototype=function(e){if(null===e)return null;var t=function(){};return t.prototype=e,new t},i.__objToStr=a,i.__isDate=function(e){return"object"==typeof e&&"[object Date]"===a(e)},i.__isArray=function(e){return"object"==typeof e&&"[object Array]"===a(e)},i.__isRegExp=function(e){return"object"==typeof e&&"[object RegExp]"===a(e)},i.__getRegExpFlags=s,i}();const{isNeedLogin:D}=s(),M=[200,201,202,203,204,205,206,207,208,226,0],w=new class{constructor(e={}){var t;t=e,"[object Object]"!==Object.prototype.toString.call(t)&&(e={},console.warn("设置全局参数必须接收一个Object")),this.config=v({...O,...e}),this.interceptors={request:new $,response:new $}}setConfig(e){this.config=e(this.config)}middleware(e){e=((e,t={})=>{const r=t.method||e.method||"GET";let n={baseURL:t.baseURL||e.baseURL||"",method:r,url:t.url||"",params:t.params||{},custom:{...e.custom||{},...t.custom||{}},header:d(e.header||{},t.header||{})};if(n={...n,...b(["getTask","validateStatus","paramsSerializer","forcedJSONParsing"],e,t)},"DOWNLOAD"===r){const r=["timeout"];n={...n,...b(r,e,t)}}else if("UPLOAD"===r)delete n.header["content-type"],delete n.header["Content-Type"],["files","file","filePath","name","timeout","formData"].forEach((e=>{h(t[e])||(n[e]=t[e])})),h(n.timeout)&&!h(e.timeout)&&(n.timeout=e.timeout);else{const r=["data","timeout","dataType","responseType","withCredentials"];n={...n,...b(r,e,t)}}return n})(this.config,e);let t=[y,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r}request(e={}){return this.middleware(e)}get(e,t={}){return this.middleware({url:e,method:"GET",...t})}post(e,t,r={}){return this.middleware({url:e,data:t,method:"POST",...r})}put(e,t,r={}){return this.middleware({url:e,data:t,method:"PUT",...r})}delete(e,t,r={}){return this.middleware({url:e,data:t,method:"DELETE",...r})}connect(e,t,r={}){return this.middleware({url:e,data:t,method:"CONNECT",...r})}head(e,t,r={}){return this.middleware({url:e,data:t,method:"HEAD",...r})}options(e,t,r={}){return this.middleware({url:e,data:t,method:"OPTIONS",...r})}trace(e,t,r={}){return this.middleware({url:e,data:t,method:"TRACE",...r})}upload(e,t={}){return t.url=e,t.method="UPLOAD",this.middleware(t)}download(e,t={}){return t.url=e,t.method="DOWNLOAD",this.middleware(t)}get version(){return"3.1.0"}}({baseURL:"",timeout:6e4});w.interceptors.request.use((e=>{var t;const r=n()||"";return console.log("请求拦截器",e),(null==(t=null==e?void 0:e.custom)?void 0:t.isAuth)&&!r&&(i({title:"请先登录",icon:"none"}),D()),e.header={"content-type":"application/json",Authorization:r},e}),(e=>Promise.reject(e))),w.interceptors.response.use((e=>(console.log("响应拦截",e),-1!==M.indexOf(e.data.code)?e.data:(i({title:e.data.message,icon:"none"}),Promise.reject(e.data)))),(e=>{if(e&&e.errMsg)switch(e.statusCode){case 400:e.errMsg="错误请求";break;case 401:e.errMsg="未授权，请重新登录",a(),location.reload();break;case 403:e.errMsg="拒绝访问";break;case 404:e.errMsg="请求错误,未找到该资源";break;case 405:e.errMsg="请求方法未允许";break;case 408:e.errMsg="请求超时";break;case 500:e.errMsg="服务器端出错";break;case 501:e.errMsg="网络未实现";break;case 502:e.errMsg="网络错误";break;case 503:e.errMsg="服务不可用";break;case 504:e.errMsg="网络超时";break;case 505:e.errMsg="http版本不支持该请求";break;default:e.errMsg="连接错误"}const t={code:e.statusCode,message:e.errMsg};return i({title:t.message,icon:"none"}),Promise.reject(t)}));var S={exports:{}};const j=u(S.exports=function(){var e=1e3,t=6e4,r=36e5,n="millisecond",i="second",a="minute",s="hour",o="day",u="week",c="month",f="quarter",l="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},y=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},$={s:y,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),i=r%60;return(t<=0?"+":"-")+y(n,2,"0")+":"+y(i,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),i=t.clone().add(n,c),a=r-i<0,s=t.clone().add(n+(a?-1:1),c);return+(-(n+(r-i)/(a?i-s:s-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:l,w:u,d:o,D:d,h:s,m:a,s:i,ms:n,Q:f}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},b="en",O={};O[b]=g;var v="$isDayjsObject",D=function(e){return e instanceof j||!(!e||!e[v])},M=function e(t,r,n){var i;if(!t)return b;if("string"==typeof t){var a=t.toLowerCase();O[a]&&(i=a),r&&(O[a]=r,i=a);var s=t.split("-");if(!i&&s.length>1)return e(s[0])}else{var o=t.name;O[o]=t,i=o}return!n&&i&&(b=i),i||!n&&b},w=function(e,t){if(D(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new j(r)},S=$;S.l=M,S.i=D,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var j=function(){function g(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[v]=!0}var y=g.prototype;return y.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(p);if(n){var i=n[2]-1||0,a=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,a)}}return new Date(t)}(e),this.init()},y.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},y.$utils=function(){return S},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(e,t){var r=w(e);return this.startOf(t)<=r&&r<=this.endOf(t)},y.isAfter=function(e,t){return w(e)<this.startOf(t)},y.isBefore=function(e,t){return this.endOf(t)<w(e)},y.$g=function(e,t,r){return S.u(e)?this[t]:this.set(r,e)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(e,t){var r=this,n=!!S.u(t)||t,f=S.p(e),h=function(e,t){var i=S.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?i:i.endOf(o)},p=function(e,t){return S.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},m=this.$W,g=this.$M,y=this.$D,$="set"+(this.$u?"UTC":"");switch(f){case l:return n?h(1,0):h(31,11);case c:return n?h(1,g):h(0,g+1);case u:var b=this.$locale().weekStart||0,O=(m<b?m+7:m)-b;return h(n?y-O:y+(6-O),g);case o:case d:return p($+"Hours",0);case s:return p($+"Minutes",1);case a:return p($+"Seconds",2);case i:return p($+"Milliseconds",3);default:return this.clone()}},y.endOf=function(e){return this.startOf(e,!1)},y.$set=function(e,t){var r,u=S.p(e),f="set"+(this.$u?"UTC":""),h=(r={},r[o]=f+"Date",r[d]=f+"Date",r[c]=f+"Month",r[l]=f+"FullYear",r[s]=f+"Hours",r[a]=f+"Minutes",r[i]=f+"Seconds",r[n]=f+"Milliseconds",r)[u],p=u===o?this.$D+(t-this.$W):t;if(u===c||u===l){var m=this.clone().set(d,1);m.$d[h](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(e,t){return this.clone().$set(e,t)},y.get=function(e){return this[S.p(e)]()},y.add=function(n,f){var d,h=this;n=Number(n);var p=S.p(f),m=function(e){var t=w(h);return S.w(t.date(t.date()+Math.round(e*n)),h)};if(p===c)return this.set(c,this.$M+n);if(p===l)return this.set(l,this.$y+n);if(p===o)return m(1);if(p===u)return m(7);var g=(d={},d[a]=t,d[s]=r,d[i]=e,d)[p]||1,y=this.$d.getTime()+n*g;return S.w(y,this)},y.subtract=function(e,t){return this.add(-1*e,t)},y.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),a=this.$H,s=this.$m,o=this.$M,u=r.weekdays,c=r.months,f=r.meridiem,l=function(e,r,i,a){return e&&(e[r]||e(t,n))||i[r].slice(0,a)},d=function(e){return S.s(a%12||12,e,"0")},p=f||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return o+1;case"MM":return S.s(o+1,2,"0");case"MMM":return l(r.monthsShort,o,c,3);case"MMMM":return l(c,o);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return l(r.weekdaysMin,t.$W,u,2);case"ddd":return l(r.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(a);case"HH":return S.s(a,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return p(a,s,!0);case"A":return p(a,s,!1);case"m":return String(s);case"mm":return S.s(s,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(n,d,h){var p,m=this,g=S.p(d),y=w(n),$=(y.utcOffset()-this.utcOffset())*t,b=this-y,O=function(){return S.m(m,y)};switch(g){case l:p=O()/12;break;case c:p=O();break;case f:p=O()/3;break;case u:p=(b-$)/6048e5;break;case o:p=(b-$)/864e5;break;case s:p=b/r;break;case a:p=b/t;break;case i:p=b/e;break;default:p=b}return h?p:S.a(p)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return O[this.$L]},y.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=M(e,t,!0);return n&&(r.$L=n),r},y.clone=function(){return S.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},g}(),T=j.prototype;return w.prototype=T,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",o],["$M",c],["$y",l],["$D",d]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,j,w),e.$i=!0),w},w.locale=M,w.isDayjs=D,w.unix=function(e){return w(1e3*e)},w.en=O[b],w.Ls=O,w.p={},w}());function T(){return{dayjs:j,getCurTime:_,calculateTimeDifference:P,format:k,isDate1AfterDate2:E}}const P=function(e,t){const r=j(e),n=6e4,i=36e5,a=24*i,s=30*a,o=365*a,u=j(t).diff(r);return{years:Math.floor(u/o),months:Math.floor(u%o/s),days:Math.floor(u%o%s/a),hours:Math.floor(u%o%s%a/i),minutes:Math.floor(u%o%s%a%i/n),seconds:Math.floor(u%o%s%a%i%n/1e3)}},_=function(){return j().format("YYYY-MM-DD HH:mm:ss")},k=function(e,t){return j(e).format(t)};function E(e,t){const r="string"==typeof e?j(e):e,n="string"==typeof t?j(t):t;return r.isAfter(n)}export{w as h,T as u};
