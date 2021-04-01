# 第二章 this 到底指向谁

## 5 大定律

### Rule 1

函数体中，**隐式**调用函数时，指向 window（nodejs 中是 global）。当然，严格模式下就是 undefined

```js
function implicitCall() {
  console.log(this)
}
function implicitCallStrict() {
  'use strict'
  console.log(this)
}
implicitCall() // window
implicitCallStrict() // undefined
```

### Rule 2

通过 call/apply/bind **显式**调用函数时，this 指向指定参数的对象

> 这里需要注意，如果 bind 返回的函数，用 new 操作符调用，此时 bind 绑定的 this 就会忽略，this 会绑定在示例上

```js
const target = {}
// 以下三种写法是等价的
fn.call(target, 'arg1', 'arg2')
fn.apply(target, ['arg1', 'arg2'])
fn.bind(target, 'arg1', 'arg2')()
```

### Rule 3

使用 **new** 方法调用构造函数时，构造函数内的 this 指向新创建的对象

```js
function Foo() {
  this.name = 'new method'
}
const foo = new Foo()
console.log(foo.name) // new method
```

### Rule 4

通过**上下文对象**调用函数时，函数体内的 this 指向最后调用它的对象

```js
const contextObject = {
  name: 'context',
  fun: function () {
    return this
  },
}
console.log(contextObject.fun() === contextObject) // true

const wrapperContextObject = {
  name: 'wrapperContext',
  contextObject,
}

// 最后调用它的对象时contextObject
console.log(wrapperContextObject.contextObject.fun() === contextObject) // true
```

### Rule 5

**箭头函数**中，this 的指向由外层作用域决定

```js
// 利用下setTimeout
const normalFunction = {
  fun: function () {
    setTimeout(function () {
      console.log(this === window)
    })
  },
}
normalFunction.fun() // true

// 使用箭头函数改造下
const arrowFunction = {
  fun: function () {
    console.log(this === arrowFunction)
  },
}

arrowFunction.fun() // true
```
