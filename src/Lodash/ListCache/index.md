# ListCache

和第四个方法类似，ListCache 也是处理缓存的。区别如下：

- Hash 使用 js 对象做缓存，由于对象的限制，key 只能是 string 或者 Symbol 类型，其他类型就不能使用了，对，可以使用 Map。
- ListCache 在不支持 Map 情况下的模拟实现

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.ts';
```
