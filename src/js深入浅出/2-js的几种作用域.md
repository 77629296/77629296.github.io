---
title: js的几种作用域
---

# js 的几种作用域

几乎所有编程语言就是在变量中存储值，并且能读取和修改此值。事实上，在变量中`存储值`和`取出值`的能力，给程序赋予了`状态`。  
但是这些变量该存储在哪，又给如何读取？为了完成这个目标，需要制定一些规则，这个规则就是：`作用域`。

常见的 js 作用域  
| 对象 | 类型 |
| -- | -- |
| global/window | 全局作用域 |
| function | 函数作用域（局部作用域） |
| this | 动态作用域 |
| {} | 块状作用域（es6） |

## Just-in-time(JIT 编译器)的工作原理

虽然 js 被称为解释型语言，但它也需要编译，因为计算机只认识机器语言

1. 源代码经过词法、语法分析，生成抽象语法树（AST）
2. 根据抽象语法树生成字节码
3. 根据字节码执行程序

### v8 引擎

说到 js 执行，不得不提大名鼎鼎的 v8 引擎，我们以 v8 为例，看下执行流程图  
我们平时写的代码经过词法分析

你不知道的 js 中有个形象的比喻

> 把程序中的`嵌套作用域链`比作一座大楼。如果一楼代表`当前执行作用域`。顶层代表`全局作用域`。  
> 当访问变量时，先在当前楼层进行查找，如果没有找到，就会坐电梯前往上一层楼，如果还是没有找到就继续向上，以此类推。一旦抵达顶层（全局作用域）

## 函数作用域

JavaScript 具有基于函数的作用域，当我们把代码片段外部添加函数，可以将内部的变量和函数定义`隐藏`起来，外部作用域无法访问函数内部的任何内容

例如下面这段代码：

```js
function foo() {
  var a = 2;
  console.log(a); // 2 当前作用域
}
foo();
console.log(a); // ReferenceError: a is not defined
```

```js
var a = 1;
function foo() {
  var a = 2;
  console.log(a); // 2 当前作用域
}
foo(); // foo执行后出栈，就像这个函数从来不存在一样
console.log(a); // 1 全局作用域
```

foo 拥有内部变量，这样看似实现了封装的目的，但是这么做有几个问题，后面会有更好的方案

- 要额外创建 foo 函数
- 污染当前作用域（这段代码之前或之后存在其他 foo 变量，可能导致异常）
- 必须显式调用 foo 函数

#### IIFE 立即执行函数表达式

继续刚才 foo 封装的话题，有没有这样一种函数，没有名称，而且还能自执行呢，这样就解决了以上的几个问题。既然这么问了肯定有。。

例如下面这段代码：

```js
var a = 1;
(function foo() {
  var a = 2;
  console.log('我来自内部', foo); // 我来自内部 ƒ foo() {...}
  console.log(a); // 2 局部变量
})();
console.log(a); // 1 全局变量
console.log(foo); // ReferenceError: foo is not defined foo 去哪了???
```

what？发生了什么，内部变量访问不了还说得过去，怎么 foo 函数也没了？想搞明白这个，先了解一下`函数声明`和`函数表达式`的区别，仔细看下函数表达式的`作用域绑定`就清楚了。

函数表达式：常见的以`(!+-~`等开头的，都是函数表达式。箭头函数也是。

- function 不是声明的第一个词
- 作用域绑定 绑定在函数表达式自身的函数中
- function 是否命名都一样, 这里只是为了输出展示，当然如果没有名称，内部可以通过 arguments.callee 来获取当前执行的函数
- 比如 (function foo(){ .. }) foo 只能在.. 所代表的位置中被访问，外部作用域则不行

```js
// 这些都是函数表达式
!(function() {})();
+(function() {})();
-(function() {})();
~(function() {})();
void (function() {})();
new (function() {})();

(function() {}.call());
(function() {}.call());
// 这两种方式，会有不好的情况：如果括号前面有东西
a(function() {}).call();
//等价于
a().call();
```

函数声明：这个就不用介绍了，平时一直在用

- function 是声明中的第一个词
- 作用域绑定 绑定在函数所在的作用域
- 比如 function foo() {} foo 被绑定在声明时的作用域 例子中是全局 也就是 window

## 块作用域

### JavaScript 没有块作用域？

除 JavaScript 外的很多编程语言都支持`块作用域`，那么 JavaScript 没有`块作用域`吗？  
可以理解为 JavaScript 中，只有函数作用域，全局作用域，**没有块作用域**。特殊情况除外（后面会说到 try cache/let/const）

例如下面这段代码：

```js
// 同步执行 依次输出0-9
console.log('变量提升 ', i); // 变量提升 undefined
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log('循环执行完毕 全局变量 ', i); // 循环执行完毕 全局变量 10
```

上面这个比较好理解，因为代码是同步的，执行顺序和书写顺序一致，从上到下依次执行。下面我们增加使用定时器模拟异步操作

```js
// 异步执行 输出10次10
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    // console执行时 for循环已经执行完毕 此时i=10
    console.log(i);
  }, 0);
}
console.log('循环执行完毕 全局变量 ', i); // 循环执行完毕 全局变量 10
```

异步代码和我们平时的认知不同，执行顺序和书写不一致。我们简单分析下执行过程：

1. 执行 for 循环 遇到异步代码 依次在事件队列尾部添加回调。这里添加 10 次
2. 执行最后一句 console
3. 同步任务执行完毕，就去事件队列中查找需要执行的事件，这里是 setTimeout 的回调，然后同步的执行，输出全局变量 i，此时循环已经执行完毕，i 是 10，所以输出 10 个 10

### JavaScript 实现块作用域

#### try/catch

```js
try {
  undefined(); // 执行一个非法操作来强制制造一个异常
} catch (err) {
  console.log(err); // 能够正常执行！
}

console.log(err); // ReferenceError: err not found
```

#### let/const

es5 引入了 let/const，用于创建块作用域，而且声明的变量不再提升作用域。还是以经典的 for 循环为例：

```js
// 异步执行 依次输出0-9
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// 这样也行
for (var i = 0; i < 10; i++) {
  let j = i; // 这里创建了块级作用域
  setTimeout(() => {
    console.log(j);
  }, 0);
}
```

同样是异步执行，为啥这里就不是 10？

1. 循环内部使用 let 创建了块级作用域，变量 i 查找时，使用块级作用域内的值。
2. 因为 setTimeout 内部函数引用了变量 i，循环执行完毕，定时器执行前，变量 i 还没有被回收。

#### IIFE 立即执行函数（模拟块作用域）

```js
// 异步执行 依次输出0-9 （利用闭包改造）
for (var i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(() => {
      // console执行时 j取的是当前作用域中的值 所以输出0-9
      console.log(j);
    }, 0);
  })(i);
}

// 还可以这样
for (var i = 0; i < 10; i++) {
  (function() {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, 0);
  })();
}
```

这里的原因和上面的 let/const 相同，唯一的区别是，这里的变量 i 来自闭包函数创建的作用域

[for 循环中 let、var 问题](https://blog.csdn.net/a__person/article/details/103780967)
