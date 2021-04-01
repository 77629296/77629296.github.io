# SetCache

MapCache 缓存 key/value 形式的数据，SetCache 提供了更便捷的方式，用于缓存数组中的值，把 value 作为 key，固定标识作为 value

## 1.要点

constructor 中 new MapCache 没有加括号，new 对象时，如果不需要传参时，加不加括号都一样，只是调用时需要注意下运算符的优先级

```js
new MapCache().add();
// 报错 先执行MapCache.add，因为new运算符的优先级高于.
new MapCache.add();
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
