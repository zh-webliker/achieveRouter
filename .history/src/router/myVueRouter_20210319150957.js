// 1.new VueRouter 得到的是一个VueRouter的一个实例  所以VueRouter是一个类
class VueRouter {

}
// 2.Vue.use() 中的参数必须是一个function 函数或者一个对象
// 调用install函数的时候 会将vue作为参数传入
VueRouter.install = function () {

}
function install (a, b, c) {
  console.log(arguments)
  const args = toArray(arguments, 1)
  const args1 = toArray(arguments)
  console.log(args, args1)
}
export default VueRouter