---
title: js是如何执行的
order: 1
---

# 编译时机

![](https://tva1.sinaimg.cn/large/008eGmZEly1gppfwip6vwj30kc0eedh7.jpg)

编译执行: 它首先将源代码转换为中间代码，编译再将中间代码编译成机器代码（二进制），再由机器运行机器码。

- 特点： 运行前编译，启动慢，执行快

解释执行: 同样，它首先将源代码转换为中间代码，之后直接使用解释
器解释执行中间代码，再由解释器对中间代码进行解释运行。

- 特点： 运行时编译，启动快，执行慢

`编译时机`就是 js 和其他编译型语言最大的区别，编译型语言编译后全量转为机器语言，可以直接执行。而 js 则需要运行时来解释，这个解释器被称为 js 引擎。

## js 引擎

js 早期运行在浏览器环境，然而厂商们各自为政，为了掌控自家的浏览器，实现了不同的 js 引擎：

- V8 --> 开源，用于 Chrome 浏览器、NodeJS
- SpiderMonkey --> 用于 Firfox 浏览器
- JavaScriptCore --> 开源，Safari 浏览器
- Chakra --> IE and Edge

这些引擎的共同特点就是实现 ECMAScript 定义的语言标准，但是某些 api 并不一致，所以以前实现个简单功能，往往需要写很长的面条代码，来适配不同的浏览器环境，这就是前端需要处理的部分兼容性问题。

## V8

说到 js 引擎，不得不提 Google V8 。V8 命名来源于 8 缸发动机。在发动机界，V8 代表着高排量，大马力，高性能。同样，在 js 的世界中，V8 一直是高性能的代表，它使用了多种手段提升执行速度。

## JIT（Just In Time）技术

从上文我们已经了解编译执行和解释执行的优缺点，V8 在这两种模式间找了个平衡点，混合使用这两种技术，这就是 JIT。

词法分析 -> 语法分析 -> 语法树 -> 机器码 -> 执行

![](https://tva1.sinaimg.cn/large/008eGmZEly1gpl9g9r7jyj30iu0a30tv.jpg)

## 编译原理

> 以 var a = 2;为例
> 这里只介绍下流程，下一节，我们来顺着 v8 源码来梳理下执行流程

### 词法分析

这个过程会将由字符组成的字符串分解成有意义的代码块，这些代码块被称为词法单元（token）  
上图中的代码会被分解为 5 个词法单元`var` `a` `=` `2` `;`

### 语法分析

这个过程是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（Abstract Syntax Tree，AST）。

```js
{
  "type": "Program",
  "start": 0,
  "end": 187,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 178,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 186,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "name": "a"
          },
          "init": {
            "type": "Literal",
            "start": 185,
            "end": 186,
            "value": 2,
            "raw": "2"
          }
        }
      ],
      "kind": "var"
    }
  ],
  "sourceType": "module"
}
```

### 代码生成

将 AST 转换为可执行代码的过程称被称为代码生成。这个过程与语言、目标平台等息息相关。

[Chrome V8 让你更懂 JavaScript](https://segmentfault.com/a/1190000037435824)
