

function Vue (options) {
  const vm = this
  vm.$options = options
  this._init(vm)
}

initMixin(Vue)

function initMixin (Vue) {
  Vue.prototype._init = function (vm) {
    console.log(vm);
  }

}

export default Vue