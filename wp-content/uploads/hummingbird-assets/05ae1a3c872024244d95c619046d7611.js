/**handles:ee-mb-fullcalendar,ee-mb-daygrid,ee-mb-list,ee-mb-interaction,ee-mb-timegrid,ee-mb-fancybox-jquery,ee-mb-slick,ee-mb-gcal,ee-mb-extension-js,elementor-extensions-js,e-sticky**/
/*!
FullCalendar Core Package v4.3.1
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).FullCalendar={})}(this,function(e){"use strict";var t={className:!0,colSpan:!0,rowSpan:!0},n={"<tr":"tbody","<td":"tr"};function r(e,n,r){var i=document.createElement(e);if(n)for(var o in n)"style"===o?y(i,n[o]):t[o]?i[o]=n[o]:i.setAttribute(o,n[o]);return"string"==typeof r?i.innerHTML=r:null!=r&&s(i,r),i}function i(e){e=e.trim();var t=document.createElement(a(e));return t.innerHTML=e,t.firstChild}function o(e){return Array.prototype.slice.call(function(e){e=e.trim();var t=document.createElement(a(e));return t.innerHTML=e,t.childNodes}(e))}function a(e){return n[e.substr(0,3)]||"div"}function s(e,t){for(var n=l(t),r=0;r<n.length;r++)e.appendChild(n[r])}function u(e,t){for(var n=l(t),r=e.firstChild||null,i=0;i<n.length;i++)e.insertBefore(n[i],r)}function l(e){return"string"==typeof e?o(e):e instanceof Node?[e]:Array.prototype.slice.call(e)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}var d=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.msMatchesSelector,f=Element.prototype.closest||function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(h(t,e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null};function p(e,t){return f.call(e,t)}function h(e,t){return d.call(e,t)}function v(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].querySelectorAll(t),a=0;a<o.length;a++)r.push(o[a]);return r}var g=/(top|left|right|bottom|width|height)$/i;function y(e,t){for(var n in t)m(e,n,t[n])}function m(e,t,n){null==n?e.style[t]="":"number"==typeof n&&g.test(t)?e.style[t]=n+"px":e.style[t]=n}function E(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom&&n}var S=null;function b(){return null===S&&(S=function(){var e=r("div",{style:{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}},"<div></div>");document.body.appendChild(e);var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left;return c(e),t}()),S}function D(e){return e=Math.max(0,e),e=Math.round(e)}function T(e,t){void 0===t&&(t=!1);var n=window.getComputedStyle(e),r=parseInt(n.borderLeftWidth,10)||0,i=parseInt(n.borderRightWidth,10)||0,o=parseInt(n.borderTopWidth,10)||0,a=parseInt(n.borderBottomWidth,10)||0,s=D(e.offsetWidth-e.clientWidth-r-i),u={borderLeft:r,borderRight:i,borderTop:o,borderBottom:a,scrollbarBottom:D(e.offsetHeight-e.clientHeight-o-a),scrollbarLeft:0,scrollbarRight:0};return b()&&"rtl"===n.direction?u.scrollbarLeft=s:u.scrollbarRight=s,t&&(u.paddingLeft=parseInt(n.paddingLeft,10)||0,u.paddingRight=parseInt(n.paddingRight,10)||0,u.paddingTop=parseInt(n.paddingTop,10)||0,u.paddingBottom=parseInt(n.paddingBottom,10)||0),u}function w(e,t){void 0===t&&(t=!1);var n=R(e),r=T(e,t),i={left:n.left+r.borderLeft+r.scrollbarLeft,right:n.right-r.borderRight-r.scrollbarRight,top:n.top+r.borderTop,bottom:n.bottom-r.borderBottom-r.scrollbarBottom};return t&&(i.left+=r.paddingLeft,i.right-=r.paddingRight,i.top+=r.paddingTop,i.bottom-=r.paddingBottom),i}function R(e){var t=e.getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function I(e){return e.getBoundingClientRect().height+C(e)}function C(e){var t=window.getComputedStyle(e);return parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)}function M(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e);if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}function k(e){e.preventDefault()}function O(e,t,n,r){function i(e){var t=p(e.target,n);t&&r.call(t,e,t)}return e.addEventListener(t,i),function(){e.removeEventListener(t,i)}}var _=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];var P=["sun","mon","tue","wed","thu","fri","sat"];function x(e,t){var n=Z(e);return n[2]+=t,j(n)}function H(e,t){var n=Z(e);return n[6]+=t,j(n)}function N(e,t){return(t.valueOf()-e.valueOf())/864e5}function z(e,t){var n=B(e),r=B(t);return{years:0,months:0,days:Math.round(N(n,r)),milliseconds:t.valueOf()-r.valueOf()-(e.valueOf()-n.valueOf())}}function U(e,t){var n=L(e,t);return null!==n&&n%7==0?n/7:null}function L(e,t){return q(e)===q(t)?Math.round(N(e,t)):null}function B(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function V(e,t,n,r){var i=j([t,0,1+A(t,n,r)]),o=B(e),a=Math.round(N(i,o));return Math.floor(a/7)+1}function A(e,t,n){var r=7+t-n;return-((7+j([e,0,r]).getUTCDay()-t)%7)+r-1}function F(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function W(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function Z(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function j(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function Y(e){return!isNaN(e.valueOf())}function q(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}var G=["years","months","days","milliseconds"],X=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function J(e,t){var n;return"string"==typeof e?function(e){var t=X.exec(e);if(t){var n=t[1]?-1:1;return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?K(e):"number"==typeof e?K(((n={})[t||"milliseconds"]=e,n)):null}function K(e){return{years:e.years||e.year||0,months:e.months||e.month||0,days:(e.days||e.day||0)+7*Q(e),milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)}}function Q(e){return e.weeks||e.week||0}function $(e,t){return e.years===t.years&&e.months===t.months&&e.days===t.days&&e.milliseconds===t.milliseconds}function ee(e){return te(e)/864e5}function te(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function ne(e,t){var n=e.milliseconds;if(n){if(n%1e3!=0)return{unit:"millisecond",value:n};if(n%6e4!=0)return{unit:"second",value:n/1e3};if(n%36e5!=0)return{unit:"minute",value:n/6e4};if(n)return{unit:"hour",value:n/36e5}}return e.days?t||e.days%7!=0?{unit:"day",value:e.days}:{unit:"week",value:e.days/7}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function re(e){e.forEach(function(e){e.style.height=""})}function ie(e){var t,n,r=[],i=[];for("string"==typeof e?i=e.split(/\s*,\s*/):"function"==typeof e?i=[e]:Array.isArray(e)&&(i=e),t=0;t<i.length;t++)"string"==typeof(n=i[t])?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n});return r}function oe(e,t,n){var r,i;for(r=0;r<n.length;r++)if(i=ae(e,t,n[r]))return i;return 0}function ae(e,t,n){return n.func?n.func(e,t):se(e[n.field],t[n.field])*(n.order||1)}function se(e,t){return e||t?null==t?-1:null==e?1:"string"==typeof e||"string"==typeof t?String(e).localeCompare(String(t)):e-t:0}function ue(e){return e.charAt(0).toUpperCase()+e.slice(1)}function le(e,t){var n=String(e);return"000".substr(0,t-n.length)+n}function ce(e){return e%1==0}function de(e,t,n){if("function"==typeof e&&(e=[e]),e){var r=void 0,i=void 0;for(r=0;r<e.length;r++)i=e[r].apply(t,n)||i;return i}}function fe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=0;n<e.length;n++)if(void 0!==e[n])return e[n]}function pe(e,t){var n,r,i,o,a,s=function(){var u=(new Date).valueOf()-o;u<t?n=setTimeout(s,t-u):(n=null,a=e.apply(i,r),i=r=null)};return function(){return i=this,r=arguments,o=(new Date).valueOf(),n||(n=setTimeout(s,t)),a}}function he(e,t,n,r){void 0===n&&(n={});var i={};for(var o in t){var a=t[o];void 0!==e[o]?a===Function?i[o]="function"==typeof e[o]?e[o]:null:i[o]=a?a(e[o]):e[o]:void 0!==n[o]?i[o]=n[o]:a===String?i[o]="":a&&a!==Number&&a!==Boolean&&a!==Function?i[o]=a(null):i[o]=null}if(r)for(var o in e)void 0===t[o]&&(r[o]=e[o]);return i}function ve(e){var t=Math.floor(N(e.start,e.end))||1,n=B(e.start);return{start:n,end:x(n,t)}}function ge(e,t){void 0===t&&(t=J(0));var n=null,r=null;if(e.end){r=B(e.end);var i=e.end.valueOf()-r.valueOf();i&&i>=te(t)&&(r=x(r,1))}return e.start&&(n=B(e.start),r&&r<=n&&(r=x(n,1))),{start:n,end:r}}function ye(e,t,n,r){return"year"===r?J(n.diffWholeYears(e,t),"year"):"month"===r?J(n.diffWholeMonths(e,t),"month"):z(e,t)}var me=function(e,t){return(me=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function Ee(e,t){function n(){this.constructor=e}me(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var Se=function(){return(Se=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function be(e,t,n,r,i){var o=i[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:r.subtract(n.start,t),end:n.end},r);return e.allDay&&(o=o.map(B)),o}var De=Object.prototype.hasOwnProperty;function Te(e,t){var n,r,i,o,a,s,u={};if(t)for(n=0;n<t.length;n++){for(r=t[n],i=[],o=e.length-1;o>=0;o--)if("object"==typeof(a=e[o][r])&&a)i.unshift(a);else if(void 0!==a){u[r]=a;break}i.length&&(u[r]=Te(i))}for(n=e.length-1;n>=0;n--)for(r in s=e[n])r in u||(u[r]=s[r]);return u}function we(e,t){var n={};for(var r in e)t(e[r],r)&&(n[r]=e[r]);return n}function Re(e,t){var n={};for(var r in e)n[r]=t(e[r],r);return n}function Ie(e){for(var t={},n=0,r=e;n<r.length;n++){t[r[n]]=!0}return t}function Ce(e){var t=[];for(var n in e)t.push(e[n]);return t}function Me(e,t){for(var n in e)if(De.call(e,n)&&!(n in t))return!1;for(var n in t)if(De.call(t,n)&&e[n]!==t[n])return!1;return!0}function ke(e,t,n,r){for(var i={defs:{},instances:{}},o=0,a=e;o<a.length;o++){var s=Ft(a[o],t,n,r);s&&Oe(s,i)}return i}function Oe(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function _e(e,t,n){var r=n.dateEnv,i=e.defs,o=e.instances;for(var a in o=we(o,function(e){return!i[e.defId].recurringDef}),i){var s=i[a];if(s.recurringDef){var u=s.recurringDef.duration;u||(u=s.allDay?n.defaultAllDayEventDuration:n.defaultTimedEventDuration);for(var l=0,c=be(s,u,t,n.dateEnv,n.pluginSystem.hooks.recurringTypes);l<c.length;l++){var d=c[l],f=Zt(a,{start:d,end:r.add(d,u)});o[f.instanceId]=f}}}return{defs:i,instances:o}}function Pe(e,t){var n=e.instances[t];if(n){var r=e.defs[n.defId],i=ze(e,function(e){return t=r,n=e,Boolean(t.groupId&&t.groupId===n.groupId);var t,n});return i.defs[r.defId]=r,i.instances[n.instanceId]=n,i}return{defs:{},instances:{}}}function xe(e,t){var n;if(t){n=[];for(var r=0,i=e;r<i.length;r++){var o=i[r],a=t(o);a?n.push(a):null==a&&n.push(o)}}else n=e;return n}function He(){return{defs:{},instances:{}}}function Ne(e,t){return{defs:Se({},e.defs,t.defs),instances:Se({},e.instances,t.instances)}}function ze(e,t){var n=we(e.defs,t),r=we(e.instances,function(e){return n[e.defId]});return{defs:n,instances:r}}function Ue(e,t){var n=null,r=null;return e.start&&(n=t.createMarker(e.start)),e.end&&(r=t.createMarker(e.end)),n||r?n&&r&&r<n?null:{start:n,end:r}:null}function Le(e,t){var n,r,i=[],o=t.start;for(e.sort(Be),n=0;n<e.length;n++)(r=e[n]).start>o&&i.push({start:o,end:r.start}),r.end>o&&(o=r.end);return o<t.end&&i.push({start:o,end:t.end}),i}function Be(e,t){return e.start.valueOf()-t.start.valueOf()}function Ve(e,t){var n=e.start,r=e.end,i=null;return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(r=null===r?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(null===n||null===r||n<r)&&(i={start:n,end:r}),i}function Ae(e,t){return(null===e.start?null:e.start.valueOf())===(null===t.start?null:t.start.valueOf())&&(null===e.end?null:e.end.valueOf())===(null===t.end?null:t.end.valueOf())}function Fe(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function We(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function Ze(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function je(e,t){var n,r=e.length;if(r!==t.length)return!1;for(n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ye(e){var t,n;return function(){return t&&je(t,arguments)||(t=arguments,n=e.apply(this,arguments)),n}}function qe(e,t){var n=null;return function(){var r=e.apply(this,arguments);return(null===n||n!==r&&!t(n,r))&&(n=r),n}}var Ge={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},Xe={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},Je=/\s*([ap])\.?m\.?/i,Ke=/,/g,Qe=/\s+/g,$e=/\u200e/g,et=/UTC|GMT/,tt=function(){function e(e){var t={},n={},r=0;for(var i in e)i in Ge?(n[i]=e[i],r=Math.max(Ge[i],r)):(t[i]=e[i],i in Xe&&(r=Math.max(Xe[i],r)));this.standardDateProps=t,this.extendedSettings=n,this.severity=r,this.buildFormattingFunc=Ye(nt)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n){var r=this.standardDateProps,i=this.extendedSettings,o=function(e,t,n){if(n.getMarkerYear(e)!==n.getMarkerYear(t))return 5;if(n.getMarkerMonth(e)!==n.getMarkerMonth(t))return 4;if(n.getMarkerDay(e)!==n.getMarkerDay(t))return 2;if(q(e)!==q(t))return 1;return 0}(e.marker,t.marker,n.calendarSystem);if(!o)return this.format(e,n);var a=o;!(a>1)||"numeric"!==r.year&&"2-digit"!==r.year||"numeric"!==r.month&&"2-digit"!==r.month||"numeric"!==r.day&&"2-digit"!==r.day||(a=1);var s=this.format(e,n),u=this.format(t,n);if(s===u)return s;var l=nt(function(e,t){var n={};for(var r in e)r in Xe&&!(Xe[r]<=t)||(n[r]=e[r]);return n}(r,a),i,n),c=l(e),d=l(t),f=function(e,t,n,r){var i=0;for(;i<e.length;){var o=e.indexOf(t,i);if(-1===o)break;var a=e.substr(0,o);i=o+t.length;for(var s=e.substr(i),u=0;u<n.length;){var l=n.indexOf(r,u);if(-1===l)break;var c=n.substr(0,l);u=l+r.length;var d=n.substr(u);if(a===c&&s===d)return{before:a,after:s}}}return null}(s,c,u,d),p=i.separator||"";return f?f.before+c+p+d+f.after:s+p+u},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";default:return"day"}},e}();function nt(e,t,n){var r=Object.keys(e).length;return 1===r&&"short"===e.timeZoneName?function(e){return at(e.timeZoneOffset)}:0===r&&t.week?function(e){return function(e,t,n,r){var i=[];"narrow"===r?i.push(t):"short"===r&&i.push(t," ");i.push(n.simpleNumberFormat.format(e)),n.options.isRtl&&i.reverse();return i.join("")}(n.computeWeekNumber(e.marker),n.weekLabel,n.locale,t.week)}:function(e,t,n){e=Se({},e),t=Se({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit"));"long"===e.timeZoneName&&(e.timeZoneName="short");t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC";var r,i=new Intl.DateTimeFormat(n.locale.codes,e);if(t.omitZeroMinute){var o=Se({},e);delete o.minute,r=new Intl.DateTimeFormat(n.locale.codes,o)}return function(o){var a=o.marker,s=(r&&!a.getUTCMinutes()?r:i).format(a);return function(e,t,n,r,i){e=e.replace($e,""),"short"===n.timeZoneName&&(e=function(e,t){var n=!1;e=e.replace(et,function(){return n=!0,t}),n||(e+=" "+t);return e}(e,"UTC"===i.timeZone||null==t.timeZoneOffset?"UTC":at(t.timeZoneOffset)));r.omitCommas&&(e=e.replace(Ke,"").trim());r.omitZeroMinute&&(e=e.replace(":00",""));!1===r.meridiem?e=e.replace(Je,"").trim():"narrow"===r.meridiem?e=e.replace(Je,function(e,t){return t.toLocaleLowerCase()}):"short"===r.meridiem?e=e.replace(Je,function(e,t){return t.toLocaleLowerCase()+"m"}):"lowercase"===r.meridiem&&(e=e.replace(Je,function(e){return e.toLocaleLowerCase()}));return e=(e=e.replace(Qe," ")).trim()}(s,o,e,t,n)}}(e,t,n)}var rt=function(){function e(e,t){this.cmdStr=e,this.separator=t}return e.prototype.format=function(e,t){return t.cmdFormatter(this.cmdStr,st(e,null,t,this.separator))},e.prototype.formatRange=function(e,t,n){return n.cmdFormatter(this.cmdStr,st(e,t,n,this.separator))},e}(),it=function(){function e(e){this.func=e}return e.prototype.format=function(e,t){return this.func(st(e,null,t))},e.prototype.formatRange=function(e,t,n){return this.func(st(e,t,n))},e}();function ot(e,t){return"object"==typeof e&&e?("string"==typeof t&&(e=Se({separator:t},e)),new tt(e)):"string"==typeof e?new rt(e,t):"function"==typeof e?new it(e):void 0}function at(e,t){void 0===t&&(t=!1);var n=e<0?"-":"+",r=Math.abs(e),i=Math.floor(r/60),o=Math.round(r%60);return t?n+le(i,2)+":"+le(o,2):"GMT"+n+i+(o?":"+le(o,2):"")}function st(e,t,n,r){var i=ut(e,n.calendarSystem);return{date:i,start:i,end:t?ut(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,separator:r}}function ut(e,t){var n=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}var lt=function(){function e(e,t){this.calendar=e,this.internalEventSource=t}return e.prototype.remove=function(){this.calendar.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.calendar.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId]})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!0,configurable:!0}),e}(),ct=function(){function e(e,t,n){this._calendar=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,r;if(e in Vt);else if(e in Bt)"function"==typeof Bt[e]&&(t=Bt[e](t)),this.mutate({standardProps:(n={},n[e]=t,n)});else if(e in xt){var i=void 0;"function"==typeof xt[e]&&(t=xt[e](t)),"color"===e?i={backgroundColor:t,borderColor:t}:"editable"===e?i={startEditable:t,durationEditable:t}:((r={})[e]=t,i=r),this.mutate({standardProps:{ui:i}})}},e.prototype.setExtendedProp=function(e,t){var n;this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={});var n=this._calendar.dateEnv,r=n.createMarker(e);if(r&&this._instance){var i=ye(this._instance.range.start,r,n,t.granularity);t.maintainDuration?this.mutate({datesDelta:i}):this.mutate({startDelta:i})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={});var n,r=this._calendar.dateEnv;if((null==e||(n=r.createMarker(e)))&&this._instance)if(n){var i=ye(this._instance.range.end,n,r,t.granularity);this.mutate({endDelta:i})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={});var r,i=this._calendar.dateEnv,o={allDay:n.allDay},a=i.createMarker(e);if(a&&(null==t||(r=i.createMarker(t)))&&this._instance){var s=this._instance.range;!0===n.allDay&&(s=ve(s));var u=ye(s.start,a,i,n.granularity);if(r){var l=ye(s.end,r,i,n.granularity);$(u,l)?this.mutate({datesDelta:u,standardProps:o}):this.mutate({startDelta:u,endDelta:l,standardProps:o})}else o.hasEnd=!1,this.mutate({datesDelta:u,standardProps:o})}},e.prototype.moveStart=function(e){var t=J(e);t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=J(e);t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=J(e);t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={});var n={allDay:e},r=t.maintainDuration;null==r&&(r=this._calendar.opt("allDayMaintainDuration")),this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._calendar.dateEnv,n=this._instance,r=ot(e,this._calendar.opt("defaultRangeSeparator"));return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(e){var t=this._def,n=this._instance;if(n){this._calendar.dispatch({type:"MUTATE_EVENTS",instanceId:n.instanceId,mutation:e,fromApi:!0});var r=this._calendar.state.eventStore;this._def=r.defs[t.defId],this._instance=r.instances[n.instanceId]}},e.prototype.remove=function(){this._calendar.dispatch({type:"REMOVE_EVENT_DEF",defId:this._def.defId})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId;return e?new lt(this._calendar,this._calendar.state.eventSources[e]):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._calendar.dateEnv.toDate(this._instance.range.start):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._calendar.dateEnv.toDate(this._instance.range.end):null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rendering",{get:function(){return this._def.rendering},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!0,configurable:!0}),e}();function dt(e,t,n,r){var i={},o={},a={},s=[],u=[],l=vt(e.defs,t);for(var c in e.defs){"inverse-background"===(S=e.defs[c]).rendering&&(S.groupId?(i[S.groupId]=[],a[S.groupId]||(a[S.groupId]=S)):o[c]=[])}for(var d in e.instances){var f=e.instances[d],p=l[(S=e.defs[f.defId]).defId],h=f.range,v=!S.allDay&&r?ge(h,r):h,g=Ve(v,n);g&&("inverse-background"===S.rendering?S.groupId?i[S.groupId].push(g):o[f.defId].push(g):("background"===S.rendering?s:u).push({def:S,ui:p,instance:f,range:g,isStart:v.start&&v.start.valueOf()===g.start.valueOf(),isEnd:v.end&&v.end.valueOf()===g.end.valueOf()}))}for(var y in i)for(var m=0,E=Le(i[y],n);m<E.length;m++){var S,b=E[m];p=l[(S=a[y]).defId];s.push({def:S,ui:p,instance:null,range:b,isStart:!1,isEnd:!1})}for(var c in o)for(var D=0,T=Le(o[c],n);D<T.length;D++){b=T[D];s.push({def:e.defs[c],ui:l[c],instance:null,range:b,isStart:!1,isEnd:!1})}return{bg:s,fg:u}}function ft(e,t,n){e.hasPublicHandlers("eventRender")&&(t=t.filter(function(t){var r=e.publiclyTrigger("eventRender",[{event:new ct(e.calendar,t.eventRange.def,t.eventRange.instance),isMirror:n,isStart:t.isStart,isEnd:t.isEnd,el:t.el,view:e}]);return!1!==r&&(r&&!0!==r&&(t.el=r),!0)}));for(var r=0,i=t;r<i.length;r++){var o=i[r];pt(o.el,o)}return t}function pt(e,t){e.fcSeg=t}function ht(e){return e.fcSeg||null}function vt(e,t){return Re(e,function(e){return gt(e,t)})}function gt(e,t){var n=[];return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),Ut(n)}function yt(e,t,n,r){var i=vt(e.defs,t),o={defs:{},instances:{}};for(var a in e.defs){var s=e.defs[a];o.defs[a]=mt(s,i[a],n,r.pluginSystem.hooks.eventDefMutationAppliers,r)}for(var u in e.instances){var l=e.instances[u];s=o.defs[l.defId];o.instances[u]=Et(l,s,i[l.defId],n,r)}return o}function mt(e,t,n,r,i){var o=n.standardProps||{};null==o.hasEnd&&t.durationEditable&&(n.startDelta||n.endDelta)&&(o.hasEnd=!0);var a=Se({},e,o,{ui:Se({},e.ui,o.ui)});n.extendedProps&&(a.extendedProps=Se({},a.extendedProps,n.extendedProps));for(var s=0,u=r;s<u.length;s++){(0,u[s])(a,n,i)}return!a.hasEnd&&i.opt("forceEventDuration")&&(a.hasEnd=!0),a}function Et(e,t,n,r,i){var o=i.dateEnv,a=r.standardProps&&!0===r.standardProps.allDay,s=r.standardProps&&!1===r.standardProps.hasEnd,u=Se({},e);return a&&(u.range=ve(u.range)),r.datesDelta&&n.startEditable&&(u.range={start:o.add(u.range.start,r.datesDelta),end:o.add(u.range.end,r.datesDelta)}),r.startDelta&&n.durationEditable&&(u.range={start:o.add(u.range.start,r.startDelta),end:u.range.end}),r.endDelta&&n.durationEditable&&(u.range={start:u.range.start,end:o.add(u.range.end,r.endDelta)}),s&&(u.range={start:u.range.start,end:i.getDefaultEventEnd(t.allDay,u.range.start)}),t.allDay&&(u.range={start:B(u.range.start),end:B(u.range.end)}),u.range.end<u.range.start&&(u.range.end=i.getDefaultEventEnd(t.allDay,u.range.start)),u}function St(e,t,n,r,i){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,n,r,i,o){if(t&&n===t.latestFetchId){var a=ke(function(e,t,n){var r=n.opt("eventDataTransform"),i=t?t.eventDataTransform:null;return i&&(e=xe(e,i)),r&&(e=xe(e,r)),e}(i,t,o),t.sourceId,o);return r&&(a=_e(a,r,o)),Ne(bt(e,t.sourceId),a)}return e}(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,i);case"ADD_EVENTS":return function(e,t,n,r){n&&(t=_e(t,n,r));return Ne(e,t)}(e,t.eventStore,r?r.activeRange:null,i);case"MERGE_EVENTS":return Ne(e,t.eventStore);case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return r?_e(e,r.activeRange,i):e;case"CHANGE_TIMEZONE":return function(e,t,n){var r=e.defs,i=Re(e.instances,function(e){var i=r[e.defId];return i.allDay||i.recurringDef?e:Se({},e,{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})});return{defs:r,instances:i}}(e,t.oldDateEnv,i.dateEnv);case"MUTATE_EVENTS":return function(e,t,n,r,i){var o=Pe(e,t),a=r?{"":{startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}}:i.eventUiBases;return o=yt(o,a,n,i),Ne(e,o)}(e,t.instanceId,t.mutation,t.fromApi,i);case"REMOVE_EVENT_INSTANCES":return Dt(e,t.instances);case"REMOVE_EVENT_DEF":return ze(e,function(e){return e.defId!==t.defId});case"REMOVE_EVENT_SOURCE":return bt(e,t.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return ze(e,function(e){return!e.sourceId});case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}};case"RESET_EVENTS":return{defs:e.defs,instances:e.instances};default:return e}}function bt(e,t){return ze(e,function(e){return e.sourceId!==t})}function Dt(e,t){return{defs:e.defs,instances:we(e.instances,function(e){return!t[e.instanceId]})}}function Tt(e,t){return wt({eventDrag:e},t)}function wt(e,t){var n=t.view,r=Se({businessHours:n?n.props.businessHours:{defs:{},instances:{}},dateSelection:"",eventStore:t.state.eventStore,eventUiBases:t.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e);return(t.pluginSystem.hooks.isPropsValid||Rt)(r,t)}function Rt(e,t,n,r){return void 0===n&&(n={}),!(e.eventDrag&&!function(e,t,n,r){var i=e.eventDrag,o=i.mutatedEvents,a=o.defs,s=o.instances,u=vt(a,i.isEvent?e.eventUiBases:{"":t.selectionConfig});r&&(u=Re(u,r));var l=Dt(e.eventStore,i.affectedEvents.instances),c=l.defs,d=l.instances,f=vt(c,e.eventUiBases);for(var p in s){var h=s[p],v=h.range,g=u[h.defId],y=a[h.defId];if(!It(g.constraints,v,l,e.businessHours,t))return!1;var m=t.opt("eventOverlap");for(var E in"function"!=typeof m&&(m=null),d){var S=d[E];if(Fe(v,S.range)){var b=f[S.defId].overlap;if(!1===b&&i.isEvent)return!1;if(!1===g.overlap)return!1;if(m&&!m(new ct(t,c[S.defId],S),new ct(t,y,h)))return!1}}for(var D=t.state.eventStore,T=0,w=g.allows;T<w.length;T++){var R=w[T],I=Se({},n,{range:h.range,allDay:y.allDay}),C=D.defs[y.defId],M=D.instances[p],k=void 0;if(k=C?new ct(t,C,M):new ct(t,y),!R(t.buildDateSpanApi(I),k))return!1}}return!0}(e,t,n,r))&&!(e.dateSelection&&!function(e,t,n,r){var i=e.eventStore,o=i.defs,a=i.instances,s=e.dateSelection,u=s.range,l=t.selectionConfig;r&&(l=r(l));if(!It(l.constraints,u,i,e.businessHours,t))return!1;var c=t.opt("selectOverlap");"function"!=typeof c&&(c=null);for(var d in a){var f=a[d];if(Fe(u,f.range)){if(!1===l.overlap)return!1;if(c&&!c(new ct(t,o[f.defId],f)))return!1}}for(var p=0,h=l.allows;p<h.length;p++){var v=h[p],g=Se({},n,s);if(!v(t.buildDateSpanApi(g),null))return!1}return!0}(e,t,n,r))}function It(e,t,n,r,i){for(var o=0,a=e;o<a.length;o++){if(!kt(Ct(a[o],t,n,r,i),t))return!1}return!0}function Ct(e,t,n,r,i){return"businessHours"===e?Mt(_e(r,t,i)):"string"==typeof e?Mt(ze(n,function(t){return t.groupId===e})):"object"==typeof e&&e?Mt(_e(e,t,i)):[]}function Mt(e){var t=e.instances,n=[];for(var r in t)n.push(t[r].range);return n}function kt(e,t){for(var n=0,r=e;n<r.length;n++){if(We(r[n],t))return!0}return!1}function Ot(e){return(e+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function _t(e){var t=[];for(var n in e){var r=e[n];null!=r&&""!==r&&t.push(n+":"+r)}return t.join(";")}function Pt(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var xt={editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:null,overlap:null,allow:null,className:Pt,classNames:Pt,color:String,backgroundColor:String,borderColor:String,textColor:String};function Ht(e,t,n){var r=he(e,xt,{},n),i=function(e,t){return Array.isArray(e)?ke(e,"",t,!0):"object"==typeof e&&e?ke([e],"",t,!0):null!=e?String(e):null}(r.constraint,t);return{startEditable:null!=r.startEditable?r.startEditable:r.editable,durationEditable:null!=r.durationEditable?r.durationEditable:r.editable,constraints:null!=i?[i]:[],overlap:r.overlap,allows:null!=r.allow?[r.allow]:[],backgroundColor:r.backgroundColor||r.color,borderColor:r.borderColor||r.color,textColor:r.textColor,classNames:r.classNames.concat(r.className)}}function Nt(e,t,n,r){var i={},o={};for(var a in xt){var s=e+ue(a);i[a]=t[s],o[s]=!0}if("event"===e&&(i.editable=t.editable),r)for(var a in t)o[a]||(r[a]=t[a]);return Ht(i,n)}var zt={startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};function Ut(e){return e.reduce(Lt,zt)}function Lt(e,t){return{startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var Bt={id:String,groupId:String,title:String,url:String,rendering:String,extendedProps:null},Vt={start:null,date:null,end:null,allDay:null},At=0;function Ft(e,t,n,r){var i=function(e,t){var n=null;if(e){var r=t.state.eventSources[e];n=r.allDayDefault}null==n&&(n=t.opt("allDayDefault"));return n}(t,n),o={},a=function(e,t,n,r,i){for(var o=0;o<r.length;o++){var a={},s=r[o].parse(e,a,n);if(s){var u=a.allDay;return delete a.allDay,null==u&&null==(u=t)&&null==(u=s.allDayGuess)&&(u=!1),Se(i,a),{allDay:u,duration:s.duration,typeData:s.typeData,typeId:o}}}return null}(e,i,n.dateEnv,n.pluginSystem.hooks.recurringTypes,o);if(a)return(s=Wt(o,t,a.allDay,Boolean(a.duration),n)).recurringDef={typeId:a.typeId,typeData:a.typeData,duration:a.duration},{def:s,instance:null};var s,u={},l=function(e,t,n,r,i){var o,a,s=function(e,t){var n=he(e,Vt,{},t);return n.start=null!==n.start?n.start:n.date,delete n.date,n}(e,r),u=s.allDay,l=null,c=!1,d=null;if(o=n.dateEnv.createMarkerMeta(s.start))l=o.marker;else if(!i)return null;null!=s.end&&(a=n.dateEnv.createMarkerMeta(s.end));null==u&&(u=null!=t?t:(!o||o.isTimeUnspecified)&&(!a||a.isTimeUnspecified));u&&l&&(l=B(l));a&&(d=a.marker,u&&(d=B(d)),l&&d<=l&&(d=null));d?c=!0:i||(c=n.opt("forceEventDuration")||!1,d=n.dateEnv.add(l,u?n.defaultAllDayEventDuration:n.defaultTimedEventDuration));return{allDay:u,hasEnd:c,range:{start:l,end:d},forcedStartTzo:o?o.forcedTzo:null,forcedEndTzo:a?a.forcedTzo:null}}(e,i,n,u,r);return l?{def:s=Wt(u,t,l.allDay,l.hasEnd,n),instance:Zt(s.defId,l.range,l.forcedStartTzo,l.forcedEndTzo)}:null}function Wt(e,t,n,r,i){var o={},a=function(e,t,n){var r={},i=he(e,Bt,{},r),o=Ht(r,t,n);return i.publicId=i.id,delete i.id,i.ui=o,i}(e,i,o);a.defId=String(At++),a.sourceId=t,a.allDay=n,a.hasEnd=r;for(var s=0,u=i.pluginSystem.hooks.eventDefParsers;s<u.length;s++){var l={};(0,u[s])(a,o,l),o=l}return a.extendedProps=Se(o,a.extendedProps||{}),Object.freeze(a.ui.classNames),Object.freeze(a.extendedProps),a}function Zt(e,t,n,r){return{instanceId:String(At++),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==r?null:r}}var jt={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],rendering:"inverse-background",classNames:"fc-nonbusiness",groupId:"_businessHours"};function Yt(e,t){return ke(function(e){var t;t=!0===e?[{}]:Array.isArray(e)?e.filter(function(e){return e.daysOfWeek}):"object"==typeof e&&e?[e]:[];return t=t.map(function(e){return Se({},jt,e)})}(e),"",t)}function qt(e,t,n){void 0===n&&(n=[]);var r,i,o=[];function a(){if(i){for(var e=0,n=o;e<n.length;e++){n[e].unrender()}t&&t.apply(r,i),i=null}}function s(){i&&je(i,arguments)||(a(),r=this,i=arguments,e.apply(this,arguments))}s.dependents=o,s.unrender=a;for(var u=0,l=n;u<l.length;u++){l[u].dependents.push(s)}return s}var Gt={defs:{},instances:{}},Xt=function(){function e(){this.getKeysForEventDefs=Ye(this._getKeysForEventDefs),this.splitDateSelection=Ye(this._splitDateSpan),this.splitEventStore=Ye(this._splitEventStore),this.splitIndividualUi=Ye(this._splitIndividualUi),this.splitEventDrag=Ye(this._splitInteraction),this.splitEventResize=Ye(this._splitInteraction),this.eventUiBuilders={}}return e.prototype.splitProps=function(e){var t=this,n=this.getKeyInfo(e),r=this.getKeysForEventDefs(e.eventStore),i=this.splitDateSelection(e.dateSelection),o=this.splitIndividualUi(e.eventUiBases,r),a=this.splitEventStore(e.eventStore,r),s=this.splitEventDrag(e.eventDrag),u=this.splitEventResize(e.eventResize),l={};for(var c in this.eventUiBuilders=Re(n,function(e,n){return t.eventUiBuilders[n]||Ye(Jt)}),n){var d=n[c],f=a[c]||Gt,p=this.eventUiBuilders[c];l[c]={businessHours:d.businessHours||e.businessHours,dateSelection:i[c]||null,eventStore:f,eventUiBases:p(e.eventUiBases[""],d.ui,o[c]),eventSelection:f.instances[e.eventSelection]?e.eventSelection:"",eventDrag:s[c]||null,eventResize:u[c]||null}}return l},e.prototype._splitDateSpan=function(e){var t={};if(e)for(var n=0,r=this.getKeysForDateSpan(e);n<r.length;n++){t[r[n]]=e}return t},e.prototype._getKeysForEventDefs=function(e){var t=this;return Re(e.defs,function(e){return t.getKeysForEventDef(e)})},e.prototype._splitEventStore=function(e,t){var n=e.defs,r=e.instances,i={};for(var o in n)for(var a=0,s=t[o];a<s.length;a++){i[f=s[a]]||(i[f]={defs:{},instances:{}}),i[f].defs[o]=n[o]}for(var u in r)for(var l=r[u],c=0,d=t[l.defId];c<d.length;c++){var f;i[f=d[c]]&&(i[f].instances[u]=l)}return i},e.prototype._splitIndividualUi=function(e,t){var n={};for(var r in e)if(r)for(var i=0,o=t[r];i<o.length;i++){var a=o[i];n[a]||(n[a]={}),n[a][r]=e[r]}return n},e.prototype._splitInteraction=function(e){var t={};if(e){var n=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),r=this._getKeysForEventDefs(e.mutatedEvents),i=this._splitEventStore(e.mutatedEvents,r),o=function(r){t[r]||(t[r]={affectedEvents:n[r]||Gt,mutatedEvents:i[r]||Gt,isEvent:e.isEvent,origSeg:e.origSeg})};for(var a in n)o(a);for(var a in i)o(a)}return t},e}();function Jt(e,t,n){var r=[];e&&r.push(e),t&&r.push(t);var i={"":Ut(r)};return n&&Se(i,n),i}function Kt(e,t,n,r){var i,o,a,s,u=e.dateEnv;return t instanceof Date?i=t:(i=t.date,o=t.type,a=t.forceOff),s={date:u.formatIso(i,{omitTime:!0}),type:o||"day"},"string"==typeof n&&(r=n,n=null),n=n?" "+function(e){var t=[];for(var n in e){var r=e[n];null!=r&&t.push(n+'="'+Ot(r)+'"')}return t.join(" ")}(n):"",r=r||"",!a&&e.opt("navLinks")?"<a"+n+' data-goto="'+Ot(JSON.stringify(s))+'">'+r+"</a>":"<span"+n+">"+r+"</span>"}function Qt(e,t,n,r){var i,o,a=n.calendar,s=n.view,u=n.theme,l=n.dateEnv,c=[];return Ze(t.activeRange,e)?(c.push("fc-"+P[e.getUTCDay()]),s.opt("monthMode")&&l.getMonth(e)!==l.getMonth(t.currentRange.start)&&c.push("fc-other-month"),o=x(i=B(a.getNow()),1),e<i?c.push("fc-past"):e>=o?c.push("fc-future"):(c.push("fc-today"),!0!==r&&c.push(u.getClass("today")))):c.push("fc-disabled-day"),c}function $t(e,t,n){var r=!1,i=function(){r||(r=!0,t.apply(this,arguments))},o=function(){r||(r=!0,n&&n.apply(this,arguments))},a=e(i,o);a&&"function"==typeof a.then&&a.then(i,o)}var en=function(){function e(){}return e.mixInto=function(e){this.mixIntoObj(e.prototype)},e.mixIntoObj=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach(function(n){e[n]||(e[n]=t.prototype[n])})},e.mixOver=function(e){var t=this;Object.getOwnPropertyNames(this.prototype).forEach(function(n){e.prototype[n]=t.prototype[n]})},e}(),tn=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ee(t,e),t.prototype.on=function(e,t){return nn(this._handlers||(this._handlers={}),e,t),this},t.prototype.one=function(e,t){return nn(this._oneHandlers||(this._oneHandlers={}),e,t),this},t.prototype.off=function(e,t){return this._handlers&&rn(this._handlers,e,t),this._oneHandlers&&rn(this._oneHandlers,e,t),this},t.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return this.triggerWith(e,this,t),this},t.prototype.triggerWith=function(e,t,n){return this._handlers&&de(this._handlers[e],t,n),this._oneHandlers&&(de(this._oneHandlers[e],t,n),delete this._oneHandlers[e]),this},t.prototype.hasHandlers=function(e){return this._handlers&&this._handlers[e]&&this._handlers[e].length||this._oneHandlers&&this._oneHandlers[e]&&this._oneHandlers[e].length},t}(en);function nn(e,t,n){(e[t]||(e[t]=[])).push(n)}function rn(e,t,n){n?e[t]&&(e[t]=e[t].filter(function(e){return e!==n})):delete e[t]}var on=function(){function e(e,t,n,r){this.originEl=e,this.els=t,this.isHorizontal=n,this.isVertical=r}return e.prototype.build=function(){var e=this.originEl,t=this.originClientRect=e.getBoundingClientRect();this.isHorizontal&&this.buildElHorizontals(t.left),this.isVertical&&this.buildElVerticals(t.top)},e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect();t.push(o.left-e),n.push(o.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],r=0,i=this.els;r<i.length;r++){var o=i[r].getBoundingClientRect();t.push(o.top-e),n.push(o.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,r=this.rights,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,r=this.bottoms,i=n.length;for(t=0;t<i;t++)if(e>=n[t]&&e<r[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),an=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),sn=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return Ee(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(an),un=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ee(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(an),ln=function(e){function t(t,n){var i=e.call(this,r("div",{className:"fc-scroller"}))||this;return i.overflowX=t,i.overflowY=n,i.applyOverflow(),i}return Ee(t,e),t.prototype.clear=function(){this.setHeight("auto"),this.applyOverflow()},t.prototype.destroy=function(){c(this.el)},t.prototype.applyOverflow=function(){y(this.el,{overflowX:this.overflowX,overflowY:this.overflowY})},t.prototype.lockOverflow=function(e){var t=this.overflowX,n=this.overflowY;e=e||this.getScrollbarWidths(),"auto"===t&&(t=e.bottom||this.canScrollHorizontally()?"scroll":"hidden"),"auto"===n&&(n=e.left||e.right||this.canScrollVertically()?"scroll":"hidden"),y(this.el,{overflowX:t,overflowY:n})},t.prototype.setHeight=function(e){m(this.el,"height",e)},t.prototype.getScrollbarWidths=function(){var e=T(this.el);return{left:e.scrollbarLeft,right:e.scrollbarRight,bottom:e.scrollbarBottom}},t}(sn),cn=function(){function e(e){this.calendarOptions=e,this.processIconOverride()}return e.prototype.processIconOverride=function(){this.iconOverrideOption&&this.setIconOverride(this.calendarOptions[this.iconOverrideOption])},e.prototype.setIconOverride=function(e){var t,n;if("object"==typeof e&&e){for(n in t=Se({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n]);this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix;return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e){var t=this.iconClasses[e];return t?this.baseIconClass+" "+t:""},e.prototype.getCustomButtonIconClass=function(e){var t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}();cn.prototype.classes={},cn.prototype.iconClasses={},cn.prototype.baseIconClass="",cn.prototype.iconOverridePrefix="";var dn=0,fn=function(){function e(e,t){t&&(e.view=this),this.uid=String(dn++),this.context=e,this.dateEnv=e.dateEnv,this.theme=e.theme,this.view=e.view,this.calendar=e.calendar,this.isRtl="rtl"===this.opt("dir")}return e.addEqualityFuncs=function(e){this.prototype.equalityFuncs=Se({},this.prototype.equalityFuncs,e)},e.prototype.opt=function(e){return this.context.options[e]},e.prototype.receiveProps=function(e){var t=function(e,t,n){var r={},i=!1;for(var o in t)o in e&&(e[o]===t[o]||n[o]&&n[o](e[o],t[o]))?r[o]=e[o]:(r[o]=t[o],i=!0);for(var o in e)if(!(o in t)){i=!0;break}return{anyChanges:i,comboProps:r}}(this.props||{},e,this.equalityFuncs),n=t.anyChanges,r=t.comboProps;this.props=r,n&&this.render(r)},e.prototype.render=function(e){},e.prototype.destroy=function(){},e}();fn.prototype.equalityFuncs={};var pn=function(e){function t(t,n,r){var i=e.call(this,t,r)||this;return i.el=n,i}return Ee(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),c(this.el)},t.prototype.buildPositionCaches=function(){},t.prototype.queryHit=function(e,t,n,r){return null},t.prototype.isInteractionValid=function(e){var t=this.calendar,n=this.props.dateProfile,r=e.mutatedEvents.instances;if(n)for(var i in r)if(!We(n.validRange,r[i].range))return!1;return Tt(e,t)},t.prototype.isDateSelectionValid=function(e){var t,n,r=this.props.dateProfile;return!(r&&!We(r.validRange,e.range))&&(t=e,n=this.calendar,wt({dateSelection:t},n))},t.prototype.publiclyTrigger=function(e,t){return this.calendar.publiclyTrigger(e,t)},t.prototype.publiclyTriggerAfterSizing=function(e,t){return this.calendar.publiclyTriggerAfterSizing(e,t)},t.prototype.hasPublicHandlers=function(e){return this.calendar.hasPublicHandlers(e)},t.prototype.triggerRenderedSegs=function(e,t){var n=this.calendar;if(this.hasPublicHandlers("eventPositioned"))for(var r=0,i=e;r<i.length;r++){var o=i[r];this.publiclyTriggerAfterSizing("eventPositioned",[{event:new ct(n,o.eventRange.def,o.eventRange.instance),isMirror:t,isStart:o.isStart,isEnd:o.isEnd,el:o.el,view:this}])}n.state.loadingLevel||(n.afterSizingTriggers._eventsPositioned=[null])},t.prototype.triggerWillRemoveSegs=function(e,t){for(var n=this.calendar,r=0,i=e;r<i.length;r++){var o=i[r];n.trigger("eventElRemove",o.el)}if(this.hasPublicHandlers("eventDestroy"))for(var a=0,s=e;a<s.length;a++){o=s[a];this.publiclyTrigger("eventDestroy",[{event:new ct(n,o.eventRange.def,o.eventRange.instance),isMirror:t,el:o.el,view:this}])}},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!p(e,".fc-mirror")&&(this.isPopover()||!this.isInPopover(e))},t.prototype.isValidDateDownEl=function(e){var t=p(e,this.fgSegSelector);return(!t||t.classList.contains("fc-mirror"))&&!p(e,".fc-more")&&!p(e,"a[data-goto]")&&!this.isInPopover(e)},t.prototype.isPopover=function(){return this.el.classList.contains("fc-popover")},t.prototype.isInPopover=function(e){return Boolean(p(e,".fc-popover"))},t}(fn);pn.prototype.fgSegSelector=".fc-event-container > *",pn.prototype.bgSegSelector=".fc-bgevent:not(.fc-nonbusiness)";var hn=0;function vn(e){return{id:String(hn++),deps:e.deps||[],reducers:e.reducers||[],eventDefParsers:e.eventDefParsers||[],isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],eventResizeJoinTransforms:e.eventResizeJoinTransforms||[],viewContainerModifiers:e.viewContainerModifiers||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,defaultView:e.defaultView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{}}}var gn=function(){function e(){this.hooks={reducers:[],eventDefParsers:[],isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],eventResizeJoinTransforms:[],viewContainerModifiers:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,defaultView:"",elementDraggingImpl:null,optionChangeHandlers:{}},this.addedHash={}}return e.prototype.add=function(e){if(!this.addedHash[e.id]){this.addedHash[e.id]=!0;for(var t=0,n=e.deps;t<n.length;t++){var r=n[t];this.add(r)}this.hooks=(i=this.hooks,o=e,{reducers:i.reducers.concat(o.reducers),eventDefParsers:i.eventDefParsers.concat(o.eventDefParsers),isDraggableTransformers:i.isDraggableTransformers.concat(o.isDraggableTransformers),eventDragMutationMassagers:i.eventDragMutationMassagers.concat(o.eventDragMutationMassagers),eventDefMutationAppliers:i.eventDefMutationAppliers.concat(o.eventDefMutationAppliers),dateSelectionTransformers:i.dateSelectionTransformers.concat(o.dateSelectionTransformers),datePointTransforms:i.datePointTransforms.concat(o.datePointTransforms),dateSpanTransforms:i.dateSpanTransforms.concat(o.dateSpanTransforms),views:Se({},i.views,o.views),viewPropsTransformers:i.viewPropsTransformers.concat(o.viewPropsTransformers),isPropsValid:o.isPropsValid||i.isPropsValid,externalDefTransforms:i.externalDefTransforms.concat(o.externalDefTransforms),eventResizeJoinTransforms:i.eventResizeJoinTransforms.concat(o.eventResizeJoinTransforms),viewContainerModifiers:i.viewContainerModifiers.concat(o.viewContainerModifiers),eventDropTransformers:i.eventDropTransformers.concat(o.eventDropTransformers),calendarInteractions:i.calendarInteractions.concat(o.calendarInteractions),componentInteractions:i.componentInteractions.concat(o.componentInteractions),themeClasses:Se({},i.themeClasses,o.themeClasses),eventSourceDefs:i.eventSourceDefs.concat(o.eventSourceDefs),cmdFormatter:o.cmdFormatter||i.cmdFormatter,recurringTypes:i.recurringTypes.concat(o.recurringTypes),namedTimeZonedImpl:o.namedTimeZonedImpl||i.namedTimeZonedImpl,defaultView:i.defaultView||o.defaultView,elementDraggingImpl:i.elementDraggingImpl||o.elementDraggingImpl,optionChangeHandlers:Se({},i.optionChangeHandlers,o.optionChangeHandlers)})}var i,o},e}();var yn=vn({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e)?e:Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),mn=vn({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e?e:"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var r=e.calendar.dateEnv;$t(e.eventSource.meta.bind(null,{start:r.toDate(e.range.start),end:r.toDate(e.range.end),startStr:r.formatIso(e.range.start),endStr:r.formatIso(e.range.end),timeZone:r.timeZone}),function(e){t({rawEvents:e})},n)}}]});function En(e,t,n,r,i){var o=null;"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+Sn(t)}(t,n):o=Sn(n);var a=new XMLHttpRequest;a.open(e,t,!0),"GET"!==e&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onload=function(){if(a.status>=200&&a.status<400)try{var e=JSON.parse(a.responseText);r(e,a)}catch(e){i("Failure parsing JSON",a)}else i("Request failed",a)},a.onerror=function(){i("Request failed",a)},a.send(o)}function Sn(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}var bn=vn({eventSourceDefs:[{parseMeta:function(e){if("string"==typeof e)e={url:e};else if(!e||"object"!=typeof e||!e.url)return null;return{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}},fetch:function(e,t,n){var r=e.eventSource.meta,i=function(e,t,n){var r,i,o,a,s=n.dateEnv,u={};null==(r=e.startParam)&&(r=n.opt("startParam"));null==(i=e.endParam)&&(i=n.opt("endParam"));null==(o=e.timeZoneParam)&&(o=n.opt("timeZoneParam"));a="function"==typeof e.extraParams?e.extraParams():e.extraParams||{};Se(u,a),u[r]=s.formatIso(t.start),u[i]=s.formatIso(t.end),"local"!==s.timeZone&&(u[o]=s.timeZone);return u}(r,e.range,e.calendar);En(r.method,r.url,i,function(e,n){t({rawEvents:e,xhr:n})},function(e,t){n({message:e,xhr:t})})}}]});var Dn=vn({recurringTypes:[{parse:function(e,t,n){var r,i,o=n.createMarker.bind(n),a=he(e,{daysOfWeek:null,startTime:J,endTime:J,startRecur:o,endRecur:o},{},t),s=!1;for(var u in a)if(null!=a[u]){s=!0;break}if(s){var l=null;return"duration"in t&&(l=J(t.duration),delete t.duration),!l&&a.startTime&&a.endTime&&(r=a.endTime,i=a.startTime,l={years:r.years-i.years,months:r.months-i.months,days:r.days-i.days,milliseconds:r.milliseconds-i.milliseconds}),{allDayGuess:Boolean(!a.startTime&&!a.endTime),duration:l,typeData:a}}return null},expand:function(e,t,n){var r=Ve(t,{start:e.startRecur,end:e.endRecur});return r?function(e,t,n,r){var i=e?Ie(e):null,o=B(n.start),a=n.end,s=[];for(;o<a;){var u=void 0;i&&!i[o.getUTCDay()]||(u=t?r.add(o,t):o,s.push(u)),o=x(o,1)}return s}(e.daysOfWeek,e.startTime,r,n):[]}}]});var Tn=vn({optionChangeHandlers:{events:function(e,t,n){wn([e],t,n)},eventSources:wn,plugins:function(e,t){t.addPluginInputs(e)}}});function wn(e,t,n){for(var r=Ce(t.state.eventSources),i=[],o=0,a=e;o<a.length;o++){for(var s=a[o],u=!1,l=0;l<r.length;l++)if(n(r[l]._raw,s)){r.splice(l,1),u=!0;break}u||i.push(s)}for(var c=0,d=r;c<d.length;c++){var f=d[c];t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:f.sourceId})}for(var p=0,h=i;p<h.length;p++){var v=h[p];t.addEventSource(v)}}var Rn={defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",columnHeader:!0,defaultView:"",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,scrollTime:"06:00:00",minTime:"00:00:00",maxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",timeGridEventMinHeight:0,themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",eventLimit:!1,eventLimitClick:"popover",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5},In={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"}},Cn=["header","footer","buttonText","buttonIcons"];var Mn=[yn,mn,bn,Dn,Tn];var kn={code:"en",week:{dow:0,doy:4},dir:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekLabel:"W",allDayText:"all-day",eventLimitText:"more",noEventsMessage:"No events to display"};function On(e){for(var t=e.length>0?e[0].code:"en",n=window.FullCalendarLocalesAll||[],r=window.FullCalendarLocales||{},i=n.concat(Ce(r),e),o={en:kn},a=0,s=i;a<s.length;a++){var u=s[a];o[u.code]=u}return{map:o,defaultCode:t}}function _n(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var n=[].concat(e||[]),r=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n].toLocaleLowerCase().split("-"),i=r.length;i>0;i--){var o=r.slice(0,i).join("-");if(t[o])return t[o]}return null}(n,t)||kn;return Pn(e,n,r)}(e,t):Pn(e.code,[e.code],e)}function Pn(e,t,n){var r=Te([kn,n],["buttonText"]);delete r.code;var i=r.week;return delete r.week,{codeArg:e,codes:t,week:i,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}var xn=function(){function e(e){this.overrides=Se({},e),this.dynamicOverrides={},this.compute()}return e.prototype.mutate=function(e,t,n){var r=n?this.dynamicOverrides:this.overrides;Se(r,e);for(var i=0,o=t;i<o.length;i++){delete r[o[i]]}this.compute()},e.prototype.compute=function(){var e=fe(this.dynamicOverrides.locales,this.overrides.locales,Rn.locales),t=fe(this.dynamicOverrides.locale,this.overrides.locale,Rn.locale),n=On(e),r=_n(t||n.defaultCode,n.map).options,i="rtl"===fe(this.dynamicOverrides.dir,this.overrides.dir,r.dir)?In:{};this.dirDefaults=i,this.localeDefaults=r,this.computed=Te([Rn,i,r,this.overrides,this.dynamicOverrides],Cn)},e}(),Hn={};var Nn,zn=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return j(e)},e.prototype.markerToArray=function(e){return Z(e)},e}();Nn=zn,Hn["gregory"]=Nn;var Un=/^\s*(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;function Ln(e){var t=Un.exec(e);if(t){var n=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0));if(Y(n)){var r=null;return t[13]&&(r=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:n,isTimeUnspecified:!t[6],timeZoneOffset:r}}}return null}var Bn=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t;e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new Hn[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekLabel=null!=e.weekLabel?e.weekLabel:e.locale.options.weekLabel,this.cmdFormatter=e.cmdFormatter}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e);return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):j(F(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e);var t=null;return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=j(e)),null!==t&&Y(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=Ln(e);if(null===t)return null;var n=t.marker,r=null;return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem;return q(e)===q(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem;return q(e)===q(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t);return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:null!==(n=U(e,t))?{unit:"week",value:n}:null!==(n=L(e,t))?{unit:"day",value:n}:ce(n=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t))?{unit:"hour",value:n}:ce(n=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t))?{unit:"minute",value:n}:ce(n=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t))?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}},e.prototype.countDurationsBetween=function(e,t,n){var r;return n.years&&null!==(r=this.diffWholeYears(e,t))?r/(ee(n)/365):n.months&&null!==(r=this.diffWholeMonths(e,t))?r/function(e){return ee(e)/30}(n):n.days&&null!==(r=L(e,t))?r/ee(n):(t.valueOf()-e.valueOf())/te(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?B(e):"hour"===t?function(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return j([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):void 0},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,n){var r=e.getUTCFullYear(),i=V(e,r,t,n);if(i<1)return V(e,r-1,t,n);var o=V(e,r+1,t,n);return o>=1?Math.min(i,o):i}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,r){return void 0===r&&(r={}),r.isEndExclusive&&(t=H(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=r.forcedStartTzo?r.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=r.forcedEndTzo?r.forcedEndTzo:this.offsetForMarker(t)},this)},e.prototype.formatIso=function(e,t){void 0===t&&(t={});var n=null;return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),function(e,t,n){void 0===n&&(n=!1);var r=e.toISOString();return r=r.replace(".000",""),n&&(r=r.replace("T00:00:00Z","")),r.length>10&&(null==t?r=r.replace("Z",""):0!==t&&(r=r.replace("Z",at(t,!0)))),r}(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?j(F(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?j(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-W(Z(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(Z(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?W(Z(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(Z(e))*60):new Date(e.valueOf()-(t||0))},e}(),Vn={id:String,allDayDefault:Boolean,eventDataTransform:Function,success:Function,failure:Function},An=0;function Fn(e,t){return!t.pluginSystem.hooks.eventSourceDefs[e.sourceDefId].ignoreRange}function Wn(e,t){for(var n=t.pluginSystem.hooks.eventSourceDefs,r=n.length-1;r>=0;r--){var i=n[r].parseMeta(e);if(i){var o=Zn("object"==typeof e?e:{},i,r,t);return o._raw=e,o}}return null}function Zn(e,t,n,r){var i={},o=he(e,Vn,{},i),a={},s=Ht(i,r,a);return o.isFetching=!1,o.latestFetchId="",o.fetchRange=null,o.publicId=String(e.id||""),o.sourceId=String(An++),o.sourceDefId=n,o.meta=t,o.ui=s,o.extendedProps=a,o}function jn(e,t,n,r){switch(t.type){case"ADD_EVENT_SOURCES":return function(e,t,n,r){for(var i={},o=0,a=t;o<a.length;o++){var s=a[o];i[s.sourceId]=s}n&&(i=qn(i,n,r));return Se({},e,i)}(e,t.sources,n?n.activeRange:null,r);case"REMOVE_EVENT_SOURCE":return i=e,o=t.sourceId,we(i,function(e){return e.sourceId!==o});case"PREV":case"NEXT":case"SET_DATE":case"SET_VIEW_TYPE":return n?qn(e,n.activeRange,r):e;case"FETCH_EVENT_SOURCES":case"CHANGE_TIMEZONE":return Gn(e,t.sourceIds?Ie(t.sourceIds):function(e,t){return we(e,function(e){return Fn(e,t)})}(e,r),n?n.activeRange:null,r);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,n,r){var i,o=e[t];if(o&&n===o.latestFetchId)return Se({},e,((i={})[t]=Se({},o,{isFetching:!1,fetchRange:r}),i));return e}(e,t.sourceId,t.fetchId,t.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return e}var i,o}var Yn=0;function qn(e,t,n){return Gn(e,we(e,function(e){return function(e,t,n){return Fn(e,n)?!n.opt("lazyFetching")||!e.fetchRange||t.start<e.fetchRange.start||t.end>e.fetchRange.end:!e.latestFetchId}(e,t,n)}),t,n)}function Gn(e,t,n,r){var i={};for(var o in e){var a=e[o];t[o]?i[o]=Xn(a,n,r):i[o]=a}return i}function Xn(e,t,n){var r=n.pluginSystem.hooks.eventSourceDefs[e.sourceDefId],i=String(Yn++);return r.fetch({eventSource:e,calendar:n,range:t},function(r){var o,a,s=r.rawEvents,u=n.opt("eventSourceSuccess");e.success&&(a=e.success(s,r.xhr)),u&&(o=u(s,r.xhr)),s=a||o||s,n.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:i,fetchRange:t,rawEvents:s})},function(r){var o=n.opt("eventSourceFailure");console.warn(r.message,r),e.failure&&e.failure(r),o&&o(r),n.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:i,fetchRange:t,error:r})}),Se({},e,{isFetching:!0,latestFetchId:i})}var Jn=function(){function e(e,t){this.viewSpec=e,this.options=e.options,this.dateEnv=t.dateEnv,this.calendar=t,this.initHiddenDays()}return e.prototype.buildPrev=function(e,t){var n=this.dateEnv,r=n.subtract(n.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(r,-1)},e.prototype.buildNext=function(e,t){var n=this.dateEnv,r=n.add(n.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(r,1)},e.prototype.build=function(e,t,n){var r;void 0===n&&(n=!1);var i,o,a,s,u,l,c,d,f;return r=this.buildValidRange(),r=this.trimHiddenDays(r),n&&(d=e,e=null!=(f=r).start&&d<f.start?f.start:null!=f.end&&d>=f.end?new Date(f.end.valueOf()-1):d),a=this.buildCurrentRangeInfo(e,t),s=/^(year|month|week|day)$/.test(a.unit),u=this.buildRenderRange(this.trimHiddenDays(a.range),a.unit,s),l=u=this.trimHiddenDays(u),this.options.showNonCurrentDates||(l=Ve(l,a.range)),i=J(this.options.minTime),o=J(this.options.maxTime),l=Ve(l=this.adjustActiveRange(l,i,o),r),c=Fe(a.range,r),{validRange:r,currentRange:a.range,currentRangeUnit:a.unit,isRangeAllDay:s,activeRange:l,renderRange:u,minTime:i,maxTime:o,isValid:c,dateIncrement:this.buildDateIncrement(a.duration)}},e.prototype.buildValidRange=function(){return this.getRangeOption("validRange",this.calendar.getNow())||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,r=this.viewSpec,i=this.dateEnv,o=null,a=null,s=null;return r.duration?(o=r.duration,a=r.durationUnit,s=this.buildRangeFromDuration(e,t,o,a)):(n=this.options.dayCount)?(a="day",s=this.buildRangeFromDayCount(e,t,n)):(s=this.buildCustomVisibleRange(e))?a=i.greatestWholeUnit(s.start,s.end).unit:(a=ne(o=this.getFallbackDuration()).unit,s=this.buildRangeFromDuration(e,t,o,a)),{duration:o,unit:a,range:s}},e.prototype.getFallbackDuration=function(){return J({day:1})},e.prototype.adjustActiveRange=function(e,t,n){var r=this.dateEnv,i=e.start,o=e.end;return this.viewSpec.class.prototype.usesMinMaxTime&&(ee(t)<0&&(i=B(i),i=r.add(i,t)),ee(n)>1&&(o=x(o=B(o),-1),o=r.add(o,n))),{start:i,end:o}},e.prototype.buildRangeFromDuration=function(e,t,n,r){var i,o,a,s,u,l=this.dateEnv,c=this.options.dateAlignment;function d(){a=l.startOf(e,c),s=l.add(a,n),u={start:a,end:s}}return c||((i=this.options.dateIncrement)?(o=J(i),c=te(o)<te(n)?ne(o,!Q(i)).unit:r):c=r),ee(n)<=1&&this.isHiddenDay(a)&&(a=B(a=this.skipHiddenDays(a,t))),d(),this.trimHiddenDays(u)||(e=this.skipHiddenDays(e,t),d()),u},e.prototype.buildRangeFromDayCount=function(e,t,n){var r,i=this.dateEnv,o=this.options.dateAlignment,a=0,s=e;o&&(s=i.startOf(s,o)),s=B(s),r=s=this.skipHiddenDays(s,t);do{r=x(r,1),this.isHiddenDay(r)||a++}while(a<n);return{start:s,end:r}},e.prototype.buildCustomVisibleRange=function(e){var t=this.dateEnv,n=this.getRangeOption("visibleRange",t.toDate(e));return!n||null!=n.start&&null!=n.end?n:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t,n=this.options.dateIncrement;return n?J(n):(t=this.options.dateAlignment)?J(1,t):e||J({days:1})},e.prototype.getRangeOption=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=this.options[e];return"function"==typeof r&&(r=r.apply(null,t)),r&&(r=Ue(r,this.dateEnv)),r&&(r=ge(r)),r},e.prototype.initHiddenDays=function(){var e,t=this.options.hiddenDays||[],n=[],r=0;for(!1===this.options.weekends&&t.push(0,6),e=0;e<7;e++)(n[e]=-1!==t.indexOf(e))||r++;if(!r)throw new Error("invalid hiddenDays");this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end;return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=x(e,t);return e},e}();function Kn(e,t,n){for(var r=function(e,t){switch(t.type){case"SET_VIEW_TYPE":return t.viewType;default:return e}}(e.viewType,t),i=function(e,t,n,r,i){var o;switch(t.type){case"PREV":o=i.dateProfileGenerators[r].buildPrev(e,n);break;case"NEXT":o=i.dateProfileGenerators[r].buildNext(e,n);break;case"SET_DATE":e.activeRange&&Ze(e.currentRange,t.dateMarker)||(o=i.dateProfileGenerators[r].build(t.dateMarker,void 0,!0));break;case"SET_VIEW_TYPE":var a=i.dateProfileGenerators[r];if(!a)throw new Error(r?'The FullCalendar view "'+r+'" does not exist. Make sure your plugins are loaded correctly.':"No available FullCalendar view plugins.");o=a.build(t.dateMarker||n,void 0,!0)}return!o||!o.isValid||e&&(s=e,u=o,Ae(s.validRange,u.validRange)&&Ae(s.activeRange,u.activeRange)&&Ae(s.renderRange,u.renderRange)&&$(s.minTime,u.minTime)&&$(s.maxTime,u.maxTime))?e:o;var s,u}(e.dateProfile,t,e.currentDate,r,n),o=jn(e.eventSources,t,i,n),a=Se({},e,{viewType:r,dateProfile:i,currentDate:Qn(e.currentDate,t,i),eventSources:o,eventStore:St(e.eventStore,t,o,i,n),dateSelection:$n(e.dateSelection,t,n),eventSelection:er(e.eventSelection,t),eventDrag:tr(e.eventDrag,t,o,n),eventResize:nr(e.eventResize,t,o,n),eventSourceLoadingLevel:rr(o),loadingLevel:rr(o)}),s=0,u=n.pluginSystem.hooks.reducers;s<u.length;s++){a=(0,u[s])(a,t,n)}return a}function Qn(e,t,n){switch(t.type){case"PREV":case"NEXT":return Ze(n.currentRange,e)?e:n.currentRange.start;case"SET_DATE":case"SET_VIEW_TYPE":var r=t.dateMarker||e;return n.activeRange&&!Ze(n.activeRange,r)?n.currentRange.start:r;default:return e}}function $n(e,t,n){switch(t.type){case"SELECT_DATES":return t.selection;case"UNSELECT_DATES":return null;default:return e}}function er(e,t){switch(t.type){case"SELECT_EVENT":return t.eventInstanceId;case"UNSELECT_EVENT":return"";default:return e}}function tr(e,t,n,r){switch(t.type){case"SET_EVENT_DRAG":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_DRAG":return null;default:return e}}function nr(e,t,n,r){switch(t.type){case"SET_EVENT_RESIZE":var i=t.state;return{affectedEvents:i.affectedEvents,mutatedEvents:i.mutatedEvents,isEvent:i.isEvent,origSeg:i.origSeg};case"UNSET_EVENT_RESIZE":return null;default:return e}}function rr(e){var t=0;for(var n in e)e[n].isFetching&&t++;return t}var ir={start:null,end:null,allDay:Boolean};function or(e,t,n){var r=function(e,t){var n={},r=he(e,ir,{},n),i=r.start?t.createMarkerMeta(r.start):null,o=r.end?t.createMarkerMeta(r.end):null,a=r.allDay;null==a&&(a=i&&i.isTimeUnspecified&&(!o||o.isTimeUnspecified));return n.range={start:i?i.marker:null,end:o?o.marker:null},n.allDay=a,n}(e,t),i=r.range;if(!i.start)return null;if(!i.end){if(null==n)return null;i.end=t.add(i.start,n)}return r}function ar(e,t,n){var r=Wt({editable:!1},"",e.allDay,!0,n);return{def:r,ui:gt(r,t),instance:Zt(r.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}function sr(e,t,n,r){if(t[e])return t[e];var i=function(e,t,n,r){var i=n[e],o=r[e],a=function(e){return i&&null!==i[e]?i[e]:o&&null!==o[e]?o[e]:null},s=a("class"),u=a("superType");!u&&s&&(u=ur(s,r)||ur(s,n));var l=null;if(u){if(u===e)throw new Error("Can't have a custom view type that references itself");l=sr(u,t,n,r)}!s&&l&&(s=l.class);if(!s)return null;return{type:e,class:s,defaults:Se({},l?l.defaults:{},i?i.options:{}),overrides:Se({},l?l.overrides:{},o?o.options:{})}}(e,t,n,r);return i&&(t[e]=i),i}function ur(e,t){var n=Object.getPrototypeOf(e.prototype);for(var r in t){var i=t[r];if(i.class&&i.class.prototype===n)return r}return""}function lr(e){return Re(e,dr)}var cr={type:String,class:null};function dr(e){"function"==typeof e&&(e={class:e});var t={},n=he(e,cr,{},t);return{superType:n.type,class:n.class,options:t}}function fr(e,t){var n=lr(e),r=lr(t.overrides.views);return Re(function(e,t){var n,r={};for(n in e)sr(n,r,e,t);for(n in t)sr(n,r,e,t);return r}(n,r),function(e){return function(e,t,n){var r=e.overrides.duration||e.defaults.duration||n.dynamicOverrides.duration||n.overrides.duration,i=null,o="",a="",s={};if(r&&(i=J(r))){var u=ne(i,!Q(r));o=u.unit,1===u.value&&(a=o,s=t[o]?t[o].options:{})}var l=function(t){var n=t.buttonText||{},r=e.defaults.buttonTextKey;return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[a]?n[a]:void 0};return{type:e.type,class:e.class,duration:i,durationUnit:o,singleUnit:a,options:Se({},Rn,e.defaults,n.dirDefaults,n.localeDefaults,n.overrides,s,e.overrides,n.dynamicOverrides),buttonTextOverride:l(n.dynamicOverrides)||l(n.overrides)||e.overrides.buttonText,buttonTextDefault:l(n.localeDefaults)||l(n.dirDefaults)||e.defaults.buttonText||l(Rn)||e.type}}(e,r,t)})}var pr=function(e){function t(t,n){var i=e.call(this,t)||this;return i._renderLayout=qt(i.renderLayout,i.unrenderLayout),i._updateTitle=qt(i.updateTitle,null,[i._renderLayout]),i._updateActiveButton=qt(i.updateActiveButton,null,[i._renderLayout]),i._updateToday=qt(i.updateToday,null,[i._renderLayout]),i._updatePrev=qt(i.updatePrev,null,[i._renderLayout]),i._updateNext=qt(i.updateNext,null,[i._renderLayout]),i.el=r("div",{className:"fc-toolbar "+n}),i}return Ee(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this._renderLayout.unrender(),c(this.el)},t.prototype.render=function(e){this._renderLayout(e.layout),this._updateTitle(e.title),this._updateActiveButton(e.activeButton),this._updateToday(e.isTodayEnabled),this._updatePrev(e.isPrevEnabled),this._updateNext(e.isNextEnabled)},t.prototype.renderLayout=function(e){var t=this.el;this.viewsWithButtons=[],s(t,this.renderSection("left",e.left)),s(t,this.renderSection("center",e.center)),s(t,this.renderSection("right",e.right))},t.prototype.unrenderLayout=function(){this.el.innerHTML=""},t.prototype.renderSection=function(e,t){var n=this,o=this.theme,a=this.calendar,u=a.optionsManager,l=a.viewSpecs,c=r("div",{className:"fc-"+e}),d=u.computed.customButtons||{},f=u.overrides.buttonText||{},p=u.computed.buttonText||{};return t&&t.split(" ").forEach(function(e,t){var r,u=[],h=!0;if(e.split(",").forEach(function(e,t){var r,s,c,v,g,y,m,E,S;"title"===e?(u.push(i("<h2>&nbsp;</h2>")),h=!1):((r=d[e])?(c=function(e){r.click&&r.click.call(E,e)},(v=o.getCustomButtonIconClass(r))||(v=o.getIconClass(e))||(g=r.text)):(s=l[e])?(n.viewsWithButtons.push(e),c=function(){a.changeView(e)},(g=s.buttonTextOverride)||(v=o.getIconClass(e))||(g=s.buttonTextDefault)):a[e]&&(c=function(){a[e]()},(g=f[e])||(v=o.getIconClass(e))||(g=p[e])),c&&(m=["fc-"+e+"-button",o.getClass("button")],g?(y=Ot(g),S=""):v&&(y="<span class='"+v+"'></span>",S=' aria-label="'+e+'"'),(E=i('<button type="button" class="'+m.join(" ")+'"'+S+">"+y+"</button>")).addEventListener("click",c),u.push(E)))}),u.length>1){r=document.createElement("div");var v=o.getClass("buttonGroup");h&&v&&r.classList.add(v),s(r,u),c.appendChild(r)}else s(c,u)}),c},t.prototype.updateToday=function(e){this.toggleButtonEnabled("today",e)},t.prototype.updatePrev=function(e){this.toggleButtonEnabled("prev",e)},t.prototype.updateNext=function(e){this.toggleButtonEnabled("next",e)},t.prototype.updateTitle=function(e){v(this.el,"h2").forEach(function(t){t.innerText=e})},t.prototype.updateActiveButton=function(e){var t=this.theme.getClass("buttonActive");v(this.el,"button").forEach(function(n){e&&n.classList.contains("fc-"+e+"-button")?n.classList.add(t):n.classList.remove(t)})},t.prototype.toggleButtonEnabled=function(e,t){v(this.el,".fc-"+e+"-button").forEach(function(e){e.disabled=!t})},t}(fn),hr=function(e){function t(t,n){var i=e.call(this,t)||this;i._renderToolbars=qt(i.renderToolbars),i.buildViewPropTransformers=Ye(gr),i.el=n,u(n,i.contentEl=r("div",{className:"fc-view-container"}));for(var o=i.calendar,a=0,s=o.pluginSystem.hooks.viewContainerModifiers;a<s.length;a++){(0,s[a])(i.contentEl,o)}return i.toggleElClassNames(!0),i.computeTitle=Ye(vr),i.parseBusinessHours=Ye(function(e){return Yt(e,i.calendar)}),i}return Ee(t,e),t.prototype.destroy=function(){this.header&&this.header.destroy(),this.footer&&this.footer.destroy(),this.view&&this.view.destroy(),c(this.contentEl),this.toggleElClassNames(!1),e.prototype.destroy.call(this)},t.prototype.toggleElClassNames=function(e){var t=this.el.classList,n="fc-"+this.opt("dir"),r=this.theme.getClass("widget");e?(t.add("fc"),t.add(n),t.add(r)):(t.remove("fc"),t.remove(n),t.remove(r))},t.prototype.render=function(e){this.freezeHeight();var t=this.computeTitle(e.dateProfile,e.viewSpec.options);this._renderToolbars(e.viewSpec,e.dateProfile,e.currentDate,e.dateProfileGenerator,t),this.renderView(e,t),this.updateSize(),this.thawHeight()},t.prototype.renderToolbars=function(e,t,n,r,i){var o=this.opt("header"),a=this.opt("footer"),l=this.calendar.getNow(),c=r.build(l),d=r.buildPrev(t,n),f=r.buildNext(t,n),p={title:i,activeButton:e.type,isTodayEnabled:c.isValid&&!Ze(t.currentRange,l),isPrevEnabled:d.isValid,isNextEnabled:f.isValid};o?(this.header||(this.header=new pr(this.context,"fc-header-toolbar"),u(this.el,this.header.el)),this.header.receiveProps(Se({layout:o},p))):this.header&&(this.header.destroy(),this.header=null),a?(this.footer||(this.footer=new pr(this.context,"fc-footer-toolbar"),s(this.el,this.footer.el)),this.footer.receiveProps(Se({layout:a},p))):this.footer&&(this.footer.destroy(),this.footer=null)},t.prototype.renderView=function(e,t){var n=this.view,r=e.viewSpec,i=e.dateProfileGenerator;n&&n.viewSpec===r?n.addScroll(n.queryScroll()):(n&&n.destroy(),n=this.view=new r.class({calendar:this.calendar,view:null,dateEnv:this.dateEnv,theme:this.theme,options:r.options},r,i,this.contentEl)),n.title=t;for(var o={dateProfile:e.dateProfile,businessHours:this.parseBusinessHours(r.options.businessHours),eventStore:e.eventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize},a=0,s=this.buildViewPropTransformers(this.calendar.pluginSystem.hooks.viewPropsTransformers);a<s.length;a++){var u=s[a];Se(o,u.transform(o,r,e,n))}n.receiveProps(o)},t.prototype.updateSize=function(e){void 0===e&&(e=!1);var t=this.view;e&&t.addScroll(t.queryScroll()),(e||null==this.isHeightAuto)&&this.computeHeightVars(),t.updateSize(e,this.viewHeight,this.isHeightAuto),t.updateNowIndicator(),t.popScroll(e)},t.prototype.computeHeightVars=function(){var e=this.calendar,t=e.opt("height"),n=e.opt("contentHeight");if(this.isHeightAuto="auto"===t||"auto"===n,"number"==typeof n)this.viewHeight=n;else if("function"==typeof n)this.viewHeight=n();else if("number"==typeof t)this.viewHeight=t-this.queryToolbarsHeight();else if("function"==typeof t)this.viewHeight=t()-this.queryToolbarsHeight();else if("parent"===t){var r=this.el.parentNode;this.viewHeight=r.getBoundingClientRect().height-this.queryToolbarsHeight()}else this.viewHeight=Math.round(this.contentEl.getBoundingClientRect().width/Math.max(e.opt("aspectRatio"),.5))},t.prototype.queryToolbarsHeight=function(){var e=0;return this.header&&(e+=I(this.header.el)),this.footer&&(e+=I(this.footer.el)),e},t.prototype.freezeHeight=function(){y(this.el,{height:this.el.getBoundingClientRect().height,overflow:"hidden"})},t.prototype.thawHeight=function(){y(this.el,{height:"",overflow:""})},t}(fn);function vr(e,t){var n;return n=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,this.dateEnv.formatRange(n.start,n.end,ot(t.titleFormat||function(e){var t=e.currentRangeUnit;if("year"===t)return{year:"numeric"};if("month"===t)return{year:"numeric",month:"long"};var n=L(e.currentRange.start,e.currentRange.end);return null!==n&&n>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}(e),t.titleRangeSeparator),{isEndExclusive:e.isRangeAllDay})}function gr(e){return e.map(function(e){return new e})}var yr=function(){function e(e){this.component=e.component}return e.prototype.destroy=function(){},e}();var mr={},Er=function(e){function t(t){var n=e.call(this,t)||this;n.handleSegClick=function(e,t){var r=n.component,i=ht(t);if(i&&r.isValidSegDownEl(e.target)){var o=p(e.target,".fc-has-url"),a=o?o.querySelector("a[href]").href:"";r.publiclyTrigger("eventClick",[{el:t,event:new ct(r.calendar,i.eventRange.def,i.eventRange.instance),jsEvent:e,view:r.view}]),a&&!e.defaultPrevented&&(window.location.href=a)}};var r=t.component;return n.destroy=O(r.el,"click",r.fgSegSelector+","+r.bgSegSelector,n.handleSegClick),n}return Ee(t,e),t}(yr),Sr=function(e){function t(t){var n=e.call(this,t)||this;n.handleEventElRemove=function(e){e===n.currentSegEl&&n.handleSegLeave(null,n.currentSegEl)},n.handleSegEnter=function(e,t){ht(t)&&(t.classList.add("fc-allow-mouse-resize"),n.currentSegEl=t,n.triggerEvent("eventMouseEnter",e,t))},n.handleSegLeave=function(e,t){n.currentSegEl&&(t.classList.remove("fc-allow-mouse-resize"),n.currentSegEl=null,n.triggerEvent("eventMouseLeave",e,t))};var r,i,o,a,s,u=t.component;return n.removeHoverListeners=(r=u.el,i=u.fgSegSelector+","+u.bgSegSelector,o=n.handleSegEnter,a=n.handleSegLeave,O(r,"mouseover",i,function(e,t){if(t!==s){s=t,o(e,t);var n=function(e){s=null,a(e,t),t.removeEventListener("mouseleave",n)};t.addEventListener("mouseleave",n)}})),u.calendar.on("eventElRemove",n.handleEventElRemove),n}return Ee(t,e),t.prototype.destroy=function(){this.removeHoverListeners(),this.component.calendar.off("eventElRemove",this.handleEventElRemove)},t.prototype.triggerEvent=function(e,t,n){var r=this.component,i=ht(n);t&&!r.isValidSegDownEl(t.target)||r.publiclyTrigger(e,[{el:n,event:new ct(this.component.calendar,i.eventRange.def,i.eventRange.instance),jsEvent:t,view:r.view}])},t}(yr),br=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ee(t,e),t}(cn);br.prototype.classes={widget:"fc-unthemed",widgetHeader:"fc-widget-header",widgetContent:"fc-widget-content",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active",popoverHeader:"fc-widget-header",popoverContent:"fc-widget-content",headerRow:"fc-widget-header",dayRow:"fc-widget-content",listView:"fc-widget-content"},br.prototype.baseIconClass="fc-icon",br.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},br.prototype.iconOverrideOption="buttonIcons",br.prototype.iconOverrideCustomButtonOption="icon",br.prototype.iconOverridePrefix="fc-icon-";var Dr=function(){function e(e,t){var n=this;this.parseRawLocales=Ye(On),this.buildLocale=Ye(_n),this.buildDateEnv=Ye(Tr),this.buildTheme=Ye(wr),this.buildEventUiSingleBase=Ye(this._buildEventUiSingleBase),this.buildSelectionConfig=Ye(this._buildSelectionConfig),this.buildEventUiBySource=qe(Ir,Me),this.buildEventUiBases=Ye(Cr),this.interactionsStore={},this.actionQueue=[],this.isReducing=!1,this.needsRerender=!1,this.needsFullRerender=!1,this.isRendering=!1,this.renderingPauseDepth=0,this.buildDelayedRerender=Ye(Rr),this.afterSizingTriggers={},this.isViewUpdated=!1,this.isDatesUpdated=!1,this.isEventsUpdated=!1,this.el=e,this.optionsManager=new xn(t||{}),this.pluginSystem=new gn,this.addPluginInputs(this.optionsManager.computed.plugins||[]),this.handleOptions(this.optionsManager.computed),this.publiclyTrigger("_init"),this.hydrate(),this.calendarInteractions=this.pluginSystem.hooks.calendarInteractions.map(function(e){return new e(n)})}return e.prototype.addPluginInputs=function(e){for(var t=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n];if("string"==typeof i){var o="FullCalendar"+ue(i);window[o]?t.push(window[o].default):console.warn("Plugin file not loaded for "+i)}else t.push(i)}return Mn.concat(t)}(e),n=0,r=t;n<r.length;n++){var i=r[n];this.pluginSystem.add(i)}},Object.defineProperty(e.prototype,"view",{get:function(){return this.component?this.component.view:null},enumerable:!0,configurable:!0}),e.prototype.render=function(){this.component?this.requestRerender(!0):(this.renderableEventStore={defs:{},instances:{}},this.bindHandlers(),this.executeRender())},e.prototype.destroy=function(){if(this.component){this.unbindHandlers(),this.component.destroy(),this.component=null;for(var e=0,t=this.calendarInteractions;e<t.length;e++){t[e].destroy()}this.publiclyTrigger("_destroyed")}},e.prototype.bindHandlers=function(){var e=this;this.removeNavLinkListener=O(this.el,"click","a[data-goto]",function(t,n){var r=n.getAttribute("data-goto");r=r?JSON.parse(r):{};var i=e.dateEnv,o=i.createMarker(r.date),a=r.type,s=e.viewOpt("navLink"+ue(a)+"Click");"function"==typeof s?s(i.toDate(o),t):("string"==typeof s&&(a=s),e.zoomTo(o,a))}),this.opt("handleWindowResize")&&window.addEventListener("resize",this.windowResizeProxy=pe(this.windowResize.bind(this),this.opt("windowResizeDelay")))},e.prototype.unbindHandlers=function(){this.removeNavLinkListener(),this.windowResizeProxy&&(window.removeEventListener("resize",this.windowResizeProxy),this.windowResizeProxy=null)},e.prototype.hydrate=function(){var e=this;this.state=this.buildInitialState();var t=this.opt("eventSources")||[],n=this.opt("events"),r=[];n&&t.unshift(n);for(var i=0,o=t;i<o.length;i++){var a=Wn(o[i],this);a&&r.push(a)}this.batchRendering(function(){e.dispatch({type:"INIT"}),e.dispatch({type:"ADD_EVENT_SOURCES",sources:r}),e.dispatch({type:"SET_VIEW_TYPE",viewType:e.opt("defaultView")||e.pluginSystem.hooks.defaultView})})},e.prototype.buildInitialState=function(){return{viewType:null,loadingLevel:0,eventSourceLoadingLevel:0,currentDate:this.getInitialDate(),dateProfile:null,eventSources:{},eventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null}},e.prototype.dispatch=function(e){if(this.actionQueue.push(e),!this.isReducing){this.isReducing=!0;for(var t=this.state;this.actionQueue.length;)this.state=this.reduce(this.state,this.actionQueue.shift(),this);var n=this.state;this.isReducing=!1,!t.loadingLevel&&n.loadingLevel?this.publiclyTrigger("loading",[!0]):t.loadingLevel&&!n.loadingLevel&&this.publiclyTrigger("loading",[!1]);var r=this.component&&this.component.view;(t.eventStore!==n.eventStore||this.needsFullRerender)&&t.eventStore&&(this.isEventsUpdated=!0),(t.dateProfile!==n.dateProfile||this.needsFullRerender)&&(t.dateProfile&&r&&this.publiclyTrigger("datesDestroy",[{view:r,el:r.el}]),this.isDatesUpdated=!0),(t.viewType!==n.viewType||this.needsFullRerender)&&(t.viewType&&r&&this.publiclyTrigger("viewSkeletonDestroy",[{view:r,el:r.el}]),this.isViewUpdated=!0),this.requestRerender()}},e.prototype.reduce=function(e,t,n){return Kn(e,t,n)},e.prototype.requestRerender=function(e){void 0===e&&(e=!1),this.needsRerender=!0,this.needsFullRerender=this.needsFullRerender||e,this.delayedRerender()},e.prototype.tryRerender=function(){this.component&&this.needsRerender&&!this.renderingPauseDepth&&!this.isRendering&&this.executeRender()},e.prototype.batchRendering=function(e){this.renderingPauseDepth++,e(),this.renderingPauseDepth--,this.needsRerender&&this.requestRerender()},e.prototype.executeRender=function(){var e=this.needsFullRerender;this.needsRerender=!1,this.needsFullRerender=!1,this.isRendering=!0,this.renderComponent(e),this.isRendering=!1,this.needsRerender&&this.delayedRerender()},e.prototype.renderComponent=function(e){var t=this.state,n=this.component,r=t.viewType,i=this.viewSpecs[r],o=e&&n?n.view.queryScroll():null;if(!i)throw new Error('View type "'+r+'" is not valid');var a=this.renderableEventStore=t.eventSourceLoadingLevel&&!this.opt("progressiveEventRendering")?this.renderableEventStore:t.eventStore,s=this.buildEventUiSingleBase(i.options),u=this.buildEventUiBySource(t.eventSources),l=this.eventUiBases=this.buildEventUiBases(a.defs,s,u);!e&&n||(n&&(n.freezeHeight(),n.destroy()),n=this.component=new hr({calendar:this,view:null,dateEnv:this.dateEnv,theme:this.theme,options:this.optionsManager.computed},this.el),this.isViewUpdated=!0,this.isDatesUpdated=!0,this.isEventsUpdated=!0),n.receiveProps(Se({},t,{viewSpec:i,dateProfile:t.dateProfile,dateProfileGenerator:this.dateProfileGenerators[r],eventStore:a,eventUiBases:l,dateSelection:t.dateSelection,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize})),o&&n.view.applyScroll(o,!1),this.isViewUpdated&&(this.isViewUpdated=!1,this.publiclyTrigger("viewSkeletonRender",[{view:n.view,el:n.view.el}])),this.isDatesUpdated&&(this.isDatesUpdated=!1,this.publiclyTrigger("datesRender",[{view:n.view,el:n.view.el}])),this.isEventsUpdated&&(this.isEventsUpdated=!1),this.releaseAfterSizingTriggers()},e.prototype.setOption=function(e,t){var n;this.mutateOptions(((n={})[e]=t,n),[],!0)},e.prototype.getOption=function(e){return this.optionsManager.computed[e]},e.prototype.opt=function(e){return this.optionsManager.computed[e]},e.prototype.viewOpt=function(e){return this.viewOpts()[e]},e.prototype.viewOpts=function(){return this.viewSpecs[this.state.viewType].options},e.prototype.mutateOptions=function(e,t,n,r){var i=this,o=this.pluginSystem.hooks.optionChangeHandlers,a={},s={},u=this.dateEnv,l=!1,c=!1,d=Boolean(t.length);for(var f in e)o[f]?s[f]=e[f]:a[f]=e[f];for(var p in a)/^(height|contentHeight|aspectRatio)$/.test(p)?c=!0:/^(defaultDate|defaultView)$/.test(p)||(d=!0,"timeZone"===p&&(l=!0));this.optionsManager.mutate(a,t,n),d&&(this.handleOptions(this.optionsManager.computed),this.needsFullRerender=!0),this.batchRendering(function(){if(d?(l&&i.dispatch({type:"CHANGE_TIMEZONE",oldDateEnv:u}),i.dispatch({type:"SET_VIEW_TYPE",viewType:i.state.viewType})):c&&i.updateSize(),r)for(var e in s)o[e](s[e],i,r)})},e.prototype.handleOptions=function(e){var t=this,n=this.pluginSystem.hooks;this.defaultAllDayEventDuration=J(e.defaultAllDayEventDuration),this.defaultTimedEventDuration=J(e.defaultTimedEventDuration),this.delayedRerender=this.buildDelayedRerender(e.rerenderDelay),this.theme=this.buildTheme(e);var r=this.parseRawLocales(e.locales);this.availableRawLocales=r.map;var i=this.buildLocale(e.locale||r.defaultCode,r.map);this.dateEnv=this.buildDateEnv(i,e.timeZone,n.namedTimeZonedImpl,e.firstDay,e.weekNumberCalculation,e.weekLabel,n.cmdFormatter),this.selectionConfig=this.buildSelectionConfig(e),this.viewSpecs=fr(n.views,this.optionsManager),this.dateProfileGenerators=Re(this.viewSpecs,function(e){return new e.class.prototype.dateProfileGeneratorClass(e,t)})},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.availableRawLocales)},e.prototype._buildSelectionConfig=function(e){return Nt("select",e,this)},e.prototype._buildEventUiSingleBase=function(e){return e.editable&&(e=Se({},e,{eventEditable:!0})),Nt("event",e,this)},e.prototype.hasPublicHandlers=function(e){return this.hasHandlers(e)||this.opt(e)},e.prototype.publiclyTrigger=function(e,t){var n=this.opt(e);if(this.triggerWith(e,this,t),n)return n.apply(this,t)},e.prototype.publiclyTriggerAfterSizing=function(e,t){var n=this.afterSizingTriggers;(n[e]||(n[e]=[])).push(t)},e.prototype.releaseAfterSizingTriggers=function(){var e=this.afterSizingTriggers;for(var t in e)for(var n=0,r=e[t];n<r.length;n++){var i=r[n];this.publiclyTrigger(t,i)}this.afterSizingTriggers={}},e.prototype.isValidViewType=function(e){return Boolean(this.viewSpecs[e])},e.prototype.changeView=function(e,t){var n=null;t&&(t.start&&t.end?(this.optionsManager.mutate({visibleRange:t},[]),this.handleOptions(this.optionsManager.computed)):n=this.dateEnv.createMarker(t)),this.unselect(),this.dispatch({type:"SET_VIEW_TYPE",viewType:e,dateMarker:n})},e.prototype.zoomTo=function(e,t){var n;t=t||"day",n=this.viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"SET_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"SET_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,r=this.component,i=[];for(var o in r.header&&i.push.apply(i,r.header.viewsWithButtons),r.footer&&i.push.apply(i,r.footer.viewsWithButtons),this.viewSpecs)i.push(o);for(t=0;t<i.length;t++)if((n=this.viewSpecs[i[t]])&&n.singleUnit===e)return n},e.prototype.getInitialDate=function(){var e=this.opt("defaultDate");return null!=e?this.dateEnv.createMarker(e):this.getNow()},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,-1)})},e.prototype.nextYear=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.addYears(this.state.currentDate,1)})},e.prototype.today=function(){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.getNow()})},e.prototype.gotoDate=function(e){this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=J(e);t&&(this.unselect(),this.dispatch({type:"SET_DATE",dateMarker:this.dateEnv.add(this.state.currentDate,t)}))},e.prototype.getDate=function(){return this.dateEnv.toDate(this.state.currentDate)},e.prototype.formatDate=function(e,t){var n=this.dateEnv;return n.format(n.createMarker(e),ot(t))},e.prototype.formatRange=function(e,t,n){var r=this.dateEnv;return r.formatRange(r.createMarker(e),r.createMarker(t),ot(n,this.opt("defaultRangeSeparator")),n)},e.prototype.formatIso=function(e,t){var n=this.dateEnv;return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.windowResize=function(e){!this.isHandlingWindowResize&&this.component&&e.target===window&&(this.isHandlingWindowResize=!0,this.updateSize(),this.publiclyTrigger("windowResize",[this.view]),this.isHandlingWindowResize=!1)},e.prototype.updateSize=function(){this.component&&this.component.updateSize(!0)},e.prototype.registerInteractiveComponent=function(e,t){var n=function(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter}}(e,t),r=[Er,Sr].concat(this.pluginSystem.hooks.componentInteractions).map(function(e){return new e(n)});this.interactionsStore[e.uid]=r,mr[e.uid]=n},e.prototype.unregisterInteractiveComponent=function(e){for(var t=0,n=this.interactionsStore[e.uid];t<n.length;t++){n[t].destroy()}delete this.interactionsStore[e.uid],delete mr[e.uid]},e.prototype.select=function(e,t){var n=or(null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t},this.dateEnv,J({days:1}));n&&(this.dispatch({type:"SELECT_DATES",selection:n}),this.triggerDateSelect(n))},e.prototype.unselect=function(e){this.state.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),this.triggerDateUnselect(e))},e.prototype.triggerDateSelect=function(e,t){var n=Se({},this.buildDateSpanApi(e),{jsEvent:t?t.origEvent:null,view:this.view});this.publiclyTrigger("select",[n])},e.prototype.triggerDateUnselect=function(e){this.publiclyTrigger("unselect",[{jsEvent:e?e.origEvent:null,view:this.view}])},e.prototype.triggerDateClick=function(e,t,n,r){var i=Se({},this.buildDatePointApi(e),{dayEl:t,jsEvent:r,view:n});this.publiclyTrigger("dateClick",[i])},e.prototype.buildDatePointApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.datePointTransforms;i<o.length;i++){var a=o[i];Se(r,a(e,this))}return Se(r,(t=e,{date:(n=this.dateEnv).toDate(t.range.start),dateStr:n.formatIso(t.range.start,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.buildDateSpanApi=function(e){for(var t,n,r={},i=0,o=this.pluginSystem.hooks.dateSpanTransforms;i<o.length;i++){var a=o[i];Se(r,a(e,this))}return Se(r,(t=e,{start:(n=this.dateEnv).toDate(t.range.start),end:n.toDate(t.range.end),startStr:n.formatIso(t.range.start,{omitTime:t.allDay}),endStr:n.formatIso(t.range.end,{omitTime:t.allDay}),allDay:t.allDay})),r},e.prototype.getNow=function(){var e=this.opt("now");return"function"==typeof e&&(e=e()),null==e?this.dateEnv.createNowMarker():this.dateEnv.createMarker(e)},e.prototype.getDefaultEventEnd=function(e,t){var n=t;return e?(n=B(n),n=this.dateEnv.add(n,this.defaultAllDayEventDuration)):n=this.dateEnv.add(n,this.defaultTimedEventDuration),n},e.prototype.addEvent=function(e,t){if(e instanceof ct){var n=e._def,r=e._instance;return this.state.eventStore.defs[n.defId]||this.dispatch({type:"ADD_EVENTS",eventStore:Oe({def:n,instance:r})}),e}var i;if(t instanceof lt)i=t.internalEventSource.sourceId;else if(null!=t){var o=this.getEventSourceById(t);if(!o)return console.warn('Could not find an event source with ID "'+t+'"'),null;i=o.internalEventSource.sourceId}var a=Ft(e,i,this);return a?(this.dispatch({type:"ADD_EVENTS",eventStore:Oe(a)}),new ct(this,a.def,a.def.recurringDef?null:a.instance)):null},e.prototype.getEventById=function(e){var t=this.state.eventStore,n=t.defs,r=t.instances;for(var i in e=String(e),n){var o=n[i];if(o.publicId===e){if(o.recurringDef)return new ct(this,o,null);for(var a in r){var s=r[a];if(s.defId===o.defId)return new ct(this,o,s)}}}return null},e.prototype.getEvents=function(){var e=this.state.eventStore,t=e.defs,n=e.instances,r=[];for(var i in n){var o=n[i],a=t[o.defId];r.push(new ct(this,a,o))}return r},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.rerenderEvents=function(){this.dispatch({type:"RESET_EVENTS"})},e.prototype.getEventSources=function(){var e=this.state.eventSources,t=[];for(var n in e)t.push(new lt(this,e[n]));return t},e.prototype.getEventSourceById=function(e){var t=this.state.eventSources;for(var n in e=String(e),t)if(t[n].publicId===e)return new lt(this,t[n]);return null},e.prototype.addEventSource=function(e){if(e instanceof lt)return this.state.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e;var t=Wn(e,this);return t?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[t]}),new lt(this,t)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES"})},e.prototype.scrollToTime=function(e){var t=J(e);t&&this.component.view.scrollToDuration(t)},e}();function Tr(e,t,n,r,i,o,a){return new Bn({calendarSystem:"gregory",timeZone:t,namedTimeZoneImpl:n,locale:e,weekNumberCalculation:i,firstDay:r,weekLabel:o,cmdFormatter:a})}function wr(e){return new(this.pluginSystem.hooks.themeClasses[e.themeSystem]||br)(e)}function Rr(e){var t=this.tryRerender.bind(this);return null!=e&&(t=pe(t,e)),t}function Ir(e){return Re(e,function(e){return e.ui})}function Cr(e,t,n){var r={"":t};for(var i in e){var o=e[i];o.sourceId&&n[o.sourceId]&&(r[i]=n[o.sourceId])}return r}tn.mixInto(Dr);var Mr=function(e){function t(t,n,i,o){var a=e.call(this,t,r("div",{className:"fc-view fc-"+n.type+"-view"}),!0)||this;return a.renderDatesMem=qt(a.renderDatesWrap,a.unrenderDatesWrap),a.renderBusinessHoursMem=qt(a.renderBusinessHours,a.unrenderBusinessHours,[a.renderDatesMem]),a.renderDateSelectionMem=qt(a.renderDateSelectionWrap,a.unrenderDateSelectionWrap,[a.renderDatesMem]),a.renderEventsMem=qt(a.renderEvents,a.unrenderEvents,[a.renderDatesMem]),a.renderEventSelectionMem=qt(a.renderEventSelectionWrap,a.unrenderEventSelectionWrap,[a.renderEventsMem]),a.renderEventDragMem=qt(a.renderEventDragWrap,a.unrenderEventDragWrap,[a.renderDatesMem]),a.renderEventResizeMem=qt(a.renderEventResizeWrap,a.unrenderEventResizeWrap,[a.renderDatesMem]),a.viewSpec=n,a.dateProfileGenerator=i,a.type=n.type,a.eventOrderSpecs=ie(a.opt("eventOrder")),a.nextDayThreshold=J(a.opt("nextDayThreshold")),o.appendChild(a.el),a.initialize(),a}return Ee(t,e),t.prototype.initialize=function(){},Object.defineProperty(t.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.activeRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.activeRange.end)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.currentRange.start)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.props.dateProfile.currentRange.end)},enumerable:!0,configurable:!0}),t.prototype.render=function(e){this.renderDatesMem(e.dateProfile),this.renderBusinessHoursMem(e.businessHours),this.renderDateSelectionMem(e.dateSelection),this.renderEventsMem(e.eventStore),this.renderEventSelectionMem(e.eventSelection),this.renderEventDragMem(e.eventDrag),this.renderEventResizeMem(e.eventResize)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderDatesMem.unrender()},t.prototype.updateSize=function(e,t,n){var r=this.calendar;(e||r.isViewUpdated||r.isDatesUpdated||r.isEventsUpdated)&&this.updateBaseSize(e,t,n)},t.prototype.updateBaseSize=function(e,t,n){},t.prototype.renderDatesWrap=function(e){this.renderDates(e),this.addScroll({duration:J(this.opt("scrollTime"))}),this.startNowIndicator(e)},t.prototype.unrenderDatesWrap=function(){this.stopNowIndicator(),this.unrenderDates()},t.prototype.renderDates=function(e){},t.prototype.unrenderDates=function(){},t.prototype.renderBusinessHours=function(e){},t.prototype.unrenderBusinessHours=function(){},t.prototype.renderDateSelectionWrap=function(e){e&&this.renderDateSelection(e)},t.prototype.unrenderDateSelectionWrap=function(e){e&&this.unrenderDateSelection(e)},t.prototype.renderDateSelection=function(e){},t.prototype.unrenderDateSelection=function(e){},t.prototype.renderEvents=function(e){},t.prototype.unrenderEvents=function(){},t.prototype.sliceEvents=function(e,t){var n=this.props;return dt(e,n.eventUiBases,n.dateProfile.activeRange,t?this.nextDayThreshold:null).fg},t.prototype.computeEventDraggable=function(e,t){for(var n=this.calendar.pluginSystem.hooks.isDraggableTransformers,r=t.startEditable,i=0,o=n;i<o.length;i++){r=(0,o[i])(r,e,t,this)}return r},t.prototype.computeEventStartResizable=function(e,t){return t.durationEditable&&this.opt("eventResizableFromStart")},t.prototype.computeEventEndResizable=function(e,t){return t.durationEditable},t.prototype.renderEventSelectionWrap=function(e){e&&this.renderEventSelection(e)},t.prototype.unrenderEventSelectionWrap=function(e){e&&this.unrenderEventSelection(e)},t.prototype.renderEventSelection=function(e){},t.prototype.unrenderEventSelection=function(e){},t.prototype.renderEventDragWrap=function(e){e&&this.renderEventDrag(e)},t.prototype.unrenderEventDragWrap=function(e){e&&this.unrenderEventDrag(e)},t.prototype.renderEventDrag=function(e){},t.prototype.unrenderEventDrag=function(e){},t.prototype.renderEventResizeWrap=function(e){e&&this.renderEventResize(e)},t.prototype.unrenderEventResizeWrap=function(e){e&&this.unrenderEventResize(e)},t.prototype.renderEventResize=function(e){},t.prototype.unrenderEventResize=function(e){},t.prototype.startNowIndicator=function(e){var t,n,r,i=this,o=this.dateEnv;this.opt("nowIndicator")&&(t=this.getNowIndicatorUnit(e))&&(n=this.updateNowIndicator.bind(this),this.initialNowDate=this.calendar.getNow(),this.initialNowQueriedMs=(new Date).valueOf(),r=o.add(o.startOf(this.initialNowDate,t),J(1,t)).valueOf()-this.initialNowDate.valueOf(),this.nowIndicatorTimeoutID=setTimeout(function(){i.nowIndicatorTimeoutID=null,n(),r="second"===t?1e3:6e4,i.nowIndicatorIntervalID=setInterval(n,r)},r))},t.prototype.updateNowIndicator=function(){this.props.dateProfile&&this.initialNowDate&&(this.unrenderNowIndicator(),this.renderNowIndicator(H(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs)),this.isNowIndicatorRendered=!0)},t.prototype.stopNowIndicator=function(){this.isNowIndicatorRendered&&(this.nowIndicatorTimeoutID&&(clearTimeout(this.nowIndicatorTimeoutID),this.nowIndicatorTimeoutID=null),this.nowIndicatorIntervalID&&(clearInterval(this.nowIndicatorIntervalID),this.nowIndicatorIntervalID=null),this.unrenderNowIndicator(),this.isNowIndicatorRendered=!1)},t.prototype.getNowIndicatorUnit=function(e){},t.prototype.renderNowIndicator=function(e){},t.prototype.unrenderNowIndicator=function(){},t.prototype.addScroll=function(e){var t=this.queuedScroll||(this.queuedScroll={});Se(t,e)},t.prototype.popScroll=function(e){this.applyQueuedScroll(e),this.queuedScroll=null},t.prototype.applyQueuedScroll=function(e){this.applyScroll(this.queuedScroll||{},e)},t.prototype.queryScroll=function(){var e={};return this.props.dateProfile&&Se(e,this.queryDateScroll()),e},t.prototype.applyScroll=function(e,t){var n=e.duration;null!=n&&(delete e.duration,this.props.dateProfile&&Se(e,this.computeDateScroll(n))),this.props.dateProfile&&this.applyDateScroll(e)},t.prototype.computeDateScroll=function(e){return{}},t.prototype.queryDateScroll=function(){return{}},t.prototype.applyDateScroll=function(e){},t.prototype.scrollToDuration=function(e){this.applyScroll({duration:e},!1)},t}(pn);tn.mixInto(Mr),Mr.prototype.usesMinMaxTime=!1,Mr.prototype.dateProfileGeneratorClass=Jn;var kr=function(){function e(e){this.segs=[],this.isSizeDirty=!1,this.context=e}return e.prototype.renderSegs=function(e,t){this.rangeUpdated(),e=this.renderSegEls(e,t),this.segs=e,this.attachSegs(e,t),this.isSizeDirty=!0,this.context.view.triggerRenderedSegs(this.segs,Boolean(t))},e.prototype.unrender=function(e,t){this.context.view.triggerWillRemoveSegs(this.segs,Boolean(t)),this.detachSegs(this.segs),this.segs=[]},e.prototype.rangeUpdated=function(){var e,t,n=this.context.options;this.eventTimeFormat=ot(n.eventTimeFormat||this.computeEventTimeFormat(),n.defaultRangeSeparator),null==(e=n.displayEventTime)&&(e=this.computeDisplayEventTime()),null==(t=n.displayEventEnd)&&(t=this.computeDisplayEventEnd()),this.displayEventTime=e,this.displayEventEnd=t},e.prototype.renderSegEls=function(e,t){var n,r="";if(e.length){for(n=0;n<e.length;n++)r+=this.renderSegHtml(e[n],t);o(r).forEach(function(t,n){var r=e[n];t&&(r.el=t)}),e=ft(this.context.view,e,Boolean(t))}return e},e.prototype.getSegClasses=function(e,t,n,r){var i=["fc-event",e.isStart?"fc-start":"fc-not-start",e.isEnd?"fc-end":"fc-not-end"].concat(e.eventRange.ui.classNames);return t&&i.push("fc-draggable"),n&&i.push("fc-resizable"),r&&(i.push("fc-mirror"),r.isDragging&&i.push("fc-dragging"),r.isResizing&&i.push("fc-resizing")),i},e.prototype.getTimeText=function(e,t,n){var r=e.def,i=e.instance;return this._getTimeText(i.range.start,r.hasEnd?i.range.end:null,r.allDay,t,n,i.forcedStartTzo,i.forcedEndTzo)},e.prototype._getTimeText=function(e,t,n,r,i,o,a){var s=this.context.dateEnv;return null==r&&(r=this.eventTimeFormat),null==i&&(i=this.displayEventEnd),this.displayEventTime&&!n?i&&t?s.formatRange(e,t,r,{forcedStartTzo:o,forcedEndTzo:a}):s.format(e,r,{forcedTzo:o}):""},e.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0}},e.prototype.computeDisplayEventTime=function(){return!0},e.prototype.computeDisplayEventEnd=function(){return!0},e.prototype.getSkinCss=function(e){return{"background-color":e.backgroundColor,"border-color":e.borderColor,color:e.textColor}},e.prototype.sortEventSegs=function(e){var t=this.context.view.eventOrderSpecs,n=e.map(Or);return n.sort(function(e,n){return oe(e,n,t)}),n.map(function(e){return e._seg})},e.prototype.computeSizes=function(e){(e||this.isSizeDirty)&&this.computeSegSizes(this.segs)},e.prototype.assignSizes=function(e){(e||this.isSizeDirty)&&(this.assignSegSizes(this.segs),this.isSizeDirty=!1)},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e.prototype.hideByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="hidden")}},e.prototype.showByHash=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];e[r.eventRange.instance.instanceId]&&(r.el.style.visibility="")}},e.prototype.selectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t],i=r.eventRange.instance;i&&i.instanceId===e&&r.el&&r.el.classList.add("fc-selected")}},e.prototype.unselectByInstanceId=function(e){if(e)for(var t=0,n=this.segs;t<n.length;t++){var r=n[t];r.el&&r.el.classList.remove("fc-selected")}},e}();function Or(e){var t=e.eventRange.def,n=e.eventRange.instance.range,r=n.start?n.start.valueOf():0,i=n.end?n.end.valueOf():0;return Se({},t.extendedProps,t,{id:t.publicId,start:r,end:i,duration:i-r,allDay:Number(t.allDay),_seg:e})}var _r=function(){function e(e){this.fillSegTag="div",this.dirtySizeFlags={},this.context=e,this.containerElsByType={},this.segsByType={}}return e.prototype.getSegsByType=function(e){return this.segsByType[e]||[]},e.prototype.renderSegs=function(e,t){var n,r=this.renderSegEls(e,t),i=this.attachSegs(e,r);i&&(n=this.containerElsByType[e]||(this.containerElsByType[e]=[])).push.apply(n,i),this.segsByType[e]=r,"bgEvent"===e&&this.context.view.triggerRenderedSegs(r,!1),this.dirtySizeFlags[e]=!0},e.prototype.unrender=function(e){var t=this.segsByType[e];t&&("bgEvent"===e&&this.context.view.triggerWillRemoveSegs(t,!1),this.detachSegs(e,t))},e.prototype.renderSegEls=function(e,t){var n,r=this,i="";if(t.length){for(n=0;n<t.length;n++)i+=this.renderSegHtml(e,t[n]);o(i).forEach(function(e,n){var r=t[n];e&&(r.el=e)}),"bgEvent"===e&&(t=ft(this.context.view,t,!1)),t=t.filter(function(e){return h(e.el,r.fillSegTag)})}return t},e.prototype.renderSegHtml=function(e,t){var n=null,r=[];return"highlight"!==e&&"businessHours"!==e&&(n={"background-color":t.eventRange.ui.backgroundColor}),"highlight"!==e&&(r=r.concat(t.eventRange.ui.classNames)),"businessHours"===e?r.push("fc-bgevent"):r.push("fc-"+e.toLowerCase()),"<"+this.fillSegTag+(r.length?' class="'+r.join(" ")+'"':"")+(n?' style="'+_t(n)+'"':"")+"></"+this.fillSegTag+">"},e.prototype.detachSegs=function(e,t){var n=this.containerElsByType[e];n&&(n.forEach(c),delete this.containerElsByType[e])},e.prototype.computeSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.computeSegSizes(this.segsByType[t])},e.prototype.assignSizes=function(e){for(var t in this.segsByType)(e||this.dirtySizeFlags[t])&&this.assignSegSizes(this.segsByType[t]);this.dirtySizeFlags={}},e.prototype.computeSegSizes=function(e){},e.prototype.assignSegSizes=function(e){},e}(),Pr=function(e){this.timeZoneName=e},xr=function(){function e(e){this.emitter=new tn}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}();function Hr(e){var t=_n(e.locale||"en",On([]).map);return e=Se({timeZone:Rn.timeZone,calendarSystem:"gregory"},e,{locale:t}),new Bn(e)}var Nr={startTime:J,duration:J,create:Boolean,sourceId:String},zr={create:!0};function Ur(e,t){return!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"}}function Lr(e,t,n,r,i,o,a,s){var u,l=o.view,c=o.dateEnv,d=o.theme,f=o.options,p=Ze(t.activeRange,e),h=["fc-day-header",d.getClass("widgetHeader")];return u="function"==typeof f.columnHeaderHtml?f.columnHeaderHtml(c.toDate(e)):"function"==typeof f.columnHeaderText?Ot(f.columnHeaderText(c.toDate(e))):Ot(c.format(e,i)),n?h=h.concat(Qt(e,t,o,!0)):h.push("fc-"+P[e.getUTCDay()]),'<th class="'+h.join(" ")+'"'+(p&&n?' data-date="'+c.formatIso(e,{omitTime:!0})+'"':"")+(a>1?' colspan="'+a+'"':"")+(s?" "+s:"")+">"+(p?Kt(l,{date:e,forceOff:!n||1===r},u):u)+"</th>"}var Br=function(e){function t(t,n){var r=e.call(this,t)||this;return n.innerHTML="",n.appendChild(r.el=i('<div class="fc-row '+r.theme.getClass("headerRow")+'"><table class="'+r.theme.getClass("tableGrid")+'"><thead></thead></table></div>')),r.thead=r.el.querySelector("thead"),r}return Ee(t,e),t.prototype.destroy=function(){c(this.el)},t.prototype.render=function(e){var t=e.dates,n=e.datesRepDistinctDays,r=[];e.renderIntroHtml&&r.push(e.renderIntroHtml());for(var i=ot(this.opt("columnHeaderFormat")||Ur(n,t.length)),o=0,a=t;o<a.length;o++){var s=a[o];r.push(Lr(s,e.dateProfile,n,t.length,i,this.context))}this.isRtl&&r.reverse(),this.thead.innerHTML="<tr>"+r.join("")+"</tr>"},t}(fn),Vr=function(){function e(e,t){for(var n=e.start,r=e.end,i=[],o=[],a=-1;n<r;)t.isHiddenDay(n)?i.push(a+.5):(a++,i.push(a),o.push(n)),n=x(n,1);this.dates=o,this.indices=i,this.cnt=o.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(x(e.end,-1)),r=Math.max(0,t),i=Math.min(this.cnt-1,n);return(r=Math.ceil(r))<=(i=Math.floor(i))?{firstIndex:r,lastIndex:i,isStart:t===r,isEnd:n===i}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(N(this.dates[0],e));return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}(),Ar=function(){function e(e,t){var n,r,i,o=e.dates;if(t){for(r=o[0].getUTCDay(),n=1;n<o.length&&o[n].getUTCDay()!==r;n++);i=Math.ceil(o.length/n)}else i=1,n=o.length;this.rowCnt=i,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t++){for(var n=[],r=0;r<this.colCnt;r++)n.push(this.buildCell(t,r));e.push(n)}return e},e.prototype.buildCell=function(e,t){return{date:this.daySeries.dates[e*this.colCnt+t]}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t++)e.push(this.cells[0][t].date);return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),r=[];if(n)for(var i=n.firstIndex,o=n.lastIndex,a=i;a<=o;){var s=Math.floor(a/t),u=Math.min((s+1)*t,o+1);r.push({row:s,firstCol:a%t,lastCol:(u-1)%t,isStart:n.isStart&&a===i,isEnd:n.isEnd&&u-1===o}),a=u}return r},e}(),Fr=function(){function e(){this.sliceBusinessHours=Ye(this._sliceBusinessHours),this.sliceDateSelection=Ye(this._sliceDateSpan),this.sliceEventStore=Ye(this._sliceEventStore),this.sliceEventDrag=Ye(this._sliceInteraction),this.sliceEventResize=Ye(this._sliceInteraction)}return e.prototype.sliceProps=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];var a=e.eventUiBases,s=this.sliceEventStore.apply(this,[e.eventStore,a,t,n,r].concat(i));return{dateSelectionSegs:this.sliceDateSelection.apply(this,[e.dateSelection,a,r].concat(i)),businessHourSegs:this.sliceBusinessHours.apply(this,[e.businessHours,t,n,r].concat(i)),fgEventSegs:s.fg,bgEventSegs:s.bg,eventDrag:this.sliceEventDrag.apply(this,[e.eventDrag,a,t,n,r].concat(i)),eventResize:this.sliceEventResize.apply(this,[e.eventResize,a,t,n,r].concat(i)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this._sliceDateSpan.apply(this,[{range:{start:e,end:H(e,1)},allDay:!1},{},t].concat(n))},e.prototype._sliceBusinessHours=function(e,t,n,r){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];return e?this._sliceEventStore.apply(this,[_e(e,Wr(t,Boolean(n)),r.calendar),{},t,n,r].concat(i)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a];if(e){var s=dt(e,t,Wr(n,Boolean(r)),r);return{bg:this.sliceEventRanges(s.bg,i,o),fg:this.sliceEventRanges(s.fg,i,o)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,r,i){for(var o=[],a=5;a<arguments.length;a++)o[a-5]=arguments[a];if(!e)return null;var s=dt(e.mutatedEvents,t,Wr(n,Boolean(r)),r);return{segs:this.sliceEventRanges(s.fg,i,o),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent,sourceSeg:e.origSeg}},e.prototype._sliceDateSpan=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];if(!e)return[];for(var o=ar(e,t,n.calendar),a=this.sliceRange.apply(this,[e.range].concat(r)),s=0,u=a;s<u.length;s++){var l=u[s];l.component=n,l.eventRange=o}return a},e.prototype.sliceEventRanges=function(e,t,n){for(var r=[],i=0,o=e;i<o.length;i++){var a=o[i];r.push.apply(r,this.sliceEventRange(a,t,n))}return r},e.prototype.sliceEventRange=function(e,t,n){for(var r=this.sliceRange.apply(this,[e.range].concat(n)),i=0,o=r;i<o.length;i++){var a=o[i];a.component=t,a.eventRange=e,a.isStart=e.isStart&&a.isStart,a.isEnd=e.isEnd&&a.isEnd}return r},e}();function Wr(e,t){var n=e.activeRange;return t?n:{start:H(n.start,e.minTime.milliseconds),end:H(n.end,e.maxTime.milliseconds-864e5)}}e.Calendar=Dr,e.Component=fn,e.DateComponent=pn,e.DateEnv=Bn,e.DateProfileGenerator=Jn,e.DayHeader=Br,e.DaySeries=Vr,e.DayTable=Ar,e.ElementDragging=xr,e.ElementScrollController=sn,e.EmitterMixin=tn,e.EventApi=ct,e.FgEventRenderer=kr,e.FillRenderer=_r,e.Interaction=yr,e.Mixin=en,e.NamedTimeZoneImpl=Pr,e.PositionCache=on,e.ScrollComponent=ln,e.ScrollController=an,e.Slicer=Fr,e.Splitter=Xt,e.Theme=cn,e.View=Mr,e.WindowScrollController=un,e.addDays=x,e.addDurations=function(e,t){return{years:e.years+t.years,months:e.months+t.months,days:e.days+t.days,milliseconds:e.milliseconds+t.milliseconds}},e.addMs=H,e.addWeeks=function(e,t){var n=Z(e);return n[2]+=7*t,j(n)},e.allowContextMenu=function(e){e.removeEventListener("contextmenu",k)},e.allowSelection=function(e){e.classList.remove("fc-unselectable"),e.removeEventListener("selectstart",k)},e.appendToElement=s,e.applyAll=de,e.applyMutationToEventStore=yt,e.applyStyle=y,e.applyStyleProp=m,e.asRoughMinutes=function(e){return te(e)/6e4},e.asRoughMs=te,e.asRoughSeconds=function(e){return te(e)/1e3},e.buildGotoAnchorHtml=Kt,e.buildSegCompareObj=Or,e.capitaliseFirstLetter=ue,e.combineEventUis=Ut,e.compareByFieldSpec=ae,e.compareByFieldSpecs=oe,e.compareNumbers=function(e,t){return e-t},e.compensateScroll=function(e,t){t.left&&y(e,{borderLeftWidth:1,marginLeft:t.left-1}),t.right&&y(e,{borderRightWidth:1,marginRight:t.right-1})},e.computeClippingRect=function(e){return M(e).map(function(e){return w(e)}).concat({left:window.pageXOffset,right:window.pageXOffset+document.documentElement.clientWidth,top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight}).reduce(function(e,t){return E(e,t)||t})},e.computeEdges=T,e.computeFallbackHeaderFormat=Ur,e.computeHeightAndMargins=I,e.computeInnerRect=w,e.computeRect=R,e.computeVisibleDayRange=ge,e.config={},e.constrainPoint=function(e,t){return{left:Math.min(Math.max(e.left,t.left),t.right),top:Math.min(Math.max(e.top,t.top),t.bottom)}},e.createDuration=J,e.createElement=r,e.createEmptyEventStore=He,e.createEventInstance=Zt,e.createFormatter=ot,e.createPlugin=vn,e.cssToStr=_t,e.debounce=pe,e.diffDates=ye,e.diffDayAndTime=z,e.diffDays=N,e.diffPoints=function(e,t){return{left:e.left-t.left,top:e.top-t.top}},e.diffWeeks=function(e,t){return N(e,t)/7},e.diffWholeDays=L,e.diffWholeWeeks=U,e.disableCursor=function(){document.body.classList.add("fc-not-allowed")},e.distributeHeight=function(e,t,n){var r=Math.floor(t/e.length),i=Math.floor(t-r*(e.length-1)),o=[],a=[],s=[],u=0;re(e),e.forEach(function(t,n){var l=n===e.length-1?i:r,c=t.getBoundingClientRect().height,d=c+C(t);d<l?(o.push(t),a.push(d),s.push(c)):u+=d}),n&&(t-=u,r=Math.floor(t/o.length),i=Math.floor(t-r*(o.length-1))),o.forEach(function(e,t){var n=t===o.length-1?i:r,u=a[t],l=n-(u-s[t]);u<n&&(e.style.height=l+"px")})},e.elementClosest=p,e.elementMatches=h,e.enableCursor=function(){document.body.classList.remove("fc-not-allowed")},e.eventTupleToStore=Oe,e.filterEventStoreDefs=ze,e.filterHash=we,e.findChildren=function(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],i=0;i<n.length;i++)for(var o=n[i].children,a=0;a<o.length;a++){var s=o[a];t&&!h(s,t)||r.push(s)}return r},e.findElements=v,e.flexibleCompare=se,e.forceClassName=function(e,t,n){n?e.classList.add(t):e.classList.remove(t)},e.formatDate=function(e,t){void 0===t&&(t={});var n=Hr(t),r=ot(t),i=n.createMarkerMeta(e);return i?n.format(i.marker,r,{forcedTzo:i.forcedTzo}):""},e.formatIsoTimeString=function(e){return le(e.getUTCHours(),2)+":"+le(e.getUTCMinutes(),2)+":"+le(e.getUTCSeconds(),2)},e.formatRange=function(e,t,n){var r=Hr("object"==typeof n&&n?n:{}),i=ot(n,Rn.defaultRangeSeparator),o=r.createMarkerMeta(e),a=r.createMarkerMeta(t);return o&&a?r.formatRange(o.marker,a.marker,i,{forcedStartTzo:o.forcedTzo,forcedEndTzo:a.forcedTzo,isEndExclusive:n.isEndExclusive}):""},e.getAllDayHtml=function(e){return e.opt("allDayHtml")||Ot(e.opt("allDayText"))},e.getClippingParents=M,e.getDayClasses=Qt,e.getElSeg=ht,e.getRectCenter=function(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}},e.getRelevantEvents=Pe,e.globalDefaults=Rn,e.greatestDurationDenominator=ne,e.hasBgRendering=function(e){return"background"===e.rendering||"inverse-background"===e.rendering},e.htmlEscape=Ot,e.htmlToElement=i,e.insertAfterElement=function(e,t){for(var n=l(t),r=e.nextSibling||null,i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],r)},e.interactionSettingsStore=mr,e.interactionSettingsToStore=function(e){var t;return(t={})[e.component.uid]=e,t},e.intersectRanges=Ve,e.intersectRects=E,e.isArraysEqual=je,e.isDateSpansEqual=function(e,t){return Ae(e.range,t.range)&&e.allDay===t.allDay&&function(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1;for(var n in e)if(!(n in t))return!1;return!0}(e,t)},e.isInt=ce,e.isInteractionValid=Tt,e.isMultiDayRange=function(e){var t=ge(e);return N(t.start,t.end)>1},e.isPropsEqual=Me,e.isPropsValid=Rt,e.isSingleDay=function(e){return 0===e.years&&0===e.months&&1===e.days&&0===e.milliseconds},e.isValidDate=Y,e.listenBySelector=O,e.mapHash=Re,e.matchCellWidths=function(e){var t=0;return e.forEach(function(e){var n=e.firstChild;if(n instanceof HTMLElement){var r=n.getBoundingClientRect().width;r>t&&(t=r)}}),t++,e.forEach(function(e){e.style.width=t+"px"}),t},e.memoize=Ye,e.memoizeOutput=qe,e.memoizeRendering=qt,e.mergeEventStores=Ne,e.multiplyDuration=function(e,t){return{years:e.years*t,months:e.months*t,days:e.days*t,milliseconds:e.milliseconds*t}},e.padStart=le,e.parseBusinessHours=Yt,e.parseDragMeta=function(e){var t={},n=he(e,Nr,zr,t);return n.leftoverProps=t,n},e.parseEventDef=Wt,e.parseFieldSpecs=ie,e.parseMarker=Ln,e.pointInsideRect=function(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom},e.prependToElement=u,e.preventContextMenu=function(e){e.addEventListener("contextmenu",k)},e.preventDefault=k,e.preventSelection=function(e){e.classList.add("fc-unselectable"),e.addEventListener("selectstart",k)},e.processScopedUiProps=Nt,e.rangeContainsMarker=Ze,e.rangeContainsRange=We,e.rangesEqual=Ae,e.rangesIntersect=Fe,e.refineProps=he,e.removeElement=c,e.removeExact=function(e,t){for(var n=0,r=0;r<e.length;)e[r]===t?(e.splice(r,1),n++):r++;return n},e.renderDateCell=Lr,e.requestJson=En,e.sliceEventStore=dt,e.startOfDay=B,e.subtractInnerElHeight=function(e,t){var n={position:"relative",left:-1};y(e,n),y(t,n);var r=e.getBoundingClientRect().height-t.getBoundingClientRect().height,i={position:"",left:""};return y(e,i),y(t,i),r},e.translateRect=function(e,t,n){return{left:e.left+t,right:e.right+t,top:e.top+n,bottom:e.bottom+n}},e.uncompensateScroll=function(e){y(e,{marginLeft:"",marginRight:"",borderLeftWidth:"",borderRightWidth:""})},e.undistributeHeight=re,e.unpromisify=$t,e.version="4.3.1",e.whenTransitionDone=function(e,t){var n=function(r){t(r),_.forEach(function(t){e.removeEventListener(t,n)})};_.forEach(function(t){e.addEventListener(t,n)})},e.wholeDivideDurations=function(e,t){for(var n=null,r=0;r<G.length;r++){var i=G[r];if(t[i]){var o=e[i]/t[i];if(!ce(o)||null!==n&&n!==o)return null;n=o}else if(e[i])return null}return n},Object.defineProperty(e,"__esModule",{value:!0})});
/*!
FullCalendar Day Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarDayGrid={},e.FullCalendar)}(this,function(e,t){"use strict";var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},o=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.buildRenderRange=function(r,n,i){var o,s=this.dateEnv,l=e.prototype.buildRenderRange.call(this,r,n,i),a=l.start,d=l.end;if(/^(year|month)$/.test(n)&&(a=s.startOfWeek(a),(o=s.startOfWeek(d)).valueOf()!==d.valueOf()&&(d=t.addWeeks(o,1))),this.options.monthMode&&this.options.fixedWeekCount){var c=Math.ceil(t.diffWeeks(a,d));d=t.addWeeks(d,6-c)}return{start:a,end:d}},r}(t.DateProfileGenerator),s=function(){function e(e){var t=this;this.isHidden=!0,this.margin=10,this.documentMousedown=function(e){t.el&&!t.el.contains(e.target)&&t.hide()},this.options=e}return e.prototype.show=function(){this.isHidden&&(this.el||this.render(),this.el.style.display="",this.position(),this.isHidden=!1,this.trigger("show"))},e.prototype.hide=function(){this.isHidden||(this.el.style.display="none",this.isHidden=!0,this.trigger("hide"))},e.prototype.render=function(){var e=this,r=this.options,n=this.el=t.createElement("div",{className:"fc-popover "+(r.className||""),style:{top:"0",left:"0"}});"function"==typeof r.content&&r.content(n),r.parentEl.appendChild(n),t.listenBySelector(n,"click",".fc-close",function(t){e.hide()}),r.autoHide&&document.addEventListener("mousedown",this.documentMousedown)},e.prototype.destroy=function(){this.hide(),this.el&&(t.removeElement(this.el),this.el=null),document.removeEventListener("mousedown",this.documentMousedown)},e.prototype.position=function(){var e,r,n=this.options,i=this.el,o=i.getBoundingClientRect(),s=t.computeRect(i.offsetParent),l=t.computeClippingRect(n.parentEl);e=n.top||0,r=void 0!==n.left?n.left:void 0!==n.right?n.right-o.width:0,e=Math.min(e,l.bottom-o.height-this.margin),e=Math.max(e,l.top+this.margin),r=Math.min(r,l.right-o.width-this.margin),r=Math.max(r,l.left+this.margin),t.applyStyle(i,{top:e-s.top,left:r-s.left})},e.prototype.trigger=function(e){this.options[e]&&this.options[e].apply(this,Array.prototype.slice.call(arguments,1))},e}(),l=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.renderSegHtml=function(e,r){var n,i,o=this.context,s=o.view,l=o.options,a=e.eventRange,d=a.def,c=a.ui,h=d.allDay,p=s.computeEventDraggable(d,c),u=h&&e.isStart&&s.computeEventStartResizable(d,c),f=h&&e.isEnd&&s.computeEventEndResizable(d,c),g=this.getSegClasses(e,p,u||f,r),m=t.cssToStr(this.getSkinCss(c)),y="";return g.unshift("fc-day-grid-event","fc-h-event"),e.isStart&&(n=this.getTimeText(a))&&(y='<span class="fc-time">'+t.htmlEscape(n)+"</span>"),i='<span class="fc-title">'+(t.htmlEscape(d.title||"")||"&nbsp;")+"</span>",'<a class="'+g.join(" ")+'"'+(d.url?' href="'+t.htmlEscape(d.url)+'"':"")+(m?' style="'+m+'"':"")+'><div class="fc-content">'+("rtl"===l.dir?i+" "+y:y+" "+i)+"</div>"+(u?'<div class="fc-resizer fc-start-resizer"></div>':"")+(f?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},r.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}},r.prototype.computeDisplayEventEnd=function(){return!1},r}(t.FgEventRenderer),a=function(e){function r(t){var r=e.call(this,t.context)||this;return r.dayGrid=t,r}return n(r,e),r.prototype.attachSegs=function(e,t){var r=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach(function(e,t){e.querySelector(".fc-content-skeleton > table").appendChild(r[t].tbodyEl)}),t||this.dayGrid.removeSegPopover()},r.prototype.detachSegs=function(){for(var e,r=this.rowStructs||[];e=r.pop();)t.removeElement(e.tbodyEl);this.rowStructs=null},r.prototype.renderSegRows=function(e){var t,r,n=[];for(t=this.groupSegRows(e),r=0;r<t.length;r++)n.push(this.renderSegRow(r,t[r]));return n},r.prototype.renderSegRow=function(e,r){var n,i,o,s,l,a,d,c=this.dayGrid,h=c.colCnt,p=c.isRtl,u=this.buildSegLevels(r),f=Math.max(1,u.length),g=document.createElement("tbody"),m=[],y=[],v=[];function b(e){for(;o<e;)(d=(v[n-1]||[])[o])?d.rowSpan=(d.rowSpan||1)+1:(d=document.createElement("td"),s.appendChild(d)),y[n][o]=d,v[n][o]=d,o++}for(n=0;n<f;n++){if(i=u[n],o=0,s=document.createElement("tr"),m.push([]),y.push([]),v.push([]),i)for(l=0;l<i.length;l++){a=i[l];var w=p?h-1-a.lastCol:a.firstCol,S=p?h-1-a.firstCol:a.lastCol;for(b(w),d=t.createElement("td",{className:"fc-event-container"},a.el),w!==S?d.colSpan=S-w+1:v[n][o]=d;o<=S;)y[n][o]=d,m[n][o]=a,o++;s.appendChild(d)}b(h);var C=c.renderProps.renderIntroHtml();C&&(c.isRtl?t.appendToElement(s,C):t.prependToElement(s,C)),g.appendChild(s)}return{row:e,tbodyEl:g,cellMatrix:y,segMatrix:m,segLevels:u,segs:r}},r.prototype.buildSegLevels=function(e){var t,r,n,i=this.dayGrid,o=i.isRtl,s=i.colCnt,l=[];for(e=this.sortEventSegs(e),t=0;t<e.length;t++){for(r=e[t],n=0;n<l.length&&d(r,l[n]);n++);r.level=n,r.leftCol=o?s-1-r.lastCol:r.firstCol,r.rightCol=o?s-1-r.firstCol:r.lastCol,(l[n]||(l[n]=[])).push(r)}for(n=0;n<l.length;n++)l[n].sort(c);return l},r.prototype.groupSegRows=function(e){var t,r=[];for(t=0;t<this.dayGrid.rowCnt;t++)r.push([]);for(t=0;t<e.length;t++)r[e[t].row].push(e[t]);return r},r.prototype.computeDisplayEventEnd=function(){return 1===this.dayGrid.colCnt},r}(l);function d(e,t){var r,n;for(r=0;r<t.length;r++)if((n=t[r]).firstCol<=e.lastCol&&n.lastCol>=e.firstCol)return!0;return!1}function c(e,t){return e.leftCol-t.leftCol}var h=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.attachSegs=function(e,r){var n=r.sourceSeg,i=this.rowStructs=this.renderSegRows(e);this.dayGrid.rowEls.forEach(function(e,r){var o,s,l=t.htmlToElement('<div class="fc-mirror-skeleton"><table></table></div>');n&&n.row===r?o=n.el:(o=e.querySelector(".fc-content-skeleton tbody"))||(o=e.querySelector(".fc-content-skeleton table")),s=o.getBoundingClientRect().top-e.getBoundingClientRect().top,l.style.top=s+"px",l.querySelector("table").appendChild(i[r].tbodyEl),e.appendChild(l)})},r}(a),p=function(e){function r(t){var r=e.call(this,t.context)||this;return r.fillSegTag="td",r.dayGrid=t,r}return n(r,e),r.prototype.renderSegs=function(t,r){"bgEvent"===t&&(r=r.filter(function(e){return e.eventRange.def.allDay})),e.prototype.renderSegs.call(this,t,r)},r.prototype.attachSegs=function(e,t){var r,n,i,o=[];for(r=0;r<t.length;r++)n=t[r],i=this.renderFillRow(e,n),this.dayGrid.rowEls[n.row].appendChild(i),o.push(i);return o},r.prototype.renderFillRow=function(e,r){var n,i,o,s=this.dayGrid,l=s.colCnt,a=s.isRtl,d=a?l-1-r.lastCol:r.firstCol,c=(a?l-1-r.firstCol:r.lastCol)+1;n="businessHours"===e?"bgevent":e.toLowerCase(),o=(i=t.htmlToElement('<div class="fc-'+n+'-skeleton"><table><tr></tr></table></div>')).getElementsByTagName("tr")[0],d>0&&t.appendToElement(o,new Array(d+1).join('<td style="pointer-events:none"></td>')),r.el.colSpan=c-d,o.appendChild(r.el),c<l&&t.appendToElement(o,new Array(l-c+1).join('<td style="pointer-events:none"></td>'));var h=s.renderProps.renderIntroHtml();return h&&(s.isRtl?t.appendToElement(o,h):t.prependToElement(o,h)),i},r}(t.FillRenderer),u=function(e){function r(r,n){var i=e.call(this,r,n)||this,o=i.eventRenderer=new f(i),s=i.renderFrame=t.memoizeRendering(i._renderFrame);return i.renderFgEvents=t.memoizeRendering(o.renderSegs.bind(o),o.unrender.bind(o),[s]),i.renderEventSelection=t.memoizeRendering(o.selectByInstanceId.bind(o),o.unselectByInstanceId.bind(o),[i.renderFgEvents]),i.renderEventDrag=t.memoizeRendering(o.hideByHash.bind(o),o.showByHash.bind(o),[s]),i.renderEventResize=t.memoizeRendering(o.hideByHash.bind(o),o.showByHash.bind(o),[s]),r.calendar.registerInteractiveComponent(i,{el:i.el,useEventCenter:!1}),i}return n(r,e),r.prototype.render=function(e){this.renderFrame(e.date),this.renderFgEvents(e.fgSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDragInstances),this.renderEventResize(e.eventResizeInstances)},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderFrame.unrender(),this.calendar.unregisterInteractiveComponent(this)},r.prototype._renderFrame=function(e){var r=this.theme,n=this.dateEnv.format(e,t.createFormatter(this.opt("dayPopoverFormat")));this.el.innerHTML='<div class="fc-header '+r.getClass("popoverHeader")+'"><span class="fc-title">'+t.htmlEscape(n)+'</span><span class="fc-close '+r.getIconClass("close")+'"></span></div><div class="fc-body '+r.getClass("popoverContent")+'"><div class="fc-event-container"></div></div>',this.segContainerEl=this.el.querySelector(".fc-event-container")},r.prototype.queryHit=function(e,r,n,i){var o=this.props.date;if(e<n&&r<i)return{component:this,dateSpan:{allDay:!0,range:{start:o,end:t.addDays(o,1)}},dayEl:this.el,rect:{left:0,top:0,right:n,bottom:i},layer:1}},r}(t.DateComponent),f=function(e){function r(t){var r=e.call(this,t.context)||this;return r.dayTile=t,r}return n(r,e),r.prototype.attachSegs=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];this.dayTile.segContainerEl.appendChild(n.el)}},r.prototype.detachSegs=function(e){for(var r=0,n=e;r<n.length;r++){var i=n[r];t.removeElement(i.el)}},r}(l),g=function(){function e(e){this.context=e}return e.prototype.renderHtml=function(e){var t=[];e.renderIntroHtml&&t.push(e.renderIntroHtml());for(var r=0,n=e.cells;r<n.length;r++){var i=n[r];t.push(m(i.date,e.dateProfile,this.context,i.htmlAttrs))}return e.cells.length||t.push('<td class="fc-day '+this.context.theme.getClass("widgetContent")+'"></td>'),"rtl"===this.context.options.dir&&t.reverse(),"<tr>"+t.join("")+"</tr>"},e}();function m(e,r,n,i){var o=n.dateEnv,s=n.theme,l=t.rangeContainsMarker(r.activeRange,e),a=t.getDayClasses(e,r,n);return a.unshift("fc-day",s.getClass("widgetContent")),'<td class="'+a.join(" ")+'"'+(l?' data-date="'+o.formatIso(e,{omitTime:!0})+'"':"")+(i?" "+i:"")+"></td>"}var y=t.createFormatter({day:"numeric"}),v=t.createFormatter({week:"numeric"}),b=function(e){function r(r,n,i){var o=e.call(this,r,n)||this;o.bottomCoordPadding=0,o.isCellSizesDirty=!1;var s=o.eventRenderer=new a(o),l=o.fillRenderer=new p(o);o.mirrorRenderer=new h(o);var d=o.renderCells=t.memoizeRendering(o._renderCells,o._unrenderCells);return o.renderBusinessHours=t.memoizeRendering(l.renderSegs.bind(l,"businessHours"),l.unrender.bind(l,"businessHours"),[d]),o.renderDateSelection=t.memoizeRendering(l.renderSegs.bind(l,"highlight"),l.unrender.bind(l,"highlight"),[d]),o.renderBgEvents=t.memoizeRendering(l.renderSegs.bind(l,"bgEvent"),l.unrender.bind(l,"bgEvent"),[d]),o.renderFgEvents=t.memoizeRendering(s.renderSegs.bind(s),s.unrender.bind(s),[d]),o.renderEventSelection=t.memoizeRendering(s.selectByInstanceId.bind(s),s.unselectByInstanceId.bind(s),[o.renderFgEvents]),o.renderEventDrag=t.memoizeRendering(o._renderEventDrag,o._unrenderEventDrag,[d]),o.renderEventResize=t.memoizeRendering(o._renderEventResize,o._unrenderEventResize,[d]),o.renderProps=i,o}return n(r,e),r.prototype.render=function(e){var t=e.cells;this.rowCnt=t.length,this.colCnt=t[0].length,this.renderCells(t,e.isRigid),this.renderBusinessHours(e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderBgEvents(e.bgEventSegs),this.renderFgEvents(e.fgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize),this.segPopoverTile&&this.updateSegPopoverTile()},r.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderCells.unrender()},r.prototype.getCellRange=function(e,r){var n=this.props.cells[e][r].date;return{start:n,end:t.addDays(n,1)}},r.prototype.updateSegPopoverTile=function(e,t){var r=this.props;this.segPopoverTile.receiveProps({date:e||this.segPopoverTile.props.date,fgSegs:t||this.segPopoverTile.props.fgSegs,eventSelection:r.eventSelection,eventDragInstances:r.eventDrag?r.eventDrag.affectedInstances:null,eventResizeInstances:r.eventResize?r.eventResize.affectedInstances:null})},r.prototype._renderCells=function(e,r){var n,i,o=this.view,s=this.dateEnv,l=this.rowCnt,a=this.colCnt,d="";for(n=0;n<l;n++)d+=this.renderDayRowHtml(n,r);for(this.el.innerHTML=d,this.rowEls=t.findElements(this.el,".fc-row"),this.cellEls=t.findElements(this.el,".fc-day, .fc-disabled-day"),this.isRtl&&this.cellEls.reverse(),this.rowPositions=new t.PositionCache(this.el,this.rowEls,!1,!0),this.colPositions=new t.PositionCache(this.el,this.cellEls.slice(0,a),!0,!1),n=0;n<l;n++)for(i=0;i<a;i++)this.publiclyTrigger("dayRender",[{date:s.toDate(e[n][i].date),el:this.getCellEl(n,i),view:o}]);this.isCellSizesDirty=!0},r.prototype._unrenderCells=function(){this.removeSegPopover()},r.prototype.renderDayRowHtml=function(e,t){var r=this.theme,n=["fc-row","fc-week",r.getClass("dayRow")];t&&n.push("fc-rigid");var i=new g(this.context);return'<div class="'+n.join(" ")+'"><div class="fc-bg"><table class="'+r.getClass("tableGrid")+'">'+i.renderHtml({cells:this.props.cells[e],dateProfile:this.props.dateProfile,renderIntroHtml:this.renderProps.renderBgIntroHtml})+'</table></div><div class="fc-content-skeleton"><table>'+(this.getIsNumbersVisible()?"<thead>"+this.renderNumberTrHtml(e)+"</thead>":"")+"</table></div></div>"},r.prototype.getIsNumbersVisible=function(){return this.getIsDayNumbersVisible()||this.renderProps.cellWeekNumbersVisible||this.renderProps.colWeekNumbersVisible},r.prototype.getIsDayNumbersVisible=function(){return this.rowCnt>1},r.prototype.renderNumberTrHtml=function(e){var t=this.renderProps.renderNumberIntroHtml(e,this);return"<tr>"+(this.isRtl?"":t)+this.renderNumberCellsHtml(e)+(this.isRtl?t:"")+"</tr>"},r.prototype.renderNumberCellsHtml=function(e){var t,r,n=[];for(t=0;t<this.colCnt;t++)r=this.props.cells[e][t].date,n.push(this.renderNumberCellHtml(r));return this.isRtl&&n.reverse(),n.join("")},r.prototype.renderNumberCellHtml=function(e){var r,n,i=this.view,o=this.dateEnv,s="",l=t.rangeContainsMarker(this.props.dateProfile.activeRange,e),a=this.getIsDayNumbersVisible()&&l;return a||this.renderProps.cellWeekNumbersVisible?((r=t.getDayClasses(e,this.props.dateProfile,this.context)).unshift("fc-day-top"),this.renderProps.cellWeekNumbersVisible&&(n=o.weekDow),s+='<td class="'+r.join(" ")+'"'+(l?' data-date="'+o.formatIso(e,{omitTime:!0})+'"':"")+">",this.renderProps.cellWeekNumbersVisible&&e.getUTCDay()===n&&(s+=t.buildGotoAnchorHtml(i,{date:e,type:"week"},{class:"fc-week-number"},o.format(e,v))),a&&(s+=t.buildGotoAnchorHtml(i,e,{class:"fc-day-number"},o.format(e,y))),s+="</td>"):"<td></td>"},r.prototype.updateSize=function(e){var t=this.fillRenderer,r=this.eventRenderer,n=this.mirrorRenderer;(e||this.isCellSizesDirty||this.view.calendar.isEventsUpdated)&&(this.buildPositionCaches(),this.isCellSizesDirty=!1),t.computeSizes(e),r.computeSizes(e),n.computeSizes(e),t.assignSizes(e),r.assignSizes(e),n.assignSizes(e)},r.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildRowPositions()},r.prototype.buildColPositions=function(){this.colPositions.build()},r.prototype.buildRowPositions=function(){this.rowPositions.build(),this.rowPositions.bottoms[this.rowCnt-1]+=this.bottomCoordPadding},r.prototype.positionToHit=function(e,t){var r=this.colPositions,n=this.rowPositions,i=r.leftToIndex(e),o=n.topToIndex(t);if(null!=o&&null!=i)return{row:o,col:i,dateSpan:{range:this.getCellRange(o,i),allDay:!0},dayEl:this.getCellEl(o,i),relativeRect:{left:r.lefts[i],right:r.rights[i],top:n.tops[o],bottom:n.bottoms[o]}}},r.prototype.getCellEl=function(e,t){return this.cellEls[e*this.colCnt+t]},r.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs))},r.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"))},r.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.fillRenderer.renderSegs("highlight",e.segs),this.mirrorRenderer.renderSegs(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},r.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.fillRenderer.unrender("highlight"),this.mirrorRenderer.unrender(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},r.prototype.removeSegPopover=function(){this.segPopover&&this.segPopover.hide()},r.prototype.limitRows=function(e){var t,r,n=this.eventRenderer.rowStructs||[];for(t=0;t<n.length;t++)this.unlimitRow(t),!1!==(r=!!e&&("number"==typeof e?e:this.computeRowLevelLimit(t)))&&this.limitRow(t,r)},r.prototype.computeRowLevelLimit=function(e){var r,n,i=this.rowEls[e].getBoundingClientRect().bottom,o=t.findChildren(this.eventRenderer.rowStructs[e].tbodyEl);for(r=0;r<o.length;r++)if((n=o[r]).classList.remove("fc-limited"),n.getBoundingClientRect().bottom>i)return r;return!1},r.prototype.limitRow=function(e,r){var n,i,o,s,l,a,d,c,h,p,u,f,g,m,y,v=this,b=this.colCnt,w=this.isRtl,S=this.eventRenderer.rowStructs[e],C=[],E=0,R=function(n){for(;E<n;)(a=v.getCellSegs(e,E,r)).length&&(h=i[r-1][E],y=v.renderMoreLink(e,E,a),m=t.createElement("div",null,y),h.appendChild(m),C.push(m)),E++};if(r&&r<S.segLevels.length){for(n=S.segLevels[r-1],i=S.cellMatrix,(o=t.findChildren(S.tbodyEl).slice(r)).forEach(function(e){e.classList.add("fc-limited")}),s=0;s<n.length;s++){l=n[s];var H=w?b-1-l.lastCol:l.firstCol,D=w?b-1-l.firstCol:l.lastCol;for(R(H),c=[],d=0;E<=D;)a=this.getCellSegs(e,E,r),c.push(a),d+=a.length,E++;if(d){for(p=(h=i[r-1][H]).rowSpan||1,u=[],f=0;f<c.length;f++)g=t.createElement("td",{className:"fc-more-cell",rowSpan:p}),a=c[f],y=this.renderMoreLink(e,H+f,[l].concat(a)),m=t.createElement("div",null,y),g.appendChild(m),u.push(g),C.push(g);h.classList.add("fc-limited"),t.insertAfterElement(h,u),o.push(h)}}R(this.colCnt),S.moreEls=C,S.limitedEls=o}},r.prototype.unlimitRow=function(e){var r=this.eventRenderer.rowStructs[e];r.moreEls&&(r.moreEls.forEach(t.removeElement),r.moreEls=null),r.limitedEls&&(r.limitedEls.forEach(function(e){e.classList.remove("fc-limited")}),r.limitedEls=null)},r.prototype.renderMoreLink=function(e,r,n){var i=this,o=this.view,s=this.dateEnv,l=t.createElement("a",{className:"fc-more"});return l.innerText=this.getMoreLinkText(n.length),l.addEventListener("click",function(t){var l=i.opt("eventLimitClick"),a=i.isRtl?i.colCnt-r-1:r,d=i.props.cells[e][a].date,c=t.currentTarget,h=i.getCellEl(e,r),p=i.getCellSegs(e,r),u=i.resliceDaySegs(p,d),f=i.resliceDaySegs(n,d);"function"==typeof l&&(l=i.publiclyTrigger("eventLimitClick",[{date:s.toDate(d),allDay:!0,dayEl:h,moreEl:c,segs:u,hiddenSegs:f,jsEvent:t,view:o}])),"popover"===l?i.showSegPopover(e,r,c,u):"string"==typeof l&&o.calendar.zoomTo(d,l)}),l},r.prototype.showSegPopover=function(e,r,n,i){var o,l,a=this,d=this.calendar,c=this.view,h=this.theme,p=this.isRtl?this.colCnt-r-1:r,f=n.parentNode;o=1===this.rowCnt?c.el:this.rowEls[e],l={className:"fc-more-popover "+h.getClass("popover"),parentEl:c.el,top:t.computeRect(o).top,autoHide:!0,content:function(t){a.segPopoverTile=new u(a.context,t),a.updateSegPopoverTile(a.props.cells[e][p].date,i)},hide:function(){a.segPopoverTile.destroy(),a.segPopoverTile=null,a.segPopover.destroy(),a.segPopover=null}},this.isRtl?l.right=t.computeRect(f).right+1:l.left=t.computeRect(f).left-1,this.segPopover=new s(l),this.segPopover.show(),d.releaseAfterSizingTriggers()},r.prototype.resliceDaySegs=function(e,r){for(var n=r,o={start:n,end:t.addDays(n,1)},s=[],l=0,a=e;l<a.length;l++){var d=a[l],c=d.eventRange,h=c.range,p=t.intersectRanges(h,o);p&&s.push(i({},d,{eventRange:{def:c.def,ui:i({},c.ui,{durationEditable:!1}),instance:c.instance,range:p},isStart:d.isStart&&p.start.valueOf()===h.start.valueOf(),isEnd:d.isEnd&&p.end.valueOf()===h.end.valueOf()}))}return s},r.prototype.getMoreLinkText=function(e){var t=this.opt("eventLimitText");return"function"==typeof t?t(e):"+"+e+" "+t},r.prototype.getCellSegs=function(e,t,r){for(var n,i=this.eventRenderer.rowStructs[e].segMatrix,o=r||0,s=[];o<i.length;)(n=i[o][t])&&s.push(n),o++;return s},r}(t.DateComponent),w=t.createFormatter({week:"numeric"}),S=function(e){function r(r,n,i,o){var s=e.call(this,r,n,i,o)||this;s.renderHeadIntroHtml=function(){var e=s.theme;return s.colWeekNumbersVisible?'<th class="fc-week-number '+e.getClass("widgetHeader")+'" '+s.weekNumberStyleAttr()+"><span>"+t.htmlEscape(s.opt("weekLabel"))+"</span></th>":""},s.renderDayGridNumberIntroHtml=function(e,r){var n=s.dateEnv,i=r.props.cells[e][0].date;return s.colWeekNumbersVisible?'<td class="fc-week-number" '+s.weekNumberStyleAttr()+">"+t.buildGotoAnchorHtml(s,{date:i,type:"week",forceOff:1===r.colCnt},n.format(i,w))+"</td>":""},s.renderDayGridBgIntroHtml=function(){var e=s.theme;return s.colWeekNumbersVisible?'<td class="fc-week-number '+e.getClass("widgetContent")+'" '+s.weekNumberStyleAttr()+"></td>":""},s.renderDayGridIntroHtml=function(){return s.colWeekNumbersVisible?'<td class="fc-week-number" '+s.weekNumberStyleAttr()+"></td>":""},s.el.classList.add("fc-dayGrid-view"),s.el.innerHTML=s.renderSkeletonHtml(),s.scroller=new t.ScrollComponent("hidden","auto");var l=s.scroller.el;s.el.querySelector(".fc-body > tr > td").appendChild(l),l.classList.add("fc-day-grid-container");var a,d=t.createElement("div",{className:"fc-day-grid"});return l.appendChild(d),s.opt("weekNumbers")?s.opt("weekNumbersWithinDays")?(a=!0,s.colWeekNumbersVisible=!1):(a=!1,s.colWeekNumbersVisible=!0):(s.colWeekNumbersVisible=!1,a=!1),s.dayGrid=new b(s.context,d,{renderNumberIntroHtml:s.renderDayGridNumberIntroHtml,renderBgIntroHtml:s.renderDayGridBgIntroHtml,renderIntroHtml:s.renderDayGridIntroHtml,colWeekNumbersVisible:s.colWeekNumbersVisible,cellWeekNumbersVisible:a}),s}return n(r,e),r.prototype.destroy=function(){e.prototype.destroy.call(this),this.dayGrid.destroy(),this.scroller.destroy()},r.prototype.renderSkeletonHtml=function(){var e=this.theme;return'<table class="'+e.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+e.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+e.getClass("widgetContent")+'"></td></tr></tbody></table>'},r.prototype.weekNumberStyleAttr=function(){return null!=this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},r.prototype.hasRigidRows=function(){var e=this.opt("eventLimit");return e&&"number"!=typeof e},r.prototype.updateSize=function(t,r,n){e.prototype.updateSize.call(this,t,r,n),this.dayGrid.updateSize(t)},r.prototype.updateBaseSize=function(e,r,n){var i,o,s=this.dayGrid,l=this.opt("eventLimit"),a=this.header?this.header.el:null;s.rowEls?(this.colWeekNumbersVisible&&(this.weekNumberWidth=t.matchCellWidths(t.findElements(this.el,".fc-week-number"))),this.scroller.clear(),a&&t.uncompensateScroll(a),s.removeSegPopover(),l&&"number"==typeof l&&s.limitRows(l),i=this.computeScrollerHeight(r),this.setGridHeight(i,n),l&&"number"!=typeof l&&s.limitRows(l),n||(this.scroller.setHeight(i),((o=this.scroller.getScrollbarWidths()).left||o.right)&&(a&&t.compensateScroll(a,o),i=this.computeScrollerHeight(r),this.scroller.setHeight(i)),this.scroller.lockOverflow(o))):n||(i=this.computeScrollerHeight(r),this.scroller.setHeight(i))},r.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},r.prototype.setGridHeight=function(e,r){this.opt("monthMode")?(r&&(e*=this.dayGrid.rowCnt/6),t.distributeHeight(this.dayGrid.rowEls,e,!r)):r?t.undistributeHeight(this.dayGrid.rowEls):t.distributeHeight(this.dayGrid.rowEls,e,!0)},r.prototype.computeDateScroll=function(e){return{top:0}},r.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},r.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},r}(t.View);S.prototype.dateProfileGeneratorClass=o;var C=function(e){function t(t,r){var n=e.call(this,t,r.el)||this;return n.slicer=new E,n.dayGrid=r,t.calendar.registerInteractiveComponent(n,{el:n.dayGrid.el}),n}return n(t,e),t.prototype.destroy=function(){e.prototype.destroy.call(this),this.calendar.unregisterInteractiveComponent(this)},t.prototype.render=function(e){var t=this.dayGrid,r=e.dateProfile,n=e.dayTable;t.receiveProps(i({},this.slicer.sliceProps(e,r,e.nextDayThreshold,t,n),{dateProfile:r,cells:n.cells,isRigid:e.isRigid}))},t.prototype.buildPositionCaches=function(){this.dayGrid.buildPositionCaches()},t.prototype.queryHit=function(e,t){var r=this.dayGrid.positionToHit(e,t);if(r)return{component:this.dayGrid,dateSpan:r.dateSpan,dayEl:r.dayEl,rect:{left:r.relativeRect.left,right:r.relativeRect.right,top:r.relativeRect.top,bottom:r.relativeRect.bottom},layer:0}},t}(t.DateComponent),E=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(t.Slicer),R=function(e){function r(r,n,i,o){var s=e.call(this,r,n,i,o)||this;return s.buildDayTable=t.memoize(H),s.opt("columnHeader")&&(s.header=new t.DayHeader(s.context,s.el.querySelector(".fc-head-container"))),s.simpleDayGrid=new C(s.context,s.dayGrid),s}return n(r,e),r.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.simpleDayGrid.destroy()},r.prototype.render=function(t){e.prototype.render.call(this,t);var r=this.props.dateProfile,n=this.dayTable=this.buildDayTable(r,this.dateProfileGenerator);this.header&&this.header.receiveProps({dateProfile:r,dates:n.headerDates,datesRepDistinctDays:1===n.rowCnt,renderIntroHtml:this.renderHeadIntroHtml}),this.simpleDayGrid.receiveProps({dateProfile:r,dayTable:n,businessHours:t.businessHours,dateSelection:t.dateSelection,eventStore:t.eventStore,eventUiBases:t.eventUiBases,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,isRigid:this.hasRigidRows(),nextDayThreshold:this.nextDayThreshold})},r}(S);function H(e,r){var n=new t.DaySeries(e.renderRange,r);return new t.DayTable(n,/year|month|week/.test(e.currentRangeUnit))}var D=t.createPlugin({defaultView:"dayGridMonth",views:{dayGrid:R,dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}});e.AbstractDayGridView=S,e.DayBgRow=g,e.DayGrid=b,e.DayGridSlicer=E,e.DayGridView=R,e.SimpleDayGrid=C,e.buildBasicDayTable=H,e.default=D,Object.defineProperty(e,"__esModule",{value:!0})});
/*!
FullCalendar List View Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarList={},e.FullCalendar)}(this,function(e,t){"use strict";var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(e){function n(t){var n=e.call(this,t.context)||this;return n.listView=t,n}return r(n,e),n.prototype.attachSegs=function(e){e.length?this.listView.renderSegList(e):this.listView.renderEmptyMessage()},n.prototype.detachSegs=function(){},n.prototype.renderSegHtml=function(e){var n,r=this.context,s=r.view,a=r.theme,i=e.eventRange,o=i.def,l=i.instance,d=i.ui,c=o.url,p=["fc-list-item"].concat(d.classNames),h=d.backgroundColor;return n=o.allDay?t.getAllDayHtml(s):t.isMultiDayRange(i.range)?e.isStart?t.htmlEscape(this._getTimeText(l.range.start,e.end,!1)):e.isEnd?t.htmlEscape(this._getTimeText(e.start,l.range.end,!1)):t.getAllDayHtml(s):t.htmlEscape(this.getTimeText(i)),c&&p.push("fc-has-url"),'<tr class="'+p.join(" ")+'">'+(this.displayEventTime?'<td class="fc-list-item-time '+a.getClass("widgetContent")+'">'+(n||"")+"</td>":"")+'<td class="fc-list-item-marker '+a.getClass("widgetContent")+'"><span class="fc-event-dot"'+(h?' style="background-color:'+h+'"':"")+'></span></td><td class="fc-list-item-title '+a.getClass("widgetContent")+'"><a'+(c?' href="'+t.htmlEscape(c)+'"':"")+">"+t.htmlEscape(o.title||"")+"</a></td></tr>"},n.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:"short"}},n}(t.FgEventRenderer),a=function(e){function n(n,r,a,o){var l=e.call(this,n,r,a,o)||this;l.computeDateVars=t.memoize(i),l.eventStoreToSegs=t.memoize(l._eventStoreToSegs);var d=l.eventRenderer=new s(l);l.renderContent=t.memoizeRendering(d.renderSegs.bind(d),d.unrender.bind(d)),l.el.classList.add("fc-list-view");for(var c=0,p=(l.theme.getClass("listView")||"").split(" ");c<p.length;c++){var h=p[c];h&&l.el.classList.add(h)}return l.scroller=new t.ScrollComponent("hidden","auto"),l.el.appendChild(l.scroller.el),l.contentEl=l.scroller.el,n.calendar.registerInteractiveComponent(l,{el:l.el}),l}return r(n,e),n.prototype.render=function(e){var t=this.computeDateVars(e.dateProfile),n=t.dayDates,r=t.dayRanges;this.dayDates=n,this.renderContent(this.eventStoreToSegs(e.eventStore,e.eventUiBases,r))},n.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderContent.unrender(),this.scroller.destroy(),this.calendar.unregisterInteractiveComponent(this)},n.prototype.updateSize=function(t,n,r){e.prototype.updateSize.call(this,t,n,r),this.eventRenderer.computeSizes(t),this.eventRenderer.assignSizes(t),this.scroller.clear(),r||this.scroller.setHeight(this.computeScrollerHeight(n))},n.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},n.prototype._eventStoreToSegs=function(e,n,r){return this.eventRangesToSegs(t.sliceEventStore(e,n,this.props.dateProfile.activeRange,this.nextDayThreshold).fg,r)},n.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,s=e;r<s.length;r++){var a=s[r];n.push.apply(n,this.eventRangeToSegs(a,t))}return n},n.prototype.eventRangeToSegs=function(e,n){var r,s,a,i=this.dateEnv,o=this.nextDayThreshold,l=e.range,d=e.def.allDay,c=[];for(r=0;r<n.length;r++)if((s=t.intersectRanges(l,n[r]))&&(a={component:this,eventRange:e,start:s.start,end:s.end,isStart:e.isStart&&s.start.valueOf()===l.start.valueOf(),isEnd:e.isEnd&&s.end.valueOf()===l.end.valueOf(),dayIndex:r},c.push(a),!a.isEnd&&!d&&r+1<n.length&&l.end<i.add(n[r+1].start,o))){a.end=l.end,a.isEnd=!0;break}return c},n.prototype.renderEmptyMessage=function(){this.contentEl.innerHTML='<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">'+t.htmlEscape(this.opt("noEventsMessage"))+"</div></div></div>"},n.prototype.renderSegList=function(e){var n,r,s,a=this.groupSegsByDay(e),i=t.htmlToElement('<table class="fc-list-table '+this.calendar.theme.getClass("tableList")+'"><tbody></tbody></table>'),o=i.querySelector("tbody");for(n=0;n<a.length;n++)if(r=a[n])for(o.appendChild(this.buildDayHeaderRow(this.dayDates[n])),r=this.eventRenderer.sortEventSegs(r),s=0;s<r.length;s++)o.appendChild(r[s].el);this.contentEl.innerHTML="",this.contentEl.appendChild(i)},n.prototype.groupSegsByDay=function(e){var t,n,r=[];for(t=0;t<e.length;t++)(r[(n=e[t]).dayIndex]||(r[n.dayIndex]=[])).push(n);return r},n.prototype.buildDayHeaderRow=function(e){var n=this.dateEnv,r=t.createFormatter(this.opt("listDayFormat")),s=t.createFormatter(this.opt("listDayAltFormat"));return t.createElement("tr",{className:"fc-list-heading","data-date":n.formatIso(e,{omitTime:!0})},'<td class="'+(this.calendar.theme.getClass("tableListHeading")||this.calendar.theme.getClass("widgetHeader"))+'" colspan="3">'+(r?t.buildGotoAnchorHtml(this,e,{class:"fc-list-heading-main"},t.htmlEscape(n.format(e,r))):"")+(s?t.buildGotoAnchorHtml(this,e,{class:"fc-list-heading-alt"},t.htmlEscape(n.format(e,s))):"")+"</td>")},n}(t.View);function i(e){for(var n=t.startOfDay(e.renderRange.start),r=e.renderRange.end,s=[],a=[];n<r;)s.push(n),a.push({start:n,end:t.addDays(n,1)}),n=t.addDays(n,1);return{dayDates:s,dayRanges:a}}a.prototype.fgSegSelector=".fc-list-item";var o=t.createPlugin({views:{list:{class:a,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDayAltFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDayAltFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDayAltFormat:{weekday:"long"}}}});e.ListView=a,e.default=o,Object.defineProperty(e,"__esModule",{value:!0})});
/*!
FullCalendar Interaction Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],t):t((e=e||self).FullCalendarInteraction={},e.FullCalendar)}(this,function(e,t){"use strict";var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};t.config.touchMouseIgnoreWait=500;var o=0,a=0,l=!1,s=function(){function e(e){var n=this;this.subjectEl=null,this.downEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!n.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&n.tryStart(e)){var t=n.createEventFromMouse(e,!0);n.emitter.trigger("pointerdown",t),n.initScrollWatch(t),n.shouldIgnoreMove||document.addEventListener("mousemove",n.handleMouseMove),document.addEventListener("mouseup",n.handleMouseUp)}},this.handleMouseMove=function(e){var t=n.createEventFromMouse(e);n.recordCoords(t),n.emitter.trigger("pointermove",t)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",n.handleMouseMove),document.removeEventListener("mouseup",n.handleMouseUp),n.emitter.trigger("pointerup",n.createEventFromMouse(e)),n.cleanup()},this.handleTouchStart=function(e){if(n.tryStart(e)){n.isTouchDragging=!0;var t=n.createEventFromTouch(e,!0);n.emitter.trigger("pointerdown",t),n.initScrollWatch(t);var r=e.target;n.shouldIgnoreMove||r.addEventListener("touchmove",n.handleTouchMove),r.addEventListener("touchend",n.handleTouchEnd),r.addEventListener("touchcancel",n.handleTouchEnd),window.addEventListener("scroll",n.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var t=n.createEventFromTouch(e);n.recordCoords(t),n.emitter.trigger("pointermove",t)},this.handleTouchEnd=function(e){if(n.isDragging){var r=e.target;r.removeEventListener("touchmove",n.handleTouchMove),r.removeEventListener("touchend",n.handleTouchEnd),r.removeEventListener("touchcancel",n.handleTouchEnd),window.removeEventListener("scroll",n.handleTouchScroll,!0),n.emitter.trigger("pointerup",n.createEventFromTouch(e)),n.cleanup(),n.isTouchDragging=!1,o++,setTimeout(function(){o--},t.config.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){n.wasTouchScroll=!0},this.handleScroll=function(e){if(!n.shouldIgnoreMove){var t=window.pageXOffset-n.prevScrollX+n.prevPageX,r=window.pageYOffset-n.prevScrollY+n.prevPageY;n.emitter.trigger("pointermove",{origEvent:e,isTouch:n.isTouchDragging,subjectEl:n.subjectEl,pageX:t,pageY:r,deltaX:t-n.origPageX,deltaY:r-n.origPageY})}},this.containerEl=e,this.emitter=new t.EmitterMixin,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),a++||window.addEventListener("touchmove",c,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),--a||window.removeEventListener("touchmove",c,{passive:!1})},e.prototype.tryStart=function(e){var n=this.querySubjectEl(e),r=e.target;return!(!n||this.handleSelector&&!t.elementClosest(r,this.handleSelector))&&(this.subjectEl=n,this.downEl=r,this.isDragging=!0,this.wasTouchScroll=!1,!0)},e.prototype.cleanup=function(){l=!1,this.isDragging=!1,this.subjectEl=null,this.downEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?t.elementClosest(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return o||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(l=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,r=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},e.prototype.createEventFromTouch=function(e,t){var n,r,i=e.touches,o=0,a=0;return i&&i.length?(n=i[0].pageX,r=i[0].pageY):(n=e.pageX,r=e.pageY),t?(this.origPageX=n,this.origPageY=r):(o=n-this.origPageX,a=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:o,deltaY:a}},e}();function c(e){l&&e.preventDefault()}var d=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,n){var r=this.mirrorEl,i=this.sourceEl.getBoundingClientRect();r.style.transition="top "+n+"ms,left "+n+"ms",t.applyStyle(r,{left:i.left,top:i.top}),t.whenTransitionDone(r,function(){r.style.transition="",e()})},e.prototype.cleanup=function(){this.mirrorEl&&(t.removeElement(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&t.applyStyle(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,n=this.mirrorEl;return n||((n=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),n.classList.add("fc-dragging"),t.applyStyle(n,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(n)),n},e}(),g=function(e){function t(t,n){var r=e.call(this)||this;return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return r(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(t.ScrollController),u=function(e){function n(n,r){return e.call(this,new t.ElementScrollController(n),r)||this}return r(n,e),n.prototype.getEventTarget=function(){return this.scrollController.el},n.prototype.computeClientRect=function(){return t.computeInnerRect(this.scrollController.el)},n}(g),h=function(e){function n(n){return e.call(this,new t.WindowScrollController,n)||this}return r(n,e),n.prototype.getEventTarget=function(){return window},n.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},n.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},n}(g),p="function"==typeof performance?performance.now:Date.now,v=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var n=p();e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,i=null===this.pointerScreenY?0:r-this.pointerScreenY,o=null===this.pointerScreenX?0:n-this.pointerScreenX;i<0?this.everMovedUp=!0:i>0&&(this.everMovedDown=!0),o<0?this.everMovedLeft=!0:o>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(p()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,i=r-e.distance,o=i*i/(r*r)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":n.setScrollLeft(n.getScrollLeft()+o*a);break;case"top":a=-1;case"bottom":n.setScrollTop(n.getScrollTop()+o*a)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,i=0,o=this.scrollCaches;i<o.length;i++){var a=o[i],l=a.clientRect,s=e-l.left,c=l.right-e,d=t-l.top,g=l.bottom-t;s>=0&&c>=0&&d>=0&&g>=0&&(d<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"top",distance:d}),g<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>g)&&(r={scrollCache:a,name:"bottom",distance:g}),s<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>s)&&(r={scrollCache:a,name:"left",distance:s}),c<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"right",distance:c}))}return r},e.prototype.buildCaches=function(){return this.queryScrollEls().map(function(e){return e===window?new h(!1):new u(e,!1)})},e.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t];"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},e}(),f=function(e){function n(n){var r=e.call(this,n)||this;r.delay=null,r.minDistance=0,r.touchScrollAllowed=!0,r.mirrorNeedsRevert=!1,r.isInteracting=!1,r.isDragging=!1,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,r.delayTimeoutId=null,r.onPointerDown=function(e){r.isDragging||(r.isInteracting=!0,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,t.preventSelection(document.body),t.preventContextMenu(document.body),e.isTouch||e.origEvent.preventDefault(),r.emitter.trigger("pointerdown",e),r.pointer.shouldIgnoreMove||(r.mirror.setIsVisible(!1),r.mirror.start(e.subjectEl,e.pageX,e.pageY),r.startDelay(e),r.minDistance||r.handleDistanceSurpassed(e)))},r.onPointerMove=function(e){if(r.isInteracting){if(r.emitter.trigger("pointermove",e),!r.isDistanceSurpassed){var t=r.minDistance,n=e.deltaX,i=e.deltaY;n*n+i*i>=t*t&&r.handleDistanceSurpassed(e)}r.isDragging&&("scroll"!==e.origEvent.type&&(r.mirror.handleMove(e.pageX,e.pageY),r.autoScroller.handleMove(e.pageX,e.pageY)),r.emitter.trigger("dragmove",e))}},r.onPointerUp=function(e){r.isInteracting&&(r.isInteracting=!1,t.allowSelection(document.body),t.allowContextMenu(document.body),r.emitter.trigger("pointerup",e),r.isDragging&&(r.autoScroller.stop(),r.tryStopDrag(e)),r.delayTimeoutId&&(clearTimeout(r.delayTimeoutId),r.delayTimeoutId=null))};var i=r.pointer=new s(n);return i.emitter.on("pointerdown",r.onPointerDown),i.emitter.on("pointermove",r.onPointerMove),i.emitter.on("pointerup",r.onPointerUp),r.mirror=new d,r.autoScroller=new v,r}return r(n,e),n.prototype.destroy=function(){this.pointer.destroy()},n.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout(function(){t.delayTimeoutId=null,t.handleDelayEnd(e)},this.delay):this.handleDelayEnd(e)},n.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},n.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},n.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},n.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},n.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},n.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},n.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},n.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},n.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},n}(t.ElementDragging),E=function(){function e(e){this.origRect=t.computeRect(e),this.scrollCaches=t.getClippingParents(e).map(function(e){return new u(e,!0)})}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++){t[e].destroy()}},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,n){for(var r,i,o={left:e,top:n},a=0,l=this.scrollCaches;a<l.length;a++){var s=l[a];if(r=s.getEventTarget(),i=void 0,"HTML"!==(i=r.tagName)&&"BODY"!==i&&!t.pointInsideRect(o,s.clientRect))return!1}return!0},e}();var m=function(){function e(e,n){var r=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=r.dragging;r.initialHit=null,r.movingHit=null,r.finalHit=null,r.prepareHits(),r.processFirstCoord(e),r.initialHit||!r.requireInitial?(t.setIgnoreMove(!1),r.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){r.emitter.trigger("dragstart",e),r.handleMove(e,!0)},this.handleDragMove=function(e){r.emitter.trigger("dragmove",e),r.handleMove(e)},this.handlePointerUp=function(e){r.releaseHits(),r.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){r.movingHit&&r.emitter.trigger("hitupdate",null,!0,e),r.finalHit=r.movingHit,r.movingHit=null,r.emitter.trigger("dragend",e)},this.droppableStore=n,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new t.EmitterMixin}return e.prototype.processFirstCoord=function(e){var n,r={left:e.pageX,top:e.pageY},i=r,o=e.subjectEl;o!==document&&(n=t.computeRect(o),i=t.constrainPoint(i,n));var a=this.initialHit=this.queryHitForOffset(i.left,i.top);if(a){if(this.useSubjectCenter&&n){var l=t.intersectRects(n,a.rect);l&&(i=t.getRectCenter(l))}this.coordAdjust=t.diffPoints(i,r)}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&S(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=t.mapHash(this.droppableStore,function(e){return e.component.buildPositionCaches(),new E(e.el)})},e.prototype.releaseHits=function(){var e=this.offsetTrackers;for(var t in e)e[t].destroy();this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,n){var r=this.droppableStore,i=this.offsetTrackers,o=null;for(var a in r){var l=r[a].component,s=i[a];if(s.isWithinClipping(e,n)){var c=s.computeLeft(),d=s.computeTop(),g=e-c,u=n-d,h=s.origRect,p=h.right-h.left,v=h.bottom-h.top;if(g>=0&&g<p&&u>=0&&u<v){var f=l.queryHit(g,u,p,v);!f||l.props.dateProfile&&!t.rangeContainsRange(l.props.dateProfile.activeRange,f.dateSpan.range)||o&&!(f.layer>o.layer)||(f.rect.left+=c,f.rect.right+=c,f.rect.top+=d,f.rect.bottom+=d,o=f)}}}return o},e}();function S(e,n){return!e&&!n||Boolean(e)===Boolean(n)&&t.isDateSpansEqual(e.dateSpan,n.dateSpan)}var y=function(e){function n(n){var r=e.call(this,n)||this;r.handlePointerDown=function(e){var t=r.dragging;t.setIgnoreMove(!r.component.isValidDateDownEl(t.pointer.downEl))},r.handleDragEnd=function(e){var t=r.component;if(!r.dragging.pointer.wasTouchScroll){var n=r.hitDragging,i=n.initialHit,o=n.finalHit;i&&o&&S(i,o)&&t.calendar.triggerDateClick(i.dateSpan,i.dayEl,t.view,e.origEvent)}};var i=n.component;r.dragging=new f(i.el),r.dragging.autoScroller.isEnabled=!1;var o=r.hitDragging=new m(r.dragging,t.interactionSettingsToStore(n));return o.emitter.on("pointerdown",r.handlePointerDown),o.emitter.on("dragend",r.handleDragEnd),r}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n}(t.Interaction),D=function(e){function n(n){var r=e.call(this,n)||this;r.dragSelection=null,r.handlePointerDown=function(e){var t=r,n=t.component,i=t.dragging,o=n.opt("selectable")&&n.isValidDateDownEl(e.origEvent.target);i.setIgnoreMove(!o),i.delay=e.isTouch?function(e){var t=e.opt("selectLongPressDelay");null==t&&(t=e.opt("longPressDelay"));return t}(n):null},r.handleDragStart=function(e){r.component.calendar.unselect(e)},r.handleHitUpdate=function(e,n){var o=r.component.calendar,a=null,l=!1;e&&((a=function(e,n,r){var o=e.dateSpan,a=n.dateSpan,l=[o.range.start,o.range.end,a.range.start,a.range.end];l.sort(t.compareNumbers);for(var s={},c=0,d=r;c<d.length;c++){var g=d[c],u=g(e,n);if(!1===u)return null;u&&i(s,u)}return s.range={start:l[0],end:l[3]},s.allDay=o.allDay,s}(r.hitDragging.initialHit,e,o.pluginSystem.hooks.dateSelectionTransformers))&&r.component.isDateSelectionValid(a)||(l=!0,a=null)),a?o.dispatch({type:"SELECT_DATES",selection:a}):n||o.dispatch({type:"UNSELECT_DATES"}),l?t.disableCursor():t.enableCursor(),n||(r.dragSelection=a)},r.handlePointerUp=function(e){r.dragSelection&&(r.component.calendar.triggerDateSelect(r.dragSelection,e),r.dragSelection=null)};var o=n.component,a=r.dragging=new f(o.el);a.touchScrollAllowed=!1,a.minDistance=o.opt("selectMinDistance")||0,a.autoScroller.isEnabled=o.opt("dragScroll");var l=r.hitDragging=new m(r.dragging,t.interactionSettingsToStore(n));return l.emitter.on("pointerdown",r.handlePointerDown),l.emitter.on("dragstart",r.handleDragStart),l.emitter.on("hitupdate",r.handleHitUpdate),l.emitter.on("pointerup",r.handlePointerUp),r}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n}(t.Interaction);var w=function(e){function n(r){var o=e.call(this,r)||this;o.subjectSeg=null,o.isDragging=!1,o.eventRange=null,o.relevantEvents=null,o.receivingCalendar=null,o.validMutation=null,o.mutatedRelevantEvents=null,o.handlePointerDown=function(e){var n=e.origEvent.target,r=o,i=r.component,a=r.dragging,l=a.mirror,s=i.calendar,c=o.subjectSeg=t.getElSeg(e.subjectEl),d=(o.eventRange=c.eventRange).instance.instanceId;o.relevantEvents=t.getRelevantEvents(s.state.eventStore,d),a.minDistance=e.isTouch?0:i.opt("eventDragMinDistance"),a.delay=e.isTouch&&d!==i.props.eventSelection?function(e){var t=e.opt("eventLongPressDelay");null==t&&(t=e.opt("longPressDelay"));return t}(i):null,l.parentNode=s.el,l.revertDuration=i.opt("dragRevertDuration");var g=i.isValidSegDownEl(n)&&!t.elementClosest(n,".fc-resizer");a.setIgnoreMove(!g),o.isDragging=g&&e.subjectEl.classList.contains("fc-draggable")},o.handleDragStart=function(e){var n=o.component.calendar,r=o.eventRange,i=r.instance.instanceId;e.isTouch?i!==o.component.props.eventSelection&&n.dispatch({type:"SELECT_EVENT",eventInstanceId:i}):n.dispatch({type:"UNSELECT_EVENT"}),o.isDragging&&(n.unselect(e),n.publiclyTrigger("eventDragStart",[{el:o.subjectSeg.el,event:new t.EventApi(n,r.def,r.instance),jsEvent:e.origEvent,view:o.component.view}]))},o.handleHitUpdate=function(e,n){if(o.isDragging){var r=o.relevantEvents,i=o.hitDragging.initialHit,a=o.component.calendar,l=null,s=null,c=null,d=!1,g={affectedEvents:r,mutatedEvents:t.createEmptyEventStore(),isEvent:!0,origSeg:o.subjectSeg};if(e){var u=e.component;a===(l=u.calendar)||u.opt("editable")&&u.opt("droppable")?(s=function(e,n,r){var i=e.dateSpan,o=n.dateSpan,a=i.range.start,l=o.range.start,s={};i.allDay!==o.allDay&&(s.allDay=o.allDay,s.hasEnd=n.component.opt("allDayMaintainDuration"),o.allDay&&(a=t.startOfDay(a)));var c=t.diffDates(a,l,e.component.dateEnv,e.component===n.component?e.component.largeUnit:null);c.milliseconds&&(s.allDay=!1);for(var d={datesDelta:c,standardProps:s},g=0,u=r;g<u.length;g++){var h=u[g];h(d,e,n)}return d}(i,e,l.pluginSystem.hooks.eventDragMutationMassagers))&&(c=t.applyMutationToEventStore(r,l.eventUiBases,s,l),g.mutatedEvents=c,u.isInteractionValid(g)||(d=!0,s=null,c=null,g.mutatedEvents=t.createEmptyEventStore())):l=null}o.displayDrag(l,g),d?t.disableCursor():t.enableCursor(),n||(a===l&&S(i,e)&&(s=null),o.dragging.setMirrorNeedsRevert(!s),o.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-mirror")),o.receivingCalendar=l,o.validMutation=s,o.mutatedRelevantEvents=c)}},o.handlePointerUp=function(){o.isDragging||o.cleanup()},o.handleDragEnd=function(e){if(o.isDragging){var n=o.component.calendar,r=o.component.view,a=o,l=a.receivingCalendar,s=a.validMutation,c=o.eventRange.def,d=o.eventRange.instance,g=new t.EventApi(n,c,d),u=o.relevantEvents,h=o.mutatedRelevantEvents,p=o.hitDragging.finalHit;if(o.clearDrag(),n.publiclyTrigger("eventDragStop",[{el:o.subjectSeg.el,event:g,jsEvent:e.origEvent,view:r}]),s){if(l===n){n.dispatch({type:"MERGE_EVENTS",eventStore:h});for(var v={},f=0,E=n.pluginSystem.hooks.eventDropTransformers;f<E.length;f++){var m=E[f];i(v,m(s,n))}var S=i({},v,{el:e.subjectEl,delta:s.datesDelta,oldEvent:g,event:new t.EventApi(n,h.defs[c.defId],d?h.instances[d.instanceId]:null),revert:function(){n.dispatch({type:"MERGE_EVENTS",eventStore:u})},jsEvent:e.origEvent,view:r});n.publiclyTrigger("eventDrop",[S])}else if(l){n.publiclyTrigger("eventLeave",[{draggedEl:e.subjectEl,event:g,view:r}]),n.dispatch({type:"REMOVE_EVENT_INSTANCES",instances:o.mutatedRelevantEvents.instances}),l.dispatch({type:"MERGE_EVENTS",eventStore:o.mutatedRelevantEvents}),e.isTouch&&l.dispatch({type:"SELECT_EVENT",eventInstanceId:d.instanceId});var y=i({},l.buildDatePointApi(p.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:p.component});l.publiclyTrigger("drop",[y]),l.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new t.EventApi(l,h.defs[c.defId],h.instances[d.instanceId]),view:p.component}])}}else n.publiclyTrigger("_noEventDrop")}o.cleanup()};var a=o.component,l=o.dragging=new f(a.el);l.pointer.selector=n.SELECTOR,l.touchScrollAllowed=!1,l.autoScroller.isEnabled=a.opt("dragScroll");var s=o.hitDragging=new m(o.dragging,t.interactionSettingsStore);return s.useSubjectCenter=r.useEventCenter,s.emitter.on("pointerdown",o.handlePointerDown),s.emitter.on("dragstart",o.handleDragStart),s.emitter.on("hitupdate",o.handleHitUpdate),s.emitter.on("pointerup",o.handlePointerUp),s.emitter.on("dragend",o.handleDragEnd),o}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n.prototype.displayDrag=function(e,n){var r=this.component.calendar,i=this.receivingCalendar;i&&i!==e&&(i===r?i.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:n.affectedEvents,mutatedEvents:t.createEmptyEventStore(),isEvent:!0,origSeg:n.origSeg}}):i.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:n})},n.prototype.clearDrag=function(){var e=this.component.calendar,t=this.receivingCalendar;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},n.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingCalendar=null,this.validMutation=null,this.mutatedRelevantEvents=null},n.SELECTOR=".fc-draggable, .fc-resizable",n}(t.Interaction);var T=function(e){function n(n){var r=e.call(this,n)||this;r.draggingSeg=null,r.eventRange=null,r.relevantEvents=null,r.validMutation=null,r.mutatedRelevantEvents=null,r.handlePointerDown=function(e){var t=r.component,n=r.querySeg(e),i=r.eventRange=n.eventRange;r.dragging.minDistance=t.opt("eventDragMinDistance"),r.dragging.setIgnoreMove(!r.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&r.component.props.eventSelection!==i.instance.instanceId)},r.handleDragStart=function(e){var n=r.component.calendar,i=r.eventRange;r.relevantEvents=t.getRelevantEvents(n.state.eventStore,r.eventRange.instance.instanceId),r.draggingSeg=r.querySeg(e),n.unselect(),n.publiclyTrigger("eventResizeStart",[{el:r.draggingSeg.el,event:new t.EventApi(n,i.def,i.instance),jsEvent:e.origEvent,view:r.component.view}])},r.handleHitUpdate=function(e,n,o){var a=r.component.calendar,l=r.relevantEvents,s=r.hitDragging.initialHit,c=r.eventRange.instance,d=null,g=null,u=!1,h={affectedEvents:l,mutatedEvents:t.createEmptyEventStore(),isEvent:!0,origSeg:r.draggingSeg};e&&(d=function(e,n,r,o,a){for(var l=e.component.dateEnv,s=e.dateSpan.range.start,c=n.dateSpan.range.start,d=t.diffDates(s,c,l,e.component.largeUnit),g={},u=0,h=a;u<h.length;u++){var p=h[u],v=p(e,n);if(!1===v)return null;v&&i(g,v)}if(r){if(l.add(o.start,d)<o.end)return g.startDelta=d,g}else if(l.add(o.end,d)>o.start)return g.endDelta=d,g;return null}(s,e,o.subjectEl.classList.contains("fc-start-resizer"),c.range,a.pluginSystem.hooks.eventResizeJoinTransforms)),d&&(g=t.applyMutationToEventStore(l,a.eventUiBases,d,a),h.mutatedEvents=g,r.component.isInteractionValid(h)||(u=!0,d=null,g=null,h.mutatedEvents=null)),g?a.dispatch({type:"SET_EVENT_RESIZE",state:h}):a.dispatch({type:"UNSET_EVENT_RESIZE"}),u?t.disableCursor():t.enableCursor(),n||(d&&S(s,e)&&(d=null),r.validMutation=d,r.mutatedRelevantEvents=g)},r.handleDragEnd=function(e){var n=r.component.calendar,i=r.component.view,o=r.eventRange.def,a=r.eventRange.instance,l=new t.EventApi(n,o,a),s=r.relevantEvents,c=r.mutatedRelevantEvents;n.publiclyTrigger("eventResizeStop",[{el:r.draggingSeg.el,event:l,jsEvent:e.origEvent,view:i}]),r.validMutation?(n.dispatch({type:"MERGE_EVENTS",eventStore:c}),n.publiclyTrigger("eventResize",[{el:r.draggingSeg.el,startDelta:r.validMutation.startDelta||t.createDuration(0),endDelta:r.validMutation.endDelta||t.createDuration(0),prevEvent:l,event:new t.EventApi(n,c.defs[o.defId],a?c.instances[a.instanceId]:null),revert:function(){n.dispatch({type:"MERGE_EVENTS",eventStore:s})},jsEvent:e.origEvent,view:i}])):n.publiclyTrigger("_noEventResize"),r.draggingSeg=null,r.relevantEvents=null,r.validMutation=null};var o=n.component,a=r.dragging=new f(o.el);a.pointer.selector=".fc-resizer",a.touchScrollAllowed=!1,a.autoScroller.isEnabled=o.opt("dragScroll");var l=r.hitDragging=new m(r.dragging,t.interactionSettingsToStore(n));return l.emitter.on("pointerdown",r.handlePointerDown),l.emitter.on("dragstart",r.handleDragStart),l.emitter.on("hitupdate",r.handleHitUpdate),l.emitter.on("dragend",r.handleDragEnd),r}return r(n,e),n.prototype.destroy=function(){this.dragging.destroy()},n.prototype.querySeg=function(e){return t.getElSeg(t.elementClosest(e.subjectEl,this.component.fgSegSelector))},n}(t.Interaction);var M=function(){function e(e){var n=this;this.isRecentPointerDateSelect=!1,this.onSelect=function(e){e.jsEvent&&(n.isRecentPointerDateSelect=!0)},this.onDocumentPointerUp=function(e){var r=n,i=r.calendar,o=r.documentPointer,a=i.state;if(!o.wasTouchScroll){if(a.dateSelection&&!n.isRecentPointerDateSelect){var l=i.viewOpt("unselectAuto"),s=i.viewOpt("unselectCancel");!l||l&&t.elementClosest(o.downEl,s)||i.unselect(e)}a.eventSelection&&!t.elementClosest(o.downEl,w.SELECTOR)&&i.dispatch({type:"UNSELECT_EVENT"})}n.isRecentPointerDateSelect=!1},this.calendar=e;var r=this.documentPointer=new s(document);r.shouldIgnoreMove=!0,r.shouldWatchScroll=!1,r.emitter.on("pointerup",this.onDocumentPointerUp),e.on("select",this.onSelect)}return e.prototype.destroy=function(){this.calendar.off("select",this.onSelect),this.documentPointer.destroy()},e}(),b=function(){function e(e,n){var r=this;this.receivingCalendar=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){r.dragMeta=r.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,n,o){var a=r.hitDragging.dragging,l=null,s=null,c=!1,d={affectedEvents:t.createEmptyEventStore(),mutatedEvents:t.createEmptyEventStore(),isEvent:r.dragMeta.create,origSeg:null};e&&(l=e.component.calendar,r.canDropElOnCalendar(o.subjectEl,l)&&(s=function(e,n,r){for(var o=i({},n.leftoverProps),a=0,l=r.pluginSystem.hooks.externalDefTransforms;a<l.length;a++){var s=l[a];i(o,s(e,n))}var c=t.parseEventDef(o,n.sourceId,e.allDay,r.opt("forceEventDuration")||Boolean(n.duration),r),d=e.range.start;e.allDay&&n.startTime&&(d=r.dateEnv.add(d,n.startTime));var g=n.duration?r.dateEnv.add(d,n.duration):r.getDefaultEventEnd(e.allDay,d),u=t.createEventInstance(c.defId,{start:d,end:g});return{def:c,instance:u}}(e.dateSpan,r.dragMeta,l),d.mutatedEvents=t.eventTupleToStore(s),(c=!t.isInteractionValid(d,l))&&(d.mutatedEvents=t.createEmptyEventStore(),s=null))),r.displayDrag(l,d),a.setMirrorIsVisible(n||!s||!document.querySelector(".fc-mirror")),c?t.disableCursor():t.enableCursor(),n||(a.setMirrorNeedsRevert(!s),r.receivingCalendar=l,r.droppableEvent=s)},this.handleDragEnd=function(e){var n=r,o=n.receivingCalendar,a=n.droppableEvent;if(r.clearDrag(),o&&a){var l=r.hitDragging.finalHit,s=l.component.view,c=r.dragMeta,d=i({},o.buildDatePointApi(l.dateSpan),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:s});o.publiclyTrigger("drop",[d]),c.create&&(o.dispatch({type:"MERGE_EVENTS",eventStore:t.eventTupleToStore(a)}),e.isTouch&&o.dispatch({type:"SELECT_EVENT",eventInstanceId:a.instance.instanceId}),o.publiclyTrigger("eventReceive",[{draggedEl:e.subjectEl,event:new t.EventApi(o,a.def,a.instance),view:s}]))}r.receivingCalendar=null,r.droppableEvent=null};var o=this.hitDragging=new m(e,t.interactionSettingsStore);o.requireInitial=!1,o.emitter.on("dragstart",this.handleDragStart),o.emitter.on("hitupdate",this.handleHitUpdate),o.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=n}return e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?t.parseDragMeta(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?t.parseDragMeta(this.suppliedDragMeta(e)):(n=function(e,n){var r=t.config.dataAttrPrefix,i=(r?r+"-":"")+n;return e.getAttribute("data-"+i)||""}(e,"event"),r=n?JSON.parse(n):{create:!1},t.parseDragMeta(r));var n,r},e.prototype.displayDrag=function(e,t){var n=this.receivingCalendar;n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingCalendar&&this.receivingCalendar.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,n){var r=n.opt("dropAccept");return"function"==typeof r?r(e):"string"!=typeof r||!r||Boolean(t.elementMatches(e,r))},e}();t.config.dataAttrPrefix="";var C=function(){function e(e,n){var r=this;void 0===n&&(n={}),this.handlePointerDown=function(e){var n=r.dragging,i=r.settings,o=i.minDistance,a=i.longPressDelay;n.minDistance=null!=o?o:e.isTouch?0:t.globalDefaults.eventDragMinDistance,n.delay=e.isTouch?null!=a?a:t.globalDefaults.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&r.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&r.dragging.mirror.getMirrorEl().classList.add("fc-selected")},this.settings=n;var i=this.dragging=new f(e);i.touchScrollAllowed=!1,null!=n.itemSelector&&(i.pointer.selector=n.itemSelector),null!=n.appendTo&&(i.mirror.parentNode=n.appendTo),i.emitter.on("pointerdown",this.handlePointerDown),i.emitter.on("dragstart",this.handleDragStart),new b(i,n.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}(),R=function(e){function t(t){var n=e.call(this,t)||this;n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)};var r=n.pointer=new s(t);return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}return r(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}},t}(t.ElementDragging),I=function(){function e(e,t){var n=document;e===document||e instanceof Element?(n=e,t=t||{}):t=e||{};var r=this.dragging=new R(n);"string"==typeof t.itemSelector?r.pointer.selector=t.itemSelector:n===document&&(r.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(r.mirrorSelector=t.mirrorSelector),new b(r,t.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}(),P=t.createPlugin({componentInteractions:[y,D,w,T],calendarInteractions:[M],elementDraggingImpl:f});e.Draggable=C,e.FeaturefulElementDragging=f,e.PointerDragging=s,e.ThirdPartyDraggable=I,e.default=P,Object.defineProperty(e,"__esModule",{value:!0})});
/*!
FullCalendar Time Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core"),require("@fullcalendar/daygrid")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core","@fullcalendar/daygrid"],t):t((e=e||self).FullCalendarTimeGrid={},e.FullCalendar,e.FullCalendarDayGrid)}(this,function(e,t,r){"use strict";var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function n(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e){function r(r){var i=e.call(this,r.context)||this;return i.timeGrid=r,i.fullTimeFormat=t.createFormatter({hour:"numeric",minute:"2-digit",separator:i.context.options.defaultRangeSeparator}),i}return n(r,e),r.prototype.attachSegs=function(e,t){for(var r=this.timeGrid.groupSegsByCol(e),i=0;i<r.length;i++)r[i]=this.sortEventSegs(r[i]);this.segsByCol=r,this.timeGrid.attachSegsByCol(r,this.timeGrid.fgContainerEls)},r.prototype.detachSegs=function(e){e.forEach(function(e){t.removeElement(e.el)}),this.segsByCol=null},r.prototype.computeSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.computeSegVerticals(e),r)for(var n=0;n<i;n++)this.computeSegHorizontals(r[n])},r.prototype.assignSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.assignSegVerticals(e),r)for(var n=0;n<i;n++)this.assignSegCss(r[n])},r.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:!1}},r.prototype.computeDisplayEventEnd=function(){return!0},r.prototype.renderSegHtml=function(e,r){var i,n,o,s=this.context.view,a=e.eventRange,l=a.def,d=a.ui,c=l.allDay,h=s.computeEventDraggable(l,d),u=e.isStart&&s.computeEventStartResizable(l,d),p=e.isEnd&&s.computeEventEndResizable(l,d),f=this.getSegClasses(e,h,u||p,r),g=t.cssToStr(this.getSkinCss(d));if(f.unshift("fc-time-grid-event"),t.isMultiDayRange(a.range)){if(e.isStart||e.isEnd){var m=e.start,y=e.end;i=this._getTimeText(m,y,c),n=this._getTimeText(m,y,c,this.fullTimeFormat),o=this._getTimeText(m,y,c,null,!1)}}else i=this.getTimeText(a),n=this.getTimeText(a,this.fullTimeFormat),o=this.getTimeText(a,null,!1);return'<a class="'+f.join(" ")+'"'+(l.url?' href="'+t.htmlEscape(l.url)+'"':"")+(g?' style="'+g+'"':"")+'><div class="fc-content">'+(i?'<div class="fc-time" data-start="'+t.htmlEscape(o)+'" data-full="'+t.htmlEscape(n)+'"><span>'+t.htmlEscape(i)+"</span></div>":"")+(l.title?'<div class="fc-title">'+t.htmlEscape(l.title)+"</div>":"")+"</div>"+(p?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},r.prototype.computeSegHorizontals=function(e){var t,r,i;if(function(e){var t,r,i,n,o;for(t=0;t<e.length;t++)for(r=e[t],i=0;i<r.length;i++)for((n=r[i]).forwardSegs=[],o=t+1;o<e.length;o++)l(n,e[o],n.forwardSegs)}(t=function(e){var t,r,i,n=[];for(t=0;t<e.length;t++){for(r=e[t],i=0;i<n.length&&l(r,n[i]).length;i++);r.level=i,(n[i]||(n[i]=[])).push(r)}return n}(e)),r=t[0]){for(i=0;i<r.length;i++)a(r[i]);for(i=0;i<r.length;i++)this.computeSegForwardBack(r[i],0,0)}},r.prototype.computeSegForwardBack=function(e,t,r){var i,n=e.forwardSegs;if(void 0===e.forwardCoord)for(n.length?(this.sortForwardSegs(n),this.computeSegForwardBack(n[0],t+1,r),e.forwardCoord=n[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-r)/(t+1),i=0;i<n.length;i++)this.computeSegForwardBack(n[i],0,e.forwardCoord)},r.prototype.sortForwardSegs=function(e){var r=e.map(d),i=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(this.context.view.eventOrderSpecs);return r.sort(function(e,r){return t.compareByFieldSpecs(e,r,i)}),r.map(function(e){return e._seg})},r.prototype.assignSegCss=function(e){for(var r=0,i=e;r<i.length;r++){var n=i[r];t.applyStyle(n.el,this.generateSegCss(n)),n.level>0&&n.el.classList.add("fc-time-grid-event-inset"),n.eventRange.def.title&&n.bottom-n.top<30&&n.el.classList.add("fc-short")}},r.prototype.generateSegCss=function(e){var t,r,i=this.context.options.slotEventOverlap,n=e.backwardCoord,o=e.forwardCoord,s=this.timeGrid.generateSegVerticalCss(e),a=this.timeGrid.isRtl;return i&&(o=Math.min(1,n+2*(o-n))),a?(t=1-o,r=n):(t=n,r=1-o),s.zIndex=e.level+1,s.left=100*t+"%",s.right=100*r+"%",i&&e.forwardPressure&&(s[a?"marginLeft":"marginRight"]=20),s},r}(t.FgEventRenderer);function a(e){var t,r,i=e.forwardSegs,n=0;if(void 0===e.forwardPressure){for(t=0;t<i.length;t++)a(r=i[t]),n=Math.max(n,1+r.forwardPressure);e.forwardPressure=n}}function l(e,t,r){void 0===r&&(r=[]);for(var i=0;i<t.length;i++)n=e,o=t[i],n.bottom>o.top&&n.top<o.bottom&&r.push(t[i]);var n,o;return r}function d(e){var r=t.buildSegCompareObj(e);return r.forwardPressure=e.forwardPressure,r.backwardCoord=e.backwardCoord,r}var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.attachSegs=function(e,t){this.segsByCol=this.timeGrid.groupSegsByCol(e),this.timeGrid.attachSegsByCol(this.segsByCol,this.timeGrid.mirrorContainerEls),this.sourceSeg=t.sourceSeg},t.prototype.generateSegCss=function(t){var r=e.prototype.generateSegCss.call(this,t),i=this.sourceSeg;if(i&&i.col===t.col){var n=e.prototype.generateSegCss.call(this,i);r.left=n.left,r.right=n.right,r.marginLeft=n.marginLeft,r.marginRight=n.marginRight}return r},t}(s),h=function(e){function t(t){var r=e.call(this,t.context)||this;return r.timeGrid=t,r}return n(t,e),t.prototype.attachSegs=function(e,t){var r,i=this.timeGrid;return"bgEvent"===e?r=i.bgContainerEls:"businessHours"===e?r=i.businessContainerEls:"highlight"===e&&(r=i.highlightContainerEls),i.attachSegsByCol(i.groupSegsByCol(t),r),t.map(function(e){return e.el})},t.prototype.computeSegSizes=function(e){this.timeGrid.computeSegVerticals(e)},t.prototype.assignSegSizes=function(e){this.timeGrid.assignSegVerticals(e)},t}(t.FillRenderer),u=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}],p=function(e){function i(r,i,n){var o=e.call(this,r,i)||this;o.isSlatSizesDirty=!1,o.isColSizesDirty=!1,o.renderSlats=t.memoizeRendering(o._renderSlats);var a=o.eventRenderer=new s(o),l=o.fillRenderer=new h(o);o.mirrorRenderer=new c(o);var d=o.renderColumns=t.memoizeRendering(o._renderColumns,o._unrenderColumns);return o.renderBusinessHours=t.memoizeRendering(l.renderSegs.bind(l,"businessHours"),l.unrender.bind(l,"businessHours"),[d]),o.renderDateSelection=t.memoizeRendering(o._renderDateSelection,o._unrenderDateSelection,[d]),o.renderFgEvents=t.memoizeRendering(a.renderSegs.bind(a),a.unrender.bind(a),[d]),o.renderBgEvents=t.memoizeRendering(l.renderSegs.bind(l,"bgEvent"),l.unrender.bind(l,"bgEvent"),[d]),o.renderEventSelection=t.memoizeRendering(a.selectByInstanceId.bind(a),a.unselectByInstanceId.bind(a),[o.renderFgEvents]),o.renderEventDrag=t.memoizeRendering(o._renderEventDrag,o._unrenderEventDrag,[d]),o.renderEventResize=t.memoizeRendering(o._renderEventResize,o._unrenderEventResize,[d]),o.processOptions(),i.innerHTML='<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider '+o.theme.getClass("widgetHeader")+'" style="display:none" />',o.rootBgContainerEl=i.querySelector(".fc-bg"),o.slatContainerEl=i.querySelector(".fc-slats"),o.bottomRuleEl=i.querySelector(".fc-divider"),o.renderProps=n,o}return n(i,e),i.prototype.processOptions=function(){var e,r,i=this.opt("slotDuration"),n=this.opt("snapDuration");i=t.createDuration(i),n=n?t.createDuration(n):i,null===(e=t.wholeDivideDurations(i,n))&&(n=i,e=1),this.slotDuration=i,this.snapDuration=n,this.snapsPerSlot=e,r=this.opt("slotLabelFormat"),Array.isArray(r)&&(r=r[r.length-1]),this.labelFormat=t.createFormatter(r||{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"}),r=this.opt("slotLabelInterval"),this.labelInterval=r?t.createDuration(r):this.computeLabelInterval(i)},i.prototype.computeLabelInterval=function(e){var r,i,n;for(r=u.length-1;r>=0;r--)if(i=t.createDuration(u[r]),null!==(n=t.wholeDivideDurations(i,e))&&n>1)return i;return e},i.prototype.render=function(e){var t=e.cells;this.colCnt=t.length,this.renderSlats(e.dateProfile),this.renderColumns(e.cells,e.dateProfile),this.renderBusinessHours(e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderFgEvents(e.fgEventSegs),this.renderBgEvents(e.bgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize)},i.prototype.destroy=function(){e.prototype.destroy.call(this),this.renderSlats.unrender(),this.renderColumns.unrender()},i.prototype.updateSize=function(e){var t=this.fillRenderer,r=this.eventRenderer,i=this.mirrorRenderer;(e||this.isSlatSizesDirty)&&(this.buildSlatPositions(),this.isSlatSizesDirty=!1),(e||this.isColSizesDirty)&&(this.buildColPositions(),this.isColSizesDirty=!1),t.computeSizes(e),r.computeSizes(e),i.computeSizes(e),t.assignSizes(e),r.assignSizes(e),i.assignSizes(e)},i.prototype._renderSlats=function(e){var r=this.theme;this.slatContainerEl.innerHTML='<table class="'+r.getClass("tableGrid")+'">'+this.renderSlatRowHtml(e)+"</table>",this.slatEls=t.findElements(this.slatContainerEl,"tr"),this.slatPositions=new t.PositionCache(this.el,this.slatEls,!1,!0),this.isSlatSizesDirty=!0},i.prototype.renderSlatRowHtml=function(e){for(var r,i,n,o=this.dateEnv,s=this.theme,a=this.isRtl,l="",d=t.startOfDay(e.renderRange.start),c=e.minTime,h=t.createDuration(0);t.asRoughMs(c)<t.asRoughMs(e.maxTime);)r=o.add(d,c),i=null!==t.wholeDivideDurations(h,this.labelInterval),n='<td class="fc-axis fc-time '+s.getClass("widgetContent")+'">'+(i?"<span>"+t.htmlEscape(o.format(r,this.labelFormat))+"</span>":"")+"</td>",l+='<tr data-time="'+t.formatIsoTimeString(r)+'"'+(i?"":' class="fc-minor"')+">"+(a?"":n)+'<td class="'+s.getClass("widgetContent")+'"></td>'+(a?n:"")+"</tr>",c=t.addDurations(c,this.slotDuration),h=t.addDurations(h,this.slotDuration);return l},i.prototype._renderColumns=function(e,i){var n=this.theme,o=this.dateEnv,s=this.view,a=new r.DayBgRow(this.context);this.rootBgContainerEl.innerHTML='<table class="'+n.getClass("tableGrid")+'">'+a.renderHtml({cells:e,dateProfile:i,renderIntroHtml:this.renderProps.renderBgIntroHtml})+"</table>",this.colEls=t.findElements(this.el,".fc-day, .fc-disabled-day");for(var l=0;l<this.colCnt;l++)this.publiclyTrigger("dayRender",[{date:o.toDate(e[l].date),el:this.colEls[l],view:s}]);this.isRtl&&this.colEls.reverse(),this.colPositions=new t.PositionCache(this.el,this.colEls,!0,!1),this.renderContentSkeleton(),this.isColSizesDirty=!0},i.prototype._unrenderColumns=function(){this.unrenderContentSkeleton()},i.prototype.renderContentSkeleton=function(){var e,r=[];r.push(this.renderProps.renderIntroHtml());for(var i=0;i<this.colCnt;i++)r.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');this.isRtl&&r.reverse(),e=this.contentSkeletonEl=t.htmlToElement('<div class="fc-content-skeleton"><table><tr>'+r.join("")+"</tr></table></div>"),this.colContainerEls=t.findElements(e,".fc-content-col"),this.mirrorContainerEls=t.findElements(e,".fc-mirror-container"),this.fgContainerEls=t.findElements(e,".fc-event-container:not(.fc-mirror-container)"),this.bgContainerEls=t.findElements(e,".fc-bgevent-container"),this.highlightContainerEls=t.findElements(e,".fc-highlight-container"),this.businessContainerEls=t.findElements(e,".fc-business-container"),this.isRtl&&(this.colContainerEls.reverse(),this.mirrorContainerEls.reverse(),this.fgContainerEls.reverse(),this.bgContainerEls.reverse(),this.highlightContainerEls.reverse(),this.businessContainerEls.reverse()),this.el.appendChild(e)},i.prototype.unrenderContentSkeleton=function(){t.removeElement(this.contentSkeletonEl)},i.prototype.groupSegsByCol=function(e){var t,r=[];for(t=0;t<this.colCnt;t++)r.push([]);for(t=0;t<e.length;t++)r[e[t].col].push(e[t]);return r},i.prototype.attachSegsByCol=function(e,t){var r,i,n;for(r=0;r<this.colCnt;r++)for(i=e[r],n=0;n<i.length;n++)t[r].appendChild(i[n].el)},i.prototype.getNowIndicatorUnit=function(){return"minute"},i.prototype.renderNowIndicator=function(e,r){if(this.colContainerEls){var i,n=this.computeDateTop(r),o=[];for(i=0;i<e.length;i++){var s=t.createElement("div",{className:"fc-now-indicator fc-now-indicator-line"});s.style.top=n+"px",this.colContainerEls[e[i].col].appendChild(s),o.push(s)}if(e.length>0){var a=t.createElement("div",{className:"fc-now-indicator fc-now-indicator-arrow"});a.style.top=n+"px",this.contentSkeletonEl.appendChild(a),o.push(a)}this.nowIndicatorEls=o}},i.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.forEach(t.removeElement),this.nowIndicatorEls=null)},i.prototype.getTotalSlatHeight=function(){return this.slatContainerEl.getBoundingClientRect().height},i.prototype.computeDateTop=function(e,r){return r||(r=t.startOfDay(e)),this.computeTimeTop(t.createDuration(e.valueOf()-r.valueOf()))},i.prototype.computeTimeTop=function(e){var r,i,n=this.slatEls.length,o=this.props.dateProfile,s=(e.milliseconds-t.asRoughMs(o.minTime))/t.asRoughMs(this.slotDuration);return s=Math.max(0,s),s=Math.min(n,s),r=Math.floor(s),i=s-(r=Math.min(r,n-1)),this.slatPositions.tops[r]+this.slatPositions.getHeight(r)*i},i.prototype.computeSegVerticals=function(e){var t,r,i,n=this.opt("timeGridEventMinHeight");for(t=0;t<e.length;t++)r=e[t],i=this.props.cells[r.col].date,r.top=this.computeDateTop(r.start,i),r.bottom=Math.max(r.top+n,this.computeDateTop(r.end,i))},i.prototype.assignSegVerticals=function(e){var r,i;for(r=0;r<e.length;r++)i=e[r],t.applyStyle(i.el,this.generateSegVerticalCss(i))},i.prototype.generateSegVerticalCss=function(e){return{top:e.top,bottom:-e.bottom}},i.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildSlatPositions()},i.prototype.buildColPositions=function(){this.colPositions.build()},i.prototype.buildSlatPositions=function(){this.slatPositions.build()},i.prototype.positionToHit=function(e,r){var i=this.dateEnv,n=this.snapsPerSlot,o=this.slatPositions,s=this.colPositions,a=s.leftToIndex(e),l=o.topToIndex(r);if(null!=a&&null!=l){var d=o.tops[l],c=o.getHeight(l),h=(r-d)/c,u=l*n+Math.floor(h*n),p=this.props.cells[a].date,f=t.addDurations(this.props.dateProfile.minTime,t.multiplyDuration(this.snapDuration,u)),g=i.add(p,f);return{col:a,dateSpan:{range:{start:g,end:i.add(g,this.snapDuration)},allDay:!1},dayEl:this.colEls[a],relativeRect:{left:s.lefts[a],right:s.rights[a],top:d,bottom:d+c}}}},i.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.renderSegs(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.renderSegs("highlight",e.segs))},i.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}),this.fillRenderer.unrender("highlight"))},i.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.mirrorRenderer.renderSegs(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},i.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},i.prototype._renderDateSelection=function(e){e&&(this.opt("selectMirror")?this.mirrorRenderer.renderSegs(e,{isSelecting:!0}):this.fillRenderer.renderSegs("highlight",e))},i.prototype._unrenderDateSelection=function(e){this.mirrorRenderer.unrender(e,{isSelecting:!0}),this.fillRenderer.unrender("highlight")},i}(t.DateComponent),f=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},r.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},r.prototype.getKeysForEventDef=function(e){return e.allDay?t.hasBgRendering(e)?["timed","allDay"]:["allDay"]:["timed"]},r}(t.Splitter),g=t.createFormatter({week:"short"}),m=function(e){function i(i,n,o,s){var a=e.call(this,i,n,o,s)||this;a.splitter=new f,a.renderHeadIntroHtml=function(){var e,r=a,i=r.theme,n=r.dateEnv,o=a.props.dateProfile.renderRange,s=t.diffDays(o.start,o.end);return a.opt("weekNumbers")?(e=n.format(o.start,g),'<th class="fc-axis fc-week-number '+i.getClass("widgetHeader")+'" '+a.axisStyleAttr()+">"+t.buildGotoAnchorHtml(a,{date:o.start,type:"week",forceOff:s>1},t.htmlEscape(e))+"</th>"):'<th class="fc-axis '+i.getClass("widgetHeader")+'" '+a.axisStyleAttr()+"></th>"},a.renderTimeGridBgIntroHtml=function(){return'<td class="fc-axis '+a.theme.getClass("widgetContent")+'" '+a.axisStyleAttr()+"></td>"},a.renderTimeGridIntroHtml=function(){return'<td class="fc-axis" '+a.axisStyleAttr()+"></td>"},a.renderDayGridBgIntroHtml=function(){return'<td class="fc-axis '+a.theme.getClass("widgetContent")+'" '+a.axisStyleAttr()+"><span>"+t.getAllDayHtml(a)+"</span></td>"},a.renderDayGridIntroHtml=function(){return'<td class="fc-axis" '+a.axisStyleAttr()+"></td>"},a.el.classList.add("fc-timeGrid-view"),a.el.innerHTML=a.renderSkeletonHtml(),a.scroller=new t.ScrollComponent("hidden","auto");var l=a.scroller.el;a.el.querySelector(".fc-body > tr > td").appendChild(l),l.classList.add("fc-time-grid-container");var d=t.createElement("div",{className:"fc-time-grid"});if(l.appendChild(d),a.timeGrid=new p(a.context,d,{renderBgIntroHtml:a.renderTimeGridBgIntroHtml,renderIntroHtml:a.renderTimeGridIntroHtml}),a.opt("allDaySlot")){a.dayGrid=new r.DayGrid(a.context,a.el.querySelector(".fc-day-grid"),{renderNumberIntroHtml:a.renderDayGridIntroHtml,renderBgIntroHtml:a.renderDayGridBgIntroHtml,renderIntroHtml:a.renderDayGridIntroHtml,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1});var c=a.el.querySelector(".fc-divider");a.dayGrid.bottomCoordPadding=c.getBoundingClientRect().height}return a}return n(i,e),i.prototype.destroy=function(){e.prototype.destroy.call(this),this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),this.scroller.destroy()},i.prototype.renderSkeletonHtml=function(){var e=this.theme;return'<table class="'+e.getClass("tableGrid")+'">'+(this.opt("columnHeader")?'<thead class="fc-head"><tr><td class="fc-head-container '+e.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+e.getClass("widgetContent")+'">'+(this.opt("allDaySlot")?'<div class="fc-day-grid"></div><hr class="fc-divider '+e.getClass("widgetHeader")+'" />':"")+"</td></tr></tbody></table>"},i.prototype.getNowIndicatorUnit=function(){return this.timeGrid.getNowIndicatorUnit()},i.prototype.unrenderNowIndicator=function(){this.timeGrid.unrenderNowIndicator()},i.prototype.updateSize=function(t,r,i){e.prototype.updateSize.call(this,t,r,i),this.timeGrid.updateSize(t),this.dayGrid&&this.dayGrid.updateSize(t)},i.prototype.updateBaseSize=function(e,r,i){var n,o,s,a=this;if(this.axisWidth=t.matchCellWidths(t.findElements(this.el,".fc-axis")),this.timeGrid.colEls){var l=t.findElements(this.el,".fc-row").filter(function(e){return!a.scroller.el.contains(e)});this.timeGrid.bottomRuleEl.style.display="none",this.scroller.clear(),l.forEach(t.uncompensateScroll),this.dayGrid&&(this.dayGrid.removeSegPopover(),(n=this.opt("eventLimit"))&&"number"!=typeof n&&(n=5),n&&this.dayGrid.limitRows(n)),i||(o=this.computeScrollerHeight(r),this.scroller.setHeight(o),((s=this.scroller.getScrollbarWidths()).left||s.right)&&(l.forEach(function(e){t.compensateScroll(e,s)}),o=this.computeScrollerHeight(r),this.scroller.setHeight(o)),this.scroller.lockOverflow(s),this.timeGrid.getTotalSlatHeight()<o&&(this.timeGrid.bottomRuleEl.style.display=""))}else i||(o=this.computeScrollerHeight(r),this.scroller.setHeight(o))},i.prototype.computeScrollerHeight=function(e){return e-t.subtractInnerElHeight(this.el,this.scroller.el)},i.prototype.computeDateScroll=function(e){var t=this.timeGrid.computeTimeTop(e);return(t=Math.ceil(t))&&t++,{top:t}},i.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},i.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},i.prototype.axisStyleAttr=function(){return null!=this.axisWidth?'style="width:'+this.axisWidth+'px"':""},i}(t.View);m.prototype.usesMinMaxTime=!0;var y=function(e){function r(r,i){var n=e.call(this,r,i.el)||this;return n.buildDayRanges=t.memoize(v),n.slicer=new S,n.timeGrid=i,r.calendar.registerInteractiveComponent(n,{el:n.timeGrid.el}),n}return n(r,e),r.prototype.destroy=function(){e.prototype.destroy.call(this),this.calendar.unregisterInteractiveComponent(this)},r.prototype.render=function(e){var t=e.dateProfile,r=e.dayTable,i=this.dayRanges=this.buildDayRanges(r,t,this.dateEnv);this.timeGrid.receiveProps(o({},this.slicer.sliceProps(e,t,null,this.timeGrid,i),{dateProfile:t,cells:r.cells[0]}))},r.prototype.renderNowIndicator=function(e){this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e,this.timeGrid,this.dayRanges),e)},r.prototype.buildPositionCaches=function(){this.timeGrid.buildPositionCaches()},r.prototype.queryHit=function(e,t){var r=this.timeGrid.positionToHit(e,t);if(r)return{component:this.timeGrid,dateSpan:r.dateSpan,dayEl:r.dayEl,rect:{left:r.relativeRect.left,right:r.relativeRect.right,top:r.relativeRect.top,bottom:r.relativeRect.bottom},layer:0}},r}(t.DateComponent);function v(e,t,r){for(var i=[],n=0,o=e.headerDates;n<o.length;n++){var s=o[n];i.push({start:r.add(s,t.minTime),end:r.add(s,t.maxTime)})}return i}var S=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return n(r,e),r.prototype.sliceRange=function(e,r){for(var i=[],n=0;n<r.length;n++){var o=t.intersectRanges(e,r[n]);o&&i.push({start:o.start,end:o.end,isStart:o.start.valueOf()===e.start.valueOf(),isEnd:o.end.valueOf()===e.end.valueOf(),col:n})}return i},r}(t.Slicer),C=function(e){function i(i,n,o,s){var a=e.call(this,i,n,o,s)||this;return a.buildDayTable=t.memoize(E),a.opt("columnHeader")&&(a.header=new t.DayHeader(a.context,a.el.querySelector(".fc-head-container"))),a.simpleTimeGrid=new y(a.context,a.timeGrid),a.dayGrid&&(a.simpleDayGrid=new r.SimpleDayGrid(a.context,a.dayGrid)),a}return n(i,e),i.prototype.destroy=function(){e.prototype.destroy.call(this),this.header&&this.header.destroy(),this.simpleTimeGrid.destroy(),this.simpleDayGrid&&this.simpleDayGrid.destroy()},i.prototype.render=function(t){e.prototype.render.call(this,t);var r=this.props.dateProfile,i=this.buildDayTable(r,this.dateProfileGenerator),n=this.splitter.splitProps(t);this.header&&this.header.receiveProps({dateProfile:r,dates:i.headerDates,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml}),this.simpleTimeGrid.receiveProps(o({},n.timed,{dateProfile:r,dayTable:i})),this.simpleDayGrid&&this.simpleDayGrid.receiveProps(o({},n.allDay,{dateProfile:r,dayTable:i,nextDayThreshold:this.nextDayThreshold,isRigid:!1}))},i.prototype.renderNowIndicator=function(e){this.simpleTimeGrid.renderNowIndicator(e)},i}(m);function E(e,r){var i=new t.DaySeries(e.renderRange,r);return new t.DayTable(i,!1)}var b=t.createPlugin({defaultView:"timeGridWeek",views:{timeGrid:{class:C,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}});e.AbstractTimeGridView=m,e.TimeGrid=p,e.TimeGridSlicer=S,e.TimeGridView=C,e.buildDayRanges=v,e.buildDayTable=E,e.default=b,Object.defineProperty(e,"__esModule",{value:!0})});
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*!
FullCalendar Google Calendar Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("@fullcalendar/core")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core"],r):r((e=e||self).FullCalendarGoogleCalendar={},e.FullCalendar)}(this,function(e,r){"use strict";var t=function(){return(t=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)},n="https://www.googleapis.com/calendar/v3/calendars",o={url:String,googleCalendarApiKey:String,googleCalendarId:String,data:null},a={parseMeta:function(e){if("string"==typeof e&&(e={url:e}),"object"==typeof e){var t=r.refineProps(e,o);if(!t.googleCalendarId&&t.url&&(t.googleCalendarId=function(e){var r;if(/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(e))return e;if((r=/^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(e))||(r=/^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(e)))return decodeURIComponent(r[1])}(t.url)),delete t.url,t.googleCalendarId)return t}return null},fetch:function(e,o,a){var l=e.calendar,i=e.eventSource.meta,d=i.googleCalendarApiKey||l.opt("googleCalendarApiKey");if(d){var s=function(e){return n+"/"+encodeURIComponent(e.googleCalendarId)+"/events"}(i),c=function(e,n,o,a){var l,i,d;a.canComputeOffset?(i=a.formatIso(e.start),d=a.formatIso(e.end)):(i=r.addDays(e.start,-1).toISOString(),d=r.addDays(e.end,1).toISOString());l=t({},o||{},{key:n,timeMin:i,timeMax:d,singleEvents:!0,maxResults:9999}),"local"!==a.timeZone&&(l.timeZone=a.timeZone);return l}(e.range,d,i.data,l.dateEnv);r.requestJson("GET",s,c,function(e,r){var t,n;e.error?a({message:"Google Calendar API: "+e.error.message,errors:e.error.errors,xhr:r}):o({rawEvents:(t=e.items,n=c.timeZone,t.map(function(e){return function(e,r){var t=e.htmlLink||null;t&&r&&(t=function(e,r){return e.replace(/(\?.*?)?(#|$)/,function(e,t,n){return(t?t+"&":"?")+r+n})}(t,"ctz="+r));return{id:e.id,title:e.summary,start:e.start.dateTime||e.start.date,end:e.end.dateTime||e.end.date,url:t,location:e.location,description:e.description}}(e,n)})),xhr:r})},function(e,r){a({message:e,xhr:r})})}else a({message:"Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"})}};var l=r.createPlugin({eventSourceDefs:[a]});e.default=l,Object.defineProperty(e,"__esModule",{value:!0})});
( function( $ ) { 
 /*@ Column Stretch */
    function elementor_strecth_column() {
        var $column, $container;

        if (jQuery('.elementor-stretch-column-left').length > 0) {

            jQuery('.elementor-stretch-column-left').each(function () {

                $column = jQuery(this);
                $container = $column.parents('.elementor-container');

                if ($container.length === 0) {
                    return;
                }

                $container = Math.ceil($container.offset().left);
                var tempUpdated = $container;
                $column.find('> div').css({'margin-left': -tempUpdated + "px", 'width': 'calc( 100% + ' + tempUpdated + 'px )'});
            });
        }
        
        if (jQuery('.elementor-stretch-column-right').length > 0) {
            jQuery('.elementor-stretch-column-right').each(function () {

                $column = jQuery(this);
                $container = $column.parents('.elementor-container');

                if ($container.length === 0) {
                    return;
                }

                $container = Math.ceil($container.offset().left);
                var tempUpdated = $container;
                $column.find('> div').css({'margin-right': -tempUpdated + "px", 'width': 'calc( 100% + ' + tempUpdated + 'px )'});
            });
        }
    }

    /*@ Support megamenu with stretch column */
    if(jQuery(document).find('.elementor-stretch-column-left, .elementor-stretch-column-right').length) {
        jQuery(document).find('.ee-mb-megamenu-wrapper').mouseenter(function() { 
            elementor_strecth_column();
        });
    }
    jQuery(document).ready(elementor_strecth_column);
    jQuery(window).resize(elementor_strecth_column);

    /*@ Clickable Column */
    jQuery(document).on('click', 'body:not(.elementor-editor-active) .make-column-clickable-elementor', function (e) {

        var wrapper = jQuery(this),
            url = wrapper.data('column-clickable');

        if (url) {

            if (jQuery(e.target).filter('a, a *, .no-link, .no-link *').length) {
                return true;
            }

            // handle elementor actions
            if (url.match("^#elementor-action")) {

                var hash = url;
                var hash = decodeURIComponent(hash);

                // if is Popup
                if (hash.includes("elementor-action:action=popup:open") || hash.includes("elementor-action:action=lightbox")) {

                    if (0 === wrapper.find('#make-column-clickable-open-dynamic').length) {
                        wrapper.append('<a id="make-column-clickable-open-dynamic" style="display: none !important;" href="' + url + '">Open dynamic content</a>');
                    }

                    wrapper.find('#make-column-clickable-open-dynamic').click();

                    return true;
                }

                return true;
            }

            // smooth scroll
            if (url.match("^#")) {
                var hash = url;

                jQuery('html, body').animate({
                    scrollTop: jQuery(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });

                return true;
            }

            window.open(url, wrapper.data('column-clickable-blank'));
            return false;
        }
    });
} )( jQuery );
/* Cookies set inside object */
var cookieHelper = {
    /* Cookies */
    create: function (name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";

        document.cookie = name + "=" + value + expires + "; path=/";
    },

    read: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    erase: function (name) {
        //   createCookie(name, "", -1);
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}


jQuery(document).ready(function () {
    jQuery('#cookie-law-info-again').click(function () {
        jQuery('#mbr-myModal').css('display', 'block');
        jQuery('#cookie-law-info-again').css('display', 'none');
    });
    jQuery('#ee_mb_cookie_close_btn').click(function () {
        jQuery('#ee_mb_cookie_msg').slideUp();
        /* Set cookie */
        cookieHelper.create('accepted', true);
        jQuery('#cookie-law-info-again').css('display', 'block');
    });
    jQuery('#ee_mb_cookie_accept').click(function () {
        jQuery('#ee_mb_cookie_msg').slideUp();
        cookieHelper.create('accepted', true);
        jQuery('#cookie-law-info-again').css('display', 'block');
    });

    jQuery('#ee_mb_settings_button').click(function () {
        jQuery('#mbr-myModal').css('display', 'block');
        jQuery('#cookie-law-info-again').css('display', 'none');
    });

    jQuery('.mbr-myModal-close').click(function () {
        jQuery('#mbr-myModal').css('display', 'none');
        jQuery('#cookie-law-info-again').css('display', 'block');
    });

    jQuery('#ee_mb_cookie_accept_btn').click(function () {
        jQuery('#ee_mb_cookie_msg').slideUp();
        cookieHelper.create('accepted', true);
        jQuery('#cookie-law-info-again').css('display', 'block');
    });
    jQuery('#ee_mb_cookie_denied_btn').click(function () {
        jQuery('#ee_mb_cookie_msg').slideUp();
        cookieHelper.create('accepted', false);
        jQuery('#cookie-law-info-again').css('display', 'block');
    });
});

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), +function (t) { "use strict"; function e(e) { var n = e.attr("data-target"); n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")); var a = "#" !== n ? t(document).find(n) : null; return a && a.length ? a : e.parent() } function n(n) { n && 3 === n.which || (t(i).remove(), t(o).each(function () { var a = t(this), i = e(a), o = { relatedTarget: this }; i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (a.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o))))) })) } function a(e) { return this.each(function () { var n = t(this), a = n.data("bs.dropdown"); a || n.data("bs.dropdown", a = new s(this)), "string" == typeof e && a[e].call(n) }) } var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', s = function (e) { t(e).on("click.bs.dropdown", this.toggle) }; s.VERSION = "3.4.1", s.prototype.toggle = function (a) { var i = t(this); if (!i.is(".disabled, :disabled")) { var o = e(i), s = o.hasClass("open"); if (n(), !s) { "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n); var r = { relatedTarget: this }; if (o.trigger(a = t.Event("show.bs.dropdown", r)), a.isDefaultPrevented()) return; i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r)) } return !1 } }, s.prototype.keydown = function (n) { if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) { var a = t(this); if (n.preventDefault(), n.stopPropagation(), !a.is(".disabled, :disabled")) { var i = e(a), s = i.hasClass("open"); if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && i.find(o).trigger("focus"), a.trigger("click"); var r = " li:not(.disabled):visible a", l = i.find(".dropdown-menu" + r); if (l.length) { var d = l.index(n.target); 38 == n.which && d > 0 && d--, 40 == n.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus") } } } }; var r = t.fn.dropdown; t.fn.dropdown = a, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () { return t.fn.dropdown = r, this }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown) }(jQuery), +function (t) { "use strict"; function e(e) { var n, a = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return t(document).find(a) } function n(e) { return this.each(function () { var n = t(this), i = n.data("bs.collapse"), o = t.extend({}, a.DEFAULTS, n.data(), "object" == typeof e && e); !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || n.data("bs.collapse", i = new a(this, o)), "string" == typeof e && i[e]() }) } var a = function (e, n) { this.$element = t(e), this.options = t.extend({}, a.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() }; a.VERSION = "3.4.1", a.TRANSITION_DURATION = 350, a.DEFAULTS = { toggle: !0 }, a.prototype.dimension = function () { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, a.prototype.show = function () { if (!this.transitioning && !this.$element.hasClass("in")) { var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) { var o = t.Event("show.bs.collapse"); if (this.$element.trigger(o), !o.isDefaultPrevented()) { i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null)); var s = this.dimension(); this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var r = function () { this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!t.support.transition) return r.call(this); var l = t.camelCase(["scroll", s].join("-")); this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[s](this.$element[0][l]) } } } }, a.prototype.hide = function () { if (!this.transitioning && this.$element.hasClass("in")) { var e = t.Event("hide.bs.collapse"); if (this.$element.trigger(e), !e.isDefaultPrevented()) { var n = this.dimension(); this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var i = function () { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : i.call(this) } } }, a.prototype.toggle = function () { this[this.$element.hasClass("in") ? "hide" : "show"]() }, a.prototype.getParent = function () { return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, a) { var i = t(a); this.addAriaAndCollapsedClass(e(i), i) }, this)).end() }, a.prototype.addAriaAndCollapsedClass = function (t, e) { var n = t.hasClass("in"); t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n) }; var i = t.fn.collapse; t.fn.collapse = n, t.fn.collapse.Constructor = a, t.fn.collapse.noConflict = function () { return t.fn.collapse = i, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (a) { var i = t(this); i.attr("data-target") || a.preventDefault(); var o = e(i), s = o.data("bs.collapse"), r = s ? "toggle" : i.data(); n.call(o, r) }) }(jQuery);
jQuery(function () {
    /* If cookie hasnt reveioly been accepted, show banner */
    if (!cookieHelper.read('accepted')) {
        jQuery('#ee_mb_cookie_msg').slideDown();
    } else {
        jQuery('#cookie-law-info-again').css('display', 'block');
    }
});


(function ($) {

    /*@ Common start */
    var ee_common = {
        getModelCID: function getModelCID() {
            return ee_common.$element.data('model-cid');
        },
        getElementSettings: function ($element, setting) {

            var elementSettings = {},
                modelCID = $element.data('model-cid');

            if (elementorFrontend.isEditMode() && modelCID) {
                var settings = elementorFrontend.config.elements.data[modelCID],
                    settingsKeys = elementorFrontend.config.elements.keys[settings.attributes.widgetType || settings.attributes.elType];
                jQuery.each(settings.getActiveControls(), function (controlKey) {
                    if (settingsKeys) {
                        if (-1 !== settingsKeys.indexOf(controlKey)) {
                            elementSettings[controlKey] = settings.attributes[controlKey];
                        }
                    }
                });
            } else {
                elementSettings = $element.data('settings') || {};
            }

            return ee_common.getItems(elementSettings, setting);
        },
        getItems: function (items, itemKey) {
            if (itemKey) {
                var keyStack = itemKey.split('.'),
                    currentKey = keyStack.splice(0, 1);

                if (!keyStack.length) {
                    return items[currentKey];
                }

                if (!items[currentKey]) {
                    return;
                }

                return ee_common.getItems(items[currentKey], keyStack.join('.'));
            }

            return items;
        },
        showLoading: function (current) {
            current.find('.elementor_extensions_loading_overlay').show();
        },
        hideLoading: function (current) {
            current.find('.elementor_extensions_loading_overlay').hide();
        },
        equalheight: function (t) {
            var e, i = 0,
                r = 0,
                h = new Array;
            jQuery(t).each(function () {
                if (e = jQuery(this), jQuery(e).height("auto"), topPostion = e.position().top, r != topPostion) {
                    for (currentDiv = 0; currentDiv < h.length; currentDiv++) h[currentDiv].height(i);
                    h.length = 0, r = topPostion, i = e.height(), h.push(e)
                } else h.push(e), i = i < e.height() ? e.height() : i;
                for (currentDiv = 0; currentDiv < h.length; currentDiv++) h[currentDiv].height(i)
            })
        },
        findObjectByKey: function (array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                    return array[i];
                }
            }
            return null;
        },
        debounce: function (threshold, callback) {
            var timeout;

            return function debounced($event) {
                function delayed() {
                    callback.call(this, $event);
                    timeout = null;
                }

                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(delayed, threshold);
            };
        },
        getObjectNextKey: function (object, key) {
            var keys = Object.keys(object),
                idIndex = keys.indexOf(key),
                nextIndex = idIndex += 1;

            if (nextIndex >= keys.length) {
                return false;
            }

            var nextKey = keys[nextIndex];

            return nextKey;
        },
        getObjectPrevKey: function (object, key) {
            var keys = Object.keys(object),
                idIndex = keys.indexOf(key),
                prevIndex = idIndex -= 1;

            if (0 > idIndex) {
                return false;
            }

            var prevKey = keys[prevIndex];

            return prevKey;
        },
        getObjectFirstKey: function (object) {
            return Object.keys(object)[0];
        },
        getObjectLastKey: function (object) {
            return Object.keys(object)[Object.keys(object).length - 1];
        },
        renderMap: function (data_address) {
            // Get the user defined values
            var address = data_address;
            var radius = 2 * 1000;

            // get the selected type
            selectedTypes = ['school'];

            var geocoder = new google.maps.Geocoder();
            var selLocLat = 0;
            var selLocLng = 0;

            geocoder.geocode({
                'address': address
            }, function (results, status) {

                if (status === 'OK') {

                    selLocLat = results[0].geometry.location.lat();
                    selLocLng = results[0].geometry.location.lng();

                    var pyrmont = new google.maps.LatLng(selLocLat, selLocLng);

                    map = new google.maps.Map(document.getElementById('ee-mb-map'), {
                        center: pyrmont,
                        zoom: 14
                    });

                    var request = {
                        location: pyrmont,
                        radius: radius,
                        types: selectedTypes
                    };

                    infowindow = new google.maps.InfoWindow();

                    var service = new google.maps.places.PlacesService(map);
                    service.nearbySearch(request, ee_common.mapCallback);
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        },
        mapCallback: function (results, status) {

            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    ee_common.createMarker(results[i], results[i].icon);
                }
            }
        },
        createMarker: function (place, icon) {
            var placeLoc = place.geometry.location;

            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                icon: {
                    url: icon,
                    scaledSize: new google.maps.Size(40, 40) // pixels
                },
                animation: google.maps.Animation.DROP
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent(place.name + '<br>' + place.vicinity);
                infowindow.open(map, this);
            });
        }
    }

    /*@ Inline Attribute Equal Height */
    var matchHeight = function () {
        function init() {
            eventListeners();
            matchHeight();
        }

        function eventListeners() {
            $(window).on('resize', function () {
                matchHeight();
            });
        }

        function matchHeight() {
            var groupName = $('[data-match-height]');
            var groupHeights = [];

            groupName.css('min-height', 'auto');

            groupName.each(function () {
                groupHeights.push($(this).outerHeight());
            });

            var maxHeight = Math.max.apply(null, groupHeights);
            groupName.css('min-height', maxHeight);
        };

        return {
            init: init
        };
    }();

    $(document).ready(function () {
        matchHeight.init();
    });

    /*@ A to Z Listing */
    var ee_atoz = {

        atoz_fun: function ($scope, $) {

            ee_atoz.atoz_fun.elementSettings = ee_common.getElementSettings($scope);

            var $listing_wrapper = $scope.find('.az-listing-container');

            ee_atoz.atoz_fun.init = function () {
                $listing_wrapper.find('.categories a').on('click', function () {
                    ee_common.showLoading($scope);
                    $listing_wrapper.find('.categories li').removeClass('active');
                    jQuery(this).parent('li').toggleClass('active');

                    var cat_data = jQuery(this).data('setting');
                    var widget_settings = $scope.data('settings');
                    jQuery.ajax({
                        url: ElementorExtensionsFrontendConfig.ajaxurl,
                        type: 'POST',
                        data: {
                            'action': 'getPostsByCategory',
                            'cat_data': cat_data,
                            'widget_settings': widget_settings
                        },
                        success: function (data) {
                            jQuery('#listings').html(data);
                            ee_common.hideLoading($scope);
                        }
                    });
                });

                /*@ Smooth scrolling on click */

                $scope.find("ul.alphabets a").click(function (e) {
                    e.preventDefault();
                    var hash_id = jQuery(this).attr('href');
                    if (jQuery(hash_id).length) {
                        jQuery('html, body').animate({
                            scrollTop: jQuery(hash_id).offset().top
                        }, 500);
                    }
                });

                if (window.location.hash) {
                    jQuery(window.location.hash).trigger('click');
                }
            };

            ee_atoz.atoz_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-atoz-listing.default', ee_atoz.atoz_fun);
    });

    /*@ Anchor Scroll */
    var ee_anchor = {

        anchor_scroll_fun: function ($scope, $) {

            ee_anchor.anchor_scroll_fun.elementSettings = ee_common.getElementSettings($scope);

            var $anchor_scroll = $scope.find('.anchor-scroll');

            ee_anchor.anchor_scroll_fun.init = function () {

                $anchor_scroll.anchorScroll({
                    scrollSpeed: 800,
                    offsetTop: 0,
                    scrollStart: function () {
                        $anchor_scroll.find(".fill-bg").fadeIn("slow");
                        $anchor_scroll.find(".popup").text("Scrolling...");
                    },
                    scrollEnd: function () {
                        $anchor_scroll.find(".fill-bg").delay(1000).fadeOut("slow");
                        $anchor_scroll.find(".popup").text("Done!");
                    }
                });

            };

            ee_anchor.anchor_scroll_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-anchor-scroll.default', ee_anchor.anchor_scroll_fun);
    });

    /*@ Document Library */
    var ee_document_library = {

        document_library_fun: function ($scope, $) {

            var ee_dl_settings = ee_common.getElementSettings($scope),
                $document_library = $scope.find('.document_library_wrapper '),
                is_sortable = ee_dl_settings.is_header_sortable,
                dl_tbl = $document_library.find('> table'),
                order_filename_asc = ee_dl_settings.order_filename_asc;

            ee_document_library.document_library_fun.init = function () {
                if (is_sortable === 'yes') {

                    var sort_list = (order_filename_asc === 'yes') ? [[0, 0]] : '';
                    dl_tbl.tablesorter({
                        sortList: sort_list
                    });
                }
            };
            ee_document_library.document_library_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-document-library.default', ee_document_library.document_library_fun);
    });

    /*@ Flipbox */
    var ee_mb_flipbox_with_slider = {
        onInit: function ($scope, $) {

            var carousel_elem = $scope.find('.elementor-slides').eq(0);
            if (carousel_elem.length > 0) {

                var elementSettings = ee_common.getElementSettings($scope);
                if (elementSettings) {
                    var slickOptions = {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: 'yes' === elementSettings.autoplay,
                        autoplaySpeed: elementSettings.autoplay_speed,
                        infinite: 'yes' === elementSettings.infinite,
                        pauseOnHover: 'yes' === elementSettings.pause_on_hover,
                        speed: elementSettings.speed,
                        arrows: -1 !== ['arrows', 'both'].indexOf(elementSettings.navigation),
                        dots: -1 !== ['dots', 'both'].indexOf(elementSettings.navigation),
                        rtl: 'rtl' === elementSettings.direction,
                        fade: 'fade' === elementSettings.transition,
                    };

                }
                carousel_elem.slick(slickOptions);

                var slideContent = '.elementor-slide-content',
                    animation = elementSettings.content_animation,
                    animated = 'animated';

                carousel_elem.on({
                    beforeChange: function beforeChange() {
                        var $sliderContent = carousel_elem.find(slideContent);
                        $sliderContent.removeClass(animated + ' ' + animation).hide();
                    },
                    afterChange: function afterChange(event, slick, currentSlide) {
                        var $currentSlide = jQuery(slick.$slides.get(currentSlide)).find(slideContent);
                        $currentSlide.show().addClass(animated + ' ' + animation);
                    }
                });

                /*@ On click of icon box flip the box */
                var frontbox = $scope.find('.ee_mb_flipbox_container .ee_mb_flipbox_front'),
                    back_slider = $scope.find('.ee_mb_flipbox_container .elementor-slides-wrapper'),
                    flip_container = $scope.find('.ee_mb_flipbox_container');

                $scope.find('.ee_mb_flipbox_container .ee_mb_flipbox_front ul li').on('click', function () {
                    /*@ Activate slider as per the frontbox icon index */
                    var li_index = $(this).index();
                    carousel_elem.slick('slickGoTo', li_index, true);

                    /*@ Assign slider height to container */
                    var slider_height = back_slider.height();
                    flip_container.height(slider_height);

                    /*@ Flip the frontbox to back-side */
                    frontbox.css({
                        '-webkit-transform': 'rotateX(-180deg)',
                        '-moz-transform': 'rotateX(-180deg)',
                        '-ms-transform': 'rotateX(-180deg)',
                        '-o-transform': 'rotateX(-180deg)',
                        'transform': 'rotateX(-180deg)'
                    });

                    /*@ Flip the slider to front-side */
                    back_slider.css({
                        '-webkit-transform': 'rotateX(0deg)',
                        '-moz-transform': 'rotateX(0deg)',
                        '-ms-transform': 'rotateX(0deg)',
                        '-o-transform': 'rotateX(0deg)',
                        'transform': 'rotateX(0deg)',
                        'overflow': 'visible'
                    });

                    /*@ Add remove active class for maintaining active height to container on resize window */
                    frontbox.removeClass('active');
                    back_slider.addClass('active');
                });

                $scope.find('.ee_mb_flipbox_container .ee_mb_flip_back').on('click', function () {

                    /*@ Assign front height to container */
                    flip_container.attr('style', '');
                    var front_height = frontbox.height();
                    flip_container.height(front_height);

                    /*@ Flip frontbox to front-side */
                    frontbox.css({
                        '-webkit-transform': 'rotateX(0deg)',
                        '-moz-transform': 'rotateX(0deg)',
                        '-ms-transform': 'rotateX(0deg)',
                        '-o-transform': 'rotateX(0deg)',
                        'transform': 'rotateX(0deg)'
                    });

                    /*@ Flip the slider to back-side */
                    back_slider.css({
                        '-webkit-transform': 'rotateX(180deg)',
                        '-moz-transform': 'rotateX(180deg)',
                        '-ms-transform': 'rotateX(180deg)',
                        '-o-transform': 'rotateX(180deg)',
                        'transform': 'rotateX(180deg)',
                        'overflow': 'hidden'
                    });

                    /*@ Add remove active class for maintaining active height to container on resize window */
                    frontbox.addClass('active');
                    back_slider.removeClass('active');
                });

                /*@ On resize assign height of active front or back to the flip container */
                jQuery(window).resize(function () {

                    flip_container.attr('style', '');
                    if (frontbox.hasClass('active')) {
                        var front_height = frontbox.height();
                        flip_container.height(front_height);
                    } else {
                        var slider_height = back_slider.height();
                        flip_container.height(slider_height);
                    }
                });

            }
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-flipbox.default', ee_mb_flipbox_with_slider.onInit);
    });

    /*@ Imagebox Repeater */
    var ee_mb_imagebox_repeater = {

        onInit: function ($scope, $) {

            var carousel_elem = $scope.find('.elementor-image-carousel').eq(0);

            if (carousel_elem.length > 0) {

                var elementSettings = ee_common.getElementSettings($scope);

                if (elementSettings) {
                    var slidesToShow = +elementSettings.slides_to_show || 3,
                        isSingleSlide = 1 === slidesToShow,
                        defaultLGDevicesSlidesCount = isSingleSlide ? 1 : 2,
                        breakpoints = elementorFrontend.config.breakpoints;

                    var slickOptions = {
                        slidesToShow: slidesToShow,
                        autoplay: 'yes' === elementSettings.autoplay,
                        autoplaySpeed: elementSettings.autoplay_speed,
                        infinite: 'yes' === elementSettings.infinite,
                        pauseOnHover: 'yes' === elementSettings.pause_on_hover,
                        speed: elementSettings.speed,
                        arrows: -1 !== ['arrows', 'both'].indexOf(elementSettings.navigation),
                        dots: -1 !== ['dots', 'both'].indexOf(elementSettings.navigation),
                        rtl: 'rtl' === elementSettings.direction,
                        responsive: [{
                            breakpoint: breakpoints.lg,
                            settings: {
                                slidesToShow: +elementSettings.slides_to_show_tablet || defaultLGDevicesSlidesCount,
                                slidesToScroll: +elementSettings.slides_to_scroll_tablet || defaultLGDevicesSlidesCount
                            }
                        }, {
                            breakpoint: breakpoints.md,
                            settings: {
                                slidesToShow: +elementSettings.slides_to_show_mobile || 1,
                                slidesToScroll: +elementSettings.slides_to_scroll_mobile || 1
                            }
                        }]
                    };

                    if (isSingleSlide) {
                        slickOptions.fade = 'fade' === elementSettings.effect;
                    } else {
                        slickOptions.slidesToScroll = +elementSettings.slides_to_scroll || defaultLGDevicesSlidesCount;
                    }
                }
                carousel_elem.slick(slickOptions);
            }
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-imagebox-repeater.default', ee_mb_imagebox_repeater.onInit);
    });

    /*@ Multipoint map */
    var ee_mb_google_map = {

        EeMbGoogleMap: function ($scope, $) {

            ee_mb_google_map.EeMbGoogleMap.elementSettings = ee_common.getElementSettings($scope);

            var $map = $scope.find('.ee-mb-google-map');

            if (!$map.length) return;

            var $pins = $map.find('.ee-mb-google-map__pin'),
                $navigation = $scope.find('.ee-mb-google-map__navigation'),
                settings = ee_mb_google_map.EeMbGoogleMap.elementSettings,
                gmapArgs = {
                    center: [48.8583736, 2.2922873],

                    mapTypeId: google.maps.MapTypeId[settings.map_type],
                    scrollwheel: 'yes' === settings.scrollwheel,
                    clickableIcons: 'yes' === settings.clickable_icons,
                    disableDoubleClickZoom: 'yes' !== settings.doubleclick_zoom,
                    keyboardShortcuts: 'yes' === settings.keyboard_shortcuts,
                    draggable: (!elementorFrontend.isEditMode() && 'yes' === settings.draggable),

                    fullscreenControl: 'yes' === settings.fullscreen_control,
                    mapTypeControl: 'yes' === settings.map_type_control,
                    rotateControl: 'yes' === settings.rotate_control,
                    scaleControl: 'yes' === settings.scale_control,
                    streetViewControl: 'yes' === settings.streetview_control,
                    zoomControl: 'yes' === settings.zoom_control,
                },
                polygonArgs = {
                    default: {
                        strokeColor: (settings.polygon_stroke_color) ? settings.polygon_stroke_color : '#FF0000',
                        strokeWeight: (settings.polygon_stroke_weight) ? settings.polygon_stroke_weight.size : 2,
                        strokeOpacity: (settings.polygon_stroke_opacity) ? settings.polygon_stroke_opacity.size : 0.8,
                        fillColor: (settings.polygon_fill_color) ? settings.polygon_fill_color : '#FF0000',
                        fillOpacity: (settings.polygon_fill_opacity) ? settings.polygon_fill_opacity.size : 0.35,
                    },
                    hover: {
                        strokeColor: (settings.polygon_stroke_color_hover) ? settings.polygon_stroke_color_hover : '#FF0000',
                        strokeWeight: (settings.polygon_stroke_weight_hover) ? settings.polygon_stroke_weight_hover.size : 2,
                        strokeOpacity: (settings.polygon_stroke_opacity_hover) ? settings.polygon_stroke_opacity_hover.size : 0.8,
                        fillColor: (settings.polygon_fill_color_hover) ? settings.polygon_fill_color_hover : '#FF0000',
                        fillOpacity: (settings.polygon_fill_opacity_hover) ? settings.polygon_fill_opacity_hover.size : 0.35,
                    }
                },
                markers = [],
                paths = [],
                instance = null;

            ee_mb_google_map.EeMbGoogleMap.init = function () {

                var mapStyle = settings.map_style_json;

                if ('api' === settings.map_style_type && settings.map_style_api) {
                    var jsonParse = JSON.parse(settings.map_style_api);

                    if (jsonParse) {
                        mapStyle = JSON.parse(settings.map_style_api).json;
                    }
                }

                var map_color = $map.data('map-color');

                if (map_color == '00' && undefined !== map_color) {
                    gmapArgs.styles = [
                        { elementType: 'geometry', stylers: [{ color: settings.map_geometry }] },
                        { elementType: 'labels.text.stroke', stylers: [{ color: settings.label_text_stroke }] },
                        { elementType: 'labels.text.fill', stylers: [{ color: settings.label_text_fill }] },
                        {
                            featureType: 'administrative.locality',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: settings.administrative_locality }]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'geometry',
                            stylers: [{ color: settings.map_poi_color }]
                        },
                        {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: settings.map_poi_fill }]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry.fill',
                            stylers: [{ color: settings.map_park_color }]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: settings.map_park_fill }]
                        },
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{ color: settings.water_color }]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: settings.water_text_fill }]
                        },
                        {
                            featureType: 'water',
                            elementType: 'labels.text.stroke',
                            stylers: [{ color: settings.water_text_stroke }]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{ color: settings.road_color }]
                        },
                        {
                            featureType: 'road',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: settings.road_stroke }]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [{ color: settings.highway_color }]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'geometry.stroke',
                            stylers: [{ color: settings.highway_stroke }]
                        },
                        {
                            featureType: 'road.highway',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: settings.highway_text_fill }]
                        },
                        {
                            featureType: 'transit',
                            elementType: 'geometry',
                            stylers: [{ color: settings.transit }]
                        },
                        {
                            featureType: 'transit.station',
                            elementType: 'labels.text.fill',
                            stylers: [{ color: settings.transit_text_fill }]
                        },
                    ];
                }

                if ('' !== $.trim(mapStyle) && undefined !== mapStyle) {
                    gmapArgs.styles = ee_mb_google_map.EeMbGoogleMap.parseStyles(mapStyle);
                }

                if ('yes' !== settings.fit) {
                    if ('undefined' !== typeof settings.zoom) {
                        gmapArgs.zoom = settings.zoom.size;
                    }

                    if ($map.data('lat') && $map.data('lng')) {
                        gmapArgs.center = [$map.data('lat'), $map.data('lng')];
                    }
                }

                instance = $map.gmap3(gmapArgs);

                ee_mb_google_map.EeMbGoogleMap.addPins();

                if ('yes' === settings.popups)
                    ee_mb_google_map.EeMbGoogleMap.addInfoWindows();

                if ('yes' === settings.route && $pins.length > 1)
                    ee_mb_google_map.EeMbGoogleMap.addRoute();

                if ('yes' === settings.polygon)
                    ee_mb_google_map.EeMbGoogleMap.addPolygon();

                if ('yes' === settings.navigation)
                    ee_mb_google_map.EeMbGoogleMap.navigation();

                /* Init events */
                ee_mb_google_map.EeMbGoogleMap.events();

                /* Center to fit or custom */
                ee_mb_google_map.EeMbGoogleMap.center();
            };

            ee_mb_google_map.EeMbGoogleMap.events = function () {
                $map._resize(ee_mb_google_map.EeMbGoogleMap.onResize);
            };

            ee_mb_google_map.EeMbGoogleMap.onResize = function () {
                ee_mb_google_map.EeMbGoogleMap.center();
            };

            ee_mb_google_map.EeMbGoogleMap.center = function () {
                if ('yes' === settings.fit) {
                    instance.wait(2000).fit();
                } else {
                    instance.get(0).setCenter(new google.maps.LatLng(gmapArgs.center[0], gmapArgs.center[1]));
                }
            };

            ee_mb_google_map.EeMbGoogleMap.parseStyles = function (style) {

                try {
                    var json = JSON.parse(style);

                    if (json && typeof json === "object") { return json; }
                }
                catch (e) {
                    alert('Invalid JSON');
                }

                return false;
            };

            ee_mb_google_map.EeMbGoogleMap.addPolygon = function () {

                if ($pins.length <= 1)
                    return;

                instance
                    .polygon({
                        strokeColor: polygonArgs.default.strokeColor,
                        strokeWeight: polygonArgs.default.strokeWeight,
                        strokeOpacity: polygonArgs.default.strokeOpacity,
                        fillColor: polygonArgs.default.fillColor,
                        fillOpacity: polygonArgs.default.fillOpacity,
                        paths: paths,
                    })
                    .on({
                        mouseover: function (polygon, event) {
                            polygon.setOptions({
                                strokeColor: polygonArgs.hover.strokeColor,
                                strokeWeight: polygonArgs.hover.strokeWeight,
                                strokeOpacity: polygonArgs.hover.strokeOpacity,
                                fillColor: polygonArgs.hover.fillColor,
                                fillOpacity: polygonArgs.hover.fillOpacity,
                            });
                        },
                        mouseout: function (polygon, event) {
                            polygon.setOptions({
                                strokeColor: polygonArgs.default.strokeColor,
                                strokeWeight: polygonArgs.default.strokeWeight,
                                strokeOpacity: polygonArgs.default.strokeOpacity,
                                fillColor: polygonArgs.default.fillColor,
                                fillOpacity: polygonArgs.default.fillOpacity,
                            });
                        }
                    });
            };

            ee_mb_google_map.EeMbGoogleMap.addPins = function () {
                if (!$pins.length)
                    return;

                $pins.each(function () {
                    var marker = {},
                        pin = {
                            id: $(this).data('id'),
                            input: $(this).data('input'),
                            lat: $(this).data('lat'),
                            lng: $(this).data('lng'),
                            trigger: $(this).data('trigger'),
                            icon: $(this).data('icon'),
                            label: $(this).data('label'),
                            label_color: $(this).data('label-color'),
                            content: $(this).html(),
                        };

                    if (!pin.lat || !pin.lng) {
                        return;
                    }

                    marker.id = pin.id;
                    marker.trigger = pin.trigger;
                    marker.position = [pin.lat, pin.lng];

                    paths.push(marker.position);

                    if (pin.icon) {
                        var iconSize = (settings.pin_size) ? settings.pin_size.size : 50,
                            iconPosition = ee_mb_google_map.EeMbGoogleMap.getIconPosition(iconSize);

                        marker.icon = {
                            url: pin.icon,
                            scaledSize: new google.maps.Size(iconSize, iconSize),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(iconPosition[0], iconPosition[1]),
                        };

                        if (pin.label) {
                            marker.icon.labelOrigin = new google.maps.Point(iconPosition[0], (iconPosition[1] + 10));
                        }

                    } else {

                        if (pin.label) {

                            marker.icon = {
                                url: "http://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
                                labelOrigin: new google.maps.Point(15, 55),
                                size: new google.maps.Size(30, 45),
                                anchor: new google.maps.Point(16, 32)
                            };
                        }
                    }

                    if (pin.label) {

                        var markerLabel = pin.label;
                        var maplabelcolor = (pin.label_color) ? pin.label_color : '#FF0000';

                        marker.label = {
                            text: markerLabel,
                            color: maplabelcolor,
                            fontSize: "20px",
                            fontWeight: "bold"
                        };
                    }


                    if (pin.content && settings.popups)
                        marker.content = pin.content;

                    markers.push(marker);
                });

                instance.marker(markers);
            };

            ee_mb_google_map.EeMbGoogleMap.getIconPosition = function (size) {
                var horiz = 25,
                    vert = 50;

                switch (settings.pin_position_horizontal) {
                    case 'left':
                        horiz = size;
                        break;
                    case 'center':
                        horiz = size / 2;
                        break;
                    case 'right':
                        horiz = 0;
                        break;
                    default:
                        horiz = size / 2;
                }

                switch (settings.pin_position_vertical) {
                    case 'top':
                        vert = size;
                        break;
                    case 'middle':
                        vert = size / 2;
                        break;
                    case 'bottom':
                        vert = 0;
                        break;
                    default:
                        vert = size;
                }

                return [horiz, vert];
            };

            ee_mb_google_map.EeMbGoogleMap.addInfoWindows = function () {
                if (!$pins.length)
                    return;

                instance
                    .infowindow(markers)
                    .then(function (infowindow) {

                        var map = this.get(0),
                            marker = this.get(1);

                        marker.forEach(function (pin, index) {

                            if ('auto' === pin.trigger) {
                                infowindow[index].open(map, pin);

                                pin.addListener('click', function () {
                                    infowindow[index].open(map, pin);
                                });
                            } else if ('mouseover' === pin.trigger) {
                                pin.addListener('mouseover', function () {
                                    infowindow[index].open(map, pin);
                                });
                                pin.addListener('mouseout', function () {
                                    infowindow[index].close(map, pin);
                                });
                            } else if ('click' === pin.trigger) {
                                pin.addListener('click', function () {
                                    infowindow[index].open(map, pin);
                                });
                            }
                        })
                    });
            };

            ee_mb_google_map.EeMbGoogleMap.addRoute = function () {

                if ($pins.length <= 1)
                    return;

                var points = markers.slice(),
                    origin = ee_mb_google_map.EeMbGoogleMap.getMarkerDataForRoutes(markers[0]),
                    destination = ee_mb_google_map.EeMbGoogleMap.getMarkerDataForRoutes(markers[markers.length - 1]),
                    waypoints = (markers.length >= 3) ? ee_mb_google_map.EeMbGoogleMap.getWaypoints(points) : null;

                instance
                    .route({
                        origin: origin,
                        destination: destination,
                        waypoints: waypoints,
                        travelMode: google.maps.DirectionsTravelMode.DRIVING
                    })
                    .directionsrenderer(function (results) {
                        if (results) {
                            return {
                                suppressMarkers: 'yes' !== settings.route_markers,
                                directions: results,
                            }
                        }
                    });
            };

            ee_mb_google_map.EeMbGoogleMap.getWaypoints = function (points) {
                var waypoints = [];

                /* Remove first and last markers */
                points.shift();
                points.pop();

                points.forEach(function (point, index) {
                    waypoints.push({
                        location: ee_mb_google_map.EeMbGoogleMap.getMarkerDataForRoutes(point),
                        stopover: true,
                    });
                });

                return waypoints;
            };

            ee_mb_google_map.EeMbGoogleMap.getMarkerDataForRoutes = function (marker) {
                return new google.maps.LatLng(marker.position[0], marker.position[1]);
            };

            ee_mb_google_map.EeMbGoogleMap.navigation = function () {
                var $items = $navigation.find('.ee-mb-google-map__navigation__item'),
                    $all = $items.filter('.ee-mb-google-map__navigation__item--all');

                $all.addClass('ee--is-active');

                $items.on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    $items.removeClass('ee--is-active');
                    $(this).addClass('ee--is-active');

                    var marker = ee_common.findObjectByKey(markers, 'id', $(this).data('id'));

                    if (marker) {
                        instance.get(0).setCenter(new google.maps.LatLng(marker.position[0], marker.position[1]));
                        instance.get(0).setZoom(18);
                    } else {
                        instance.fit();
                    }
                });
            };

            ee_mb_google_map.EeMbGoogleMap.init();
        },
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-google-map.default', ee_mb_google_map.EeMbGoogleMap);
    });

    /*@ Navigation Menu */
    var ee_nav_menu = {

        ee_navigation_menu_fun: function ($scope, $) {

            ee_nav_menu.ee_navigation_menu_fun.elementSettings = ee_common.getElementSettings($scope);
            var $scroll_hamburger = $scope.find('.scroll_hamburger'),
                windowWidth = jQuery(window).width(),
                menuSetting = ee_nav_menu.ee_navigation_menu_fun.elementSettings;

            ee_nav_menu.ee_navigation_menu_fun.init = function () {

                if (ee_nav_menu.ee_navigation_menu_fun.elementSettings.layout == 'scroll_hamburger') {
                    if ($scroll_hamburger.length > 0) {

                        var sticky_menu = $scroll_hamburger.parents('section');
                        sticky_menu.parent().append('<div class="hamburger_icon_wrapper">' +
                            '<div class="arrow_for_scroll">' +
                            '<i class="fa fa-bars"></i>' +
                            '</div>' +
                            '</div>');

                        var toggleed = false;
                        $('.arrow_for_scroll').click(function (e) {
                            e.preventDefault();
                            if (sticky_menu.is(':visible')) {
                                sticky_menu.stop().slideUp();
                            } else {
                                sticky_menu.stop().slideDown();
                            }
                            toggleed = true;
                            setTimeout(function () {
                                toggleed = false;
                            }, 500);
                        });

                        $(window).bind('scroll', function () {
                            if ($(window).width() > 900) {
                                if (!toggleed) {
                                    if ($(window).scrollTop() > 50) {
                                        $('.arrow_for_scroll').fadeIn();
                                        sticky_menu.slideUp();
                                        if (!jQuery(document).find('.elementor-location-header').hasClass('hamburger_fixed_header')) {
                                            jQuery(document).find('.elementor-location-header').next().css('padding-top', jQuery('.elementor-location-header').outerHeight());
                                            jQuery(document).find('.elementor-location-header').addClass('hamburger_fixed_header');
                                        }
                                    } else {
                                        $('.arrow_for_scroll').fadeOut();
                                        sticky_menu.slideDown();
                                        if (jQuery(document).find('.elementor-location-header').hasClass('hamburger_fixed_header')) {
                                            jQuery(document).find('.elementor-location-header').next().css('padding-top', '0px');
                                            jQuery(document).find('.elementor-location-header').removeClass('hamburger_fixed_header');
                                        }
                                    }
                                }
                            }
                        });
                    } else {
                        jQuery(document).find('.hamburger_icon_wrapper').remove();
                    }
                } else {
                    if (jQuery(document).find('.scroll_hamburger').length == 0) {
                        jQuery(document).find('.hamburger_icon_wrapper').remove();
                    }
                }

                var forEach = function (t, o, r) { if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t) };

                var hamburgers = document.querySelectorAll(".hamburger");
                if (hamburgers.length > 0) {
                    forEach(hamburgers, function (hamburger) {
                        hamburger.addEventListener("click", function () {
                            this.classList.toggle("is-active");
                        }, false);
                    });
                }

                /*@ If outside click then close the hamburger & sidebar */
                jQuery(document).click(function (e) {
                    if (!jQuery(e.target).is('.hamburger')) {
                        jQuery(document).find('.sidebar').fadeOut('slow');
                        jQuery(document).find('.hamburger').removeClass('is-active');
                    }

                    // if(windowWidth <= 1024){
                    //     if (!jQuery(e.target).is('.ee-mb-megamenu-wrapper .menu-item .elementor-item') && !jQuery(e.target).is('.ee-mb-megamenu-wrapper .btn_menu_back')) {
                    //         jQuery(document).find('.ee-mb-megamenu-wrapper .ee-mb-nav-shortcode').hide();
                    //         jQuery(document).find('.ee-mb-megamenu-wrapper .menu-item').removeClass('uparrow');
                    //     }
                    // }
                });

                jQuery(document).on('click', '.hamburger', function (e) {
                    jQuery(this).siblings('.ee-mb-sidebar-menu-wrapper').find(".sidebar").toggle("slide");
                    e.preventDefault();
                    return false;
                });

                // if(windowWidth <= 1024){
                //     jQuery(document).on('click', '.ee-mb-megamenu-wrapper .menu-item', function() {
                //         jQuery(document).find('.ee-mb-megamenu-wrapper .ee-mb-nav-shortcode').hide();

                //         if (jQuery(this).hasClass('uparrow')) {
                //             jQuery(this).removeClass('uparrow');
                //             jQuery(this).find('.ee-mb-nav-shortcode').slideUp('slow');
                //         } else {
                //             jQuery(this).addClass('uparrow');
                //             jQuery(this).find('.ee-mb-nav-shortcode').slideDown('slow');
                //         }

                //     });
                // }

                /*@ Megamenu start */
                ee_nav_menu.supportTabs($scope);
                ee_nav_menu.megaMenu(menuSetting);

                // $(window).on('resize', function(){
                //     ee_nav_menu.megaMenu(menuSetting);
                // });
            };

            ee_nav_menu.ee_navigation_menu_fun.init();
        },
        calculateTopHeight: function (menuSetting) {
            /*@ Start:: Calculate top height start */
            let megaMenuTopSpacing = (menuSetting.megamenu_top_spacing) ? menuSetting.megamenu_top_spacing.size : 0,
                menuFromTop = 0,
                adminBar = jQuery('#wpadminbar').length,
                adminBarHeight = 0,
                isCookie = jQuery('#ee_mb_cookie_msg').length,
                cookieHeight = 0;

            /*@ If admin bar then add height */
            if (adminBar > 0) {
                adminBarHeight = jQuery('#wpadminbar').outerHeight();
            }

            if (isCookie > 0 && !jQuery('#ee_mb_cookie_msg').hasClass('cookie_position') && jQuery('#ee_mb_cookie_msg').is(':visible')) {
                cookieHeight = jQuery('#ee_mb_cookie_msg').outerHeight();
            }

            /*@ Calculate height of each sections before the nav menu */
            jQuery(document).find('.elementor-location-header').find('.elementor-top-section').each(function () {

                menuFromTop += jQuery(this).outerHeight();

                if (jQuery(this).find('#templateMainNav').length > 0) {
                    return false;
                }
            });

            if (!megaMenuTopSpacing) {
                jQuery(document).find('#mainNavigation > .ee-mb-nav-shortcode').css({ 'top': menuFromTop + adminBarHeight + cookieHeight });
            } else {
                jQuery(document).find('#mainNavigation > .ee-mb-nav-shortcode').css({ 'top': megaMenuTopSpacing + adminBarHeight + cookieHeight });
            }

            /*@ End:: Calculate top height */
        },
        megaMenu: function (menuSetting) {
            if ((menuSetting.dropdown === 'tablet' && jQuery(window).width() <= 1024) || (menuSetting.dropdown === 'mobile' && jQuery(window).width() <= 768)) {

                /*@ Megamenu for mobile */

                $("#templateMainNav").find('.ee-mb-nav-shortcode').each(function () {
                    if ($(this).find('.backButton').length <= 0) {
                        $('<div class="backButton"><span class="fa fa-chevron-left backIcon"></span> Back</div>').insertBefore($(this).find('.elementor-container:first'));
                    }
                });

                $(document).find('#mainNavigation').html($('#templateMainNav').html());

                $("#mainNavigation").attr("class", $("#templateMainNav").attr("class"));

                if ($(document).find('.ee-mb-megamenu-wrapper').length > 0) {

                    jQuery(document).find('.ee-mb-megamenu-wrapper > ul > li:not(.menu-item-has-children)').on('click touchstart', function (e) {

                        let menuAnchor = $(this).find('a').attr('href'),
                            liIndex = jQuery(this).index();

                        if (menuAnchor === '#' || menuAnchor === '') {
                            e.preventDefault();
                        }

                        if (jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').eq(liIndex).find('div').length > 0) {

                            let menuFromTop = jQuery('body > .elementor-location-header .elementor-top-section').outerHeight();

                            jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').eq(liIndex).css({ 'opacity': 1, 'visibility': 'visible', 'left': '40px' });

                            jQuery(document).find('#mainNavigation').css({ 'display': 'flex', 'left': 0 }).animate({ "right": "-1000px" }, "slow");
                        }
                    });

                    /*@ Close modal start */
                    jQuery(document).find('#mainNavigation .backButton').on('click touchstart', function (e) {

                        jQuery(document).find('#mainNavigation').css({ 'right': '-1000px', 'left': '100%', 'display': 'none' }).animate({ "right": "-1000px" }, "slow");

                        jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').css({ 'opacity': 0, 'visibility': 'hidden' });

                        e.preventDefault();
                    });

                    $(document).keydown(function (event) {
                        if (event.keyCode == 27) {
                            jQuery(document).find('#mainNavigation').css({ 'opacity': 0, 'visibility': 'hidden' });

                            jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').css({ 'opacity': 0, 'visibility': 'hidden', 'right': '-1000px' });
                        }
                    });
                    /*@ Close modal end */
                }
            } else {

                $(document).find('#mainNavigation').html($('#templateMainNav').html());

                $(document).find('#mainNavigation').hide();

                if ($(document).find('.ee-mb-megamenu-wrapper').length > 0) {


                    jQuery(document).find('.ee-mb-megamenu-wrapper > ul > .menu-item').mouseenter(function () {
                        let liIndex = jQuery(this).index();
                        $(document).find('#mainNavigation').show();

                        /*@ If menu sticky then support it */
                        if (jQuery('.elementor-sticky').length > 0) {
                            jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').css({ 'position': 'fixed' });
                        }

                        jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').css({ 'opacity': 0, 'visibility': 'hidden' });

                        jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').eq(liIndex).css({ 'opacity': 1, 'visibility': 'visible' });

                        ee_nav_menu.calculateTopHeight(menuSetting);
                    });

                    jQuery(document).find('#mainNavigation').mouseleave(function () {

                        $(document).find('#mainNavigation').hide();

                        jQuery(document).find('#mainNavigation .ee-mb-nav-shortcode').css({ 'opacity': 0, 'visibility': 'hidden' });

                        ee_nav_menu.calculateTopHeight(menuSetting);
                    });
                }
            }
        },
        supportTabs: function ($scope) {
            let navMenu = jQuery(document).find('.ee-mb-nav-shortcode');
            /*@ If tabs found in mega menu then proceed */
            if (navMenu.find('.elementor-tabs').length > 0) {

                /*@ By default activate first tab */
                let allTabContent = navMenu.find('.elementor-tabs-content-wrapper'),
                    allTabTitle = navMenu.find('.elementor-tabs-wrapper');

                allTabContent.each(function () {
                    jQuery(this).find('.elementor-tab-content').first().show();
                });

                allTabTitle.each(function () {
                    jQuery(this).find('.elementor-tab-title').first().addClass('elementor-active');
                });

                // allTabContent.first().show();
                // allTabTitle.first().toggleClass('elementor-active');

                /*@ On click of tabs hide/show individual tabs content and tab title */
                jQuery(document).on('click', '.ee-mb-nav-shortcode .elementor-tab-title', function (e) {
                    e.preventDefault();

                    let $this = jQuery(this),
                        index = $this.attr('data-tab'),
                        tabContent = $this.parent().siblings('.elementor-tabs-content-wrapper').find('.elementor-tab-content');

                    // Remove all active class and add to current only
                    $this.siblings().removeClass('elementor-active');
                    $this.addClass('elementor-active');

                    // Hide/Show content
                    tabContent.each(function () {
                        jQuery(this).hide();
                        if (jQuery(this).attr('data-tab') === index) {
                            jQuery(this).show();
                        }
                    });
                });
            }
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/nav-menu.default', ee_nav_menu.ee_navigation_menu_fun);
    });

    /*@ Event Slider */
    var ee_mb_event_slider = {

        onInit: function ($scope, $) {

            var carousel_elem = $scope.find('.elementor-image-carousel').eq(0);

            if (carousel_elem.length > 0) {

                var elementSettings = ee_common.getElementSettings($scope);

                if (elementSettings) {
                    var slidesToShow = +elementSettings.slides_to_show || 3,
                        slideRows = +elementSettings.slides_rows || 1,
                        isSingleSlide = 1 === slidesToShow,
                        defaultLGDevicesSlidesCount = isSingleSlide ? 1 : 2,
                        breakpoints = elementorFrontend.config.breakpoints;

                    var slickOptions = {
                        slidesToShow: slidesToShow,
                        rows: slideRows,
                        autoplay: 'yes' === elementSettings.autoplay,
                        autoplaySpeed: elementSettings.autoplay_speed,
                        infinite: 'yes' === elementSettings.infinite,
                        pauseOnHover: 'yes' === elementSettings.pause_on_hover,
                        speed: elementSettings.speed,
                        arrows: -1 !== ['arrows', 'both'].indexOf(elementSettings.navigation),
                        dots: -1 !== ['dots', 'both'].indexOf(elementSettings.navigation),
                        rtl: 'rtl' === elementSettings.direction,
                        responsive: [{
                            breakpoint: breakpoints.lg,
                            settings: {
                                slidesToShow: +elementSettings.slides_to_show_tablet || defaultLGDevicesSlidesCount,
                                slidesToScroll: +elementSettings.slides_to_scroll_tablet || defaultLGDevicesSlidesCount,
                            }
                        }, {
                            breakpoint: breakpoints.md,
                            settings: {
                                slidesToShow: +elementSettings.slides_to_show_mobile || 1,
                                slidesToScroll: +elementSettings.slides_to_scroll_mobile || 1,
                            }
                        }]
                    };

                    if (isSingleSlide) {
                        slickOptions.fade = 'fade' === elementSettings.effect;
                    } else {
                        slickOptions.slidesToScroll = +elementSettings.slides_to_scroll || defaultLGDevicesSlidesCount;
                    }
                }
                carousel_elem.slick(slickOptions);


                carousel_elem.on('setPosition', function () {
                    ee_common.equalheight('.elementor-widget-event-slider .slick-track > .slick-slide.es_event_slider');
                });

            }
        }
    };

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-event-slider.default', ee_mb_event_slider.onInit);
    });

    jQuery(window).load(function () {
        ee_common.equalheight('.elementor-widget-event-slider .slick-track > .slick-slide.es_event_slider');
    });

    jQuery(window).resize(function () {
        ee_common.equalheight('.elementor-widget-event-slider .slick-track > .slick-slide.es_event_slider');
    });

    /*@ Google Map */
    var ee_mb_map = {

        ee_mb_map_fun: function ($scope, $) {

            ee_mb_map.ee_mb_map_fun.init = function () {
                var elementSettings = ee_common.getElementSettings($scope);

                if (!elementSettings.address) {
                    return false;
                }

                var maptype = elementSettings.map_type;

                if (maptype == 'ROADMAP') {

                    var styledMapType = new google.maps.StyledMapType(
                        [
                            { elementType: 'geometry', stylers: [{ color: elementSettings.map_geometry }] },
                            { elementType: 'labels.text.stroke', stylers: [{ color: elementSettings.label_text_stroke }] },
                            { elementType: 'labels.text.fill', stylers: [{ color: elementSettings.label_text_fill }] },
                            {
                                featureType: 'administrative.locality',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: elementSettings.administrative_locality }]
                            },
                            {
                                featureType: 'poi',
                                elementType: 'geometry',
                                stylers: [{ color: elementSettings.map_poi_color }]
                            },
                            {
                                featureType: 'poi',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: elementSettings.map_poi_fill }]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'geometry.fill',
                                stylers: [{ color: elementSettings.map_park_color }]
                            },
                            {
                                featureType: 'poi.park',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: elementSettings.map_park_fill }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'geometry',
                                stylers: [{ color: elementSettings.water_color }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: elementSettings.water_text_fill }]
                            },
                            {
                                featureType: 'water',
                                elementType: 'labels.text.stroke',
                                stylers: [{ color: elementSettings.water_text_stroke }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry',
                                stylers: [{ color: elementSettings.road_color }]
                            },
                            {
                                featureType: 'road',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: elementSettings.road_stroke }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry',
                                stylers: [{ color: elementSettings.highway_color }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'geometry.stroke',
                                stylers: [{ color: elementSettings.highway_stroke }]
                            },
                            {
                                featureType: 'road.highway',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: elementSettings.highway_text_fill }]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'geometry',
                                stylers: [{ color: elementSettings.transit }]
                            },
                            {
                                featureType: 'transit.station',
                                elementType: 'labels.text.fill',
                                stylers: [{ color: elementSettings.transit_text_fill }]
                            },
                        ],
                        { name: 'Styled Map' }
                    );
                }

                var gstrh = 'cooperative';
                var scrollval = true;
                var defscroll = elementSettings.prevent_scroll;
                if (defscroll == 'yes') {
                    gstrh = 'none';
                    scrollval = false;
                }

                var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: (elementSettings.zoom.size) ? elementSettings.zoom.size : 10,
                    mapTypeId: google.maps.MapTypeId[maptype],
                    scrollwheel: scrollval,
                    gestureHandling: gstrh,
                    zoomControl: scrollval
                });

                var geocoder = new google.maps.Geocoder();
                ee_mb_map.geocodeAddress(geocoder, map, elementSettings);

                /* Associate the styled map with the MapTypeId and set it to display. */
                if (maptype == 'ROADMAP') {
                    map.mapTypes.set('styled_map', styledMapType);
                    map.setMapTypeId('styled_map');
                }

            };

            ee_mb_map.ee_mb_map_fun.init();
        },
        geocodeAddress: function (geocoder, resultsMap, elementSettings) {
            var address = elementSettings.address;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === 'OK') {
                    resultsMap.setCenter(results[0].geometry.location);
                    var markerLabel = (elementSettings.map_markerlabel) ? elementSettings.map_markerlabel : '';
                    var maplabelcolor = (elementSettings.map_markerlabel_color) ? elementSettings.map_markerlabel_color : '';
                    if (markerLabel == "" || markerLabel.length == 0) { markerLabel = ' '; }
                    if (maplabelcolor == "" || maplabelcolor.length == 0) { maplabelcolor = '#ff0000'; }

                    var marker = new google.maps.Marker({
                        map: resultsMap,
                        position: results[0].geometry.location,
                        icon: {
                            url: "//maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
                            labelOrigin: new google.maps.Point(15, 55),
                            size: new google.maps.Size(30, 45),
                            anchor: new google.maps.Point(16, 32)
                        },
                        label: {
                            text: markerLabel,
                            color: maplabelcolor,
                            fontSize: "20px",
                            fontWeight: "bold"
                        }
                    });
                } else {
                    console.log('Geocode was not successful for the following reason: ' + status);
                }
            });
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-map.default', ee_mb_map.ee_mb_map_fun);
    });

    /*@ Google Calendar */
    var ee_mb_gcal = {
        ee_mb_gcal_fun: function ($scope, $) {

            ee_mb_gcal.ee_mb_gcal_fun.init = function () {

                var elementSettings = ee_common.getElementSettings($scope),
                    gcal = $scope.find('.ee-mb-google-calendar'),
                    cal_uid = gcal.data('cal-uid'),
                    cal_api_key = gcal.data('cal-api-key'),
                    cal_layout = elementSettings.cal_layout_type,
                    cal_id = elementSettings.cal_id,
                    eventsdata = [],
                    i = 0;

                if (!cal_api_key && !cal_id) {
                    return false;
                }

                if (cal_layout == 'grid') {

                    var calendarEl = document.getElementById('calendar-' + cal_uid);

                    var calendar = new FullCalendar.Calendar(calendarEl, {
                        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list', 'googleCalendar'],
                        header: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'month,agendaWeek,agendaDay'
                        },
                        googleCalendarApiKey: cal_api_key,
                        events: {
                            googleCalendarId: cal_id
                        },
                        eventRender: function (event, element) {
                            if (eventsdata.length == 0) {
                                eventsdata.push(event.title);
                                i++;
                            } else {
                                var tmp = eventsdata.indexOf(event.title);
                                if (tmp == -1) {
                                    eventsdata.push(event.title);
                                    i++;
                                }
                            }

                            if (typeof element !== 'undefined') {
                                element.addClass("custom-event-" + eventsdata.indexOf(event.title));
                            }
                        },
                    });

                    calendar.render();

                } else {

                    var calendarEl = document.getElementById('calendar-' + cal_uid);

                    var calendar = new FullCalendar.Calendar(calendarEl, {
                        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list', 'googleCalendar'],
                        defaultView: 'listWeek',
                        views: {
                            listDay: { buttonText: 'list day' },
                            listWeek: { buttonText: 'list week' },
                            listMonth: { buttonText: 'list month' }
                        },
                        header: {
                            left: 'title',
                            center: '',
                            right: 'listDay,listWeek,listMonth'
                        },
                        googleCalendarApiKey: cal_api_key,
                        events: {
                            googleCalendarId: cal_id
                        }
                    });

                    calendar.render();
                }
            }
            ee_mb_gcal.ee_mb_gcal_fun.init();
        }
    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-google-calendar.default', ee_mb_gcal.ee_mb_gcal_fun);
    });

    /*@ Member */
    var ee_mb_member = {

        ee_mb_member_fun: function ($scope, $) {

            ee_mb_member.ee_mb_member_fun.init = function () {
                var elementSettings = ee_common.getElementSettings($scope);

                jQuery('.ee_mb_drp_member').on('change', function () {

                    var sorting_by = $scope.find('#drp_sorting').val(),
                        industry = $scope.find('#drp_industrial_sector').val(),
                        status = $scope.find('#drp_status').val()
                    params = { sortby: sorting_by, statusby: status, industry: industry },
                        new_url = jQuery.param(params);

                    window.location.search = new_url;
                });

                var sortby = 'sortby',
                    filterby = 'statusby',
                    url = window.location.href

                if (url.indexOf('?' + sortby + '=') != -1 || url.indexOf('?' + filterby + '=') != -1) {
                    jQuery('html, body').animate({
                        scrollTop: jQuery('#members_wrapper').offset().top - 40
                    }, 1200);
                }
            }

            ee_mb_member.ee_mb_member_fun.init();
        }
    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-member.default', ee_mb_member.ee_mb_member_fun);
    });

    /*@ Events */
    var ee_mb_events = {

        ee_mb_events_fun: function ($scope, $) {

            ee_mb_events.ee_mb_events_fun.init = function () {

                var elementSettings = ee_common.getElementSettings($scope),
                    ajaxurl = ElementorExtensionsFrontendConfig.ajaxurl;

                jQuery(document).on('click', '.myeventon_summary_eventlist_wrapper .summary_filter a', function (e) {
                    e.preventDefault();
                    var current = jQuery(this);
                    ee_common.showLoading($scope);
                    var data_month = jQuery(this).attr('data-month');
                    var data_year = jQuery(this).attr('data-year');

                    var sumarry_wrapper = current.parents('.myeventon_summary_eventlist_wrapper'),
                        sumarry_filter = sumarry_wrapper.find('> .summary_filter'),
                        enable_event_detail = sumarry_filter.data('event-detail'),
                        disable_event_link = sumarry_filter.data('disable-link'),
                        event_date_layout = sumarry_filter.data('date-layout'),
                        event_limit = sumarry_filter.data('event-limit'),
                        event_offset = sumarry_filter.data('event-offset'),
                        hide_past_events = sumarry_filter.data('hide-past-events');

                    var d = new Date();

                    if (!data_year) {
                        var data_year = sumarry_wrapper.find('.summary_filter > .year_filter_wrapper a.current').attr('data-year');
                    } else {
                        sumarry_wrapper.find('> .summary_filter > .year_filter_wrapper a').removeClass('current');
                    }

                    if (!data_month) {
                        var data_month = sumarry_wrapper.find('.summary_filter > .month_filter_wrapper > a.current').attr('data-month');
                    } else {
                        sumarry_wrapper.find('> .summary_filter > .month_filter_wrapper a').removeClass('current');
                    }

                    jQuery(this).addClass('current');

                    jQuery.ajax({
                        url: ajaxurl,
                        data: {
                            'action': 'getSummaryListAjax',
                            'month': data_month,
                            'year': data_year,
                            'event_date_layout': event_date_layout,
                            'cat': '',
                            'limit': event_limit,
                            'offset': event_offset,
                            'enable_event_detail': enable_event_detail,
                            'disable_link': disable_event_link,
                            'hide_past_events': hide_past_events,
                        },
                        method: 'POST',
                        success: function (data) {
                            sumarry_wrapper.find('.summaryEventList').html(data).append('<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>');
                            ee_common.hideLoading($scope);
                        },
                        error: function (errorThrown) {
                            console.log(errorThrown);
                            ee_common.hideLoading($scope);
                        }
                    });
                });

                /*@Next Prev button click*/
                jQuery(document).on('click', '#summary_prev,#summary_next', function () {
                    var current = jQuery(this);
                    ee_common.showLoading($scope);

                    var sumarry_wrapper = current.parents('.myeventon_summary_eventlist_wrapper'),
                        sumarry_filter = sumarry_wrapper.find('> .summary_filter'),
                        event_limit = sumarry_filter.data('event-limit'),
                        event_offset = sumarry_filter.data('event-offset')
                    month_year = current.data('date'),
                        event_date_layout = current.data('date-layout'),
                        enable_event_detail = current.data('event-detail'),
                        disable_event_link = current.data('disable-link'),
                        hide_past_events = current.data('hide-past-events'),
                        splited = month_year.split('-');

                    jQuery.ajax({
                        url: ajaxurl,
                        data: {
                            'action': 'getSummaryListAjax',
                            'month_year': month_year,
                            'event_date_layout': event_date_layout,
                            'enable_event_detail': enable_event_detail,
                            'disable_link': disable_event_link,
                            'hide_past_events': hide_past_events,
                            'limit': event_limit,
                            'offset': event_offset,
                        },
                        method: 'POST',
                        success: function (data) {
                            jQuery('.myeventon_summary_eventlist_wrapper > .summary_filter  a').removeClass('current');
                            jQuery('.myeventon_summary_eventlist_wrapper > .summary_filter > .year_filter_wrapper a[data-year="' + splited[0] + '"]').addClass('current');
                            jQuery('.myeventon_summary_eventlist_wrapper > .summary_filter > .month_filter_wrapper a[data-month="' + splited[1] + '"]').addClass('current');
                            current.parents('.summaryEventList').html(data).append('<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>');
                            ee_common.hideLoading($scope);
                        },
                        error: function (errorThrown) {
                            console.log(errorThrown);
                            ee_common.hideLoading($scope);
                        }
                    });
                });

                /*@Show more button click*/
                jQuery(document).on('click', '.myeventon_summary_eventlist_wrapper .summaryEventList .show_more_events', function () {
                    var current = jQuery(this);
                    ee_common.showLoading($scope);

                    var sumarry_wrapper = current.parents('.myeventon_summary_eventlist_wrapper'),
                        sumarry_filter = sumarry_wrapper.find('> .summary_filter'),
                        data_year = sumarry_wrapper.find('.summary_filter > .year_filter_wrapper a.current').attr('data-year'),
                        data_month = sumarry_wrapper.find('.summary_filter > .month_filter_wrapper > a.current').attr('data-month'),
                        event_date_layout = sumarry_filter.data('date-layout'),
                        enable_event_detail = sumarry_filter.data('event-detail'),
                        disable_event_link = sumarry_filter.data('disable-link'),
                        hide_past_events = sumarry_filter.data('hide-past-events'),
                        event_offset = parseInt(jQuery(document).find('#hd_offset').val()),
                        event_limit = sumarry_filter.data('event-limit'),
                        show_future_events = sumarry_filter.data('future-events');

                    /*@ Determine first click */
                    if (current.hasClass('clicked')) {
                        event_offset = parseInt(jQuery(document).find('#hd_limit_offset').val());
                    } else {
                        current.addClass('clicked');
                        event_offset = event_limit + event_offset;
                    }

                    jQuery.ajax({
                        url: ajaxurl,
                        data: {
                            'action': 'getSummaryListAjax',
                            'month': data_month,
                            'year': data_year,
                            'limit': '-1',
                            'offset': event_offset,
                            'event_date_layout': event_date_layout,
                            'enable_event_detail': enable_event_detail,
                            'disable_link': disable_event_link,
                            'hide_past_events': hide_past_events,
                            'show_future_events': (show_future_events) ? show_future_events : '',
                        },
                        method: 'POST',
                        success: function (data) {
                            current.parents('.summaryEventList').html(data).append('<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>');
                            jQuery(document).find('#hd_offset').val(event_offset);
                            ee_common.hideLoading($scope);
                        },
                        error: function (errorThrown) {
                            console.log(errorThrown);
                            ee_common.hideLoading($scope);
                        }
                    });
                });

                /*@ Calendar view*/
                var calendar_wrapper_div = jQuery("div.myeventon_calendar");
                if (calendar_wrapper_div.length > 0) {
                    calendar_wrapper_div.each(function () {
                        var calendar_id = jQuery(this).attr('data-id');
                        var event_list = jQuery(this).data('caldata');
                        var disable_link = jQuery(this).data('disable-link');

                        var calendarEl = document.getElementById('calendar-' + calendar_id);

                        var calendar = new FullCalendar.Calendar(calendarEl, {
                            plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
                            header: {
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                            },
                            events: event_list,
                            eventRender: function (event, element) {
                                if (typeof element !== 'undefined') {
                                    element.addClass("custom-event");
                                }
                            },
                            eventClick: function (arg) {
                                var clicked_date = arg.event.start;
                                clicked_date = moment(clicked_date).format("YYYY-MM-DD");

                                var current = jQuery(arg.el);
                                jQuery.ajax({
                                    url: ajaxurl,
                                    data: {
                                        'action': 'getEventListByDay',
                                        'date': clicked_date,
                                        'disable_link': disable_link
                                    },
                                    method: 'POST',
                                    success: function (data) {
                                        current.parents('.myeventon_calendar').siblings('.myeventon_calendar_summaryview').html(data);
                                    },
                                    error: function (errorThrown) {
                                    }
                                });
                            },
                            dayClick: function (arg) {
                                var clicked_date = arg.event.start;
                                clicked_date = moment(clicked_date).format("YYYY-MM-DD");

                                var current = jQuery(arg.el);
                                jQuery.ajax({
                                    url: ajaxurl,
                                    data: {
                                        'action': 'getEventListByDay',
                                        'date': clicked_date,
                                        'disable_link': disable_link,
                                    },
                                    method: 'POST',
                                    success: function (data) {
                                        current.parents('.myeventon_calendar').siblings('.myeventon_calendar_summaryview').html(data);
                                    },
                                    error: function (errorThrown) {
                                    }
                                });
                            }
                        });

                        calendar.render();
                    });
                }

                /*@ Display - Hide summary description no click of event label */
                jQuery(document).on('click', '.myeventon_calendar_summaryview li,.summaryEventList li', function (e) {
                    jQuery(this).next('.summary_cal_description').slideToggle();
                    e.preventDefault();
                });
            }
            ee_mb_events.ee_mb_events_fun.init();
        }
    }
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-events.default', ee_mb_events.ee_mb_events_fun);
    });

    /*@ Property Search */
    var ee_mb_property_search = {

        ee_mb_property_search_fun: function ($scope, $) {

            ee_mb_property_search.ee_mb_property_search_fun.init = function () {

                if (typeof google === 'object' && typeof google.maps === 'object') {
                    function ee_mb_property_search_box_autocomplete() {

                        var elementSettings = ee_common.getElementSettings($scope),
                            input = document.getElementById('ee_mb_property_txt'),
                            data_setting = $scope.find('.ee_mb_homepage_searchbox_form').data('settings');

                        if (input) {
                            var options = {
                                types: ['geocode']
                            };

                            if (data_setting.country_restriction) {
                                options.componentRestrictions = { country: data_setting.country_restriction };
                            }

                            var autocomplete = new google.maps.places.Autocomplete(input, options);

                            /**
                             * Get lat long and add it into the hidden text boxes
                             */
                            google.maps.event.addDomListener(input, 'keydown', function (event) {
                                if (event.keyCode === 13) {
                                    event.preventDefault();
                                } else {
                                    google.maps.event.addListener(autocomplete, 'place_changed', function () {
                                        var place = autocomplete.getPlace();

                                        var lat = place.geometry.location.lat();
                                        var lng = place.geometry.location.lng();

                                        document.getElementById("ee_mb_property_lat").value = lat;
                                        document.getElementById("ee_mb_property_long").value = lng;
                                    });
                                }
                            });
                        }
                    }

                    google.maps.event.addDomListener(window, 'load', ee_mb_property_search_box_autocomplete);
                }

            }
            ee_mb_property_search.ee_mb_property_search_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-property-search.default', ee_mb_property_search.ee_mb_property_search_fun);
    });

    var ee_mb_properties = {

        fun: function ($scope, $) {

            elementSettings = ee_common.getElementSettings($scope);

            var $listing_wrapper = $scope.find('.ee_mb_property_listing_wrapper');
            var $data_setting = $scope.find('.ee_mb_property_search_page_outer_wrapper').data('settings');

            ee_mb_properties.fun.init = function () {
                ee_mb_properties.fun.addPropertyPageClassInBody();
                ee_mb_properties.fun.get();
                ee_mb_properties.fun.getviews();
                ee_mb_properties.fun.addPromiximityRangeSlider();
                ee_mb_properties.fun.changeEvents();
                if (typeof google === 'object' && typeof google.maps === 'object') {
                    google.maps.event.addDomListener(window, 'load', ee_mb_properties.fun.addAutocompleteLocation());
                }
            };

            ee_mb_properties.fun.get = function () {
                ee_mb_properties.fun.showLoading();
                var ajaxurl = ElementorExtensionsFrontendConfig.ajaxurl,
                    view = ee_mb_properties.fun.getUrlParameter('view'),
                    property_type = ee_mb_properties.fun.getUrlParameter('property_type');

                jQuery('#ee_mb_property_listing').html('');
                jQuery('#property_pagination').html('');
                jQuery('#search_result').text('');


                jQuery.ajax({
                    url: ajaxurl,
                    data: {
                        'action': 'eeMbPropertySearchAjax',
                        'location': ee_mb_properties.fun.getUrlParameter('location'),
                        'radius': ee_mb_properties.fun.getUrlParameter('radius'),
                        'lat': ee_mb_properties.fun.getUrlParameter('lat'),
                        'long': ee_mb_properties.fun.getUrlParameter('long'),
                        'max': ee_mb_properties.fun.getUrlParameter('max'),
                        'min': ee_mb_properties.fun.getUrlParameter('min'),
                        'room': ee_mb_properties.fun.getUrlParameter('room'),
                        'property_type': (property_type) ? property_type : elementSettings.default_property_type,
                        'view': view,
                        'price_sort': ee_mb_properties.fun.getUrlParameter('price_sort'),
                        'paged': ee_mb_properties.fun.getUrlParameter('pagination'),
                        'default_sort': elementSettings.default_sort,
                        'post_per_page': elementSettings.post_per_page,
                        'area': ee_mb_properties.fun.getUrlParameter('area'),
                        'sqft': ee_mb_properties.fun.getUrlParameter('sqft'),
                    },
                    method: 'POST',
                    success: function (data) {

                        if (data.results || data.results == '0') {
                            jQuery('#search_result').html(data.results);
                        }

                        if (data.results && data.results !== '0') {
                            if (view == 'map') {

                                jQuery('#ee_mb_property_listing').html('<div id="propertymap"></div>');

                                var locations = data.map_properties;

                                var map = new google.maps.Map(document.getElementById('propertymap'), {
                                    zoom: 10,
                                    center: new google.maps.LatLng(locations[0][1], locations[0][2]),
                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                });

                                var infowindow = new google.maps.InfoWindow();
                                var marker, i, content = "";

                                for (i = 0; i < locations.length; i++) {
                                    var latlng = new google.maps.LatLng(locations[i][1], locations[i][2]);
                                    marker = new google.maps.Marker({
                                        position: latlng,
                                        map: map,
                                        icon: ElementorExtensionsFrontendConfig.ee_mb_path + "assets/img/map-pin.png"
                                    });

                                    var property_img = locations[i][6],
                                        title = locations[i][0],
                                        price = locations[i][3],
                                        bedrooms = locations[i][4],
                                        type = locations[i][5],
                                        listed_on = locations[i][7],
                                        prop_url = locations[i][8];

                                    content = "<div class='map_info_wrapper'><a href=" + prop_url + "><div class='img_wrapper'><img src=" + property_img + "></div>" +
                                        "<div class='property_content_wrap'>" +
                                        "<div class='property_title'>" +
                                        "<span>" + title + "</span>" +
                                        "</div>" +

                                        "<div class='property_price'>" +
                                        "<span>" + price + "</span>" +
                                        "</div>" +

                                        "<div class='property_bed_type'>" +
                                        "<span>" + bedrooms + " beds</span>" +
                                        "<ul><li>" + type + "</li></ul>" +
                                        "</div>" +

                                        "<div class='property_listed_date'>" +
                                        "<span>Listed on " + listed_on + "</span>" +
                                        "</div>" +
                                        "<div class='btn_visit_marker'><span>View more</span></div>"
                                    "</div></a></div>";

                                    google.maps.event.addListener(marker, 'click', (function (marker, content, i) {
                                        return function () {
                                            infowindow.setContent(content);
                                            infowindow.open(map, marker);
                                        }
                                    })(marker, content, i));
                                }

                            } else {
                                jQuery.each(data.property, function (index, value) {
                                    jQuery('#ee_mb_property_listing').append(value);
                                });
                                jQuery('#property_pagination').html(data.next_pagination);
                            }
                        }

                        ee_mb_properties.fun.hideLoading();
                    },
                    error: function (errorThrown) { }
                });
            };

            ee_mb_properties.fun.addPropertyPageClassInBody = function () {
                jQuery(document).find('body').addClass('property-search-page');
            };

            ee_mb_properties.fun.addPromiximityRangeSlider = function () {
                var slider = document.getElementById("promiximity_range");

                if (slider) {
                    var output = document.getElementById("txt_miles");
                    output.innerHTML = slider.value + ' miles'; /* Display the default slider value */

                    /* Update the current slider value (each time you drag the slider handle) */
                    slider.oninput = function () {
                        output.innerHTML = this.value + ' miles';
                    }
                }
            };

            ee_mb_properties.fun.addAutocompleteLocation = function () {

                var input = document.getElementById('ee_mb_property_txt');

                if (input) {
                    var options = {
                        types: ['geocode']
                    };

                    if ($data_setting.country_restriction) {
                        options.componentRestrictions = { country: $data_setting.country_restriction };
                    }

                    var autocomplete = new google.maps.places.Autocomplete(input, options);

                    /**
                     * Get lat long and add it into the hidden text boxes
                     */
                    google.maps.event.addListener(autocomplete, 'place_changed', function () {
                        var place = autocomplete.getPlace();

                        var current_add = jQuery('#ee_mb_property_txt').val();

                        var lat = place.geometry.location.lat();
                        var lng = place.geometry.location.lng();

                        document.getElementById("ee_mb_property_lat").value = lat;
                        document.getElementById("ee_mb_property_long").value = lng;

                        var newurl = ee_mb_properties.fun.replaceUrlParam('location', encodeURIComponent(current_add));
                        history.pushState(null, null, newurl);

                        var newurl = ee_mb_properties.fun.replaceUrlParam('lat', lat);
                        history.pushState(null, null, newurl);

                        var newurl = ee_mb_properties.fun.replaceUrlParam('long', lng);
                        history.pushState(null, null, newurl);
                    });
                }
            };

            ee_mb_properties.fun.getUrlParameter = function (name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            };

            ee_mb_properties.fun.changeEvents = function () {
                jQuery("#drp_min_price").on('change', function () {
                    var newurl = ee_mb_properties.fun.replaceUrlParam('min', jQuery(this).val());
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });

                jQuery("#drp_max_price").on('change', function () {
                    var newurl = ee_mb_properties.fun.replaceUrlParam('max', jQuery(this).val());
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });

                jQuery("#drp_bedrooms").on('change', function () {
                    var newurl = ee_mb_properties.fun.replaceUrlParam('room', jQuery(this).val());
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });

                jQuery("#drp_property_type").on('change', function () {
                    var newurl = ee_mb_properties.fun.replaceUrlParam('property_type', jQuery(this).val());
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });

                jQuery("#promiximity_range").on('change', function () {
                    var newurl = ee_mb_properties.fun.replaceUrlParam('radius', jQuery(this).val());
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });

                jQuery("#price_sort").on('change', function () {
                    var newurl = ee_mb_properties.fun.replaceUrlParam('price_sort', jQuery(this).val());
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });

                jQuery("#btn_property_search").on('click', function () {
                    var areaUrl = ee_mb_properties.fun.replaceUrlParam('area', jQuery('#area').val());
                    history.pushState(null, null, areaUrl);
                    var sqftUrl = ee_mb_properties.fun.replaceUrlParam('sqft', jQuery('#sqft').val());
                    history.pushState(null, null, sqftUrl);
                    ee_mb_properties.fun.get();
                });

                jQuery(document).on('click', '.page-numbers', function (e) {
                    e.preventDefault();
                    var pagination_link = jQuery(this).attr('href');
                    paged = pagination_link.split('?');
                    paged = paged[1].split('=');
                    var newurl = ee_mb_properties.fun.replaceUrlParam('pagination', paged[1]);
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });
            };

            ee_mb_properties.fun.replaceUrlParam = function (paramName, paramValue) {
                var url = window.location.href;
                if (paramValue == null) {
                    paramValue = '';
                }
                var pattern = new RegExp('\\b(' + paramName + '=).*?(&|#|$)');
                if (url.search(pattern) >= 0) {
                    return url.replace(pattern, '$1' + paramValue + '$2');
                }
                url = url.replace(/[?#]$/, '');
                return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
            };

            ee_mb_properties.fun.showLoading = function () {
                jQuery(document).find('.elementor_ee_mb_loading_overlay.property_search').show();
            };

            ee_mb_properties.fun.hideLoading = function () {
                jQuery(document).find('.elementor_ee_mb_loading_overlay.property_search').hide();
            };

            ee_mb_properties.fun.getviews = function () {
                jQuery('#btn_view_group li').on('click', function () {
                    var view = jQuery(this).data('view');

                    if (view == 'list') {
                        jQuery('#ee_mb_property_listing').removeClass('grid');
                        jQuery('#ee_mb_property_listing').removeClass('map');
                        jQuery('#ee_mb_property_listing').addClass('list');
                    } else if (view == 'grid') {
                        jQuery('#ee_mb_property_listing').addClass('grid');
                        jQuery('#ee_mb_property_listing').removeClass('list');
                        jQuery('#ee_mb_property_listing').removeClass('map');
                    } else if (view == 'map') {
                        jQuery('#ee_mb_property_listing').removeClass('grid');
                        jQuery('#ee_mb_property_listing').removeClass('list');
                        jQuery('#ee_mb_property_listing').addClass('map');
                    }

                    jQuery('#btn_view_group li').removeClass('active');
                    jQuery(this).addClass('active');
                    var newurl = ee_mb_properties.fun.replaceUrlParam('view', view);
                    history.pushState(null, null, newurl);
                    ee_mb_properties.fun.get();
                });
            };

            ee_mb_properties.fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-properties.default', ee_mb_properties.fun);
    });

    /*@ Property School Checker Map */
    var ee_mb_property_school_checker_map =
    {
        ee_mb_property_school_checker_map_fun: function ($scope, $) {
            var settings = $scope.find('#ee-mb-school-checker-map-wrapper').data('settings');

            ee_mb_property_school_checker_map.ee_mb_property_school_checker_map_fun.init = function () {

                if (typeof google === 'object' && typeof google.maps === 'object') {
                    if (settings && settings['addresses'] && settings['addresses']['address']) {
                        address = settings['addresses']['address'];
                    }

                    if (address) {
                        ee_common.renderMap(address);
                    }
                }
            }

            ee_mb_property_school_checker_map.ee_mb_property_school_checker_map_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-property-school-checker-map.default', ee_mb_property_school_checker_map.ee_mb_property_school_checker_map_fun);
    });

    /*@ Property slider */
    var ee_mb_property_slider =
    {
        ee_mb_property_slider_fun: function ($scope, $) {
            let $slides_counter = $scope.find('.slider-for > div.slider_item').length;

            ee_mb_property_slider.ee_mb_property_slider_fun.init = function () {
                /*@ Slick slider*/

                if ($slides_counter > 0) {
                    var slideCount = $scope.find('.slideCount');
                    $scope.find('.slider-for,.slider-nav').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
                        var slider_caption = $scope.find('.slick-current').attr('data-image-caption');
                        if (slider_caption) {
                            $scope.find('#slider_caption_text').text(slider_caption);
                        }
                        var i = (currentSlide ? currentSlide : 0) + 1;
                        $scope.find('.slideCount').html('<span class="slideCountItem">' + i + '</span> ' + 'of' + ' <span class="slideCountAll">' + slick.slideCount + '</span>');
                    });

                    $scope.find('.slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        fade: true,
                        asNavFor: '.slider-nav',
                        slide: '.slider_item',
                        adaptiveHeight: true,
                    });

                    $scope.find('.slider-nav').slick({
                        slidesToShow: 5, //(slides_counter > 5) ? (6 - 1) : (slides_counter == 1) ? 1 : (slides_counter - 1),
                        slidesToScroll: 1,
                        asNavFor: '.slider-for',
                        dots: false,
                        arrows: true,
                        centerMode: false,
                        focusOnSelect: true,
                    });

                    $scope.find("#btn_enlarge").on('click', function () {
                        var photos = new Array();
                        $scope.find(".slider_item").each(function () {
                            href = jQuery(this).children('img').attr("src");
                            photos.push({
                                'src': href,
                            })
                        });

                        jQuery.fancybox.open(photos, {
                            loop: true,
                            hash: "test"
                        });
                    });
                }
            }

            ee_mb_property_slider.ee_mb_property_slider_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-property-slider.default', ee_mb_property_slider.ee_mb_property_slider_fun);
    });

    /*@ Property Agent */
    var ee_mb_property_agent =
    {
        ee_mb_property_agent_fun: function ($scope, $) {
            var settings = $scope.find('.agent_form').data('settings'),
                elementSettings = ee_common.getElementSettings($scope);

            ee_mb_property_agent.ee_mb_property_agent_fun.init = function () {
                if (settings) {
                    var agent_email = '';
                    if (settings['agent_email']) {
                        agent_email = settings['agent_email'];
                    }

                    jQuery(document).on('click', '#btn_send_agent', function (e) {
                        e.preventDefault();
                        ee_common.showLoading($scope);
                        var ajaxurl = ElementorExtensionsFrontendConfig.ajaxurl;
                        jQuery.ajax({
                            url: ajaxurl,
                            data: {
                                'action': 'eeMbAgentMailSendAjax',
                                'name': document.getElementById('name').value,
                                'email': document.getElementById('email').value,
                                'message': document.getElementById('message').value,
                                'phone': document.getElementById('telephone').value,
                                'property_link': document.getElementById('property_link').value,
                                'sendto': agent_email,
                            },
                            method: 'POST',
                            success: function (data) {
                                if (data.success) {
                                    jQuery(document).find('.form_error').text('');
                                    jQuery(document).find('.form_success').remove();
                                    jQuery('#btn_send_agent').after('<span class="form_success">' + elementSettings.form_success_msg + '</span>');
                                    jQuery('#agent_contact_form').trigger("reset");
                                } else {
                                    jQuery(document).find('.form_error').remove();
                                    jQuery.each(data.error, function (index, value) {
                                        jQuery('#' + index).after('<span class="form_error">' + value + '</span>');
                                    });
                                }
                                ee_common.hideLoading($scope);
                            },
                            error: function () {
                                alert('Something went wrong, please contact administrator');
                                ee_common.hideLoading($scope);
                            }
                        });
                    });
                }
            }

            ee_mb_property_agent.ee_mb_property_agent_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-property-agent.default', ee_mb_property_agent.ee_mb_property_agent_fun);
    });

    /*@ Scroll navigation */
    var eeMbScrollNavigation = function ($scope, $) {
        var $target = $scope.find('.ee-mb-scroll-navigation'),
            instance = null,
            settings = $target.data('settings');

        instance = new ee_mb_scroll_navigation($target, settings);
        instance.init();
    };

    window.ee_mb_scroll_navigation = function ($selector, settings) {
        var self = this,
            $window = $(window),
            $document = $(document),
            $instance = $selector,
            $htmlBody = $('html, body'),
            $itemsList = $('.ee-mb-scroll-navigation__item', $instance),
            sectionList = [],
            defaultSettings = {
                speed: 500,
                blockSpeed: 500,
                offset: 200,
                sectionSwitch: false
            },
            settings = $.extend({}, defaultSettings, settings),
            sections = {},
            currentSection = null,
            isScrolling = false,
            isSwipe = false,
            hash = window.location.hash.slice(1),
            timeout = null,
            timeStamp = 0,
            platform = navigator.platform;

        jQuery.extend(jQuery.easing, {
            easeInOutCirc: function (x, t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
        });

        self.init = function () {
            self.setSectionsData();

            $itemsList.on('click.ee_mb_scroll_navigation', self.onAnchorChange);

            $window.on('scroll.ee_mb_scroll_navigation', self.onScroll);
            $window.on('resize.ee_mb_scroll_navigation orientationchange.ee_mb_scroll_navigation', ee_common.debounce(50, self.onResize));
            $window.on('load', function () { self.setSectionsData(); });
            $instance.parents('.elementor-column').css('min-height', 'auto');
            $document.keydown(function (event) {

                if (38 == event.keyCode) {
                    self.directionSwitch(event, 'up');
                }

                if (40 == event.keyCode) {
                    self.directionSwitch(event, 'down');
                }
            });

            if (settings.sectionSwitch) {
                if ('onwheel' in window) {
                }
                $document.on('mousewheel.ee_mb_scroll_navigation DOMMouseScroll.ee_mb_scroll_navigation', self.onWheel);
            }

            if (hash && sections.hasOwnProperty(hash)) {
                $itemsList.addClass('invert');
            }

            for (var section in sections) {
                var $section = sections[section].selector;

                elementorFrontend.waypoint($section, function (direction) {
                    var $this = $(this),
                        sectionId = $this.attr('id');

                    if ('down' === direction && !isScrolling && !isSwipe) {
                        window.history.pushState(null, null, '#' + sectionId);
                        currentSection = sectionId;
                        $itemsList.removeClass('active');
                        $('[data-anchor=' + sectionId + ']', $instance).addClass('active');

                        $itemsList.removeClass('invert');

                        if (sections[sectionId].invert) {
                            $itemsList.addClass('invert');
                        }
                    }
                }, {
                    offset: '95%',
                    triggerOnce: false
                });

                elementorFrontend.waypoint($section, function (direction) {
                    var $this = $(this),
                        sectionId = $this.attr('id');

                    if ('up' === direction && !isScrolling && !isSwipe) {
                        window.history.pushState(null, null, '#' + sectionId);
                        currentSection = sectionId;
                        $itemsList.removeClass('active');
                        $('[data-anchor=' + sectionId + ']', $instance).addClass('active');

                        $itemsList.removeClass('invert');

                        if (sections[sectionId].invert) {
                            $itemsList.addClass('invert');
                        }
                    }
                }, {
                    offset: '0%',
                    triggerOnce: false
                });
            }
        };

        self.onAnchorChange = function (event) {
            var $this = $(this),
                sectionId = $this.data('anchor'),
                offset = null;

            if (!sections.hasOwnProperty(sectionId)) {
                return false;
            }

            offset = sections[sectionId].offset - settings.offset;

            if (!isScrolling) {
                isScrolling = true;
                window.history.pushState(null, null, '#' + sectionId);
                currentSection = sectionId;

                $itemsList.removeClass('active');
                $this.addClass('active');

                $itemsList.removeClass('invert');

                if (sections[sectionId].invert) {
                    $itemsList.addClass('invert');
                }

                $htmlBody.stop().clearQueue().animate({ 'scrollTop': offset }, settings.speed, 'easeInOutCirc', function () {
                    isScrolling = false;
                });
            }
        };

        self.directionSwitch = function (event, direction) {
            var direction = direction || 'up',
                sectionId,
                nextItem = $('[data-anchor=' + currentSection + ']', $instance).next(),
                prevItem = $('[data-anchor=' + currentSection + ']', $instance).prev();

            if (isScrolling) {
                return false;
            }

            if ('up' === direction) {
                if (prevItem[0]) {
                    prevItem.trigger('click.ee_mb_scroll_navigation');
                }
            }

            if ('down' === direction) {
                if (nextItem[0]) {
                    nextItem.trigger('click.ee_mb_scroll_navigation');
                }
            }
        };

        self.onScroll = function (event) {
            if (isScrolling || isSwipe) {
                event.preventDefault();
            }
        };

        self.onWheel = function (event) {

            if (isScrolling || isSwipe) {
                event.preventDefault();
                return false;
            }

            var $target = $(event.target),
                $section = $target.closest('.elementor-top-section'),
                sectionId = $section.attr('id'),
                offset = 0,
                newSectionId = false,
                prevSectionId = false,
                nextSectionId = false,
                delta = event.originalEvent.wheelDelta || -event.originalEvent.detail,
                direction = (0 < delta) ? 'up' : 'down',
                windowScrollTop = $window.scrollTop();

            if (self.beforeCheck()) {
                sectionId = ee_common.getObjectFirstKey(sections);
            }

            if (self.afterCheck()) {
                sectionId = ee_common.getObjectLastKey(sections);
            }

            if (sectionId && sections.hasOwnProperty(sectionId)) {

                prevSectionId = ee_common.getObjectPrevKey(sections, sectionId);
                nextSectionId = ee_common.getObjectNextKey(sections, sectionId);

                if ('up' === direction) {
                    if (!nextSectionId && sections[sectionId].offset < windowScrollTop) {
                        newSectionId = sectionId;
                    } else {
                        newSectionId = prevSectionId;
                    }
                }

                if ('down' === direction) {
                    if (!prevSectionId && sections[sectionId].offset > windowScrollTop + 5) {
                        newSectionId = sectionId;
                    } else {
                        newSectionId = nextSectionId;
                    }
                }

                if (newSectionId) {

                    if (event.timeStamp - timeStamp > 10 && 'MacIntel' == platform) {
                        timeStamp = event.timeStamp;
                        event.preventDefault();
                        return false;
                    }

                    event.preventDefault();

                    offset = sections[newSectionId].offset - settings.offset;
                    window.history.pushState(null, null, '#' + newSectionId);
                    currentSection = newSectionId;

                    $itemsList.removeClass('active');
                    $('[data-anchor=' + newSectionId + ']', $instance).addClass('active');

                    $itemsList.removeClass('invert');

                    if (sections[newSectionId].invert) {
                        $itemsList.addClass('invert');
                    }

                    isScrolling = true;
                    self.scrollStop();
                    $htmlBody.animate({ 'scrollTop': offset }, settings.blockSpeed, 'easeInOutCirc', function () {
                        isScrolling = false;
                    });
                }
            }

        };

        self.setSectionsData = function () {
            $itemsList.each(function () {
                var $this = $(this),
                    sectionId = $this.data('anchor'),
                    sectionInvert = 'yes' === $this.data('invert') ? true : false,
                    $section = $('#' + sectionId);

                $section.addClass('ee-mb-scroll-navigation-section');
                $section.attr({ 'touch-action': 'none' });

                if ($section[0]) {
                    sections[sectionId] = {
                        selector: $section,
                        offset: Math.round($section.offset().top),
                        height: $section.outerHeight(),
                        invert: sectionInvert
                    };
                }
            });
        };

        self.beforeCheck = function (event) {
            var windowScrollTop = $window.scrollTop(),
                firstSectionId = ee_common.getObjectFirstKey(sections),
                offset = sections[firstSectionId].offset,
                topBorder = windowScrollTop + $window.outerHeight();

            if (topBorder > offset) {
                return false;
            }

            return true;
        };

        self.afterCheck = function (event) {
            var windowScrollTop = $window.scrollTop(),
                lastSectionId = ee_common.getObjectLastKey(sections),
                offset = sections[lastSectionId].offset,
                bottomBorder = sections[lastSectionId].offset + sections[lastSectionId].height;

            if (windowScrollTop < bottomBorder) {
                return false;
            }

            return true;
        };

        self.onResize = function (event) {
            self.setSectionsData();
        };

        self.scrollStop = function () {
            $htmlBody.stop(true);
        };

        self.mobileAndTabletcheck = function () {
            var check = false;

            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);

            return check;
        };

    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-scroll-navigation.default', eeMbScrollNavigation);
    });

    /*@ Table */
    var ee_mb_table = {
        ee_table: function ($scope, $) {

            ee_mb_table.ee_table.elementSettings = ee_common.getElementSettings($scope);

            var $table = $scope.find('table.ele-site-table'),
                sortableInstance = $table.data('tablesorter');

            ee_mb_table.ee_table.init = function () {

                if ('scrollable' == ee_mb_table.ee_table.elementSettings.scrollable) {
                    $scope.css('overflow-x', 'auto');
                }

                if ('yes' == ee_mb_table.ee_table.elementSettings.sortable) {
                    $table.tablesorter({
                        cssHeader: 'ele-site-table__sort',
                        cssAsc: 'ele-site-table__sort--up',
                        cssDesc: 'ele-site-table__sort--down',
                    });
                } else {
                    $table.removeData('tablesorter');
                }
            };

            ee_mb_table.ee_table.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-table.default', ee_mb_table.ee_table);
    });

    /*@ Testimonial Swiper */
    var ee_testimonial_swiper = {
        getDefaultSettings: function getDefaultSettings() {
            return {
                selectors: {
                    mainSwiper: '.elementor-main-swiper',
                    swiperSlide: '.swiper-slide'
                },
                slidesPerView: {
                    desktop: 3,
                    tablet: 2,
                    mobile: 1
                }
            };
        },
        ee_testi_fun: function ($scope, $) {

            var elementSettings = ee_common.getElementSettings($scope);

            if ('progress' === elementSettings.pagination) {
                elementSettings.pagination = 'progressbar';
            }

            var swiperOptions = {
                grabCursor: true,
                initialSlide: 1,
                slidesPerView: (elementSettings.slides_per_view) ? elementSettings.slides_per_view : 1,
                slidesPerGroup: (elementSettings.slides_to_scroll) ? elementSettings.slides_to_scroll : 1,
                spaceBetween: (elementSettings.space_between.size) ? elementSettings.space_between.size : 10,
                loop: 'yes' === elementSettings.loop,
                speed: elementSettings.speed,
                effect: "slide",
            };

            if (elementSettings.show_arrows) {
                swiperOptions.navigation = {
                    prevEl: '.elementor-swiper-button-prev',
                    nextEl: '.elementor-swiper-button-next'
                };
            }

            if (elementSettings.pagination) {
                swiperOptions.pagination = {
                    el: '.swiper-pagination',
                    type: elementSettings.pagination,
                    clickable: true
                };
            }

            if (elementSettings.autoplay) {
                swiperOptions.autoplay = {
                    delay: elementSettings.autoplay_speed,
                    disableOnInteraction: !!elementSettings.pause_on_interaction
                };
            }

            swiperOptions.breakpoints = {
                767: {
                    slidesPerGroup: (elementSettings.slides_to_scroll_mobile) ? elementSettings.slides_to_scroll_mobile : 1,
                    slidesPerView: (elementSettings.slides_per_view_mobile) ? elementSettings.slides_per_view_mobile : 1,
                    spaceBetween: (elementSettings.space_between_mobile.size) ? elementSettings.space_between_mobile.size : 10,
                },
                1024: {
                    slidesPerGroup: (elementSettings.slides_to_scroll_tablet) ? elementSettings.slides_to_scroll_tablet : 1,
                    slidesPerView: (elementSettings.slides_per_view_tablet) ? elementSettings.slides_per_view_tablet : 1,
                    spaceBetween: (elementSettings.space_between_tablet.size) ? elementSettings.space_between_tablet.size : 10,
                }
            };

            var $slider_wrapper = $scope.find('.elementor-main-swiper');

            ee_testimonial_swiper.ee_testi_fun.init = function () {
                new Swiper($slider_wrapper, swiperOptions);
            };

            /*@ Change the height of image as per content */
            $slider_wrapper.find('.elementor-testimonial__content').each(function () {
                var tallness = jQuery(this).outerHeight();
                jQuery(this).siblings('.elementor-testimonial__footer').height(tallness);
            });

            jQuery(window).resize(function () {
                $slider_wrapper.find('.elementor-testimonial__content').each(function () {
                    var tallness = jQuery(this).outerHeight();
                    jQuery(this).siblings('.elementor-testimonial__footer').height(tallness);
                });
            });

            ee_testimonial_swiper.ee_testi_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-testimonial-swiper.default', ee_testimonial_swiper.ee_testi_fun);
    });

    /*@ The Event Calendar */
    var ee_mb_the_event_calendar = {

        ee_mb_the_events_cal_fun: function ($scope, $) {

            ee_mb_the_event_calendar.ee_mb_the_events_cal_fun.init = function () {

                var elementSettings = ee_common.getElementSettings($scope),
                    ajaxurl = ElementorExtensionsFrontendConfig.ajaxurl;

                /**
                 * @ Start: Summary view
                */
                jQuery(document).on('click', '.myeventon_summary_eventlist_wrapper .summary_filter a', function (e) {
                    e.preventDefault();
                    var current = jQuery(this);
                    ee_common.showLoading($scope);
                    var data_month = jQuery(this).attr('data-month');
                    var data_year = jQuery(this).attr('data-year');

                    var sumarry_wrapper = current.parents('.myeventon_summary_eventlist_wrapper'),
                        sumarry_filter = sumarry_wrapper.find('> .summary_filter'),
                        enable_event_detail = sumarry_filter.data('event-detail'),
                        disable_event_link = sumarry_filter.data('disable-link'),
                        event_date_layout = sumarry_filter.data('date-layout'),
                        event_limit = sumarry_filter.data('event-limit'),
                        event_offset = sumarry_filter.data('event-offset'),
                        hide_past_events = sumarry_filter.data('hide-past-events');

                    var d = new Date();

                    if (!data_year) {
                        var data_year = sumarry_wrapper.find('.summary_filter > .year_filter_wrapper a.current').attr('data-year');
                    } else {
                        sumarry_wrapper.find('> .summary_filter > .year_filter_wrapper a').removeClass('current');
                    }

                    if (!data_month) {
                        var data_month = sumarry_wrapper.find('.summary_filter > .month_filter_wrapper > a.current').attr('data-month');
                    } else {
                        sumarry_wrapper.find('> .summary_filter > .month_filter_wrapper a').removeClass('current');
                    }

                    jQuery(this).addClass('current');

                    jQuery.ajax({
                        url: ajaxurl,
                        data: {
                            'action': 'getSummaryListAjaxTec',
                            'month': data_month,
                            'year': data_year,
                            'event_date_layout': event_date_layout,
                            'cat': '',
                            'limit': event_limit,
                            'offset': event_offset,
                            'enable_event_detail': enable_event_detail,
                            'disable_link': disable_event_link,
                            'hide_past_events': hide_past_events,
                            'default_to_show_time': elementSettings.default_to_show_time,
                            'default_to_show_time_formate': elementSettings.default_to_show_time_formate,
                            'event_categories': elementSettings.event_categories,
                            'start_date': elementSettings.start_date,
                        },
                        method: 'POST',
                        success: function (data) {
                            sumarry_wrapper.find('.summaryEventList').html(data).append('<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>');
                            ee_common.hideLoading($scope);
                        },
                        error: function (errorThrown) {
                            console.log(errorThrown);
                            ee_common.hideLoading($scope);
                        }
                    });
                });




                function onSummaryClick(e) {



                    var current = jQuery(this);
                    ee_common.showLoading($scope);

                    var sumarry_wrapper = current.parents('.myeventon_summary_eventlist_wrapper'),
                        sumarry_filter = sumarry_wrapper.find('> .summary_filter'),
                        event_limit = sumarry_filter.data('event-limit'),
                        event_offset = sumarry_filter.data('event-offset')
                    month_year = current.data('date'),
                        event_date_layout = current.data('date-layout'),
                        enable_event_detail = current.data('event-detail'),
                        disable_event_link = current.data('disable-link'),
                        hide_past_events = current.data('hide-past-events'),
                        default_to_show_time = current.data('default_to_show_time'),
                        default_to_show_time_formate = current.data('default_to_show_time_formate'),
                        event_categories = current.data('event_categories'),
                        end_date = current.data('end_date'),
                        order = current.data('order'),
                        eventDisplay = current.data('eventDisplay'),
                        posts_per_page = current.data('posts_per_page'),
                        splited = month_year.split('-');

                    if (jQuery('[data-elementor-post-type="page"] [data-settings*="' + elementSettings.event_categories + '"]').length > 0) {


                        jQuery.ajax({
                            url: ajaxurl,
                            data: {
                                'action': 'getSummaryListAjaxTec',
                                'month_year': month_year,
                                'event_date_layout': event_date_layout,
                                'enable_event_detail': enable_event_detail,
                                'disable_link': disable_event_link,
                                'hide_past_events': hide_past_events,
                                'limit': event_limit,
                                'offset': event_offset,
                                'default_to_show_time': default_to_show_time,
                                'default_to_show_time_formate': default_to_show_time_formate,
                                'event_categories': elementSettings.event_categories,
                                'start_date': elementSettings.start_date,
                                'end_date': end_date,
                                'order': order,
                                'eventDisplay': eventDisplay,
                                'posts_per_page': posts_per_page,
                                'default_to_show_time': elementSettings.default_to_show_time,
                                'default_to_show_time_formate': elementSettings.default_to_show_time_formate,
                            },
                            method: 'POST',
                            success: function (data) {

                                jQuery('.myeventon_summary_eventlist_wrapper > .summary_filter  a').removeClass('current');
                                jQuery('.myeventon_summary_eventlist_wrapper > .summary_filter > .year_filter_wrapper a[data-year="' + splited[0] + '"]').addClass('current');
                                jQuery('.myeventon_summary_eventlist_wrapper > .summary_filter > .month_filter_wrapper a[data-month="' + splited[1] + '"]').addClass('current');

                                console.log(elementSettings.event_categories);
                                console.log(default_to_show_time_formate > 0);

                                //jQuery('.summaryEventList').html(data).append('<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>');
                                document.querySelector('.summaryEventList').innerHTML = '';
                                document.querySelector('.summaryEventList').innerHTML = data;
                                document.querySelector('.summaryEventList').insertAdjacentHTML('beforeend', '<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>')


                                ee_common.hideLoading($scope);
                            },
                            error: function (errorThrown) {
                                console.log(errorThrown);
                                ee_common.hideLoading($scope);
                            }
                        });


                    }

                }


                jQuery(document).on('click', '#summary_prev', onSummaryClick);
                jQuery(document).on('click', '#summary_next', onSummaryClick);


                /*@Show more button click*/
                jQuery(document).on('click', '.myeventon_summary_eventlist_wrapper .summaryEventList .show_more_events', function () {
                    var current = jQuery(this);
                    ee_common.showLoading($scope);

                    var sumarry_wrapper = current.parents('.myeventon_summary_eventlist_wrapper'),
                        sumarry_filter = sumarry_wrapper.find('> .summary_filter'),
                        data_year = sumarry_wrapper.find('.summary_filter > .year_filter_wrapper a.current').attr('data-year'),
                        data_month = sumarry_wrapper.find('.summary_filter > .month_filter_wrapper > a.current').attr('data-month'),
                        event_date_layout = sumarry_filter.data('date-layout'),
                        enable_event_detail = sumarry_filter.data('event-detail'),
                        disable_event_link = sumarry_filter.data('disable-link'),
                        hide_past_events = sumarry_filter.data('hide-past-events'),
                        event_offset = parseInt(jQuery(document).find('#hd_offset').val()),
                        event_limit = sumarry_filter.data('event-limit'),
                        show_future_events = sumarry_filter.data('future-events');

                    /*@ Determine first click */
                    if (current.hasClass('clicked')) {
                        event_offset = parseInt(jQuery(document).find('#hd_limit_offset').val());
                    } else {
                        current.addClass('clicked');
                        event_offset = event_limit + event_offset;
                    }

                    let empty = false;
                    if (!elementSettings.event_categories) {
                        empty = true;
                    }

                    if (empty || (jQuery('[data-elementor-post-type="page"] [data-settings*="' + elementSettings.event_categories + '"]').length > 0)) {

                        jQuery.ajax({
                            url: ajaxurl,
                            data: {
                                'action': 'getSummaryListAjaxTec',
                                'month': data_month,
                                'year': data_year,
                                'limit': elementSettings.event_limit,
                                'offset': event_offset,
                                'event_date_layout': event_date_layout,
                                'enable_event_detail': enable_event_detail,
                                'disable_link': disable_event_link,
                                'hide_past_events': hide_past_events,
                                'show_future_events': (show_future_events) ? show_future_events : '',
                                'orderby': elementSettings.orderby,
                                'order': elementSettings.order,
                                'query_limit': elementSettings.query_limit,
                                'end_date': elementSettings.end_date,
                                'custom_end_date': elementSettings.custom_end_date,
                                'start_date': elementSettings.start_date,
                                'custom_start_date': elementSettings.custom_start_date,
                                'event_categories': elementSettings.event_categories,
                                'default_to_show_time': elementSettings.default_to_show_time,
                                'default_to_show_time_formate': elementSettings.default_to_show_time_formate,
                            },
                            method: 'POST',
                            success: function (data) {
                                document.querySelector('.summaryEventList').innerHTML = '';
                                jQuery('.summaryEventList').html(data).append('<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>');
                                jQuery(document).find('#hd_offset').val(event_offset);
                                ee_common.hideLoading($scope);
                            },
                            error: function (errorThrown) {
                                console.log(errorThrown);
                                ee_common.hideLoading($scope);
                            }
                        });
                    }
                });

                /**
                 * @ Start: Summary view
                */

                /*@ Calendar view*/
                var calendar_wrapper_div = $scope.find("div.tec.myeventon_calendar");
                if (calendar_wrapper_div.length > 0) {
                    calendar_wrapper_div.each(function () {

                        var calendar_id = jQuery(this).attr('data-id');
                        var event_list = jQuery(this).data('caldata');
                        var disable_link = jQuery(this).data('disable-link');

                        var calendarEl = document.getElementById('calendar-' + calendar_id);

                        var calendar = new FullCalendar.Calendar(calendarEl, {
                            displayEventTime: false,
                            plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
                            header: {
                                left: 'prev,next today',
                                center: 'title',
                                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                            },
                            events: event_list,
                            eventRender: function (event, element) {
                                if (typeof element !== 'undefined') {
                                    element.addClass("custom-event");
                                }
                            },
                            eventClick: function (arg) {
                                var clicked_date = arg.event.start;
                                clicked_date = moment(clicked_date).format("YYYY-MM-DD");

                                var current = jQuery(arg.el);
                                jQuery.ajax({
                                    url: ajaxurl,
                                    data: {
                                        'action': 'getEventListByDayTec',
                                        'date': clicked_date,
                                        'disable_link': disable_link
                                    },
                                    method: 'POST',
                                    success: function (data) {
                                        current.parents('.myeventon_calendar').siblings('.myeventon_calendar_summaryview').html(data);
                                    },
                                    error: function (errorThrown) {
                                    }
                                });
                            },
                            dayClick: function (arg) {
                                var clicked_date = arg.event.start;
                                clicked_date = moment(clicked_date).format("YYYY-MM-DD");

                                var current = jQuery(arg.el);
                                jQuery.ajax({
                                    url: ajaxurl,
                                    data: {
                                        'action': 'getEventListByDayTec',
                                        'date': clicked_date,
                                        'disable_link': disable_link,
                                    },
                                    method: 'POST',
                                    success: function (data) {
                                        current.parents('.myeventon_calendar').siblings('.myeventon_calendar_summaryview').html(data);
                                    },
                                    error: function (errorThrown) {
                                    }
                                });
                            }
                        });
                        calendar.changeView(elementSettings.default_calendar_view);
                        calendar.render();
                    });
                }

                /*@ Display - Hide summary description no click of event label */
                if (elementSettings.enable_event_detail === 'yes') {
                    jQuery(document).on('click', '.myeventon_calendar_summaryview li,.summaryEventList li', function (e) {
                        jQuery(this).next('.summary_cal_description').slideToggle();
                        e.preventDefault();
                    });
                }
            };
            ee_mb_the_event_calendar.ee_mb_the_events_cal_fun.init();

        }

    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-the-events-calendar.default', ee_mb_the_event_calendar.ee_mb_the_events_cal_fun);
    });

    // Event calendar
    var event_calendar = {
        event_calendar_fun: function ($scope, $) {

            var elementSettings = ee_common.getElementSettings($scope);

            event_calendar.event_calendar_fun.init = function () {

                jQuery('.categories_tribe_filter').change(function () {
                    var categorySlug = jQuery(this).val();
                    elementSettings['event_categories'] = categorySlug;
                    jQuery.ajax({
                        url: ElementorExtensionsFrontendConfig.ajaxurl,
                        data: {
                            'action': 'getEventFilterAjax',
                            'setting': elementSettings,
                        },
                        method: 'POST',
                        success: function (data) {
                            jQuery('.past_events_wrapper.tec-wrapper').remove();
                            jQuery('#filter').replaceWith(data).append('<div class="elementor_extensions_loading_overlay"><div class="elementor_extensions_loader"></div></div>');
                            ee_common.hideLoading($scope);
                        },
                        error: function (errorThrown) {
                            console.log(errorThrown);
                            ee_common.hideLoading($scope);
                        }
                    });
                });
            };

            event_calendar.event_calendar_fun.init();
        }
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ee-mb-the-events-calendar.default', event_calendar.event_calendar_fun);
    });

})(jQuery);
!function(t){var o=function(o,s){var i,e,n,r,a=!1,c=!1,f=!1,p={},l={to:"top",offset:0,effectsOffset:0,parent:!1,classes:{sticky:"sticky",stickyActive:"sticky-active",stickyEffects:"sticky-effects",spacer:"sticky-spacer"},isRTL:!1,handleScrollbarWidth:!1},d=function(t,o,s){var i={},e=t[0].style;s.forEach((function(t){i[t]=void 0!==e[t]?e[t]:""})),t.data("css-backup-"+o,i)},m=function(t,o){return t.data("css-backup-"+o)};const u=()=>{if(r=b(i,"width"),n=i.offset().left,e.isRTL){const t=e.handleScrollbarWidth?window.innerWidth:document.body.offsetWidth;n=Math.max(t-r-n,0)}};var h=function(){p.$spacer=i.clone().addClass(e.classes.spacer).css({visibility:"hidden",transition:"none",animation:"none"}),i.after(p.$spacer)},y=function(){p.$spacer.remove()},k=function(){d(i,"unsticky",["position","width","margin-top","margin-bottom","top","bottom","inset-inline-start"]);const t={position:"fixed",width:r,marginTop:0,marginBottom:0};t[e.to]=e.offset,t["top"===e.to?"bottom":"top"]="",n&&(t["inset-inline-start"]=n+"px"),i.css(t).addClass(e.classes.stickyActive)},v=function(){i.css(m(i,"unsticky")).removeClass(e.classes.stickyActive)},b=function(t,o,s){var i=getComputedStyle(t[0]),e=parseFloat(i[o]),n="height"===o?["top","bottom"]:["left","right"],r=[];return"border-box"!==i.boxSizing&&r.push("border","padding"),s&&r.push("margin"),r.forEach((function(t){n.forEach((function(o){e+=parseFloat(i[t+"-"+o])}))})),e},w=function(t){var o=p.$window.scrollTop(),s=b(t,"height"),i=innerHeight,e=t.offset().top-o,n=e-i;return{top:{fromTop:e,fromBottom:n},bottom:{fromTop:e+s,fromBottom:n+s}}},g=function(){v(),y(),a=!1,i.trigger("sticky:unstick")},$=function(){var t=w(i),o="top"===e.to;if(c){(o?t.top.fromTop>e.offset:t.bottom.fromBottom<-e.offset)&&(p.$parent.css(m(p.$parent,"childNotFollowing")),i.css(m(i,"notFollowing")),c=!1)}else{var s=w(p.$parent),a=getComputedStyle(p.$parent[0]),f=parseFloat(a[o?"borderBottomWidth":"borderTopWidth"]),l=o?s.bottom.fromTop-f:s.top.fromBottom+f;(o?l<=t.bottom.fromTop:l>=t.top.fromBottom)&&function(){d(p.$parent,"childNotFollowing",["position"]),p.$parent.css("position","relative"),d(i,"notFollowing",["position","inset-inline-start","top","bottom"]);const t={position:"absolute"};if(n=p.$spacer.position().left,e.isRTL){const t=i.parent().outerWidth(),o=p.$spacer.position().left;r=p.$spacer.outerWidth(),n=Math.max(t-r-o,0)}t["inset-inline-start"]=n+"px",t[e.to]="",t["top"===e.to?"bottom":"top"]=0,i.css(t),c=!0}()}},T=function(){var t,o=e.offset;if(a){var s=w(p.$spacer);t="top"===e.to?s.top.fromTop-o:-s.bottom.fromBottom-o,e.parent&&$(),t>0&&g()}else{var n=w(i);(t="top"===e.to?n.top.fromTop-o:-n.bottom.fromBottom-o)<=0&&(u(),h(),k(),a=!0,i.trigger("sticky:stick"),e.parent&&$())}!function(t){f&&-t<e.effectsOffset?(i.removeClass(e.classes.stickyEffects),f=!1):!f&&-t>=e.effectsOffset&&(i.addClass(e.classes.stickyEffects),f=!0)}(t)},B=function(){T()},C=function(){a&&(v(),y(),u(),h(),k(),e.parent&&(c=!1,$()))};this.destroy=function(){a&&g(),p.$window.off("scroll",B).off("resize",C),i.removeClass(e.classes.sticky)},e=jQuery.extend(!0,l,s),i=t(o).addClass(e.classes.sticky),p.$window=t(window),e.parent&&(p.$parent=i.parent(),"parent"!==e.parent&&(p.$parent=p.$parent.closest(e.parent))),p.$window.on({scroll:B,resize:C}),T()};t.fn.sticky=function(s){var i="string"==typeof s;return this.each((function(){var e=t(this);if(i){var n=e.data("sticky");if(!n)throw Error("Trying to perform the `"+s+"` method prior to initialization");if(!n[s])throw ReferenceError("Method `"+s+"` not found in sticky instance");n[s].apply(n,Array.prototype.slice.call(arguments,1)),"destroy"===s&&e.removeData("sticky")}else e.data("sticky",new o(this,s))})),this},window.Sticky=o}(jQuery);