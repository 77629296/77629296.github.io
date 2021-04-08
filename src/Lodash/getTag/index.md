# getTag

获取数据类型，直接调用了 Object.prototype.toString，没有做 IE 兼容处理，这也是趋势，据说 vue3 都要抛弃 ie 了

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.ts';
```
