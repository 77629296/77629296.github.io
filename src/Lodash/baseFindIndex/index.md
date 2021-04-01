# baseFindIndex

根据条件返回索引值

## 1.要点

优先级？加个括号不好吗？[运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```js
// while循环中，源码如下，阅读不太友好，根据优先级加了括号
// 比较运算符的优先级为11，而三元表达式（条件运算符）的优化级为4
fromRight ? index-- : ++index < length;
// fromRight ? index-- : (++index < length)
```

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.ts';
```
