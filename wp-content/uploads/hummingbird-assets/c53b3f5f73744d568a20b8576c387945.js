/**handles:hfe-frontend-js,prismjs_core,prismjs_loader,prismjs_normalize,prismjs_line_numbers,prismjs_toolbar,prismjs_copy_to_clipboard**/
!function(o){var e=function(e,t){var n,a,i,l,s;void 0!==e&&(n=e.find("input.hfe-search-form__input"),a=e.find("button#clear"),i=e.find("button#clear-with-button"),l=e.find(".hfe-search-submit"),s=e.find(".hfe-search-icon-toggle input"),e.find(".hfe-search-icon-toggle").on("click",function(){e.find(".hfe-search-form__input").trigger("focus")}),e.find(".hfe-search-form__input").on("focus",function(){e.find(".hfe-search-button-wrapper").addClass("hfe-input-focus")}),e.find(".hfe-search-form__input").blur(function(){e.find(".hfe-search-button-wrapper").removeClass("hfe-input-focus")}),l.on("touchstart click",function(){n.submit()}),s.css("padding-right",s.next().outerWidth()+"px"),n.on("keyup",function(){a.style=this.value.length?a.css("visibility","visible"):a.css("visibility","hidden"),i.style=this.value.length?i.css("visibility","visible"):i.css("visibility","hidden"),i.css("right",l.outerWidth()+"px")}),a.on("click",function(){this.style=a.css("visibility","hidden"),n.value=""}),i.on("click",function(){this.style=i.css("visibility","hidden"),n.value=""}))},t=function(t,n){var a,e,i,l,s,o,m,r,o;void 0!==t&&(a=t.data("id"),e=t.find(".elementor-widget-hfe-nav-menu "),i=n(".elementor-element-"+a+" .hfe-nav-menu").data("layout"),l=n(".elementor-element-"+a+" .hfe-flyout-wrapper").data("flyout-class"),s=n(".elementor-element-"+a+" .hfe-nav-menu").data("last-item"),o=n(".elementor-element-"+a+" .hfe-flyout-wrapper").data("last-item"),m=n(".elementor-element-"+a+" .hfe-nav-menu nav li a"),r=n(".elementor-element-"+a+" .hfe-flyout-wrapper li a"),0<m.length&&h(m),0<r.length&&h(r),n("div.hfe-has-submenu-container").removeClass("sub-menu-active"),p(a),b(t),v(a,i),("horizontal"!==i||"horizontal"===i&&window.matchMedia("( max-width: 767px )").matches||"horizontal"===i&&window.matchMedia("( max-width: 1024px )").matches)&&c(a),n(".elementor-element-"+a+" .hfe-flyout-trigger .hfe-nav-menu-icon").off("click keyup").on("click keyup",function(){u(a)}),n(".elementor-element-"+a+" .hfe-flyout-close").off("click keyup").on("click keyup",function(){d(a)}),n(".elementor-element-"+a+" .hfe-flyout-overlay").off("click").on("click",function(){d(a)}),t.find(".sub-menu").each(function(){var e=n(this).closest(".menu-item");t.find(e).addClass("parent-has-child"),t.find(e).removeClass("parent-has-no-child")}),"cta"!=s&&"cta"!=o||"expandible"==i||(n(".elementor-element-"+a+" li.menu-item:last-child a.hfe-menu-item").parent().addClass("elementor-button-wrapper"),n(".elementor-element-"+a+" li.menu-item:last-child a.hfe-menu-item").addClass("elementor-button")),f(a),n(window).on("resize",function(){("horizontal"!==i||"horizontal"===i&&window.matchMedia("( max-width: 767px )").matches||"horizontal"===i&&window.matchMedia("( max-width: 1024px )").matches)&&c(a),"horizontal"==i&&window.matchMedia("( min-width: 977px )").matches&&n(".elementor-element-"+a+" div.hfe-has-submenu-container").next().css("position","absolute"),"expandible"==i||"flyout"==i?p(a):"vertical"!=i&&"horizontal"!=i||(window.matchMedia("( max-width: 767px )").matches&&(n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-tablet")||n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-mobile"))||window.matchMedia("( max-width: 1024px )").matches&&n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-tablet"))&&p(a),f(a)}),t.find(".parent-has-child .hfe-has-submenu-container a").attr("aria-haspopup","true"),t.find(".parent-has-child .hfe-has-submenu-container a").attr("aria-expanded","false"),(o=t.find(".hfe-nav-menu__toggle")).attr("aria-haspopup","true"),o.attr("aria-expanded","false"),window.matchMedia("( max-width: 1024px )").matches&&n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-tablet")&&o.find("i").attr("aria-hidden","false"),window.matchMedia("( max-width: 768px )").matches&&n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-mobile")&&o.find("i").attr("aria-hidden","false"),n(document).trigger("hfe_nav_menu_init",a),n(".elementor-element-"+a+" div.hfe-has-submenu-container").on("keyup",function(e){var t=n(this);t.parent().hasClass("menu-active")?(t.parent().removeClass("menu-active"),t.parent().next().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),t.parent().prev().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),t.parent().next().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),t.parent().prev().find("div.hfe-has-submenu-container").removeClass("sub-menu-active")):(t.parent().next().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),t.parent().prev().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),t.parent().next().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),t.parent().prev().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),t.parent().siblings().find(".hfe-has-submenu-container a").attr("aria-expanded","false"),t.parent().next().removeClass("menu-active"),t.parent().prev().removeClass("menu-active"),event.preventDefault(),t.parent().addClass("menu-active"),"horizontal"!==i&&t.addClass("sub-menu-active"),t.find("a").attr("aria-expanded","true"),t.next().css({visibility:"visible",opacity:"1",height:"auto"}),"horizontal"!==i||"horizontal"===i&&window.matchMedia("( max-width: 767px )").matches&&(n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-tablet")||n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-mobile"))?t.next().css("position","relative"):"horizontal"===i&&window.matchMedia("( max-width: 1024px )").matches&&(n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-tablet")?t.next().css("position","relative"):(n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-mobile")||n(".elementor-element-"+a).hasClass("hfe-nav-menu__breakpoint-none"))&&t.next().css("position","absolute")))}),n(".elementor-element-"+a+" li.menu-item").on("keyup",function(e){var t=n(this);t.next().find("a").attr("aria-expanded","false"),t.prev().find("a").attr("aria-expanded","false"),t.next().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),t.prev().find("ul").css({visibility:"hidden",opacity:"0",height:"0"}),t.siblings().removeClass("menu-active"),t.next().find("div.hfe-has-submenu-container").removeClass("sub-menu-active"),t.prev().find("div.hfe-has-submenu-container").removeClass("sub-menu-active")}))};function h(e){e.each(function(){var n=o(this),a;n.is('[href*="#"]')&&((a=n.parent()).removeClass("current-menu-item current-menu-ancestor"),n.click(function(){var e=a.index(),t;n.closest("ul").find("li").not(":eq("+e+")").removeClass("current-menu-item current-menu-ancestor"),a.addClass("current-menu-item current-menu-ancestor")}))})}function u(e){var t=o("#hfe-flyout-content-id-"+e),n=o("#hfe-flyout-content-id-"+e).data("layout"),a=o("#hfe-flyout-content-id-"+e).data("flyout-type"),i=t.width()+"px",t=o(".elementor-element-"+e+" .hfe-flyout-container .hfe-side.hfe-flyout-"+n);o(".elementor-element-"+e+" .hfe-flyout-overlay").fadeIn(100),"left"==n?(o("body").css("margin-left","0"),t.css("left","0"),"push"==a&&o("body").addClass("hfe-flyout-animating").css({position:"absolute",width:"100%","margin-left":i,"margin-right":"auto"})):(o("body").css("margin-right","0"),t.css("right","0"),"push"==a&&o("body").addClass("hfe-flyout-animating").css({position:"absolute",width:"100%","margin-left":"-"+i,"margin-right":"auto"})),t.addClass("hfe-flyout-show")}function d(e){var t=o("#hfe-flyout-content-id-"+e),n=o("#hfe-flyout-content-id-"+e).data("layout"),a=t.width()+"px",i=o("#hfe-flyout-content-id-"+e).data("flyout-type"),t=o(".elementor-element-"+e+" .hfe-flyout-container .hfe-side.hfe-flyout-"+n);o(".elementor-element-"+e+" .hfe-flyout-overlay").fadeOut(100),"left"==n?(t.css("left","-"+a),"push"==i&&(o("body").css({position:"","margin-left":"","margin-right":""}),setTimeout(function(){o("body").removeClass("hfe-flyout-animating").css({width:""})}))):(t.css("right","-"+a),"push"==i&&(o("body").css({position:"","margin-right":"","margin-left":""}),setTimeout(function(){o("body").removeClass("hfe-flyout-animating").css({width:""})}))),t.removeClass("hfe-flyout-show")}function c(n){var a=o(".elementor-element-"+n+" .hfe-nav-menu").data("layout");o(".elementor-element-"+n+" div.hfe-has-submenu-container").off("click").on("click",function(e){var t=o(this);o(".elementor-element-"+n).hasClass("hfe-link-redirect-child")&&(t.hasClass("sub-menu-active")?t.next().hasClass("sub-menu-open")?(t.find("a").attr("aria-expanded","false"),t.removeClass("sub-menu-active"),t.nextAll(".sub-menu").removeClass("sub-menu-open"),t.nextAll(".sub-menu").css({visibility:"hidden",opacity:"0",height:"0"}),t.nextAll(".sub-menu").css({transition:"none"}),"horizontal"!==a||"horizontal"===a&&window.matchMedia("( max-width: 767px )").matches&&(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile"))?t.next().css("position","relative"):"horizontal"===a&&window.matchMedia("( max-width: 1024px )").matches&&(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile"))&&t.next().css("position","absolute")):(t.find("a").attr("aria-expanded","false"),("horizontal"!==a||"horizontal"===a&&window.matchMedia("( max-width: 767px )").matches&&(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile"))||"horizontal"===a&&window.matchMedia("( max-width: 1024px )").matches&&(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile")))&&(e.preventDefault(),t.next().css("position","relative")),t.removeClass("sub-menu-active"),t.nextAll(".sub-menu").removeClass("sub-menu-open"),t.nextAll(".sub-menu").css({visibility:"hidden",opacity:"0",height:"0"}),t.nextAll(".sub-menu").css({transition:"none"})):(t.find("a").attr("aria-expanded","true"),"horizontal"!==a||"horizontal"===a&&window.matchMedia("( max-width: 767px )").matches&&(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile"))?(e.preventDefault(),t.next().css("position","relative")):"horizontal"===a&&window.matchMedia("( max-width: 1024px )").matches&&(e.preventDefault(),o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")?t.next().css("position","relative"):(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-none"))&&t.next().css("position","absolute")),t.addClass("sub-menu-active"),t.nextAll(".sub-menu").addClass("sub-menu-open"),t.nextAll(".sub-menu").css({visibility:"visible",opacity:"1",height:"auto"}),t.nextAll(".sub-menu").css({transition:"0.3s ease"})))}),o(".elementor-element-"+n+" .hfe-menu-toggle").off("click keyup").on("click keyup",function(e){var t=o(this);t.parent().parent().hasClass("menu-active")?(e.preventDefault(),t.parent().parent().removeClass("menu-active"),t.parent().parent().next().css({visibility:"hidden",opacity:"0",height:"0"})):(e.preventDefault(),t.parent().parent().addClass("menu-active"),t.parent().parent().next().css({visibility:"visible",opacity:"1",height:"auto"})),"horizontal"!==a||"horizontal"===a&&window.matchMedia("( max-width: 767px )").matches&&(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile"))?t.parent().parent().next().css("position","relative"):"horizontal"===a&&window.matchMedia("( max-width: 1024px )").matches&&(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-tablet")?t.parent().parent().next().css("position","relative"):(o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-mobile")||o(".elementor-element-"+n).hasClass("hfe-nav-menu__breakpoint-none"))&&t.parent().parent().next().css("position","absolute"))})}function f(e){var t=o(".elementor-element-"+e+" .hfe-nav-menu").data("last-item"),n=o(".elementor-element-"+e+" .hfe-flyout-wrapper").data("last-item"),a=o(".elementor-element-"+e+" .hfe-nav-menu").data("layout"),i,a;o(".elementor-element-"+e+" nav").removeClass("hfe-dropdown"),window.matchMedia("( max-width: 767px )").matches?o(".elementor-element-"+e).hasClass("hfe-nav-menu__breakpoint-mobile")||o(".elementor-element-"+e).hasClass("hfe-nav-menu__breakpoint-tablet")?(o(".elementor-element-"+e+" nav").addClass("hfe-dropdown"),"cta"!=t&&"cta"!=n||"expandible"==a||(o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").parent().removeClass("elementor-button-wrapper"),o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").removeClass("elementor-button"))):(o(".elementor-element-"+e+" nav").removeClass("hfe-dropdown"),"cta"!=t&&"cta"!=n||"expandible"==a||(o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").parent().addClass("elementor-button-wrapper"),o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").addClass("elementor-button"))):window.matchMedia("( max-width: 1024px )").matches?o(".elementor-element-"+e).hasClass("hfe-nav-menu__breakpoint-tablet")?(o(".elementor-element-"+e+" nav").addClass("hfe-dropdown"),"cta"!=t&&"cta"!=n||"expandible"==a||(o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").parent().removeClass("elementor-button-wrapper"),o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").removeClass("elementor-button"))):(o(".elementor-element-"+e+" nav").removeClass("hfe-dropdown"),"cta"!=t&&"cta"!=n||"expandible"==a||(o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").parent().addClass("elementor-button-wrapper"),o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").addClass("elementor-button"))):((i=o(".elementor-element-"+e)).find("nav").removeClass("hfe-dropdown"),"cta"!=t&&"cta"!=n||"expandible"==a||(i.find("li.menu-item:last-child a.hfe-menu-item").parent().addClass("elementor-button-wrapper"),i.find("li.menu-item:last-child a.hfe-menu-item").addClass("elementor-button"))),"expandible"==(a=o(".elementor-element-"+e+" .hfe-nav-menu").data("layout"))&&("cta"!=t&&"cta"!=n||"expandible"==a||(o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").parent().removeClass("elementor-button-wrapper"),o(".elementor-element-"+e+" li.menu-item:last-child a.hfe-menu-item").removeClass("elementor-button")))}function p(s){var e,t;o(".elementor-element-"+s+" .hfe-nav-menu__toggle").hasClass("hfe-active-menu-full-width")&&(o(".elementor-element-"+s+" .hfe-nav-menu__toggle").next().css("left","0"),e=o(".elementor-element-"+s).closest(".elementor-section").outerWidth(),t=o(".elementor-element-"+s).closest(".elementor-section").offset().left-o(".elementor-element-"+s+" .hfe-nav-menu__toggle").next().offset().left,o(".elementor-element-"+s+" .hfe-nav-menu__toggle").next().css("width",e+"px"),o(".elementor-element-"+s+" .hfe-nav-menu__toggle").next().css("left",t+"px")),o(".elementor-element-"+s+" .hfe-nav-menu__toggle").off("click keyup").on("click keyup",function(e){var t=o(this),n=t.next(),a,i,l,a,i,l,i,t;t.hasClass("hfe-active-menu")?(a=o(".elementor-element-"+s+" .hfe-nav-menu").data("layout"),i=n.data("full-width"),l=o(".elementor-element-"+s+" nav").data("toggle-icon"),o(".elementor-element-"+s).find(".hfe-nav-menu-icon").html(l),t.removeClass("hfe-active-menu"),t.attr("aria-expanded","false"),"yes"==i&&(t.removeClass("hfe-active-menu-full-width"),n.css("width","auto"),n.css("left","0"),n.css("z-index","0"))):(a=o(".elementor-element-"+s+" .hfe-nav-menu").data("layout"),i=n.data("full-width"),l=o(".elementor-element-"+s+" nav").data("close-icon"),o(".elementor-element-"+s).find(".hfe-nav-menu-icon").html(l),t.addClass("hfe-active-menu"),t.attr("aria-expanded","true"),"yes"==i&&(t.addClass("hfe-active-menu-full-width"),i=o(".elementor-element-"+s).closest(".elementor-section").outerWidth(),t=o(".elementor-element-"+s).closest(".elementor-section").offset().left-n.offset().left,n.css("width",i+"px"),n.css("left",t+"px"),n.css("z-index","9999"))),o(".elementor-element-"+s+" nav").hasClass("menu-is-active")?o(".elementor-element-"+s+" nav").removeClass("menu-is-active"):o(".elementor-element-"+s+" nav").addClass("menu-is-active")})}function v(i,l){o(".elementor-element-"+i+" ul.hfe-nav-menu li a").on("click",function(){var e=o(this),t=e.attr("href"),n="",a,n;t.includes("#")&&(a=t.indexOf("#"),n=t.slice(a+1)),0<n.length&&("expandible"!=l&&(!window.matchMedia("(max-width: 1024px)").matches||"horizontal"!=l&&"vertical"!=l)?(e.hasClass("hfe-sub-menu-item")&&(d(i),o(".elementor-element-"+i+" .hfe-menu-toggle").trigger("click")),d(i)):(o(".elementor-element-"+i+" .hfe-nav-menu__toggle").trigger("click"),e.hasClass("hfe-sub-menu-item")&&o(".elementor-element-"+i+" .hfe-menu-toggle").trigger("click")))})}function b(e){var t=e.find(".hfe-nav-menu nav .pll-parent-menu-item a.hfe-menu-item"),n=t.prop("href"),e,a;void 0!==n&&n.includes("#")&&(e=n.indexOf("#"),"#pll_switcher"===n.slice(e)&&t.prop("href","#"))}o(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/navigation-menu.default",t),elementorFrontend.hooks.addAction("frontend/element_ready/hfe-search-button.default",e)})}(jQuery);
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(u){var c=/\blang(?:uage)?-([\w-]+)\b/i,n=0,_={manual:u.Prism&&u.Prism.manual,disableWorkerMessageHandler:u.Prism&&u.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof M?new M(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function t(e,r){var a,n;switch(r=r||{},_.util.type(e)){case"Object":if(n=_.util.objId(e),r[n])return r[n];for(var i in a={},r[n]=a,e)e.hasOwnProperty(i)&&(a[i]=t(e[i],r));return a;case"Array":return n=_.util.objId(e),r[n]?r[n]:(a=[],r[n]=a,e.forEach(function(e,n){a[n]=t(e,r)}),a);default:return e}},getLanguage:function(e){for(;e&&!c.test(e.className);)e=e.parentElement;return e?(e.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{extend:function(e,n){var t=_.util.clone(_.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(t,e,n,r){var a=(r=r||_.languages)[t],i={};for(var l in a)if(a.hasOwnProperty(l)){if(l==e)for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);n.hasOwnProperty(l)||(i[l]=a[l])}var s=r[t];return r[t]=i,_.languages.DFS(_.languages,function(e,n){n===s&&e!=t&&(this[e]=i)}),i},DFS:function e(n,t,r,a){a=a||{};var i=_.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],r||l);var o=n[l],s=_.util.type(o);"Object"!==s||a[i(o)]?"Array"!==s||a[i(o)]||(a[i(o)]=!0,e(o,t,l,a)):(a[i(o)]=!0,e(o,t,null,a))}}},plugins:{},highlightAll:function(e,n){_.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};_.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),_.hooks.run("before-all-elements-highlight",r);for(var a,i=0;a=r.elements[i++];)_.highlightElement(a,!0===n,r.callback)},highlightElement:function(e,n,t){var r=_.util.getLanguage(e),a=_.languages[r];e.className=e.className.replace(c,"").replace(/\s+/g," ")+" language-"+r;var i=e.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(c,"").replace(/\s+/g," ")+" language-"+r);var l={element:e,language:r,grammar:a,code:e.textContent};function o(e){l.highlightedCode=e,_.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,_.hooks.run("after-highlight",l),_.hooks.run("complete",l),t&&t.call(l.element)}if(_.hooks.run("before-sanity-check",l),!l.code)return _.hooks.run("complete",l),void(t&&t.call(l.element));if(_.hooks.run("before-highlight",l),l.grammar)if(n&&u.Worker){var s=new Worker(_.filename);s.onmessage=function(e){o(e.data)},s.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else o(_.highlight(l.code,l.grammar,l.language));else o(_.util.encode(l.code))},highlight:function(e,n,t){var r={code:e,grammar:n,language:t};return _.hooks.run("before-tokenize",r),r.tokens=_.tokenize(r.code,r.grammar),_.hooks.run("after-tokenize",r),M.stringify(_.util.encode(r.tokens),r.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var r in t)n[r]=t[r];delete n.rest}var a=new i;return z(a,a.head,e),function e(n,t,r,a,i,l){for(var o in r)if(r.hasOwnProperty(o)&&r[o]){var s=r[o];s=Array.isArray(s)?s:[s];for(var u=0;u<s.length;++u){if(l&&l.cause==o+","+u)return;var c=s[u],g=c.inside,f=!!c.lookbehind,h=!!c.greedy,d=c.alias;if(h&&!c.pattern.global){var v=c.pattern.toString().match(/[imsuy]*$/)[0];c.pattern=RegExp(c.pattern.source,v+"g")}for(var p=c.pattern||c,m=a.next,y=i;m!==t.tail&&!(l&&y>=l.reach);y+=m.value.length,m=m.next){var k=m.value;if(t.length>n.length)return;if(!(k instanceof M)){var b,x=1;if(h){if(!(b=W(p,y,n,f)))break;var w=b.index,A=b.index+b[0].length,P=y;for(P+=m.value.length;P<=w;)m=m.next,P+=m.value.length;if(P-=m.value.length,y=P,m.value instanceof M)continue;for(var S=m;S!==t.tail&&(P<A||"string"==typeof S.value);S=S.next)x++,P+=S.value.length;x--,k=n.slice(y,P),b.index-=y}else if(!(b=W(p,0,k,f)))continue;var w=b.index,E=b[0],O=k.slice(0,w),L=k.slice(w+E.length),N=y+k.length;l&&N>l.reach&&(l.reach=N);var j=m.prev;O&&(j=z(t,j,O),y+=O.length),I(t,j,x);var C=new M(o,g?_.tokenize(E,g):E,d,E);m=z(t,j,C),L&&z(t,m,L),1<x&&e(n,t,r,m.prev,y,{cause:o+","+u,reach:N})}}}}}(e,a,n,a.head,0),function(e){var n=[],t=e.head.next;for(;t!==e.tail;)n.push(t.value),t=t.next;return n}(a)},hooks:{all:{},add:function(e,n){var t=_.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=_.hooks.all[e];if(t&&t.length)for(var r,a=0;r=t[a++];)r(n)}},Token:M};function M(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function W(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function i(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function z(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function I(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}if(u.Prism=_,M.stringify=function n(e,t){if("string"==typeof e)return e;if(Array.isArray(e)){var r="";return e.forEach(function(e){r+=n(e,t)}),r}var a={type:e.type,content:n(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t},i=e.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(a.classes,i):a.classes.push(i)),_.hooks.run("wrap",a);var l="";for(var o in a.attributes)l+=" "+o+'="'+(a.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+l+">"+a.content+"</"+a.tag+">"},!u.document)return u.addEventListener&&(_.disableWorkerMessageHandler||u.addEventListener("message",function(e){var n=JSON.parse(e.data),t=n.language,r=n.code,a=n.immediateClose;u.postMessage(_.highlight(r,_.languages[t],t)),a&&u.close()},!1)),_;var e=_.util.currentScript();function t(){_.manual||_.highlightAll()}if(e&&(_.filename=e.src,e.hasAttribute("data-manual")&&(_.manual=!0)),!_.manual){var r=document.readyState;"loading"===r||"interactive"===r&&e&&e.defer?document.addEventListener("DOMContentLoaded",t):window.requestAnimationFrame?window.requestAnimationFrame(t):window.setTimeout(t,16)}return _}(_self);"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.createElement){var l={javascript:"clike",actionscript:"javascript",apex:["clike","sql"],arduino:"cpp",aspnet:["markup","csharp"],birb:"clike",bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup-templating",ejs:["javascript","markup-templating"],etlua:["lua","markup-templating"],erb:["ruby","markup-templating"],fsharp:"clike","firestore-security-rules":"clike",flow:"javascript",ftl:"markup-templating",gml:"clike",glsl:"c",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup-templating",haxe:"clike",hlsl:"c",java:"clike",javadoc:["markup","java","javadoclike"],jolie:"clike",jsdoc:["javascript","javadoclike","typescript"],"js-extras":"javascript",json5:"json",jsonp:"json","js-templates":"javascript",kotlin:"clike",latte:["clike","markup-templating","php"],less:"css",lilypond:"scheme",markdown:"markup","markup-templating":"markup",mongodb:"javascript",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"c",parser:"markup",php:"markup-templating",phpdoc:["php","javadoclike"],"php-extras":"php",plsql:"sql",processing:"clike",protobuf:"clike",pug:["markup","javascript"],purebasic:"clike",purescript:"haskell",qml:"javascript",qore:"clike",racket:"scheme",jsx:["markup","javascript"],tsx:["jsx","typescript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java","shell-session":"bash",smarty:"markup-templating",solidity:"clike",soy:"markup-templating",sparql:"turtle",sqf:"clike",swift:"clike","t4-cs":["t4-templating","csharp"],"t4-vb":["t4-templating","vbnet"],tap:"yaml",tt2:["clike","markup-templating"],textile:"markup",twig:"markup",typescript:"javascript",vala:"clike",vbnet:"basic",velocity:"markup",wiki:"markup",xeora:"markup","xml-doc":"markup",xquery:"markup"},n={html:"markup",xml:"markup",svg:"markup",mathml:"markup",ssml:"markup",atom:"markup",rss:"markup",js:"javascript",g4:"antlr4",adoc:"asciidoc",shell:"bash",shortcode:"bbcode",rbnf:"bnf",oscript:"bsl",cs:"csharp",dotnet:"csharp",coffee:"coffeescript",conc:"concurnas",jinja2:"django","dns-zone":"dns-zone-file",dockerfile:"docker",eta:"ejs",xlsx:"excel-formula",xls:"excel-formula",gamemakerlanguage:"gml",hs:"haskell",gitignore:"ignore",hgignore:"ignore",npmignore:"ignore",webmanifest:"json",kt:"kotlin",kts:"kotlin",tex:"latex",context:"latex",ly:"lilypond",emacs:"lisp",elisp:"lisp","emacs-lisp":"lisp",md:"markdown",moon:"moonscript",n4jsd:"n4js",nani:"naniscript",objc:"objectivec",objectpascal:"pascal",px:"pcaxis",pcode:"peoplecode",pq:"powerquery",mscript:"powerquery",pbfasm:"purebasic",purs:"purescript",py:"python",rkt:"racket",rpy:"renpy",robot:"robotframework",rb:"ruby","sh-session":"shell-session",shellsession:"shell-session",smlnj:"sml",sol:"solidity",sln:"solution-file",rq:"sparql",t4:"t4-cs",trig:"turtle",ts:"typescript",tsconfig:"typoscript",uscript:"unrealscript",uc:"unrealscript",vb:"visual-basic",vba:"visual-basic",xeoracube:"xeora",yml:"yaml"},p={},e="components/",a=Prism.util.currentScript();if(a){var r=/\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,s=/(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,t=a.getAttribute("data-autoloader-path");if(null!=t)e=t.trim().replace(/\/?$/,"/");else{var i=a.src;r.test(i)?e=i.replace(r,"components/"):s.test(i)&&(e=i.replace(s,"$1components/"))}}var o=Prism.plugins.autoloader={languages_path:e,use_minified:!0,loadLanguages:m};Prism.hooks.add("complete",function(e){var a=e.element,r=e.language;if(a&&r&&"none"!==r){var s=function(e){var a=(e.getAttribute("data-dependencies")||"").trim();if(!a){var r=e.parentElement;r&&"pre"===r.tagName.toLowerCase()&&(a=(r.getAttribute("data-dependencies")||"").trim())}return a?a.split(/\s*,\s*/g):[]}(a);/^diff-./i.test(r)?(s.push("diff"),s.push(r.substr("diff-".length))):s.push(r),s.every(u)||m(s,function(){Prism.highlightElement(a)})}})}function u(e){if(0<=e.indexOf("!"))return!1;if((e=n[e]||e)in Prism.languages)return!0;var a=p[e];return a&&!a.error&&!1===a.loading}function m(e,a,r){"string"==typeof e&&(e=[e]);var s=e.length,t=0,i=!1;function c(){i||++t===s&&a&&a(e)}0!==s?e.forEach(function(e){!function(a,r,s){var t=0<=a.indexOf("!");function e(){var e=p[a];e||(e=p[a]={callbacks:[]}),e.callbacks.push({success:r,error:s}),!t&&u(a)?k(a,"success"):!t&&e.error?k(a,"error"):!t&&e.loading||(e.loading=!0,e.error=!1,function(e,a,r){var s=document.createElement("script");s.src=e,s.async=!0,s.onload=function(){document.body.removeChild(s),a&&a()},s.onerror=function(){document.body.removeChild(s),r&&r()},document.body.appendChild(s)}(function(e){return o.languages_path+"prism-"+e+(o.use_minified?".min":"")+".js"}(a),function(){e.loading=!1,k(a,"success")},function(){e.loading=!1,e.error=!0,k(a,"error")}))}a=a.replace("!",""),a=n[a]||a;var i=l[a];i&&i.length?m(i,e,s):e()}(e,c,function(){i||(i=!0,r&&r(e))})}):a&&setTimeout(a,0)}function k(e,a){if(p[e]){for(var r=p[e].callbacks,s=0,t=r.length;s<t;s++){var i=r[s][a];i&&setTimeout(i,0)}r.length=0}}}();
!function(){var i=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};function e(e){this.defaults=i({},e)}function s(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="\t".charCodeAt(0)&&(n+=3);return e.length+n}e.prototype={setDefaults:function(e){this.defaults=i(this.defaults,e)},normalize:function(e,n){for(var t in n=i(this.defaults,n)){var r=t.replace(/-(\w)/g,function(e,n){return n.toUpperCase()});"normalize"!==t&&"setDefaults"!==r&&n[t]&&this[r]&&(e=this[r].call(this,e,n[t]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(RegExp(" {"+n+"}","g"),"\t")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("\t")+"$&")},breakLines:function(e,n){n=!0===n?80:0|n||80;for(var t=e.split("\n"),r=0;r<t.length;++r)if(!(s(t[r])<=n)){for(var i=t[r].split(/(\s+)/g),o=0,a=0;a<i.length;++a){var l=s(i[a]);n<(o+=l)&&(i[a]="\n"+i[a],o=l)}t[r]=i.join("")}return t.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=e),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=Prism.plugins.NormalizeWhitespace;if((!e.settings||!1!==e.settings["whitespace-normalization"])&&Prism.util.isActive(e.element,"whitespace-normalization",!0))if(e.element&&e.element.parentNode||!e.code){var t=e.element.parentNode;if(e.code&&t&&"pre"===t.nodeName.toLowerCase()){for(var r=t.childNodes,i="",o="",a=!1,l=0;l<r.length;++l){var s=r[l];s==e.element?a=!0:"#text"===s.nodeName&&(a?o+=s.nodeValue:i+=s.nodeValue,t.removeChild(s),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var c=i+e.element.innerHTML+o;e.element.innerHTML=n.normalize(c,e.settings),e.code=e.element.textContent}else e.code=i+e.code+o,e.code=n.normalize(e.code,e.settings)}}else e.code=n.normalize(e.code,e.settings)}))}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var o="line-numbers",a=/\n(?!$)/g,e=Prism.plugins.lineNumbers={getLine:function(e,n){if("PRE"===e.tagName&&e.classList.contains(o)){var t=e.querySelector(".line-numbers-rows");if(t){var i=parseInt(e.getAttribute("data-start"),10)||1,r=i+(t.children.length-1);n<i&&(n=i),r<n&&(n=r);var s=n-i;return t.children[s]}}},resize:function(e){u([e])},assumeViewportIndependence:!0},t=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null},n=void 0;window.addEventListener("resize",function(){e.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,u(Array.prototype.slice.call(document.querySelectorAll("pre."+o))))}),Prism.hooks.add("complete",function(e){if(e.code){var n=e.element,t=n.parentNode;if(t&&/pre/i.test(t.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,o)){n.classList.remove(o),t.classList.add(o);var i,r=e.code.match(a),s=r?r.length+1:1,l=new Array(s+1).join("<span></span>");(i=document.createElement("span")).setAttribute("aria-hidden","true"),i.className="line-numbers-rows",i.innerHTML=l,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(i),u([t]),Prism.hooks.run("line-numbers",e)}}}),Prism.hooks.add("line-numbers",function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0})}function u(e){if(0!=(e=e.filter(function(e){var n=t(e)["white-space"];return"pre-wrap"===n||"pre-line"===n})).length){var n=e.map(function(e){var n=e.querySelector("code"),t=e.querySelector(".line-numbers-rows");if(n&&t){var i=e.querySelector(".line-numbers-sizer"),r=n.textContent.split(a);i||((i=document.createElement("span")).className="line-numbers-sizer",n.appendChild(i)),i.innerHTML="0",i.style.display="block";var s=i.getBoundingClientRect().height;return i.innerHTML="",{element:e,lines:r,lineHeights:[],oneLinerHeight:s,sizer:i}}}).filter(Boolean);n.forEach(function(e){var i=e.sizer,n=e.lines,r=e.lineHeights,s=e.oneLinerHeight;r[n.length-1]=void 0,n.forEach(function(e,n){if(e&&1<e.length){var t=i.appendChild(document.createElement("span"));t.style.display="block",t.textContent=e}else r[n]=s})}),n.forEach(function(e){for(var n=e.sizer,t=e.lineHeights,i=0,r=0;r<t.length;r++)void 0===t[r]&&(t[r]=n.children[i++].getBoundingClientRect().height)}),n.forEach(function(e){var n=e.sizer,t=e.element.querySelector(".line-numbers-rows");n.style.display="none",n.innerHTML="",e.lineHeights.forEach(function(e,n){t.children[n].style.height=e+"px"})})}}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var i=[],l={},c=function(){};Prism.plugins.toolbar={};var e=Prism.plugins.toolbar.registerButton=function(e,n){var t;t="function"==typeof n?n:function(e){var t;return"function"==typeof n.onClick?((t=document.createElement("button")).type="button",t.addEventListener("click",function(){n.onClick.call(this,e)})):"string"==typeof n.url?(t=document.createElement("a")).href=n.url:t=document.createElement("span"),n.className&&t.classList.add(n.className),t.textContent=n.text,t},e in l?console.warn('There is a button with the key "'+e+'" registered already.'):i.push(l[e]=t)},t=Prism.plugins.toolbar.hook=function(a){var e=a.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&!e.parentNode.classList.contains("code-toolbar")){var t=document.createElement("div");t.classList.add("code-toolbar"),e.parentNode.insertBefore(t,e),t.appendChild(e);var r=document.createElement("div");r.classList.add("toolbar");var n=i,o=function(e){for(;e;){var t=e.getAttribute("data-toolbar-order");if(null!=t)return(t=t.trim()).length?t.split(/\s*,\s*/g):[];e=e.parentElement}}(a.element);o&&(n=o.map(function(e){return l[e]||c})),n.forEach(function(e){var t=e(a);if(t){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(t),r.appendChild(n)}}),t.appendChild(r)}};e("label",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-label")){var n,a,r=t.getAttribute("data-label");try{a=document.querySelector("template#"+r)}catch(e){}return a?n=a.content:(t.hasAttribute("data-url")?(n=document.createElement("a")).href=t.getAttribute("data-url"):n=document.createElement("span"),n.textContent=r),n}}),Prism.hooks.add("complete",t)}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document)if(Prism.plugins.toolbar){var i=window.ClipboardJS||void 0;i||"function"!=typeof require||(i=require("clipboard"));var u=[];if(!i){var t=document.createElement("script"),e=document.querySelector("head");t.onload=function(){if(i=window.ClipboardJS)for(;u.length;)u.pop()()},t.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",e.appendChild(t)}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(t){var e=document.createElement("button");e.textContent="Copy",e.setAttribute("type","button");var o=t.element;return i?n():u.push(n),e;function n(){var t=new i(e,{text:function(){return o.textContent}});t.on("success",function(){e.textContent="Copied!",r()}),t.on("error",function(){e.textContent="Press Ctrl+C to copy",r()})}function r(){setTimeout(function(){e.textContent="Copy"},5e3)}})}else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")}();