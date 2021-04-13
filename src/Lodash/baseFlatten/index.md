# baseFlatten

数组展平

## 要点

1. 核心是传递结果数组 result 进行递归，直到 depth 为 1，push 进数组
2. 暴露 isStrict 参数，用于控制是否过滤不可展平的数据
3. for 循环的区别

- for 循环通用，但不够简洁
- for...in 不能保证顺序，会遍历包括原型链上的可枚举属性
- for...of 用于遍历拥有迭代器的对象，不能遍历普通对象，普通对象使用 for...in，需要使用 hasOwnProperty 检查枚举属性是不是对象自己的

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.js';
```
