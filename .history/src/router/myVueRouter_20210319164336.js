let Vue = null
// 1.new VueRouter 得到的是一个VueRouter的一个实例  所以VueRouter是一个类
class VueRouter {
  // 7 完善vueRouter
  constructor(options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    // 将routes 转化成 key: value的形式
    this.routesMap = createMap(this.routes)
  }
  createMap (routes) {
    return 
  }
}
// 2.Vue.use() 中的参数必须是一个function 函数或者一个对象
// 调用install函数的时候 会将vue作为参数传入
VueRouter.install = function (v) {
  Vue = v
  Vue.mixin({
    beforeCreate () { // ???
      if (this.$options && this.$options.router) { // 如果是根组件
        this._root = this
        this._router = this.$options.router
      } else { // 如果是子组件
        this._root= this.$parent && this.$parent._root
      }
      Object.defineProperty(this,'$router',{
        get(){
          return this._root._router
        }
      })
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

// 1.object.defineproperty
// 2.reduce