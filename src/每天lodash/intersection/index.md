# intersection

找出多个数组中的交集，内部调用 baseIntersection 实现

## 关键点

这个判断挺好，是个优化，`mapped[0] === arrays[0]`，如果检测到数据不合规的时候会返回空数组，如果第一项就不合规，那返回的是空数组，那肯定会没有交集，因此可以直接返回空数组。

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.js';
```
