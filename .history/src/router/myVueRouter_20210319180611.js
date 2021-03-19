let Vue = null

class HistoryRoute {
  constructor () {
    this.current = null
  }
}

// 1.new VueRouter 得到的是一个VueRouter的一个实例  所以VueRouter是一个类

class VueRouter {
  // 7 完善vueRouter
  constructor(options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    // 将routes 转化成 key: value的形式
    this.routesMap = this.createMap(this.routes)
    
    // 存放当前路径
    this.history = new HistoryRoute()
    this.init()
  }
  createMap (routes) {
    return routes.reduce((pre, cur) => {
      pre[cur.path] = cur.component
      return pre
    }, {})
  }

  // 判断hash 模式还是 history模式
  init () {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/'
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
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
        Vue.util.defineReactive(this, 'historyRouter', this._router.history)
      } else { // 如果是子组件
        this._root= this.$parent && this.$parent._root
      }
      Object.defineProperty(this,'$router',{
        get(){
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get() {
          return this._root._router.history.current
        }
      })
    }
  })
  Vue.component('router-link', {
    props: {
      to: String
    },
    render (h) {
      // return h('a', {}, '首页（手写）')
      let mode = this._self._root._router.mode
      let to  = mode === 'hash' ? `#${this.to}` : this.to
      console.log(to)
      return h('a', {attrs: {href: to}}, this.$slots.default)
    }
  })
  Vue.component('router-view', {
    render (h) {
      // return h('a', {}, '首页视图（手写）')
      let current = this._self._root._router.history.current
      let routesMap = this._self._root._router.routesMap
      console.log(current, routesMap[current])
      return h(routesMap[current])
    }
  })
}
export default VueRouter

// 1.object.defineproperty
// 2.reduce