# MapCache

之前介绍了 Hash 和 MapCache 方法，Hash 利用了 js 对象的 key，value 作为缓存，MapCache 则处理了 js 对象不支持的 key 时的情况。
如果让用户自行来区分使用，成本比较高，如果提供一个通用的方法，根据用户要缓存的数据，自行决定使用哪种方案不是更友好吗？它来了，MapCache 的工作就是这个

## 1.要点

代码实现和之前的 Hash/MapCache 类似，第一次看时，比较迷惑的一点是，当可作为对象 key 时，又单独区分了 key 类型为 string 的情况，其他则存到了 hash 下，这是为什么呢？经过查阅资料，得出以下结论

1. 对象的 key，如果不是 Symbol 类型时，会转为字符串形式
2. 如果缓存的数据中存在数字 1 和字符串'1'，那么只会存储为字符串 1，这就是问题所在了

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.ts';
```
