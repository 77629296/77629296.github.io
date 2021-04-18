# findLastIndex

在负数的情况下，其实相当于 `length` 减少指定的数字，得到一个 `index`，这个 `index` 可能为负数，因为需要取`0` 和这个数字的最大值。
Math.max(length + fromIndex, 0)

在正数的情况下,取 `length - 1` 和 `fromIndex` 的最小值即可，避免超出数组的长度。
Math.min(fromIndex, length - 1)

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.js';
```
