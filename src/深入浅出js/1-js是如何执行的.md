---
title: js是如何执行的
order: 1
---

# js 是如何执行的

js 被称为解释型语言，执行流程像这样：词法分析 -> 语法分析 -> 语法树 -> 机器码 -> 执行

![](https://tva1.sinaimg.cn/large/008eGmZEly1gpl9g9r7jyj30iu0a30tv.jpg)

## V8

说到执行 js，不得不提 Google V8 引擎。V8 命名来源于 8 缸发动机。在发动机界，V8 代表着高排量，大马力，高性能。在 js 引擎中，V8 也一直是高性能的代表，使用了多种手段提升执行速度。  
V8 是开源的，但是现阶段的代码比较复杂，我们只是想搞懂 js 运行的流程，所以以最初的 0.1.5 源码版本为例

## 编译原理

> 以 var a = 2;为例
> 这里只介绍下流程，下一节，我们来实现个 babel 解析器

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
