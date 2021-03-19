let Vue = null
// 1.new VueRouter 得到的是一个VueRouter的一个实例  所以VueRouter是一个类
class VueRouter {

}
// 2.Vue.use() 中的参数必须是一个function 函数或者一个对象
// 调用install函数的时候 会将vue作为参数传入
VueRouter.install = function (v) {
  Vue = v
  Vue.mixin({
    beforeCreate () {
      if (this.$options && this.$options.router)
    }
  })
  Vue.component('router-link', {
    render (h) {
      return h('a', {}, '首页（手写）')
    }
  })
  Vue.component('router-view', {
    render (h) {
      return h('a', {}, '首页视图（手写）')
    }
  })
}
export default VueRouter