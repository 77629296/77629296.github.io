# strictIndexOf

和原生 indexOf 一致，采用严格比较查找，区别是这里没有处理 fromIndex 为负数的情况

## 1.要点

刚看这个方法是怀疑它的必要性，原生 indexOf 不能用吗？  
当然，这也是 lodash 比较细节的一点，作为内部方法使用

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.ts';
```
