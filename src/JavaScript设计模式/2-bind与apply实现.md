# 第二章 bind 与 apply 实现

## bind

```js
Function.prototype.mockBind = function (context) {
  // this就是调用方，也就是需要绑定this的函数
  var that = this
  // 截取调用mockBind时，传入的其他参数
  var args = Array.prototype.slice.call(arguments, 1)

  // 处理new关键字调用的场景
  var F = function () {}
  // 指向调用方的构造函数
  F.prototype = this.prototype

  var innerBind = function () {
    // 此时arguments是mockBind返回的函数，再次调用时传入的参数
    var innerArgs = Array.prototype.slice.call(arguments)
    // 合并参数
    var finalArgs = args.concat(innerArgs)
    // 如果是F的示例 说明是使用new关键字调用
    return that.apply(this instanceof F ? this : context || this, finalArgs)
  }
  innerBind.prototype = new F()
  return innerBind
}
```

测试一下

```js
function sourceFoo(a) {
  this.a = a
}
const targetObj = {}
var bindFoo = sourceFoo.mockBind(targetObj)
bindFoo(2)
console.log(targetObj.a) // 2

var newBindObj = new bindFoo(3)
console.log(newBindObj.a) // 3
```

## apply

```js
Function.prototype.mockApply = function (context) {
  var args = Array.prototype.slice.call(arguments, 1)

  if (typeof context === 'object') {
    context = context || window
  } else {
    context = Object.create(null)
  }
  //es6 symbol()表示唯一值；作为属性的时候，不能使用点运算符
  var targetFnKey = Symbol()

  // 函数体内的this指向调用mockApply的函数
  context[targetFnKey] = this

  // 隐式绑定 把函数体内的this绑定到context上
  var result = context[targetFnKey](...args)

  delete context[targetFnKey]
  return result
}
```

测试一下

```js
function sourceFoo(a) {
  this.a = a
  console.log(this)
}
var targetObj = {}
// targetObj = {
//   Symbol(): ƒ
// }
// 如上所示，再次调用f时 f内的this就指向了targetObj 参考定律4：上下文对象隐式绑定
sourceFoo.mockApply(targetObj, 2)
```
