/**handles:wphb-global,hello-theme-frontend**/
!function(){"use strict";var e={init:function(){this.registerClearAllCache(),this.registerClearNetworkCache(),this.registerClearCacheFromNotice(),this.registerClearCloudflare(),this.registerSafeModeActions()},clearCache:function(e){jQuery.ajax({url:wphbGlobal.ajaxurl,method:"POST",data:{nonce:wphbGlobal.nonce,action:"wphb_clear_caches",modules:[e]}}).done((function(){location.reload()}))},registerClearAllCache:function(){var e=this,t=document.getElementById("wp-admin-bar-wphb-clear-all-cache");t&&t.addEventListener("click",(function(){return e.post("wphb_global_clear_cache")}))},registerClearNetworkCache:function(){var e=document.querySelector("#wp-admin-bar-wphb-clear-cache-network-wide > a");e&&e.addEventListener("click",(function(){void 0!==window.WPHB_Admin?window.SUI.openModal("ccnw-modal","wpbody","ccnw-clear-now"):window.location.href="/wp-admin/network/admin.php?page=wphb-caching&update=open-ccnw"}))},registerClearCacheFromNotice:function(){var e=this,t=document.getElementById("wp-admin-notice-wphb-clear-cache");t&&t.addEventListener("click",(function(){return e.post("wphb_global_clear_cache")}))},registerClearCloudflare:function(){var e=this,t=document.querySelector("#wp-admin-bar-wphb-clear-cloudflare > a");t&&t.addEventListener("click",(function(){return e.post("wphb_front_clear_cloudflare")}))},copyTextToClipboard:function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(e){console.error("Oops, unable to copy",e)}document.body.removeChild(t)},registerSafeModeActions:function(){var e=this,t=document.getElementById("wphb-ao-safe-mode-save");t&&t.addEventListener("click",(function(){t.disabled=!0,e.request("wphb_react_minify_publish_safe_mode").then((function(){window.location.href=wphbGlobal.minify_url+"&safe_mode_status=published"}))}));var n=document.getElementById("wphb-ao-safe-mode-copy");n&&n.addEventListener("click",(function(t){t.preventDefault(),e.copyTextToClipboard(window.location.href);var o="wphb-ao-safe-mode-copy-success";n.classList.add(o),setTimeout((function(){n.classList.remove(o)}),3e3)}))},post:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.request(e).then((function(){t&&location.reload(e)}))},request:function(e){return new Promise((function(t){var n=new XMLHttpRequest;n.open("POST",wphbGlobal.ajaxurl+"?action="+e+"&_ajax_nonce="+wphbGlobal.nonce),n.onload=function(){200===n.status&&t()},n.send()}))}};document.addEventListener("DOMContentLoaded",(function(){e.init()})),window.WPHBGlobal=e}();
//# sourceMappingURL=wphb-global.min.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


class elementorHelloThemeHandler {
  constructor() {
    this.initSettings();
    this.initElements();
    this.bindEvents();
  }
  initSettings() {
    this.settings = {
      selectors: {
        menuToggle: '.site-header .site-navigation-toggle',
        menuToggleHolder: '.site-header .site-navigation-toggle-holder',
        dropdownMenu: '.site-header .site-navigation-dropdown'
      }
    };
  }
  initElements() {
    this.elements = {
      window,
      menuToggle: document.querySelector(this.settings.selectors.menuToggle),
      menuToggleHolder: document.querySelector(this.settings.selectors.menuToggleHolder),
      dropdownMenu: document.querySelector(this.settings.selectors.dropdownMenu)
    };
  }
  bindEvents() {
    var _this$elements$menuTo;
    if (!this.elements.menuToggleHolder || (_this$elements$menuTo = this.elements.menuToggleHolder) !== null && _this$elements$menuTo !== void 0 && _this$elements$menuTo.classList.contains('hide')) {
      return;
    }
    this.elements.menuToggle.addEventListener('click', () => this.handleMenuToggle());
    this.elements.menuToggle.addEventListener('keyup', event => {
      const ENTER_KEY = 13;
      const SPACE_KEY = 32;
      if (ENTER_KEY === event.keyCode || SPACE_KEY === event.keyCode) {
        event.currentTarget.click();
      }
    });
    this.elements.dropdownMenu.querySelectorAll('.menu-item-has-children > a').forEach(anchorElement => anchorElement.addEventListener('click', event => this.handleMenuChildren(event)));
  }
  closeMenuItems() {
    this.elements.menuToggleHolder.classList.remove('elementor-active');
    this.elements.window.removeEventListener('resize', () => this.closeMenuItems());
  }
  handleMenuToggle() {
    const isDropdownVisible = !this.elements.menuToggleHolder.classList.contains('elementor-active');
    this.elements.menuToggle.setAttribute('aria-expanded', isDropdownVisible);
    this.elements.dropdownMenu.setAttribute('aria-hidden', !isDropdownVisible);
    this.elements.menuToggleHolder.classList.toggle('elementor-active', isDropdownVisible);

    // Always close all sub active items.
    this.elements.dropdownMenu.querySelectorAll('.elementor-active').forEach(item => item.classList.remove('elementor-active'));
    if (isDropdownVisible) {
      this.elements.window.addEventListener('resize', () => this.closeMenuItems());
    } else {
      this.elements.window.removeEventListener('resize', () => this.closeMenuItems());
    }
  }
  handleMenuChildren(event) {
    const anchor = event.currentTarget;
    const parentLi = anchor.parentElement;
    if (!(parentLi !== null && parentLi !== void 0 && parentLi.classList)) {
      return;
    }
    parentLi.classList.toggle('elementor-active');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new elementorHelloThemeHandler();
});
/******/ })()
;