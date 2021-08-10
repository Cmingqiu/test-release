(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

  function Vue(options) {
    var vm = this;
    vm.$options = options;

    this._init(vm);
  }

  initMixin(Vue);

  function initMixin(Vue) {
    Vue.prototype._init = function (vm) {
      console.log(vm);
    };
  }

  return Vue;

})));
